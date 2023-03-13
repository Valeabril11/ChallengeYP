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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 27,\n            columnNumber: 34\n        }, undefined);\n    }\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.1fr)\",\n                    marginLeft: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 69,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 68,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"aDg/KqYhZ+dS9fwCnlNxa/5dLOE=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNTO0FBQy9CO0FBQ0s7QUFDYjtBQUNnQztBQUloRSxNQUFNVSxXQUFXLENBQUNDLFFBQVU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdEO0lBQ2xCLE1BQU1FLFFBQVE7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDSDtJQUNELE1BQU1DLE9BQU9QLDZEQUFVQTtJQUN2QixJQUFJLENBQUNPLEtBQUtDLFNBQVMsRUFBRTtRQUFDLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQWlCLENBQUM7SUFFcEQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUM7SUFDbkQsTUFBTWEsNEJBQTRCLENBQUNDLFFBQVU7UUFDekNGLGlCQUFpQkUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQUU7SUFFckMsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDM0QsTUFBTW1CLGdDQUFnQyxDQUFDTCxRQUFVO1FBQzdDSSxxQkFBcUJKLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQztJQUlKLE1BQU1QLFlBQVlELEtBQUtDLFNBQVMsQ0FBQ1csR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDL0MscUJBQ0ksOERBQUNYO3NCQUNHLDRFQUFDQTtnQkFBSVksT0FBTztvQkFBRUMsU0FBUztvQkFBUUMscUJBQXFCO29CQUFxQkMsWUFBWTtnQkFBTzs7a0NBRXhGLDhEQUFDL0IsaURBQU1BO2tDQUNGMkIsU0FBU0ssRUFBRTs7Ozs7O2tDQUdoQiw4REFBQzlCLHFEQUFVQTtrQ0FBRXlCLFNBQVNNLElBQUk7Ozs7OztrQ0FFMUIsOERBQUNqQjt3QkFBSVksT0FBTzs0QkFBRU0sV0FBVzt3QkFBTzs7MENBRTVCLDhEQUFDakMsb0RBQVNBO2dDQUFDa0MsTUFBSztnQ0FDWkMsYUFBWTtnQ0FDWkosSUFBSSxpQkFBNkIsT0FBWkwsU0FBU0ssRUFBRTtnQ0FDaENLLFVBQVVsQjs7Ozs7OzBDQUdkLDhEQUFDbEIsb0RBQVNBO2dDQUFDa0MsTUFBSztnQ0FDWkMsYUFBWTtnQ0FDWkosSUFBSSxxQkFBaUMsT0FBWkwsU0FBU0ssRUFBRTtnQ0FDcENLLFVBQVVaOzs7Ozs7Ozs7Ozs7a0NBSWxCLDhEQUFDVDt3QkFBSVksT0FBTzs0QkFBRUcsWUFBWTs0QkFBT0csV0FBVzt3QkFBTztrQ0FFL0MsNEVBQUM5QixxRUFBb0JBOzRCQUFDa0MsYUFBYTdCLDBFQUFZQTtzQ0FDM0MsNEVBQUNOLDJEQUFVQTs7Ozs7Ozs7Ozs7Ozs7O29CQUlsQlUsTUFBTWEsR0FBRyxDQUFDLENBQUNhLHdCQUNSLDhEQUFDdkI7NEJBQUlZLE9BQU87Z0NBQUVHLFlBQVk7NEJBQU87OzhDQUU3Qiw4REFBQ2Y7OENBQ0l1QjttQ0FESyxHQUFrQkEsT0FBZlosU0FBU0ssRUFBRSxFQUFDLEtBQVcsT0FBUk87Ozs7OzhDQUc1Qiw4REFBQ3ZCOzhDQUNHLDRFQUFDUixnREFBT0E7d0NBQUN3QixJQUFJLEdBQVlMLE9BQVRmLE9BQU0sS0FBa0IyQixPQUFmWixTQUFTSyxFQUFFLEVBQUMsS0FBVyxPQUFSTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVwRTtJQUlBLHFCQUNJLDhEQUFDdkI7a0JBQ0lEOzs7Ozs7QUFHYjtHQXpGTUw7O1FBZ0JXSCx5REFBVUE7OztLQWhCckJHO0FBMkZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvUHJvZHVjdG8uanM/OGQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCBWYWxvcmVzIGZyb20gXCIuL1ZhbG9yZXNcIjtcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbmFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IG1lc2VzID0gW1xyXG4gICAgICAgIFwiRW5lcm9cIixcclxuICAgICAgICBcIkZlYnJlcm9cIixcclxuICAgICAgICBcIk1hcnpvXCIsXHJcbiAgICAgICAgXCJBYnJpbFwiLFxyXG4gICAgICAgIFwiTWF5b1wiLFxyXG4gICAgICAgIFwiSnVuaW9cIixcclxuICAgICAgICBcIkp1bGlvXCIsXHJcbiAgICAgICAgXCJBZ29zdG9cIixcclxuICAgICAgICBcIlNlcHRpZW1icmVcIixcclxuICAgICAgICBcIk9jdHVicmVcIixcclxuICAgICAgICBcIk5vdmllbWJyZVwiLFxyXG4gICAgICAgIFwiRGljaWVtYnJlXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldERhdGEoKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3Rvcykge3JldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47fVxyXG5cclxuICAgIGNvbnN0IFtwcmVjaW9JbmljaWFsLCBzZXRQcmVjaW9JbmljaWFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByZWNpb0luaWNpYWwoZXZlbnQudGFyZ2V0LnZhbHVlKTt9O1xyXG5cclxuICAgICAgICBjb25zdCBbcG9yY2VudGFqZUF1bWVudG8sIHNldFBvcmNlbnRhamVBdW1lbnRvXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcmNlbnRhamVBdW1lbnRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG9zID0gZGF0YS5wcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgxNiwgMC4xZnIpJywgbWFyZ2luTGVmdDogJzMwcHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntwcm9kdWN0by5uYW1lfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxOHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHByZWNpb0luaWNpYWxfJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcG9yY2VudGFqZUF1bWVudG9fJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcsIG1hcmdpblRvcDogJzE4cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc2VzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbG9yZXMgaWQ9e2Ake2NhbmFsfS0ke3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2R1Y3Rvc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiQWRhcHRlckRheWpzIiwiUHJvZHVjdG8iLCJwcm9wcyIsImNhbmFsIiwibWVzZXMiLCJkYXRhIiwicHJvZHVjdG9zIiwiZGl2IiwicHJlY2lvSW5pY2lhbCIsInNldFByZWNpb0luaWNpYWwiLCJoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvcmNlbnRhamVBdW1lbnRvIiwic2V0UG9yY2VudGFqZUF1bWVudG8iLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbkxlZnQiLCJpZCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImRhdGVBZGFwdGVyIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});