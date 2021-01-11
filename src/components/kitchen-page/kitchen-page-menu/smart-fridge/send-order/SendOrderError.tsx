import React, { useEffect, useState } from "react";
import Header from "../../../../Header";
import "../send-order/sendorder.css";
import loadingGif from "../../../../../resources/images/loadingGif.gif";
import {BiSad} from "react-icons/bi";
import Footer from "../../../../Footer";
export default function SendOrderError() {
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
            <Header headerText="Smart Fridge" backArrowEnabled={true} backArrowPath={"/kitchen/smartfridge"}/>
            <div>
                {showGif === true ?
                    <img src={loadingGif} alt="Loading Gif" className="loading-gif" />
                    :
                    <div className="done-text-error">
                        The Amazon order couldn't be sent.<BiSad></BiSad>
                        <br></br><br></br>
                        We are currently out of stock for the item ordered: Spinach.
                        <br></br><br></br>
                            You will be notified when it is back in stock.
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}