import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";
import "../smart-curtains-adjust/curtains-adjust.css";

export default function CurtainsAdjust() {

    return (
        <div>
            <Header headerText="Smart Curtains" />
            <div className="curtains-adjust-text">
                Adjust the position of the curtains:
            </div>
            <div className="curtains-adjust-text-curtains">
                <label style={{ marginLeft: "1em" }}>Left curtain</label>
                <label style={{ marginLeft: "7em" }}>Right curtain</label>
            </div>
            <div className="curtains-adjust-sliders">
                <input type="range" className="left-slider" />
                <input type="range" className="right-slider" />
            </div>
            <div className="curtains-adjust-buttons-div">
                <Link to={"/home/smartcurtains/adjust/done"}>
                    <button className="curtains-adjust-buttons">
                        Apply chosen positions
                    </button>
                </Link>
            </div>
        </div>
    );
}