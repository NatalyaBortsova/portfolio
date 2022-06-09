import React, { useState, useEffect } from 'react'
import {
  faCss3,
  faGitAlt,
  faGulp,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
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

      <section className="about container-animate">
        <div className="about__container">
          <div className="about__content">
            <h1 className="about__title title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                index={15}
              />
            </h1>
            
            <h2 className="about__subtitle">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['W', 'h', 'o', ' ', 'a', 'm', ' ', 'I']}
                index={23}
              />
            </h2>
            <p className="about__descr description">I am not your normal developer</p>
            <p className="about__descr description">
              I have spent the last 15 years in sales, working as a sales
              manager or call-center operator. I have always had a knack for
              technology and working with computers. In the end of 2021 I have
              seen video of some blogger who was developing simple landing page
              in his stream. I have done almost all his tutorials and made some
              websites. I loved the process of building such an amazing works
              and so then I have completed the course of MarkUp Developing. By
              making my portfolio I understand that my love to programming is
              growing up.
            </p>
            <p className="about__descr description">
              Fascinated with how intricate programming can be I was quickly
              drawn to learn more. I started learning javascript and was even
              more enthused with making websites interactive. I am now spending
              my time building projects with React JS and
              learning new technologies.
            </p>
          </div>
          <div className="about__image cubespinner">
            <div className="cubespinner__image cubespinner__image_html">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="cubespinner__image cubespinner__image_css">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="cubespinner__image cubespinner__image_react">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="cubespinner__image cubespinner__image_js">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="cubespinner__image cubespinner__image_git">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="cubespinner__image cubespinner__image_gulp">
              <FontAwesomeIcon icon={faGulp} color="#EC4D28" />
            </div>
          </div>
        </div>

      </section>
      <Loader type='ball-scale-ripple'/>
    </>
  )
}

export default About
