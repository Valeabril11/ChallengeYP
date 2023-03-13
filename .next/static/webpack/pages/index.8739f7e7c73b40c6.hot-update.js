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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.5fr)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        style: {\n                            textAlign: \"center\",\n                            marginTop: \"50px\",\n                            marginRight: \"4px\"\n                        },\n                        children: [\n                            producto.id,\n                            \" \",\n                            producto.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"2px\",\n                                marginLeft: \"2px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNTO0FBQy9CO0FBQ0s7QUFDYjtBQUNnQztBQUloRSxNQUFNVSxXQUFXLENBQUNDLFFBQVU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdEO0lBQ2xCLE1BQU0sQ0FBQ0UsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVcsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsT0FBT1gsNkRBQVVBO0lBQ3ZCLElBQUksQ0FBQ1csS0FBS0MsU0FBUyxFQUFFO1FBQUUscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFBa0IsQ0FBQztJQUV0RCxNQUFNQyw0QkFBNEIsQ0FBQ0MsUUFBVTtRQUN6Q04saUJBQWlCTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdkM7SUFFQSxNQUFNQyxnQ0FBZ0MsQ0FBQ0gsUUFBVTtRQUM3Q1IscUJBQXFCUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDM0M7SUFJQSxNQUFNTCxZQUFZRCxLQUFLQyxTQUFTLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQy9DLHFCQUNJLDhEQUFDUDtzQkFDRyw0RUFBQ0E7Z0JBQUlRLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLHFCQUFxQjtnQkFBb0I7O2tDQUlwRSw4REFBQzVCLHFEQUFVQTt3QkFBRTBCLE9BQU87NEJBQUNHLFdBQVU7NEJBQVVDLFdBQVU7NEJBQVFDLGFBQVk7d0JBQ3ZFOzs0QkFBSU4sU0FBU08sRUFBRTs0QkFBQzs0QkFBRVAsU0FBU1EsSUFBSTs7Ozs7OztrQ0FFL0IsOERBQUNmO3dCQUFJUSxPQUFPOzRCQUFFSSxXQUFXO3dCQUFNOzswQ0FFM0IsOERBQUMvQixvREFBU0E7Z0NBQUNtQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaSCxJQUFJLGlCQUE2QixPQUFaUCxTQUFTTyxFQUFFO2dDQUNoQ0ksVUFBVWpCOzs7Ozs7MENBR2QsOERBQUNwQixvREFBU0E7Z0NBQUNtQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaSCxJQUFJLHFCQUFpQyxPQUFaUCxTQUFTTyxFQUFFO2dDQUNwQ0ksVUFBVWI7Ozs7Ozs7Ozs7OztrQ0FLbEIsOERBQUNMO3dCQUFJUSxPQUFPOzRCQUFFVyxZQUFZOzRCQUFPUCxXQUFXO3dCQUFNO2tDQUU5Qyw0RUFBQzVCLHFFQUFvQkE7NEJBQUNvQyxhQUFhL0IsMEVBQVlBO3NDQUMzQyw0RUFBQ04sMkRBQVVBOzs7Ozs7Ozs7Ozs7Ozs7b0JBSWxCYyxNQUFNUyxHQUFHLENBQUMsQ0FBQ2Usd0JBQ1IsOERBQUNyQjs0QkFBSVEsT0FBTztnQ0FBRVcsWUFBWTtnQ0FBT0EsWUFBWTs0QkFBSzs7OENBRTlDLDhEQUFDbkI7OENBQ0lxQjttQ0FESyxHQUFrQkEsT0FBZmQsU0FBU08sRUFBRSxFQUFDLEtBQVcsT0FBUk87Ozs7OzhDQUc1Qiw4REFBQ3JCOzhDQUNHLDRFQUFDWixnREFBT0E7d0NBQ0owQixJQUFJLEdBQVlQLE9BQVRmLE9BQU0sS0FBa0I2QixPQUFmZCxTQUFTTyxFQUFFLEVBQUMsS0FBVyxPQUFSTzt3Q0FDL0I1QixtQkFBbUJBO3dDQUNuQkUsZUFBZUE7d0NBQ2YyQixLQUFPRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVd2QztJQUlBLHFCQUNJLDhEQUFDckI7a0JBQ0lEOzs7Ozs7QUFHYjtHQS9GTVQ7O1FBa0JXSCx5REFBVUE7OztLQWxCckJHO0FBaUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvUHJvZHVjdG8uanM/OGQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCBWYWxvcmVzIGZyb20gXCIuL1ZhbG9yZXNcIjtcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbmFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtwb3JjZW50YWplQXVtZW50bywgc2V0UG9yY2VudGFqZUF1bWVudG9dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcHJlY2lvSW5pY2lhbCwgc2V0UHJlY2lvSW5pY2lhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IG1lc2VzID0gW1xyXG4gICAgICAgIFwiRW5lcm9cIixcclxuICAgICAgICBcIkZlYnJlcm9cIixcclxuICAgICAgICBcIk1hcnpvXCIsXHJcbiAgICAgICAgXCJBYnJpbFwiLFxyXG4gICAgICAgIFwiTWF5b1wiLFxyXG4gICAgICAgIFwiSnVuaW9cIixcclxuICAgICAgICBcIkp1bGlvXCIsXHJcbiAgICAgICAgXCJBZ29zdG9cIixcclxuICAgICAgICBcIlNlcHRpZW1icmVcIixcclxuICAgICAgICBcIk9jdHVicmVcIixcclxuICAgICAgICBcIk5vdmllbWJyZVwiLFxyXG4gICAgICAgIFwiRGljaWVtYnJlXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldERhdGEoKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3RvcykgeyByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+OyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByZWNpb0luaWNpYWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRQb3JjZW50YWplQXVtZW50byhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RvcyA9IGRhdGEucHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMTYsIDAuNWZyKScgfX0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW5Ub3A6JzUwcHgnLCBtYXJnaW5SaWdodDonNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19Pntwcm9kdWN0by5pZH0ge3Byb2R1Y3RvLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE4cHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwcmVjaW9JbmljaWFsXyR7cHJvZHVjdG8uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHBvcmNlbnRhamVBdW1lbnRvXyR7cHJvZHVjdG8uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcsIG1hcmdpblRvcDogJzE4cHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzZXMubWFwKChlbGVtZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJweCcsIG1hcmdpbkxlZnQ6ICcycHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxvcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtjYW5hbH0tJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcmNlbnRhamVBdW1lbnRvPXtwb3JjZW50YWplQXVtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lvSW5pY2lhbD17cHJlY2lvSW5pY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzID0ge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2R1Y3Rvc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiQWRhcHRlckRheWpzIiwiUHJvZHVjdG8iLCJwcm9wcyIsImNhbmFsIiwicG9yY2VudGFqZUF1bWVudG8iLCJzZXRQb3JjZW50YWplQXVtZW50byIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwibWVzZXMiLCJkYXRhIiwicHJvZHVjdG9zIiwiZGl2IiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYXJnaW5MZWZ0IiwiZGF0ZUFkYXB0ZXIiLCJlbGVtZW50IiwibWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});