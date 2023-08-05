const express = require('express')

const router = express.Router()

const todoCtrl = require('../../controllers/api/todos')

// Index incompleted

router.get('/', todoCtrl.indexNotCompleted, todoCtrl.jsonTodos)

// Index completed
router.get('/completed', todoCtrl.indexCompleted, todoCtrl.jsonTodo)

//  Delete

router.delete('/:id', todoCtrl.destory, todoCtrl.jsonTodo)

// Update

router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)

// Create

router.post('/', todoCtrl.create, todoCtrl.jsonTodo)

// Show

router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router

//btw order of routes matter (INDUCES)