import React from 'react'
import Nav from './nav';
import Logo from './logo';
import styles from "./header.module.css"
import { Container } from '../container';

const Header = () => {
  return (
    <div className='header_parent'>
    <header className={styles.header}>
      <Container large>
      <div className={styles.flexContainer}>
      
      <Logo />
      <Nav />
      </div>
      </Container>
      </header>
      </div>
  )
}

export default Header;