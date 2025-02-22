const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: { type: String, required: true },  // Task text (required)
    completed: { type: Boolean, default: false }  // Status (default: false)
});

module.exports = mongoose.model('Todo', TodoSchema);
