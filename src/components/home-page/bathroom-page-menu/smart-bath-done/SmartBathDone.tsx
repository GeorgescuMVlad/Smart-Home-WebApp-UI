import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import "../smart-bath-done/smartBathDone.css";
import Footer from "../../../Footer";

export default function SmartTubDone() {

    return (
        <div>
            <Header headerText="Smart Tub" homeButtonEnabled={true}/>
            <div className="container-done">
                <h1>DONE!</h1>
                <h3>Your bath will be waiting for you at 15:30!</h3>
            </div>
            <Footer/>
        </div>
    );
}