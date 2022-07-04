import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import arrow from 'assets/icons/arrow.svg'
import { gsap } from 'gsap'

const index = () => {
  const titleRef = useRef(null)
  const mailRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 48, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(mailRef.current,
      { y: 80, opacity: 0 },
      { scrollTrigger: titleRef.current, delay: .35, y: 0, opacity: 1 }
    )

    gsap.fromTo("footer ul li",
      { y: 48, opacity: 0 },
      { scrollTrigger: "footer ul li", stagger: .05, delay: .25, y: 0, opacity: 1 }
    )

    gsap.fromTo(".copy p",
      { y: 48, opacity: 0 },
      { scrollTrigger: ".copy", stagger: .2, y: 0, opacity: 1 }
    )
  })

  return (
    <footer className={`${styles.footer} footer`}>
      <h2 className='text-xs text-semibold text-italic' ref={titleRef}>Get in touch</h2>
      <a href="/pdf/cv-ricardo.pdf" target="_blank">
        <p className={`${styles.footer__mail} text-display text-italic text-black text-underline`} ref={mailRef}>Download CV</p>
      </a>

      <ul className={styles.footer__links}>
        <li className={styles.footer__links__item}>
          <a href='https://www.behance.net/changcer'>
            <p className='text-md text-italic text-underline'>Behance</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>

        <li className={styles.footer__links__item}>
          <a href='https://twitter.com/_changce'>
            <p className='text-md text-italic text-underline'>Twitter</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>

        <li className={styles.footer__links__item}>
          <a href='https://api.whatsapp.com/send?phone=+541166065718'>
            <p className='text-md text-italic text-underline'>Whatsapp</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>

        <li className={styles.footer__links__item}>
          <a href='https://www.instagram.com/_changce.design/'>
            <p className='text-md text-italic text-underline'>Instagram</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>

        <li className={styles.footer__links__item}>
          <a href='https://www.linkedin.com/in/changcer/'>
            <p className='text-md text-italic text-underline'>Linkedin</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>

        <li className={styles.footer__links__item}>
          <a href='mailto:changcer@gmail.com'>
            <p className='text-md text-italic text-underline'>Email</p>
            <img src={arrow.src} className="icon-sm" />
          </a>
        </li>
      </ul>

      <div className={`${styles.footer__copyright} copy`}>
        <p className='text-xs'>Changce © 2022</p>
        <p className='text-xs'>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}

export default index