import React from 'react'

const Card = (props) => {
  return (
    <div 
        className={`bg-white rounded-[10px] || ${props.className}` }>{props.children}</div>
  )
}

export default Card