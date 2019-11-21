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
    <h1 className={contactStyles.title}>Nous contacter</h1>
    <form method="post" action="#">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Envoyer</button>
      <input type="reset" value="Effacer" />
    </form>
  </div>
)

export default Contact
