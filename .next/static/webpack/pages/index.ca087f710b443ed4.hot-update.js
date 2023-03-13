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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.5fr)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        style: {\n                            backgroundColor: \"red\",\n                            whidth: \"8px\"\n                        },\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        style: {\n                            textAlign: \"center\",\n                            marginTop: \"50px\",\n                            marginRight: \"4px\",\n                            backgroundColor: \"red\"\n                        },\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\",\n                            backgroundColor: \"red\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\",\n                            backgroundColor: \"red\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\",\n                                backgroundColor: \"red\",\n                                marginLeft: \"2px\",\n                                whidth: \"\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzPzhkMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlR2V0RGF0YSBmcm9tIFwiLi4vaG9va3MvdXNlR2V0RGF0YVwiO1xyXG5pbXBvcnQgVmFsb3JlcyBmcm9tIFwiLi9WYWxvcmVzXCI7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0byA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjYW5hbCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbcG9yY2VudGFqZUF1bWVudG8sIHNldFBvcmNlbnRhamVBdW1lbnRvXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ByZWNpb0luaWNpYWwsIHNldFByZWNpb0luaWNpYWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBtZXNlcyA9IFtcclxuICAgICAgICBcIkVuZXJvXCIsXHJcbiAgICAgICAgXCJGZWJyZXJvXCIsXHJcbiAgICAgICAgXCJNYXJ6b1wiLFxyXG4gICAgICAgIFwiQWJyaWxcIixcclxuICAgICAgICBcIk1heW9cIixcclxuICAgICAgICBcIkp1bmlvXCIsXHJcbiAgICAgICAgXCJKdWxpb1wiLFxyXG4gICAgICAgIFwiQWdvc3RvXCIsXHJcbiAgICAgICAgXCJTZXB0aWVtYnJlXCIsXHJcbiAgICAgICAgXCJPY3R1YnJlXCIsXHJcbiAgICAgICAgXCJOb3ZpZW1icmVcIixcclxuICAgICAgICBcIkRpY2llbWJyZVwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXREYXRhKClcclxuICAgIGlmICghZGF0YS5wcm9kdWN0b3MpIHsgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjsgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRQcmVjaW9JbmljaWFsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UG9yY2VudGFqZUF1bWVudG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBkYXRhLnByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDE2LCAwLjVmciknIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyZWQnLCB3aGlkdGg6JzhweCd9fT57cHJvZHVjdG8uaWR9PC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW5Ub3A6JzUwcHgnLCBtYXJnaW5SaWdodDonNHB4JywgYmFja2dyb3VuZENvbG9yOidyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e3Byb2R1Y3RvLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE4cHgnLGJhY2tncm91bmRDb2xvcjoncmVkJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHByZWNpb0luaWNpYWxfJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcG9yY2VudGFqZUF1bWVudG9fJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JywgbWFyZ2luVG9wOiAnMThweCcsIGJhY2tncm91bmRDb2xvcjoncmVkJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc2VzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JywgYmFja2dyb3VuZENvbG9yOidyZWQnLCBtYXJnaW5MZWZ0OiAnMnB4Jywgd2hpZHRoOicnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxvcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtjYW5hbH0tJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcmNlbnRhamVBdW1lbnRvPXtwb3JjZW50YWplQXVtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lvSW5pY2lhbD17cHJlY2lvSW5pY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzID0ge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2R1Y3Rvc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiQWRhcHRlckRheWpzIiwiUHJvZHVjdG8iLCJwcm9wcyIsImNhbmFsIiwicG9yY2VudGFqZUF1bWVudG8iLCJzZXRQb3JjZW50YWplQXVtZW50byIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwibWVzZXMiLCJkYXRhIiwicHJvZHVjdG9zIiwiZGl2IiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImg2IiwiYmFja2dyb3VuZENvbG9yIiwid2hpZHRoIiwiaWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm1hcmdpbkxlZnQiLCJkYXRlQWRhcHRlciIsImVsZW1lbnQiLCJtZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});