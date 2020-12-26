import React from 'react';
import HomePage from "./components/home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageMenu from './components/home-page/home-page-menu/HomePageMenu';
import Thermostat from './components/home-page/home-page-menu/thermostat/Thermostat';
import ThermostatSet from './components/home-page/home-page-menu/thermostat/thermostat-done/ThermostatSet';
import ThermostatRooms from './components/home-page/home-page-menu/thermostat/thermostat-rooms/ThermostatRooms';
import Lawn from './components/home-page/home-page-menu/smart-lawn-watering/Lawn';
import Curtains from './components/home-page/home-page-menu/smart-curtains/Curtains';
import CurtainsAdjust from './components/home-page/home-page-menu/smart-curtains/smart-curtains-adjust/Curtains-Adjust';
import CurtainsDone from './components/home-page/home-page-menu/smart-curtains/smart-curtains-done/Curtains-Done';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/home">
          <HomePageMenu />
        </Route>
        <Route exact path="/home/thermostat">
          <Thermostat />
        </Route>
        <Route exact path="/home/thermostat/done">
          <ThermostatSet />
        </Route>
        <Route exact path="/home/thermostat/rooms">
          <ThermostatRooms />
        </Route>
        <Route exact path="/home/smartlawnwatering">
          <Lawn />
        </Route>
        <Route exact path="/home/smartcurtains">
          <Curtains />
        </Route>
        <Route exact path="/home/smartcurtains/adjust">
          <CurtainsAdjust />
        </Route>
        <Route exact path="/home/smartcurtains/adjust/done">
          <CurtainsDone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
