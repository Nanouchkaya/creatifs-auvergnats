import React, { useState } from "react"

// Locals imports
import contactStyles from "../assets/styles/contact.module.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = ({ sal }) => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...state,
      }),
    })
      .then()
      .catch(error => alert(error))
  }

  return (
    <div
      className={contactStyles.container}
      data-sal={sal[0]}
      data-sal-delay={sal[1]}
      data-sal-easing={sal[2]}
      id="contact"
    >
      <h1 className={contactStyles.title}>Nous contacter</h1>
      <form
        className={contactStyles.form}
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <label className={contactStyles.formLabel}>
          Nom
          <input
            className={contactStyles.formInput}
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </label>
        <label className={contactStyles.formLabel}>
          Email
          <input
            className={contactStyles.formInput}
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className={contactStyles.formLabel}>
          Objet
          <input
            className={contactStyles.formInput}
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
          />
        </label>
        <label className={contactStyles.formLabel}>
          Message
          <textarea
            className={contactStyles.formInput}
            name="message"
            id="message"
            rows="8"
            onChange={handleChange}
            required
          />
        </label>
        <button className={contactStyles.formButton} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}
export default Contact
