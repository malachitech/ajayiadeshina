import React from 'react'
import SubTitle from '../Title/SubTitle'
import Title from '../Title/Title'
import styles from './About.module.css'
import img from '../images/ajayimg.JPG'

function About() {
  return (
    <div className={styles.about}>

        <div className={styles.title}>
            <Title color='black' text='About Me' />
        </div>

        <div className={styles.aboutSection}>
            <div className={styles.aboutDescription}>

                <div className={styles.vision}>
                    <SubTitle text='CAREER VISION'  />
                    <Title color='black' text='Using Blockchain Technology ' />

                    <div className={styles.aboutVision}>
                        <p>
                            As a tool to proffer far reaching solutions to the world's most imminent public and private sector problems.
                            Other key interests include capacity building, human development, promotion of transparency in 
                            business operations and poverty alleviation.
                        </p>
                    </div>
                </div>

                <div className={styles.aboutPart}>
                    <SubTitle text='SETTING THE BLOCKCHAIN TREND'  />
                    <Title color='black' text='Leader, expert, and mentor' />

                    <div className={styles.aboutTxt}>
                        Arguably Africa&apos;s Foremost Certified Blockchain Expert, Blockchain Management Consultant and expert columnist 
                        for Blockchain Council (the global authority on Blockchain) and The International Council of Management Consulting 
                        Institutes (ICMCI), Best Selling Author of The Blockchain Pathway and Wealth Transfer. Highly competent Blockchain 
                        leader with over six (6) years of global accomplishment in Blockchain Technology and ten (10) years of accomplishment 
                        in business leadership, culture shaper, problem solver and leading authority in Blockchain in Nigeria with the 
                        certification of over two thousand (2,000) Blockchain experts across Nigeria, remarkable social impact and technology 
                        entrepreneurship with notable alliances with high level public and private sector. Active participant
                        and influencer in volunteering engagements with local and international engagements.  
                    </div>
                </div>

                <div className={styles.award}>
                    <SubTitle text='AWARDS'  />
                    <Title color='black' text='outstanding achievements' />

                    <div className={styles.awards}>
                        <ul>
                            <li>
                                African Leader of Integrity Merit Award for my professional excellence and humanitarian leadership by Africa Integrity
                                Magazine (2022)
                            </li>
                            <li>
                                Award of excellence in blockchain education and practices - Rotaract Club of Iju Ishaga (2021)
                            </li>
                            <li>
                                Nigerian Landmark Achiever Merit Award in recognition of my immense contribution to blockchain and finance 
                                industry in Nigeria by Landmark Africa Magazine (2021)
                            </li>
                            <li>
                                Award of excellence in blockchain education and development by Rotary (2021)
                            </li>
                            <li>
                                African Leader Par Excellence Award  for my unprecedented contribution to blockchain education and practice in Nigeria (2021)
                            </li>
                            <li>
                                Award of recognition in blockchain education and practices to Digital Focus - Rotaract Club of Agege (2021)
                            </li>
                            <li>
                                Award of Appreciation in recognition of my work in leadership and enterprise by “Making A Difference” Conference (2012)
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
       
        

            <div className={styles.aboutImage}>
                <Title color='black' text='Adeshina Ajayi' />
                <img src={img} alt='ajayi adeshina&apos;s image' />
            </div>

        </div>

    </div>
  )
}

export default About