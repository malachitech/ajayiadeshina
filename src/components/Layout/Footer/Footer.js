import React from 'react'
import LinkBtn from '../../Button/LinkBtn'
import styles from './Footer.module.css'
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.footer}>

        <div className={styles.socials}>
            <a  href='https://www.facebook.com/shinax4christ'  target="_blank" rel="noreferrer">
                <BsFacebook />
            </a>
            <a href='https://www.linkedin.com/in/adeshina-ajayi-57388916b'  target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href='https://twitter.com/ajayiadeshinam'  target="_blank" rel="noreferrer">
                <BsTwitter />
            </a>
            <a href='https://www.instagram.com/invites/contact/?i=1cdwn817bf8g1&utm_content=1cj7j23'  target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
        </div>

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