import React from 'react'

const Button = (props) => {
  return (
    <button className='block bg-[#741188] items-center self-center mx-1 my-auto focus:outline-none
    text-white px-8 py-1 rounded-[5px]'
    type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button