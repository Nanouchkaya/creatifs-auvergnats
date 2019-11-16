import React from "react"

// Locals imports
import "../assets/styles/contact.module.scss"

const Contact = ({ sal }) => (
  <p
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="contact"
  >
    Form contact
  </p>
)

export default Contact
