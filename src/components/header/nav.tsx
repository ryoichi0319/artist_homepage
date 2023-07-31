"use client"
import styles from "./nav.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Nav(){
    const [ navIsOpen, setNavIsOpen ] = useState(false)
    const toggleNav = () =>{
        setNavIsOpen((prev) => !prev)
    }
    const closeNav = () =>{
        setNavIsOpen(false)
    }
    return(
        <nav className={navIsOpen ? styles.open : styles.close}>
            <style jsx global>{`
                @media (max-width: 767px){
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                }
            `}</style>
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
                <Link href="/live" onClick={closeNav}>
                    live
                </Link>
            </li>
            <li>
                <Link href="/discography" onClick={closeNav}>
                    Discography
                </Link>
            </li>
           </ul>
        </nav>
       
    )
}