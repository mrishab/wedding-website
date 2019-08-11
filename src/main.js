import React from 'react';

import CountdownClock from './countdown-clock';
import CurveText from './curveText';

import RingImage from './assets/images/ring.svg';

import './assets/css/main.css';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<main className="grid v-center-collapsed h-center text-center">
            <CurveText className="margin-bottom-negative-50 text-upper font-size-subtitle margin-v25px bold" radius={360}>We are getting Married</CurveText>

            <img className="icon height-150px invert-color" src={RingImage} />
            <p className="cursive font-size-huge margin-10">{this.props.groom} <span className="text-yellow">&amp;</span> {this.props.bride}</p>

            <p className="bold font-size-normal">Countdown to the Wedding Day</p>
            <CountdownClock date={this.props.date} />

            <p className="side-swirls bold date">{this.props.date.toString()}</p>
            <CurveText radius={260} direction={-1} className="margin-v25px bold text-upper text-yellow font-size-normal">Save the date</CurveText>

            <button className="slideUp transparent text-upper margin-v25px">More Info</button>
        </main>);
    }
}