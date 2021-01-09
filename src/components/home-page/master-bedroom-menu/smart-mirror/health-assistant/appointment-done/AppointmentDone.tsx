import React, { useEffect, useState } from "react";
import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../appointment-done/AppointmentDone.css"
import Footer from "../../../../../Footer";

export default function AppointmentDone() {
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
            <Header headerText="Health Assistant" homeButtonEnabled={true}/>
            {showGif === true ?
                    <div className="loading-container">
                        <p className="loading-text">Verifying your schedule...</p>
                        <img src={loadingGif} alt="Loading Gif" className="smart-mirror-loading-gif" />
                    </div>
                    :
                    <div className="appointment-done">

                        <span className="success">Appointment created!</span>

                        <p>
                            You have an appointment in 02.11.2020, at 18:00pm with doctor XXXXXX. Address: Str. ZZZ, Nr. 7
                        </p>
                        
                    </div>
            }
            <Footer/>
        </div>
    );

}