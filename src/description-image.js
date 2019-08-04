import React from 'react';

export default class DescriptionImage  extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.imageSrc} alt={this.props.name}/>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.category}</p>
                    <p>{this.props.description}</p>
                    
                    <div className="social-footer">
                        <a href={"https://www.facebook.com/" + this.props.facebook} className="facebook" />
                        <a href={"https://www.instagram.com/" + this.props.instagram} className="instagram" />
                        <a href={"https://www.twitter.com/" + this.props.twitter} className="twitter" />
                        <a href={"https://www.linkedin.com/" + this.props.linkedin} className="linkedin" />
                    </div>
                </div>
            </div>
        );
    }

}