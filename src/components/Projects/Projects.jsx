import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import './Projects.scss'
import data from '../../data/data'


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <>
      <div className="projects container-animate">
        <div className="projects__container">
          <h1 className="projects__title title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
              index={15}
            />
          </h1>

          <h2 className="projects__subtitle">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'W',
                'h',
                'a',
                't',
                '',
                'I',
                '',
                'h',
                'a',
                'v',
                'e',
                ' ',
                'b',
                'u',
                'i',
                'l',
                't',
              ]}
              index={30}
            />
          </h2>
          <Swiper
            wrapperTag="ul"
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((item) => (
              <>
                <SwiperSlide key={item.id} tag="li" className="projects__item">
                  <div className="projects__info">
                    <h3 className="projects__info-title">{item.title}</h3>
                    <h4 className="projects__info-subtitle">{item.subtitle}</h4>
                    <div className="projects__info-links">
                      <a
                        href={item.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="projects__info-link"
                      >
                        Demo
                      </a>
                      <a
                        href={item.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="projects__info-link"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                  <img
                    className="projects__image"
                    src={item.image}
                    alt="Coin App"
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Projects
