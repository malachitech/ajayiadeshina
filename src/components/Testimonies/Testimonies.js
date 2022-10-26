import React from 'react'
import styles from './Testimonies.module.css'
import { BsStarFill } from "react-icons/bs";
import Title from '../Title/Title';
import SubTitle from '../Title/SubTitle';

function Testimonies() {
  return (
    <div className={styles.testimonies}>
        <div className={styles.title}>
            <SubTitle text='Testimonies' />
            <Title text='What People  Say About Me' color='black' />
        </div>

        <div className={styles.testimonycards}>
            <div className={styles.testimonycard}>
                <div className={styles.stars}>
                    <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <div className={styles.thetestimony}>
                    Adeshina is at the forefront of raising blockchain professionals 
                    in Africa and thousands of people have been known to be blockchain certified by his academy, Digital Focus.
                </div>
                <div className={styles.writer}>
                    John Makinde
                </div>
                <div className={styles.writerTitle}>
                    Co-founder TecHub Spaces 
                </div>
            </div>

            <div className={styles.testimonycard}>
                <div className={styles.stars}>
                    <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <div className={styles.thetestimony}>
                    Adeshina&apos;s passion to democratize the opportunities of blockchain 
                    Technology is one I have never seen before. He is a genius at what he does. 
                </div>
                <div className={styles.writer}>
                    Olaleye Awe
                </div>
                <div className={styles.writerTitle}>
                    Founder Alpha Training Lab (ATL)
                </div>
            </div>

            <div className={styles.testimonycard}>
                <div className={styles.stars}>
                    <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <div className={styles.thetestimony}>
                To understand blockchain without complexities, you should read Adeshina&apos;s book,
                 The Blockchain Pathway. 
                </div>
                <div className={styles.writer}>
                    Dr. Emmanuel Dansu
                </div>
                <div className={styles.writerTitle}>
                    Director of Research at African Researchers Networks, UK
                </div>
            </div>

            <div className={styles.testimonycard}>
                <div className={styles.stars}>
                    <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <div className={styles.thetestimony}>
                    Mr. Ajayi is the brightest mind I have learned from and worked with in the blockchain sector
                </div>
                <div className={styles.writer}>
                    Raymond Asogwa 
                </div>
                <div className={styles.writerTitle}>
                    Professional Digital User Experience Designer
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonies