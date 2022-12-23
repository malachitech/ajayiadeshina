import React from 'react'
import Work from '../../Work/Work'
import styles from './WorksScreen.module.css'

function WorksScreen({darkMode}) {
  return (
    <div className={styles.workscreen} style={darkMode? {backgroundColor: 'black', color: 'white'}: 
    {backgroundColor: 'white', color: 'black'}}>
        <Work darkMode={darkMode}/>
    </div>
  )
}

export default WorksScreen