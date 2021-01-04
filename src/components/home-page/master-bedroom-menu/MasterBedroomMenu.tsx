import React from "react";
import Header from "../../Header";
import {BiBulb} from "react-icons/all";
import SceneDisplayer from "../SceneDisplayer";

interface MasterBedroomMenuState{
    scenesList: string[]
    iconsList: any[]
}

class  MasterBedroomMenu extends React.Component<any, MasterBedroomMenuState>{
    constructor(props:any) {
        super(props);
        this.state = {
            scenesList:["Light1", "Light2"],
            iconsList:[<BiBulb/>, <BiBulb/>]
        }
    }

    render() {
        return (
            <div>
                <Header headerText="Master Bedroom" backArrowEnabled={true} />
                <SceneDisplayer scenesList={this.state.scenesList} iconsList={this.state.iconsList} baseUrl="/masterbedroom"/>
            </div>
        );
    }

}

export default MasterBedroomMenu;