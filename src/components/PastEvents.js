import React from "react"

// Locals imports
import "../assets/styles/pastEvents.module.scss"

const PastEvents = ({ sal }) => (
  <p
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
  >
    Marchés terminés
  </p>
)

export default PastEvents