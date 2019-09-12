import React from "react";

import "./assets/css/common.css";
import "./assets/css/modal.css";
import "./assets/css/icons.css";
import "./assets/css/text.css";

export default class Modal extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            open: false,
            image: null
        }
    }

    render() {
        const closedClassName = this.state.open ? "" : "closed"
        return <div className={`grid modal transition-slow full-screen absolute-center fixed ${closedClassName}`}>
            <span className="icon cross pointer transition-transform transition-fast font-size-title" onClick={this.close.bind(this)}>&#10006;</span>
            <img className="img-fluid" src={this.state.image} alt="Zoomed tile from gallery" />
        </div>
    }

    open(img) {
        this.setState({
            image: img
        }, () => {
            this.setState({
                open: true
            })
        })
    }

    close () {
        this.setState({
            open: false
        }, () => {
            this.setState({
                image: null
            })
        })
    }
}