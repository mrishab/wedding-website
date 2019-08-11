import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image || "",
            open: this.props.open
        }
    }

    render() {
        const closdClassName = this.state.open ? "" : "closed"
        return <div className={`grid modal ${closdClassName}`}>
            <span className="cross-icon" onClick={() => this.closeModal()} />
            <img src={this.state.image} />
        </div>
    }
}