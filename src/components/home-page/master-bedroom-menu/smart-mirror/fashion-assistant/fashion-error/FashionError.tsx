import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../fashion-error/FashionError.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../../../../Footer";

export default function FashionError() {

    return (
        <div>
            <Header headerText="Fashion Assistant" backArrowEnabled={true} />
            <div className="container-error">
                <h1>SOMETHING WENT WRONG!</h1>
                <h3>Please go back and try again!</h3>
            </div>
            <Footer/>
        </div>
    );
}