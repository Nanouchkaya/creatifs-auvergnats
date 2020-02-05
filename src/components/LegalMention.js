import React from "react"

// Locals imports
import mentionLegalStyles from "../assets/styles/mentionLegal.module.scss"

const LegalMention = () => {
  return (
    <div className={mentionLegalStyles.container}>
      <h1 className={mentionLegalStyles.title}>Mentions légales</h1>
      <p className={mentionLegalStyles.paragraphe}>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site les informations suivantes :
      </p>

      <h2 className={mentionLegalStyles.subtitle}>Éditeur</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Le site https://creatifs-auvergnats.netlify.com est la propriété
        exclusive du collectif les Créatifs Auvergnats, qui l'édite.
      </p>

      <ul className={mentionLegalStyles.liste}>
        <li>
          Collectif les Créatifs Auvergnats, 2 rue Grégoire de Tours 63000
          Clermont-Ferrand
        </li>
        <li>
          Adresse de courrier électronique : lescreatifsauvergnats@gmail.com
        </li>
        <li>Directeur de la publication : Caroline Thieu</li>
        <li>
          Contactez le responsable de la publication :
          lescreatifsauvergnats@gmail.com
        </li>
      </ul>

      <h2 className={mentionLegalStyles.subtitle}>
        Hébergement et développement
      </h2>
      <p className={mentionLegalStyles.paragraphe}>
        Le site est déployé sous{" "}
        <a className={mentionLegalStyles.link} href="https://www.netlify.com/">
          Netlify
        </a>
        . Le contenu est édité et hébergé avec ContenfulCMS. <br />
        Le présent site a été développé sous Gatsby par{" "}
        <a
          className={mentionLegalStyles.link}
          href="https://www.linkedin.com/in/claudine-brun/?locale=fr_FR"
        >
          Claudine Brun
        </a>
        .
      </p>

      <h2 className={mentionLegalStyles.subtitle}>Images et photos</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Photographies par{" "}
        <a
          className={mentionLegalStyles.link}
          href="https://www.amandinebaudet.com/"
        >
          Amandine Baudet
        </a>
        <br />
        Logo par{" "}
        <a className={mentionLegalStyles.link} href="http://cynydd.etsy.com">
          Cynydd
        </a>
        <br />
        Icones réseaux sociaux par{" "}
        <a className={mentionLegalStyles.link} href="https://icons8.com/">
          Icons8
        </a>
      </p>

      <h2 className={mentionLegalStyles.subtitle}>Cookies</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Aucun cookie n'est utilisé sur ce site.
      </p>
    </div>
  )
}

export default LegalMention
