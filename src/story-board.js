import React from 'react';

export default class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
    } 

    render() {
        let data = this.props.story;
        return (<div className={"pointTo" + this.props.pointTo}>
            <div className="left">
                <h1>{data.title}</h1>
                <div>{data.date}</div>
            </div>
            <div className="right">
                <img src={data.image} />
            </div>
            <p>{data.description}</p>
        </div>);
    }
}