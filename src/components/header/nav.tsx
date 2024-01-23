'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../../styles/nav.module.css"

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {/* <style jsx global>{`
                @media (max-width: 767px){
                  body{
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    
                }
              }
            `}</style> */}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/access" onClick={closeNav}>
            Access
          </Link>
        </li>
        <li>
          <Link href="/schedule" onClick={closeNav}>
            Schedule
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeNav}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
