import React from "react";

import './assets/css/base.css';
import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/tab.css';

export default class WeddingLocations extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.locations["restaurant"],
            activeTabIndex: 0,
        }
    }

    render() {
        return (<div>
            <div className="tabs grid col-3">
                {this.createTabs()}
            </div>
            <div className="iframe-container">
                <iframe title="Location" className="height-500px" src={this.state.location} frameBorder={0} allowFullScreen />
            </div>
        </div>);
    }

    createTabs() {
        const tabs = [];
        Object.keys(this.props.locations).forEach((key, index) => {
            const location = this.props.locations[key];
            tabs.push(<Tab
                key={index}
                index={index}
                location={location}
                setLocation={this.setLocation.bind(this)}
                setActiveTab={this.setActiveTab.bind(this)}
                active={this.state.activeTabIndex === index}>
                    {key}
            </Tab>);
        });
        return tabs;
    }

    setLocation(src) {
        this.setState({
            location: src
        });
    }

    setActiveTab(index) {
        this.setState({
            activeTabIndex: index
        })
    }
}

class Tab extends React.PureComponent{
    render() {
        return <div className={"pointer tab transition-transform transition-fast transition text-capital" + (this.props.active ? " active" : "")} onClick={() => this.onClick()}>{this.props.children}</div>
    }

    onClick() {
        this.openTab();
        this.props.setActiveTab(this.props.index);
    }

    openTab() {
        this.props.setLocation(this.props.location);
    }

}