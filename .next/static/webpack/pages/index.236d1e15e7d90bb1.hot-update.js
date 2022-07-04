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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/organisms/Awards/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var assets_images_award1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/award1.png */ \"./assets/images/award1.png\");\n/* harmony import */ var assets_images_award2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/award2.png */ \"./assets/images/award2.png\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.fromTo(titleRef.current, {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: titleRef.current,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.fromTo(\".award-image p\", {\n            y: 50,\n            scale: .9\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image\",\n                scrub: 1\n            },\n            y: -50,\n            scale: 1.2\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.fromTo(\".award-image-1\", {\n            y: 0,\n            scale: .9,\n            rotateZ: -5\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image-1\",\n                scrub: 1\n            },\n            y: 50,\n            rotateZ: 5,\n            scale: 1.1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.fromTo(\".award-image-2\", {\n            y: 0,\n            scale: .9,\n            rotateZ: 5\n        }, {\n            scrollTrigger: {\n                trigger: \".award-image-2\",\n                scrub: 1\n            },\n            y: -50,\n            rotateZ: -5,\n            scale: 1.1\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().awards),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xs text-semibold text-italic\",\n                ref: titleRef,\n                children: \"Awards\"\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().awards__images),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().awards__images__item), \" award-image award-image-1\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-italic text-bold text-right\",\n                                children: \"THIS IS WHERE I WOULD PUT MY AWARDS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_images_award1_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().awards__images__item), \" award-image award-image-2\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-italic text-bold\",\n                                children: \"IF I HAD ONE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_images_award2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Awards/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"5158MNnKrLHubdR68HBro4P03NI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Bd2FyZHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNBO0FBQ2Q7QUFDa0I7QUFDQTs7QUFFN0MsSUFBTU0sS0FBSyxHQUFHLFdBQU07O0lBQ2xCLElBQU1DLFFBQVEsR0FBR04sNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFN0JELGdEQUFTLENBQUMsV0FBTTtRQUNkRyw2Q0FBVyxDQUFDSSxRQUFRLENBQUNFLE9BQU8sRUFDMUI7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7WUFBRUMsT0FBTyxFQUFFLENBQUM7U0FBRSxFQUNyQjtZQUFFQyxhQUFhLEVBQUVMLFFBQVEsQ0FBQ0UsT0FBTztZQUFFSSxLQUFLLEVBQUUsR0FBRztZQUFFSCxDQUFDLEVBQUUsQ0FBQztZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQ2xFO1FBRURSLDZDQUFXLENBQUMsZ0JBQWdCLEVBQzFCO1lBQUVPLENBQUMsRUFBRSxFQUFFO1lBQUVJLEtBQUssRUFBRSxFQUFFO1NBQUUsRUFDcEI7WUFBRUYsYUFBYSxFQUFFO2dCQUFFRyxPQUFPLEVBQUUsY0FBYztnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFTixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUVJLEtBQUssRUFBRSxHQUFHO1NBQUUsQ0FDN0U7UUFFRFgsNkNBQVcsQ0FBQyxnQkFBZ0IsRUFDMUI7WUFBRU8sQ0FBQyxFQUFFLENBQUM7WUFBRUksS0FBSyxFQUFFLEVBQUU7WUFBRUcsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUFFLEVBQ2hDO1lBQUVMLGFBQWEsRUFBRTtnQkFBRUcsT0FBTyxFQUFFLGdCQUFnQjtnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFTixDQUFDLEVBQUUsRUFBRTtZQUFFTyxPQUFPLEVBQUUsQ0FBQztZQUFFSCxLQUFLLEVBQUUsR0FBRztTQUFFLENBQzFGO1FBRURYLDZDQUFXLENBQUMsZ0JBQWdCLEVBQzFCO1lBQUVPLENBQUMsRUFBRSxDQUFDO1lBQUVJLEtBQUssRUFBRSxFQUFFO1lBQUVHLE9BQU8sRUFBRSxDQUFDO1NBQUUsRUFDL0I7WUFBRUwsYUFBYSxFQUFFO2dCQUFFRyxPQUFPLEVBQUUsZ0JBQWdCO2dCQUFFQyxLQUFLLEVBQUUsQ0FBQzthQUFFO1lBQUVOLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRU8sT0FBTyxFQUFFLENBQUMsQ0FBQztZQUFFSCxLQUFLLEVBQUUsR0FBRztTQUFFLENBQzVGO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ0ksU0FBTztRQUFDQyxTQUFTLEVBQUVqQixtRUFBYTs7MEJBQy9CLDhEQUFDbUIsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLG1DQUFtQztnQkFBQ0csR0FBRyxFQUFFZixRQUFROzBCQUFFLFFBQU07Ozs7O3FCQUFLOzBCQUM1RSw4REFBQ2dCLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRWpCLDJFQUFxQjs7a0NBQ25DLDhEQUFDcUIsS0FBRzt3QkFBQ0osU0FBUyxFQUFFLEVBQUMsQ0FBOEIsTUFBMEIsQ0FBdERqQixpRkFBMkIsRUFBQyw0QkFBMEIsQ0FBQzs7MENBQ3hFLDhEQUFDd0IsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLDBDQUEwQzswQ0FBQyxxQ0FBbUM7Ozs7O3FDQUFJOzBDQUMvRiw4REFBQ1EsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFeEIsb0VBQVU7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3BCO2tDQUNOLDhEQUFDbUIsS0FBRzt3QkFBQ0osU0FBUyxFQUFFLEVBQUMsQ0FBOEIsTUFBMEIsQ0FBdERqQixpRkFBMkIsRUFBQyw0QkFBMEIsQ0FBQzs7MENBQ3hFLDhEQUFDd0IsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLCtCQUErQjswQ0FBQyxjQUFZOzs7OztxQ0FBSTswQ0FDN0QsOERBQUNRLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRXZCLG9FQUFVOzs7OztxQ0FBSTs7Ozs7OzZCQUNwQjs7Ozs7O3FCQUNGOzs7Ozs7YUFDRSxDQUNYO0NBQ0Y7R0F4Q0tDLEtBQUs7QUEwQ1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQXdhcmRzL2luZGV4LmpzPzg1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IGF3YXJkMSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9hd2FyZDEucG5nXCJcbmltcG9ydCBhd2FyZDIgZnJvbSBcImFzc2V0cy9pbWFnZXMvYXdhcmQyLnBuZ1wiXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8odGl0bGVSZWYuY3VycmVudCxcbiAgICAgIHsgeTogNDgsIG9wYWNpdHk6IDAgfSxcbiAgICAgIHsgc2Nyb2xsVHJpZ2dlcjogdGl0bGVSZWYuY3VycmVudCwgZGVsYXk6IC4yNSwgeTogMCwgb3BhY2l0eTogMSB9XG4gICAgKVxuXG4gICAgZ3NhcC5mcm9tVG8oXCIuYXdhcmQtaW1hZ2UgcFwiLFxuICAgICAgeyB5OiA1MCwgc2NhbGU6IC45IH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIuYXdhcmQtaW1hZ2VcIiwgc2NydWI6IDEgfSwgeTogLTUwLCBzY2FsZTogMS4yIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5hd2FyZC1pbWFnZS0xXCIsXG4gICAgICB7IHk6IDAsIHNjYWxlOiAuOSwgcm90YXRlWjogLTUgfSxcbiAgICAgIHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIi5hd2FyZC1pbWFnZS0xXCIsIHNjcnViOiAxIH0sIHk6IDUwLCByb3RhdGVaOiA1LCBzY2FsZTogMS4xIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5hd2FyZC1pbWFnZS0yXCIsXG4gICAgICB7IHk6IDAsIHNjYWxlOiAuOSwgcm90YXRlWjogNSB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmF3YXJkLWltYWdlLTJcIiwgc2NydWI6IDEgfSwgeTogLTUwLCByb3RhdGVaOiAtNSwgc2NhbGU6IDEuMSB9XG4gICAgKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmF3YXJkc30+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtc2VtaWJvbGQgdGV4dC1pdGFsaWMnIHJlZj17dGl0bGVSZWZ9PkF3YXJkczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF3YXJkc19faW1hZ2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hd2FyZHNfX2ltYWdlc19faXRlbX0gYXdhcmQtaW1hZ2UgYXdhcmQtaW1hZ2UtMWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1tZCB0ZXh0LWl0YWxpYyB0ZXh0LWJvbGQgdGV4dC1yaWdodCc+VEhJUyBJUyBXSEVSRSBJIFdPVUxEIFBVVCBNWSBBV0FSRFM8L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2F3YXJkMS5zcmN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmF3YXJkc19faW1hZ2VzX19pdGVtfSBhd2FyZC1pbWFnZSBhd2FyZC1pbWFnZS0yYH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LW1kIHRleHQtaXRhbGljIHRleHQtYm9sZCc+SUYgSSBIQUQgT05FPC9wPlxuICAgICAgICAgIDxpbWcgc3JjPXthd2FyZDIuc3JjfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJnc2FwIiwiYXdhcmQxIiwiYXdhcmQyIiwiaW5kZXgiLCJ0aXRsZVJlZiIsImZyb21UbyIsImN1cnJlbnQiLCJ5Iiwib3BhY2l0eSIsInNjcm9sbFRyaWdnZXIiLCJkZWxheSIsInNjYWxlIiwidHJpZ2dlciIsInNjcnViIiwicm90YXRlWiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhd2FyZHMiLCJoMiIsInJlZiIsImRpdiIsImF3YXJkc19faW1hZ2VzIiwiYXdhcmRzX19pbWFnZXNfX2l0ZW0iLCJwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/Awards/index.js\n"));

/***/ })

});