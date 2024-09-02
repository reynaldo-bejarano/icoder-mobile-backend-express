const mongoose = require('mongoose');

const conn = {
    isConnected: false,
};

const connectDB = async () => {
    const { MONGODB_URI } = process.env;

    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI should be defined');
    }

    try {
        if (conn.isConnected) return;
        await mongoose.connect(MONGODB_URI);
        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB connected');
            conn.isConnected = true;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error connecting to MongoDB:', error);
            throw new Error('Error connecting to MongoDB');
        }
    }


};

module.exports = connectDB;



