require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If using CORS
const todoRoutes = require('./routes/todoRoutes'); // Ensure correct path

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // If using CORS

app.use('/api', todoRoutes); // Make sure `todoRoutes` is correctly imported


  module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
  };



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
