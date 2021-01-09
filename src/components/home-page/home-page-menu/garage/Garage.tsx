import React from "react";
import Header from "../../../Header";
import Footer from "../../../Footer";

interface GarageState {
    currentStatus: string,
}

const statusColor: { [status: string]: string } = {
    "Closed": "red",
    "Stuck": "red",
    "Opening...": "orange",
    "Closing...": "orange",
    "Open": "green"
};
const buttonMessage: { [status: string]: string } = {
    "Closed": "Open",
    "Opening...": "Open",
    "Closing...": "Close",
    "Open": "Close",
    "Stuck": "Unlock"
}
const buttonColor: { [status: string]: string } = {
    "Closed": "green",
    "Opening...": "green",
    "Closing...": "red",
    "Open": "red",
    "Stuck": "red"
}

class Garage extends React.Component<any, GarageState> {

    constructor(props: any) {
        super(props);
        let state: string = localStorage.getItem("garageState") as string;
        if (state == null) {
            state = "Closed"
            localStorage.setItem("garageState", state);
        }
        this.state = {currentStatus: state};
    }


    render() {
        return (
            <div>
                <Header headerText="Garage" backArrowEnabled={true} backArrowPath={"/home"}/>
                <div className="d-flex align-items-center flex-column mt-3">
                    <h1>Current status:</h1>
                    <h2 id="doorStatus"
                        style={{color: statusColor[this.state.currentStatus]}}>{this.state.currentStatus}</h2>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button onContextMenu={() => this.stuck()} onClick={() => this.toggleGarage()}
                            className="btn btn-secondary btn-circle btn-xl"
                            style={{color: buttonColor[this.state.currentStatus]}}>{buttonMessage[this.state.currentStatus]}</button>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <h3 hidden={this.state.currentStatus!=="Stuck"}>Please check garage door</h3>
                </div>
                <Footer/>
            </div>
        );
    }

    private async toggleGarage() {
        if (this.state.currentStatus === "Closed") {
            this.setState({currentStatus: "Opening..."})
            await this.sleep(1500)
            this.setState({currentStatus: "Open"})
        } else {
            if (this.state.currentStatus === "Open") {
                this.setState({currentStatus: "Closing..."})
                await this.sleep(1500)
                this.setState({currentStatus: "Closed"})
            }
        }
        localStorage.setItem("garageState", this.state.currentStatus)
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private stuck() {
        if (this.state.currentStatus === "Stuck") {
            this.setState({currentStatus: "Open"})
        } else {
            this.setState({currentStatus: "Stuck"})
        }

    }
}

export default Garage