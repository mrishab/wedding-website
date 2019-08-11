import React from 'react';
import App from './index';

export default class GalleryTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div>
                <img className="img-fluid pointer" src={this.props.image} onClick={() => App.openModal(this.props.image)} />
            </div>
            <div>
                <span className="heart-icon" onClick={() => App.closeModal()} />
            </div>
        </div>);
    }
}