import React from 'react'

import { Helmet } from 'react-helmet'

import './back-arrow1.css'

const BackArrow1 = (props) => {
  return (
    <div className="back-arrow1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="back-arrow1-dummy-container">
        <img
          alt="BackArrow1176"
          src="/playground_assets/backarrow1176-3jzk.svg"
          className="back-arrow1-back-arrow"
        />
      </div>
    </div>
  )
}

export default BackArrow1
