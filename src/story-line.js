import React from "react";
import StoryBoard from "./story-board";

export default class StoryLine extends React.Component {

    render() {
        return (<div className={`story-line grid ${this.props.className}`}>
            {this.createStoryBoards()}
        </div>);
    }


    createStoryBoards() {
        let storyBoards = [];
        this.props.stories.forEach((story, index) => {
            storyBoards.push(<StoryBoard key={index} story={story} pointTo={this.props.pointTo} />);
        })
        return storyBoards;
    }
}