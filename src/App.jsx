import React from "react"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Academic from "./components/portfolio/Academic"
import Portfolio from "./components/portfolio/Portfolio"
import Topbar from "./components/topbar/Topbar"

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Academic />
      <Contact />
      <Footer />
    </>
  )
}

export default App
