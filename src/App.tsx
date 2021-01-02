import React from 'react';
import HomePage from "./components/home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageMenu from './components/home-page/home-page-menu/HomePageMenu';
import Thermostat from './components/home-page/home-page-menu/thermostat/Thermostat';
import ThermostatSet from './components/home-page/home-page-menu/thermostat/thermostat-done/ThermostatSet';
import ThermostatRooms from './components/home-page/home-page-menu/thermostat/thermostat-rooms/ThermostatRooms';
import KitchenPage from "./components/kitchen-page/KitchenPage";
import SmartFridge from "./components/kitchen-page/kitchen-page-menu/smart-fridge/shopping-list/ShoppingList"
import Lawn from './components/home-page/home-page-menu/smart-lawn-watering/Lawn';
import Curtains from './components/home-page/home-page-menu/smart-curtains/Curtains';
import CurtainsAdjust from './components/home-page/home-page-menu/smart-curtains/smart-curtains-adjust/Curtains-Adjust';
import CurtainsDone from './components/home-page/home-page-menu/smart-curtains/smart-curtains-done/Curtains-Done';
import SendOrder from "./components/kitchen-page/kitchen-page-menu/smart-fridge/send-order/SendOrder";
import Doorbell from "./components/home-page/home-page-menu/smart-doorbell/Doorbell";
import Security from "./components/home-page/home-page-menu/security-system/security/Security";
import KitchenCameras from "./components/home-page/home-page-menu/security-system/cameras/KitchenCameras";
import MasterCameras from "./components/home-page/home-page-menu/security-system/cameras/MasterCameras";
import GrandparentsCamera from "./components/home-page/home-page-menu/security-system/cameras/GrandparentsCameras";
import ChildrenCamera from "./components/home-page/home-page-menu/security-system/cameras/ChildrenCameras";
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
          <Route exact path="/kitchen">
            <KitchenPage />
          </Route>
          <Route exact path="/kitchen/smartfridge">
            <SmartFridge />
          </Route>
          <Route exact path="/kitchen/smartfridge/sendorder">
            <SendOrder />
          </Route>
          <Route exact path="/home/smartdoorbell">
            <Doorbell />
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
          <Route exact path="/home/securitysystem">
            <Security />
          </Route>
          <Route exact path="/securitysystem/kitchen">
            <KitchenCameras />
          </Route>
          <Route exact path="/securitysystem/master">
            <MasterCameras />
          </Route>
          <Route exact path="/securitysystem/grandparents">
            <GrandparentsCamera />
          </Route>
          <Route exact path="/securitysystem/children">
            <ChildrenCamera />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
