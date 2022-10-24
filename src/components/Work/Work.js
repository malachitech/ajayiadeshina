import React from 'react'
import SubTitle from '../Title/SubTitle'
import Title from '../Title/Title'
import styles from './Work.module.css'

function Work() {
  return (
    <div className={styles.work}>
        <div className={styles.title}>
            <SubTitle text='Works' />
            <Title text='Most Recent Jobs Done' color='black' />
        </div>

        <div className={styles.workGroup}>

            <div className={styles.workdone}>
                <Title text='Founder and CEO at Digital Focus – 2016 Till date' color='black' />
                <ul>
                    <li>
                        Trained over 2000 people on practical application of blockchain technology and blockchain career paths. 
                    </li>
                    <li>
                        Helped over 200 young people gain relevant strategies and in-demand global skills leveraging blockchain technology at no cost. 
                    </li>
                    <li>
                        Trained Nigeria&apos;s premier perception management firm, CMC CONNECT on adopting blockchain technology and creating business 
                        solutions using blockchain technology. 
                    </li>
                    <li>
                        Led a team of 20 Blockchain enthusiasts to create blockchain awareness and adoption in the Agbado Ijaiye Community of Lagos State, Nigeria. 
                    </li>
                    <li>
                        Using a Proof of Concept, Created a Reward System Plan (RSP) for code tutor, Nigeria&apos;s foremost technology
                        education company; that is focused on making digital education accessible across the world through skilled and
                        versatile instructors. Code tutor&apos;s RSP is a customer reward plan that opens up the opportunities
                        for the company&apos;s clients to earn as much as they desire through referrals. 
                    </li>
                    <li>
                        Trained and consulted for leading global blockchain companies like Binance and Luno. 
                    </li>
                </ul>
            </div>

            <div className={styles.workdone}>
                <Title text='Partner and Leader at Alpha Training Lab (ATL) – 2016 – Till date' color='black' />
                <ul>
                    <li>
                        Responsible for creating a mentorship system that has educated over 1200 blockchain experts. 
                    </li>
                    <li>
                        Organized weekly virtual training since 2016 till date to the 2000 members in Alpha Training Lab Community. 
                    </li>
                    
                </ul>
            </div>
            
            <div className={styles.workdone}>
                <Title text='Co-founder & CEO at Straightway Foods Limited – 2017 to 2019' color='black' />
                <ul>
                    <li>
                        Co-created a Straightway Coconut Oil Brand. The product did over one hundred million naira (N100M) turnover
                        in the first year of sales from scratch.
                    </li>

                    <li>
                        Led an activation team of promoters that created massive awareness for the product in different LGA’s in Lagos 
                    </li>

                    <li>
                        Pitched and sealed multimillion naira business deals with 10 notable supermarkets in Lagos and Ibadan. 
                    </li>
                    <li>
                        Created employment opportunities for over 50 factory workers, marketers and promoters working with the firm. 
                    </li>
                    
                </ul>
            </div>

            <div className={styles.workdone}>
                <Title text='Business Development Lead, Niches Properties Limited 2016 – 2018' color='black' />
                <ul>
                    <li>
                        Created a system (Project UP) that Moved up company&apos;s revenue from N98,000,000 to N550,000,000 in one year
                    </li>

                    <li>
                        Represented the company&apos;s management in meetings with key industry stakeholders in both Lagos and Abuja. 
                    </li>

                    <li>
                        Led a team of 10 marketers to the 2016 Abuja International Trade Fair and made a sale of over one hundred 
                        and twenty-five million naira (N125,000,000) 
                        in the one week of the fair. (The biggest sale made in a week at the time in the company's history). 
                    </li>
                    <li>
                        Created employment opportunities for over 50 factory workers, marketers and promoters working with the firm. 
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Work