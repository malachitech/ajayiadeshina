import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { BsFillMenuButtonWideFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import LinkBtn from '../../Button/LinkBtn';
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

function Navbar() {
    const [showNavbar, setShowNavbar]  = useState(false)

    const showNavbarToggler = () => {
        setShowNavbar(prev => !prev)
    }
  return (
    <div className={styles.navbar}>
        {/* project name */}
        <div>
            <h1>
                <BsFillPersonFill /> Adeshina Ajayi
            </h1>
        </div>

        {/* navigation */}
        <div className={styles.toggler} onClick={showNavbarToggler}>
            <BsFillMenuButtonWideFill />
        </div>

        {/* full screen menu */}
        <div className={styles.fullScreenMenu}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/books'>My Books</Link>
            <Link to='/media'>Media And Achievements</Link>
            <Link to='/work'>Work</Link>
            <div className={styles.owner}>
                <LinkBtn route='http://www.digital-focus.org/' color='black' bg='goldenrod' text='Go to Digital Focus' />
            </div>
        </div>

        {/* drop down menu */}
        {showNavbar &&
            <div className={styles.dropDownMenu}>
                <Link to='/' onClick={showNavbarToggler}>Home</Link>
                <Link to='/about' onClick={showNavbarToggler}>About</Link>
                <Link to='/books' onClick={showNavbarToggler}>My Books</Link>
                <Link to='/media' onClick={showNavbarToggler}>Media And Achievements</Link>
                <Link to='/work' onClick={showNavbarToggler}>Work</Link>
                 <div className={styles.owner}>
                    <LinkBtn onClick={showNavbarToggler} route='http://www.digital-focus.org/' color='black' bg='goldenrod' text='Go to Digital Focus' />
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
            </div>
        }
    </div>
  )
}

export default Navbar