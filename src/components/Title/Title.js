import React from 'react'
import styles from './Title.module.css'

function Title({text, color}) {
  return (
    <div className={styles.title}>
        <h2 style={{color: color}} >{text}</h2>
    </div>
  )
}

export default Title