import React from 'react'
import Cards from '../Cards/Cards'
import Title from '../Title/Title'
import styles from './Media.module.css'

function Media({darkMode}) {
  return (
    <div className={styles.cardsGroup}>
        <div style={{marginTop: '0', textAlign:'center'}}>
            <Title text='Media And Achievements' />
        </div>
        <Cards 
            darkMode={darkMode}
            title='Yahoo Finance 2022' 
            description='Digital Focus Announces Plans To Integrate Blockchain Technology Into School Curriculums In Africa'
            link='https://finance.yahoo.com/news/digital-focus-announces-plans-integrate-194500507.html'
        />

        <Cards
            darkMode={darkMode} 
            title='New Telegraph (2021)' 
            description='Ajayi Adeshina Launches New Book'
            link='https://www.newtelegraphng.com/blockchain-educator-and-expert-ajayi-adeshina-has-released-and-launched-his-most-anticipated-book-the-blockchain-pathway/'
        />  

        <Cards 
            darkMode={darkMode}
            title='Vanguard 2021' 
            description='Adeshina speaks at Lagos State University (LASU) Blockchain Conference'
            link='https://www.vanguardngr.com/2021/11/ajayi-adeshina-chuta-chimezie-faith-obafemi-ayodeji-awosika-others-serve-as-panelists-speakers-at-lasu-blockchain-conference/'
        />

        <Cards 
            darkMode={darkMode}
            title='This Day 2021' 
            description='Rotaract Honors Ajayi Adeshina'
            link='https://www.thisdaylive.com/index.php/2021/10/21/rotaract-honours-ajayi-adeshina/'
        />


        <Cards 
            darkMode={darkMode}
            title='Vanguard 2021' 
            description='Ajayi Adeshina receives IMC Fellowship alongside top industries professional'
            link='https://www.vanguardngr.com/2021/07/ajayi-adeshina-receives-imc-fellowship-alongside-top-industries-professionals/'
        />


        <Cards 
            darkMode={darkMode}
            title='This day 2021' 
            description='Adeshina wins Nigerian landmark achiever merit award'
            link='https://www.thisdaylive.com/index.php/2021/06/13/adeshina-wins-nigerian-landmark-achiever-merit-award/'
        />


        <Cards 
            darkMode={darkMode}
            title='Vanguard 2021' 
            description='Rotary international honors exemplary business leaders'
            link='https://www.vanguardngr.com/2021/09/rotary-international-honours-exemplary-business-leaders/'
        />


        <Cards 
            darkMode={darkMode}
            title='Legit 2021' 
            description='Onalaja, Adeshina, Smart, others get rotary award of excellence'
            link='https://www.legit.ng/1432005-onalaja-adeshina-smart-others-get-rotary-award-excellence.html'
        />


        <Cards 
            darkMode={darkMode}
            title='This day 2021' 
            description='Adeshina to launch blockchain literacy program'
            link='https://www.thisdaylive.com/index.php/2021/02/03/adeshina-to-launch-blockchain-literacy-programme/'
        />


        <Cards 
            darkMode={darkMode}
            title='Vanguard 2021' 
            description='Blockchain technology is equalizing the gap between the rich and unbanked poor'
            link='https://www.vanguardngr.com/2021/04/lockchain-technology-equalizing-gap-between-rich-unbanked-poor-ajayi-adeshina/'
        />


        <Cards 
            darkMode={darkMode}
            title='New Telegraph 2021' 
            description='How Ajayi Adeshina rose from poverty to blockchain enthusiast'
            link='https://www.newtelegraphng.com/how-ajayi-adeshina-rose-from-poverty-to-blockchain-enthusiast/'
        />


        <Cards 
            darkMode={darkMode}
            title='Vanguard 2019' 
            description='Ajayi Adeshina teaches blockchain technology at the Grind Platform'
            link='https://www.vanguardngr.com/2019/07/ajayi-adeshina-teaches-blockchain-technology-at-the-grind-platform/'
        />


    </div>
  )
}

export default Media