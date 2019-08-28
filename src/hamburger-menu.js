import React from "react";
import Hamburger from "./hamburger";

import './assets/css/common.css';
import './assets/css/hamburger-menu.css'

export default class HamburgerMenu extends React.PureComponent {
    render() {
        return (
            <nav className="grid xs-hide">
                <Hamburger isOpen={this.props.isOpen} onClick={() => this.props.onClick()} />
            </nav>
        )
    }
}