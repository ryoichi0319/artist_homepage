'use client'
import Image from 'next/image'
import sample10 from '../../public/images/sample10.jpg'
import styles from '../styles/hero.module.css'
import { Container } from './container'
import MotionWrapper from './framer-motion'
interface HeroProps {
  title: string
}
export default function Hero({ title }: HeroProps) {
  return (
    <div className={styles.image}>
      <Image
        src={sample10}
        alt=""
        sizes="100vw"
        style={{
          width: '100%',
          height: '660px',
        }}
        priority
      />
      <p className={styles.message}>“ひと手間”に心血を注ぎます。</p>
      <Container large={false}>
        <div className={styles.flexContainer}>
          <MotionWrapper>
            <h2 className={styles.product}>{title}</h2>
          </MotionWrapper>
        </div>
      </Container>
    </div>
  )
}
