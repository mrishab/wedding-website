import React from 'react';

import './assets/css/main.css';
import './assets/css/sidebar.css';
import './assets/css/main-mobile.css';

import {SocialIcon} from 'react-social-icons';

export default class DescriptionImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="description-image" style={this.style}>
                <div className="translucent-white-bg spread padding-10 grid">
                    <header>
                        <h2 className="text-center text-capital">{this.props.name}</h2>
                        <p className="subtitle text-center text-captial">{this.props.category}</p>
                    </header>
                    <p className="description text-center">{this.props.description}</p>

                    <div className="social-footer grid col-4">
                        <SocialIcon url={"https://www.facebook.com/" + this.props.facebook} />
                        <SocialIcon url={"https://www.instagram.com/" + this.props.instagram} />
                        <SocialIcon url={"https://www.twitter.com/" + this.props.twitter} />
                        <SocialIcon url={"https://www.linkedin.com/" + this.props.linkedin} />
                    </div>
                </div>
            </div>
        );
    }

    get style() {
        return {
            backgroundImage: `url(${this.props.img})`
        };
    }

}