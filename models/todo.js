// Mongoose Schema and Models goes here
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {type: String, minlength: 5},
  description: {type: String, default: 'default description of task'},
  completed: {type: Boolean, default: false}
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
