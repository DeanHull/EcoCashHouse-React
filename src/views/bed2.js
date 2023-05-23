import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './bed2.css'

const Bed2 = (props) => {
  return (
    <div className="bed2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="bed2-frame4">
        <img
          alt="BackArrowI157"
          src="/playground_assets/backarrowi157-to1c.svg"
          className="bed2-back-arrow"
        />
        <img
          alt="BackArrowI157"
          src="/playground_assets/backarrowi157-v4p.svg"
          className="bed2-back-arrow1"
        />
        <img
          alt="BackArrowI157"
          src="/playground_assets/backarrowi157-984v.svg"
          className="bed2-back-arrow2"
        />
        <span className="bed2-text">
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
          alt="Rectangle13I157"
          src="/playground_assets/rectangle13i157-5ra-200h.png"
          className="bed2-rectangle13"
        />
        <img
          alt="Rectangle14I157"
          src="/playground_assets/rectangle14i157-25bc.svg"
          className="bed2-rectangle14"
        />
        <span className="bed2-text02">
          <span>£22.40</span>
        </span>
        <span className="bed2-text04">
          <span>16.5 C</span>
        </span>
        <img
          alt="BackArrowI157"
          src="/playground_assets/backarrowi157-nxnt.svg"
          className="bed2-back-arrow3"
        />
        <img
          alt="BackArrowI157"
          src="/playground_assets/backarrowi157-tu4g.svg"
          className="bed2-back-arrow4"
        />
        <span className="bed2-text06">
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
          alt="Rectangle15I157"
          src="/playground_assets/rectangle15i157-2psg-200h.png"
          className="bed2-rectangle15"
        />
        <img
          alt="Rectangle16I157"
          src="/playground_assets/rectangle16i157-ad7v.svg"
          className="bed2-rectangle16"
        />
        <span className="bed2-text08">
          <span>£22.40</span>
        </span>
        <span className="bed2-text10">
          <span>16.5 C</span>
        </span>
        <div className="bed2-component3">
          <img
            alt="RoomRectangleI157"
            src="/playground_assets/roomrectanglei157-qkea-200h.png"
            className="bed2-room-rectangle"
          />
          <span className="bed2-text12">
            <span>Bed 2</span>
          </span>
        </div>
        <span className="bed2-text14">
          <span>Ambient Temperature</span>
        </span>
        <Link to="/" className="bed2-navlink">
          <img
            alt="image1I157"
            src="/playground_assets/image1i157-rvvu-200h.png"
            className="bed2-image1"
          />
        </Link>
      </div>
    </div>
  )
}

export default Bed2
