import React from 'react'
import Title from '../../Title/Title'
import styles from '../Home.module.css'
import { Link } from 'react-router-dom'
import img from '../../images/ajayi.jpg'

function CTO({darkMode}) {
    console.log(darkMode)
  return (
    <div className={styles.cto}
        style={darkMode? {backgroundColor: 'black', color: 'white'}: 
        {backgroundColor: 'silver', color: 'black'}}
    >
        <div className={styles.ctotxt}>
        <div className={styles.entry}>
            <Title text='Hi,' color='goldenrod' />
        </div>
        

        <div className={styles.ctodecription}
        
        >
            <p style={darkMode? {color: 'white'}: 
        {color: 'black'}}>
                I am Adeshina Ajayi. I am arguably Africa&apos;s foremost blockchain expert and tech educator.   
                In the last 6years, I have helped corporate institutions and individuals to understand the relevance of blockchain 
                technology and positioned them to take their stake in the fast emerging tech space.   I do this through my blockchain 
                consulting and education firm, Digital Focus. 
                I have provided blockchain solutions to top institutions from different sectors like CMC connect,
                Alpha Training Lab (ATL).  Nerdsfactory, TLCGLOBAL, Truwiters, Addicio Solutions, Code Tutor to mention a few.
                My academy, Digital Focus Academy has certified over two thousand (2,000) Blockchain Experts across Nigeria.
            </p>
        </div>

        <div className={styles.ctobtn}>
            <div className={styles.more}>
                <Link to='/about'>
                    Read More
                </Link>
            </div>

            <div className={styles.contact}>
                <Link to='/contact'>
                    Contact
                </Link>
            </div>
        </div>

        </div>

        <div className={styles.ctoimg}>
            <img src={img} alt="standing and facing the side" />
        </div>
    </div>
  )
}

export default CTO