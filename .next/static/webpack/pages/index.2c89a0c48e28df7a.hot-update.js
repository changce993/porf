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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icons/arrow.svg */ \"./assets/icons/arrow.svg\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/organisms/Work/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var assets_images_work1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/work1.png */ \"./assets/images/work1.png\");\n/* harmony import */ var assets_images_work2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/work2.png */ \"./assets/images/work2.png\");\n/* harmony import */ var assets_images_work3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/work3.png */ \"./assets/images/work3.png\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(titleRef.current, {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: titleRef.current,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".list-item\", {\n            opacity: 0,\n            y: 100\n        }, {\n            scrollTrigger: \".list-item\",\n            stagger: .1,\n            duration: .5,\n            delay: .4,\n            opacity: 1,\n            y: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".carousel-images div\", {\n            x: 120,\n            y: 120,\n            opacity: 0\n        }, {\n            scrollTrigger: {\n                trigger: \".carousel-images\"\n            },\n            stagger: .2,\n            duration: 1,\n            delay: .5,\n            x: 0,\n            y: 0,\n            opacity: .5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(\".carousel-images\", {\n            x: 100,\n            y: 100\n        }, {\n            scrollTrigger: {\n                trigger: \".carousel-images\",\n                scrub: 1\n            },\n            x: -100,\n            y: -200\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xs text-semibold text-italic\",\n                ref: titleRef,\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__carousel), \" carousel-images\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__first-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__second-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: assets_images_work3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"work__carousel__third-image\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-italic text-light\",\n                                    children: \"INMERLY - (SOON)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                    alt: \"creative arrow icon link\",\n                                    className: \"icon-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-italic text-light\",\n                                    children: \"OCUFY - (SOON)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                    alt: \"creative arrow icon link\",\n                                    className: \"icon-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.behance.net/gallery/127718591/Circulo-Saqra\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-italic text-light\",\n                                    children: \"CIRCULO SAQRA\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                    alt: \"creative arrow icon link\",\n                                    className: \"icon-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.behance.net/gallery/90209687/Arrow-UXUI-Case-Study\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-italic text-light\",\n                                    children: \"ARROW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                    alt: \"creative arrow icon link\",\n                                    className: \"icon-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__list__item), \" list-item\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.behance.net/gallery/85265087/Codesign-%28Brand%29\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-italic text-light\",\n                                    children: \"CODESIGN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                                    alt: \"creative arrow icon link\",\n                                    className: \"icon-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().work__cta),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-xs btn-primary\",\n                        children: \"Know more\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/Work/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"5158MNnKrLHubdR68HBro4P03NI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Xb3JrL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNDO0FBQ0Q7QUFDRztBQUNBO0FBQ0E7QUFDakI7O0FBRTNCLElBQU1RLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUFNQyxRQUFRLEdBQUdSLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTdCRCxnREFBUyxDQUFDLFdBQU07UUFDZE8sNkNBQVcsQ0FBQ0UsUUFBUSxDQUFDRSxPQUFPLEVBQzFCO1lBQUVDLENBQUMsRUFBRSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUUsRUFDckI7WUFBRUMsYUFBYSxFQUFFTCxRQUFRLENBQUNFLE9BQU87WUFBRUksS0FBSyxFQUFFLEdBQUc7WUFBRUgsQ0FBQyxFQUFFLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUNsRTtRQUVETiw2Q0FBVyxDQUFDLFlBQVksRUFDdEI7WUFBRU0sT0FBTyxFQUFFLENBQUM7WUFBRUQsQ0FBQyxFQUFFLEdBQUc7U0FBRSxFQUN0QjtZQUFFRSxhQUFhLEVBQUUsWUFBWTtZQUFFRSxPQUFPLEVBQUUsRUFBRTtZQUFFQyxRQUFRLEVBQUUsRUFBRTtZQUFFRixLQUFLLEVBQUUsRUFBRTtZQUFFRixPQUFPLEVBQUUsQ0FBQztZQUFFRCxDQUFDLEVBQUUsQ0FBQztTQUFFLENBQ3hGO1FBRURMLDZDQUFXLENBQUMsc0JBQXNCLEVBQ2hDO1lBQUVXLENBQUMsRUFBRSxHQUFHO1lBQUVOLENBQUMsRUFBRSxHQUFHO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUcsRUFDL0I7WUFBRUMsYUFBYSxFQUFFO2dCQUFFSyxPQUFPLEVBQUUsa0JBQWtCO2FBQUU7WUFBRUgsT0FBTyxFQUFFLEVBQUU7WUFBRUMsUUFBUSxFQUFFLENBQUM7WUFBRUYsS0FBSyxFQUFFLEVBQUU7WUFBRUcsQ0FBQyxFQUFFLENBQUM7WUFBRU4sQ0FBQyxFQUFFLENBQUM7WUFBRUMsT0FBTyxFQUFFLEVBQUU7U0FBRyxDQUNsSDtRQUVETiw2Q0FBVyxDQUFDLGtCQUFrQixFQUM1QjtZQUFFVyxDQUFDLEVBQUUsR0FBRztZQUFFTixDQUFDLEVBQUUsR0FBRztTQUFFLEVBQ2xCO1lBQUVFLGFBQWEsRUFBRTtnQkFBRUssT0FBTyxFQUFFLGtCQUFrQjtnQkFBRUMsS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFRixDQUFDLEVBQUUsQ0FBQyxHQUFHO1lBQUVOLENBQUMsRUFBRSxDQUFDLEdBQUc7U0FBRSxDQUMvRTtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNTLFNBQU87UUFBQ0MsU0FBUyxFQUFFbkIsaUVBQVc7OzBCQUM3Qiw4REFBQ3FCLElBQUU7Z0JBQUNGLFNBQVMsRUFBQyxtQ0FBbUM7Z0JBQUNHLEdBQUcsRUFBRWhCLFFBQVE7MEJBQUUsTUFBSTs7Ozs7cUJBQUs7MEJBRTFFLDhEQUFDaUIsS0FBRztnQkFBQ0osU0FBUyxFQUFFLEVBQUMsQ0FBd0IsTUFBZ0IsQ0FBdENuQiwyRUFBcUIsRUFBQyxrQkFBZ0IsQ0FBQzs7a0NBQ3hELDhEQUFDdUIsS0FBRztrQ0FDRiw0RUFBQ0UsS0FBRzs0QkFBQ0MsR0FBRyxFQUFFekIsbUVBQVU7NEJBQUVrQixTQUFTLEVBQUVuQiwyRkFBcUM7Ozs7O2lDQUFJOzs7Ozs2QkFDdEU7a0NBQ04sOERBQUN1QixLQUFHO2tDQUNGLDRFQUFDRSxLQUFHOzRCQUFDQyxHQUFHLEVBQUV4QixtRUFBVTs0QkFBRWlCLFNBQVMsRUFBRW5CLDRGQUFzQzs7Ozs7aUNBQUk7Ozs7OzZCQUN2RTtrQ0FDTiw4REFBQ3VCLEtBQUc7a0NBQ0YsNEVBQUNFLEtBQUc7NEJBQUNDLEdBQUcsRUFBRXZCLG1FQUFVOzRCQUFFZ0IsU0FBUyxFQUFFbkIsMkZBQXFDOzs7OztpQ0FBSTs7Ozs7NkJBQ3RFOzs7Ozs7cUJBQ0Y7MEJBRU4sOERBQUMyQixJQUFFO2dCQUFDUixTQUFTLEVBQUVuQix1RUFBaUI7O2tDQUM5Qiw4REFBQzZCLElBQUU7d0JBQUNWLFNBQVMsRUFBRSxFQUFDLENBQTBCLE1BQVUsQ0FBbENuQiw2RUFBdUIsRUFBQyxZQUFVLENBQUM7a0NBQ25ELDRFQUFDK0IsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7OzhDQUNULDhEQUFDQyxHQUFDO29DQUFDZCxTQUFTLEVBQUMsZ0NBQWdDOzhDQUFDLGtCQUFnQjs7Ozs7eUNBQUk7OENBQ2xFLDhEQUFDTSxLQUFHO29DQUFDQyxHQUFHLEVBQUUzQixrRUFBUztvQ0FBRW1DLEdBQUcsRUFBQywwQkFBMEI7b0NBQUNmLFNBQVMsRUFBQyxTQUFTOzs7Ozt5Q0FBRzs7Ozs7O2lDQUN4RTs7Ozs7NkJBQ0Q7a0NBRUwsOERBQUNVLElBQUU7d0JBQUNWLFNBQVMsRUFBRSxFQUFDLENBQTBCLE1BQVUsQ0FBbENuQiw2RUFBdUIsRUFBQyxZQUFVLENBQUM7a0NBQ25ELDRFQUFDK0IsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7OzhDQUNULDhEQUFDQyxHQUFDO29DQUFDZCxTQUFTLEVBQUMsZ0NBQWdDOzhDQUFDLGdCQUFjOzs7Ozt5Q0FBSTs4Q0FDaEUsOERBQUNNLEtBQUc7b0NBQUNDLEdBQUcsRUFBRTNCLGtFQUFTO29DQUFFbUMsR0FBRyxFQUFDLDBCQUEwQjtvQ0FBQ2YsU0FBUyxFQUFDLFNBQVM7Ozs7O3lDQUFHOzs7Ozs7aUNBQ3hFOzs7Ozs2QkFDRDtrQ0FFTCw4REFBQ1UsSUFBRTt3QkFBQ1YsU0FBUyxFQUFFLEVBQUMsQ0FBMEIsTUFBVSxDQUFsQ25CLDZFQUF1QixFQUFDLFlBQVUsQ0FBQztrQ0FDbkQsNEVBQUMrQixHQUFDOzRCQUFDQyxJQUFJLEVBQUMseURBQXlEOzs4Q0FDL0QsOERBQUNDLEdBQUM7b0NBQUNkLFNBQVMsRUFBQyxnQ0FBZ0M7OENBQUMsZUFBYTs7Ozs7eUNBQUk7OENBQy9ELDhEQUFDTSxLQUFHO29DQUFDQyxHQUFHLEVBQUUzQixrRUFBUztvQ0FBRW1DLEdBQUcsRUFBQywwQkFBMEI7b0NBQUNmLFNBQVMsRUFBQyxTQUFTOzs7Ozt5Q0FBRzs7Ozs7O2lDQUN4RTs7Ozs7NkJBQ0Q7a0NBRUwsOERBQUNVLElBQUU7d0JBQUNWLFNBQVMsRUFBRSxFQUFDLENBQTBCLE1BQVUsQ0FBbENuQiw2RUFBdUIsRUFBQyxZQUFVLENBQUM7a0NBQ25ELDRFQUFDK0IsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLGdFQUFnRTs7OENBQ3RFLDhEQUFDQyxHQUFDO29DQUFDZCxTQUFTLEVBQUMsZ0NBQWdDOzhDQUFDLE9BQUs7Ozs7O3lDQUFJOzhDQUN2RCw4REFBQ00sS0FBRztvQ0FBQ0MsR0FBRyxFQUFFM0Isa0VBQVM7b0NBQUVtQyxHQUFHLEVBQUMsMEJBQTBCO29DQUFDZixTQUFTLEVBQUMsU0FBUzs7Ozs7eUNBQUc7Ozs7OztpQ0FDeEU7Ozs7OzZCQUNEO2tDQUVMLDhEQUFDVSxJQUFFO3dCQUFDVixTQUFTLEVBQUUsRUFBQyxDQUEwQixNQUFVLENBQWxDbkIsNkVBQXVCLEVBQUMsWUFBVSxDQUFDO2tDQUNuRCw0RUFBQytCLEdBQUM7NEJBQUNDLElBQUksRUFBQywrREFBK0Q7OzhDQUNyRSw4REFBQ0MsR0FBQztvQ0FBQ2QsU0FBUyxFQUFDLGdDQUFnQzs4Q0FBQyxVQUFROzs7Ozt5Q0FBSTs4Q0FDMUQsOERBQUNNLEtBQUc7b0NBQUNDLEdBQUcsRUFBRTNCLGtFQUFTO29DQUFFbUMsR0FBRyxFQUFDLDBCQUEwQjtvQ0FBQ2YsU0FBUyxFQUFDLFNBQVM7Ozs7O3lDQUFHOzs7Ozs7aUNBQ3hFOzs7Ozs2QkFDRDs7Ozs7O3FCQUNGOzBCQUVMLDhEQUFDSSxLQUFHO2dCQUFDSixTQUFTLEVBQUVuQixzRUFBZ0I7MEJBQzlCLDRFQUFDK0IsR0FBQztvQkFBQ0MsSUFBSSxFQUFDLEVBQUU7OEJBQ1IsNEVBQUNJLFFBQU07d0JBQUNqQixTQUFTLEVBQUMscUJBQXFCO2tDQUFDLFdBQVM7Ozs7OzZCQUFTOzs7Ozt5QkFDeEQ7Ozs7O3FCQUNBOzs7Ozs7YUFDRSxDQUNYO0NBQ0Y7R0FyRktkLEtBQUs7QUF1RlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvV29yay9pbmRleC5qcz9mMzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhcnJvdyBmcm9tICdhc3NldHMvaWNvbnMvYXJyb3cuc3ZnJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCBpbWFnZTEgZnJvbSAnYXNzZXRzL2ltYWdlcy93b3JrMS5wbmcnXG5pbXBvcnQgaW1hZ2UyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvd29yazIucG5nJ1xuaW1wb3J0IGltYWdlMyBmcm9tICdhc3NldHMvaW1hZ2VzL3dvcmszLnBuZydcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8odGl0bGVSZWYuY3VycmVudCxcbiAgICAgIHsgeTogNDgsIG9wYWNpdHk6IDAgfSxcbiAgICAgIHsgc2Nyb2xsVHJpZ2dlcjogdGl0bGVSZWYuY3VycmVudCwgZGVsYXk6IC4yNSwgeTogMCwgb3BhY2l0eTogMSB9XG4gICAgKVxuXG4gICAgZ3NhcC5mcm9tVG8oXCIubGlzdC1pdGVtXCIsXG4gICAgICB7IG9wYWNpdHk6IDAsIHk6IDEwMCB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiBcIi5saXN0LWl0ZW1cIiwgc3RhZ2dlcjogLjEsIGR1cmF0aW9uOiAuNSwgZGVsYXk6IC40LCBvcGFjaXR5OiAxLCB5OiAwIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5jYXJvdXNlbC1pbWFnZXMgZGl2XCIsXG4gICAgICB7IHg6IDEyMCwgeTogMTIwLCBvcGFjaXR5OiAwLCB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmNhcm91c2VsLWltYWdlc1wiIH0sIHN0YWdnZXI6IC4yLCBkdXJhdGlvbjogMSwgZGVsYXk6IC41LCB4OiAwLCB5OiAwLCBvcGFjaXR5OiAuNSwgfVxuICAgIClcblxuICAgIGdzYXAuZnJvbVRvKFwiLmNhcm91c2VsLWltYWdlc1wiLFxuICAgICAgeyB4OiAxMDAsIHk6IDEwMCB9LFxuICAgICAgeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmNhcm91c2VsLWltYWdlc1wiLCBzY3J1YjogMSB9LCB4OiAtMTAwLCB5OiAtMjAwIH1cbiAgICApXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMud29ya30+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtc2VtaWJvbGQgdGV4dC1pdGFsaWMnIHJlZj17dGl0bGVSZWZ9Pldvcms8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLndvcmtfX2Nhcm91c2VsfSBjYXJvdXNlbC1pbWFnZXNgfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxLnNyY30gY2xhc3NOYW1lPXtzdHlsZXNbXCJ3b3JrX19jYXJvdXNlbF9fZmlyc3QtaW1hZ2VcIl19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTIuc3JjfSBjbGFzc05hbWU9e3N0eWxlc1tcIndvcmtfX2Nhcm91c2VsX19zZWNvbmQtaW1hZ2VcIl19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTMuc3JjfSBjbGFzc05hbWU9e3N0eWxlc1tcIndvcmtfX2Nhcm91c2VsX190aGlyZC1pbWFnZVwiXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLndvcmtfX2xpc3R9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtzdHlsZXMud29ya19fbGlzdF9faXRlbX0gbGlzdC1pdGVtYH0+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWl0YWxpYyB0ZXh0LWxpZ2h0Jz5JTk1FUkxZIC0gKFNPT04pPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy53b3JrX19saXN0X19pdGVtfSBsaXN0LWl0ZW1gfT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtaXRhbGljIHRleHQtbGlnaHQnPk9DVUZZIC0gKFNPT04pPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy53b3JrX19saXN0X19pdGVtfSBsaXN0LWl0ZW1gfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS8xMjc3MTg1OTEvQ2lyY3Vsby1TYXFyYVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtaXRhbGljIHRleHQtbGlnaHQnPkNJUkNVTE8gU0FRUkE8L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17YXJyb3cuc3JjfSBhbHQ9XCJjcmVhdGl2ZSBhcnJvdyBpY29uIGxpbmtcIiBjbGFzc05hbWU9XCJpY29uLW1kXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzLndvcmtfX2xpc3RfX2l0ZW19IGxpc3QtaXRlbWB9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9nYWxsZXJ5LzkwMjA5Njg3L0Fycm93LVVYVUktQ2FzZS1TdHVkeVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtaXRhbGljIHRleHQtbGlnaHQnPkFSUk9XPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy53b3JrX19saXN0X19pdGVtfSBsaXN0LWl0ZW1gfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS84NTI2NTA4Ny9Db2Rlc2lnbi0lMjhCcmFuZCUyOVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtaXRhbGljIHRleHQtbGlnaHQnPkNPREVTSUdOPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Fycm93LnNyY30gYWx0PVwiY3JlYXRpdmUgYXJyb3cgaWNvbiBsaW5rXCIgY2xhc3NOYW1lPVwiaWNvbi1tZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrX19jdGF9PlxuICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgYnRuLXByaW1hcnknPktub3cgbW9yZTwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJhcnJvdyIsInN0eWxlcyIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImdzYXAiLCJpbmRleCIsInRpdGxlUmVmIiwiZnJvbVRvIiwiY3VycmVudCIsInkiLCJvcGFjaXR5Iiwic2Nyb2xsVHJpZ2dlciIsImRlbGF5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwieCIsInRyaWdnZXIiLCJzY3J1YiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ3b3JrIiwiaDIiLCJyZWYiLCJkaXYiLCJ3b3JrX19jYXJvdXNlbCIsImltZyIsInNyYyIsInVsIiwid29ya19fbGlzdCIsImxpIiwid29ya19fbGlzdF9faXRlbSIsImEiLCJocmVmIiwicCIsImFsdCIsIndvcmtfX2N0YSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/Work/index.js\n"));

/***/ })

});