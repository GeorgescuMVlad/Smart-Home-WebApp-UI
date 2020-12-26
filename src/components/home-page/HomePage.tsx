import React from "react";
import Header from "../Header";
import {Link} from "react-router-dom";
import {BiBath} from "react-icons/bi";
import {BiBed} from "react-icons/bi";
import {BiFridge} from "react-icons/bi";
import {BiHome} from "react-icons/bi";

interface HomePageState {
    scenesList: string[]
    iconsList: any[]
}

export const COLORS = {
    color1: "#111218",
    color2: "#221e1b",
    color3: "#094871",
    color4: "white"
}

class HomePage extends React.Component<any, HomePageState> {

    constructor(props: any) {
        super(props);
        this.state = {
            scenesList: ["Bathroom", "Master Bedroom", "Home", "Kitchen"],
            iconsList: [<BiBath/>, <BiBed/>, <BiHome/>, <BiFridge/>]
        }

    }

    render() {
        return (<div className="d-flex flex-column" style={{color: COLORS.color4}}>
            <Header headerText="Home Page"/>
            <div className="pt-3 pb-3 pl-4 pr-4" style={{display: "grid", gridTemplateColumns: "1fr", gridGap: 1}}>
                {
                    this.state.scenesList.map((scene,index) => {
                        const result = scene.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={`/${result}`}>
                                <div className="card mt-4 text-left w-100 h-75">
                                    <div className="card-body d-flex justify-content-between align-items-center" style={{color: COLORS.color3}}>
                                        <span style={{color: COLORS.color4, fontSize:"1.25rem"}}>{scene}</span>
                                        <span style={{color: COLORS.color4, fontSize:"3rem", marginTop:"-1rem"}}>{this.state.iconsList[index]}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>);
    }

}


export default HomePage;