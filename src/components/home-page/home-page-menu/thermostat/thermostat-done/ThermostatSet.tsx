import React from "react";
import Header from "../../../../Header";
import "../thermostat-done/thermostatSet.css";

export default function ThermostatSet() {

    return (
        <div>
            <Header headerText="Thermostat" />
            <div className="thermostat-set">
                Temperature successfully set!
            </div>
        </div>
    );
}