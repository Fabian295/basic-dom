"use strict";

// headline
// button -text toggle hide /show
// paragraph togles from show to hide text

console.log('fun');
var par = {
  title: 'Paragraph to Toggle',
  content: "Just some demo content to show in the paragraph.\n  Instead of lorem ipsum, I wrote these few lines.<br/>\n  Let us get going with the assignment and make it Toggle!\n  ",
  isShown: false
};
var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
var parTextToggle = function parTextToggle() {
  par.isShown = !par.isShown;
  render();
};
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, par.title), /*#__PURE__*/React.createElement("button", {
    onClick: parTextToggle
  }, par.isShown ? 'Hide' : "Show"), /*#__PURE__*/React.createElement("p", null, par.isShown && par.content));
  root.render(template);
};
render();
