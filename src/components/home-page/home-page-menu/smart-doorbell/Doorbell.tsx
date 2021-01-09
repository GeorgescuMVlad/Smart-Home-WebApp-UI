import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import "../smart-doorbell/doorbell.css";
import doorbell from "../../../../resources/images/doorbell.jpg";
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";



export default function Doorbell(this: any) {
    const [talk, setTalk] = useState<boolean>(false);
    const [message1, setMessage1] = useState<string>("Microphone is muted");
    const [message2, setMessage2] = useState<string>("Door is closed");

    function handleTalkSelection1() {
        setMessage1("You can speak now");
    }
    function handleTalkSelection2() {
        setMessage1("Microphone is muted");
    }
    function handleTalkSelection3() {
        setMessage2("Door is open");
    }
    function handleTalkSelection4() {
        setMessage2("Door is closed");
    }
    return (

        <div>
            <Header headerText="Smart Doorbell" />
            <div>

                    <div>
                        <img src={doorbell} alt="Doorbell" className="camera-front" />
                    </div>
                <Button variant="primary" size="lg" onClick={handleTalkSelection1}
                       className={"button-left"}>
                        Talk
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection3}
                        className={"button-right"}>
                    Open
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection2}
                        className={"button-left"}>
                    Mute
                </Button>

                <Button variant="primary" size="lg" onClick={handleTalkSelection4}
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