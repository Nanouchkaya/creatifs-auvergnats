import React from "react"

// Locals imports
import contactStyles from "../assets/styles/contact.module.scss"

const Contact = ({ sal }) => (
  <div
    className={contactStyles.container}
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="contact"
  >
    Form contact
  </div>
)

export default Contact
