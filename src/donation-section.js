import React from 'react';

export default class DonationSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <p className="text-center">You can help us with the money to make our day even more enjoyable</p>
            <div className="grid col-3">
                {this.createAmountButtons()}
            </div>
        </div>);
    }

    createAmountButtons() {
        const amountButtons = [];
        this.props.amounts.forEach(amount => {
            amountButtons.push(<AmountButton>{amount}</AmountButton>)
        });
        return amountButtons;
    }
}

class AmountButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button className="floatUp gray" onClick={this.redirectToMoney}>
            {this.props.children}
            <span className="basket-icon" />
        </button>)
    }

    redirectToMoney() {
        alert("Not Implemented");
    }
}