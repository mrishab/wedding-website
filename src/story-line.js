import React from 'react';
import StoryBoard from './story-board';
import testImage from './assets/images/bg/jordan-arnold-Ul07QK2AR-0-unsplash.jpg';

export default class StoryLine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={`story-line grid ${this.props.className}`}>
            {this.createStoryBoards()}
        </div>);
    }


    // TODO: Uncomment this original function
    // createStoryBoards() {
    //     let storyBoards = [];
    //     this.props.stories.forEach(story => {
    //         storyBoards.push(<StoryBoard story={story} pointTo={this.props.pointTo} />);
    //     })
    //     return storyBoards;
    // }

    createStoryBoards() {
        let storyBoards = [];
        let stories = [{
            title: "We Met For The First Time",
            image: testImage,
            date: "12th March 2012",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
            title: "We Met For The First Time",
            image: testImage,
            date: "12th March 2012",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
            title: "We Met For The First Time",
            image: testImage,
            date: "12th March 2012",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
            title: "We Met For The First Time",
            image: testImage,
            date: "12th March 2012",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }]
        stories.forEach(story => {
            // TODO: I added a key coz it was giving an error. Not sure, if I need this and how to get rid of it.
            storyBoards.push(<StoryBoard key={Math.random()} story={story} pointTo={this.props.pointTo} />);
        })
        return storyBoards;
    }

}