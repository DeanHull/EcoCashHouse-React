import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './room-select.css'

const RoomSelect = (props) => {
  return (
    <div className="room-select-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="room-select-i-phone142">
        <div className="room-select-component1">
          <Link to="/lounge" className="room-select-navlink">
            <img
              alt="RoomRectangleI434"
              src="/playground_assets/roomrectanglei434-wyj-200h.png"
              className="room-select-room-rectangle"
            />
          </Link>
          <Link to="/lounge" className="room-select-text">
            <span>Lounge</span>
          </Link>
        </div>
        <div className="room-select-component2">
          <Link to="/kitchen" className="room-select-navlink1">
            <img
              alt="RoomRectangleI435"
              src="/playground_assets/roomrectanglei435-bnt-200h.png"
              className="room-select-room-rectangle1"
            />
          </Link>
          <Link to="/kitchen" className="room-select-text2">
            <span>Kitchen</span>
          </Link>
        </div>
        <div className="room-select-component3">
          <Link to="/bed1" className="room-select-navlink2">
            <img
              alt="RoomRectangleI436"
              src="/playground_assets/roomrectanglei436-w2wi-200h.png"
              className="room-select-room-rectangle2"
            />
          </Link>
          <Link to="/bed1" className="room-select-text4">
            <span>Bed 1</span>
          </Link>
        </div>
        <div className="room-select-kitchen">
          <Link to="/bed2" className="room-select-navlink3">
            <img
              alt="RoomRectangleI437"
              src="/playground_assets/roomrectanglei437-harc-200h.png"
              className="room-select-room-rectangle3"
            />
          </Link>
          <Link to="/bed2" className="room-select-text6">
            <span>Bed 2</span>
          </Link>
        </div>
        <img
          alt="BackArrow450"
          src="/playground_assets/backarrow450-wqp.svg"
          className="room-select-back-arrow"
        />
        <Link to="/" className="room-select-navlink4">
          <img
            alt="image11611"
            src="/playground_assets/image11611-utgs-200h.png"
            className="room-select-image1"
          />
        </Link>
      </div>
    </div>
  )
}

export default RoomSelect
