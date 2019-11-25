import React from "react"

// Locals imports
import indexStyles from "../assets/styles/index.module.scss"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Team from "../components/Team"
import NextEvent from "../components/NextEvent"
import CreatorsList from "../components/CreatorsList"
import PastEvents from "../components/PastEvents"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <div id={indexStyles.wrapper}>
      <Head />
      <Header />
      <main className={indexStyles.main}>
        <Intro />
        <Team />
        <NextEvent />
        <CreatorsList />
        <PastEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
