import React from "react"

// Locals imports
import "../assets/styles/team.module.scss"

const Team = ({ sal }) => (
  <p
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="team"
  >
    Les chefs
  </p>
)

export default Team
