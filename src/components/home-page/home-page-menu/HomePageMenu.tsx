import React, { useState } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import { IoIosKey } from "react-icons/io";
import { CgThermostat } from "react-icons/cg"
import { GiHomeGarage, GiTheaterCurtains, GiPlantWatering } from "react-icons/gi"
import { BiUserVoice } from "react-icons/bi"
import { MdSecurity } from "react-icons/md"
import SceneDisplayer from "../SceneDisplayer";

const icons:any[]= [<IoIosKey />,<CgThermostat />,<GiHomeGarage />];

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
            <Header headerText="Home" backArrowEnabled={true}/>
            <SceneDisplayer scenesList={homeFeatures} iconsList={icons} baseUrl={"/home"}/>
            <div className="pt-3 pb-3 pl-4 pr-4" style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 10, marginBottom: "2em" }}>
                {
                    homeFeatures.map(feature => {
                        const linkTo = feature.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={`/home/${linkTo}`}>
                                <div className="card mt-4 text-left w-100 h-100" style={{ borderRadius: "5em" }}  >
                                    <div className="card-body" style={{ color: "black", display: "flex", paddingBottom: "0em" }} >
                                        {
                                            feature === "Smart Doorbell" ? <IoIosKey />
                                                : feature === "Thermostat" ? <CgThermostat />
                                                    : feature === "Garage" ? <GiHomeGarage />
                                                        : feature === "Smart Curtains" ? <GiTheaterCurtains />
                                                            : feature === "Smart Lawn Watering" ? <GiPlantWatering />
                                                                : feature === "Voice Automation" ? <BiUserVoice />
                                                                    : feature === "Security System" ? <MdSecurity />
                                                                        : null
                                        }
                                        <h5 className="card-title" style={{ color: "black", paddingLeft: "1em" }}>{feature}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}