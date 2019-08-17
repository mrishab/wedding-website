import React from "react";
import "./assets/css/hamburger.css"


export default class Hamburger extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let closedClassName = this.props.isOpen ? "close" : "";
        return (<div className={`hamburger ${closedClassName}`} onClick={this.props.onClick}>
            <span className="dash" />
            <span className="dash" />
            <span className="dash" />
        </div>);
    }
}