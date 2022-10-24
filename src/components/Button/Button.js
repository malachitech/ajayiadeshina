import React from 'react'
import styles from './Button.module.css'

function Button({text, clickHandler}) {
  return (
    <div className={styles.btn}>
        <button onClick={clickHandler}>{text}</button>
    </div>
  )
}

export default Button