import React from 'react'
import styles from './Title.module.css'

function SubTitle({text}) {
  return (
    <div className={styles.subtitle}>
        <h3>{text}</h3>
    </div>
  )
}

export default SubTitle