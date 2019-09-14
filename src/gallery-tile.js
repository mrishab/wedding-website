import React from "react";
import GlobalContext from './global-context';

import './assets/css/common.css';
import './assets/css/gallery-tile.css';
import './assets/css/icons.css';

export default class GalleryTile extends React.PureComponent {
    render() {
        return (<GlobalContext.Consumer>
            {props =>
            <div className="gallery-tile position-relative overflow-hidden">
                <div className="overlay grid overflow-hidden position-absolute absolute-center transition transition-transform transition-fast">
                    <span className="heart-icon pointer position-absolute absolute-center" onClick={() => props.modalRef.current.open(this.props.image)}>&#x2764;</span>
                </div>
                <div>
                    <img className="img-fluid " src={this.props.image} alt="Single tile in the gallery" />
                </div>
            </div>}
        </GlobalContext.Consumer>);
    }
}