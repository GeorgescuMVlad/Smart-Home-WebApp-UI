import React, { useEffect, useState } from "react";
import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../appointments/HealthAssistantAppointments.css"
import { GiMirrorMirror, GiPlagueDoctorProfile } from "react-icons/gi";
import { BiError, BiErrorCircle, BiMessageRoundedError } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HealthAssistantAppointments() {

    return (
        <div>

            <Header headerText="Smart Mirror - Health Assistant" />

            <div className="appointments-container">
                <p>Recommandations:</p>

                <div className="recomandation">
                    <GiPlagueDoctorProfile style={{ width: "30px", height: "30px", margin: "auto 0 auto 0px" }} />
                    <p>Dr. XXXXX</p>
                    <Link to={"/masterbedroom/smartmirror/appointmentdone"}>
                        <button>Make an appointment</button>
                    </Link>
                </div>

                <div className="recomandation">
                    <GiPlagueDoctorProfile style={{ width: "30px", height: "30px", margin: "auto 0 auto 0px" }} />
                    <p>Dr. YYYYY</p>
                    <Link to={"/masterbedroom/smartmirror/appointmentdone"}>
                        <button>Make an appointment</button>
                    </Link>
                    
                </div>
            </div>

        </div>
    );


}