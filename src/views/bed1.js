import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './bed1.css'

const Bed1 = (props) => {
  return (
    <div className="bed1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="bed1-frame3">
        <img
          alt="BackArrow1555"
          src="/playground_assets/backarrow1555-yf02.svg"
          className="bed1-back-arrow"
        />
        <img
          alt="BackArrow1555"
          src="/playground_assets/backarrow1555-qeaq.svg"
          className="bed1-back-arrow1"
        />
        <img
          alt="BackArrow1555"
          src="/playground_assets/backarrow1555-un0i.svg"
          className="bed1-back-arrow2"
        />
        <span className="bed1-text">
          <span>
            Period Energy Costs
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="Rectangle131555"
          src="/playground_assets/rectangle131555-flib-200h.png"
          className="bed1-rectangle13"
        />
        <img
          alt="Rectangle141556"
          src="/playground_assets/rectangle141556-otso.svg"
          className="bed1-rectangle14"
        />
        <span className="bed1-text02">
          <span>£22.40</span>
        </span>
        <span className="bed1-text04">
          <span>16.5 C</span>
        </span>
        <img
          alt="BackArrow1556"
          src="/playground_assets/backarrow1556-3i9.svg"
          className="bed1-back-arrow3"
        />
        <img
          alt="BackArrow1556"
          src="/playground_assets/backarrow1556-wqlq.svg"
          className="bed1-back-arrow4"
        />
        <span className="bed1-text06">
          <span>
            Period Energy Costs
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="Rectangle151556"
          src="/playground_assets/rectangle151556-5xe-200h.png"
          className="bed1-rectangle15"
        />
        <img
          alt="Rectangle161556"
          src="/playground_assets/rectangle161556-tjtt.svg"
          className="bed1-rectangle16"
        />
        <span className="bed1-text08">
          <span>£22.40</span>
        </span>
        <span className="bed1-text10">
          <span>16.5 C</span>
        </span>
        <div className="bed1-component3">
          <img
            alt="RoomRectangleI155"
            src="/playground_assets/roomrectanglei155-fw7-200h.png"
            className="bed1-room-rectangle"
          />
          <span className="bed1-text12">
            <span>Bed 1</span>
          </span>
        </div>
        <span className="bed1-text14">
          <span>Ambient Temperature</span>
        </span>
        <Link to="/" className="bed1-navlink">
          <img
            alt="image11611"
            src="/playground_assets/image11611-we2a-200h.png"
            className="bed1-image1"
          />
        </Link>
      </div>
    </div>
  )
}

export default Bed1
