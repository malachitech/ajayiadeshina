import React from 'react'
import Title from '../Title/Title'
import styles from './Books.module.css'

function Books() {
  return (
    <div  className={styles.books} >
        <div style={{textAlign: 'center'}}>
            <Title text='I AUTHORED THESE BOOKS' />
        </div>

        <div className={styles.imgs} >

            <div className={styles.blockchainpathway}>
                <a href='/http://www.digital-focus.org/ebooks/BLOCKCHAIN_PATHWAY_v1.pdf'>
                    <Title text='the blockchain pathway' />
                    <img src='http://www.digital-focus.org/ebooks/The_Blockchain_Pathway2.jpg' alt='the blockchain pathway'/>
                </a>

            </div>
            
            <div className={styles.wealthtransfer}>
                
                <a href='/http://www.digital-focus.org/ebooks/WEALTH_TRANSFER_v1.pdf'>
                    <Title text='wealth transfer' />
                    <img src='http://www.digital-focus.org/ebooks/Wealth_Transfer2.jpg' alt='the blockchain pathway'/>
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Books