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
        return (
            <section className="sidebar grid scroll">
                <SectionTitle>Happy Couple</SectionTitle>
                <div id="happy-couple" className="grid col-3">
                    <DescriptionImage person={this.props.groom} category="Groom" />
                    <span className="font-size-huge cursive text-yellow text-vh-center">&amp;</span>
                    <DescriptionImage person={this.props.bride} category="Bride" />
                </div>

                <SectionTitle>Love Story</SectionTitle>
                <StoryLine className="xs-no-vmargin" stories={this.props.stories} />

                <SectionTitle>Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle>Wedding Locations</SectionTitle>
                <WeddingLocations locations={this.props.locations}/>


                <SectionTitle>Make a donation</SectionTitle>
                <DonationSection amounts={this.props.amounts} />

                <footer className="grid bg-gray">
                    <p className="text-center margin-top-75px">&copy; 2019 Wedding</p>
                    <p className="text-center">Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        )
    }
}