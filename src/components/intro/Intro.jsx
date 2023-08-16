import React from "react"
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"
import ME from "../../assets/me.JPG"
import "./intro.css"

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p> I’ve spent several months in a remote environment, working withHTML, CSS, JavaScript,React ,Angular building everything fromlanding pages to APIs. Studying in a Tunisian BootCamp helped mecollaborate with fellow developers. Additionally, Working solo onsome projects after i get 6 months experince with Kuwait Bitscompany (Remote) has helped me become efficient, productive, andfast even in a very stressful environment, which is an importantskill in the tech industry , Also i significantly enhanced my skillsmore while working at Sastec Group (on-site) for 7 months, a Frenchcompany, within a dynamic and extensive team environment.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
