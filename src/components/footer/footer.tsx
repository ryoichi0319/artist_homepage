import { Container } from "../container";
import Logo from "../header/logo";
import styles from "./footer.module.css"
import Social from "./social"
 
export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <Container large={false}>
            <div className={styles.flexContainer}>
                <Logo />
                <Social iconSize="30px"/>
            </div>
            </Container>
        </footer>
    )
}