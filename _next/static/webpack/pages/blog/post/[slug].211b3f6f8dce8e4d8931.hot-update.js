webpackHotUpdate_N_E("pages/blog/post/[slug]",{

/***/ "./components/Misc/Button.tsx":
/*!************************************!*\
  !*** ./components/Misc/Button.tsx ***!
  \************************************/
/*! exports provided: FilledButton, HollowButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilledButton", function() { return FilledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HollowButton", function() { return HollowButton; });
/* harmony import */ var D_Work_MyWebsite_karim_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\Work\\MyWebsite\\karim-blog\\components\\Misc\\Button.tsx",
    _this = undefined;

function _templateObject4() {
  var data = Object(D_Work_MyWebsite_karim_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tposition: relative;\n\tz-index: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Work_MyWebsite_karim_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tborder: 2px solid #fff;\n\toverflow: hidden;\n\tfont-size: 0.8rem;\n\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground: #fff;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\ttransform: translateY(100%);\n\t\ttransition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n\t}\n\n\t&:hover {\n\t\tcolor: #4a8da5;\n\t\t&:after {\n\t\t\ttransform: translateY(0%);\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Work_MyWebsite_karim_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbackground-color: #4a8da5;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_MyWebsite_karim_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin: 0.5rem 0;\n\tpadding: 1rem 2rem;\n\tborder: none;\n\tcolor: white;\n\tborder-radius: 4px;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tcursor: pointer;\n\ttext-align: center;\n\ttransition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// components/Blog/Misc/Button.tsx


// == Externals =====================
var BaseButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject());
var FilledButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseButton)(_templateObject2());
var HollowButtonStyled = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseButton)(_templateObject3());
_c = HollowButtonStyled;
var HollowButtonInside = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject4());
_c2 = HollowButtonInside;
;

var HollowButton = function HollowButton(_ref) {
  var href = _ref.href,
      children = _ref.children,
      rel = _ref.rel,
      className = _ref.className;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HollowButtonStyled, {
      className: className,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HollowButtonInside, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 2
  }, _this);
};

_c3 = HollowButton;


var _c, _c2, _c3;

$RefreshReg$(_c, "HollowButtonStyled");
$RefreshReg$(_c2, "HollowButtonInside");
$RefreshReg$(_c3, "HollowButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0J1dHRvbi50c3giXSwibmFtZXMiOlsiQmFzZUJ1dHRvbiIsInN0eWxlZCIsInNwYW4iLCJGaWxsZWRCdXR0b24iLCJIb2xsb3dCdXR0b25TdHlsZWQiLCJIb2xsb3dCdXR0b25JbnNpZGUiLCJIb2xsb3dCdXR0b24iLCJocmVmIiwiY2hpbGRyZW4iLCJyZWwiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHVEQUFNLENBQUNDLElBQVYsbUJBQWhCO0FBZUEsSUFBTUMsWUFBWSxHQUFHRiwrREFBTSxDQUFDRCxVQUFELENBQVQsb0JBQWxCO0FBSUEsSUFBTUksa0JBQWtCLEdBQUdILCtEQUFNLENBQUNELFVBQUQsQ0FBVCxvQkFBeEI7S0FBTUksa0I7QUF5Qk4sSUFBTUMsa0JBQWtCLEdBQUdKLHVEQUFNLENBQUNDLElBQVYsb0JBQXhCO01BQU1HLGtCO0FBV0w7O0FBRUQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxNQUFtQkMsR0FBbkIsUUFBbUJBLEdBQW5CO0FBQUEsTUFBd0JDLFNBQXhCLFFBQXdCQSxTQUF4QjtBQUFBLHNCQUNwQixxRUFBQyxnREFBRDtBQUNDLFFBQUksRUFBRUgsSUFEUDtBQUFBLDJCQUdDLHFFQUFDLGtCQUFEO0FBQ0MsZUFBUyxFQUFFRyxTQURaO0FBQUEsNkJBR0MscUVBQUMsa0JBQUQ7QUFBQSxrQkFDRUY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUFyQjs7TUFBTUYsWTtBQWNOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvcG9zdC9bc2x1Z10uMjExYjNmNmY4ZGNlOGU0ZDg5MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQmxvZy9NaXNjL0J1dHRvbi50c3hcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBFbGVtZW50VHlwZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSBcInVybFwiO1xuLy8gPT0gRXh0ZXJuYWxzID09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBCYXNlQnV0dG9uID0gc3R5bGVkLnNwYW5gXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW46IDAuNXJlbSAwO1xuXHRwYWRkaW5nOiAxcmVtIDJyZW07XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuYDtcblxuY29uc3QgRmlsbGVkQnV0dG9uID0gc3R5bGVkKEJhc2VCdXR0b24pYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGE4ZGE1O1xuYDtcblxuY29uc3QgSG9sbG93QnV0dG9uU3R5bGVkID0gc3R5bGVkKEJhc2VCdXR0b24pYFxuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRmb250LXNpemU6IDAuOHJlbTtcblxuXHQmOmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcblx0fVxuXG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjNGE4ZGE1O1xuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcblx0XHR9XG5cdH1cbmA7XG5cbmNvbnN0IEhvbGxvd0J1dHRvbkluc2lkZSA9IHN0eWxlZC5zcGFuYFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5gO1xuXG5pbnRlcmZhY2UgSG9sbG93UHJvcHMge1xuXHR0YXJnZXQ/OiBzdHJpbmcsXG5cdHJlbD86IHN0cmluZyxcblx0Y2xhc3NOYW1lPzogc3RyaW5nLFxuXHRocmVmOiBzdHJpbmcgfCBVUkwsXG5cdGNoaWxkcmVuOiBFbGVtZW50VHlwZSB8IEVsZW1lbnRUeXBlW10gfCBzdHJpbmcgfCBudWxsXG59O1xuXG5jb25zdCBIb2xsb3dCdXR0b24gPSAoeyBocmVmLCBjaGlsZHJlbiwgcmVsLCBjbGFzc05hbWUgfSA6IEhvbGxvd1Byb3BzKSA9PiAoXG5cdDxMaW5rXG5cdFx0aHJlZj17aHJlZn1cblx0PlxuXHRcdDxIb2xsb3dCdXR0b25TdHlsZWRcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdD5cblx0XHRcdDxIb2xsb3dCdXR0b25JbnNpZGU+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvSG9sbG93QnV0dG9uSW5zaWRlPlxuXHRcdDwvSG9sbG93QnV0dG9uU3R5bGVkPlxuXHQ8L0xpbms+XG4pO1xuXG5leHBvcnQge1xuXHRGaWxsZWRCdXR0b24sXG5cdEhvbGxvd0J1dHRvblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=