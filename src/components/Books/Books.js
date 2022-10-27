import React from 'react'
import Title from '../Title/Title'
import styles from './Books.module.css'

function Books() {
  return (
    <div  className={styles.books} >
        

        <div className={styles.imgs} >

            <div className={styles.blockchainpathway}>
                <div>
                    <Title text='the blockchain pathway' />
                    <p>
                        The digital world is here to stay and there is a lot of untapped resources in it. 
                        Blockchain Technology is a major disruptor in the digital space and it is the technology of the 
                        future. This book provides the necessary information that is required to tap into the resources and opportunities that the technology provide. 
                        If you seek to make  informed decisions and you want to own a stake in the new groundbreaking 
                        blockchain technology, this book is the right book for you.
                    </p>
                    <span style={{fontSize: '1.3em', fontWeight: 'bold', color: 'red'}}>
                        Price: N5,000
                    </span>
                    <img src='http://www.digital-focus.org/ebooks/The_Blockchain_Pathway2.jpg' alt='the blockchain pathway'/>
                    
                    
                    {/* <div className={styles.download}>
                        <a href='https://drive.google.com/uc?export=download&id=1Camy2ohcd3uiAnvhCiH17wLcoSDyQqyp'>
                            Download
                        </a>
                    </div> */}
                    
                </div>


            </div> 
            
            <div className={styles.wealthtransfer}>
                
                <div>
                    <Title text='wealth transfer' />
                    <p>
                    From time, money has been part of our daily lives, from earning it via jobs and investments to 
                    spending it for products, services, and experiences. It is a necessity no matter the currency and 
                    has always been a symbol of barter and exchange. The rise of digital currencies is completely 
                    changing the way money is being transacted and used. This book; Wealth Transfer explains how digital 
                    currency is bridging the gap between the rich and the unbanked poor and how to be a player in the 
                    sector.

                        

                    </p>
                    <span style={{fontSize: '1.3em', fontWeight: 'bold', color: 'red'}}>
                        Price: N5,000
                    </span>
                    <img src='http://www.digital-focus.org/ebooks/Wealth_Transfer2.jpg' alt='the blockchain pathway'/>


                    {/* <div className={styles.download}>
                        <a href='https://drive.google.com/uc?export=download&id=1eNXm9qA_h6tLmhNAHcKkllG8SoYijl5a'>
                            Download
                        </a>
                    </div> */}
                    
                </div>
            </div>
                   
        </div>
        
            
            <div className={styles.recommendationCover}>
                <div className={styles.order}>
                    <Title text='Get a copy' />
                    <hr />
                    <p style={{fontWeight: 'bold', margin:'30px 10px'}}>
                        Place an order by calling <span  style={{color: 'goldenrod'}}>09053515713</span> and the book of your choice would be delivered to you shortly after payment.
                    </p>

                    <hr />
                </div>

                <div className={styles.recommendation}>
                    
                    <Title text='A Word from the publisher. ' color='goldenrod' />
                    <p  style={{color: 'white',}}>
                        “Mr. Adeshina Ajayi is the leading voice on Blockchain Technology in Nigeria and we are proud to be 
                        associated with the ground breaking work he is doing in the industry. We have worked with 
                        Mr. Ajayi on two book projects titled: The Blockchain Pathway and Wealth Transfer.” 
                
                    </p>

                    <div style={{marginTop: '20px', color: 'goldenrod', textAlign: 'center'}}>
                        Michael Ace
                        <p>
                        Founder, ACEworld Publishers.
                        </p>
                    </div>
                        
                    
                </div>
            </div>
                    
        
            
    </div>
  )
}

export default Books