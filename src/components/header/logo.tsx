import Image from 'next/image'
import Link from 'next/link'
import acht8_2 from '../../../public/acht8_2.png'
import styles from './logo.module.css'
const Logo: React.FC = () => {
  return (
    <div className={styles.logo_ach}>
      <Link href="/" className={styles.logo_link}>
        <Image
          src={acht8_2}
          alt="バッグ"
          placeholder="blur"
          sizes="100vw"
          style={{
            width: 'auto',
            height: '45px',
          }}
        />
      </Link>
    </div>
  )
}

export default Logo
