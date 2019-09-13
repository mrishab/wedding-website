import React from 'react';

import Accomodation from './accomodation';

import './assets/css/accomodations.css';
import './assets/css/icons.css';

export default class Accomodations extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        }
    }

    get style() {
        return {
            gridTemplateColumns: `repeat(${this.props.accomodations.length || 0}, 100%)`,
            marginLeft: `-${this.state.position * 100}%`
        }
    }

    render() {
        return (<div className="grid col-3 col-xs-3 accomodations">
            <span className="icon arrow transition transition-fast left pointer" onClick={() => this.shift(-1)}/>
            <div className="slide-container">
                <div className="grid slides transition transition-slow" style={this.style}>
                    {this.generateList()}
                </div>
            </div>
            <span className="icon transition transition-fast arrow right pointer" onClick={() => this.shift(1)} />
        </div>);
    }

    generateList() {
        const list = [];
        this.props.accomodations.forEach((accomodation, index) => {
            list.push(<Accomodation
                        key={index}
                        details={accomodation}
                    />);
        });
        return list;
    }

    shift(by) {
        let updatedPosition = this.state.position + by;
        if (updatedPosition < 0) {
            updatedPosition = this.props.accomodations.length - 1;
        } else if (updatedPosition >= this.props.accomodations.length) {
            updatedPosition = 0;
        }
        this.setState({
            position: updatedPosition
        })
    }
}