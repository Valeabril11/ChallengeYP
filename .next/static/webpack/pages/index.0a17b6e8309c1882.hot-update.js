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

/***/ "./src/component/Producto.js":
/*!***********************************!*\
  !*** ./src/component/Producto.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.5fr)\",\n                    marginLeft: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        style: {\n                            textAlign: \"center\",\n                            marginTop: \"50px\",\n                            marginRight: \"4px\"\n                        },\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange,\n                                style: {}\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNTO0FBQy9CO0FBQ0s7QUFDYjtBQUNnQztBQUloRSxNQUFNVSxXQUFXLENBQUNDLFFBQVU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdEO0lBQ2xCLE1BQU0sQ0FBQ0UsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVcsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsT0FBT1gsNkRBQVVBO0lBQ3ZCLElBQUksQ0FBQ1csS0FBS0MsU0FBUyxFQUFFO1FBQUUscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFBa0IsQ0FBQztJQUV0RCxNQUFNQyw0QkFBNEIsQ0FBQ0MsUUFBVTtRQUN6Q04saUJBQWlCTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdkM7SUFFQSxNQUFNQyxnQ0FBZ0MsQ0FBQ0gsUUFBVTtRQUM3Q1IscUJBQXFCUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDM0M7SUFJQSxNQUFNTCxZQUFZRCxLQUFLQyxTQUFTLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQy9DLHFCQUNJLDhEQUFDUDtzQkFDRyw0RUFBQ0E7Z0JBQUlRLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLHFCQUFxQjtvQkFBcUJDLFlBQVk7Z0JBQU87O2tDQUVwRiw4REFBQ0M7a0NBQUlMLFNBQVNNLEVBQUU7Ozs7OztrQ0FFcEIsOERBQUMvQixxREFBVUE7d0JBQUUwQixPQUFPOzRCQUFDTSxXQUFVOzRCQUFVQyxXQUFVOzRCQUFRQyxhQUFZO3dCQUN2RTtrQ0FBSVQsU0FBU1UsSUFBSTs7Ozs7O2tDQUVqQiw4REFBQ2pCO3dCQUFJUSxPQUFPOzRCQUFFTyxXQUFXO3dCQUFPOzswQ0FFNUIsOERBQUNsQyxvREFBU0E7Z0NBQUNxQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaTixJQUFJLGlCQUE2QixPQUFaTixTQUFTTSxFQUFFO2dDQUNoQ08sVUFBVW5COzs7Ozs7MENBR2QsOERBQUNwQixvREFBU0E7Z0NBQUNxQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaTixJQUFJLHFCQUFpQyxPQUFaTixTQUFTTSxFQUFFO2dDQUNwQ08sVUFBVWY7Z0NBQ1ZHLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O2tDQUtoQiw4REFBQ1I7d0JBQUlRLE9BQU87NEJBQUVHLFlBQVk7NEJBQU9JLFdBQVc7d0JBQU87a0NBRS9DLDRFQUFDL0IscUVBQW9CQTs0QkFBQ3FDLGFBQWFoQywwRUFBWUE7c0NBQzNDLDRFQUFDTiwyREFBVUE7Ozs7Ozs7Ozs7Ozs7OztvQkFJbEJjLE1BQU1TLEdBQUcsQ0FBQyxDQUFDZ0Isd0JBQ1IsOERBQUN0Qjs0QkFBSVEsT0FBTztnQ0FBRUcsWUFBWTs0QkFBTzs7OENBRTdCLDhEQUFDWDs4Q0FDSXNCO21DQURLLEdBQWtCQSxPQUFmZixTQUFTTSxFQUFFLEVBQUMsS0FBVyxPQUFSUzs7Ozs7OENBRzVCLDhEQUFDdEI7OENBQ0csNEVBQUNaLGdEQUFPQTt3Q0FDSnlCLElBQUksR0FBWU4sT0FBVGYsT0FBTSxLQUFrQjhCLE9BQWZmLFNBQVNNLEVBQUUsRUFBQyxLQUFXLE9BQVJTO3dDQUMvQjdCLG1CQUFtQkE7d0NBQ25CRSxlQUFlQTt3Q0FDZjRCLEtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV3ZDO0lBSUEscUJBQ0ksOERBQUN0QjtrQkFDSUQ7Ozs7OztBQUdiO0dBaEdNVDs7UUFrQldILHlEQUFVQTs7O0tBbEJyQkc7QUFrR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Qcm9kdWN0by5qcz84ZDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vyc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUdldERhdGEgZnJvbSBcIi4uL2hvb2tzL3VzZUdldERhdGFcIjtcclxuaW1wb3J0IFZhbG9yZXMgZnJvbSBcIi4vVmFsb3Jlc1wiO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2FuYWwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW3BvcmNlbnRhamVBdW1lbnRvLCBzZXRQb3JjZW50YWplQXVtZW50b10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwcmVjaW9JbmljaWFsLCBzZXRQcmVjaW9JbmljaWFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbWVzZXMgPSBbXHJcbiAgICAgICAgXCJFbmVyb1wiLFxyXG4gICAgICAgIFwiRmVicmVyb1wiLFxyXG4gICAgICAgIFwiTWFyem9cIixcclxuICAgICAgICBcIkFicmlsXCIsXHJcbiAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgXCJKdW5pb1wiLFxyXG4gICAgICAgIFwiSnVsaW9cIixcclxuICAgICAgICBcIkFnb3N0b1wiLFxyXG4gICAgICAgIFwiU2VwdGllbWJyZVwiLFxyXG4gICAgICAgIFwiT2N0dWJyZVwiLFxyXG4gICAgICAgIFwiTm92aWVtYnJlXCIsXHJcbiAgICAgICAgXCJEaWNpZW1icmVcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBkYXRhID0gdXNlR2V0RGF0YSgpXHJcbiAgICBpZiAoIWRhdGEucHJvZHVjdG9zKSB7IHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UHJlY2lvSW5pY2lhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFBvcmNlbnRhamVBdW1lbnRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG9zID0gZGF0YS5wcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgxNiwgMC41ZnIpJywgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pntwcm9kdWN0by5pZH08L2g2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpblRvcDonNTBweCcsIG1hcmdpblJpZ2h0Oic0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3Byb2R1Y3RvLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE4cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcHJlY2lvSW5pY2lhbF8ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Bwb3JjZW50YWplQXVtZW50b18ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnLCBtYXJnaW5Ub3A6ICcxOHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNlcy5tYXAoKGVsZW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxvcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtjYW5hbH0tJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcmNlbnRhamVBdW1lbnRvPXtwb3JjZW50YWplQXVtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lvSW5pY2lhbD17cHJlY2lvSW5pY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzID0ge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2R1Y3Rvc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiQWRhcHRlckRheWpzIiwiUHJvZHVjdG8iLCJwcm9wcyIsImNhbmFsIiwicG9yY2VudGFqZUF1bWVudG8iLCJzZXRQb3JjZW50YWplQXVtZW50byIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwibWVzZXMiLCJkYXRhIiwicHJvZHVjdG9zIiwiZGl2IiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbkxlZnQiLCJoNiIsImlkIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJkYXRlQWRhcHRlciIsImVsZW1lbnQiLCJtZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});