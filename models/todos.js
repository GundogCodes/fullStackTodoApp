const {model, Schema}  = require('mongoose')
const { compile } = require('sass')

const todoSchema = new Schema({
    title:{type:String, required:true},
    completed:{type:Boolean, required:true}
},{
    timestamps:true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo