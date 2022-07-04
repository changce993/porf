import { useEffect, useRef } from "react"
import styles from './styles.module.scss'
import { gsap } from "gsap"

const index = () => {
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".services-description span",
      { y: 48, opacity: 0 },
      { scrollTrigger: ".services-description", stagger: .1, delay: .35, y: 0, opacity: 1 }
    )

    gsap.fromTo(".list-services",
      { rotateX: -10, rotateY: -60, rotateZ: -5, y: -100 },
      { scrollTrigger: { trigger: ".list-services", scrub: 1 }, rotateX: 10, rotateY: 15, rotateZ: 5, y: -300 }
    )

    gsap.fromTo(".list-services li",
      { y: 80, opacity: 0 },
      { scrollTrigger: ".services-description", stagger: .3, duration: 1, delay: .5, y: 0, opacity: 1 }
    )

    gsap.fromTo(contentRef.current,
      { y: 0 },
      { scrollTrigger: { trigger: contentRef.current, scrub: 1 }, y: 100 }
    )
  }, [])

  return (
    <section className={styles.services}>
      <div className={styles.services__content} ref={contentRef}>
        <h2 className='text-xs text-semibold text-italic' ref={titleRef}>What I do</h2>
        <p className='text-md text-regular services-description'>
          <span>THROUGHOUT MY</span>
          <span>PROFESSIONAL CAREER I</span>
          <span>HAVE LEARNED ABOUT</span>
          <span>BRANDING BACKEND AND</span>
          <span>MOBILE DEVELOPMENT,</span>
          <span>WHICH GIVES ME THE</span>
          <span>OPPORTUNITY TO OFFER</span>
          <span>DIFFERENT SERVICES</span>
        </p>

        <div className={styles.services__content__buttons}>
          <a href="mailto:changcer@gmail.com">
            <button className='text-xs btn-primary'>Email</button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+541166065718">
            <button className='text-xs btn-secondary'>Whatsapp</button>
          </a>
        </div>
      </div>

      <ul className={`${styles.services__list} list-services`}>
        <li className={styles.services__list__item}>
          <p className='text-sm text-italic'>SOFTWARE DEVELOPMENT</p>
        </li>

        <li className={styles.services__list__item}>
          <p className='text-sm text-italic'>PRODUCT DESIGN</p>
        </li>

        <li className={styles.services__list__item}>
          <p className='text-sm text-italic'>3D MODELING</p>
        </li>

        <li className={styles.services__list__item}>
          <p className='text-sm text-italic'>BRANDING</p>
        </li>
      </ul>
    </section>
  )
}

export default index