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

/***/ "./components/organisms/Work/index.js":
/*!********************************************!*\
  !*** ./components/organisms/Work/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/arrow.svg */ \"./assets/icons/arrow.svg\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/organisms/Work/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var assets_images_work1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/work1.png */ \"./assets/images/work1.png\");\n/* harmony import */ var assets_images_work2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/work2.png */ \"./assets/images/work2.png\");\n/* harmony import */ var assets_images_work3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/work3.png */ \"./assets/images/work3.png\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(titleRef.current, {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: titleRef.current,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".list-item\", {\n            opacity: 0,\n            y: 100\n        }, {\n            scrollTrigger: \".list-item\",\n            stagger: .1,\n            duration: .5,\n            delay: .4,\n            opacity: 1,\n            y: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".carousel-images div\", {\n            x: 120,\n            y: 120,\n            opacity: 0\n        }, {\n            scrollTrigger: {\n                trigger: \".carousel-images\"\n            },\n            stagger: .2,\n            duration: 1,\n            delay: .5,\n            x: 0,\n            y: 0,\n            opacity: .5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".carousel-images\", {\n            x: 100,\n            y: 100\n        }, {\n            scrollTrigger: {\n                trigger: \".carousel-images\",\n                scrub: 1\n            },\n            x: -100,\n            y: -200\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xs text-semibold text-italic\",\n                ref: titleRef,\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__carousel), \" carousel-images\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__first-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__second-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__third-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-italic text-light\",\n                                children: \"OCUFY\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                alt: \"creative arrow icon link\",\n                                className: \"icon-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-italic text-light\",\n                                children: \"CIRCULO SAQRA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                alt: \"creative arrow icon link\",\n                                className: \"icon-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-italic text-light\",\n                                children: \"ARROW\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                alt: \"creative arrow icon link\",\n                                className: \"icon-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-italic text-light\",\n                                children: \"CODESIGN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                alt: \"creative arrow icon link\",\n                                className: \"icon-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-italic text-light\",\n                                children: \"INMERLY\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                alt: \"creative arrow icon link\",\n                                className: \"icon-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__cta),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-xs btn-primary\",\n                        children: \"Know more\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-xs btn-secondary\",\n                        children: \"Get in touch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"5158MNnKrLHubdR68HBro4P03NI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Xb3JrL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNDO0FBQ0Q7QUFDRztBQUNBO0FBQ0E7QUFDakI7O0FBRTNCLElBQU1RLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUFNQyxRQUFRLEdBQUdSLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTdCRCxnREFBUyxDQUFDLFdBQU07UUFDZE8sNkNBQVcsQ0FBQ0UsUUFBUSxDQUFDRSxPQUFPLEVBQzFCO1lBQUVDLENBQUMsRUFBRSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUUsRUFDckI7WUFBRUMsYUFBYSxFQUFFTCxRQUFRLENBQUNFLE9BQU87WUFBRUksS0FBSyxFQUFFLEdBQUc7WUFBRUgsQ0FBQyxFQUFFLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUNsRTtRQUVETiw2Q0FBVyxDQUFDLFlBQVksRUFDdEI7WUFBRU0sT0FBTyxFQUFFLENBQUM7WUFBRUQsQ0FBQyxFQUFFLEdBQUc7U0FBRSxFQUN0QjtZQUFFRSxhQUFhLEVBQUUsWUFBWTtZQUFFRSxPQUFPLEVBQUUsRUFBRTtZQUFFQyxRQUFRLEVBQUUsRUFBRTtZQUFFRixLQUFLLEVBQUUsRUFBRTtZQUFFRixPQUFPLEVBQUUsQ0FBQztZQUFFRCxDQUFDLEVBQUUsQ0FBQztTQUFFLENBQ3hGO1FBRURMLDZDQUFXLENBQUMsc0JBQXNCLEVBQ2hDO1lBQUVXLENBQUMsRUFBRSxHQUFHO1lBQUVOLENBQUMsRUFBRSxHQUFHO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUcsRUFDL0I7WUFBRUMsYUFBYSxFQUFFO2dCQUFFSyxPQUFPLEVBQUUsa0JBQWtCO2FBQUU7WUFBRUgsT0FBTyxFQUFFLEVBQUU7WUFBRUMsUUFBUSxFQUFFLENBQUM7WUFBRUYsS0FBSyxFQUFFLEVBQUU7WUFBRUcsQ0FBQyxFQUFFLENBQUM7WUFBRU4sQ0FBQyxFQUFFLENBQUM7WUFB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QUk7MENBQzFELDhEQUFDTSxLQUFHO2dDQUFDQyxHQUFHLEVBQUUzQixrRUFBUztnQ0FBRWlDLEdBQUcsRUFBQywwQkFBMEI7Z0NBQUNiLFNBQVMsRUFBQyxTQUFTOzs7OztxQ0FBRzs7Ozs7OzZCQUN2RTtrQ0FFTCw4REFBQ1UsSUFBRTt3QkFBQ1YsU0FBUyxFQUFFLEVBQUMsQ0FBMEIsTUFBVSxDQUFsQ25CLDZFQUF1QixFQUFDLFlBQVUsQ0FBQzs7MENBQ25ELDhEQUFDK0IsR0FBQztnQ0FBQ1osU0FBUyxFQUFDLGdDQUFnQzswQ0FBQyxTQUFPOzs7OztxQ0FBSTswQ0FDekQsOERBQUNNLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRTNCLGtFQUFTO2dDQUFFaUMsR0FBRyxFQUFDLDBCQUEwQjtnQ0FBQ2IsU0FBUyxFQUFDLFNBQVM7Ozs7O3FDQUFHOzs7Ozs7NkJBQ3ZFOzs7Ozs7cUJBQ0Y7MEJBRUwsOERBQUNJLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRW5CLHNFQUFnQjs7a0NBQzlCLDhEQUFDa0MsUUFBTTt3QkFBQ2YsU0FBUyxFQUFDLHFCQUFxQjtrQ0FBQyxXQUFTOzs7Ozs2QkFBUztrQ0FDMUQsOERBQUNlLFFBQU07d0JBQUNmLFNBQVMsRUFBQyx1QkFBdUI7a0NBQUMsY0FBWTs7Ozs7NkJBQVM7Ozs7OztxQkFDM0Q7Ozs7OzthQUNFLENBQ1g7Q0FDRjtHQTFFS2QsS0FBSztBQTRFWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Xb3JrL2luZGV4LmpzP2YzNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFycm93IGZyb20gJ2Fzc2V0cy9pY29ucy9hcnJvdy5zdmcnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGltYWdlMSBmcm9tICdhc3NldHMvaW1hZ2VzL3dvcmsxLnBuZydcbmltcG9ydCBpbWFnZTIgZnJvbSAnYXNzZXRzL2ltYWdlcy93b3JrMi5wbmcnXG5pbXBvcnQgaW1hZ2UzIGZyb20gJ2Fzc2V0cy9pbWFnZXMvd29yazMucG5nJ1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLmZyb21Ubyh0aXRsZVJlZi5jdXJyZW50LFxuICAgICAgeyB5OiA0OCwgb3BhY2l0eTogMCB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB0aXRsZVJlZi5jdXJyZW50LCBkZWxheTogLjI1LCB5OiAwLCBvcGFjaXR5OiAxIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5saXN0LWl0ZW1cIixcbiAgICAgIHsgb3BhY2l0eTogMCwgeTogMTAwIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IFwiLmxpc3QtaXRlbVwiLCBzdGFnZ2VyOiAuMSwgZHVyYXRpb246IC41LCBkZWxheTogLjQsIG9wYWNpdHk6IDEsIHk6IDAgfVxuICAgIClcblxuICAgIGdzYXAuZnJvbVRvKFwiLmNhcm91c2VsLWltYWdlcyBkaXZcIixcbiAgICAgIHsgeDogMTIwLCB5OiAxMjAsIG9wYWNpdHk6IDAsIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIuY2Fyb3VzZWwtaW1hZ2VzXCIgfSwgc3RhZ2dlcjogLjIsIGR1cmF0aW9uOiAxLCBkZWxheTogLjUsIHg6IDAsIHk6IDAsIG9wYWNpdHk6IC41LCB9XG4gICAgKVxuXG4gICAgZ3NhcC5mcm9tVG8oXCIuY2Fyb3VzZWwtaW1hZ2VzXCIsXG4gICAgICB7IHg6IDEwMCwgeTogMTAwIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIuY2Fyb3VzZWwtaW1hZ2VzXCIsIHNjcnViOiAxIH0sIHg6IC0xMDAsIHk6IC0yMDAgfVxuICAgIClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53b3JrfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1zZW1pYm9sZCB0ZXh0LWl0YWxpYycgcmVmPXt0aXRsZVJlZn0+V29yazwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMud29ya19fY2Fyb3VzZWx9IGNhcm91c2VsLWltYWdlc2B9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTEuc3JjfSBjbGFzc05hbWU9e3N0eWxlc1tcIndvcmtfX2Nhcm91c2VsX19maXJzdC1pbWFnZVwiXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlMi5zcmN9IGNsYXNzTmFtZT17c3R5bGVzW1wid29ya19fY2Fyb3VzZWxfX3NlY29uZC1pbWFnZVwiXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlMy5zcmN9IGNsYXNzTmFtZT17c3R5bGVzW1wid29ya19fY2Fyb3VzZWxfX3RoaXJkLWltYWdlXCJdfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMud29ya19fbGlzdH0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy53b3JrX19saXN0X19pdGVtfSBsaXN0LWl0ZW1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1pdGFsaWMgdGV4dC1saWdodCc+T0NVRlk8L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzLndvcmtfX2xpc3RfX2l0ZW19IGxpc3QtaXRlbWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWl0YWxpYyB0ZXh0LWxpZ2h0Jz5DSVJDVUxPIFNBUVJBPC9wPlxuICAgICAgICAgIDxpbWcgc3JjPXthcnJvdy5zcmN9IGFsdD1cImNyZWF0aXZlIGFycm93IGljb24gbGlua1wiIGNsYXNzTmFtZT1cImljb24tbWRcIiAvPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy53b3JrX19saXN0X19pdGVtfSBsaXN0LWl0ZW1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1pdGFsaWMgdGV4dC1saWdodCc+QVJST1c8L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzLndvcmtfX2xpc3RfX2l0ZW19IGxpc3QtaXRlbWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWl0YWxpYyB0ZXh0LWxpZ2h0Jz5DT0RFU0lHTjwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17YXJyb3cuc3JjfSBhbHQ9XCJjcmVhdGl2ZSBhcnJvdyBpY29uIGxpbmtcIiBjbGFzc05hbWU9XCJpY29uLW1kXCIgLz5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtzdHlsZXMud29ya19fbGlzdF9faXRlbX0gbGlzdC1pdGVtYH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtaXRhbGljIHRleHQtbGlnaHQnPklOTUVSTFk8L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtfX2N0YX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXhzIGJ0bi1wcmltYXJ5Jz5Lbm93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgYnRuLXNlY29uZGFyeSc+R2V0IGluIHRvdWNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJhcnJvdyIsInN0eWxlcyIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImdzYXAiLCJpbmRleCIsInRpdGxlUmVmIiwiZnJvbVRvIiwiY3VycmVudCIsInkiLCJvcGFjaXR5Iiwic2Nyb2xsVHJpZ2dlciIsImRlbGF5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwieCIsInRyaWdnZXIiLCJzY3J1YiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ3b3JrIiwiaDIiLCJyZWYiLCJkaXYiLCJ3b3JrX19jYXJvdXNlbCIsImltZyIsInNyYyIsInVsIiwid29ya19fbGlzdCIsImxpIiwid29ya19fbGlzdF9faXRlbSIsInAiLCJhbHQiLCJ3b3JrX19jdGEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/Work/index.js\n"));

/***/ })

});