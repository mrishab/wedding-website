import React from "react";
import "./assets/css/hamburger.css"


export default class Hamburger extends React.Component {
    render() {
        let closedClassName = this.props.isOpen ? "close" : "";
        return (<div className={`hamburger ${closedClassName}`} onClick={this.props.onClick}>
            <span className="dash" />
            <span className="dash" />
            <span className="dash" />
        </div>);
    }
}