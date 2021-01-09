import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import "../thermostat/thermostat.css";
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import Footer from "../../../Footer";

export default function Thermostat() {
    const [temperature, setTemperature] = useState<number>(22.5);

    function increaseDegrees() {
        let currentTemperature: number = temperature
        currentTemperature = currentTemperature + 0.5
        if (currentTemperature > 27) {
            setTemperature(27)
        }
        else {
            setTemperature(currentTemperature)
        }
    }

    function decreaseDegrees() {
        let currentTemperature: number = temperature
        currentTemperature = currentTemperature - 0.5
        if (currentTemperature < 10) {
            setTemperature(10)
        }
        else {
            setTemperature(currentTemperature)
        }
    }


    return (
        <div>
            <Header headerText="Thermostat" backArrowEnabled={true} backArrowPath={"/home"} />
            <div className="thermostat-container">
                <div className="circle-thermostat">
                    <MdExpandMore onClick={decreaseDegrees} style={{ fontSize: "1.5em" }} />
                    {temperature}°
                    <MdExpandLess onClick={increaseDegrees} style={{ fontSize: "1.5em" }} />
                </div>
            </div>
            <div className="thermostat-buttons-div">
                <Link to={"/home/thermostat/done"}>
                    <button className="thermostat-buttons">
                        Set in all rooms
                    </button>
                </Link>
                <Link to={"/home/thermostat/rooms"}>
                    <button className="thermostat-buttons">
                        Select rooms to set
                </button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}