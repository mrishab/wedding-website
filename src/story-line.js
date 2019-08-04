import React from 'react';
import StoryBoard from './story-board';

export default class StoryLine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.createStoryBoards()}
        </div>);
    }


    createStoryBoards() {
        let storyBoards = [];
        this.props.stories.forEach(story => {
            storyBoards.push(<StoryBoard story={story} pointTo={this.props.pointTo} />);
        })
        return storyBoards;
    }

}