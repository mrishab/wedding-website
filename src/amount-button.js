import React from 'react';

export default class AmountButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button onClick={this.redirectToMoney}>
            {this.props.amount}
            <span className="basket-icon" />
        </button>)
    }

    redirectToMoney() {
        throw "Not Implemented";
    }
}