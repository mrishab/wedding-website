import React from 'react';

export default class WeddingLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: this.props.locations['restaurant'],
            activeTabIndex: 0,
        }
    }

    render() {
        return (<div>
            <div className="tabs grid col-3">
                {this.createTabs()}
            </div>
            <div className="google-maps iframe-container">
                <iframe className="height-500px" src={this.state.map} frameBorder={0} allowFullScreen />
            </div>
        </div>);
    }

    createTabs() {
        const tabs = [];
        let index = 0;
        for (let location in this.props.locations) {
            tabs.push(<Tab
                key={index}
                index={index}
                location={this.props.locations[location]}
                setMap={this.setMap.bind(this)}
                setActiveTab={this.setActiveTab.bind(this)}
                active={this.state.activeTabIndex == index}>
                    {this._capitalizeFirstLetter(location)}
            </Tab>);
            index++;
        }
        return tabs;
    }

    setMap(src) {
        this.setState({
            map: src
        });
    }

    setActiveTab(index) {
        this.setState({
            activeTabIndex: index
        })
    }

    _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}

class Tab extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"tab" + (this.props.active ? " active" : "")} onClick={() => this.onClick()}>{this.props.children}</div>
    }

    onClick() {
        this.openTab();
        this.props.setActiveTab(this.props.index);
    }

    openTab() {
        this.props.setMap(this.props.location);
    }

}