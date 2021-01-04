
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
            <div className="pt-3 pb-3 pl-4 pr-4" style={{display: "grid", gridTemplateColumns: "1fr", gridGap: 10, marginBottom: "2em"}}>
                {
                    this.props.scenesList.map((scene,index) => {
                        const result = scene.replace(/\s/g, "").toLowerCase();
                        return (
                            <Link to={this.props.baseUrl+`/${result}`}>
                                <div className="card mt-4 text-left w-100 h-100" style={{ backgroundColor:'var(--buttons)', borderRadius: "5em" }}>
                                    <div className="card-body" style={{color: 'var(--writing)', display: "flex", paddingBottom: "0em", paddingTop:"0", alignItems: "center" }}>
                                        <span style={{fontSize:"3rem", margin:"-0.1rem 0.7rem auto 0"}}>{this.props.iconsList[index]}</span>
                                        <span style={{fontSize:"1.25rem",margin:"auto auto auto 0", paddingBottom:"0"}}>{scene}</span>
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