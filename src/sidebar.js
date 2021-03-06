import React from "react";

import SidebarNav from "./sidebar-nav";
import StoryLine from "./story-line";
import SectionTitle from "./section-title";
import Gallery from "./gallery";
import Events from "./events";
import Registry from './registry';
import {animateScroll} from "./scroll";

import "./assets/css/common.css";
import "./assets/css/text.css";
import "./assets/css/sidebar.css";

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
                    id: "photo-album",
                    title: "Photo Album"
                }, {
                    id: "wedding-details",
                    title: "Wedding Details"
                }, {
                    id: "gifts",
                    title: "Registry"
                }]}
            />

            <section id={this.state.id} className="sidebar position-absolute grid scroll" ref={this._ref}>
                <SectionTitle id="love-story">Love Story</SectionTitle>
                <StoryLine className="xs-no-vmargin" stories={this.props.stories} />

                <SectionTitle id="photo-album">Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle id="wedding-details">Wedding Details</SectionTitle>
                <Events details={this.props.events} />

                <SectionTitle id="gifts">Registry</SectionTitle>
                <Registry details={this.props.registry} />

                <footer className="grid text-white bg-gray">
                    <p className="text-center margin-top-75px">{this.props.tagline}</p>
                    <p className="text-center">Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        </div>)
    }

    scrollTop(top) {
        animateScroll(this.DOM, top, 1000);
    }
}