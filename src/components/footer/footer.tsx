import { Container } from '../container'
import Logo from '../header/logo'
import styles from "../../styles/footer.module.css"
import Social from './social'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container large={false}>
        <div className={styles.flexContainer}>
          <Logo />
          <div className={styles.copy}>
              Copyright ©︎ All rights reserved | Acht8
            </div>
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  )
}
