import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../smart-curtains-done/curtains-done.css";
import loadingGif from "../../../../../resources/images/loadingGif.gif";

export default function CurtainsDone() {
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
            <Header headerText="Smart Curtains" />
            <div>
                {showGif === true ?
                    <img src={loadingGif} alt="Loading Gif" className="curtains-loading-gif" />
                    :
                    <div className="curtains-done-text">
                        Done! Curtains position has been successfully set!
                    </div>
                }
            </div>
        </div>
    );
}