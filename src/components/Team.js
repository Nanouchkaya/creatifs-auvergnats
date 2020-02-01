import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Locals imports
import teamStyles from "../assets/styles/team.module.scss"
import fbIcon from "../assets/images/icons/facebook.png"
import itIcon from "../assets/images/icons/instagram.png"
import twIcon from "../assets/images/icons/twitter.png"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulOrganisateur {
        edges {
          node {
            enterpriseName
            facebook
            firstname
            id
            instagram
            roleDesc
            siteWeb
            twitter
            photo {
              id
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const persons = data.allContentfulOrganisateur.edges
  console.log(persons)
  return (
    <div className={teamStyles.container} id="team">
      <h1 className={teamStyles.title}>Les Organisatrices</h1>
      <div className={teamStyles.team}>
        {persons.map(person => {
          const photoURL = person.node.photo.file.url

          return (
            <div className={teamStyles.profil} key={person.node.id}>
              <div
                className={teamStyles.photo}
                style={{ backgroundImage: `url(${photoURL}` }}
              />
              <span className={teamStyles.name}>{person.node.firstname}</span>
              <ul className={teamStyles.teamLinks}>
                <li>
                  <a href={person.node.siteWeb} title="Site">
                    {person.node.enterpriseName}
                  </a>
                </li>
                {person.node.facebook && (
                  <li>
                    <a href={person.node.facebook} title="Facebook">
                      <img
                        src={fbIcon}
                        alt="facebook"
                        className={teamStyles.icon}
                      />
                    </a>
                  </li>
                )}
                {person.node.instagram && (
                  <li>
                    <a href={person.node.instagram} title="Instagram">
                      <img
                        src={itIcon}
                        alt="instagram"
                        className={teamStyles.icon}
                      />
                    </a>
                  </li>
                )}
                {person.node.twitter && (
                  <li>
                    <a href={person.node.twitter} title="Twitter">
                      <img
                        src={twIcon}
                        alt="twitter"
                        className={teamStyles.icon}
                      />
                    </a>
                  </li>
                )}
              </ul>
              <p className={teamStyles.role}>{person.node.roleDesc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
