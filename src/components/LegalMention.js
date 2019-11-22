import React from "react"

// Locals imports
import mentionLegalStyles from "../assets/styles/mentionLegal.module.scss"

const LegalMention = () => {
  return (
    <div className={mentionLegalStyles.container}>
      <h1 className={mentionLegalStyles.title}>
        Mentions légales
      </h1>
      <p className={mentionLegalStyles.paragraphe}>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
      </p>
      
      <h2 className={mentionLegalStyles.subtitle}>Éditeur</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Le site https://creatifs-auvergnats.netlify.com est la propriété exclusive du collectif les Créatifs Auvergnats, qui l'édite.
      </p>

      <ul className={mentionLegalStyles.liste}>
        <li>Tél : 00.06.66.06.66</li>
        <li>Adresse : 25 rue de l'event, 44000 Nantes</li>
        <li>Adresse de courrier électronique : lescreatifsauvergnats@gmail.com</li>
        <li>Directeur de la publication : Caroline Thieu</li>
        <li>Contactez le responsable de la publication : lescreatifsauvergnats@gmail.com</li>
      </ul>

      <h2 className={mentionLegalStyles.subtitle}>Hébergement</h2>
      <p className={mentionLegalStyles.paragraphe}>Le site est hébergé par <a className={mentionLegalStyles.link} href="https://www.netlify.com/">Netlify</a>.</p>

      <h2 className={mentionLegalStyles.subtitle}>Images et photos</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Photographies par <a className={mentionLegalStyles.link} href="https://www.amandinebaudet.com/">Amandine Baudet</a><br />
        Logo par <a className={mentionLegalStyles.link} href="http://cynydd.etsy.com">Cynydd</a><br />
        Icones réseaux sociaux par <a className={mentionLegalStyles.link} href="https://icons8.com/">Icons8</a></p>

      <h2 className={mentionLegalStyles.subtitle}>Développement</h2>
      <p className={mentionLegalStyles.paragraphe}>
        Le présent site a été développé bénévolement par <a className={mentionLegalStyles.link} href="https://www.coding-claudine.eu">Claudine Brun</a>. Il utilise une architecture JAMstack et les technologies suivantes : ReactJs, Gatsby, Sass, Contentful CMS (pour la gestion du contenu) et Formspree (pour la gestion des données du formulaire de contact).
      </p>

      <h2 className={mentionLegalStyles.subtitle}>Cookies</h2>
      <p className={mentionLegalStyles.paragraphe}>Aucun cookie n'est utilisé sur ce site.</p>
    </div>
  )
}

export default LegalMention
