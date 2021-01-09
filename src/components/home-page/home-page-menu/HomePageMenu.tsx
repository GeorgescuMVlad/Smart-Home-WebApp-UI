import React, { useState } from "react";
import Header from "../../Header";
import { CgThermostat } from "react-icons/cg"
import { GiHomeGarage, GiTheaterCurtains, GiPlantWatering } from "react-icons/gi"
import { BiKey, BiUserVoice, BiShieldQuarter } from "react-icons/bi"
import SceneDisplayer from "../SceneDisplayer";
import Footer from "../../Footer";

const icons: any[] = [<BiKey />, <CgThermostat />, <GiHomeGarage />, <GiTheaterCurtains />, <GiPlantWatering />, <BiUserVoice />, <BiShieldQuarter />];

export default function HomePageMenu() {
    const [homeFeatures, setHomeFeatures] = useState<string[]>([
        "Smart Doorbell",
        "Thermostat",
        "Garage",
        "Smart Curtains",
        "Smart Lawn Watering",
        "Voice Automation",
        "Security System"
    ]);


    return (
        <div className="d-flex flex-column">
            <Header headerText="Home" backArrowEnabled={true} />
            <SceneDisplayer scenesList={homeFeatures} iconsList={icons} baseUrl={"/home"} />
            <Footer />
        </div>
    );
}
