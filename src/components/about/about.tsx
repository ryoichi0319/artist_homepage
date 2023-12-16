import Image from 'next/image'
// eslint-disable-next-line import/no-unresolved
import bag1 from '../../images/bag1.jpg'
import misin from '../../images/misin.jpg'
import styles from './about.module.css'
export default function About() {
  return (
    <>
      <div className={styles.side_right}>
        <div className={styles.about_title}>
          <h3 className={styles.about_h3}>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi reiciendis quo voluptas minima eos sit soluta voluptates,
            cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam?
            Debitis.
          </p>
        </div>
        <div className={styles.about_images}>
          <Image
            src={bag1}
            alt="バッグ"
            placeholder="blur"
            className={styles.about_image}
            sizes="100vw"
            style={{
              width: '100%',
              height: '400px',
            }}
          />
        </div>
      </div>
      <div className={styles.sideByCenter}>
        <div className={styles.about_images2}>
          <Image
            src={misin}
            alt="ミシン"
            sizes="100vw"
            className={styles.about_image2}
            style={{
              width: '100%',
              height: '400px',
            }}
          />
        </div>
        <div className={styles.about_title2}>
          <h3 className={styles.about_h32}>title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi reiciendis quo voluptas minima eos sit soluta voluptates,
            cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam?
            Debitis.
          </p>
        </div>
      </div>
    </>
  )
}
