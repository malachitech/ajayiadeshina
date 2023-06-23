import React from 'react'
import LinkBtn from '../../Button/LinkBtn'
import styles from './Footer.module.css'
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
// import { Link } from 'react-router-dom';
function Footer({darkMode}) {
    
  return (
    <div className={styles.footer}
      style={darkMode? {backgroundColor: 'black', color: 'white'}: 
      {backgroundColor: 'rgba(238, 235, 235, 0.966)', color: 'black'}}
    >

        <div className={styles.socials}>
            <a
              href='https://www.facebook.com/shinax4christ'
              style={darkMode? {color: 'white'}: 
                {color: 'black'}}
               target="_blank" rel="noreferrer">
                <BsFacebook />
            </a>
            <a 
            style={darkMode? {color: 'white'}: 
                {color: 'black'}}
            href='https://www.linkedin.com/in/adeshina-ajayi-57388916b'  target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a 
            style={darkMode? {color: 'white'}: 
                {color: 'black'}}
            href='https://twitter.com/ajayiadeshinam'  target="_blank" rel="noreferrer">
                <BsTwitter />
            </a>
            <a 
            style={darkMode? {color: 'white'}: 
                {color: 'black'}}
            href='https://www.instagram.com/invites/contact/?i=1cdwn817bf8g1&utm_content=1cj7j23'  target="_blank" rel="noreferrer">
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
            {/* <Link to='/uber'>uber</Link> */}
            </p>
        </div>

        
    </div>
  )
}

export default Footer