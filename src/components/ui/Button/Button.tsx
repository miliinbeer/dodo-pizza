import React from 'react'

interface ButtonType {
  onClick: () => void,
  className: string,
  children: string
}

export const Button = ({onClick, className ,children}: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>{ children}</button>
  )
}
