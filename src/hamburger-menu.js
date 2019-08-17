import React from "react";
import Hamburger from "./hamburger";

export default class HamburgerMenu extends React.Component {
    render() {
        return (
            <nav>
                <Hamburger onClick={() => this.props.onClick()}/>
            </nav>
        )
    }
}