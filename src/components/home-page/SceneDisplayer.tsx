
import React from "react";
import {Link} from "react-router-dom";
interface SceneDisplayerProps{
    scenesList: string[]
    iconsList: any[],
    baseUrl: string
}

class SceneDisplayer extends React.Component<SceneDisplayerProps, any>{

    render() {
        return (
            <div className="pt-3 pb-3 pl-4 pr-4" style={{display: "grid", gridTemplateColumns: "1fr", gridGap: 1}}>
                {
                    this.props.scenesList.map((scene,index) => {
                        const result = scene.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={this.props.baseUrl+`/${result}`}>
                                <div className="card mt-4 text-left w-100 h-75">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <span style={{fontSize:"1.25rem"}}>{scene}</span>
                                        <span style={{fontSize:"3rem", marginTop:"-1rem"}}>{this.props.iconsList[index]}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default SceneDisplayer