import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";


export default function KitchenPage() {
    const [homeFeatures, setHomeFeatures] = useState<string[]>([
        "Smart Fridge"
    ]);

    return (
        <div className="d-flex flex-column">
            <Header headerText="Kitchen" backArrowEnabled={true} backArrowPath={""}/>
            <div className="pt-3 pb-3 pl-4 pr-4" style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 10, marginBottom: "2em" }}>
                {
                    homeFeatures.map(feature => {
                        const linkTo = feature.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={`/kitchen/${linkTo}`}>
                                <div className="card mt-4 text-left w-100 h-100" style={{ backgroundColor:'var(--buttons)', borderRadius: "5em" }}  >
                                    <div className="card-body" style={{color: 'var(--writing)', display: "flex", paddingBottom: "0em", paddingTop:"0", alignItems: "center" }} >


                                        <span style={{fontSize:"3rem", margin:"-0.1rem 0.7rem auto 0"}}><BiCart/></span>
                                        <span style={{fontSize:"1.25rem",margin:"auto auto auto 0", paddingBottom:"0"}}>Smart fridge</span>
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