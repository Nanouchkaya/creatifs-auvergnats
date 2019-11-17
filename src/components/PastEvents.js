import React from "react"

// Locals imports
import pasteventsStyles from "../assets/styles/pastEvents.module.scss"

const PastEvents = ({ sal }) => (
  <div
    className={pasteventsStyles.container}
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
  >
    Marchés terminés
  </div>
)

export default PastEvents