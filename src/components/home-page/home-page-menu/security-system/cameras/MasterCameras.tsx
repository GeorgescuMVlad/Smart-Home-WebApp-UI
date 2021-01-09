import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import mastercamera from "../../../../../resources/images/mastercamera.jpg";
import Footer from "../../../../Footer";
export default function MasterCameras(this: any) {

    return (

        <div>
            <Header headerText="Security System" backArrowEnabled={true} backArrowPath={"/home/securitysystem"}/>
            <div>
                <img src={mastercamera} alt="Doorbell" className="camera" />
            </div>
            <Footer />
        </div>
    );
}