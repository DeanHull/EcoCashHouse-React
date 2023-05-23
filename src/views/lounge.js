import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './lounge.css'

const Lounge = (props) => {
  return (
    <div className="lounge-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="lounge-frame5">
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-0zmc.svg"
          className="lounge-back-arrow"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-mdbk.svg"
          className="lounge-back-arrow1"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-1t2g.svg"
          className="lounge-back-arrow2"
        />
        <span className="lounge-text">
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
          src="/external/rectangle13i157-7sm-200h.png"
          className="lounge-rectangle13"
        />
        <img
          alt="Rectangle14I157"
          src="/external/rectangle14i157-r3zn.svg"
          className="lounge-rectangle14"
        />
        <span className="lounge-text02">
          <span>£22.40</span>
        </span>
        <span className="lounge-text04">
          <span>16.5 C</span>
        </span>
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-zhxh.svg"
          className="lounge-back-arrow3"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-anmg.svg"
          className="lounge-back-arrow4"
        />
        <span className="lounge-text06">
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
          src="/external/rectangle15i157-56fq-200h.png"
          className="lounge-rectangle15"
        />
        <img
          alt="Rectangle16I157"
          src="/external/rectangle16i157-x0ra.svg"
          className="lounge-rectangle16"
        />
        <span className="lounge-text08">
          <span>£22.40</span>
        </span>
        <span className="lounge-text10">
          <span>16.5 C</span>
        </span>
        <div className="lounge-component3">
          <img
            alt="RoomRectangleI157"
            src="/external/roomrectanglei157-b548-200h.png"
            className="lounge-room-rectangle"
          />
          <span className="lounge-text12">
            <span>Lounge</span>
          </span>
        </div>
        <span className="lounge-text14">
          <span>Ambient Temperature</span>
        </span>
        <Link to="/" className="lounge-navlink">
          <img
            alt="image1I157"
            src="/external/image1i157-jkne-200h.png"
            className="lounge-image1"
          />
        </Link>
      </div>
      <Link to="/kitchen" className="lounge-next button">
        <span>
          <span>Next</span>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default Lounge
