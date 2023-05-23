import React from 'react'

import { Helmet } from 'react-helmet'

import './frame270c.css'

const Frame270C = (props) => {
  return (
    <div className="frame270c-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame270c-dummy-container">
        <span className="frame270c-text">
          <span>27.0 C</span>
        </span>
      </div>
    </div>
  )
}

export default Frame270C
