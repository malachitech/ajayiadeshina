import React from 'react'
import Articles from '../../Articles/Articles'
import styles from './ArticlesScreen.module.css'

function ArticlesScreen() {
  return (
    <div className={styles.articles}>
        <Articles />
    </div>
  )
}

export default ArticlesScreen