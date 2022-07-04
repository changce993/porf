"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/organisms/Awards/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/Awards/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/organisms/Awards/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var assets_images_award1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/award1.png */ \"./assets/images/award1.png\");\n/* harmony import */ var assets_images_award2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/award2.png */ \"./assets/images/award2.png\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var placeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var hadOneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var setParallaxItem = (0,hooks__WEBPACK_IMPORTED_MODULE_4__.useParallaxPointer)().setParallaxItem;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(titleRef.current, {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: titleRef.current,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(\".award-image p\", {\n            y: 0,\n            scale: .9\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image\",\n                scrub: 1\n            },\n            y: -50,\n            scale: 1.1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(\".award-image-1\", {\n            y: 0,\n            scale: .9\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image-1\",\n                scrub: 1\n            },\n            y: 50,\n            scale: 1.1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(\".award-image-2\", {\n            y: 0,\n            scale: .9\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image-2\",\n                scrub: 1\n            },\n            y: -50,\n            scale: 1.1\n        });\n        setParallaxItem([\n            placeRef.current,\n            hadOneRef.current\n        ]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().awards),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xs text-semibold text-italic\",\n                ref: titleRef,\n                children: \"Awards\"\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().awards__images),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().awards__images__item), \" award-image award-image-1\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                ref: placeRef,\n                                speed: 1,\n                                className: \"text-md text-italic text-bold text-right\",\n                                children: \"THIS IS WHERE I WOULD PUT MY AWARDS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_images_award1_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().awards__images__item), \" award-image award-image-2\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                ref: hadOneRef,\n                                speed: 1,\n                                className: \"text-md text-italic text-bold\",\n                                children: \"IF I HAD ONE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_images_award2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"LpeHWUDtXaJtIeLQhD3++hiVNfk=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_4__.useParallaxPointer\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Bd2FyZHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDQTtBQUNkO0FBQ2tCO0FBQ0E7QUFDSDs7QUFFMUMsSUFBTU8sS0FBSyxHQUFHLFdBQU07O0lBRWxCLElBQU1DLFFBQVEsR0FBR1AsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBTVEsUUFBUSxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFNUyxTQUFTLEdBQUdULDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzlCLElBQU0sZUFBaUIsR0FBS0sseURBQWtCLEVBQUUsQ0FBeENLLGVBQWU7SUFFdkJYLGdEQUFTLENBQUMsV0FBTTtRQUNkRyw2Q0FBVyxDQUFDSyxRQUFRLENBQUNLLE9BQU8sRUFDMUI7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7WUFBRUMsT0FBTyxFQUFFLENBQUM7U0FBRSxFQUNyQjtZQUFFQyxhQUFhLEVBQUVSLFFBQVEsQ0FBQ0ssT0FBTztZQUFFSSxLQUFLLEVBQUUsR0FBRztZQUFFSCxDQUFDLEVBQUUsQ0FBQztZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQ2xFO1FBRURaLDZDQUFXLENBQUMsZ0JBQWdCLEVBQzVCO1lBQUVXLENBQUMsRUFBRSxDQUFDO1lBQUVJLEtBQUssRUFBRSxFQUFFO1NBQUUsRUFDbkI7WUFBRUYsYUFBYSxFQUFFO2dCQUFFRyxPQUFPLEVBQUUsY0FBYztnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFTixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUVJLEtBQUssRUFBRSxHQUFHO1NBQUUsQ0FDN0U7UUFFQ2YsNkNBQVcsQ0FBQyxnQkFBZ0IsRUFDMUI7WUFBRVcsQ0FBQyxFQUFFLENBQUM7WUFBRUksS0FBSyxFQUFFLEVBQUU7U0FBRSxFQUNuQjtZQUFFRixhQUFhLEVBQUU7Z0JBQUVHLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQUVDLEtBQUssRUFBRSxDQUFDO2FBQUU7WUFBRU4sQ0FBQyxFQUFFLEVBQUU7WUFBRUksS0FBSyxFQUFFLEdBQUc7U0FBRSxDQUM5RTtRQUVEZiw2Q0FBVyxDQUFDLGdCQUFnQixFQUMxQjtZQUFFVyxDQUFDLEVBQUUsQ0FBQztZQUFFSSxLQUFLLEVBQUUsRUFBRTtTQUFFLEVBQ25CO1lBQUVGLGFBQWEsRUFBRTtnQkFBRUcsT0FBTyxFQUFFLGdCQUFnQjtnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFTixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUVJLEtBQUssRUFBRSxHQUFHO1NBQUUsQ0FDL0U7UUFFRFAsZUFBZSxDQUFDO1lBQUNGLFFBQVEsQ0FBQ0ksT0FBTztZQUFFSCxTQUFTLENBQUNHLE9BQU87U0FBQyxDQUFDO0tBQ3ZELEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNRLFNBQU87UUFBQ0MsU0FBUyxFQUFFcEIsbUVBQWE7OzBCQUMvQiw4REFBQ3NCLElBQUU7Z0JBQUNGLFNBQVMsRUFBQyxtQ0FBbUM7Z0JBQUNHLEdBQUcsRUFBRWpCLFFBQVE7MEJBQUUsUUFBTTs7Ozs7cUJBQUs7MEJBQzVFLDhEQUFDa0IsS0FBRztnQkFBQ0osU0FBUyxFQUFFcEIsMkVBQXFCOztrQ0FDbkMsOERBQUN3QixLQUFHO3dCQUFDSixTQUFTLEVBQUUsRUFBQyxDQUE4QixNQUEwQixDQUF0RHBCLGlGQUEyQixFQUFDLDRCQUEwQixDQUFDOzswQ0FDeEUsOERBQUMyQixHQUFDO2dDQUFDSixHQUFHLEVBQUVoQixRQUFRO2dDQUFFcUIsS0FBSyxFQUFFLENBQUM7Z0NBQUVSLFNBQVMsRUFBQywwQ0FBMEM7MENBQUMscUNBQW1DOzs7OztxQ0FBSTswQ0FDeEgsOERBQUNTLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRTVCLG9FQUFVOzs7OztxQ0FBSTs7Ozs7OzZCQUNwQjtrQ0FDTiw4REFBQ3NCLEtBQUc7d0JBQUNKLFNBQVMsRUFBRSxFQUFDLENBQThCLE1BQTBCLENBQXREcEIsaUZBQTJCLEVBQUMsNEJBQTBCLENBQUM7OzBDQUN4RSw4REFBQzJCLEdBQUM7Z0NBQUNKLEdBQUcsRUFBRWYsU0FBUztnQ0FBRW9CLEtBQUssRUFBRSxDQUFDO2dDQUFFUixTQUFTLEVBQUMsK0JBQStCOzBDQUFDLGNBQVk7Ozs7O3FDQUFJOzBDQUN2Riw4REFBQ1MsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFM0Isb0VBQVU7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3BCOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNFLENBQ1g7Q0FDRjtHQTlDS0UsS0FBSzs7UUFLbUJELHFEQUFrQjs7O0FBMkNoRCwrREFBZUMsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Bd2FyZHMvaW5kZXguanM/ODVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgYXdhcmQxIGZyb20gXCJhc3NldHMvaW1hZ2VzL2F3YXJkMS5wbmdcIlxuaW1wb3J0IGF3YXJkMiBmcm9tIFwiYXNzZXRzL2ltYWdlcy9hd2FyZDIucG5nXCJcbmltcG9ydCB7IHVzZVBhcmFsbGF4UG9pbnRlciB9IGZyb20gJ2hvb2tzJ1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcblxuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBwbGFjZVJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBoYWRPbmVSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgeyBzZXRQYXJhbGxheEl0ZW0gfSA9IHVzZVBhcmFsbGF4UG9pbnRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLmZyb21Ubyh0aXRsZVJlZi5jdXJyZW50LFxuICAgICAgeyB5OiA0OCwgb3BhY2l0eTogMCB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB0aXRsZVJlZi5jdXJyZW50LCBkZWxheTogLjI1LCB5OiAwLCBvcGFjaXR5OiAxIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5hd2FyZC1pbWFnZSBwXCIsXG4gICAgeyB5OiAwLCBzY2FsZTogLjkgfSxcbiAgICB7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIuYXdhcmQtaW1hZ2VcIiwgc2NydWI6IDEgfSwgeTogLTUwLCBzY2FsZTogMS4xIH1cbiAgKVxuXG4gICAgZ3NhcC5mcm9tVG8oXCIuYXdhcmQtaW1hZ2UtMVwiLFxuICAgICAgeyB5OiAwLCBzY2FsZTogLjkgfSxcbiAgICAgIHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIi5hd2FyZC1pbWFnZS0xXCIsIHNjcnViOiAxIH0sIHk6IDUwLCBzY2FsZTogMS4xIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5hd2FyZC1pbWFnZS0yXCIsXG4gICAgICB7IHk6IDAsIHNjYWxlOiAuOSB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmF3YXJkLWltYWdlLTJcIiwgc2NydWI6IDEgfSwgeTogLTUwLCBzY2FsZTogMS4xIH1cbiAgICApXG5cbiAgICBzZXRQYXJhbGxheEl0ZW0oW3BsYWNlUmVmLmN1cnJlbnQsIGhhZE9uZVJlZi5jdXJyZW50XSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hd2FyZHN9PlxuICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LXNlbWlib2xkIHRleHQtaXRhbGljJyByZWY9e3RpdGxlUmVmfT5Bd2FyZHM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hd2FyZHNfX2ltYWdlc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXdhcmRzX19pbWFnZXNfX2l0ZW19IGF3YXJkLWltYWdlIGF3YXJkLWltYWdlLTFgfT5cbiAgICAgICAgICA8cCByZWY9e3BsYWNlUmVmfSBzcGVlZD17MX0gY2xhc3NOYW1lPSd0ZXh0LW1kIHRleHQtaXRhbGljIHRleHQtYm9sZCB0ZXh0LXJpZ2h0Jz5USElTIElTIFdIRVJFIEkgV09VTEQgUFVUIE1ZIEFXQVJEUzwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17YXdhcmQxLnNyY30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXdhcmRzX19pbWFnZXNfX2l0ZW19IGF3YXJkLWltYWdlIGF3YXJkLWltYWdlLTJgfT5cbiAgICAgICAgICA8cCByZWY9e2hhZE9uZVJlZn0gc3BlZWQ9ezF9IGNsYXNzTmFtZT0ndGV4dC1tZCB0ZXh0LWl0YWxpYyB0ZXh0LWJvbGQnPklGIEkgSEFEIE9ORTwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17YXdhcmQyLnNyY30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiZ3NhcCIsImF3YXJkMSIsImF3YXJkMiIsInVzZVBhcmFsbGF4UG9pbnRlciIsImluZGV4IiwidGl0bGVSZWYiLCJwbGFjZVJlZiIsImhhZE9uZVJlZiIsInNldFBhcmFsbGF4SXRlbSIsImZyb21UbyIsImN1cnJlbnQiLCJ5Iiwib3BhY2l0eSIsInNjcm9sbFRyaWdnZXIiLCJkZWxheSIsInNjYWxlIiwidHJpZ2dlciIsInNjcnViIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImF3YXJkcyIsImgyIiwicmVmIiwiZGl2IiwiYXdhcmRzX19pbWFnZXMiLCJhd2FyZHNfX2ltYWdlc19faXRlbSIsInAiLCJzcGVlZCIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/Awards/index.js\n"));

/***/ })

});