import React from "react"

// Locals imports
import "../assets/styles/creatorsList.module.scss"

const CreatorsList = ({ sal }) => (
  <p
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="creators"
  >
    Liste des créatifs
  </p>
)

export default CreatorsList
