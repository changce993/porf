import { useEffect, useRef } from "react"
import arrow from 'assets/icons/arrow.svg'
import styles from './styles.module.scss'
import image1 from 'assets/images/work1.png'
import image2 from 'assets/images/work2.png'
import image3 from 'assets/images/work3.png'
import { gsap } from "gsap"

const index = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".list-item",
      { opacity: 0, y: 100 },
      { scrollTrigger: ".list-item", stagger: .1, duration: .5, delay: .4, opacity: 1, y: 0 }
    )

    gsap.fromTo(".carousel-images div",
      { x: 120, y: 120, opacity: 0, },
      { scrollTrigger: { trigger: ".carousel-images" }, stagger: .2, duration: 1, delay: .5, x: 0, y: 0, opacity: .5, }
    )

    gsap.fromTo(".carousel-images",
      { x: 100, y: 100 },
      { scrollTrigger: { trigger: ".carousel-images", scrub: 1 }, x: -100, y: -200 }
    )
  }, [])

  return (
    <section className={styles.work}>
      <h2 className='text-xs text-semibold text-italic' ref={titleRef}>Work</h2>

      <div className={`${styles.work__carousel} carousel-images`}>
        <div>
          <img src={image1.src} className={styles["work__carousel__first-image"]} />
        </div>
        <div>
          <img src={image2.src} className={styles["work__carousel__second-image"]} />
        </div>
        <div>
          <img src={image3.src} className={styles["work__carousel__third-image"]} />
        </div>
      </div>

      <ul className={styles.work__list}>
        <li className={`${styles.work__list__item} list-item`}>
          <a href="#">
            <p className='text-sm text-italic text-light'>INMERLY - (SOON)</p>
            <img src={arrow.src} alt="creative arrow icon link" className="icon-md" />
          </a>
        </li>

        <li className={`${styles.work__list__item} list-item`}>
          <a href="#">
            <p className='text-sm text-italic text-light'>OCUFY - (SOON)</p>
            <img src={arrow.src} alt="creative arrow icon link" className="icon-md" />
          </a>
        </li>

        <li className={`${styles.work__list__item} list-item`}>
          <a href="https://www.behance.net/gallery/127718591/Circulo-Saqra">
            <p className='text-sm text-italic text-light'>CIRCULO SAQRA</p>
            <img src={arrow.src} alt="creative arrow icon link" className="icon-md" />
          </a>
        </li>

        <li className={`${styles.work__list__item} list-item`}>
          <a href="https://www.behance.net/gallery/90209687/Arrow-UXUI-Case-Study">
            <p className='text-sm text-italic text-light'>ARROW</p>
            <img src={arrow.src} alt="creative arrow icon link" className="icon-md" />
          </a>
        </li>

        <li className={`${styles.work__list__item} list-item`}>
          <a href="https://www.behance.net/gallery/85265087/Codesign-%28Brand%29">
            <p className='text-sm text-italic text-light'>CODESIGN</p>
            <img src={arrow.src} alt="creative arrow icon link" className="icon-md" />
          </a>
        </li>
      </ul>

      <div className={styles.work__cta}>
        <a href="https://www.behance.net/changcer">
          <button className='text-xs btn-primary'>Behance</button>
        </a>

        <a href="https://www.linkedin.com/in/changcer/">
          <button className='text-xs btn-secondary'>Linkedin</button>
        </a>
      </div>
    </section>
  )
}

export default index
