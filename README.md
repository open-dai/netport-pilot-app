![Open-DAI](http://www.netport.se/wp-content/uploads/2012/02/open-dai.jpg)

## Description

This is mobile web app, created as a pilot application for the [Open-DAI](http://www.open-dai.eu/) platform. Open-DAI is an EU-funded project for opening public data through a common infrastructure.

The application allows the creation of reports on a map, within [Karlshamn municipality](http://www.karlshamn.se/) in Sweden. Feel free to fork and modify the application to create something similar with another scope.

### Installation

To build and run this application you need [node.js](http://nodejs.org/) and [bower](http://bower.io/). It also requires connection to a running version of the [NetPort pilot API](https://github.com/open-dai/netport-pilot-api).

To install simply run:
```
npm install
bower install
```

Build and launch the application in your default browser by running:
```
grunt serve
```

### Deployment

To build the application for production run:

```
grunt build
```

This will create a version of the application in `dist/` which can then be deployed to a server.
