import React from 'react'

interface ButtonType extends React.PropsWithChildren {
  onClick: () => void,
  className: string,
}

export const Button = ({onClick, className ,children}: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>{ children}</button>
  )
}
