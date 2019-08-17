import React from "react";
import StoryBoard from "./story-board";
import testImage from "./assets/images/bg/jordan-arnold-Ul07QK2AR-0-unsplash.jpg";

export default class StoryLine extends React.Component {

    constructor(props) {
        super(props);
    }

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