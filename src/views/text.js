import React from 'react'

import { Helmet } from 'react-helmet'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text-text"></div>
    </div>
  )
}

export default Text
