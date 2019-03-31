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
  textAlign: "center"
};
var buttonStyle = {
  border: "none",
  cursor: "pointer",
  padding: "5px 10px",
  fontSize: "10px",
  display: "inline-block",
  color: "white"
};

var ListItem = function ListItem(props) {
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
      lineNumber: 59
    },
    __self: this
  }, !editing && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: buttonGroupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
      backgroundColor: "#8dab7f"
    }),
    onClick: function onClick() {
      return handleTick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, done ? "UNDO" : "DO"), !done && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
      backgroundColor: "#587b7f"
    }),
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "EDIT"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
      backgroundColor: "#9b291f"
    }),
    onClick: function onClick() {
      return handleDelete(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "DELETE")))), editing && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
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
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
      backgroundColor: "#587b7f"
    }),
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "UPDATE")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ })

})
//# sourceMappingURL=index.js.dd8240b29fef653b269c.hot-update.js.map