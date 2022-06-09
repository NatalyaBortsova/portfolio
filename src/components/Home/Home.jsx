import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['N', 'a', 't', 'a', 'l', 'y', 'a']
  const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']

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
    <section className="homepage container-animate">
      <p className="homepage__text">Let's build something together</p>
      <h1 className="homepage__title title">
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>{' '}
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>{' '}
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
        </span>
      </h1>
      <p className="homepage__descr description">
        A passionate and self-motivated Junior Front-End Web Developer having an
        experience of building Websites with HTML, CSS and JavaScript. Currently
        I'am focused on studying ReactJS.
      </p>
      <Link className="homepage__link" to="/contact">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={contactArray}
          index={22}
        />
      </Link>
      
    </section>
    <Loader type='ball-scale-ripple'/>
    </>
    
  )
}

export default Home
