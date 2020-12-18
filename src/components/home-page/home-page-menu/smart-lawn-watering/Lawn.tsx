import React, { useState } from "react";
import Header from "../../../Header";
import { FaThermometerEmpty } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "../smart-lawn-watering/lawn.css";
import Modal from "react-bootstrap/Modal";

export default function Lawn() {
    const [timeInterval, setTimeInterval] = useState<number>(3);
    const [modalMessage, setModalMessage] = useState<string>("");
    const [openModalType, setOpenModalType] = useState<number>(0);

    function increaseInterval() {
        let currentInterval: number = timeInterval
        currentInterval = currentInterval + 1
        setTimeInterval(currentInterval)
    }

    function decreaseInterval() {
        let currentInterval: number = timeInterval
        currentInterval = currentInterval - 1
        if (currentInterval < 1) {
            setTimeInterval(1)
        }
        else {
            setTimeInterval(currentInterval)
        }
    }

    return (
        <div>
            <Header headerText="Smart Lawn Watering" />
            <div className="lawn-outside-details">
                <FaThermometerEmpty style={{ marginRight: "0.1em", marginLeft: "0.5em", fontSize: "2.5em", color: "#ff3333" }} />
                <label style={{ marginRight: "3.2em", fontWeight: "bold", fontSize: "1.5em" }}>32.5°</label>
                <label style={{ paddingTop: "0.5em" }}>Soil dryness: </label>
                <label style={{ color: "#ff3333", marginLeft: "0.5em", fontWeight: "bold", paddingTop: "0.5em" }}>High</label>
            </div>
            <div className="lawn-set-interval">
                <MdExpandMore onClick={decreaseInterval} style={{ fontSize: "2.5em", color: "#ff3333" }} />
                <label style={{ fontSize: "1.5em", fontWeight: "bold" }}>{timeInterval}h</label>
                <MdExpandLess onClick={increaseInterval} style={{ fontSize: "2.5em", marginRight: "1.3em", color: "#ff3333" }} />
                <button className="lawn-buttons" onClick={() => {
                    setModalMessage("The lawn will be watered every " + timeInterval + " hours!");
                    setOpenModalType(1);
                }}
                >
                    Set lawn watering interval
                </button>
            </div>
            <div className="lawn-buttons-div">
                <button className="lawn-buttons" onClick={() => {
                    setModalMessage("The system has started watering the lawn right now!");
                    setOpenModalType(1);
                }}
                >
                    Initiate watering session right now
                </button>
                <button className="lawn-buttons" onClick={() => {
                    setModalMessage("Since there are 32.5° outside and the soil is very dry, the system has decided that a watering session is necessary every 2 hours and will act accordingly as long as necessary!");
                    setOpenModalType(1);
                }}
                >
                    Let the system water the lawn automatically
                </button>
            </div>
            {openModalType === 1 ?
                <Modal size="sm" show={true} onHide={() => setOpenModalType(0)}>
                    <Modal.Header className="lawn-modal" style={{ textAlign: "center" }} closeButton>
                        <Modal.Title>Action performed successfully!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="lawn-modal">{modalMessage}</Modal.Body>
                </Modal>
                : null
            }
        </div>
    );
}