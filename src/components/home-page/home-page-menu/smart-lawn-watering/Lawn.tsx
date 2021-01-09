import React, { useState } from "react";
import Header from "../../../Header";
import { CgThermostat } from "react-icons/cg"
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "../smart-lawn-watering/lawn.css";
import Modal from "react-bootstrap/Modal";
import Footer from "../../../Footer";

export default function Lawn() {
    const [timeInterval, setTimeInterval] = useState<number>(3);
    const [modalMessage, setModalMessage] = useState<string>("");
    const [openModalType, setOpenModalType] = useState<number>(0);

    function increaseInterval() {
        let currentInterval: number = timeInterval
        currentInterval = currentInterval + 1
        if (currentInterval > 24) {
            setTimeInterval(24)
        }
        else {
            setTimeInterval(currentInterval)
        }
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
            <Header headerText="Lawn Watering" backArrowEnabled={true} backArrowPath={"/home"} />
            <div className="lawn-outside-details">
                <CgThermostat style={{ marginRight: "0.1em", marginLeft: "0.5em", fontSize: "2.5em", color: "#ff3333" }} />
                <label style={{ marginRight: "3.2em", fontWeight: "bold", fontSize: "1.5em" }}>32.5°</label>
                <label style={{ paddingTop: "0.5em" }}>Soil dryness: </label>
                <label style={{ color: "red", marginLeft: "0.5em", fontWeight: "bold", paddingTop: "0.5em" }}>High</label>
            </div>
            <div className="lawn-set-interval">
                <MdExpandMore onClick={decreaseInterval} style={{ fontSize: "2.5em", color: "red" }} />
                <label style={{ fontSize: "1.5em", fontWeight: "bold" }}>{timeInterval}h</label>
                <MdExpandLess onClick={increaseInterval} style={{ fontSize: "2.5em", color: "red" }} />
                <button className="lawn-button-set" onClick={() => {
                    setModalMessage("The lawn will be watered every " + timeInterval + " hours!");
                    setOpenModalType(1);
                }} onContextMenu={() => {
                    setModalMessage("The water is stopped right now! Please wait until the water is being provided again");
                    setOpenModalType(2);
                }}
                >
                    Set lawn watering interval
                </button>
            </div>
            <div className="lawn-buttons-div">
                <button className="lawn-buttons" onClick={() => {
                    setModalMessage("The system has started watering the lawn right now!");
                    setOpenModalType(1);
                }} onContextMenu={() => {
                    setModalMessage("The water is stopped right now! Please wait until the water is being provided again");
                    setOpenModalType(2);
                }}
                >
                    Initiate watering session right now
                </button>
                <button className="lawn-buttons" onClick={() => {
                    setModalMessage("Since there are 32.5° outside and the soil is very dry, the system has decided that a watering session is necessary every 2 hours and will act accordingly as long as necessary!");
                    setOpenModalType(1);
                }} onContextMenu={() => {
                    setModalMessage("The water is stopped right now! Please wait until the water is being provided again");
                    setOpenModalType(2);
                }}
                >
                    Let system water the lawn automatically
                </button>
            </div>
            {openModalType === 1 ?
                <Modal size="sm" show={true} onHide={() => setOpenModalType(0)}>
                    <Modal.Header className="lawn-modal" style={{ textAlign: "center" }} closeButton>
                        <Modal.Title>Action performed successfully!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="lawn-modal">{modalMessage}</Modal.Body>
                </Modal>
                : openModalType === 2 ?
                    <Modal size="sm" show={true} onHide={() => setOpenModalType(0)}>
                        <Modal.Header className="lawn-modal-error" style={{ textAlign: "center" }} closeButton>
                            <Modal.Title>Warning!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="lawn-modal-error">{modalMessage}</Modal.Body>
                    </Modal>
                    : null
            }
            <Footer />
        </div>
    );
}