import React from "react";

import "./assets/css/main.css";
import "./assets/css/sidebar.css";
import "./assets/css/main-mobile.css";
import "./assets/css/tablet-main.css";

import {SocialIcon} from "react-social-icons";

export default class DescriptionImage extends React.Component {

    constructor(props) {
        super(props);
        const person = this.props.person;
        this.state = {
            name: person.name.first,
            description: person.description,
            img: person.image,
            facebook: person.socialMedia.facebook,
            twitter: person.socialMedia.twitter,
            linkedin: person.socialMedia.linkedin,
            instagram: person.socialMedia.instagram
        }
    }

    render() {
        return (
            <div className="description-image" style={this.style}>
                <div className="translucent-white-bg spread padding-10 grid">
                    <header>
                        <h2 className="text-center text-capital">{this.state.name}</h2>
                        <p className="subtitle text-center text-captial">{this.props.category}</p>
                    </header>
                    <p className="description text-center">{this.state.description}</p>

                    <div className="social-footer grid col-4">
                        <SocialIcon url={"https://www.facebook.com/" + this.state.facebook} />
                        <SocialIcon url={"https://www.instagram.com/" + this.state.instagram} />
                        <SocialIcon url={"https://www.twitter.com/" + this.state.twitter} />
                        <SocialIcon url={"https://www.linkedin.com/" + this.state.linkedin} />
                    </div>
                </div>
            </div>
        );
    }

    get style() {
        return {
            backgroundImage: `url(${this.state.img})`
        };
    }

}