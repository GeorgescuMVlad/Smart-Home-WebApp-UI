import React, { useEffect, useState } from "react";
import Header from "../../../../../Header";
import loadingGif from "../../../../../../resources/images/loadingGif.gif";
import "../order-done/OrderDone.css"

export default function OrderDone() {
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
            <Header headerText="Smart Mirror - Fashion Assistant" />
            {showGif === true ?
                    <div className="loading-container">
                        <p className="loading-text">Placing the order...</p>
                        <img src={loadingGif} alt="Loading Gif" className="curtains-loading-gif" />
                    </div>
                    :
                    <div className="order-done">

                        <span className="success">Order placed!</span>

                        <p>
                        Order details
                        &
                        Shipment details
                        &
                        Invoice
                        </p>
                        
                    </div>
            }
        </div>
    );

}