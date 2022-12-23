import React from 'react'
import Articles from '../../Articles/Articles'
import styles from './ArticlesScreen.module.css'

function ArticlesScreen({darkMode}) {
  return (
    <div className={styles.articles} style={darkMode? {backgroundColor: 'black', color: 'white'}: 
    {backgroundColor: 'white', color: 'black'}}>
        <Articles darkMode={darkMode} />
    </div>
  )
}

export default ArticlesScreen