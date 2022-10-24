import React from 'react'
import styles from './Button.module.css'

function LinkBtn({route, text, color, bg}) {
  return (
    <div className={styles.linkBtn}>
        <a href={route} target="_blank" rel="noreferrer" style={{color:color, backgroundColor: bg}}>
            {text}
        </a>
    </div>
  )
}

export default LinkBtn