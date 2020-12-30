import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import "../smart-mirror/SmartMirrorGeneral.css";

export default function SmartMirrorGeneral() {

    function buttonClicked() {
        
    }

    return (
        <div>
            <Header headerText="Smart Mirror" />
            
            <div className="main-container-mirror">
                <p>Select an option for the smart miroor and press SCAN !</p>

                <div className="mirror-option-box">

                    <button id="health-button">Health Assistant</button>
                    <button id="fashion-button">Fashion Assistant</button>

                </div>

                <button id="scan-button">SCAN</button>

            </div>
        </div>
    );

}