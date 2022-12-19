import React from "react"
import "./carrousel.css"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const Carrousel = ({ setCarrousel, setCarrouselData, carrouselData }) => {
  const [thatOne, setThatOne] = useState(carrouselData[0])
  console.log(thatOne)
  return (
    <div className="cc">
      <FontAwesomeIcon
        onClick={() => {
          setCarrousel(false)
          setCarrouselData([])
        }}
        icon={faTimes}
        className="close"
      />
      <div onClick={(e) => e.stopPropagation()} className="carrousel">
        <ul className="slides">
          {carrouselData.map((u, i) => (
            <>
              <input type="radio" name="radio-buttons" id={u} defaultChecked={i === 0} />
              <li className="slide-container">
                <div className="slide-image">
                  <img alt="..." src={u} />
                </div>
                <div className="carousel-controls">
                  <label htmlFor={carrouselData[i - 1]} className="prev-slide">
                    <span
                      onClick={() => {
                        if (carrouselData[i - 1]) {
                          setThatOne(carrouselData[i - 1])
                        }
                      }}
                    >
                      &lsaquo;
                    </span>
                  </label>
                  <label htmlFor={carrouselData[i + 1]} className="next-slide">
                    <span
                      onClick={() => {
                        if (carrouselData[i + 1]) {
                          setThatOne(carrouselData[i + 1])
                        }
                      }}
                    >
                      &rsaquo;
                    </span>
                  </label>
                </div>
              </li>
            </>
          ))}
          <div className="carousel-dots">
            {carrouselData.map((u, i) => (
              <label onClick={() => setThatOne(u)} htmlFor={u} className={`carousel-dot ${String(thatOne) === String(u) ? "color" : ""}`} id={u}></label>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Carrousel
