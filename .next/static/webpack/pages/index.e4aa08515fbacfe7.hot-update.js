/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./components/organisms/Awards/styles.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./components/organisms/Awards/styles.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_awards__Zr3Ke {\\n  padding: 5rem;\\n}\\n@media only screen and (min-width: 2160px) {\\n  .styles_awards__Zr3Ke {\\n    padding: 10rem;\\n  }\\n}\\n.styles_awards__images__GT5M6 {\\n  margin-top: 5rem;\\n}\\n.styles_awards__images__item__CfQuc {\\n  width: 600px;\\n  max-width: 100%;\\n  position: relative;\\n}\\n.styles_awards__images__item__CfQuc p {\\n  margin: 2rem;\\n  position: absolute;\\n  z-index: 1;\\n  -webkit-animation: styles_pe__GF_hz 5s infinite;\\n          animation: styles_pe__GF_hz 5s infinite;\\n}\\n@-webkit-keyframes styles_pe__GF_hz {\\n  50% {\\n    transform: scale(1.2);\\n  }\\n}\\n@keyframes styles_pe__GF_hz {\\n  50% {\\n    transform: scale(1.2);\\n  }\\n}\\n.styles_awards__images__item__CfQuc:nth-child(1) {\\n  margin-left: auto;\\n  margin-right: 5rem;\\n  transform: rotateZ(2deg);\\n}\\n.styles_awards__images__item__CfQuc:nth-child(2) {\\n  margin-left: 5rem;\\n  transform: rotateZ(-2deg) translateY(-2rem);\\n  z-index: -1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/organisms/Awards/styles.module.scss\",\"webpack://styles/brakpoints.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;AADF;ACeI;EDfJ;IAII,cAAA;EAAF;AACF;AAEE;EACE,gBAAA;AAAJ;AACI;EACE,YAAA;EACA,eAAA;EACA,kBAAA;AACN;AACM;EACE,YAAA;EACA,kBAAA;EACA,UAAA;EACA,+CAAA;UAAA,uCAAA;AACR;AACQ;EACE;IACE,qBAAA;EACV;AACF;AAJQ;EACE;IACE,qBAAA;EACV;AACF;AAGM;EACE,iBAAA;EACA,kBAAA;EACA,wBAAA;AADR;AAIM;EACE,iBAAA;EACA,2CAAA;EACA,WAAA;AAFR\",\"sourcesContent\":[\"@import \\\"../../../styles/brakpoints.scss\\\";\\n\\n.awards {\\n  padding: 5rem;\\n\\n  @include respond(ultrawide) {\\n    padding: 10rem;\\n  }\\n\\n  &__images {\\n    margin-top: 5rem;\\n    &__item {\\n      width: 600px;\\n      max-width: 100%;\\n      position: relative;\\n\\n      p {\\n        margin: 2rem;\\n        position: absolute;\\n        z-index: 1;\\n        animation: pe 5s infinite;\\n\\n        @keyframes pe {\\n          50% {\\n            transform: scale(1.2);\\n          }\\n        }\\n      }\\n\\n      &:nth-child(1) {\\n        margin-left: auto;\\n        margin-right: 5rem;\\n        transform: rotateZ(2deg);\\n      }\\n\\n      &:nth-child(2) {\\n        margin-left: 5rem;\\n        transform: rotateZ(-2deg) translateY(-2rem);\\n        z-index: -1;\\n      }\\n    }\\n  }\\n}\",\"@mixin respond($breakpoint) {\\n  @if $breakpoint == tablet {\\n    @media only screen and (min-width: 680px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == desktop {\\n    @media only screen and (min-width: 1024px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == wide {\\n    @media only screen and (min-width: 1512px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == ultrawide {\\n    @media only screen and (min-width: 2160px) {\\n      @content;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"awards\": \"styles_awards__Zr3Ke\",\n\t\"awards__images\": \"styles_awards__images__GT5M6\",\n\t\"awards__images__item\": \"styles_awards__images__item__CfQuc\",\n\t\"pe\": \"styles_pe__GF_hz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL2NvbXBvbmVudHMvb3JnYW5pc21zL0F3YXJkcy9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5S0FBcUY7QUFDL0g7QUFDQTtBQUNBLGlFQUFpRSxrQkFBa0IsR0FBRyw4Q0FBOEMsMkJBQTJCLHFCQUFxQixLQUFLLEdBQUcsaUNBQWlDLHFCQUFxQixHQUFHLHVDQUF1QyxpQkFBaUIsb0JBQW9CLHVCQUF1QixHQUFHLHlDQUF5QyxpQkFBaUIsdUJBQXVCLGVBQWUsb0RBQW9ELG9EQUFvRCxHQUFHLHVDQUF1QyxTQUFTLDRCQUE0QixLQUFLLEdBQUcsK0JBQStCLFNBQVMsNEJBQTRCLEtBQUssR0FBRyxvREFBb0Qsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsR0FBRyxvREFBb0Qsc0JBQXNCLGdEQUFnRCxnQkFBZ0IsR0FBRyxPQUFPLGtKQUFrSixVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUscUVBQXFFLGFBQWEsa0JBQWtCLG1DQUFtQyxxQkFBcUIsS0FBSyxpQkFBaUIsdUJBQXVCLGVBQWUscUJBQXFCLHdCQUF3QiwyQkFBMkIsYUFBYSx1QkFBdUIsNkJBQTZCLHFCQUFxQixvQ0FBb0MsMkJBQTJCLGlCQUFpQixvQ0FBb0MsYUFBYSxXQUFXLFNBQVMsMEJBQTBCLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLFNBQVMsMEJBQTBCLDRCQUE0QixzREFBc0Qsc0JBQXNCLFNBQVMsT0FBTyxLQUFLLEdBQUcsZ0NBQWdDLCtCQUErQixpREFBaUQsaUJBQWlCLE9BQU8sS0FBSyxnQ0FBZ0Msa0RBQWtELGlCQUFpQixPQUFPLEtBQUssNkJBQTZCLGtEQUFrRCxpQkFBaUIsT0FBTyxLQUFLLGtDQUFrQyxrREFBa0QsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMxckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Bd2FyZHMvc3R5bGVzLm1vZHVsZS5zY3NzPzJkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfYXdhcmRzX19acjNLZSB7XFxuICBwYWRkaW5nOiA1cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIxNjBweCkge1xcbiAgLnN0eWxlc19hd2FyZHNfX1pyM0tlIHtcXG4gICAgcGFkZGluZzogMTByZW07XFxuICB9XFxufVxcbi5zdHlsZXNfYXdhcmRzX19pbWFnZXNfX0dUNU02IHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcbi5zdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0eWxlc19hd2FyZHNfX2ltYWdlc19faXRlbV9fQ2ZRdWMgcCB7XFxuICBtYXJnaW46IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHN0eWxlc19wZV9fR0ZfaHogNXMgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc3R5bGVzX3BlX19HRl9oeiA1cyBpbmZpbml0ZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHN0eWxlc19wZV9fR0ZfaHoge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHN0eWxlc19wZV9fR0ZfaHoge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbn1cXG4uc3R5bGVzX2F3YXJkc19faW1hZ2VzX19pdGVtX19DZlF1YzpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooMmRlZyk7XFxufVxcbi5zdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigtMmRlZykgdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB6LWluZGV4OiAtMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvb3JnYW5pc21zL0F3YXJkcy9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvYnJha3BvaW50cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBQTtBQURGO0FDZUk7RURmSjtJQUlJLGNBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FBQ1I7QUFDUTtFQUNFO0lBQ0UscUJBQUE7RUFDVjtBQUNGO0FBSlE7RUFDRTtJQUNFLHFCQUFBO0VBQ1Y7QUFDRjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRFI7QUFJTTtFQUNFLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL2JyYWtwb2ludHMuc2Nzc1xcXCI7XFxuXFxuLmF3YXJkcyB7XFxuICBwYWRkaW5nOiA1cmVtO1xcblxcbiAgQGluY2x1ZGUgcmVzcG9uZCh1bHRyYXdpZGUpIHtcXG4gICAgcGFkZGluZzogMTByZW07XFxuICB9XFxuXFxuICAmX19pbWFnZXMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAmX19pdGVtIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBwIHtcXG4gICAgICAgIG1hcmdpbjogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBhbmltYXRpb246IHBlIDVzIGluZmluaXRlO1xcblxcbiAgICAgICAgQGtleWZyYW1lcyBwZSB7XFxuICAgICAgICAgIDUwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMmRlZykgdHJhbnNsYXRlWSgtMnJlbSk7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXCJAbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xcbiAgQGlmICRicmVha3BvaW50ID09IHRhYmxldCB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IGRlc2t0b3Age1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkZSB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUxMnB4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB1bHRyYXdpZGUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIxNjBweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImF3YXJkc1wiOiBcInN0eWxlc19hd2FyZHNfX1pyM0tlXCIsXG5cdFwiYXdhcmRzX19pbWFnZXNcIjogXCJzdHlsZXNfYXdhcmRzX19pbWFnZXNfX0dUNU02XCIsXG5cdFwiYXdhcmRzX19pbWFnZXNfX2l0ZW1cIjogXCJzdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjXCIsXG5cdFwicGVcIjogXCJzdHlsZXNfcGVfX0dGX2h6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./components/organisms/Awards/styles.module.scss\n"));

/***/ })

});