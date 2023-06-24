import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import LinkBtn from '../../Button/LinkBtn';
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import logo from '../../images/logo.jpg'
import {BsToggle2On, BsToggle2Off} from 'react-icons/bs'

function Navbar({toggleDarkMode, darkMode}) {
    const [showNavbar, setShowNavbar]  = useState(false)

    const showNavbarToggler = () => {
        setShowNavbar(prev => !prev)
    }
    
  return (

    <div className={styles.navbar}>
        {/* project name */}
        <div>
            
            <img src={logo} alt="ajayi adeshina" height='40px' width='120px' />

        </div>
        
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


        {/* full screen menu */}
        <div className={styles.fullScreenMenu}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/books'>My Books</Link>
            <Link to='/media'>Media Mention</Link>
            <Link to='/articles'>Blockchain Articles</Link>
            <Link to='/testimonies'>Testimonies</Link>
            <Link to='/works'>Work</Link>
            <div className={styles.owner}>
                <LinkBtn route='http://www.digital-focus.org/' color='black' bg='goldenrod' text='Go to Digital Focus' />
            </div>
        </div>

        <div className={styles.togglers}>
            {/* dark moode toggler */}

            <div className={styles.darkmodetoggler} onClick={toggleDarkMode}>
                {darkMode? <BsToggle2On /> : <BsToggle2Off />}
            </div>
            
            {/* navigation */}
            <div className={styles.navToggler} onClick={showNavbarToggler}>
            

                <BsFillMenuButtonWideFill />
            </div>
        </div>

        {/* drop down menu */}
        {showNavbar &&
            <div className={styles.dropDownMenu}>
                <Link to='/' onClick={showNavbarToggler}>Home</Link>
                <Link to='/about' onClick={showNavbarToggler}>About</Link>
                <Link to='/books' onClick={showNavbarToggler}>My Books</Link>
                <Link to='/media' onClick={showNavbarToggler}>Media Mention</Link>
                <Link to='/articles' onClick={showNavbarToggler}>Blockchain Articles</Link>
                <Link to='/testimonies' onClick={showNavbarToggler}>Testimonies</Link>
                <Link to='/works' onClick={showNavbarToggler}>Work</Link>

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
        
            </div>
        }
        
    </div>
  )
}

export default Navbar