import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import kitchencamera from "../../../../../resources/images/kitchencamera.jpg";
import Footer from "../../../../Footer";
export default function KitchenCameras(this: any) {

    return (

        <div>
            <Header headerText="Security System" backArrowEnabled={true} backArrowPath={"/home/securitysystem"}/>
            <div>
                <img src={kitchencamera} alt="Doorbell" className="camera" />
            </div>
            <Footer />
        </div>
    );
}