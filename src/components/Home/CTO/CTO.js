import React from 'react'
import Title from '../../Title/Title'
import styles from '../Home.module.css'
import {BsChevronDown} from "react-icons/bs";
import { Link } from 'react-router-dom'
import img from '../../images/ajayi.jpg'

function CTO() {
  return (
    <div className={styles.cto}>
        <div className={styles.ctotxt}>
        <div className={styles.entry}>
            <Title text='Hi,' color='goldenrod' />
        </div>
        

        <div className={styles.ctodecription}>
            <p>
                I am Adeshina Ajayi. I am arguably Africa&apos;s foremost blockchain expert and tech educator.   
                In the last 6years, I have helped corporate institutions and individuals to understand the relevance of blockchain 
                technology and positioned them to take their stake in the fast emerging tech space.   I do this through my blockchain 
                consulting and education firm, Digital Focus. 
            </p>
        </div>

        <div className={styles.ctobtn}>
            <div className={styles.more}>
                <Link to='/about'>
                    Read More
                </Link>
            </div>

            <div className={styles.contact}>
                <Link to='/about'>
                    Contact
                </Link>
            </div>
        </div>

        <div className={styles.toBottom}>
            <BsChevronDown />
        </div>
        </div>

        <div className={styles.ctoimg}>
            <img src={img} alt="standing and facing the side" />
        </div>
    </div>
  )
}

export default CTO