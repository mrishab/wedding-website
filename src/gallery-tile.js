import React from "react";
import App from "./index";

export default class GalleryTile extends React.Component {
    render() {
        return (<div className="gallery-tile">
            <div className="overlay grid">
                <span className="heart-icon pointer" onClick={() => App.openModal(this.props.image)}>&#x2764;</span>
            </div>
            <div>
                <img className="img-fluid " src={this.props.image} alt="Single tile in the gallery" />
            </div>
        </div>);
    }
}