import React from "react";
import ReactDOM from "react-dom";

import INFO from "./info.json";
import Main from "./main";
import Sidebar from "./sidebar";
import HamburgerMenu from "./hamburger-menu";
import Background from "./background";
import Modal from "./modal";
import ImageIterator from "./image-iterator";

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
            reduced: false,
            modalOpen: false,
            modalImage: "",
            blur: true
        }
    }

    render() {
        const blurClass = this.state.blur ? "blur" : "";
        const reducedClassname = this.state.reduced ? "reduce" : "";
        return (<div className={`${blurClass} grid transition container col-2`} >
            <Background blur={this.state.blur} />
            <Modal open={this.state.modalOpen} image={this.state.modalImage} closeModal={() => this.closeModal()} />
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
            />
        </div>);
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

    openModal(image) {
        this.setState({
            modalImage: image,
            modalOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }
}

// Hack: TODO - Find a better approach to avoid this.
// Making the functions statically available over the singleton instance.
const APP_INSTANCE = React.createRef();
ReactDOM.render(<App ref={APP_INSTANCE} />, document.getElementById("root"));

// Exporting the instance
export default APP_INSTANCE.current;