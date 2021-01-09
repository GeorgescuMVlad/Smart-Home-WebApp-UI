import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../cameras/cameras.css";
import childrencamera from "../../../../../resources/images/childrencamera.jpg";
import Footer from "../../../../Footer";
export default function ChildrenCamera(this: any) {

    return (

        <div>
            <Header headerText="Security System" backArrowEnabled={true} backArrowPath={"/home/securitysystem"}/>
            <div>
                <img src={childrencamera} alt="Doorbell" className="camera" />
            </div>
            <Footer />
        </div>
    );
}