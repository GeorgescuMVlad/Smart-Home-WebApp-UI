import React from "react";
import Header from "../Header";
import {Link} from "react-router-dom";
import {BiBath} from "react-icons/bi";
import {BiBed} from "react-icons/bi";
import {BiFridge} from "react-icons/bi";
import {BiHome} from "react-icons/bi";
import SceneDisplayer from "./SceneDisplayer";
import Footer from "../Footer";

interface HomePageState {
    scenesList: string[]
    iconsList: any[]
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
        return (<div className="d-flex flex-column">
            <Header headerText="Home Page" backArrowEnabled={false}/>
            <SceneDisplayer scenesList={this.state.scenesList} iconsList={this.state.iconsList} baseUrl="" />
            <Footer/>
        </div>);
    }

}


export default HomePage;