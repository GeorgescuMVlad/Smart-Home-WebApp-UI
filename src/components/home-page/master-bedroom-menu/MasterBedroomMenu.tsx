import React from "react";
import Header from "../../Header";
import {BiBulb} from "react-icons/all";
import SceneDisplayer from "../SceneDisplayer";
import { GiMirrorMirror } from "react-icons/gi";
import Footer from "../../Footer";


interface MasterBedroomMenuState{
    scenesList: string[]
    iconsList: any[]
}

class  MasterBedroomMenu extends React.Component<any, MasterBedroomMenuState>{
    constructor(props:any) {
        super(props);
        this.state = {
            scenesList:["Light","Smart Mirror"],
            iconsList:[<BiBulb/>, <GiMirrorMirror/>]
        }
    }

    render() {
        return (
            <div>
                <Header headerText="Master Bedroom" backArrowEnabled={true} />
                <SceneDisplayer scenesList={this.state.scenesList} iconsList={this.state.iconsList} baseUrl="/masterbedroom"/>
                <Footer/>
            </div>
        );
    }

}

export default MasterBedroomMenu;