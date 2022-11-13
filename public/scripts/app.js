"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// console.log('app-js running!')
// const app = {
//   title: 'BLA',
//   subTitle: 'Let program decide your activities',
//   options: []
// }
// const onFormSubmit = (e) => {
//   e.preventDefault()
//   console.log('Form Submitted!!')
//   const option = e.target.elements.option.value;
//   if(option) {
//     app.options.push(option)
//     console.log(app.options.length)
//     e.target.elements.option.value = '';
//     render();
//   }
// }
// const handleRemove = (e) => {
//   // app.options.splice(0, app.options.length)
//   // console.log(e.target)
//   app.options = []
//   console.log(app.options)
//   console.log(app.options.length)
//   render()
// }
// const DOMContainer = document.getElementById('app')
// const root = ReactDOM.createRoot(DOMContainer)
// const render = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNum]
//   console.log('randomNum:', randomNum)
//   const getRandomOption = (e) => {
//     console.log('app.options[option:', app.options[option])
//     console.log('option:', option)
//     render()
//     alert((option))
//   }
//   const template = (
//     <div>
//       <h1>The BLA</h1>
//       { app.subTitle && <p>{ app.subTitle }</p> }
//       <p>{ app.options.length > 0 ? 'Here are your options : ' : 'There are no options!' }</p>
//       <p>{ app.options.length }</p>
//       <form action="" onSubmit={onFormSubmit}>
//         <input type="text" name="option" id="" />
//         <button >Add Option</button>
//         <ol>
//           { app.options.map((option, index) => {
//             return (
//               <li key={index}>{ option }</li>
//             )
//           }) }
//         </ol>
//       </form>
//         <p>
//         <button  
//         onClick={handleRemove}
//         disabled={ app.options.length === 0 }
//         >Remove Option</button>
//           <button
//           onClick={ getRandomOption }
//           >
//           Get Random Option
//           </button>
//         </p>
//     </div>
//   );
//   root.render( template )
// };
// render();
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Titlee"), /*#__PURE__*/React.createElement("h2", null, "Subtitle"));
    }
  }]);
  return Header;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);
  var _super2 = _createSuper(Action);
  function Action() {
    _classCallCheck(this, Action);
    return _super2.apply(this, arguments);
  }
  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "What should I do"));
    }
  }]);
  return Action;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component3) {
  _inherits(Options, _React$Component3);
  var _super3 = _createSuper(Options);
  function Options() {
    _classCallCheck(this, Options);
    return _super3.apply(this, arguments);
  }
  _createClass(Options, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "The Options Array Component"));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component4) {
  _inherits(Option, _React$Component4);
  var _super4 = _createSuper(Option);
  function Option() {
    _classCallCheck(this, Option);
    return _super4.apply(this, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "The Option Component"));
    }
  }]);
  return Option;
}(React.Component);
