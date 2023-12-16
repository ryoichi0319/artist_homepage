import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/social.module.css'

// eslint-disable-next-line react/prop-types
export default function Social({ iconSize = 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only"></span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only"></span>
        </a>
      </li>
      <li>
        <a href="https://instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only"></span>
        </a>
      </li>
    </ul>
  )
}
