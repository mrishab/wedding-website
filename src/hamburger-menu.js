import React from "react";
import Hamburger from "./hamburger";

export default class HamburgerMenu extends React.Component {
    render() {
        return (
            <nav>
                <Hamburger isOpen={this.props.isOpen} onClick={() => this.props.onClick()}/>
            </nav>
        )
    }
}