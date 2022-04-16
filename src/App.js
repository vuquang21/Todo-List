import React from 'react';
import TodoList from './components/Form/TodoList';


function App() {

  return (
    <div className="flex justify-center h-[100vh] w-[100%] bg-zinc-800">
      <div className='block w-[40%] h-[18%] mt-8'>
      <h1 className='self-center text-xl text-white align-center'>What's the Plan for today?</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
