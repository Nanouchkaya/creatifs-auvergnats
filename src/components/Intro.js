import React from "react"

// Locals imports
import introStyles from "../assets/styles/intro.module.scss"

const Intro = ({ sal }) => (
  <div
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="intro"
  >
    Présentation collectif
  </div>
)

export default Intro
