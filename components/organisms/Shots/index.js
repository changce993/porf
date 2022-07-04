import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { gsap } from 'gsap'
import image1 from "assets/images/carousel/1.png"
import image2 from "assets/images/carousel/2.png"
import image3 from "assets/images/carousel/3.png"
import image4 from "assets/images/carousel/4.png"
import image5 from "assets/images/carousel/5.png"
import image6 from "assets/images/carousel/6.png"
import image7 from "assets/images/carousel/7.png"
import image8 from "assets/images/carousel/8.png"
import image9 from "assets/images/carousel/9.png"
import image10 from "assets/images/carousel/10.png"
import image11 from "assets/images/carousel/11.png"
import image12 from "assets/images/carousel/12.png"
import image13 from "assets/images/carousel/13.png"
import image14 from "assets/images/carousel/14.png"
import image15 from "assets/images/carousel/15.png"
import image16 from "assets/images/carousel/16.png"
import image17 from "assets/images/carousel/17.png"
import image18 from "assets/images/carousel/18.png"

const index = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".shot-description span",
      { y: 48, opacity: 0 },
      { scrollTrigger: ".shot-description", stagger: .1, delay: .35, y: 0, opacity: 1 }
    )

    gsap.fromTo(".odd-row",
      { x: 0 },
      { scrollTrigger: { trigger: ".odd-row",  scrub: 1, }, x: -300 }
    )

    gsap.fromTo(".even-row",
      { x: 0 },
      { scrollTrigger: { trigger: ".even-row",  scrub: 1, }, x: 300 }
    )
  })

  return (
    <section className={styles.shots}>
      <div className={styles.shots__content}>
        <h2 className='text-xs text-semibold text-italic' ref={titleRef}>UI Shots</h2>
        <p className='text-md text-regular shot-description'>
          <span>AND LAST BUT NOT</span>
          <span>LEAST, YOU WILL SEE</span>
          <span>SOME UI MASTERPIECES</span>
          <span>MADE BY ME.</span>
        </p>
      </div>

      <div className={styles.shots__carousel}>
        <div className={`${styles.shots__carousel__row} odd-row`}>
          <img src={image7.src} className={styles.shots__carousel__row__image} />
          <img src={image1.src} className={styles.shots__carousel__row__image} />
          <img src={image2.src} className={styles.shots__carousel__row__image} />
          <img src={image3.src} className={styles.shots__carousel__row__image} />
          <img src={image4.src} className={styles.shots__carousel__row__image} />
          <img src={image5.src} className={styles.shots__carousel__row__image} />
          <img src={image6.src} className={styles.shots__carousel__row__image} />
          <img src={image7.src} className={styles.shots__carousel__row__image} />
          <img src={image1.src} className={styles.shots__carousel__row__image} />
        </div>

        <div className={`${styles.shots__carousel__row} even-row`}>
          <img src={image7.src} className={styles.shots__carousel__row__image} />
          <img src={image8.src} className={styles.shots__carousel__row__image} />
          <img src={image9.src} className={styles.shots__carousel__row__image} />
          <img src={image10.src} className={styles.shots__carousel__row__image} />
          <img src={image11.src} className={styles.shots__carousel__row__image} />
          <img src={image12.src} className={styles.shots__carousel__row__image} />
          <img src={image13.src} className={styles.shots__carousel__row__image} />
          <img src={image9.src} className={styles.shots__carousel__row__image} />
          <img src={image14.src} className={styles.shots__carousel__row__image} />
        </div>

        <div className={`${styles.shots__carousel__row} odd-row`}>
          <img src={image14.src} className={styles.shots__carousel__row__image} />
          <img src={image15.src} className={styles.shots__carousel__row__image} />
          <img src={image16.src} className={styles.shots__carousel__row__image} />
          <img src={image17.src} className={styles.shots__carousel__row__image} />
          <img src={image18.src} className={styles.shots__carousel__row__image} />
          <img src={image8.src} className={styles.shots__carousel__row__image} />
          <img src={image1.src} className={styles.shots__carousel__row__image} />
          <img src={image14.src} className={styles.shots__carousel__row__image} />
          <img src={image8.src} className={styles.shots__carousel__row__image} />
        </div>
      </div>

      <div className={styles.shots__buttons}>
        <a href='https://www.instagram.com/_changce.design/'>
          <button className='text-xs btn-primary'>Work Instagram</button>
        </a>
      </div>
    </section>
  )
}

export default index