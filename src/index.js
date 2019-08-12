import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import Sidebar from './sidebar';
import HamburgerMenu from './hamburger-menu';
import ImageIterator from './image-iterator';
import Modal from './modal';

import './assets/css/main.css';

class App extends React.Component {
    constructor() {
        super();
        this.imageIterator = new ImageIterator();
        this.state = {
            groom: "Victor",
            bride: "Girlfriend",
            date: new Date('2020-01-23T17:00:00'),
            delay: 4000, // milliseconds
            bg: this.imageIterator.next(),
            reduced: false,
            modalOpen: false,
            modalImage: ""
        }
        // this.changeBackground(); // TODO: Uncomment this to have the images changing.
    }

    render() {
        let reducedClassname = this.state.reduced ? 'reduce' : '';
        return (<div className="grid container" style={this.style}>
            <Modal open={this.state.modalOpen} image={this.state.modalImage} closeModal={() => this.closeModal()}/>
            <div className={`full-screen  grid main-layout ${reducedClassname}`}>
                <HamburgerMenu onClick={() => this.openSidebar() }/>
                <Main groom={this.state.groom} bride={this.state.bride} date={this.state.date} />
            </div>
            <Sidebar gallery={this.mockGallery()} amounts={this.mockAmounts()} locations={this.mockLocations()} />
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

    openSidebar() {
        this.setState({
            reduced: !this.state.reduced
        })

    }

    openModal(image) {
        this.setState({
            modalImage: image,
            modalOpen: true,
        })
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }

    // TODO: Remove these mocks

    mockGallery() {
        const imageIterator = new ImageIterator();
        const images = [];
        for (let i = 0; i < 6; i++) {
            images.push(imageIterator.next());
        }
        return images;
    }

    mockLocations() {
        return {
            restaurant: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0241537442685!2d-123.12252997740909!3d49.2759395374062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d004183265%3A0xf298990d8e69a518!2sTasty+Indian+Bistro+%7C+Yaletown!5e0!3m2!1sen!2sca!4v1565473866268!5m2!1sen!2sca",
            church: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0237865252166!2d-123.12254070632109!3d49.27594649574327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671788b43c56f%3A0x8f552986c27f7d81!2sTrinity+Central+Church+Vancouver!5e0!3m2!1sen!2sca!4v1565474923936!5m2!1sen!2sca",
            hotel: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.023052087141!2d-123.12256216414514!3d49.275960412414676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717dca342c85%3A0xd634e23417b4f5a2!2sHotel+BLU+Vancouver!5e0!3m2!1sen!2sca!4v1565474955293!5m2!1sen!2sca"
        }
    }

    mockAmounts() {
        return [50, 100, 500];
    }
}

const APP_INSTANCE = React.createRef();
ReactDOM.render(<App ref={APP_INSTANCE} />, document.getElementById("root"));

// Exporting the instance
export default APP_INSTANCE.current;