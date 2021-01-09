import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../send-order/sendorder.css";
import loadingGif from "../../../../../resources/images/loadingGif.gif";

export default function SendOrder() {
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
            <Header headerText="Smart Fridge" backArrowEnabled={true} backArrowPath={""}/>
            <div>
                {showGif === true ?
                    <img src={loadingGif} alt="Loading Gif" className="loading-gif" />
                    :
                    <div className="done-text">
                        The Amazon order has been succesfully sent!
                        <br></br>
                            Your order should arrive in 3-5 days.
                    </div>
                }
            </div>
        </div>
    );
}