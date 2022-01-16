import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/UI/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandle = (todo, flag) => {
    setTodoList(prevTodo => {
      return [...prevTodo, { id: Math.random().toString(), title: todo, flag: flag }]
  });
};
return (
  <div className="App">
    <AddTodo onAddTodo={addTodoHandle}/>
    <TodoList todoList={todoList} />
  </div>
);
}

export default App;
