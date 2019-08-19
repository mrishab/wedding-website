import React from "react";
import ReactDOM from "react-dom";
import FlipClock from "flipclock";

import "flipclock/dist/flipclock.css";
import './assets/css/common.css';
import './assets/css/countdown-clock.css';

export default class CountdownClock extends React.Component {
    render() {
        return (<div className="margin-h-auto margin-v25px"></div>);
    }

    componentDidMount() {
        const ref = ReactDOM.findDOMNode(this);
        new FlipClock(ref, this.props.date, {
                face: "DayCounter",
                countdown: true,
                autoStart:true,
                minimumDigits: 9,
                showSeconds: true,
				showLabels: true
        });
    }
}