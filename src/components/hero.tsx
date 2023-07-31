import { Container } from "./container"
import styles from "../styles/hero.module.css"

interface HeroProps{
    title: string
}
export default function Hero({title}: HeroProps){
    
    return(
      <Container large={false}>
        <div className={styles.flexContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Container>
    )
}