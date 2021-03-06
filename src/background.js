import React from "react";
import ImageIterator from "./image-iterator";

import "./assets/css/common.css";
import "./assets/css/background.css";

export default class Background extends React.PureComponent {
    constructor(props) {
        super(props);
        this.imageIterator = new ImageIterator();
        this.imageIterator._fetchAllImages();
        this.state = {
            bg: this.imageIterator.next(),
            delay: 7000, // milliseconds
        }

        this.changeBackground();
    }

    render() {
        return (<div className="background-container transition full-screen fixed" style={this.style}></div>);
    }

    changeBackground() {
        setInterval(() => {
            this.setState({
                bg: this.imageIterator.next()
            });
        }, this.state.delay);
    }

    get style() {
        return {
            backgroundImage: `url(${this.state.bg})`
        }
    }
}