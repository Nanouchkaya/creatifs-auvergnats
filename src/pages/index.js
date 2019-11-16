import React from "react"

// Locals imports
import "../assets/styles/_index.scss"
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
  // generals values for scroll reveal data attributes for each main components
  const salParams = ["slide-up", "300", "ease-in"]

  return (
    <div id="wrapper">
      <Head />
      <Header />
      <main>
        <Intro sal={salParams} />
        <Team sal={salParams} />
        <NextEvent sal={salParams} />
        <CreatorsList sal={salParams} />
        <PastEvents sal={salParams} />
        <Contact sal={salParams} />
      </main>
      <Footer sal={salParams} />
    </div>
  )
}

export default IndexPage
