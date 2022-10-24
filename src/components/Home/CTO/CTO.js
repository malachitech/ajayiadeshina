import React from 'react'
import LinkBtn from '../../Button/LinkBtn'
import SubTitle from '../../Title/SubTitle'
import Title from '../../Title/Title'
import styles from '../Home.module.css'
import {BsChevronDown} from "react-icons/bs";

function CTO() {
  return (
    <div className={styles.cto}>
        <SubTitle text='BLOCKCHAIN LEADER' />
        <Title text='Certified Management Consultant' color='white' />

        <div className={styles.ctodecription}>
            <p>
                Highly competent Blockchain leader with over six (6) years of global accomplishment in Blockchain Technology
                and ten (10) years of accomplishment in business leadership, culture shaper, problem solver and leading 
                authority in Blockchain in Nigeria with the certification of over two thousand (2,000) Blockchain experts 
                across Nigeria.
            </p>
        </div>

        <div className={styles.ctobtn}>
            <div className={styles.more}>
                <LinkBtn route='/about' text='MORE' color='black' bg='goldenrod' />
            </div>

            <div className={styles.contact}>
                <LinkBtn route='/about' text='CONTACT' color='goldenrod' bg='black' />
            </div>
        </div>

        <div className={styles.toBottom}>
            <BsChevronDown />
        </div>
    </div>
  )
}

export default CTO