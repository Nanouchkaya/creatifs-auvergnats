import React from "react"

// Locals imports
import teamStyles from "../assets/styles/team.module.scss"
import TeamOne from "../assets/images/cynydd.jpg"
import TeamTwo from "../assets/images/caroline.jpg"
import fbIcon from "../assets/images/icons/facebook.png"
import itIcon from "../assets/images/icons/instagram.png"

const Team = () => (
  <div className={teamStyles.container} id="team">
    <h1 className={teamStyles.title}>Les Organisatrices</h1>

    <div className={teamStyles.team}>
      <div className={teamStyles.profil}>
        <div
          className={teamStyles.photo}
          style={{ backgroundImage: `url(${TeamOne}` }}
        />
        <span className={teamStyles.name}>Christelle</span>
        <ul className={teamStyles.teamLinks}>
          <li>
            <a href="https://www.etsy.com/shop/cynydd/" title="Site">
              Cynydd
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/cynyddshop/" title="Facebook">
              <img src={fbIcon} alt="facebook" className={teamStyles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cynydd/?hl=fr" title="Instagram">
              <img src={itIcon} alt="instagram" className={teamStyles.icon} />
            </a>
          </li>
        </ul>
        <p className={teamStyles.role}>
          S'occupe des réseaux sociaux et de répondre aux mails
        </p>
      </div>

      <div className={teamStyles.profil}>
        <div
          className={teamStyles.photo}
          style={{ backgroundImage: `url(${TeamTwo}` }}
        />
        <span className={teamStyles.name}>Caroline</span>
        <ul className={teamStyles.teamLinks}>
          <li>
            <a href="http://artcaroline.etsy.com/" title="Site">
              Art'Caroline
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/artcarolinecreation/"
              title="Facebook"
            >
              <img src={fbIcon} alt="facebook" className={teamStyles.icon} />
            </a>
          </li>
          <li>
            <a href="" title="Instagram">
              <img src={itIcon} alt="instagram" className={teamStyles.icon} />
            </a>
          </li>
        </ul>
        <p className={teamStyles.role}>S'occupe de dénicher de super lieux</p>
      </div>
    </div>
  </div>
)

export default Team
