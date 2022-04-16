import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (todo.length === 0) { 
            return 
        } 
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updatedTodo = (todoId, newValue) => {
        
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }


    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodo)
    }
    return (
        <div>
            <Form onSubmit={addTodo} />
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo} 
            updatedTodo={updatedTodo} />
        </div>
    )
}

export default TodoList