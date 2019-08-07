import React from 'react';
import ReactDOM from 'react-dom';
import CircleType from 'circletype';

export default class CurveText extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className || ""
        };
    }

    componentDidMount() {
        let domRef = ReactDOM.findDOMNode(this);
        let curvedText = new CircleType(domRef);
        curvedText.radius(this.props.radius)
                  .dir(this.props.direction);
    }

    render() {
        return (
            <span className={this.state.className}>{this.props.children}</span>
        );
    }
}