import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import Sidebar from './sidebar';
import HamburgerMenu from './hamburger-menu';
import ImageIterator from './image-iterator';

import './assets/css/main.css';

export default class App extends React.Component {

    constructor() {
        super();
        this.imageIterator = new ImageIterator();
        this.state = {
            groom: "Victor",
            bride: "Girlfriend",
            date: new Date('2020-01-23T17:00:00'),
            delay: 4000, // milliseconds
            bg: this.imageIterator.next(),
            reduced: true // TODO: Revert default to false
        }

        // this.changeBackground(); // TODO: Uncomment this to have the images changing.
    }

    render() {
        let reducedClassname = this.state.reduced ? 'reduce' : '';
        return (<div className="grid container" style={this.style}>
            <div className={`full-screen  grid main-layout ${reducedClassname}`}>
                <HamburgerMenu onClick={() => this.toggleReduced() }/>
                <Main groom={this.state.groom} bride={this.state.bride} date={this.state.date} />
            </div>
            <Sidebar gallery={[]} amounts={[]} locations={[]} />
        </div>);
    }

    get style() {
        return {
            backgroundImage: `url(${this.state.bg})`
        }
    }


    changeBackground() {
        setInterval(() => {
            this.setState({
                bg: this.imageIterator.next()
            });
            console.log("Changed background to", this.state.bg);
        }, this.state.delay);
    }

    toggleReduced() {
        this.setState({
            reduced: !this.state.reduced
        })
    }
}

ReactDOM.render(<App />, document.getElementById("root"));