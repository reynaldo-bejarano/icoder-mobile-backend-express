const express = require("express");
const Cita = require("../models/cita");

const router = express.Router();

router.post("/cita", async (req, res) => {
  const { id } = req.body;
  const IDNumber = parseInt(id);

  try {
    const getDatesByAthlete = await Cita.find({
      athlete_id: IDNumber,
    });

    res.json({
      getDatesByAthlete,
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
