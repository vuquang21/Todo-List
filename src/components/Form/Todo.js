import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import Card from '../UI/Card'
import Form from './Form'
import classes from './style.module.scss'

const Todo = ({todos, completeTodo, removeTodo, updatedTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        updatedTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <Card className={`'flex flex-row justify-between mt-4 px-8 py-4' ${todo.isComplete} ? ${classes.isComplete} : '' `}>
            <div className={todo.isComplete ? `${classes.isComplete}` : ''} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            </div>
            <div className='flex flex-row gap-4 justify-center self-center'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id) } className='cursor-pointer' />
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text}) } className='cursor-pointer' />
            </div>
        </Card>
    ))
}

export default Todo