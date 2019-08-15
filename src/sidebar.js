import React from 'react';

import DescriptionImage from './description-image';
import StoryLine from './story-line';
import SectionTitle from './section-title';
import DonationSection from './donation-section';
import Gallery from './gallery';
import WeddingLocations from './wedding-locations';

import './assets/css/main.css';
import './assets/css/sidebar.css';

import VictorImage from './assets/images/victor.jpg';
import './assets/css/main-mobile.css';
import './assets/css/tablet-main.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    description() {
        return "He is a very good friend, he always supports me when I need his help. I always call him when I need someone to hear me out and someone to share the news with, weather they are good or bad – I know I can always rely on him is me.";
    }

    render() {
        return (
            <section className="sidebar grid scroll">
                <SectionTitle>Happy Couple</SectionTitle>
                <div id="happy-couple" className="grid col-3">
                    <DescriptionImage img={VictorImage} name="victor" category="Groom" description={this.description()} />
                    <span className='font-size-huge cursive text-yellow text-vh-center'>&amp;</span>
                    <DescriptionImage img={VictorImage} name="girlfriend" category="Bride" description={this.description()} />
                </div>

                <SectionTitle>Love Story</SectionTitle>
                <div className="grid col-3 h-center">
                    <StoryLine className="margin-bottom-75px xs-no-vmargin" stories={[]} pointTo="left" />
                    <span className="vertical-line"></span>
                    <StoryLine className="margin-top-75px xs-no-vmargin xs-no-margin-bottom" stories={[]} pointTo="right" />
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
}