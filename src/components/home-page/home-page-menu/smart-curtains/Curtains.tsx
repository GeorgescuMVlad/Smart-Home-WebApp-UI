import React, { useState } from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";
import "../smart-curtains/curtains.css";

export default function Curtains() {
    const [kitchen, setKitchen] = useState<boolean>(false);
    const [bedroomMaster, setBedroomMaster] = useState<boolean>(false);
    const [bedroomGrandparents, setBedroomGrandparents] = useState<boolean>(false);
    const [bedroomChildren, setBedroomChildren] = useState<boolean>(false);

    function handleKitchenSelection(isSelected: boolean) {
        if (isSelected === true) {
            setKitchen(true);
        }
        if (isSelected === false) {
            setKitchen(false);
        }
    }

    function handleBedroomMasterSelection(isSelected: boolean) {
        if (isSelected === true) {
            setBedroomMaster(true);
        }
        if (isSelected === false) {
            setBedroomMaster(false);
        }
    }

    function handleBedroomGrandparentsSelection(isSelected: boolean) {
        if (isSelected === true) {
            setBedroomGrandparents(true);
        }
        if (isSelected === false) {
            setBedroomGrandparents(false);
        }
    }

    function handleBedroomChildrenSelection(isSelected: boolean) {
        if (isSelected === true) {
            setBedroomChildren(true);
        }
        if (isSelected === false) {
            setBedroomChildren(false);
        }
    }


    return (
        <div>
            <Header headerText="Smart Curtains" />
            <div className="curtains-text">
                Select the room in which you want to adapt curtains position:
            </div>
            <div className="curtains-options">
                <div>
                    <input type={"checkbox"}
                        name="Kitchen"
                        onChange={(e) => handleKitchenSelection(e.target.checked)}
                        className={"radio-checkbox-round"}
                    />
                    Kitchen
                </div>
                <div>
                    <input type={"checkbox"}
                        name="BedroomMaster"
                        onChange={(e) => handleBedroomMasterSelection(e.target.checked)}
                        className={"radio-checkbox-round"}
                    />
                Master Bedroom
                </div>
                <div>
                    <input type={"checkbox"}
                        name="BedroomGrandparents"
                        onChange={(e) => handleBedroomGrandparentsSelection(e.target.checked)}
                        className={"radio-checkbox-round"}
                    />
                Grandparents Bedroom
                </div>
                <div>
                    <input type={"checkbox"}
                        name="BedroomChildren"
                        onChange={(e) => handleBedroomChildrenSelection(e.target.checked)}
                        className={"radio-checkbox-round"}
                    />
                Children Bedroom
                </div>
            </div>
            {kitchen === true || bedroomMaster === true || bedroomGrandparents === true || bedroomChildren === true ?
                <Link to={"/home/smartcurtains/adjust"}>
                    <button className="curtains-select-button">
                        Select rooms
                    </button>
                </Link>
                : null
            }
        </div>
    );
}