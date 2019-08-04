import React from 'react';

export default class HamburgerMenu extends React.Component {
    render() {
        return (
            <nav>
                <div className="hamburger" onClick={this.openSideBar}>
                    <span className="dash" />
                    <span className="dash" />
                    <span className="dash" />    
                </div>
            </nav>
        )
    }

    openSideBar() {

    }

}