import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import "../error-bath/ErrorBath.css"
import Footer from "../../../Footer";

export default function ErrorBath() {

    return (
        <div>
            <Header headerText="Smart Tub" backArrowEnabled={true} />
            <div className="container-error">
                <h1>SOMETHING WENT WRONG!</h1>
                <h3>Please go back and try again!</h3>
            </div>
            <Footer/>
        </div>
    );
}