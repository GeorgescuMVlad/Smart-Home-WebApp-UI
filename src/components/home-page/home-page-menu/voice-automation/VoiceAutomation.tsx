import React from "react";
import {Link} from "react-router-dom";
import Header from "../../../Header";
import {AiOutlinePlusCircle, BiPencil} from "react-icons/all";

export interface Command{
    phrase: string,
    steps: string[]
}

interface VoiceAutomationState {
    commands: Command[]
}

class VoiceAutomation extends React.Component<any, VoiceAutomationState> {

    constructor(props: any) {
        super(props);
        let commands:Command[] = JSON.parse(
            localStorage.getItem("VoiceCommands") as string)
        if(commands == null){
            commands = []
        }
        this.state = {commands: commands}

    }

    render() {
        return (
            <div>
                <Header headerText="Voice Automation" backArrowPath="/home" backArrowEnabled={true}/>
                <div className="container mt-3">
                    <h1 className="mb-3">Current phrases:</h1>
                    {this.state.commands.map(command => {
                        return (
                            <span className="d-flex justify-content-start align-items-center mt-1">
                                <Link to="/home/voiceautomation/command">
                                <BiPencil onClick={()=>this.edit(command)} style={{fontSize: "2rem", margin: "0.5rem"}}/>
                                </Link>
                            <h3>{command.phrase}</h3>
                            </span>
                        )
                    })}
                </div>
                <div className="footer">
                    <Link to="/home/voiceautomation/command">
                    <AiOutlinePlusCircle onClick={()=>this.save({phrase:"",steps:[]})} style={{fontSize: "4rem"}}/>
                    </Link>
                </div>
            </div>
        );
    }
    private edit(command:Command){
        localStorage.setItem("Command", JSON.stringify(command));
        localStorage.setItem("EditCommand", command.phrase);
    }

    private save(command:Command) {
        localStorage.setItem("Command", JSON.stringify(command));
    }
}

export default VoiceAutomation;