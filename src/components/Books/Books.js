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
                <a href='http://www.digital-focus.org/ebooks/BLOCKCHAIN_PATHWAY_v1.pdf'>
                    <Title text='the blockchain pathway' />
                    <p>
                        Blockchain technology is one of such emerging technologies that offers to liberate
                        many businesses, creates new models, and make Africa great. The level of
                        transparency and security offered by the technology induces trust even in unknown parties paving ways for
                        various transactions to flow through the distributed ledger. These transactions can include financial
                        transactions among other digital assets transacted peer to peer between parties in the virtual world.
                    </p>
                    <img src='http://www.digital-focus.org/ebooks/The_Blockchain_Pathway2.jpg' alt='the blockchain pathway'/>
                </a>

            </div>
            
            <div className={styles.wealthtransfer}>
                
                <a href='http://www.digital-focus.org/ebooks/WEALTH_TRANSFER_v1.pdf'>
                    <Title text='wealth transfer' />
                    <p>
                        We live in the digital era, where all of us are one step away from accessing information
                        about anything in the internet world. The present world is all about high-speed
                        technology and instant Google answers, and hence the millennials (1981 to 1986)
                        like to have their investment information to be immediately accessible.
                        According to Accenture&apos;s Wealth in the Digital Age Investor survey, each and every
                        generation has the capacity to influence the economy, however, millennials have a
                        special impact as they are the most digitally savvy investor group overall. 
                        With the state of our living accross the world, it wise to say that I am sure you will have more reasons to buy
                        copies of this book for your friends and family.

                    </p>
                    <img src='http://www.digital-focus.org/ebooks/Wealth_Transfer2.jpg' alt='the blockchain pathway'/>
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Books