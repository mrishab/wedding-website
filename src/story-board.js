import React from "react";

export default class StoryBoard extends React.Component {
    render() {
        let data = this.props.story;
        return (<div className="story-board" >
            <div className="content grid">
                <div className="text-container">
                    <h2>{data.title}</h2>
                    <div className="capsule text-center margin-auto bg-yellow">{data.date}</div>
                </div>
                <div className="img-container">
                    <img src={data.image} className="img-fluid full-height" alt="A Memory" />
                </div>
                <p className="description">{data.description}</p>
            </div>
        </div>);
    }
}