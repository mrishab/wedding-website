import React from 'react';

export default class Locations extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.createTabSection()}
            {this.createMap()}
        </div>);
    }

    createTabSection() {
        let tabs = [];
        this.props.locations.forEach(location => {
            tabs.push(<div>
                <h2>{location.title}</h2>
                <p>{location.address}</p>
            </div>);
        });
        return (<div>{tabs}</div>);
    }

    createMap() {
        
    }
}