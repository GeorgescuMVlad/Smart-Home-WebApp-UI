import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import "../smart-doorbell/doorbell.css";
import doorbell from "../../../../resources/images/doorbell.jpg";
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";

export default function Doorbell(this: any) {
    const [talk, setTalk] = useState<boolean>(false);
    let [message1] = useState<string>("Microphone is muted");
    let [message2] = useState<string>("Door is closed");

    function handleTalkSelection() {
        message1 = "You can speak now";
    }
    return (

        <div>
            <Header headerText="Smart Doorbell" />
            <div>

                    <div>
                        <img src={doorbell} alt="Doorbell" className="camera-front" />
                    </div>
                <Button variant="primary" size="lg" onClick={handleTalkSelection}
                       className={"button-left"}>
                        Talk
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection}
                        className={"button-right"}>
                    Open
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection}
                        className={"button-left"}>
                    Mute
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection}
                        className={"button-right"}>
                    Close
                </Button>
                <Alert variant="success" className={"alert-message"}>
                    <input type="text" id="message11" value={message1} className={"input-field"}></input>
                </Alert>
                <Alert variant="success" className={"alert-message"} value={message2}>
                    <input type="text" id="message22" value={message2} className={"input-field"}></input>
                </Alert>
            </div>
        </div>
    );
}