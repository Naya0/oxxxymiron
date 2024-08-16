import React from 'react'
import Logo from '../Logo/Logo'
import ScrollAnimation from 'react-animate-on-scroll'
import Socials from '../Socials/Socials'

import { MENU } from '../utils/constants'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <header>
          <Logo />
          <nav className="menu">
            {
              MENU.map( ({ title, link }, i) => (
                <ScrollAnimation key={link} className='menu-item' animateIn='fadeInDown' delay={i * 100} offset={0}>
                  <Link to={`/${link}`}> {title} </Link>
                </ScrollAnimation>
              ))
            }
          </nav>
          <Socials />
        </header>
      </div>
    </section>
  )
}

export default Header