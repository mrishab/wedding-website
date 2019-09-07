import React from "react";

import DescriptionImage from "./description-image";
import StoryLine from "./story-line";
import SectionTitle from "./section-title";
import DonationSection from "./donation-section";
import Gallery from "./gallery";
import WeddingLocations from "./wedding-locations";

import './assets/css/common.css';
import './assets/css/text.css';
import './assets/css/sidebar.css';

export default class Sidebar extends React.PureComponent {
    render() {
        return (<div className="position-relative sidebar-container">
            <section className="sidebar position-absolute grid scroll">
                <SectionTitle>Love Story</SectionTitle>
                <StoryLine className="xs-no-vmargin" stories={this.props.stories} />

                <SectionTitle>Wedding Party</SectionTitle>
                <ContactPersons people={this.props.people} />

                <SectionTitle>Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle>Wedding Locations</SectionTitle>
                <WeddingLocations locations={this.props.locations} />


                <SectionTitle>Make a donation</SectionTitle>
                <DonationSection amounts={this.props.amounts} />

                <footer className="grid text-white bg-gray">
                    <p className="text-center margin-top-75px">&copy; 2019 Wedding</p>
                    <p className="text-center">Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        </div>)
    }
}