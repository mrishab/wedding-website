import React from 'react';
import './assets/css/hamburger.css'


export default class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        let closedClassName = this.state.isOpen ? 'close' : '';
        return (<div className={`hamburger ${closedClassName}`} onClick={() => this.toggleSidebarOpen()}>
            <span className="dash" />
            <span className="dash" />
            <span className="dash" />
        </div>);
    }

    toggleSidebarOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.props.onClick();
    }
}