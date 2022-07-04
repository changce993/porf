/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./animations/global.js":
/*!******************************!*\
  !*** ./animations/global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalAnimations = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(\".text-display span\", {\n            y: 80,\n            opacity: 0\n        }, {\n            y: 0,\n            opacity: 1,\n            duration: 1.5,\n            stagger: 0.1,\n            ease: \"Expo.easeInOut\"\n        });\n    }, []);\n    return;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalAnimations);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb25zL2dsb2JhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNOO0FBRTNCLE1BQU1FLGdCQUFnQixHQUFHLElBQU07SUFDN0JGLGdEQUFTLENBQUMsSUFBTTtRQUNkQyw2Q0FBVyxDQUFDLG9CQUFvQixFQUM5QjtZQUNFRyxDQUFDLEVBQUUsRUFBRTtZQUNMQyxPQUFPLEVBQUUsQ0FBQztTQUNYLEVBQ0Q7WUFDRUQsQ0FBQyxFQUFFLENBQUM7WUFDSkMsT0FBTyxFQUFFLENBQUM7WUFDVkMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsT0FBTyxFQUFFLEdBQUc7WUFDWkMsSUFBSSxFQUFFLGdCQUFnQjtTQUN2QixDQUNGLENBQUM7S0FDSCxFQUFFLEVBQUUsQ0FBQztJQUVOLE9BQU87Q0FDUjtBQUVELGlFQUFlTixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGl2ZS1uLy4vYW5pbWF0aW9ucy9nbG9iYWwuanM/NTMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5cbmNvbnN0IEdsb2JhbEFuaW1hdGlvbnMgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oXCIudGV4dC1kaXNwbGF5IHNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgeTogODAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgIGVhc2U6IFwiRXhwby5lYXNlSW5PdXRcIlxuICAgICAgfSxcbiAgICApO1xuICB9LCBbXSlcblxuICByZXR1cm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEFuaW1hdGlvbnNcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJnc2FwIiwiR2xvYmFsQW5pbWF0aW9ucyIsImZyb21UbyIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./animations/global.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"gsap/dist/ScrollTrigger\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var animations_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animations/global */ \"./animations/global.js\");\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(animations_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNBO0FBQ3dCO0FBQ0o7QUFFaERBLHFEQUFtQixDQUFDQyxnRUFBYSxDQUFDO0FBRWxDLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFOzswQkFDRSw4REFBQ0oseURBQWdCOzs7O29CQUFHOzBCQUNwQiw4REFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7b0JBQzNCLENBQ0o7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmUtbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzdHlsZXMvZ2xvYmFscy5zY3NzXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgR2xvYmFsQW5pbWF0aW9ucyBmcm9tIFwiYW5pbWF0aW9ucy9nbG9iYWxcIlxuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsQW5pbWF0aW9ucyAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJHbG9iYWxBbmltYXRpb25zIiwicmVnaXN0ZXJQbHVnaW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();