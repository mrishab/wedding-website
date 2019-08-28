import React from "react";
import StoryBoard from "./story-board";

import './assets/css/common.css';

export default class StoryLine extends React.PureComponent {
    render() {
        return (<div className={`grid col-1 ${this.props.className}`}>
            {this.createStoryBoards()}
        </div>);
    }


    createStoryBoards() {
        let storyBoards = [];
        this.props.stories.forEach((story, index) => {
            storyBoards.push(<StoryBoard key={index} story={story} />);
        })
        return storyBoards;
    }
}