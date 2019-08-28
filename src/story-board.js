import React from "react";

import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/story-board.css';

export default class StoryBoard extends React.PureComponent {
    render() {
        let data = this.props.story;
        return (<div className="story-board row-2 col-2 transition transition-transform transition-fast" >
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