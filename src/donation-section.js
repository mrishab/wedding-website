import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/amount-button.css';
import './assets/css/icons.css';

export default class DonationSection extends React.PureComponent {
    render() {
        return (<div>
            <p className="text-center margin-v25px">You can help us with the money to make our day even more enjoyable</p>
            <div className="grid col-3">
                {this.createAmountButtons()}
            </div>
        </div>);
    }

    createAmountButtons() {
        const amountButtons = [];
        this.props.amounts.forEach((amount, index) => {
            amountButtons.push(<AmountButton key={index} >{amount}</AmountButton>)
        });
        return amountButtons;
    }
}

class AmountButton extends React.PureComponent {
    render() {
        return (<button className="position-relative amount-button transition-fast transition-transform margin-v25px" onClick={this.redirectToMoney}>
            {this.props.children}
            <FaShoppingCart className="basket-icon position-absolute" />
        </button>)
    }

    redirectToMoney() {
        alert("Not Implemented");
    }
}