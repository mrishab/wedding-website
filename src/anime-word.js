import React from 'react';

import './assets/css/anime-word.css';

export default class AnimeWord extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            animeInProgress: false,
            content: this.props.children
        }
        this.duration = 200; // milliseconds
    }

    componentWillReceiveProps(props) {
        if (this.isSameProps(props)) return;
        this.zoomOutAndUpdate(props.children);
    }

    render() {
        const animeClass = this.state.animeInProgress ? "zoom-out" : "";
        return (<div className={`anime-word-container transition transition-fast ${animeClass}`}>
            <span className="anime-word">{this.state.content}</span>
        </div>);
    }

    isSameProps(props) {
        return JSON.stringify(props) === JSON.stringify(this.props);
    }

    zoomOutAndUpdate(content) {
        this.setState({
            animeInProgress: true
        }, () => {
            // Set the new content after the zoom out has been performed
            // and content is being zoomed in.
            setTimeout(() => {
                this.setState({
                    animeInProgress: false,
                    content: content
                })
            }, this.duration);
        });
    }
}