import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faCode,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faViber,
  faConnectdevelop,
} from '@fortawesome/free-brands-svg-icons'
import { FaLinkedinIn } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
import './Sidebar.scss'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleNav = () => {
    setSidebar(!sidebar)
  }

  return (
    <aside>
      <button
        className={sidebar ? 'burger close' : 'burger'}
        type="button"
        onClick={toggleNav}
      >
        {sidebar ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
      <nav className={sidebar ? "nav open" : "nav"}>
        <Link to="/" className="nav__logo logo" onClick={toggleNav}>
          <img src={logo} alt="logo" width={30} height={30} />
        </Link>
        <div className="nav__list">
          <NavLink
            className="nav__item"
            exact="true"
            activeclassname="active"
            to="/"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink className="nav__item" exact="true" to="/about" onClick={toggleNav}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink className="nav__item" exact="true" to="/projects" onClick={toggleNav}>
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
          </NavLink>
          <NavLink className="nav__item" exact="true" to="/contact" onClick={toggleNav}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </div>

        <ul className="nav__social social">
          <li className="social__item">
            <a
              className="social__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/natalya-bortsova-156b6113b/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li className="social__item">
            <a
              className="social__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NatalyaBortsova"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li className="social__item">
            <a
              className="social__link"
              target="_blank"
              rel="noreferrer"
              href="https://telegram.me/natalya_bortsova"
            >
              <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
            </a>
          </li>
          <li className="social__item">
            <a
              className="social__link"
              target="_blank"
              rel="noreferrer"
              href="viber://chat?number=%2B4380995670708"
            >
              <FontAwesomeIcon icon={faViber} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
