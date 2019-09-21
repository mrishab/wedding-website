import React from "react";

import AnimeWord from './anime-word';

import './assets/css/base.css';
import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/tab.css';
import './assets/css/events.css';

export default class Events extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            details: this.props.details[0]
        }
    }

    render() {
        return (<div>
            <div className="tabs grid col-3">
                {this.createTabs()}
            </div>
            <div className="event-details grid col-2 text-center">
                <AnimeWord>{this.state.details.date}</AnimeWord>
                <AnimeWord>{this.state.details.time}</AnimeWord>
            </div>
            <div className="iframe-container">
                <iframe title="Location" className="height-500px" src={this.state.details.location.map} frameBorder={0} allowFullScreen />
            </div>
        </div>);
    }

    createTabs() {
        const tabs = [];
        this.props.details.forEach((event, index) => {
            const location = event.location;
            tabs.push(<Tab
                key={index}
                index={index}
                active={this.state.activeTabIndex === index}
                setActive={this.setActive.bind(this)}
            >
                    {location.name}
            </Tab>);
        });
        return tabs;
    }

    setActive(index) {
        this.setState({
            activeTabIndex: index,
            details: this.props.details[index]
        });
    }
}

class Tab extends React.PureComponent{
    render() {
        return <div className={"pointer tab transition-transform transition-fast transition text-capital" + (this.props.active ? " active" : "")} onClick={() => this.onClick()}>{this.props.children}</div>
    }

    onClick() {
        this.props.setActive(this.props.index);
    }
}