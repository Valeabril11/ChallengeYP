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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/containers/Valores.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Producto = ()=>{\n    _s();\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    console.log(data.productos);\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n            lineNumber: 25,\n            columnNumber: 16\n        }, undefined);\n    }\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: producto.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, undefined),\n                meses.map((mes)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, mes, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            ]\n        }, producto.id, true, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 11\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\containers\\\\Producto.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Qcm9kdWN0by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDYjtBQUloQyxNQUFNRyxXQUFXLElBQU07O0lBQ25CLE1BQU1DLFFBQVE7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNILE1BQU1DLE9BQU9KLDZEQUFVQTtJQUN2QkssUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxTQUFTO0lBQzFCLElBQUksQ0FBQ0gsS0FBS0csU0FBUyxFQUFFO1FBQ2pCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUNILE1BQU1ELFlBQVlILEtBQUtHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDL0MscUJBQ0UsOERBQUNGOzs4QkFDQyw4REFBQ0c7OEJBQUlELFNBQVNFLElBQUk7Ozs7Ozs4QkFDbEIsOERBQUNDOzs7OztnQkFHQVYsTUFBTU0sR0FBRyxDQUFDLENBQUNLLE1BQU07a0NBQ2QsOERBQUNiLGdEQUFPQSxNQUFNYTs7Ozs7Z0JBQ2xCOztXQVBRSixTQUFTSyxFQUFFOzs7OztJQVd6QjtJQUVBLHFCQUNFLDhEQUFDUDtrQkFDRUQ7Ozs7OztBQUdYO0dBeENNTDs7UUFlV0YseURBQVVBOzs7S0FmckJFO0FBMENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXJzL1Byb2R1Y3RvLmpzP2EzNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlR2V0RGF0YSBmcm9tIFwiLi4vaG9va3MvdXNlR2V0RGF0YVwiO1xyXG5pbXBvcnQgVmFsb3JlcyBmcm9tIFwiLi9WYWxvcmVzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVzZXMgPSBbXHJcbiAgICAgICAgXCJFbmVyb1wiLFxyXG4gICAgICAgIFwiRmVicmVyb1wiLFxyXG4gICAgICAgIFwiTWFyem9cIixcclxuICAgICAgICBcIkFicmlsXCIsXHJcbiAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgXCJKdW5pb1wiLFxyXG4gICAgICAgIFwiSnVsaW9cIixcclxuICAgICAgICBcIkFnb3N0b1wiLFxyXG4gICAgICAgIFwiU2VwdGllbWJyZVwiLFxyXG4gICAgICAgIFwiT2N0dWJyZVwiLFxyXG4gICAgICAgIFwiTm92aWVtYnJlXCIsXHJcbiAgICAgICAgXCJEaWNpZW1icmVcIixcclxuICAgICAgXTtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXREYXRhKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEucHJvZHVjdG9zKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3Rvcykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3RvcyA9IGRhdGEucHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3RvLmlkfT5cclxuICAgICAgICAgICAgPGgyPntwcm9kdWN0by5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAge21lc2VzLm1hcCgobWVzKT0+e1xyXG4gICAgICAgICAgICAgICAgPFZhbG9yZXMga2V5PXttZXN9Lz4gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9kdWN0b3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiUHJvZHVjdG8iLCJtZXNlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdG9zIiwiZGl2IiwibWFwIiwicHJvZHVjdG8iLCJoMiIsIm5hbWUiLCJwIiwibWVzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Producto.js\n"));

/***/ })

});