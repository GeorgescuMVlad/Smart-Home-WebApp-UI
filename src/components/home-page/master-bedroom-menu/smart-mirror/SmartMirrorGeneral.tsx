import React, { constructor, useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import "../smart-mirror/SmartMirrorGeneral.css";

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
            <Header headerText="Smart Mirror" />
            
            <div className="main-container-mirror">
                <p>Select an option for the smart miroor and press SCAN !</p>

                <div className="mirror-option-box">

                    <button id="health-button" className={activeHealthAssistant? 'active' : ''} onClick={toggleHealthAssistant} >
                        Health Assistant
                    </button>

                    <button id="fashion-button" className={activeFashionAssistant? 'active' : ''} onClick={toggleFashionAssistant} >
                        Fashion Assistant
                    </button>

                </div>

                <Link to={`/masterbedroom/smartmirror/${path}`}>
                    <button id="scan-button" >SCAN</button>
                </Link>

            </div>
        </div>
    );

}