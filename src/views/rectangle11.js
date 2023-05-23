import React from 'react'

import { Helmet } from 'react-helmet'

import Rectangle111 from '../components/rectangle111'
import './rectangle11.css'

const Rectangle11 = (props) => {
  return (
    <div className="rectangle11-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="rectangle11-dummy-container">
        <Rectangle111></Rectangle111>
      </div>
    </div>
  )
}

export default Rectangle11
