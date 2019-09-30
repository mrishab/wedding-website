import React from "react";
import GalleryTile from "./gallery-tile";

import './assets/css/common.css';
import './assets/css/gallery.css';

export default class Gallery extends React.PureComponent {

    constructor(props) {
        super(props);
        // Importing all the gallery images
        require.context("./assets/images/gallery", false, /\.(png|webp|jpe?g|svg)$/);
    }

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