import React from 'react'

import { Helmet } from 'react-helmet'

import './period-energy-costs.css'

const PeriodEnergyCosts = (props) => {
  return (
    <div className="period-energy-costs-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="period-energy-costs-dummy-container">
        <span className="period-energy-costs-text">
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

export default PeriodEnergyCosts
