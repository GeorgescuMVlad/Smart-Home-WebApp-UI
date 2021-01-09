import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import grandparentscamera from "../../../../../resources/images/grandparentscamera.jpg";
import Footer from "../../../../Footer";
export default function GrandparentsCamera(this: any) {

    return (

        <div>
            <Header headerText="Security System" backArrowEnabled={true} backArrowPath={"/home/securitysystem"}/>
            <div>
                <img src={grandparentscamera} alt="Doorbell" className="camera" />
            </div>
            <Footer />
        </div>
    );
}