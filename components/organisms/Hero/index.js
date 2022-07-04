import { useRef, useEffect } from "react"
import styles from "./styles.module.scss"
import hero from "/public/assets/images/hero.jpg"
import { gsap } from "gsap"
import { useParallaxPointer } from "hooks"

const index = () => {

  const imageRef = useRef(null)
  const imageContainerRef = useRef(null)
  const { setParallaxItem } = useParallaxPointer()

  useEffect(() => {
    gsap.fromTo(imageContainerRef.current,
      { opacity: 0, y: 120, rotateX: -20, rotateY: 60, rotateZ: 8 },
      { delay: .75, duration: 2, opacity: 1, y: 0, rotateX: 20, rotateY: -40, rotateZ: 4 }
    )

    gsap.fromTo(imageContainerRef.current,
      {  y: 0, rotateX: 20, rotateY: -40, },
      { scrollTrigger: { scrub: 1 }, y: -1500, rotateX: -80, rotateY: 10, rotateZ: -60, }
    )

    gsap.fromTo(".text-display span",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: "Expo.easeInOut" },
    )

    setParallaxItem([imageRef.current])
  }, [])

  return (
    <header className={styles.hero}>
      <h1 className="text-display">
        <span className="text-shadow" style={{ zIndex: 4 }}>CREATING</span>
        <span className="text-shadow" style={{ zIndex: 3 }}>INNOVATIVE</span>
        <span className="text-shadow" style={{ zIndex: 2 }}>WEBSITES &</span>
        <span className="text-shadow" style={{ zIndex: 1 }}>MOBILE APPS</span>
        <span>USER CENTRIC.</span>
      </h1>

      <div className={styles.hero__image} ref={imageContainerRef}>
        <img
          speed={5}
          ref={imageRef}
          src={hero.src}
          alt="creative digital agency hero"
        />
      </div>
    </header>
  )
}

export default index