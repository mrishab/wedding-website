import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default class DonationSection extends React.Component {
    constructor(props) {
        super(props);
    }

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

class AmountButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button className="position-relative floatUp gray margin-v25px" onClick={this.redirectToMoney}>
            {this.props.children}
            <FaShoppingCart className="basket-icon position-absolute" />
        </button>)
    }

    redirectToMoney() {
        alert("Not Implemented");
    }
}