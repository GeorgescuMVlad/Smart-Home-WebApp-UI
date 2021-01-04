import React, { Component } from "react";
import iro from "@jaames/iro";
class IroColorPicker extends React.Component {
    componentDidMount() {
        const { props } = this;
        // create a new iro color picker and pass component props to it
        // @ts-ignore
        this.colorPicker = new iro.ColorPicker(this.el, props);
        // call onColorChange prop whenever the color changes

        // @ts-ignore
        this.colorPicker.on("color:change", color => {
            // @ts-ignore
            if (props.onColorChange) props.onColorChange(color);
        });
    }

    componentDidUpdate() {
        // isolate color from the rest of the props
        // @ts-ignore
        const { color, ...colorPickerState } = this.props;
        // update color
        if (color) { // @ts-ignore
            this.colorPicker.color.set(color);
        }
        // push rest of the component props to the colorPicker's state
        // @ts-ignore
        this.colorPicker.setState(colorPickerState);
    }

    render() {
        // @ts-ignore
        // console.log(this.props.onColorChange);
        // @ts-ignore
        return <div ref={el => (this.el = el)} />;
    }
}
export default IroColorPicker;
