import React from "react";

import "./assets/css/common.css";
import "./assets/css/modal.css";
import "./assets/css/icons.css";
import "./assets/css/text.css";

export default class Modal extends React.Component {
    render() {
        const closedClassName = this.props.open ? "" : "closed"
        return <div className={`grid modal transition-slow full-screen absolute-center fixed ${closedClassName}`}>
            <span className="icon cross pointer transition-transform transition-fast font-size-title" onClick={this.props.closeModal}>&#10006;</span>
            <img className="img-fluid" src={this.props.image} alt="Zoomed tile from gallery" />
        </div>
    }
}