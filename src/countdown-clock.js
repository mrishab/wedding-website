import React from 'react';
import ReactDOM from 'react-dom';
import FlipClock from 'flipclock';
import 'flipclock/dist/flipclock.css';
import './assets/css/main.css';

export default class CountdownClock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="margin-h-auto margin-v25px"></div>);
    }

    componentDidMount() {
        const ref = ReactDOM.findDOMNode(this);
        new FlipClock(ref, this.props.date, {
                face: 'DayCounter',
                countdown: true,
                autoStart:false, // TODO: Remove this line to default to true. Use this for debugging CSS.
                minimumDigits: 9,
                showSeconds: true,
				showLabels: true
        });
    }
}