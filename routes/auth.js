const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Athlete = require('../models/athlete'); // Asegúrate de que esta ruta es correcta

const router = express.Router();

router.post('/login', async (req, res) => {
    const { identification, password } = req.body;

    if (!identification || !password) {
        return res.status(400).send('Both identification and password are required');
    }

    try {
        const athlete = await Athlete.findOne({ identification }).select("+password");

        if (!athlete) {
            return res.status(401).send('Invalid credentials');
        }

        const hashedPassword = athlete.password;
        if (typeof password !== 'string' || typeof hashedPassword !== 'string') {
            return res.status(500).send('Error: Contraseña no son string');
        }
        
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: athlete._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error in login route:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
