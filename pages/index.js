import Head from "next/head"
import { Navbar, Hero, About, Work, Services, Awards, Shots, Footer } from "components/organisms"

export default function Home() {
  return (
    <div className="container">
      <Head lang="en">
        <title>Changce - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fade-left"/>
      <div className="fade-right"/>

      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Awards />
      <Shots />
      <Footer />
    </div>
  )
}
