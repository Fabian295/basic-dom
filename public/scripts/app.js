"use strict";

console.log('app-js for react!');
var template = /*#__PURE__*/React.createElement("p", null, "This is JSX compiled to public folder app.js with config file from Babel");
// const template = React.createElement('p', null, 'This is JSX from app.js via CDN')

var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
root.render(template);
