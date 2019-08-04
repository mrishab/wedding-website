import React from 'react';

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>

        </div>);
    }

    createImageTiles() {
        let images = [];
        this.props.images.forEach(src => {
            images.push(<img src={src} />)
        });
    }
}