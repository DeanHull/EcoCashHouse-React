import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './compare.css'

const Compare = (props) => {
  return (
    <div className="compare-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="compare-i-phone142">
        <div className="compare-component1">
          <Link to="/lounge" className="compare-navlink">
            <img
              alt="RoomRectangleI125"
              src="/playground_assets/roomrectanglei125-z6ma-200h.png"
              className="compare-room-rectangle"
            />
          </Link>
          <Link to="/lounge" className="compare-text">
            <span>Lounge</span>
            <br></br>
            <span>20.5%</span>
          </Link>
        </div>
        <div className="compare-component4">
          <a
            href="https://jozara.co.uk"
            target="_blank"
            rel="noreferrer noopener"
            className="compare-link"
          >
            <img
              alt="RoomRectangleI127"
              src="/playground_assets/roomrectanglei127-kkwp-200h.png"
              className="compare-room-rectangle1"
            />
          </a>
          <a
            href="https://jozara.co.uk"
            target="_blank"
            rel="noreferrer noopener"
            className="compare-text04"
          >
            <span>
              <span>Total</span>
              <br></br>
              <span>£106.60</span>
            </span>
          </a>
        </div>
        <div className="compare-component5">
          <a
            href="https://comparethemarket.com"
            target="_blank"
            rel="noreferrer noopener"
            className="compare-link1"
          >
            <img
              alt="RoomRectangleI127"
              src="/playground_assets/roomrectanglei127-no-200h.png"
              className="compare-room-rectangle2"
            />
          </a>
          <a
            href="https://comparethemarket.com"
            target="_blank"
            rel="noreferrer noopener"
            className="compare-text09"
          >
            <span>
              <span>Local Av</span>
              <br></br>
              <span>£124.80</span>
            </span>
          </a>
        </div>
        <div className="compare-component2">
          <Link to="/kitchen" className="compare-navlink1">
            <img
              alt="RoomRectangleI125"
              src="/playground_assets/roomrectanglei125-pn2-200h.png"
              className="compare-room-rectangle3"
            />
          </Link>
          <Link to="/kitchen" className="compare-text14">
            <span>
              <span>Kitchen</span>
              <br></br>
              <span>36.7%</span>
            </span>
          </Link>
        </div>
        <div className="compare-kitchen">
          <Link to="/bed2" className="compare-navlink2">
            <img
              alt="RoomRectangleI125"
              src="/playground_assets/roomrectanglei125-1hi-200h.png"
              className="compare-room-rectangle4"
            />
          </Link>
          <Link to="/bed2" className="compare-text19">
            <span>
              <span>Bed 2</span>
              <br></br>
              <span>21.4%</span>
            </span>
          </Link>
        </div>
        <img
          alt="BackArrow1254"
          src="/playground_assets/backarrow1254-x6o.svg"
          className="compare-back-arrow"
        />
        <div className="compare-component3">
          <Link to="/bed1" className="compare-navlink3">
            <img
              alt="RoomRectangleI125"
              src="/playground_assets/roomrectanglei125-oqto-200h.png"
              className="compare-room-rectangle5"
            />
          </Link>
          <Link to="/bed1" className="compare-text24">
            <span>
              <span>Bed 1</span>
              <br></br>
              <span>21.4%</span>
            </span>
          </Link>
        </div>
        <Link to="/" className="compare-navlink4">
          <img
            alt="image1I157"
            src="/playground_assets/image1i157-rvvu-200h.png"
            className="compare-image1"
          />
        </Link>
      </div>
    </div>
  )
}

export default Compare
