import styles from "./about.module.css"
import Image from "next/image"
import bag1 from "../../images/bag1.jpg"

export default function About(){
    return (
        <>
          <div className={styles.sideByCenter}>
          <div className={styles.about_title}>
              <h3 className={styles.about_h3}>title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi reiciendis quo voluptas minima eos sit soluta voluptates, cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam? Debitis.</p>
             </div>
            <div className={styles.about_images}>
            <Image 
              src={bag1}
              alt="バッグ"
              width={500}
              height={500}
               
            />
            </div>
          </div>
          <div className={styles.sideByCenter}>
          <div className={styles.about_images2}>
            <Image 
              src={bag1}
              alt="バッグ"
              width={400}
              height={500}
               
            />
            </div>
          <div className={styles.about_title2}>
              <h3 className={styles.about_h32}>title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi reiciendis quo voluptas minima eos sit soluta voluptates, cum ipsum ipsa rerum quam vitae id quis, architecto itaque magnam? Debitis.</p>
             </div>
            
          </div>

        </>
    )
}