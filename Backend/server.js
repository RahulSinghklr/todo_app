require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes'); // Ensure correct path

const app = express();

// ✅ Middleware
app.use(express.json()); 
app.use(cors()); 

// ✅ API Routes
app.use('/api/todos', todoRoutes);

// ✅ Ensure MONGO_URI is Set
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing from the environment variables.");
    process.exit(1);
}

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    });

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
