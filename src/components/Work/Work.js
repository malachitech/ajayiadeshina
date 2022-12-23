import React from 'react'
import styles from './Work.module.css'
import Title from '../Title/Title'
import SubTitle from '../Title/SubTitle'
import Cards from '../Cards/Cards'

function Work({darkMode}) {
  return (
    <div className={styles.work}>
        <div className={styles.title}>
            <SubTitle text='Work' />
            <Title text='A list of my most recent projects.' color={darkMode? "white":"black"} />
        </div>

        <div className={styles.workGroup}>
        <Cards 
            darkMode={darkMode}
            title='Digital Focus' 
            description='Trained and certified  over 2000 people on practical application of blockchain technology and blockchain career paths.'
            link='http://www.digital-focus.org'
        />

        <Cards 
            darkMode={darkMode}
            title='Alpha Training Lab  (ATL)' 
            description='Created and directed a training system that has educated over 1200 blockchain experts. '
            link='http://www.alphatraininglab.net'
        />  

        <Cards 
            darkMode={darkMode}
            title='Code Tutor' 
            description='Created a Reward System Plan (RSP) using Proof of Concept (POC)'
            link='https://www.codetutor.com.ng'
        />

        <Cards 
            darkMode={darkMode}
            title=' CMC Connect ' 
            description='Training on adoption of blockchain and creating business solutions using blockchain technology. '
            link='https://www.cmcconnect.com'
        />

        <Cards 
            darkMode={darkMode}
            title='Nerdzfactory' 
            description='Tech Trainings and certifications'
            link='https://www.nerdzfactory.co'
        />

        </div>
    </div>
  )
}

export default Work