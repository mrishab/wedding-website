import React from 'react';

export default class SectionTitle extends React.Component {
    render() {
        return (<div>
            <p className="side-double-dash text-upper">{this.props.title}</p>
        </div>);
    }
}