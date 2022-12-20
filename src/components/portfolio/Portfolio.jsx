import React from "react"
import IMG1 from "../../assets/Trade Accounts - 7.png"
import IMG11 from "../../assets/Trade Accounts - 1.png"
import IMG12 from "../../assets/Trade Accounts - 2.png"
import IMG13 from "../../assets/Trade Accounts - 3.png"
import IMG14 from "../../assets/Trade Accounts - 4.png"
import IMG15 from "../../assets/Trade Accounts - 5.png"
import IMG16 from "../../assets/Trade Accounts - 6.png"
import IMG18 from "../../assets/Trade Accounts - 8.png"
import IMG19 from "../../assets/Trade Accounts - 9.png"
import IMG110 from "../../assets/Trade Accounts - 10.png"
import IMG111 from "../../assets/Trade Accounts - 11.png"
import IMG112 from "../../assets/Trade Accounts - 12.png"
import IMG113 from "../../assets/Trade Accounts - 13.png"
import IMG114 from "../../assets/Trade Accounts - 14.png"
import IMG115 from "../../assets/Trade Accounts - 15.png"
import IMG116 from "../../assets/Trade Accounts - 16.png"
import IMG118 from "../../assets/Trade Accounts - 18.png"
import IMG2 from "../../assets/BetSite-Project.png"
import IMG3 from "../../assets/chatBot-Project.png"
import IMG4 from "../../assets/portfolio-v1-2.png"
import IMG41 from "../../assets/portfolio-v1-1.png"
import IMG5 from "../../assets/pageBuilder-1.png"
import IMG6 from "../../assets/Ui-Clean.png"

import "./portfolio.css"
import Carrousel from "./Carrousel"
import { useState } from "react"

const Portfolio = () => {
  const [carrousel, setCarrousel] = useState(false)
  const [carrouselData, setCarrouselData] = useState([])

  const soloProjects = [
    {
      id: 1,
      title: "Social Media (for Gamers)",
      others: true,
      imgs: [IMG1, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG18, IMG19, IMG110, IMG111, IMG112, IMG113, IMG114, IMG115, IMG116, IMG118],
      img: IMG1,
      description: "Worked on social media platform for gamers to trade their account or sell & buy , also , chat part in the platform so they can grow their community and share knowloadge about games",
      technologies: "Nodejs | Express JS | MongoDB | CSS | React Js | Redux Toolkit | Socket IO",
      github: "https://github.com/Ahmed1Bouafif/Accounts-Trade",
    },
    {
      id: 2,
      title: "Portfolio V1",
      others: true,
      imgs: [IMG4, IMG41],
      img: IMG4,
      description: "Personal portfolio",
      technologies: "React | tailwind",
      github: "https://github.com/Ahmed1Bouafif/Portfolio-V1",
    },
    {
      id: 3,
      title: "BetSite",
      others: true,
      imgs: [IMG2],
      img: IMG2,
      description: "Betsite Demo Platform Using External API",
      technologies: "React | SCSS | Redux",
      github: "https://github.com/Ahmed1Bouafif/Bet-API",
    },
    {
      id: 4,
      title: "ChatBot",
      others: true,
      imgs: [IMG3],
      img: IMG3,
      description: " Created Chat App with dummy data Design inspired by Dribble",
      technologies: "React TS | tailwind",
      github: "",
    },
    {
      id: 5,
      title: "Web Builder",
      others: true,
      imgs: [IMG5],
      img: IMG5,
      description: "Web platform for creating web Sites",
      technologies: "React TS | tailwind ",
      github: "",
    },
    {
      id: 6,
      title: "Ui-Clean",
      others: true,
      imgs: [IMG6],
      img: IMG6,
      description: "Full Responsive Simple Web Page",
      technologies: "HTML | CSS ",
      github: "https://github.com/Ahmed1Bouafif/Simple-Ui-for-client",
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img
                onClick={
                  project.others
                    ? () => {
                        setCarrousel(true)
                        setCarrouselData(project.imgs)
                      }
                    : () => setCarrousel(false)
                }
                src={project.img}
                alt={project.title}
              />
              {!project.imgs.length > 1 ? (
                <></>
              ) : (
                <>
                  <div
                    onClick={
                      project.others
                        ? () => {
                            setCarrousel(true)
                            setCarrouselData(project.imgs)
                          }
                        : () => setCarrousel(false)
                    }
                    className="more"
                  ></div>
                  <p
                    onClick={
                      project.others
                        ? () => {
                            setCarrousel(true)
                            setCarrouselData(project.imgs)
                          }
                        : () => setCarrousel(false)
                    }
                    className="imagesNumber"
                  >
                    {" "}
                    +{project.imgs.length} images Click to see{" "}
                  </p>
                </>
              )}
            </div>
            <div className="portfolio__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={project.github} target="_blank" className="btn" rel="noreferrer">
                {project.github.trim().length ? "GitHub Link" : "BitBucket"}
              </a>
            </div>
          </article>
        ))}
      </div>
      {!carrousel && !carrouselData.length ? <></> : <Carrousel carrouselData={carrouselData} setCarrouselData={setCarrouselData} setCarrousel={setCarrousel} />}
    </section>
  )
}

export default Portfolio
