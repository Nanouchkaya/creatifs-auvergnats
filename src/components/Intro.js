import React from "react"

// Locals imports
import introStyles from "../assets/styles/intro.module.scss"

const Intro = () => (
  <div className={introStyles.container} id="intro">
    <h1 className={introStyles.title}>Les créatifs auvergnats</h1>
    <h2 className={introStyles.subtitle}>
      Par la team <strong>Etsy</strong> auvergne
    </h2>
    <p className={introStyles.paragraphe}>
      Le collectif "Les créatifs auvergnats" rassemble des créateurs de notre
      belle région : l'<strong>auvergne</strong>. Un seul mot d'ordre parmi ces
      créateurs : le fait-main, et le <strong>fait-main</strong> local ! Sous la
      bannière "Les créatifs auvergnats" se regroupe plusieurs créateurs qui
      souhaitent faire connaitre leur savoir-faire et partager avec vous une
      expérience unique, que ce soit de la maroquinerie, des bijoux en perles,
      des cartes à planter, des cosmétiques bio ou encore des doudous pour
      enfants. Un large éventail de créations vous attendent.
    </p>
    <p className={introStyles.paragraphe}>
      Plusieurs fois dans l'année, nous organisons des
      <strong> marchés de créateurs</strong> pour promouvoir le fait-main
      auvergnat ainsi que des apéros créateurs pour échanger dans nos métiers.
      Notre souhait pour l'avenir est de mettre en place des
      <strong>boutiques éphémères</strong> ainsi que de nombreux marchés de
      créateurs à <strong>Clermont-Ferrand</strong> mais aussi partout en
      auvergne.
    </p>
  </div>
)

export default Intro
