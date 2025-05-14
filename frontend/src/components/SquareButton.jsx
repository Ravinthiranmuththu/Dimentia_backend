import React from 'react'

const SquareButton = ({ text, onClick, type = "button", className }) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={className}>
        {text}
    </button>
  )
}

export default SquareButton