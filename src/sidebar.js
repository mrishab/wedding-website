import React from 'react';

import DescriptionImage from './description-image';
import StoryLine from './story-line';
import SectionTitle from './section-title';
import AmountButton from './amount-button';
import Gallery from './gallery';
import WeddingLocations from './wedding-locations';

import './assets/css/main.css';
import './assets/css/sidebar.css';

import VictorImage from './assets/images/victor.jpg';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="sidebar grid scroll">
                <SectionTitle>Happy Couple</SectionTitle>
                <div id="happy-couple" className="grid">
                    <DescriptionImage img={VictorImage} name="victor" category="Groom" description="description" />
                    <span className='font-size-huge cursive text-yellow text-vh-center'>&amp;</span>
                    <DescriptionImage img={VictorImage} name="victor" category="Groom" description="description" />
                </div>

                <SectionTitle>Love Story</SectionTitle>
                <div className="grid col-3 h-center">
                    <StoryLine className="margin-bottom-75px" stories={[]} pointTo="left" />
                    <span className="vertical-line"></span>
                    <StoryLine className="margin-top-75px" stories={[]} pointTo="right" />
                </div>

                <SectionTitle>Photo Album</SectionTitle>
                <Gallery images={this.props.gallery} />

                <SectionTitle>Our Wedding Location</SectionTitle>
                <WeddingLocations locations={this.props.locations}/>


                <SectionTitle>Make a donation</SectionTitle>
                <div className="grid">
                    <p>You can help us with the money to make our day even more enjoyable</p>
                    {this.createAmountButtons()}
                </div>

                <footer className="grid">
                    <p>&copy; 2019 Wedding | Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </section>
        )
    }

    createAmountButtons() {
        const buttons = [];
        this.props.amounts.forEach(amount => {
            buttons.push(<AmountButton amount={amount} />);
        })
        return buttons;
    }

}