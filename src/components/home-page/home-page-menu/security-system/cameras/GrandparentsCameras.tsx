import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import grandparentscamera from "../../../../../resources/images/grandparentscamera.jpg";
export default function GrandparentsCamera(this: any) {

    return (

        <div>
            <Header headerText="Security System" />
            <div>
                <img src={grandparentscamera} alt="Doorbell" className="camera" />
            </div>
        </div>
    );
}