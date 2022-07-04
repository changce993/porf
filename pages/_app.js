import "styles/globals.scss"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GlobalAnimations from "animations/global"

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalAnimations />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
