import React from "react";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/all";

interface HeaderProps {
    headerText: string,
    backArrowEnabled?: boolean,
    backArrowPath?: string
}

class Header extends React.Component<HeaderProps, any> {

    render() {
        return (<div style={{backgroundColor:'var(--header)'}}   >
            {/*@ts-ignore*/}
            <Link to={this.props.backArrowPath? this.props.backArrowPath: "/"} style={{ color:'var(--writing)', display: "inline", fontSize:"2rem", marginLeft:"1.5rem"}}>
                {this.props.backArrowEnabled ? <BiArrowBack/> : <span/>}
            </Link>
            <nav className="navbar" style={{display:"inline" }}>
                <a className="navbar-brand" style={{fontSize:"2rem", color:'var(--writing)'}}   href="#">{this.props.headerText}</a>
            </nav>
        </div>);
    }
}

export default Header;