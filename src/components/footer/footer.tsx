import { Container } from "../container";
import Logo from "../header/logo";
import styles from "./footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <Container>
            <div className={styles.flexContainer}>
                <Logo />
            </div>
            </Container>
        </footer>
    )
}