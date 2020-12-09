import React from 'react';
import HomePage from "./components/home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageMenu from './components/home-page/home-page-menu/HomePageMenu';
import Thermostat from './components/home-page/home-page-menu/thermostat/Thermostat';
import ThermostatSet from './components/home-page/home-page-menu/thermostat/thermostat-done/ThermostatSet';
import ThermostatRooms from './components/home-page/home-page-menu/thermostat/thermostat-rooms/ThermostatRooms';
import BathroomPageMenu from './components/home-page/bathroom-page-menu/BathroomPageMenu';
import SmartTub from './components/home-page/bathroom-page-menu/smart-bath-temperature/SmartTub';
import SmartTubTimer from './components/home-page/bathroom-page-menu/smart-bath-timer/SmartBathTimer';
import SmartTubDone from './components/home-page/bathroom-page-menu/smart-bath-done/SmartBathDone';

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
        <Route exact path="/bathroom">
          <BathroomPageMenu />
        </Route>
        <Route exact path="/bathroom/smartbathtub">
          <SmartTub />
        </Route>
        <Route exact path="/bathroom/smartbathtub/timer">
          <SmartTubTimer />
        </Route>
        <Route exact path="/bathroom/smartbathtub/done">
          <SmartTubDone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
