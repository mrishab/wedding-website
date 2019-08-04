import React from 'react';

import CountdownClock from './countdown-clock';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <p>We are getting Married</p>
                <span className="ring-icon"></span>
                <p className="cursive">{this.props.groom} <span className="text-yellow">&amp;</span> {this.props.bride}</p>

                <p className="text-capital">Countdown to Wedding Day</p>
                <CountdownClock date={this.props.date} />

                <p className="side-flowers bold date">{this.props.date}</p>
                <p className="text-upper">Save the date</p>

                <span className="arrow-down"></span>
                <button className="text-upper">More Info</button>
            </main>
        )
    }
}