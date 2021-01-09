import React, {useState} from "react";
import Header from "../../../../Header";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import "./shoppingList.css";
import Footer from "../../../../Footer";

export default function ShoppingList() {
    const [homeFeatures, setHomeFeatures] = useState<string[]>([
        "Smart Fridge"
    ]);
    const [smokedHam, setSmokedHam] = useState<boolean>(false);
    const [cheese, setCheese] = useState<boolean>(false);
    const [butter, setButter] = useState<boolean>(false);
    const [mushrooms, setMushrooms] = useState<boolean>(false);
    const [milk, setMilk] = useState<boolean>(false);
    const [spinach, setSpinach] = useState<boolean>(false);
    const [tomato, setTomato] = useState<boolean>(false);
    const [apples, setApples] = useState<boolean>(false);


    function handleSmokedHamSelection(isSelected: boolean) {
        if (isSelected === true) {
            setSmokedHam(true);
        }
        if (isSelected === false) {
            setSmokedHam(false);
        }
    }

    function handleCheeseSelection(isSelected: boolean) {
        if (isSelected === true) {
            setCheese(true);
        }
        if (isSelected === false) {
            setCheese(false);
        }
    }

    function handleButterSelection(isSelected: boolean) {
        if (isSelected === true) {
            setButter(true);
        }
        if (isSelected === false) {
            setButter(false);
        }
    }

    function handleMushroomsSelection(isSelected: boolean) {
        if (isSelected === true) {
            setMushrooms(true);
        }
        if (isSelected === false) {
            setMushrooms(false);
        }
    }

    function handleMilkSelection(isSelected: boolean) {
        if (isSelected === true) {
            setMilk(true);
        }
        if (isSelected === false) {
            setMilk(false);
        }
    }

    function handleSpinachSelection(isSelected: boolean) {
        if (isSelected === true) {
            setSpinach(true);
        }
        if (isSelected === false) {
            setSpinach(false);
        }
    }

    function handleTomatoSelection(isSelected: boolean) {
        if (isSelected === true) {
            setTomato(true);
        }
        if (isSelected === false) {
            setTomato(false);
        }
    }

    function handleAppleSelection(isSelected: boolean) {
        if (isSelected === true) {
            setApples(true);
        }
        if (isSelected === false) {
            setApples(false);
        }
    }

    return (
        <div className="d-flex flex-column">
            <Header headerText="Smart Fridge" backArrowEnabled={true} backArrowPath={"/kitchen"}/>
            <Card className={"missing-card"}>
                <Card.Body>
                    <div className={"missing-item"}>Missing</div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Smoked-Ham"
                           onChange={(e) => handleSmokedHamSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Smoked Ham
                    <p className={"extra-info"}>Finished</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Cheese"
                           onChange={(e) => handleCheeseSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Cheese
                    <p className={"extra-info"}>Finished</p>
                </Card.Body>
            </Card>


            <Card className={"running-out-card"}>
                <Card.Body>
                    <div className={"running-out-item"}>Running out (less than 50%)</div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Butter"
                           onChange={(e) => handleButterSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Butter
                    <p className={"extra-info"}>20% left (50 gr. from 250 gr.)</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Mushrooms"
                           onChange={(e) => handleMushroomsSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Mushrooms
                    <p className={"extra-info"}>1 piece left approx. (20 gr. from 200)</p>
                </Card.Body>
            </Card>


            <Card className={"expire-card"} >
                <Card.Body>
                    <div className={"expire-item"}>Expiring soon</div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Milk"
                           onChange={(e) => handleMilkSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Milk
                    <p className={"extra-info"}>Expires: today.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Spinach"
                           onChange={(e) => handleSpinachSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Spinach
                    <p className={"extra-info"}>Expires: 2 days.</p>
                </Card.Body>
            </Card>


            <Card className={"in-stock-card"}>
                <Card.Body>
                    <div className={"in-stock-item"}>In stock (more than 50% left)</div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Tomato"
                           onChange={(e) => handleTomatoSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Tomatoes
                    <p className={"extra-info"}>6 pieces left.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={"card-background"}>
                    <input type={"checkbox"}
                           name="Spinach"
                           onChange={(e) => handleSpinachSelection(e.target.checked)}
                           className={"radio-checkbox-round-shopping-list"}
                    />
                    Red apples
                    <p className={"extra-info"}>5 pieces left.</p>
                </Card.Body>
            </Card>
            <Link to={"/kitchen/smartfridge/sendorder/error"}>
                <div className={"error-button1"}>
                </div>
            </Link>
            <Link to={"/kitchen/smartfridge/sendorder"}>
                <div className={"send-order-button"}>
                    <div className={"send-order-text"}> Send order</div>
                </div>
            </Link>
            <div className={"padded-div"}/>
            <Footer />
        </div>
    );
}