import React from "react";
import GalleryTile from "./gallery-tile";

import './assets/css/common.css';
import './assets/css/gallery.css';

export default class Gallery extends React.PureComponent {
    render() {
        return (<div className="gallery grid col-3 col-sm-2">
            {this.createImageTiles()}
        </div>);
    }

    createImageTiles() {
        let images = [];
        this.props.images.forEach((image, index) => {
            images.push(<GalleryTile key={index} image={image} />)
        });
        return images;
    }
}