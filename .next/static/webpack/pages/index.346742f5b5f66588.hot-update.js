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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"  repeat(16, 0.5fr)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            whidth: \"1px\",\n                            textAlign: \"center\"\n                        },\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        style: {\n                            textAlign: \"center\",\n                            marginTop: \"50px\",\n                            marginRight: \"4px\"\n                        },\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"2px\",\n                                marginLeft: \"2px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCBWYWxvcmVzIGZyb20gXCIuL1ZhbG9yZXNcIjtcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbmFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtwb3JjZW50YWplQXVtZW50bywgc2V0UG9yY2VudGFqZUF1bWVudG9dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcHJlY2lvSW5pY2lhbCwgc2V0UHJlY2lvSW5pY2lhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IG1lc2VzID0gW1xyXG4gICAgICAgIFwiRW5lcm9cIixcclxuICAgICAgICBcIkZlYnJlcm9cIixcclxuICAgICAgICBcIk1hcnpvXCIsXHJcbiAgICAgICAgXCJBYnJpbFwiLFxyXG4gICAgICAgIFwiTWF5b1wiLFxyXG4gICAgICAgIFwiSnVuaW9cIixcclxuICAgICAgICBcIkp1bGlvXCIsXHJcbiAgICAgICAgXCJBZ29zdG9cIixcclxuICAgICAgICBcIlNlcHRpZW1icmVcIixcclxuICAgICAgICBcIk9jdHVicmVcIixcclxuICAgICAgICBcIk5vdmllbWJyZVwiLFxyXG4gICAgICAgIFwiRGljaWVtYnJlXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldERhdGEoKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3RvcykgeyByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+OyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByZWNpb0luaWNpYWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRQb3JjZW50YWplQXVtZW50byhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RvcyA9IGRhdGEucHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcgIHJlcGVhdCgxNiwgMC41ZnIpJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e3doaWR0aDonMXB4JywgdGV4dEFsaWduOidjZW50ZXInfX0+e3Byb2R1Y3RvLmlkfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ICBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luVG9wOic1MHB4JywgbWFyZ2luUmlnaHQ6JzRweCdcclxuICAgICAgICAgICAgICAgICAgICB9fT57cHJvZHVjdG8ubmFtZX08L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMThweCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHByZWNpb0luaWNpYWxfJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcG9yY2VudGFqZUF1bWVudG9fJHtwcm9kdWN0by5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JywgbWFyZ2luVG9wOiAnMThweCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNlcy5tYXAoKGVsZW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMnB4JywgbWFyZ2luTGVmdDogJzJweCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbG9yZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake2NhbmFsfS0ke3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9yY2VudGFqZUF1bWVudG89e3BvcmNlbnRhamVBdW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaW9JbmljaWFsPXtwcmVjaW9JbmljaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXMgPSB7ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cHJvZHVjdG9zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlR2V0RGF0YSIsIlZhbG9yZXMiLCJBZGFwdGVyRGF5anMiLCJQcm9kdWN0byIsInByb3BzIiwiY2FuYWwiLCJwb3JjZW50YWplQXVtZW50byIsInNldFBvcmNlbnRhamVBdW1lbnRvIiwicHJlY2lvSW5pY2lhbCIsInNldFByZWNpb0luaWNpYWwiLCJtZXNlcyIsImRhdGEiLCJwcm9kdWN0b3MiLCJkaXYiLCJoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlIiwibWFwIiwicHJvZHVjdG8iLCJzdHlsZSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiaDMiLCJ3aGlkdGgiLCJ0ZXh0QWxpZ24iLCJpZCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibWFyZ2luTGVmdCIsImRhdGVBZGFwdGVyIiwiZWxlbWVudCIsIm1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});