import React from "react";
import App from "./index";

import './assets/css/common.css';
import './assets/css/gallery-tile.css';
import './assets/css/icons.css';

export default class GalleryTile extends React.Component {
    render() {
        return (<div className="gallery-tile position-relative overflow-hidden">
            <div className="overlay grid overflow-hidden position-absolute absolute-center transition transition-transform transition-fast">
                <span className="heart-icon pointer" onClick={() => App.openModal(this.props.image)}>&#x2764;</span>
            </div>
            <div>
                <img className="img-fluid " src={this.props.image} alt="Single tile in the gallery" />
            </div>
        </div>);
    }
}