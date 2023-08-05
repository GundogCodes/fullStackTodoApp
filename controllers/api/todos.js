const Todo = require('../../models/todos')

module.exports = { // could also write it the traditional way we have been writing it
    // these are then hoisted
    create,
    indexCompleted,
    indexNotCompleted,
    show,
    update,
    destory,
    jsonTodos,
    jsonTodo
}

function jsonTodo(_,res){ //function declaration cause arrow functions dont hoist
    res.json(res.locals.data.todo) //res.locals.data saves the todo as a json locally

}

function jsonTodos (_,res){ // not using req so dont we just put underline there
    res.json(res.locals.data.todos)
}

/******* C - CREATE *******/
async function create(req,res,next){
    try {
        const todo =  await Todo.create(req.body)
        console.log(todo)
        res.locals.data.todo = todo 
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
/******* R - READ *******/

async function indexCompleted(req,res){
    try {
        const todos = await Todo.find({compeleted:true})
        res.locals.data.todos = todos
        next()
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}

async function indexNotCompleted(req,res,next){
    try {
        const todos = await Todo.find({compeleted:false})
        res.locals.data.todos = todos
        next()
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}

async function show (req,res,next){
    try {
        const todo = await Todo.findOne({_id:req.params.id})
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

/******* U - UPDATE *******/

async function update (req,res,next){
    try {
        const todo = await Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.locals.data.todo = todo 
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

/******* D - DELETE  *******/

async function destory (req,res,next){
    try {
        const todo = await Todo.findOneAndDelete({_id:req.params.id})
        res.locals.data.todo = todo 
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}