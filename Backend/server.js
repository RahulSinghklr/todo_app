const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If using CORS
const todoRoutes = require('./routes/todoRoutes'); // Ensure correct path

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // If using CORS

app.use('/api', todoRoutes); // Make sure `todoRoutes` is correctly imported

mongoose.connect('mongodb://127.0.0.1:27017/todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
