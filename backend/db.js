const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bhairusinghkanawat2004:DT42IxxOymd3YfUp@bhairu2022.wjynw.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.export = {
    todo: todo
}