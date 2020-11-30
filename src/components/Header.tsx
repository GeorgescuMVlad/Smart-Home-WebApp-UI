
import React from "react";

interface HeaderProps{
    headerText: string
}

class Header extends React.Component<HeaderProps, any>{

        render() {
            return (<div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">{this.props.headerText}</a>
                </nav>
            </div>);
        }
}

export default Header;