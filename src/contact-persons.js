import React from "react";
import ContactPerson from "./contact-person";

export default class ContactPersons extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            people: this.props.people || []
        }
    }

    render() {
        return (<div className="grid col-2">
            {this.generateList()}
        </div>);
    }

    generateList() {
        const list = [];
        this.state.people.forEach((person, index) => {
            list.push(<ContactPerson key={index} person={person}></ContactPerson>);
        });
        return list;
    }
}