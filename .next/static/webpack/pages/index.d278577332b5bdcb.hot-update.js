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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 35\n        }, undefined);\n    }\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                wi\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.1fr)\",\n                    marginLeft: \"30px\"\n                },\n                children: [\n                    producto.id,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element),\n                                        porcentajeAumento: porcentajeAumento,\n                                        precioInicial: precioInicial,\n                                        mes: element\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Producto, \"vAVX4RD9/y1hUT/TgYgWxxB/Udc=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNTO0FBQy9CO0FBQ0s7QUFDYjtBQUNnQztBQUloRSxNQUFNVSxXQUFXLENBQUNDLFFBQVU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdEO0lBQ2xCLE1BQU0sQ0FBQ0UsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVcsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsT0FBT1gsNkRBQVVBO0lBQ3ZCLElBQUksQ0FBQ1csS0FBS0MsU0FBUyxFQUFFO1FBQUUscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFBa0IsQ0FBQztJQUV0RCxNQUFNQyw0QkFBNEIsQ0FBQ0MsUUFBVTtRQUN6Q04saUJBQWlCTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdkM7SUFFQSxNQUFNQyxnQ0FBZ0MsQ0FBQ0gsUUFBVTtRQUM3Q1IscUJBQXFCUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDM0M7SUFJQSxNQUFNTCxZQUFZRCxLQUFLQyxTQUFTLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQy9DLHFCQUNJLDhEQUFDUDtZQUFJUSxPQUFPO2dCQUFDQztZQUFFO3NCQUNYLDRFQUFDVDtnQkFBSVEsT0FBTztvQkFBRUUsU0FBUztvQkFBUUMscUJBQXFCO29CQUFxQkMsWUFBWTtnQkFBTzs7b0JBRW5GTCxTQUFTTSxFQUFFO2tDQUVoQiw4REFBQy9CLHFEQUFVQTtrQ0FBRXlCLFNBQVNPLElBQUk7Ozs7OztrQ0FFMUIsOERBQUNkO3dCQUFJUSxPQUFPOzRCQUFFTyxXQUFXO3dCQUFPOzswQ0FFNUIsOERBQUNsQyxvREFBU0E7Z0NBQUNtQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaSixJQUFJLGlCQUE2QixPQUFaTixTQUFTTSxFQUFFO2dDQUNoQ0ssVUFBVWpCOzs7Ozs7MENBR2QsOERBQUNwQixvREFBU0E7Z0NBQUNtQyxNQUFLO2dDQUNaQyxhQUFZO2dDQUNaSixJQUFJLHFCQUFpQyxPQUFaTixTQUFTTSxFQUFFO2dDQUNwQ0ssVUFBVWI7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNMO3dCQUFJUSxPQUFPOzRCQUFFSSxZQUFZOzRCQUFPRyxXQUFXO3dCQUFPO2tDQUUvQyw0RUFBQy9CLHFFQUFvQkE7NEJBQUNtQyxhQUFhOUIsMEVBQVlBO3NDQUMzQyw0RUFBQ04sMkRBQVVBOzs7Ozs7Ozs7Ozs7Ozs7b0JBSWxCYyxNQUFNUyxHQUFHLENBQUMsQ0FBQ2Msd0JBQ1IsOERBQUNwQjs0QkFBSVEsT0FBTztnQ0FBRUksWUFBWTs0QkFBTzs7OENBRTdCLDhEQUFDWjs4Q0FDSW9CO21DQURLLEdBQWtCQSxPQUFmYixTQUFTTSxFQUFFLEVBQUMsS0FBVyxPQUFSTzs7Ozs7OENBRzVCLDhEQUFDcEI7OENBQ0csNEVBQUNaLGdEQUFPQTt3Q0FDSnlCLElBQUksR0FBWU4sT0FBVGYsT0FBTSxLQUFrQjRCLE9BQWZiLFNBQVNNLEVBQUUsRUFBQyxLQUFXLE9BQVJPO3dDQUMvQjNCLG1CQUFtQkE7d0NBQ25CRSxlQUFlQTt3Q0FDZjBCLEtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV3ZDO0lBSUEscUJBQ0ksOERBQUNwQjtrQkFDSUQ7Ozs7OztBQUdiO0dBN0ZNVDs7UUFrQldILHlEQUFVQTs7O0tBbEJyQkc7QUErRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Qcm9kdWN0by5qcz84ZDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vyc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUdldERhdGEgZnJvbSBcIi4uL2hvb2tzL3VzZUdldERhdGFcIjtcclxuaW1wb3J0IFZhbG9yZXMgZnJvbSBcIi4vVmFsb3Jlc1wiO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2FuYWwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW3BvcmNlbnRhamVBdW1lbnRvLCBzZXRQb3JjZW50YWplQXVtZW50b10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwcmVjaW9JbmljaWFsLCBzZXRQcmVjaW9JbmljaWFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbWVzZXMgPSBbXHJcbiAgICAgICAgXCJFbmVyb1wiLFxyXG4gICAgICAgIFwiRmVicmVyb1wiLFxyXG4gICAgICAgIFwiTWFyem9cIixcclxuICAgICAgICBcIkFicmlsXCIsXHJcbiAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgXCJKdW5pb1wiLFxyXG4gICAgICAgIFwiSnVsaW9cIixcclxuICAgICAgICBcIkFnb3N0b1wiLFxyXG4gICAgICAgIFwiU2VwdGllbWJyZVwiLFxyXG4gICAgICAgIFwiT2N0dWJyZVwiLFxyXG4gICAgICAgIFwiTm92aWVtYnJlXCIsXHJcbiAgICAgICAgXCJEaWNpZW1icmVcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBkYXRhID0gdXNlR2V0RGF0YSgpXHJcbiAgICBpZiAoIWRhdGEucHJvZHVjdG9zKSB7IHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UHJlY2lvSW5pY2lhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFBvcmNlbnRhamVBdW1lbnRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdG9zID0gZGF0YS5wcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aX19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMTYsIDAuMWZyKScsIG1hcmdpbkxlZnQ6ICczMHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0by5pZH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Byb2R1Y3RvLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE4cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcHJlY2lvSW5pY2lhbF8ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Bwb3JjZW50YWplQXVtZW50b18ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JywgbWFyZ2luVG9wOiAnMThweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzZXMubWFwKChlbGVtZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7Y2FuYWx9LSR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3JjZW50YWplQXVtZW50bz17cG9yY2VudGFqZUF1bWVudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpb0luaWNpYWw9e3ByZWNpb0luaWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcyA9IHtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0b3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VHZXREYXRhIiwiVmFsb3JlcyIsIkFkYXB0ZXJEYXlqcyIsIlByb2R1Y3RvIiwicHJvcHMiLCJjYW5hbCIsInBvcmNlbnRhamVBdW1lbnRvIiwic2V0UG9yY2VudGFqZUF1bWVudG8iLCJwcmVjaW9JbmljaWFsIiwic2V0UHJlY2lvSW5pY2lhbCIsIm1lc2VzIiwiZGF0YSIsInByb2R1Y3RvcyIsImRpdiIsImhhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2UiLCJtYXAiLCJwcm9kdWN0byIsInN0eWxlIiwid2kiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbkxlZnQiLCJpZCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImRhdGVBZGFwdGVyIiwiZWxlbWVudCIsIm1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});