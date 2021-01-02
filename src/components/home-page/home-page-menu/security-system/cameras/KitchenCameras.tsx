import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import kitchencamera from "../../../../../resources/images/kitchencamera.jpg";
export default function KitchenCameras(this: any) {

    return (

        <div>
            <Header headerText="Security System" />
            <div>
                <img src={kitchencamera} alt="Doorbell" className="camera" />
            </div>
        </div>
    );
}