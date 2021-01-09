import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import "./smarttub.css";
import Footer from "../../../Footer";

export default function SmartTub() {
    const [temperature, setTemperature] = useState<number>(35);

    function increaseTemperature() {
        let currentTemperature: number = temperature
        currentTemperature = currentTemperature + 1
        setTemperature(currentTemperature)
    }

    function decreaseTemperature() {
        let currentTemperature: number = temperature
        currentTemperature = currentTemperature - 1
        setTemperature(currentTemperature)
    }


    return (
        <div>
            <Header headerText="Smart Tub" backArrowEnabled={true} backArrowPath={"/bathroom/"}/>
            <div className="main-container">
                <h3>Set temperature:</h3>
                <div className="tub-container">
                    <div className="arrow-box">
                        <MdExpandMore onClick={decreaseTemperature} style={{ fontSize: "1.5em" }} />
                    </div>

                    <div className="circle-tub">
                        <span>{temperature}°</span>
                    </div>

                    <div className="arrow-box">
                        <MdExpandLess onClick={increaseTemperature} style={{ fontSize: "1.5em" }} />
                    </div>
                </div>
                <Link to={"/bathroom/smartbathtub/timer"}>
                    <button className="smarttub-buttons">
                        Next
                    </button>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}