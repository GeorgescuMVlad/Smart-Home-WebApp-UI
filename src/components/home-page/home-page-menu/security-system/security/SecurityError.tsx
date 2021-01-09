import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../security/security.css";
import doorbell from "../../../../resources/images/doorbell.jpg";
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import {BiCheckShield, BiShieldX} from "react-icons/bi"
import {VscDeviceCameraVideo} from "react-icons/vsc"
import {Link} from "react-router-dom";
import cameraerror from "../../../../../resources/images/camera-error1.jpg";
import Footer from "../../../../Footer";

export default function SecurityError(this: any) {

    return (

        <div>
            <Header headerText="Security System" backArrowEnabled={true} backArrowPath={"/home"}/>
            <div className={"text-protected"}>
                <BiShieldX className={"icon-error"} />
                System not protected
            </div>
            <div className={"text-error"}>
                <VscDeviceCameraVideo className={"icon"} />
                Odd activity in kitchen:
            </div>
            <div className={"text-error"}>
                Smoke detected
             </div>
            <div>
                <img src={cameraerror} alt="Camera" className="cameraerror" />
            </div>
            <Footer />
        </div>
    );
}