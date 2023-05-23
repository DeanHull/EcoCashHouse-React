import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './kitchen.css'

const Kitchen = (props) => {
  return (
    <div className="kitchen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="kitchen-frame6">
        <img
          alt="Rectangle1I157"
          src="/external/rectangle1i157-gv0i-200w.png"
          className="kitchen-rectangle1"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-78x.svg"
          className="kitchen-back-arrow"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-pkah.svg"
          className="kitchen-back-arrow1"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-qz2.svg"
          className="kitchen-back-arrow2"
        />
        <span className="kitchen-text">
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
          src="/external/rectangle13i157-ugwf-200h.png"
          className="kitchen-rectangle13"
        />
        <img
          alt="Rectangle14I157"
          src="/external/rectangle14i157-u4xo.svg"
          className="kitchen-rectangle14"
        />
        <span className="kitchen-text02">
          <span>£22.40</span>
        </span>
        <span className="kitchen-text04">
          <span>16.5 C</span>
        </span>
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-tpk.svg"
          className="kitchen-back-arrow3"
        />
        <img
          alt="BackArrowI157"
          src="/external/backarrowi157-637p.svg"
          className="kitchen-back-arrow4"
        />
        <span className="kitchen-text06">
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
          src="/external/rectangle15i157-v4xw-200h.png"
          className="kitchen-rectangle15"
        />
        <img
          alt="Rectangle16I157"
          src="/external/rectangle16i157-jtz2.svg"
          className="kitchen-rectangle16"
        />
        <span className="kitchen-text08">
          <span>£22.40</span>
        </span>
        <span className="kitchen-text10">
          <span>16.5 C</span>
        </span>
        <div className="kitchen-component3">
          <img
            alt="RoomRectangleI157"
            src="/external/roomrectanglei157-e3m-200h.png"
            className="kitchen-room-rectangle"
          />
          <span className="kitchen-text12">
            <span>Kitchen</span>
          </span>
        </div>
        <span className="kitchen-text14">
          <span>Ambient Temperature</span>
        </span>
        <Link to="/" className="kitchen-navlink">
          <img
            alt="image1I157"
            src="/external/image1i157-z4j-200h.png"
            className="kitchen-image1"
          />
        </Link>
      </div>
      <Link to="/bed1" className="kitchen-next button">
        <span>
          <span>Next</span>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default Kitchen
