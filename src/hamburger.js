import React from "react";

import "./assets/css/common.css";
import "./assets/css/hamburger.css"

export default class Hamburger extends React.PureComponent {
    render() {
        let closedClassName = this.props.isOpen ? "close" : "";
        return (<div className={`grid row-3 col-1 pointer hamburger ${closedClassName}`} onClick={this.props.onClick}>
            <span className="dash transition-fast" />
            <span className="dash transition-fast" />
            <span className="dash transition-fast" />
        </div>);
    }
}