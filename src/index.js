import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import Sidebar from './sidebar';
import HamburgerMenu from './hamburger-menu';

export default class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            groom: "Victor",
            bride: "Girlfriend",
            date: new Date('2020-01-23T17:00:00')
        }
    }

    render() {
        return (<div>
                <HamburgerMenu />
                {/* {/* <Main groom={this.state.groom} bride={this.state.bride} date={this.state.date}/> */}
                <Sidebar gallery={[]} amounts={[]} locations={[]}/> */}
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));