webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.css */ "./components/components.css");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Fisayo\\Desktop\\next-todo\\components\\ListItem.js";


var liContainer = {
  width: "160px",
  height: "150px",
  margin: "20px",
  backgroundColor: "#ffff88",
  padding: "20px",
  overflow: "hidden",
  // overflowY: "scroll",
  borderRadius: "5px",
  boxShadow: "10px 10px 15px rgba(215, 215, 215, 0.8)"
};
var liContainerDone = {
  width: "160px",
  height: "150px",
  margin: "20px",
  backgroundColor: "#cccccc",
  padding: "20px",
  overflow: "hidden",
  // overflowY: "scroll",
  borderRadius: "5px",
  boxShadow: "10px 10px 15px rgba(215, 215, 215, 0.8)",
  textDecoration: "line-through",
  color: "rgb(0,0,0,0.4)"
};
var liInput = {
  width: "100%"
};
var contentAreaStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%"
};
var textStyle = {
  wordWrap: "break-word"
};
var buttonGroupStyle = {
  // alignSelf: "flex-end"
  textAlign: "center" // width: "100%"
  // display: "flex"

};
var tickButtonStyle = {
  border: "none",
  cursor: "pointer",
  padding: "5px 10px",
  fontSize: "10px",
  display: "inline-block",
  color: "white"
};

var ListItem = function ListItem(props) {
  // const handleClick = () => {
  //     this.setState((prevState) => ({ 
  //         editing: !prevState.editing
  //     }))
  // }
  var _props$listItem = props.listItem,
      id = _props$listItem.id,
      text = _props$listItem.text,
      done = _props$listItem.done,
      editing = _props$listItem.editing,
      handleEditClick = props.handleEditClick,
      handleDelete = props.handleDelete,
      handleTick = props.handleTick,
      handleChange = props.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: done ? liContainerDone : liContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, !editing && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: buttonGroupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tickButtonStyle, {
      backgroundColor: "#8dab7f"
    }),
    onClick: function onClick() {
      return handleTick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, done ? "UNDO" : "DO"), !done && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tickButtonStyle, {
      backgroundColor: "#587b7f"
    }),
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "EDIT"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tickButtonStyle, {
      backgroundColor: "#9b291f"
    }),
    onClick: function onClick() {
      return handleDelete(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "DELETE")))), editing && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    style: liInput,
    value: text,
    onChange: function onChange(e) {
      return handleChange(id, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tickButtonStyle, {
      backgroundColor: "#8dab7f"
    }),
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "UPDATE")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ })

})
//# sourceMappingURL=index.js.f93a6562be1c4e1857c1.hot-update.js.map