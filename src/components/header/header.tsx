import React from 'react'
import { Container } from '../container'
import styles from "../../styles/header.module.css"
import Logo from './logo'
import Nav from './nav'

const Header = () => {
  return (
    <div className="header_parent">
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

export default Header
