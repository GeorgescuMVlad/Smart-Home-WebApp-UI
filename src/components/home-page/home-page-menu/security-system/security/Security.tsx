import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../security/security.css";
import doorbell from "../../../../resources/images/doorbell.jpg";
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import {BiCheckShield} from "react-icons/bi"
import {VscDeviceCameraVideo} from "react-icons/vsc"
import {Link} from "react-router-dom";
export default function Security(this: any) {

    return (

        <div>
            <Header headerText="Security System" />
            <div className={"text-protected"}>
                <BiCheckShield className={"icon"} />
                System is protected
            </div>
            <div className={"text-protected"}>
                <VscDeviceCameraVideo className={"icon"} />
                Check cameras
            </div>
            <Link to={`/securitysystem/kitchen`}>
            <div className={"text-subtitle"}>
                Kitchen
            </div>
            </Link>
            <Link to={`/securitysystem/master`}>
            <div className={"text-subtitle"}>
                Master bedroom
            </div>
            </Link>
            <Link to={`/securitysystem/grandparents`}>
            <div className={"text-subtitle"}>
                Grandparents' bedroom
            </div>
            </Link>
            <Link to={`/securitysystem/children`}>
            <div className={"text-subtitle"}>
                Children's room
            </div>
            </Link>
        </div>
    );
}