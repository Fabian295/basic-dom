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
    // console.log(app.options.length)

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
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log('randomNum:', randomNum);
  var getRandomOption = function getRandomOption(e) {
    console.log('app.options[option:', app.options[option]);
    console.log('option:', option);
    render();
    alert(option);
  };
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "The BLA"), app.subTitle && /*#__PURE__*/React.createElement("p", null, app.subTitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options : ' : 'There are no options!'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, app.options[0]), /*#__PURE__*/React.createElement("li", null, app.options[1])), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option",
    id: ""
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")), /*#__PURE__*/React.createElement("button", {
    onClick: getRandomOption
  }, "Get Random Option"), /*#__PURE__*/React.createElement("button", {
    onClick: handleRemove
  }, "Remove Option"));
  root.render(template);
};
render();
