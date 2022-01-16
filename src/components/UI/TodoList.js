import React, { useState } from 'react';
import classes from './TodoList.module.css';
import Card from './Card';

const TodoList = props => {
    const [completeTodo, setcompleteTodo] = useState(false);

    const completeHandle = () => {
        setcompleteTodo(true);
    };

    return (
        <Card className={classes.todoList}>
            <ul>
                {props.todoList.map(item => 
                <li key={item.id}
                onClick={completeHandle}
                className={completeTodo ? classes.complete : classes.uncomplete}>
                
                    {item.title}</li>)}
            </ul>
        </Card>
    )
};

export default TodoList;