import React from "react";

import DescriptionImage from "./description-image";
import StoryLine from "./story-line";
import SectionTitle from "./section-title";
import DonationSection from "./donation-section";
import Gallery from "./gallery";
import WeddingLocations from "./wedding-locations";

import "./assets/css/main.css";
import "./assets/css/sidebar.css";

import "./assets/css/main-mobile.css";
import "./assets/css/tablet-main.css";

export default class Sidebar extends React.Component {
    render() {
        const {leftStories, rightStories} = this.stories;
        return (
            <section className="sidebar grid scroll">
                <SectionTitle>Happy Couple</SectionTitle>
                <div id="happy-couple" className="grid col-3">
                    <DescriptionImage person={this.props.groom} category="Groom" />
                    <span className="font-size-huge cursive text-yellow text-vh-center">&amp;</span>
                    <DescriptionImage person={this.props.bride} category="Bride" />
                </div>

                <SectionTitle>Love Story</SectionTitle>
                <div className="grid col-3 h-center">
                    <StoryLine className="margin-bottom-75px xs-no-vmargin" stories={leftStories} pointTo="left" />
                    <span className="vertical-line"></span>
                    <StoryLine className="margin-top-75px xs-no-vmargin xs-no-margin-bottom" stories={rightStories} pointTo="right" />
                </div>

                <SectionTitle>Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle>Wedding Locations</SectionTitle>
                <WeddingLocations locations={this.props.locations}/>


                <SectionTitle className="margin-v25px">Make a donation</SectionTitle>
                <DonationSection amounts={this.props.amounts} />

                <footer className="grid bg-gray">
                    <p className="text-center margin-top-75px">&copy; 2019 Wedding</p>
                    <p className="text-center">Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        )
    }

    get stories() {
        const stories = this.props.stories;
        const mid = stories.length/2 + 1;
        const leftStories = stories.slice(0, mid);
        const rightStories = stories.slice(mid + stories.length);
        return {leftStories, rightStories};
    }
}