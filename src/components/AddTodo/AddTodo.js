import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddTodo.module.css';
import Button from '../UI/Button';

const AddTodo = props => {

    const [enteredTodo, setEnteredTodo] = useState('');

    const addTodoHandle = (event) => {
        event.preventDefault();
        console.log(enteredTodo);
        if (enteredTodo.trim().length === 0) {
            return;
        }
        props.onAddTodo(enteredTodo, false);
        setEnteredTodo('');
    };
    const todoChangeHandle = (event) => {
        setEnteredTodo(event.target.value);
    }; 

    return (
        <Card className={classes.todo}>
            <form onSubmit={addTodoHandle}>
                <input type='text' id='todo' 
                placeholder='Enter yourt todo'
                value={enteredTodo} onChange={todoChangeHandle} />
                <Button type='submit'>Add</Button>
            </form>
        </Card>
    );
};

export default AddTodo;