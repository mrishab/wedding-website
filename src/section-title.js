import React from "react";

import "./assets/css/common.css";
import "./assets/css/text.css";

export default class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className || ""
        }
    }

    render() {
        return (<h1 className={`${this.state.className} margin-v75px text-upper`}>{this.props.children}</h1>);
    }
}