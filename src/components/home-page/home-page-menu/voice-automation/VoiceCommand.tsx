import React from "react";
import Header from "../../../Header";
import {Command} from "./VoiceAutomation";
import {Link} from "react-router-dom";
import $ from 'jquery';
import Footer from "../../../Footer";
import {AiOutlinePlusCircle} from "react-icons/all";

interface VoiceCommandState {
    command: Command,
    newStep: string
}

class VoiceCommand extends React.Component<any, VoiceCommandState> {

    constructor(props: any) {
        super(props)
        let command: Command = JSON.parse(localStorage.getItem("Command") as string)
        this.state = {command: command, newStep: ""}
    }

    handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target;

        var command: Command = this.state.command
        // @ts-ignore
        command.steps[target.id as number] = target.value as string
        command.steps.filter(value => value !== "")
        this.setState({command: command})

    }

    render() {
        return (
            <div>
                <Header headerText="Voice Automation" backArrowPath={"/home/voiceautomation"} backArrowEnabled={false}/>
                <form>
                    <div className="form-group">
                        <label htmlFor="phrase" style={{fontSize:"1.5rem"}}>Phrase</label>
                        <input type="text" className="form-control" id="phrase"
                               placeholder="Enter phrase" defaultValue={this.state.command.phrase}/>
                    </div>
                    <div id="steps" className="form-group">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <label htmlFor="step1" style={{fontSize:"1.5rem"}}>Steps</label>
                            <AiOutlinePlusCircle onClick={() => this.newStep()}
                                                 style={{color: "var(--header)", fontSize: "2rem", marginRight:"0.5rem"}}/>

                        </div>
                        {this.state.command.steps.map((step, index) => {
                            if (step !== "") {

                                return (
                                    <input type="text" className="form-control" id={index + ""}
                                           placeholder="Enter step" value={step}
                                           onChange={event => this.handleInputChange(event)}/>
                                )
                            }
                        })}
                        <input type="text" className="form-control" id={"newstep"}
                               placeholder="Enter new step" onChange={() => this.handleChange()}/>
                    </div>
                </form>
                <div className="d-flex flex-row justify-content-around">
                    <Link to={"/home/voiceautomation"}>
                        <button type={"button"} onClick={() => this.save()} className="btn btn-theme-s">Save</button>
                    </Link>
                    <Link to={"/home/voiceautomation"}>
                        <button type={"button"} onClick={() => this.delete()} className="btn btn-theme-s">Delete</button>
                    </Link>
                </div>
                <Footer/>
            </div>
        );
    }

    private newStep() {
        var command: Command = this.state.command
        command.steps.push(this.state.newStep)
        this.setState({command: command, newStep: ""})
        // @ts-ignore
        document.getElementById("newstep").value = ""

    }


    private save() {
        let commands: Command[] = JSON.parse(
            localStorage.getItem("VoiceCommands") as string)
        if (commands == null) {
            commands = []
        }


        var newCommand: Command = this.state.command
        // @ts-ignore
        newCommand.phrase = document.getElementById("phrase").value
        if (this.state.newStep !== "") {
            newCommand.steps.push(this.state.newStep)
        }

        console.log("com",newCommand)
        var edit: string = localStorage.getItem("EditCommand") as string
        if (edit != null) {
            commands.forEach((value, index, array) => {
                if (value.phrase === edit) {
                    array[index] = newCommand
                }
            })
            localStorage.removeItem("EditCommand")
        } else {
            commands.push(newCommand)
        }
        console.log(edit)
        console.log(commands)

        commands.forEach((value, index, array) => {
            value.steps.forEach((value1, index1, array1) => {
                if (value1 === "" || value1 === null) {
                    array1.splice(index1)
                }
            })
        })
        console.log(commands)
        localStorage.setItem("VoiceCommands", JSON.stringify(commands))

    }

    private handleChange() {
        // @ts-ignore
        this.setState({newStep: document.getElementById("newstep").value})
    }

    private delete() {
        let commands: Command[] = JSON.parse(
            localStorage.getItem("VoiceCommands") as string)
        if (commands == null) {
            commands = []
        }
        commands.forEach(((value, index, array) => {
            if(value.phrase === this.state.command.phrase){
                array.splice(index);
            }
        }))
        localStorage.setItem("VoiceCommands", JSON.stringify(commands))
        localStorage.removeItem("EditCommand")
    }
}

export default VoiceCommand;
