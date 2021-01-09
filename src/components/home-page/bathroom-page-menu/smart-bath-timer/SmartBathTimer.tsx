import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import "../smart-bath-timer/smartBathTimer.css";

export default function SmartTubTimer() {
    const [hour, setHour] = useState<number>(15);
    const [minute, setMinute] = useState<number>(30);

    function increaseHour() {
        let currentHour: number = hour
        currentHour = currentHour + 1
        setHour(currentHour)
    }

    function increaseMinute() {
        let currentMinute: number = minute
        currentMinute = currentMinute + 1
        setMinute(currentMinute)
    }

    function decreaseHour() {
        let currentHour: number = hour
        currentHour = currentHour - 1
        setHour(currentHour)
    }

    function decreaseMinute() {
        let currentMinute: number = minute
        currentMinute = currentMinute - 1
        setMinute(currentMinute)
    }


    return (
        <div>
            <Header headerText="Smart Tub" />
            <div className="main-container-timer">
                <h3>Set hour:</h3>
                <div className="timer-container">
                    <div className="timer-controller">
                        <div className="arrow-box-timer">
                            <MdExpandLess onClick={increaseHour} style={{ fontSize: "1.5em" }} />
                            <MdExpandMore onClick={decreaseHour} style={{ fontSize: "1.5em" }} />
                        </div>

                        <div className="hour-box time-box">
                            <span>{hour}</span>
                        </div>
                    </div>

                    <span>:</span>

                    <div className="timer-controller">
                        <div className="minute-box time-box">
                            <span>{minute}</span>
                        </div>

                        <div className="arrow-box-timer">
                            <MdExpandLess onClick={increaseMinute} style={{ fontSize: "1.5em" }} />
                            <MdExpandMore onClick={decreaseMinute} style={{ fontSize: "1.5em" }} />
                        </div>

                    </div>

                </div>
                <Link to={"/bathroom/smartbathtub/done"}>
                    <button className="smarttub-buttons-timer">
                        Program Bath
                    </button>
                </Link>
            </div>
        </div>
    );
}