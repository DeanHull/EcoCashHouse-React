import React from 'react'

import { Helmet } from 'react-helmet'

import './frame3840.css'

const Frame3840 = (props) => {
  return (
    <div className="frame3840-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame3840-dummy-container">
        <span className="frame3840-text">
          <span>£38.40</span>
        </span>
      </div>
    </div>
  )
}

export default Frame3840
