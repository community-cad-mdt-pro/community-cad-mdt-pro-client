# OpenCAD-React
Reactified Version of OpenCAD

## Requirements
* Must have https://github.com/rswyatt/opencad-react-server.git installed and configured.
* `Node >= 8`

## Installation
* Install [OpenCAD React Server](https://github.com/rswyatt/opencad-react-server.git)
* Set up your server host in `/config/configuration.js`

## Customization
### Images
Custom images will be placed, and named accordingly, in the `/assets/overrides` folder. Replicate the names of the divisions as found in the `/assets/img/divisions` folder.
You may replace `/assets/overrides/img/logo.png` with your own community logo.
You also replace any of the image names in `/config/configuration` to your own custom images.

## To run locally
* Install `OpenCad React Server` as instructed above.
* Start the server per the documentation of the server.

In this project: 

    $ npm ci
    $ npm run dev

## To run production
* Install `OpenCad React Server` as instructed above.
* Start the server per the documentation of the server.

In this project: 

    $ npm ci
    $ npm run start
