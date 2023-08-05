const {model, Schema}  = require('mongoose')
const { compile } = require('sass')

const todoSchema = new Schema({
    title:{type:String, required:true},
    compeleted:{type:Boolean, required:true}
},{
    timestamps:true
})

const Todo = mode;('Todo', todoSchema)

module.exports = Todo