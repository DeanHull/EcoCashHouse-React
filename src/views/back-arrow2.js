import React from 'react'

import { Helmet } from 'react-helmet'

import './back-arrow2.css'

const BackArrow2 = (props) => {
  return (
    <div className="back-arrow2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="back-arrow2-dummy-container">
        <img
          alt="BackArrow1175"
          src="/playground_assets/backarrow1175-4p2q.svg"
          className="back-arrow2-back-arrow"
        />
      </div>
    </div>
  )
}

export default BackArrow2
