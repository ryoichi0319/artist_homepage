"use client"
import { Container } from "./container"
import styles from "../styles/hero.module.css"
import MotionWrapper from "./framer-motion"
import Image from 'next/image';
import sample10 from "../../public/images/sample10.jpg"
interface HeroProps{
    title: string
}
export default function Hero({title}: HeroProps){
    
    return(
      <div>
      <Image 
      src={sample10}
      alt=""
     
      sizes="100vw"
      style={{
       width: '100%',
       height: '660px',
}}
    />
      <Container large={false}>
        <div className={styles.flexContainer}>
       
          <MotionWrapper>
          <h2 className={styles.product}>{title}</h2>
          </MotionWrapper>

          
        </div>
      </Container>
      </div>
    )
}