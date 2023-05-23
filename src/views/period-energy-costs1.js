import React from 'react'

import { Helmet } from 'react-helmet'

import './period-energy-costs1.css'

const PeriodEnergyCosts1 = (props) => {
  return (
    <div className="period-energy-costs1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="period-energy-costs1-dummy-container">
        <span className="period-energy-costs1-text">
          <span>
            Period Energy Costs
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default PeriodEnergyCosts1
