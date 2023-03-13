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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.5fr)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        style: {\n                            backgroundColor: \"red\",\n                            whidth: \"8px\",\n                            text\n                        },\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        style: {\n                            textAlign: \"center\",\n                            marginTop: \"50px\",\n                            marginRight: \"4px\"\n                        },\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"2px\",\n                                marginLeft: \"2px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzPzhkMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlR2V0RGF0YSBmcm9tIFwiLi4vaG9va3MvdXNlR2V0RGF0YVwiO1xyXG5pbXBvcnQgVmFsb3JlcyBmcm9tIFwiLi9WYWxvcmVzXCI7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0byA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjYW5hbCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbcG9yY2VudGFqZUF1bWVudG8sIHNldFBvcmNlbnRhamVBdW1lbnRvXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ByZWNpb0luaWNpYWwsIHNldFByZWNpb0luaWNpYWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBtZXNlcyA9IFtcclxuICAgICAgICBcIkVuZXJvXCIsXHJcbiAgICAgICAgXCJGZWJyZXJvXCIsXHJcbiAgICAgICAgXCJNYXJ6b1wiLFxyXG4gICAgICAgIFwiQWJyaWxcIixcclxuICAgICAgICBcIk1heW9cIixcclxuICAgICAgICBcIkp1bmlvXCIsXHJcbiAgICAgICAgXCJKdWxpb1wiLFxyXG4gICAgICAgIFwiQWdvc3RvXCIsXHJcbiAgICAgICAgXCJTZXB0aWVtYnJlXCIsXHJcbiAgICAgICAgXCJPY3R1YnJlXCIsXHJcbiAgICAgICAgXCJOb3ZpZW1icmVcIixcclxuICAgICAgICBcIkRpY2llbWJyZVwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXREYXRhKClcclxuICAgIGlmICghZGF0YS5wcm9kdWN0b3MpIHsgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjsgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRQcmVjaW9JbmljaWFsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UG9yY2VudGFqZUF1bWVudG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBkYXRhLnByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDE2LCAwLjVmciknIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyZWQnLCB3aGlkdGg6JzhweCcsIHRleHR9fT57cHJvZHVjdG8uaWR9PC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW5Ub3A6JzUwcHgnLCBtYXJnaW5SaWdodDonNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19Pntwcm9kdWN0by5uYW1lfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxOHB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcHJlY2lvSW5pY2lhbF8ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Bwb3JjZW50YWplQXVtZW50b18ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnLCBtYXJnaW5Ub3A6ICcxOHB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc2VzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcycHgnLCBtYXJnaW5MZWZ0OiAnMnB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7Y2FuYWx9LSR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3JjZW50YWplQXVtZW50bz17cG9yY2VudGFqZUF1bWVudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpb0luaWNpYWw9e3ByZWNpb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcyA9IHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0b3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VHZXREYXRhIiwiVmFsb3JlcyIsIkFkYXB0ZXJEYXlqcyIsIlByb2R1Y3RvIiwicHJvcHMiLCJjYW5hbCIsInBvcmNlbnRhamVBdW1lbnRvIiwic2V0UG9yY2VudGFqZUF1bWVudG8iLCJwcmVjaW9JbmljaWFsIiwic2V0UHJlY2lvSW5pY2lhbCIsIm1lc2VzIiwiZGF0YSIsInByb2R1Y3RvcyIsImRpdiIsImhhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2UiLCJtYXAiLCJwcm9kdWN0byIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJoNiIsImJhY2tncm91bmRDb2xvciIsIndoaWR0aCIsInRleHQiLCJpZCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibWFyZ2luTGVmdCIsImRhdGVBZGFwdGVyIiwiZWxlbWVudCIsIm1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});