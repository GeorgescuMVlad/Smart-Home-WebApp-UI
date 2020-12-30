import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function KitchenPage() {
    const [homeFeatures, setHomeFeatures] = useState<string[]>([
        "Smart Fridge"
    ]);

    return (
        <div className="d-flex flex-column">
            <Header headerText="Kitchen" />
            <div className="pt-3 pb-3 pl-4 pr-4" style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 10, marginBottom: "2em" }}>
                {
                    homeFeatures.map(feature => {
                        const linkTo = feature.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={`/kitchen/${linkTo}`}>
                                <div className="card mt-4 text-left w-100 h-100" style={{ borderRadius: "5em" }}  >
                                    <div className="card-body" style={{ color: "black", display: "flex" }} >
                                        {
                                            feature === "Smart Fridge" ? <AiOutlineShoppingCart />
                                                : null
                                        }
                                        <h5 className="card-title" style={{ color: "black", paddingLeft: "1em" }}>{feature}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}