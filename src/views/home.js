import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-i-phone141">
        <span className="home-text">
          <span>Eco Cash House</span>
        </span>
        <Link to="/compare" className="home-navlink">
          <div className="home-frame1"></div>
        </Link>
        <Link to="/compare" className="home-navlink1">
          <div className="home-frame2"></div>
        </Link>
        <Link to="/room-select" className="home-text2">
          Rooms
        </Link>
        <Link to="/compare" className="home-text3">
          Compare
        </Link>
      </div>
    </div>
  )
}

export default Home
