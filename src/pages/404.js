import React from "react"
import { Link } from "gatsby"

// Locals imports
import errorPageStyles from "../assets/styles/errorPage.module.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "../components/Head"

const ErrorPage = () => {
  const salParams = ["fade", "400", "ease-in"]
  return (
    <div id={errorPageStyles.wrapper}>
      <Head />
      <Header />
      <main className={errorPageStyles.container}>
        <h1 className={errorPageStyles.title}>Oups ! Erreur 404</h1>
        <p>La page recherchée n'existe pas</p>
        <Link to="/">Retour à l'accueil</Link>
      </main>
      <Footer sal={salParams} />
    </div>
  )
}

export default ErrorPage
