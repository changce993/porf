import { useRef, useEffect } from "react"
import styles from './styles.module.scss'
import { gsap } from "gsap"

const index = () => {

  useEffect(() => {
    gsap.fromTo(".nav p",
      { y: -48, opacity: 0 },
      { stagger: .2, delay: .75, y: 0, opacity: 1 }
    )
  }, [])

  return (
    <nav className={`${styles.navbar} nav`}>
      <p className='text-sm'>CHANGCE.</p>
      <p className='text-sm'>MENU</p>
    </nav>
  )
}

export default index