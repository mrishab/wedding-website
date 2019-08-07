import React from 'react';
import Hamburger from './hamburger';

export default class HamburgerMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <Hamburger onClick={() => this.props.onClick()}/>
            </nav>
        )
    }
}