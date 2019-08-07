import React from 'react';

export default class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
    } 

    render() {
        let data = this.props.story;
        return (<div className={"story-board grid pointTo" + this.props.pointTo}>
            <div className="text-container">
                <h1>{data.title}</h1>
                <div className="capsule bg-yellow">{data.date}</div>
            </div>
            <div className="img-container">
                <img src={data.image} className="img-fluid" />
            </div>
            <p className="description">{data.description}</p>
        </div>);
    }
}