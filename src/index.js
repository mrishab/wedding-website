import React from "react";
import ReactDOM from "react-dom";

import INFO from "./info.json";
import Main from "./main";
import Sidebar from "./sidebar";
import HamburgerMenu from "./hamburger-menu";
import Background from "./background";
import Modal from "./modal";
import ImageIterator from "./image-iterator";
import GlobalContext from './global-context';

import './assets/css/font-def.css';
import './assets/css/base.css';
import './assets/css/common.css';
import './assets/css/app.css';

class App extends React.PureComponent {
    constructor() {
        super();
        this.imageIterator = new ImageIterator();
        this.state = {
            groom: INFO.couple.groom,
            bride: INFO.couple.bride,
            date: new Date(INFO.wedding.date),
            gallery: INFO.gallery,
            people: INFO.people,
            amounts: [50, 100, 500],
            events: INFO.wedding.events,
            accomodations: INFO.accomodations,
            reduced: false,
            blur: true
        }
    }

    render() {
        const modalRef = React.createRef();
        const blurClass = this.state.blur ? "blur" : "";
        const reducedClassname = this.state.reduced ? "reduce" : "";

        return (<GlobalContext.Provider value={{modalRef}}>
            <div className={`${blurClass} grid transition container col-2`} >
                <Background blur={this.state.blur} />
                <Modal ref={modalRef}/>
                <div className={`full-screen grid main-layout ${reducedClassname}`}>
                    <HamburgerMenu isOpen={this.state.reduced} onClick={() => this.toggleSidebar()} />
                    <Main groom={this.state.groom} bride={this.state.bride} date={this.state.date} toggleSidebar={() => this.toggleSidebar()} />
                </div>
                <Sidebar
                    gallery={this.state.gallery}
                    amounts={this.state.amounts}
                    events={this.state.events}
                    stories={INFO.stories}
                    bride={this.state.bride}
                    groom={this.state.groom}
                    people={this.state.people}
                    accomodations={this.state.accomodations}
                />
            </div>
        </GlobalContext.Provider>);
    }

    componentDidMount() {
        this.removeBlur();
    }

    toggleSidebar() {
        this.setState({
            reduced: !this.state.reduced
        })
    }

    removeBlur() {
        // The blur is removed only if's currently present and after all contents are loaded.
        if (!this.state.blur) {
            return;
        }
        const removeBlur = () => {
            this.setState({blur: false});
            window.removeEventListener("load", removeBlur);
        }
        window.addEventListener("load", removeBlur.bind(this));    }
}

ReactDOM.render(<App/>, document.getElementById("root"));