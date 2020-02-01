import React, { useState } from "react"

// Locals imports
import footerStyles from "../assets/styles/footer.module.scss"
import LegalMention from "./LegalMention"
import fbIcon from "../assets/images/icons/facebook.png"
import itIcon from "../assets/images/icons/instagram.png"

const Footer = () => {
  const [state, setState] = useState({ status: false })

  const displayLegalMention = e => {
    setState({
      status: !state.status,
    })
  }
  return (
    <footer className={footerStyles.footer}>
      {state.status && <LegalMention className={footerStyles.legalmention} />}
      <a href="https://www.facebook.com/teametsyauvergne" title="Facebook">
        <img src={fbIcon} alt="facebook" className={footerStyles.icon} />
      </a>
      <a href="https://www.instagram.com/teametsyauvergne" title="Instagram">
        <img src={itIcon} alt="instagram" className={footerStyles.icon} />
      </a>
      <button
        type="button"
        onClick={displayLegalMention}
        className={footerStyles.button}
      >
        Mentions légales
      </button>
    </footer>
  )
}

export default Footer
