import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import mastercamera from "../../../../../resources/images/mastercamera.jpg";
export default function MasterCameras(this: any) {

    return (

        <div>
            <Header headerText="Security System" />
            <div>
                <img src={mastercamera} alt="Doorbell" className="camera" />
            </div>
        </div>
    );
}