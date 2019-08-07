import React from 'react';

export default class SectionTitle extends React.Component {
    render() {
        return (<h1 className="text-upper">{this.props.children}</h1>);
    }
}