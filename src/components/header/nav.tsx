import styles from "./nav.module.css"
import Link from "next/link"
import Discography from '../../app/discography/page';
export default function Nav(){
    return(
        <nav>
           <ul className={styles.list}>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                    about
                </Link>
            </li>
            <li>
                <Link href="/discography">
                    Discography
                </Link>
            </li>
           </ul>
        </nav>
    )
}