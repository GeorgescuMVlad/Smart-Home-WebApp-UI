import React from "react";
import IroColorPicker from "./IroColorPicker";
import iro from "@jaames/iro";
import Header from "../../../Header";


interface LightState {
    pickerType: string,
    color: string,
    layout: any,
    layoutDirection: string
}

class Light extends React.Component<any, LightState> {

    constructor(props: any) {
        super(props);

        this.state = this.getPickerFromStorage()
    }


    onColorChange = (color: { hexString: any; }) => {
        this.setState({
            color: color.hexString
        });
        console.log(color.hexString);
        localStorage.setItem("lights1", JSON.stringify(this.state))
    };

    onPickerChange() {
        if (this.state.pickerType === 'color') {
            this.setState({
                pickerType: 'kelvin',
                layout: [
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderShape: 'circle',
                            sliderType: 'kelvin'
                        }
                    }
                ],
                layoutDirection: 'horizontal'
            })
        } else {
            this.setState({
                pickerType: 'color',
                layout: [{
                    component: iro.ui.Wheel
                }],
                layoutDirection: 'vertical'
            })
        }
        localStorage.setItem("lights1", JSON.stringify(this.state))
    }

    getPickerFromStorage(): LightState {
        let localState: LightState;
        if (localStorage.getItem("lights1") != null) {

            localState = JSON.parse(localStorage.getItem("lights1") as string)
            if (localState.pickerType === 'color') {
                localState.layout = [
                    {
                        component: iro.ui.Wheel,
                    }
                ]
            } else {
                localState.layout = [
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderShape: 'circle',
                            sliderType: 'kelvin'
                        }
                    }
                ]
                localState.layoutDirection = 'horizontal'
            }
        } else {
            localState = {
                pickerType: 'color',
                color: "#fffefa",
                layout: [
                    {
                        component: iro.ui.Wheel,
                    }
                ],
                layoutDirection: 'vertical'
            }
        }
        return localState
    }

    render() {
        return (<div>
                <Header headerText="Light1" backArrowEnabled={true} backArrowPath={"/masterbedroom"}/>
                <div className="container d-flex justify-content-center align-items-center flex-column pt-5 mb-5" >
                    <IroColorPicker
                        // @ts-ignore
                        layout={this.state.layout}
                        color={this.state.color}
                        onColorChange={this.onColorChange}
                        layoutDirection={this.state.layoutDirection}
                    />
                 <button className="btn btn-outline-primary mt-3" onClick={()=>this.onPickerChange()}>Change Picker Type</button>
                </div>
            </div>
        );
    }
}

export default Light;