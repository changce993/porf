import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { gsap } from "gsap"
import award1 from "assets/images/award1.png"
import award2 from "assets/images/award2.png"

const index = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".award-image p",
      { y: 50, scale: .9 },
      { scrollTrigger: { trigger: ".award-image", scrub: 1 }, y: -50, scale: 1.2 }
    )

    gsap.fromTo(".award-image-1",
      { y: 0, scale: .9, rotateZ: 0 },
      { scrollTrigger: { trigger: ".award-image-1", scrub: 1 }, y: 50, rotateZ: 5, scale: 1.1 }
    )

    gsap.fromTo(".award-image-2",
      { y: 0, scale: .9, rotateZ: 0 },
      { scrollTrigger: { trigger: ".award-image-2", scrub: 1 }, y: -50, rotateZ: -5, scale: 1.1 }
    )
  }, [])

  return (
    <section className={styles.awards}>
      <h2 className='text-xs text-semibold text-italic' ref={titleRef}>Awards</h2>
      <div className={styles.awards__images}>
        <div className={`${styles.awards__images__item} award-image award-image-1`}>
          <p className='text-md text-italic text-bold text-right'>THIS IS WHERE I WOULD PUT MY AWARDS</p>
          <img src={award1.src} />
        </div>
        <div className={`${styles.awards__images__item} award-image award-image-2`}>
          <p className='text-md text-italic text-bold'>IF I HAD ONE</p>
          <img src={award2.src} />
        </div>
      </div>
    </section>
  )
}

export default index