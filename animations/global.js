import { useEffect } from 'react'
import { gsap } from "gsap"

const GlobalAnimations = () => {
  useEffect(() => {
    gsap.fromTo(".text-display span",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "Expo.easeInOut"
      },
    );
  }, [])

  return;
}

export default GlobalAnimations
