# Jura elections simulator

Demonstrates the principle of the "Jura-Formel". This is a principle used in the elections in the canton of Berne, Switzerland.

This project is based on the webpack-es6-demo by Axel Rauschmeyer (https://github.com/rauschma)

Installation:

```
cd jura_webpack/
npm install
```

There are three ways in which you can build and run the web app:

* Build once:
    * `npm run build`
    * Open `build/index.html`
* Watch files continuously, rebuild incrementally, whenever one of them changes:
    * `npm run watch`
    * Open `build/index.html`, manually reload page in browser whenever there was a change
* Hot reloading via webpack dev server:
    * `npm start`
    * Go to `http://localhost:8080/`, page reloads automatically when there are changes
