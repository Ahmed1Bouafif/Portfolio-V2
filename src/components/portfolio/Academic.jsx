import React from "react"
import IMG1 from "../../assets/1.png"
import IMG11 from "../../assets/2.png"
import IMG12 from "../../assets/3.png"
import IMG13 from "../../assets/4.png"
import IMG2 from "../../assets/worker-side.mp4"
import IMG3 from "../../assets/sadem bob rezgui charaf.mkv"
import IMG4 from "../../assets/ahmed mvp.mkv"
import IMG5 from "../../assets/bob.mp4"
import IMG6 from "../../assets/bob2.mp4"

import "./portfolio.css"
import Carrousel from "./Carrousel"
import { useState } from "react"

const Portfolio = () => {
  const [carrousel, setCarrousel] = useState(false)
  const [carrouselData, setCarrouselData] = useState([])
  const soloProjects = [
    {
      id: 1,
      title: "You Camp",
      others: true,
      type: "img",
      imgs: [IMG1, IMG11, IMG12, IMG13],
      img: IMG1,
      description: "Worked as Developer in a team of 5 individuals to develop a platforme that makes all the campers can exchange their experience and buy tickets for orginazed Plans",
      technologies: "Angular JS | Nodejs | Express | CSS | MySQL | Bootstrap | cloudinary | stripe",
    },
    {
      id: 2,
      title: "Chat App",
      others: false,
      type: "video",
      img: IMG4,
      description: "I Build a chat application for my cahort ",
      technologies: "React | CSS | NodeJs | ExpressJs | cloudinary | MongoDB",
    },
    {
      id: 3,
      title: "Job Finder",
      others: false,
      type: "video",
      img: IMG2,
      description: "Worked as Developer in a team of 5 individuals to develop a platform that aims to help workers and employees find each others for part time jobs and minimise the risk of labor shortage .",
      technologies: "ReactNative | Nodejs | ExpressJs | MySQL | Sequalize | CSS | Firebase ",
    },
    {
      id: 4,
      title: "Easy Life",
      others: false,
      type: "video",
      img: IMG3,
      description: "Worked as Developer in a team of 5 individuals to develop a platforme that makes the students life easy means we make them know the houses that disponible for rent also collocations and a space for carpooling to make it easy for them",
      technologies: "React | Nodejs | ExpressJs | MongoDB | CSS | Bootstrap | cloudinary",
    },
    {
      id: 5,
      title: "Music Gallery",
      others: false,
      type: "video",
      img: IMG5,
      description: "I Build a music gallery that you can find the music vids for the picked instrument that you want",
      technologies: "React | CSS ",
    },
    {
      id: 6,
      title: "Card Memory Game",
      others: false,
      type: "video",
      img: IMG6,
      description: "I Build a card game which increase the memory and you can have fun while playing it ",
      technologies: "javascript | CSS ",
    },
  ]

  return (
    <section id="portfolio">
      <h5>Studyin</h5>
      <h2>Academic Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <>
              {project.type === "img" ? (
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
                </div>
              ) : (
                <div className="portfolio__item-image">
                  <video width="100%" height="100%" controls muted>
                    <source src={project.img} type="video/mp4" />
                  </video>
                </div>
              )}
            </>
            <div className="portfolio__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <p className="btn">Privet Projects</p>
            </div>
          </article>
        ))}
      </div>
      {!carrousel && !carrouselData.length ? <></> : <Carrousel carrouselData={carrouselData} setCarrouselData={setCarrouselData} setCarrousel={setCarrousel} />}
    </section>
  )
}

export default Portfolio
