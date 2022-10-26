import React from 'react'
import SubTitle from '../Title/SubTitle'
import Title from '../Title/Title'
import styles from './Articles.module.css'
import Cards from '../Cards/Cards'

function Articles() {
  return (
    <div className={styles.articles}>
        <div className={styles.title}>
            <SubTitle text='Blockchain Articles' />
            <Title text='Contribution to the learning world' color='black' />
        </div>

        <div className={styles.articleGroup}>

        <Cards 
            title='INTERNATIONAL COUNCIL OF MANAGEMENT CONSULTING INSTITUTES (2022)' 
            description='A Blend Of Leadership, Management and Blockchain'
            link='https://cmcdirectory.cmc-global.org/content/blend-leadership-management-and-blockchain-technology'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2022)' 
            description='A Blend Of Leadership, Management and Blockchain'
            link='https://www.blockchain-council.org/blockchain/a-blend-of-leadership-management-and-blockchain-technology/'
        />  

        <Cards 
            title='BLOCKCHAIN COUNCIL (2022)' 
            description='Career Paths In Blockchain Technology'
            link='https://www.blockchain-council.org/blockchain/career-paths-in-blockchain-technology/'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2022)' 
            description='DeFi and the African Money System'
            link='https://www.blockchain-council.org/defi/defi-and-the-african-money-system/'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2022)' 
            description='NFT - The New Hype On Blockchain'
            link='https://www.blockchain-council.org/nft/nft-the-new-hype-on-blockchain/'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2022)' 
            description='Blockchain Technology And It&apos;s Environmental Impact On Our World'
            link='https://www.blockchain-council.org/blockchain/blockchain-technology-and-its-environmental-impact-on-our-world/'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2021)' 
            description='2022 And Beyond; The Future Of Blockchain Technology'
            link='https://www.blockchain-council.org/blockchain/2022-and-beyond-the-future-of-blockchain/'
        />

        <Cards 
            title='BLOCKCHAIN COUNCIL (2021)' 
            description='How Blockchain Technology Can Prevent Fraud'
            link='https://www.blockchain-council.org/blockchain/how-blockchain-technology-can-prevent-fraud/'
        />
        </div>
    </div>
  )
}

export default Articles