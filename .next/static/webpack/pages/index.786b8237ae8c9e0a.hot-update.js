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

/***/ "./components/organisms/About/index.js":
/*!*********************************************!*\
  !*** ./components/organisms/About/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/organisms/About/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_images_ME_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/assets/images/ME.png */ \"./public/assets/images/ME.png\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(imageRef.current, {\n            opacity: 0,\n            y: 300,\n            scale: 2.5,\n            rotateZ: 8\n        }, {\n            scrollTrigger: imageRef.current,\n            opacity: 1,\n            duration: 1,\n            y: 0,\n            scale: 2,\n            rotateZ: 10\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(imageRef.current, {\n            y: -100,\n            rotateX: 40,\n            rotateY: 40,\n            rotateZ: 20,\n            scale: 2,\n            opacity: 1\n        }, {\n            scrollTrigger: {\n                scrub: 1\n            },\n            y: 400,\n            rotateX: -40,\n            rotateY: -40,\n            rotateZ: -20,\n            scale: 1,\n            opacity: .4\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(titleRef.current, {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: titleRef.current,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(\".about__description span\", {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: \".about__description\",\n            stagger: .1,\n            delay: .3,\n            y: 0,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(\".about__cta span\", {\n            y: 48,\n            opacity: 0\n        }, {\n            scrollTrigger: \".about__cta\",\n            stagger: .1,\n            delay: .25,\n            y: 0,\n            opacity: 1\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about__content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xs text-semibold text-italic\",\n                        ref: titleRef,\n                        children: \"About us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-md text-regular about__description\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"I'M A PRODUCT DESIGNER\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"AND SOFTWARE DEVELOPER\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"FOCUSED ON CREATING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"INNOVATIVE DIGITAL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"PRODUCTS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: _public_assets_images_ME_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                alt: \"ricardo chance profile picture\",\n                ref: imageRef,\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about__image)\n            }, void 0, false, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about__cta),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-md text-regular text-right about__cta\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"MY PRINCIPAL SKILLS ARE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"FOCUSEND ON UI,\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"INTERACTION DESIGN AND\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"FRONTEND DEVELOPMENT. \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"CURRENTLY LEARNING A LOT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"OF WEBGL & 3D MODELING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about__cta__buttons),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/changcer/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-xs btn-primary\",\n                                    children: \"Linkedin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/_changce/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-xs btn-secondary\",\n                                    children: \"Personal Instagram\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ricardo/Desktop/creative-v2/components/organisms/About/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"KjgCM9eQSeH1VO2jK+Ep1BRxlDg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9BYm91dC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDQTtBQUNRO0FBQ3RCOztBQUUzQixJQUFNSyxLQUFLLEdBQUcsV0FBTTs7SUFFbEIsSUFBTUMsUUFBUSxHQUFHTCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFNTSxRQUFRLEdBQUdOLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTdCRCxnREFBUyxDQUFDLFdBQU07UUFDZEksNkNBQVcsQ0FBQ0UsUUFBUSxDQUFDRyxPQUFPLEVBQzFCO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1lBQUVDLENBQUMsRUFBRSxHQUFHO1lBQUVDLEtBQUssRUFBRSxHQUFHO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUUsRUFDOUM7WUFBRUMsYUFBYSxFQUFFUixRQUFRLENBQUNHLE9BQU87WUFBRUMsT0FBTyxFQUFFLENBQUM7WUFBRUssUUFBUSxFQUFFLENBQUM7WUFBRUosQ0FBQyxFQUFFLENBQUM7WUFBRUMsS0FBSyxFQUFFLENBQUM7WUFBRUMsT0FBTyxFQUFFLEVBQUU7U0FBRSxDQUMxRjtRQUVEVCw2Q0FBVyxDQUFDRSxRQUFRLENBQUNHLE9BQU8sRUFDMUI7WUFBRUUsQ0FBQyxFQUFFLENBQUMsR0FBRztZQUFFSyxPQUFPLEVBQUUsRUFBRTtZQUFFQyxPQUFPLEVBQUUsRUFBRTtZQUFFSixPQUFPLEVBQUUsRUFBRTtZQUFFRCxLQUFLLEVBQUUsQ0FBQztZQUFFRixPQUFPLEVBQUUsQ0FBQztTQUFFLEVBQ3hFO1lBQUVJLGFBQWEsRUFBRTtnQkFBRUksS0FBSyxFQUFFLENBQUM7YUFBRTtZQUFFUCxDQUFDLEVBQUUsR0FBRztZQUFFSyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFBRUosT0FBTyxFQUFFLENBQUMsRUFBRTtZQUFFRCxLQUFLLEVBQUUsQ0FBQztZQUFFRixPQUFPLEVBQUUsRUFB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QixTQUFTLEVBQUMsdUJBQXVCOzhDQUFDLG9CQUFrQjs7Ozs7eUNBQVM7Ozs7O3FDQUNuRTs7Ozs7OzZCQUNBOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNFLENBQ1g7Q0FDRjtHQTFFS2pCLEtBQUs7QUE0RVgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQWJvdXQvaW5kZXguanM/MjRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCBpbWFnZTIgZnJvbSAnL3B1YmxpYy9hc3NldHMvaW1hZ2VzL01FLnBuZydcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJ1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tVG8oaW1hZ2VSZWYuY3VycmVudCxcbiAgICAgIHsgb3BhY2l0eTogMCwgeTogMzAwLCBzY2FsZTogMi41LCByb3RhdGVaOiA4IH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IGltYWdlUmVmLmN1cnJlbnQsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxLCB5OiAwLCBzY2FsZTogMiwgcm90YXRlWjogMTAgfVxuICAgIClcblxuICAgIGdzYXAuZnJvbVRvKGltYWdlUmVmLmN1cnJlbnQsXG4gICAgICB7IHk6IC0xMDAsIHJvdGF0ZVg6IDQwLCByb3RhdGVZOiA0MCwgcm90YXRlWjogMjAsIHNjYWxlOiAyLCBvcGFjaXR5OiAxIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IHsgc2NydWI6IDEgfSwgeTogNDAwLCByb3RhdGVYOiAtNDAsIHJvdGF0ZVk6IC00MCwgcm90YXRlWjogLTIwLCBzY2FsZTogMSwgb3BhY2l0eTogLjQgfVxuICAgIClcblxuICAgIGdzYXAuZnJvbVRvKHRpdGxlUmVmLmN1cnJlbnQsXG4gICAgICB7IHk6IDQ4LCBvcGFjaXR5OiAwIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IHRpdGxlUmVmLmN1cnJlbnQsIGRlbGF5OiAuMjUsIHk6IDAsIG9wYWNpdHk6IDEgfVxuICAgIClcblxuICAgIGdzYXAuZnJvbVRvKFwiLmFib3V0X19kZXNjcmlwdGlvbiBzcGFuXCIsXG4gICAgICB7IHk6IDQ4LCBvcGFjaXR5OiAwIH0sXG4gICAgICB7IHNjcm9sbFRyaWdnZXI6IFwiLmFib3V0X19kZXNjcmlwdGlvblwiLCBzdGFnZ2VyOiAuMSwgZGVsYXk6IC4zLCB5OiAwLCBvcGFjaXR5OiAxIH1cbiAgICApXG5cbiAgICBnc2FwLmZyb21UbyhcIi5hYm91dF9fY3RhIHNwYW5cIixcbiAgICAgIHsgeTogNDgsIG9wYWNpdHk6IDAgfSxcbiAgICAgIHsgc2Nyb2xsVHJpZ2dlcjogXCIuYWJvdXRfX2N0YVwiLCBzdGFnZ2VyOiAuMSwgZGVsYXk6IC4yNSwgeTogMCwgb3BhY2l0eTogMSB9XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dF9fY29udGVudH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1zZW1pYm9sZCB0ZXh0LWl0YWxpYycgcmVmPXt0aXRsZVJlZn0+QWJvdXQgdXM8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbWQgdGV4dC1yZWd1bGFyIGFib3V0X19kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPHNwYW4+SSdNIEEgUFJPRFVDVCBERVNJR05FUjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5BTkQgU09GVFdBUkUgREVWRUxPUEVSPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkZPQ1VTRUQgT04gQ1JFQVRJTkc8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+SU5OT1ZBVElWRSBESUdJVEFMPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlBST0RVQ1RTPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2ltYWdlMi5zcmN9XG4gICAgICAgIGFsdD1cInJpY2FyZG8gY2hhbmNlIHByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0X19pbWFnZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRfX2N0YX0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1tZCB0ZXh0LXJlZ3VsYXIgdGV4dC1yaWdodCBhYm91dF9fY3RhJz5cbiAgICAgICAgICA8c3Bhbj5NWSBQUklOQ0lQQUwgU0tJTExTIEFSRTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5GT0NVU0VORCBPTiBVSSw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+SU5URVJBQ1RJT04gREVTSUdOIEFORDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5GUk9OVEVORCBERVZFTE9QTUVOVC4gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkNVUlJFTlRMWSBMRUFSTklORyBBIExPVDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5PRiBXRUJHTCAmIDNEIE1PREVMSU5HPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0X19jdGFfX2J1dHRvbnN9PlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jaGFuZ2Nlci8nPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgYnRuLXByaW1hcnknPkxpbmtlZGluPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9fY2hhbmdjZS8nPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgYnRuLXNlY29uZGFyeSc+UGVyc29uYWwgSW5zdGFncmFtPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJpbWFnZTIiLCJnc2FwIiwiaW5kZXgiLCJpbWFnZVJlZiIsInRpdGxlUmVmIiwiZnJvbVRvIiwiY3VycmVudCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJyb3RhdGVaIiwic2Nyb2xsVHJpZ2dlciIsImR1cmF0aW9uIiwicm90YXRlWCIsInJvdGF0ZVkiLCJzY3J1YiIsImRlbGF5Iiwic3RhZ2dlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhYm91dCIsImRpdiIsImFib3V0X19jb250ZW50IiwiaDIiLCJyZWYiLCJwIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsImFib3V0X19pbWFnZSIsImFib3V0X19jdGEiLCJhYm91dF9fY3RhX19idXR0b25zIiwiYSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/About/index.js\n"));

/***/ })

});