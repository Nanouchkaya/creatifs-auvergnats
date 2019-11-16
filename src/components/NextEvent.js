import React from "react"

// Locals imports
import "../assets/styles/nextEvent.module.scss"

const NextEvent = ({ sal }) => (
  <p
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="nextevent"
  >
    Prochain marché
  </p>
)

export default NextEvent
