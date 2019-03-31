webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.css */ "./components/components.css");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Fisayo\\Desktop\\next-todo\\components\\ListItem.js";


var liContainer = {
  width: "150px",
  height: "150px",
  margin: "20px",
  backgroundColor: "#ffff00",
  padding: "20px",
  overflow: "hidden",
  // overflowY: "scroll",
  borderRadius: "5px",
  boxShadow: "10px 10px 15px rgba(215, 215, 215, 0.8)"
};
var liContainerDone = {
  width: "150px",
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
  textAlign: "center"
};
var tickButtonStyle = {
  padding: "20px"
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: done ? liContainerDone : liContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, !editing && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: buttonGroupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return handleTick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "tick"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "edit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return handleDelete(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "delete"))), editing && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: contentAreaStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    style: liInput,
    value: text,
    onChange: function onChange(e) {
      return handleChange(id, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return handleEditClick(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "DONE")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ })

})
//# sourceMappingURL=index.js.05f51222402c7f9e0813.hot-update.js.map