import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import image2 from 'assets/images/ME.png'
import { gsap } from 'gsap'

const index = () => {

  const imageRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, y: 300, scale: 2.5, rotateZ: 8 },
      { scrollTrigger: imageRef.current, opacity: 1, duration: 1, y: 0, scale: 2, rotateZ: 10 }
    )

    gsap.fromTo(imageRef.current,
      { y: -100, rotateX: 40, rotateY: 40, rotateZ: 20, scale: 2, opacity: 1 },
      { scrollTrigger: { scrub: 1 }, y: 400, rotateX: -40, rotateY: -40, rotateZ: -20, scale: 1, opacity: .4 }
    )

    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".about__description span",
      { y: 48, opacity: 0 },
      { scrollTrigger: ".about__description", stagger: .1, delay: .3, y: 0, opacity: 1 }
    )

    gsap.fromTo(".about__cta span",
      { y: 48, opacity: 0 },
      { scrollTrigger: ".about__cta", stagger: .1, delay: .25, y: 0, opacity: 1 }
    )
  })

  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h2 className='text-xs text-semibold text-italic' ref={titleRef}>About us</h2>
        <p className='text-md text-regular about__description'>
          <span>I'M A PRODUCT DESIGNER</span>
          <span>AND SOFTWARE DEVELOPER</span>
          <span>FOCUSED ON CREATING</span>
          <span>INNOVATIVE DIGITAL</span>
          <span>PRODUCTS</span>
        </p>
      </div>

      <img
        src={image2.src}
        alt=""
        ref={imageRef}
        className={styles.about__image}
      />

      <div className={styles.about__cta}>
        <p className='text-md text-regular text-right about__cta'>
          <span>MY PRINCIPAL SKILLS ARE</span>
          <span>FOCUSEND ON UI,</span>
          <span>INTERACTION DESIGN AND</span>
          <span>FRONTEND DEVELOPMENT. </span>
          <span>CURRENTLY LEARNING A LOT</span>
          <span>OF WEBGL & 3D MODELING</span>
        </p>
        
        <div className={styles.about__cta__buttons}>
          <a href='https://www.linkedin.com/in/changcer/'>
            <button className='text-xs btn-primary'>Linkedin</button>
          </a>

          <a href='https://www.instagram.com/_changce/'>
            <button className='text-xs btn-secondary'>Personal Instagram</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default index