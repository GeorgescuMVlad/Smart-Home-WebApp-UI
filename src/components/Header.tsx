
import React from "react";
import {COLORS} from "./home-page/HomePage";

interface HeaderProps{
    headerText: string
}

class Header extends React.Component<HeaderProps, any>{

        render() {
            return (<div>
                <nav  className="navbar" style={{backgroundColor:COLORS.color2}}>
                    <a className="navbar-brand" style={{color:COLORS.color4}} href="#">{this.props.headerText}</a>
                </nav>
            </div>);
        }
}

export default Header;