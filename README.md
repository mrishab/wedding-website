# Wedding Website

[View Live](http://dreamy-pike-2f7eb3.netlify.com)

# Prerequisites

- ReactJS
- CSS Grids
- Webpack
- jQuery
- Node / NPM

# Getting Started

1) Clone the project
    ```
    git clone git@github.com:mrishab/wedding-website.git
    ```

2) Install the dependencies
    ```
    cd <path_to_project_root>
    npm install
    ```

3) Start the webpack-dev server
    ```
    npm run start:dev
    ```

# Production

To make a production build (minified, uglified and optimized), run
```
npm run build
```

To start a local server to test production build, run
```
npm start
```

# Development

## Content
The content is isolated from code by storing all the content in [src/info.json](src/info.json) file. This file is loaded in the index.js file and the content is delegated from there to individual components.

## Structure

- (Almost) Each JS file has a corresponding CSS file that contains styles/classes only for it's component.

- Each JS file contains atmost 1 class declaration.

- The project is structured as follows.
    ```
    root
        <all high level configs, README, etc.>
        src/
            *.js
            assets/
                css/
                    *.css
                images/
        
        public/
            <static resources that need to be distributed with bundle, like index.html>

    ```

_Note: The `npm start` must be followed by `npm run build`._

# Goals
The application is meant to be used as a static website and therefore, it is optimized for SEO, performance and bandwith. While making modifications to the project, ensure that the following principles are adhered to:

- `div` tag should be last resort. Aim for the most appropriate HTML semantic markup tag.
- An external library must be included only if it is used extensively and the original functionality is hard to code.
- No blocking or long-running synchronous operation is allowed.
- The number of network calls made to fetch resources should be minimal. Therefore, aim for code bundling into a single JS / CSS file.
- The CSS styles should be shared and semantically grouped into a class. This also allows for responsiveness.