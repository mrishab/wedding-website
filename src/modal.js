import React from "react";

export default class Modal extends React.Component {
    render() {
        const closedClassName = this.props.open ? "" : "closed"
        return <div className={`grid modal full-screen fixed ${closedClassName}`}>
            <span className="icon pointer cross font-size-title" onClick={this.props.closeModal}>&#10006;</span>
            <img className="img-fluid" src={this.props.image} alt="Zoomed tile from gallery" />
        </div>
    }
}