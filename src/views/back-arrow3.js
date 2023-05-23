import React from 'react'

import { Helmet } from 'react-helmet'

import './back-arrow3.css'

const BackArrow3 = (props) => {
  return (
    <div className="back-arrow3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="back-arrow3-dummy-container">
        <img
          alt="BackArrow1175"
          src="/playground_assets/backarrow1175-cuvq.svg"
          className="back-arrow3-back-arrow"
        />
      </div>
    </div>
  )
}

export default BackArrow3
