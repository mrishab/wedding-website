import React from "react";

import CountdownClock from "./countdown-clock";
import CurveText from "./curveText";

import RingImage from "./assets/images/ring.svg";

import "./assets/css/common.css";
import "./assets/css/main.css";
import "./assets/css/icons.css";
import "./assets/css/text.css";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brideName: this.props.bride.name.first + " " + this.props.bride.name.last,
            groomName: this.props.groom.name.first + " " + this.props.groom.name.last, 
        }
    }

    render() {
        return (<main className="grid v-center-collapsed h-center text-center">
            <CurveText className="margin-bottom-negative-50 text-upper font-size-subtitle margin-v25px bold" radius={360}>We are getting married</CurveText>

            <img className="icon height-150px invert-color" src={RingImage} alt="A white ring with diamond" />
            <p className="cursive font-size-huge margin-10">{this.state.groomName} <span className="text-yellow">&amp;</span>{this.state.brideName}</p>

            <p className="font-size-normal letter-spacing-3px">Countdown to the date</p>
            <CountdownClock date={this.props.date} />

            <p className="margin-v25px side-swirls bold date text-yellow font-size-normal">{this.formatDate(this.props.date)}</p>
            <CurveText radius={260} direction={-1} className="margin-v25px bold text-upper text-yellow font-size-normal">Save the date</CurveText>

            <button onClick={this.props.toggleSidebar} className="slideUp transparent text-upper margin-v25px xs-hide">More Info</button>
        </main>);
    }

    formatDate(date) {
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    }
}