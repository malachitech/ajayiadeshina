import React from 'react'
import LinkBtn from '../Button/LinkBtn'
import SubTitle from '../Title/SubTitle'
import Title from '../Title/Title'
import styles from './Cards.module.css'

function Cards({title, description, link, darkMode}) {
  return (
    
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            <SubTitle text={title} />
        </div>

        <div className={styles.cardDescription}>
            <Title text={description} />
        </div>
        
        <div className={styles.cardBtn}>
            <LinkBtn route={link} text='More-->' color={darkMode? 'black':'goldenrod'} bg={darkMode? 'white':'black'} />
        </div>
        
    </div>


    
  )
}

export default Cards