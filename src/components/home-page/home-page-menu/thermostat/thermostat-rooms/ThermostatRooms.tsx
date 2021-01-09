import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";
import "../thermostat-rooms/thermostatRooms.css";
import Footer from "../../../../Footer";

export default function ThermostatRooms() {

    return (
        <div>
            <Header headerText="Thermostat" backArrowEnabled={true} backArrowPath={"/home/thermostat"} />
            <div className="thermostat-rooms-message">
                Select room to set temperature
            </div>
            <div className="thermostat-rooms">
                <Link to={"/home/thermostat/done"}>
                    <button className="thermostat-rooms-buttons">
                        Bedrooms
                    </button>
                </Link>
                <Link to={"/home/thermostat/done"}>
                    <button className="thermostat-rooms-buttons">
                        Bathroom
                    </button>
                </Link>
                <Link to={"/home/thermostat/done"}>
                    <button className="thermostat-rooms-buttons">
                        Kitchen
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}