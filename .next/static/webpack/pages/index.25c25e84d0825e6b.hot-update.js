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

/***/ "./src/containers/Producto.js":
/*!************************************!*\
  !*** ./src/containers/Producto.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/containers/Valores.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Producto = ()=>{\n    _s();\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    console.log(data.productos);\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n            lineNumber: 25,\n            columnNumber: 16\n        }, undefined);\n    }\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"meses\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: producto.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"10px\"\n                            },\n                            children: meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        element,\n                                        \"   \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            id: \"\".concat(producto.id, \"-\").concat(element)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    ]\n                                }, \"\".concat(producto.id, \"-\").concat(element), true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Qcm9kdWN0by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDYjtBQUloQyxNQUFNRyxXQUFXLElBQU07O0lBQ25CLE1BQU1DLFFBQVE7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDSDtJQUNELE1BQU1DLE9BQU9KLDZEQUFVQTtJQUN2QkssUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxTQUFTO0lBQzFCLElBQUksQ0FBQ0gsS0FBS0csU0FBUyxFQUFFO1FBQ2pCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2hCLENBQUM7SUFDRCxNQUFNRCxZQUFZSCxLQUFLRyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQy9DLHFCQUNJOztnQkFBRTs4QkFFRSw4REFBQ0Y7b0JBQUlHLE9BQU87d0JBQUVDLFNBQVM7d0JBQVFDLFlBQVk7b0JBQVM7O3NDQUNoRCw4REFBQ0M7c0NBQUlKLFNBQVNLLElBQUk7Ozs7OztzQ0FDbEIsOERBQUNQOzRCQUFJRyxPQUFPO2dDQUFFSyxZQUFZOzRCQUFPO3NDQUM1QmIsTUFBTU0sR0FBRyxDQUFDLENBQUNRLHdCQUNSLDhEQUFDVDs7d0NBQ0lTO3dDQUFRO3NEQUFHLDhEQUFDaEIsZ0RBQU9BOzRDQUFDaUIsSUFBSSxHQUFrQkQsT0FBZlAsU0FBU1EsRUFBRSxFQUFDLEtBQVcsT0FBUkQ7Ozs7Ozs7bUNBRHJDLEdBQWtCQSxPQUFmUCxTQUFTUSxFQUFFLEVBQUMsS0FBVyxPQUFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3BEO0lBRUEscUJBQ0ksOERBQUNUO2tCQUNJRDs7Ozs7O0FBR2I7R0E1Q01MOztRQWVXRix5REFBVUE7OztLQWZyQkU7QUE4Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHJvZHVjdG8uanM/YTM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCBWYWxvcmVzIGZyb20gXCIuL1ZhbG9yZXNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXNlcyA9IFtcclxuICAgICAgICBcIkVuZXJvXCIsXHJcbiAgICAgICAgXCJGZWJyZXJvXCIsXHJcbiAgICAgICAgXCJNYXJ6b1wiLFxyXG4gICAgICAgIFwiQWJyaWxcIixcclxuICAgICAgICBcIk1heW9cIixcclxuICAgICAgICBcIkp1bmlvXCIsXHJcbiAgICAgICAgXCJKdWxpb1wiLFxyXG4gICAgICAgIFwiQWdvc3RvXCIsXHJcbiAgICAgICAgXCJTZXB0aWVtYnJlXCIsXHJcbiAgICAgICAgXCJPY3R1YnJlXCIsXHJcbiAgICAgICAgXCJOb3ZpZW1icmVcIixcclxuICAgICAgICBcIkRpY2llbWJyZVwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXREYXRhKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEucHJvZHVjdG9zKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3Rvcykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBkYXRhLnByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgbWVzZXNcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0by5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lc2VzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fSAgIDxWYWxvcmVzIGlkPXtgJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0b3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VHZXREYXRhIiwiVmFsb3JlcyIsIlByb2R1Y3RvIiwibWVzZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RvcyIsImRpdiIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImgyIiwibmFtZSIsIm1hcmdpbkxlZnQiLCJlbGVtZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Producto.js\n"));

/***/ })

});