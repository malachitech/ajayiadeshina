import React from 'react'
import LinkBtn from '../../Button/LinkBtn'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.owner}>
            <LinkBtn route='http://www.digital-focus.org/' color='black' bg='goldenrod' text='Go to Digital Focus' />
        </div>

        <div className={styles.licsence}>
            <p>
                &copy;2022
            </p>
        </div>

        <div className={styles.owner}>
            <p>
                ADESHINA AJAYI
            </p>
        </div>

        
    </div>
  )
}

export default Footer