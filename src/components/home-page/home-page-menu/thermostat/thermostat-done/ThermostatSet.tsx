import React from "react";
import Footer from "../../../../Footer";
import Header from "../../../../Header";
import "../thermostat-done/thermostatSet.css";

export default function ThermostatSet() {

    return (
        <div>
            <Header headerText="Thermostat" homeButtonEnabled={true} />
            <div className="thermostat-set">
                Temperature successfully set!
            </div>
            <Footer />
        </div>
    );
}