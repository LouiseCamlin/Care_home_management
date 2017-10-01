import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import RoomContainer from './containers/RoomContainer.jsx'
import ResidentContainer from './containers/ResidentContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={RoomContainer} />
        <Route exact path="/rooms" component={RoomContainer} />
        <Route path="/residents" component={ResidentContainer}/>
      </div>


    </HashRouter>,

    document.getElementById('app')

  );
});
