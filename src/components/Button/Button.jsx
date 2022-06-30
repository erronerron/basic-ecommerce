import React from 'react'
import style from './Button.module.css'

function Button({ onClick, type = 'button', text }) {
  return (
    <button className={style.btn} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
