import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import "../smart-doorbell/doorbell.css";
import doorbell from "../../../../resources/images/doorbell-zoom.jpg";
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import Footer from "../../../Footer";
import {BiZoomIn, BiZoomOut} from "react-icons/bi";


export default function DoorbellZoom(this: any) {
    const [modalMessage, setModalMessage] = useState<string>("");
    const [talk, setTalk] = useState<boolean>(false);
    const [message1, setMessage1] = useState<string>("Microphone is muted");
    const [message2, setMessage2] = useState<string>("Door is closed");
    const [openModalType, setOpenModalType] = useState<number>(0);

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

            <Header headerText="Smart Doorbell" homeButtonEnabled={true}/>
            <div>
                <BiZoomIn className={"icon-zoom"}/>
                <Link to={"/home/smartdoorbell"} className={"link-zoom"}>
                <BiZoomOut className={"icon-zoom"}/>
                </Link>
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

                <button className={"error-button2"} onContextMenu={() => {
                    setModalMessage("The door cannot be closed. There is something blocking it.");
                    setOpenModalType(1);
                }}>
                </button>

            </div>
            {openModalType === 1 ?
                <Modal size="sm" show={true} onHide={() => setOpenModalType(0)}>
                    <Modal.Header className="curtains-modal-error" style={{ textAlign: "center" }} closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="curtains-modal-error">{modalMessage}</Modal.Body>
                </Modal>
                : null
            }
            <Footer />
        </div>
    );
}