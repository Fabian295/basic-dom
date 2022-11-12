"use strict";

console.log('app-js running!');
var app = {
  title: 'BLA',
  subTitle: 'Let program decide your activities',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted!!');
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    console.log(app.options.length);
    e.target.elements.option.value = '';
    render();
  }
};
var handleRemove = function handleRemove(e) {
  // app.options.splice(0, app.options.length)
  // console.log(e.target)
  app.options = [];
  console.log(app.options);
  console.log(app.options.length);
  render();
};
var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "The BLA"), app.subTitle && /*#__PURE__*/React.createElement("p", null, app.subTitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options : ' : 'There are no options!'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option",
    id: ""
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")), /*#__PURE__*/React.createElement("button", {
    onClick: handleRemove
  }, "Remove Option"));
  root.render(template);
};
render();
