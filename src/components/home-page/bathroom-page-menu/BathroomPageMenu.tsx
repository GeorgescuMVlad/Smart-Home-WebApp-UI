import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import {   GiBathtub } from "react-icons/gi"
import SceneDisplayer from "../SceneDisplayer";
import {BiBath} from "react-icons/bi";


interface BathroomPageState {
    scenesList: string[]
    iconsList: any[]
}

class BathroomPageMenu extends React.Component<any, BathroomPageState> {

    constructor(props: any) {
        super(props);
        this.state = {
            scenesList: ["Smart Bathtub"],
            iconsList: [<BiBath/>]
        }

    }

    render() {
        return (<div className="d-flex flex-column">
            <Header headerText="Home Page" backArrowEnabled={true}/>
            <SceneDisplayer scenesList={this.state.scenesList} iconsList={this.state.iconsList} baseUrl="/bathroom" />
            <Footer/>
        </div>);
    }

}


export default BathroomPageMenu;