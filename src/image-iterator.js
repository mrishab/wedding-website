export default class ImageIterator {
    constructor() {
        this.index = 0;
        this.images = this._importAllImages();
    }

    next() {
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        return this.images[this.index++];
    }


    _importAllImages() {
        const images = [];
        const files = require.context("./assets/images/bg", false, /\.(png|jpe?g|svg)$/);
        files.keys().forEach(key=> {
            let image = files(key);
            images.push(image.replace('./', ''))
        });
        return images;
    }
}