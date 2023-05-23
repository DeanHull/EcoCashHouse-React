import React from 'react'

import { Helmet } from 'react-helmet'

import './back-arrow.css'

const BackArrow = (props) => {
  return (
    <div className="back-arrow-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="back-arrow-dummy-container">
        <img
          alt="BackArrow1176"
          src="/external/backarrow1176-3jh4.svg"
          className="back-arrow-back-arrow"
        />
      </div>
    </div>
  )
}

export default BackArrow
