import React from "react";

import SidebarNav from "./sidebar-nav";
import StoryLine from "./story-line";
import SectionTitle from "./section-title";
import Accomodations from './accomodations';
import Gallery from "./gallery";
import Events from "./events";
import ContactPersons from './contact-persons';
import { isMobile } from './util';

import * as $ from 'jquery';

import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/sidebar.css';

export default class Sidebar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            id: "sidebar",
        }
        this._ref = React.createRef();
    }

    get DOM() {
        return this._ref.current;
    }

    render() {
        return (<div className="position-relative sidebar-container">
            <SidebarNav
                scrollSidebar={top => this.scrollTop(top)}
                items={[{
                    id: "love-story",
                    title: "Love Story"
                }, {
                    id: "wedding-party",
                    title: "Wedding Party"
                }, {
                    id: "photo-album",
                    title: "Photo Album"
                }, {
                    id: "wedding-details",
                    title: "Wedding Details"
                }, {
                    id: "accomodation",
                    title: "Accomodation"
                }]}
            />

            <section id={this.state.id} className="sidebar position-absolute grid scroll" ref={this._ref}>
                <SectionTitle id="love-story">Love Story</SectionTitle>
                <StoryLine className="xs-no-vmargin" stories={this.props.stories} />

                <SectionTitle id="wedding-party">Wedding Party</SectionTitle>
                <ContactPersons people={this.props.people} />

                <SectionTitle id="photo-album">Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle id="wedding-details">Wedding Details</SectionTitle>
                <Events details={this.props.events} />

                <SectionTitle id="accomodation">Accomodations</SectionTitle>
                <Accomodations accomodations={this.props.accomodations}/>

                <footer className="grid text-white bg-gray">
                    <p className="text-center margin-top-75px">&copy; 2019 Wedding</p>
                    <p className="text-center">Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        </div>)
    }

    scrollTop(top) {
        let node = window;
        if (!isMobile()) {
            node = this.DOM
        }

        $(node).animate({
            scrollTop: top + 'px'
        }, 1000);
    }
}