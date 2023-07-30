import React from 'react'
import Nav from './nav';
import Logo from './logo';
import styles from "./header.module.css"
import { Container } from '../container';
const Header = () => {
  return (
    <header>
      <Container>
      <div className={styles.flexContainer}>
      
      <Logo />
      <Nav />
      </div>
      </Container>
      </header>
  )
}

export default Header;