const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Routes
router.post('/add', async (req, res) => {
    try {
        const newTodo = new Todo({ text: req.body.text });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Ensure this export is correct
module.exports = router;

