import React, { useState } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import { GiMirrorMirror } from "react-icons/gi";

export default function MasterBedroomPageMenu() {
    const [masterFeatures, setMasterFeatures] = useState<string[]>([
        "Light 1",
        "Light 2",
        "Smart Mirror"
    ]);

    return (
        <div className="d-flex flex-column">
            <Header headerText="Master Bedroom" />
            <div className="pt-3 pb-3 pl-4 pr-4" style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 10, marginBottom: "2em" }}>
                {
                    masterFeatures.map(feature => {
                        const linkTo = feature.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={`/masterbedroom/${linkTo}`}>
                                <div className="card mt-4 text-left w-100 h-100" style={{ borderRadius: "5em" }}  >
                                    <div className="card-body" style={{ color: "black", display: "flex"}} >
                                        {
                                            feature === "Smart Mirror" ? <GiMirrorMirror style={{ width: "30px", height: "30px", margin: "auto 0 auto 20px" }} />
                                                : null
                                        }
                                        <h5 className="card-title" style={{ color: "black", paddingLeft: "1em" , margin: "auto auto auto 0" }}>{feature}</h5>
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