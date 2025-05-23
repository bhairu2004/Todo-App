const mongoose = require('mongoose');

mongoose.connect(//
//mongoDb url
);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}