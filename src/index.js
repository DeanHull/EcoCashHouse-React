import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import BackArrow from './views/back-arrow'
import Kitchen from './views/kitchen'
import Frame2140 from './views/frame2140'
import Rectangle11 from './views/rectangle11'
import Frame270C from './views/frame270c'
import PeriodEnergyCosts from './views/period-energy-costs'
import Bed1 from './views/bed1'
import Frame3840 from './views/frame3840'
import PeriodEnergyCosts1 from './views/period-energy-costs1'
import Frame196C from './views/frame196c'
import Text from './views/text'
import Home from './views/home'
import RoomSelect from './views/room-select'
import Bed2 from './views/bed2'
import Rectangle10 from './views/rectangle10'
import Compare from './views/compare'
import Rectangle12 from './views/rectangle12'
import Lounge from './views/lounge'
import BackArrow1 from './views/back-arrow1'
import BackArrow2 from './views/back-arrow2'
import Rectangle9 from './views/rectangle9'
import BackArrow3 from './views/back-arrow3'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={BackArrow} exact path="/back-arrow" />
        <Route component={Kitchen} exact path="/kitchen" />
        <Route component={Frame2140} exact path="/frame2140" />
        <Route component={Rectangle11} exact path="/rectangle11" />
        <Route component={Frame270C} exact path="/frame270c" />
        <Route
          component={PeriodEnergyCosts}
          exact
          path="/period-energy-costs"
        />
        <Route component={Bed1} exact path="/bed1" />
        <Route component={Frame3840} exact path="/frame3840" />
        <Route
          component={PeriodEnergyCosts1}
          exact
          path="/period-energy-costs1"
        />
        <Route component={Frame196C} exact path="/frame196c" />
        <Route component={Text} exact path="/text" />
        <Route component={Home} exact path="/" />
        <Route component={RoomSelect} exact path="/room-select" />
        <Route component={Bed2} exact path="/bed2" />
        <Route component={Rectangle10} exact path="/rectangle10" />
        <Route component={Compare} exact path="/compare" />
        <Route component={Rectangle12} exact path="/rectangle12" />
        <Route component={Lounge} exact path="/lounge" />
        <Route component={BackArrow1} exact path="/back-arrow1" />
        <Route component={BackArrow2} exact path="/back-arrow2" />
        <Route component={Rectangle9} exact path="/rectangle9" />
        <Route component={BackArrow3} exact path="/back-arrow3" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
