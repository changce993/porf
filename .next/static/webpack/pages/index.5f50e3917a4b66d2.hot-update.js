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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_awards__Zr3Ke {\\n  padding: 2rem;\\n}\\n@media only screen and (min-width: 680px) {\\n  .styles_awards__Zr3Ke {\\n    padding: 5rem;\\n  }\\n}\\n@media only screen and (min-width: 2160px) {\\n  .styles_awards__Zr3Ke {\\n    padding: 10rem;\\n  }\\n}\\n.styles_awards__images__GT5M6 {\\n  margin-top: 5rem;\\n}\\n.styles_awards__images__item__CfQuc {\\n  width: 600px;\\n  max-width: 100%;\\n  position: relative;\\n}\\n.styles_awards__images__item__CfQuc img {\\n  width: 100%;\\n}\\n.styles_awards__images__item__CfQuc p {\\n  margin: 2rem;\\n  position: absolute;\\n  z-index: 1;\\n}\\n.styles_awards__images__item__CfQuc:nth-child(1) {\\n  margin-left: auto;\\n  margin-right: 5rem;\\n}\\n.styles_awards__images__item__CfQuc:nth-child(2) {\\n  margin-left: 5rem;\\n  transform: translateY(-2rem);\\n  z-index: -1;\\n}\\n@media only screen and (min-width: 680px) {\\n  .styles_awards__images__item__CfQuc:nth-child(1) {\\n    margin-left: auto;\\n    margin-right: 0;\\n  }\\n  .styles_awards__images__item__CfQuc:nth-child(2) {\\n    margin-left: 5rem;\\n    transform: translateY(-2rem);\\n    z-index: -1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/organisms/Awards/styles.module.scss\",\"webpack://styles/brakpoints.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;AADF;ACAI;EDAJ;IAII,aAAA;EAAF;AACF;ACUI;EDfJ;IAQI,cAAA;EACF;AACF;AACE;EACE,gBAAA;AACJ;AACI;EACE,YAAA;EACA,eAAA;EACA,kBAAA;AACN;AACM;EACE,WAAA;AACR;AAEM;EACE,YAAA;EACA,kBAAA;EACA,UAAA;AAAR;AAGM;EACE,iBAAA;EACA,kBAAA;AADR;AAIM;EACE,iBAAA;EACA,4BAAA;EACA,WAAA;AAFR;ACnCI;EDyCI;IACE,iBAAA;IACA,eAAA;EAHR;EAMM;IACE,iBAAA;IACA,4BAAA;IACA,WAAA;EAJR;AACF\",\"sourcesContent\":[\"@import \\\"../../../styles/brakpoints.scss\\\";\\n\\n.awards {\\n  padding: 2rem;\\n\\n  @include respond(tablet) {\\n    padding: 5rem;\\n  }\\n\\n  @include respond(ultrawide) {\\n    padding: 10rem;\\n  }\\n\\n  &__images {\\n    margin-top: 5rem;\\n\\n    &__item {\\n      width: 600px;\\n      max-width: 100%;\\n      position: relative;\\n\\n      img {\\n        width: 100%;\\n      }\\n\\n      p {\\n        margin: 2rem;\\n        position: absolute;\\n        z-index: 1;\\n      }\\n\\n      &:nth-child(1) {\\n        margin-left: auto;\\n        margin-right: 5rem;\\n      }\\n\\n      &:nth-child(2) {\\n        margin-left: 5rem;\\n        transform: translateY(-2rem);\\n        z-index: -1;\\n      }\\n\\n      @include respond(tablet) {\\n        &:nth-child(1) {\\n          margin-left: auto;\\n          margin-right: 0;\\n        }\\n  \\n        &:nth-child(2) {\\n          margin-left: 5rem;\\n          transform: translateY(-2rem);\\n          z-index: -1;\\n        }\\n      }\\n    }\\n  }\\n}\",\"@mixin respond($breakpoint) {\\n  @if $breakpoint == tablet {\\n    @media only screen and (min-width: 680px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == desktop {\\n    @media only screen and (min-width: 1024px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == wide {\\n    @media only screen and (min-width: 1512px) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == ultrawide {\\n    @media only screen and (min-width: 2160px) {\\n      @content;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"awards\": \"styles_awards__Zr3Ke\",\n\t\"awards__images\": \"styles_awards__images__GT5M6\",\n\t\"awards__images__item\": \"styles_awards__images__item__CfQuc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL2NvbXBvbmVudHMvb3JnYW5pc21zL0F3YXJkcy9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5S0FBcUY7QUFDL0g7QUFDQTtBQUNBLGlFQUFpRSxrQkFBa0IsR0FBRyw2Q0FBNkMsMkJBQTJCLG9CQUFvQixLQUFLLEdBQUcsOENBQThDLDJCQUEyQixxQkFBcUIsS0FBSyxHQUFHLGlDQUFpQyxxQkFBcUIsR0FBRyx1Q0FBdUMsaUJBQWlCLG9CQUFvQix1QkFBdUIsR0FBRywyQ0FBMkMsZ0JBQWdCLEdBQUcseUNBQXlDLGlCQUFpQix1QkFBdUIsZUFBZSxHQUFHLG9EQUFvRCxzQkFBc0IsdUJBQXVCLEdBQUcsb0RBQW9ELHNCQUFzQixpQ0FBaUMsZ0JBQWdCLEdBQUcsNkNBQTZDLHNEQUFzRCx3QkFBd0Isc0JBQXNCLEtBQUssc0RBQXNELHdCQUF3QixtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxPQUFPLGtKQUFrSixVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUsscUVBQXFFLGFBQWEsa0JBQWtCLGdDQUFnQyxvQkFBb0IsS0FBSyxtQ0FBbUMscUJBQXFCLEtBQUssaUJBQWlCLHVCQUF1QixpQkFBaUIscUJBQXFCLHdCQUF3QiwyQkFBMkIsZUFBZSxzQkFBc0IsU0FBUyxhQUFhLHVCQUF1Qiw2QkFBNkIscUJBQXFCLFNBQVMsMEJBQTBCLDRCQUE0Qiw2QkFBNkIsU0FBUywwQkFBMEIsNEJBQTRCLHVDQUF1QyxzQkFBc0IsU0FBUyxvQ0FBb0MsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsV0FBVyw4QkFBOEIsOEJBQThCLHlDQUF5Qyx3QkFBd0IsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLGdDQUFnQywrQkFBK0IsaURBQWlELGlCQUFpQixPQUFPLEtBQUssZ0NBQWdDLGtEQUFrRCxpQkFBaUIsT0FBTyxLQUFLLDZCQUE2QixrREFBa0QsaUJBQWlCLE9BQU8sS0FBSyxrQ0FBa0Msa0RBQWtELGlCQUFpQixPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDaGpHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0F3YXJkcy9zdHlsZXMubW9kdWxlLnNjc3M/MmRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19hd2FyZHNfX1pyM0tlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcXG4gIC5zdHlsZXNfYXdhcmRzX19acjNLZSB7XFxuICAgIHBhZGRpbmc6IDVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjE2MHB4KSB7XFxuICAuc3R5bGVzX2F3YXJkc19fWnIzS2Uge1xcbiAgICBwYWRkaW5nOiAxMHJlbTtcXG4gIH1cXG59XFxuLnN0eWxlc19hd2FyZHNfX2ltYWdlc19fR1Q1TTYge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuLnN0eWxlc19hd2FyZHNfX2ltYWdlc19faXRlbV9fQ2ZRdWMge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3R5bGVzX2F3YXJkc19faW1hZ2VzX19pdGVtX19DZlF1YyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjIHAge1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnN0eWxlc19hd2FyZHNfX2ltYWdlc19faXRlbV9fQ2ZRdWM6bnRoLWNoaWxkKDEpIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbn1cXG4uc3R5bGVzX2F3YXJkc19faW1hZ2VzX19pdGVtX19DZlF1YzpudGgtY2hpbGQoMikge1xcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgei1pbmRleDogLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcXG4gIC5zdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjOm50aC1jaGlsZCgxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuc3R5bGVzX2F3YXJkc19faW1hZ2VzX19pdGVtX19DZlF1YzpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL29yZ2FuaXNtcy9Bd2FyZHMvc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL2JyYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7QUFERjtBQ0FJO0VEQUo7SUFJSSxhQUFBO0VBQUY7QUFDRjtBQ1VJO0VEZko7SUFRSSxjQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQ007RUFDRSxXQUFBO0FBQ1I7QUFFTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFBUjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBSU07RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQUZSO0FDbkNJO0VEeUNJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBSFI7RUFNTTtJQUNFLGlCQUFBO0lBQ0EsNEJBQUE7SUFDQSxXQUFBO0VBSlI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zdHlsZXMvYnJha3BvaW50cy5zY3NzXFxcIjtcXG5cXG4uYXdhcmRzIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBAaW5jbHVkZSByZXNwb25kKHRhYmxldCkge1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgcmVzcG9uZCh1bHRyYXdpZGUpIHtcXG4gICAgcGFkZGluZzogMTByZW07XFxuICB9XFxuXFxuICAmX19pbWFnZXMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgbWFyZ2luOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIH1cXG5cXG4gICAgICBAaW5jbHVkZSByZXNwb25kKHRhYmxldCkge1xcbiAgICAgICAgJjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgfVxcbiAgXFxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXCJAbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xcbiAgQGlmICRicmVha3BvaW50ID09IHRhYmxldCB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IGRlc2t0b3Age1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkZSB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUxMnB4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB1bHRyYXdpZGUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIxNjBweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImF3YXJkc1wiOiBcInN0eWxlc19hd2FyZHNfX1pyM0tlXCIsXG5cdFwiYXdhcmRzX19pbWFnZXNcIjogXCJzdHlsZXNfYXdhcmRzX19pbWFnZXNfX0dUNU02XCIsXG5cdFwiYXdhcmRzX19pbWFnZXNfX2l0ZW1cIjogXCJzdHlsZXNfYXdhcmRzX19pbWFnZXNfX2l0ZW1fX0NmUXVjXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./components/organisms/Awards/styles.module.scss\n"));

/***/ })

});