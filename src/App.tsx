import React from 'react';
import HomePage from "./components/home-page/HomePage";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import HomePageMenu from './components/home-page/home-page-menu/HomePageMenu';
import Thermostat from './components/home-page/home-page-menu/thermostat/Thermostat';
import ThermostatSet from './components/home-page/home-page-menu/thermostat/thermostat-done/ThermostatSet';
import ThermostatRooms from './components/home-page/home-page-menu/thermostat/thermostat-rooms/ThermostatRooms';
import KitchenPage from "./components/kitchen-page/KitchenPage";
import SmartFridge from "./components/kitchen-page/kitchen-page-menu/smart-fridge/shopping-list/ShoppingList"
import BathroomPageMenu from './components/home-page/bathroom-page-menu/BathroomPageMenu';
import SmartTub from './components/home-page/bathroom-page-menu/smart-bath-temperature/SmartTub';
import SmartTubTimer from './components/home-page/bathroom-page-menu/smart-bath-timer/SmartBathTimer';
import SmartTubDone from './components/home-page/bathroom-page-menu/smart-bath-done/SmartBathDone';
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
import MasterBedroomPageMenu from './components/home-page/master-bedroom-menu/MasterBedroomPageMenu';
import SmartMirrorGeneral from './components/home-page/master-bedroom-menu/smart-mirror/SmartMirrorGeneral';
import HealthAssistantResults from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/results/HealthAssistantResults';
import HealthAssistantAppointments from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/appointments/HealthAssistantAppointments';
import AppointmentDone from './components/home-page/master-bedroom-menu/smart-mirror/health-assistant/appointment-done/AppointmentDone';
import FashionAssistantCategory from './components/home-page/master-bedroom-menu/smart-mirror/fashion-assistant/choose-category/ChooseCategory';
import FashionAssistantBrand from './components/home-page/master-bedroom-menu/smart-mirror/fashion-assistant/choose-brand/ChooseBrand';
import FashionAssistantProducts from './components/home-page/master-bedroom-menu/smart-mirror/fashion-assistant/products/Products';
import FashionAssistantProductDetails from './components/home-page/master-bedroom-menu/smart-mirror/fashion-assistant/product-details/ProductDetails';
import OrderDone from './components/home-page/master-bedroom-menu/smart-mirror/fashion-assistant/order-done/OrderDone';
import MasterBedroomMenu from "./components/home-page/master-bedroom-menu/MasterBedroomMenu";
import Light from "./components/home-page/master-bedroom-menu/lights/Light";
import Garage from "./components/home-page/home-page-menu/garage/Garage";
import VoiceAutomation from "./components/home-page/home-page-menu/voice-automation/VoiceAutomation";
import VoiceCommand from "./components/home-page/home-page-menu/voice-automation/VoiceCommand";
import { createBrowserHistory } from 'history';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/home">
                    <HomePageMenu/>
                </Route>
                <Route exact path="/masterbedroom">
                    <MasterBedroomMenu/>
                </Route>

                {/*start of /home*/}
                <Route exact path="/home/thermostat">
                    <Thermostat/>
                </Route>
                <Route exact path="/home/thermostat/done">
                    <ThermostatSet/>
                </Route>
                <Route exact path="/home/thermostat/rooms">
                    <ThermostatRooms/>
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
                    <Lawn/>
                </Route>
                <Route exact path="/home/smartcurtains">
                    <Curtains/>
                </Route>
                <Route exact path="/home/smartcurtains/adjust">
                    <CurtainsAdjust/>
                </Route>
                <Route exact path="/home/smartcurtains/adjust/done">
                    <CurtainsDone/>
                </Route>
                <Route exact path="/home/garage">
                    <Garage/>
                </Route>
                <Route exact path="/home/voiceautomation">
                    <VoiceAutomation/>
                </Route>
                <Route exact path="/home/voiceautomation/command">
                    <VoiceCommand/>
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
                {/*end of /home*/}

                {/*start of /masterbedroom*/}
                <Route exact path="/masterbedroom/light1">
                    <Light/>
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
                <Route exact path="/masterbedroom/smartmirror/fashionhassistantcategories">
                    <FashionAssistantCategory />
                </Route>
                <Route exact path="/masterbedroom/smartmirror/fashionhassistantbrands">
                    <FashionAssistantBrand />
                </Route>
                <Route exact path="/masterbedroom/smartmirror/fashionhassistantproducts">
                    <FashionAssistantProducts />
                </Route>
                <Route exact path="/masterbedroom/smartmirror/fashionhassistantproductdetails">
                    <FashionAssistantProductDetails />
                </Route>
                <Route exact path="/masterbedroom/smartmirror/fashionhassistantorderdone">
                    <OrderDone />
                </Route>
                {/*end of /masterbedroom*/}
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
        </BrowserRouter>
    );
}

export default App;
