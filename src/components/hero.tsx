"use client"
import { Container } from "./container"
import styles from "../styles/hero.module.css"
import MotionWrapper from "./framer-motion"

interface HeroProps{
    title: string
}
export default function Hero({title}: HeroProps){
    
    return(
      <Container large={false}>
        <div className={styles.flexContainer}>
          <MotionWrapper>
          <h2 className={styles.product}>{title}</h2>
          </MotionWrapper>
          
        </div>
      </Container>
    )
}