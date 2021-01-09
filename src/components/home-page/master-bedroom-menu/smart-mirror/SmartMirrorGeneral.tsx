import React, { constructor, useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import "../smart-mirror/SmartMirrorGeneral.css";
import Footer from "../../../Footer";

export default function SmartMirrorGeneral(this: any) {

    const [activeHealthAssistant, setHealthAssistant] = useState<boolean>(false);
    const [activeFashionAssistant, setFashionAssistant] = useState<boolean>(false);

    const [path, setPath] = useState<string>('');

    function toggleHealthAssistant() {
        let currentHealthAssistant: boolean = activeHealthAssistant;
        currentHealthAssistant = !currentHealthAssistant;
        setHealthAssistant(currentHealthAssistant);

        setPath("");
        if(currentHealthAssistant) {
            setPath("healthassistantresults");
            setFashionAssistant(false);
        }

    }

    function toggleFashionAssistant() {
        let currentFashionAssistant: boolean = activeFashionAssistant;
        currentFashionAssistant = !currentFashionAssistant;
        setFashionAssistant(currentFashionAssistant);

        setPath("");
        if(currentFashionAssistant) {
            setPath("fashionhassistantcategories");
            setHealthAssistant(false);
        }

    }


    return (
        <div>
            <Header headerText="Smart Mirror" backArrowEnabled={true} backArrowPath={"/masterbedroom/"}/>
            
            <div className="main-container-mirror">
                <p>Select an option for the smart miroor and press SCAN !</p>

                <div className="mirror-option-box">
                
                    <button id="health-button" className={activeHealthAssistant? 'active' : 'smarttub-buttons' } onClick={toggleHealthAssistant} >
                        Health Assistant
                    </button>

                    <button id="fashion-button" className={activeFashionAssistant? 'active' : 'smarttub-buttons'} onClick={toggleFashionAssistant} >
                        Fashion Assistant
                    </button>

                </div>

                <Link to={`/masterbedroom/smartmirror/${path}`}>
                    <button className="smarttub-buttons" id="scan-button" >SCAN</button>
                </Link>

            </div>
            <Footer/>
        </div>
    );

}