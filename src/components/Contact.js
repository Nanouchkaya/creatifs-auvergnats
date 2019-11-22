import React, { useState } from "react"

// Locals imports
import contactStyles from "../assets/styles/contact.module.scss"

const Contact = ({ sal }) => {
  const [state, setState] = useState({ status: "" })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setState({ status: "SUCCESS" })
      } else {
        setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  const { status } = state

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
        action="https://formspree.io/xzbblzyv"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_gotcha" />
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
            name="_replyto"
            id="_replyto"
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
        {status === "SUCCESS" ? (
          <p className={contactStyles.statusMessage}>Merci !</p>
        ) : (
          <button className={contactStyles.formButton} type="submit">
            ~ Envoyer ~
          </button>
        )}
        {status === "ERROR" && (
          <p className={contactStyles.statusMessage}>
            Oups ! Le message n'a pu être envoyé.
          </p>
        )}
      </form>
    </div>
  )
}
export default Contact

// fetch("/")
//       .then(res => {
//         console.log(res)
//         if (status === 200) {
//           e.target.reset()
//           setState({
//             ...state,
//             status: "SUCCESS",
//           })
//         }
//       })
//       .catch(error => {
//         console.log(error)
//         setState({
//           ...state,
//           errors: [error],
//         })
//       })
