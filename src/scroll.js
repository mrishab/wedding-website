import { isMobile } from './util';

const animateScroll =  (function animate() {
    let operation;

    return function (el, end, millis) {
        if (operation) {
            clearInterval(operation);
        }
        
        let node;
        let start;
        if (!isMobile()) {
            node = el;
            start = node.scrollTop;
        } else {
            node = window;
            start = node.pageYOffset;
            end += node.innerHeight;
        }
        const frameRate = 15;
        let currentEnd = start;
        const scrollRate = ((end - start) * frameRate) / millis;
        operation = setInterval(() => {
            currentEnd += scrollRate;
            node.scrollTo(0, currentEnd);
    
            // Condition 1: When scrolling downwards, Condition 2: when scrolling upwards
            if ((start < end && currentEnd >= end) || (start > end && currentEnd <= end)){
                clearInterval(operation);
            }
        }, frameRate);
    }
})();

export {animateScroll};