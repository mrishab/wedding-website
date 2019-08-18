import React from "react";
import ReactDOM from "react-dom";

import INFO from "./info.json";
import Main from "./main";
import Sidebar from "./sidebar";
import HamburgerMenu from "./hamburger-menu";
import Background from "./background";
import Modal from "./modal";
import ImageIterator from "./image-iterator";


import "./assets/css/main.css";
import "./assets/css/main-mobile.css";
import "./assets/css/tablet-main.css";


class App extends React.Component {
    constructor() {
        super();
        this.imageIterator = new ImageIterator();
        this.state = {
            groom: INFO.couple.groom,
            bride: INFO.couple.bride,
            date: new Date(INFO.wedding.date),
            gallery: INFO.gallery,
            amounts: [50, 100, 500],
            locations: INFO.wedding.locations,
            reduced: false,
            modalOpen: false,
            modalImage: "",
            blur: true
        }
    }

    render() {
        const blurClass = this.state.blur ? "blur" : "";
        const reducedClassname = this.state.reduced ? "reduce" : "";
        return (<div className={`${blurClass} grid container col-2`} >
            <Background blur={this.state.blur} />
            <Modal open={this.state.modalOpen} image={this.state.modalImage} closeModal={() => this.closeModal()} />
            <div className={`full-screen grid main-layout ${reducedClassname}`}>
                <HamburgerMenu isOpen={this.state.reduced} onClick={() => this.toggleSidebar()} />
                <Main groom={this.state.groom} bride={this.state.bride} date={this.state.date} toggleSidebar={() => this.toggleSidebar()} />
            </div>
            <Sidebar
                gallery={this.state.gallery}
                amounts={this.state.amounts}
                locations={this.state.locations}
                stories={INFO.stories}
                bride={this.state.bride}
                groom={this.state.groom}
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