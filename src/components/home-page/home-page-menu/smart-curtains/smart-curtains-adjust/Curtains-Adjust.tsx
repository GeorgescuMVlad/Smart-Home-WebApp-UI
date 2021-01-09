import React, { useState } from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";
import "../smart-curtains-adjust/curtains-adjust.css";
import Footer from "../../../../Footer";
import Modal from "react-bootstrap/Modal";

export default function CurtainsAdjust() {
    const [modalMessage, setModalMessage] = useState<string>("");
    const [openModalType, setOpenModalType] = useState<number>(0);

    return (
        <div>
            <Header headerText="Smart Curtains" backArrowEnabled={true} backArrowPath={"/home/smartcurtains"} />
            <div className="curtains-adjust-text">
                Adjust the position of the curtains:
            </div>
            <div className="curtains-adjust-text-curtains">
                <label style={{ marginLeft: "1em" }}>Left curtain</label>
                <label style={{ marginLeft: "6.5em" }}>Right curtain</label>
            </div>
            <div className="curtains-adjust-sliders">
                <input type="range" className="left-slider" />
                <input type="range" className="right-slider" />
            </div>
            <div className="curtains-adjust-buttons-div">
                <Link to={"/home/smartcurtains/adjust/done"}>
                    <button className="curtains-adjust-buttons">
                        Apply chosen positions
                    </button>
                </Link>
                <button className="curtains-error-button"
                    onContextMenu={() => {
                        setModalMessage("The curtains are stuck! Please check them!");
                        setOpenModalType(1);
                    }}
                >
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