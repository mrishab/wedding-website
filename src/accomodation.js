import React from 'react';

import './assets/css/accomodation.css';
import './assets/css/text.css';

export default class Accomodation extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="grid col-1 accomodation">
            <h2>{this.props.details.name}</h2>
            <img className="img-fluid" src={this.props.details.image} alt="Accomodation Building" />
            <div className="grid col-2 grid-gap-40px">
                <div className="accomodation-address text-center">
                    <p className="no-margin font-size-small">{this.props.details.address}</p>
                    <p className="no-margin font-size-small">{this.props.details.contact}</p>
                </div>
                <a className="button accomodation-button" target="_blank" href={this.props.details.link}>Book Now</a>
            </div>
        </div>);
    }
}