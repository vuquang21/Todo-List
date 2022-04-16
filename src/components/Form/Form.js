import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const Form = (props) => {
  const [todo, setTodo] = useState('')
  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log(todo)
    
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: todo,
    })
    setTodo('')
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <Card className='flex flex-col justify-center'>
      <form className='flex flex-col w-[100%] max-w-[40rem] p-4  my-auto'
        onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={todo}
          placeholder='Enter todo...'
          onChange={handleChange}
          className='flex w-[100%] mb-4 border-2 focus:outline-none' />
        <Button type='submit'>Add</Button> 
      </form>
    </Card>
  )
}

export default Form