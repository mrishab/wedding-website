import React from 'react';

import DescriptionImage from './description-image';
import StoryLine from './story-line';
import SectionTitle from './section-title';
import AmountButton from './amount-button';
import Locations from './locations';
import Gallery from './gallery';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SectionTitle title="Happy Couple" />
                <div>
                    <DescriptionImage />
                    <span className='cursive yellow'>&amp;</span>
                    <DescriptionImage />
                </div>

                <SectionTitle title="LoveStory" />
                <div>
                    <StoryLine stories={[]} pointTo="left" />
                    <span className="vertical-line"></span>
                    <StoryLine stories={[]} pointTo="right" />
                </div>

                <SectionTitle title="Photo Album" />
                <Gallery images={this.props.gallery} />

                <SectionTitle title="Our Wedding Location" />
                <Locations locations={this.props.locations} />

                <SectionTitle title="Make a donation" />
                <div>
                    <p>You can help us with the money to make our day even more enjoyable</p>
                    {this.createAmountButtons()}
                </div>

                <footer>
                    <p>&copy; 2019 Wedding | Developed by <a href="https://www.rishabmanocha.com">Rishab Manocha</a></p>
                </footer>

            </div>
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