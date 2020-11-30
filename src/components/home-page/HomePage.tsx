import React from "react";
import Header from "../Header";

interface HomePageState{
    scenesList: string[]
}

class HomePage extends React.Component<any, HomePageState> {

    constructor(props:any) {
        super(props);
        this.state={
            scenesList:["Bathroom", "Master Bedroom", "Home", "Kitchen"]
        }

    }

    render() {
        return (<div className="d-flex flex-column">
            <Header  headerText="Home Page"/>
            <div className="pt-3 pb-3 pl-4 pr-4" style={{display: "grid", gridTemplateColumns: "1fr", gridGap:30}}>

            {
                this.state.scenesList.map(scene=>{
                    return(
                        <div className="card mt-4 text-left w-100 h-100" >
                            <div className="card-body">
                                <h5 className="card-title">{scene}</h5>

                            </div>
                        </div>
                    )
                })
            }
            </div>

        </div>);
    }

}


export default HomePage;