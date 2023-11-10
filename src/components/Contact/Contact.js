import React from 'react'
import styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import img from '../images/ajayi.jpg'
import SubTitle from '../Title/SubTitle'

function Contact() {
  return (
    <div className={styles.contact}>
        <div className={styles.contacttxt}>

        <div className={styles.contactdecription}>
            <p className={styles.address}>
                <SubTitle text='Address' />
8259 South Marshfield Chicago Illinois 60620            </p>

            <p className={styles.phone}>
                <SubTitle text='Phone' />
                09053515713
            </p>

            <p className={styles.email}>
                <SubTitle text='Email Address' />
                ajayiadeshina5@gmail.com
            </p>
        </div>

        <div className={styles.contactbtn}>
            <div className={styles.more}>
                <Link to='/about'>
                    Read More
                </Link>
            </div>

            <div className={styles.home}>
                <Link to='/'>
                    Home
                </Link>
            </div>
        </div>

        </div>

        <div className={styles.contactimg}>
            <img src={img} alt="standing and facing the side" />
        </div>
    </div>
  )
}

export default Contact
