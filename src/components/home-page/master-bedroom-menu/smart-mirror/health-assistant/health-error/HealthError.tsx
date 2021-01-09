import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../health-error/HealthError.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../../../../Footer";

export default function HealthError() {

    return (
        <div>
            <Header headerText="Health Assistant" backArrowEnabled={true} />
            <div className="container-error">
                <h1>SOMETHING WENT WRONG!</h1>
                <h3>Please go back and try again!</h3>
            </div>
            <Footer/>
        </div>
    );
}