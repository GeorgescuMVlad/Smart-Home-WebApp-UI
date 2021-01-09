import React, { useEffect, useState } from "react";
import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../results/HealthAssistantResults.css"
import { GiMirrorMirror } from "react-icons/gi";
import { BiError, BiErrorCircle, BiMessageRoundedError } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../../../../../Footer";

export default function HealthAssistantResults() {

    const [showGif, setShowGif] = useState<boolean>(true);

    function handleLoadingGif() {
        setTimeout(() => {
            setShowGif(false);
        }, 3000);
    }

    useEffect(() => {
        handleLoadingGif();
    }, [showGif]);

    return (
        <div>
            <Header headerText="Health Assistant" backArrowEnabled={true} backArrowPath={"/masterbedroom/smartmirror"}/>
            {showGif === true ?
                    <div className="loading-container">
                        <p className="loading-text">Please stay still until the scanning is over!</p>
                        <img src={loadingGif} alt="Loading Gif" className="smart-mirror-loading-gif" />
                    </div>
                    :
                    <div className="health-assistant-container">

                        <p>Results after scanning:</p>

                        <div className="results-box">

                            <div className="yellow-box">
                                <div>
                                    <BiMessageRoundedError style={{ width: "30px", height: "30px", margin: "auto 0 auto 0px" }} />
                                    <p>Dehydrated</p>
                                </div>
                                <div>
                                    <BiMessageRoundedError style={{ width: "30px", height: "30px", margin: "auto 0 auto 0px" }} />
                                    <p>Tired</p>
                                </div>
                            </div>

                            <div className="red-box">
                                <BiError style={{ width: "30px", height: "30px", margin: "auto 0 auto 0px" }} />
                                <p>Unusual eyes color - possible liver issues</p>
                                
                                <Link to={"/masterbedroom/smartmirror/healthassistantappointments"}>
                                    <button className="smarttub-buttons">Create Appointment</button>
                                </Link>
                            </div>

                        </div>
                        
                    </div>
            }
            <Footer/>
        </div>
    );

}