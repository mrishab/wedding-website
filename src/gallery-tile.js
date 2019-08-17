import React from "react";
import App from "./index";

export default class GalleryTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="gallery-tile">
            <div className="overlay grid">
                <span className="heart-icon pointer" onClick={() => App.openModal(this.props.image)}>&#x2764;</span>
            </div>
            <div>
                <img className="img-fluid " src={this.props.image} />
            </div>
        </div>);
    }
}