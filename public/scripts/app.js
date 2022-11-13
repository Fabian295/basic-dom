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
var BLA = /*#__PURE__*/function (_React$Component) {
  _inherits(BLA, _React$Component);
  var _super = _createSuper(BLA);
  function BLA() {
    _classCallCheck(this, BLA);
    return _super.apply(this, arguments);
  }
  _createClass(BLA, [{
    key: "render",
    value: function render() {
      var title = 'The B.L. App';
      var sub = 'Get all Activities you want in a list';
      var options = ['optionOne', 'optionTwo', 'optionThree'];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: "title",
        subtitle: sub
      }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
        options: options
      }), /*#__PURE__*/React.createElement(AddOption, null));
    }
  }]);
  return BLA;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subtitle));
    }
  }]);
  return Header;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);
  var _super3 = _createSuper(Action);
  function Action() {
    _classCallCheck(this, Action);
    return _super3.apply(this, arguments);
  }
  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      alert('handle Pick item!');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handlePick
      }, "What should I do"));
    }
  }]);
  return Action;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);
  var _super4 = _createSuper(Options);
  function Options() {
    _classCallCheck(this, Options);
    return _super4.apply(this, arguments);
  }
  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      alert('Reemove qll');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleRemoveAll
      }, " Remove All "), this.props.options.map(function (option, index) {
        return /*#__PURE__*/React.createElement(Option, {
          key: index,
          optionText: option
        });
      }));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component5) {
  _inherits(Option, _React$Component5);
  var _super5 = _createSuper(Option);
  function Option() {
    _classCallCheck(this, Option);
    return _super5.apply(this, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", null, this.props.optionText));
    }
  }]);
  return Option;
}(React.Component);
var AddOption = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddOption, _React$Component6);
  var _super6 = _createSuper(AddOption);
  function AddOption() {
    _classCallCheck(this, AddOption);
    return _super6.apply(this, arguments);
  }
  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      console.log('on form submit');
    }
  }, {
    key: "addOption",
    value: function addOption() {
      alert('Add Option!');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        bame: "option",
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text"
      }), /*#__PURE__*/React.createElement("button", {
        onClick: this.addOption
      }, "Add Option")), /*#__PURE__*/React.createElement("p", null, "The AddOption Component"));
    }
  }]);
  return AddOption;
}(React.Component);
var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
root.render( /*#__PURE__*/React.createElement(BLA, null));
