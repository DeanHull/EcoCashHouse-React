import React from 'react'

import { Helmet } from 'react-helmet'

import './frame2140.css'

const Frame2140 = (props) => {
  return (
    <div className="frame2140-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame2140-dummy-container">
        <span className="frame2140-text">
          <span>£21.40</span>
        </span>
      </div>
    </div>
  )
}

export default Frame2140
