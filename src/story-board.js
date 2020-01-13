import React from "react";

import "./assets/css/common.css";
import "./assets/css/text.css";
import "./assets/css/story-board.css";

export default class StoryBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.data = this.props.story;
    }

    render() {
        return (<div className="story-board row-2 col-2 transition transition-transform transition-fast" >
            <div className="content grid">
                <div className="text-container">
                    <h2>{this.data.title}</h2>
                    <div className="capsule text-center margin-auto bg-yellow">{this.data.date}</div>
                </div>
                <div className="img-container">
                    <img src={this.data.image} className="img-fluid" alt="A Memory" />
                </div>
                <div className="description">
                    {this.getParagraphs()}
                </div>
            </div>
        </div>);
    }

    getParagraphs() {
        const paraTexts = this.data.description.split("\n");

        return Array.from(paraTexts, (text, index) => <p key={index}>{text}</p>);
    }
}