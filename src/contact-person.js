import React from "react";

import "./assets/css/common.css";
import "./assets/css/contact-person.css";

export default class ContactPerson extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.person
        }
    }

    render() {
        const image = this.state.person.image;
        const name = this.state.person.name + (this.state.person.description ? ` - ${this.state.person.description}` : "");
        return (<div className="grid contact-person">
            <img className="img-circle img-fluid" src={image} alt="Person in the frame" />
            <p>{name}</p>
        </div>);
    }
}