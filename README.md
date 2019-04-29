# Community CAD/MDT Pro - Client
This is the UI Client for Community CAD/MDT Pro.

## Requirements
* Must have [Community CAD/MDT Pro - Server](https://github.com/community-cad-mdt-pro/community-cad-mdt-pro-server) installed and configured.
* `Node >= 8`

## Installation
* Install [Community CAD/MDT Pro - Server](https://github.com/community-cad-mdt-pro/community-cad-mdt-pro-server)
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
