import Image from 'next/image'
import bag1217 from "../../../public/bag1217.jpg"
import misin from "../../../public/misin.jpg"
import styles from "@/styles/about.module.css"
import MotionWrapper from '../framer-motion';
export default function About() {
  return (
    <>
    <div className={styles.about_all}>
      <div className={styles.side_right}>
        
        <div className={styles.about_title}>
          <h3 className={styles.about_h3}>
          <MotionWrapper shouldAnimate={true}>
            title
            </MotionWrapper>

            </h3>
          <p className={styles.about_p}>
          <MotionWrapper shouldAnimate={true}>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi reiciendis quo voluptas minima eos sit soluta voluptates,
            cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam?
            Debitis.
            </MotionWrapper>

          </p>
        </div>
        <div className={styles.about_images}>
          <Image
            src={bag1217}
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
          <h3 className={styles.about_h32}>
          <MotionWrapper shouldAnimate={true}>
            title
            </MotionWrapper>
          </h3>
          <p className={styles.about_p}>
          <MotionWrapper shouldAnimate={true}>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi reiciendi s quo voluptas minima eos sit soluta voluptates,
            cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam?
            Debitis.
            </MotionWrapper>
          </p>
        </div>
      </div>
      </div>

    </>

  )
}
