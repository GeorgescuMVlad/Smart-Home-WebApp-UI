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
import Lawn from './components/home-page/home-page-menu/smart-lawn-watering/Lawn';
import Curtains from './components/home-page/home-page-menu/smart-curtains/Curtains';
import CurtainsAdjust from './components/home-page/home-page-menu/smart-curtains/smart-curtains-adjust/Curtains-Adjust';
import CurtainsDone from './components/home-page/home-page-menu/smart-curtains/smart-curtains-done/Curtains-Done';
import MasterBedroomPageMenu from './components/home-page/master-bedroom-menu/MasterBedroomPageMenu';
import SmartMirrorGeneral from './components/home-page/master-bedroom-menu/smart-mirror/SmartMirrorGeneral';
import HealthAssistantResults from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/results/HealthAssistantResults';
import HealthAssistantAppointments from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/appointments/HealthAssistantAppointments';
import AppointmentDone from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/appointment-done/AppointmentDone';

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

        <Route exact path="/masterbedroom">
          <MasterBedroomPageMenu />
        </Route>
        <Route exact path="/masterbedroom/smartmirror">
          <SmartMirrorGeneral />
        </Route>
        <Route exact path="/masterbedroom/smartmirror/healthassistantresults">
          <HealthAssistantResults />
        </Route>
        <Route exact path="/masterbedroom/smartmirror/healthassistantappointments">
          <HealthAssistantAppointments />
        </Route>
        <Route exact path="/masterbedroom/smartmirror/appointmentdone">
          <AppointmentDone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
