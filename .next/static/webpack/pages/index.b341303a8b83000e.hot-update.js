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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = (props)=>{\n    _s();\n    const { canal  } = props;\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 28,\n            columnNumber: 16\n        }, undefined);\n    }\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.1fr)\",\n                    marginLeft: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        children: producto.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\",\n                                id: \"precioInicial_\".concat(producto.id),\n                                onChange: handlePrecioInicialChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\",\n                                id: \"porcentajeAumento_\".concat(producto.id),\n                                onChange: handlePorcentajeAumentoChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 61,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 60,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(canal, \"-\").concat(producto.id, \"-\").concat(element)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 66,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Producto, \"De2pHvV9wP768jBjQTgPoBWfx/Q=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNTO0FBQy9CO0FBQ0s7QUFDYjtBQUNnQztBQUloRSxNQUFNVSxXQUFXLENBQUNDLFFBQVU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdEO0lBQ2xCLE1BQU1FLFFBQVE7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDSDtJQUNELE1BQU1DLE9BQU9QLDZEQUFVQTtJQUN2QixJQUFJLENBQUNPLEtBQUtDLFNBQVMsRUFBRTtRQUNqQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUM7SUFDbkQsTUFBTWEsNEJBQTRCLENBQUNDLFFBQVU7UUFDekNGLGlCQUFpQkUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JDO0lBQ0EsTUFBTVAsWUFBWUQsS0FBS0MsU0FBUyxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsV0FBYTtRQUNqRCxxQkFDSSw4REFBQ1I7c0JBQ0csNEVBQUNBO2dCQUFJUyxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxxQkFBcUI7b0JBQXFCQyxZQUFZO2dCQUFPOztrQ0FDeEYsOERBQUM1QixpREFBTUE7a0NBRU53QixTQUFTSyxFQUFFOzs7Ozs7a0NBRVosOERBQUMzQixxREFBVUE7a0NBQUVzQixTQUFTTSxJQUFJOzs7Ozs7a0NBQzFCLDhEQUFDZDt3QkFBSVMsT0FBTzs0QkFBRU0sV0FBVzt3QkFBTzs7MENBRTVCLDhEQUFDOUIsb0RBQVNBO2dDQUFDK0IsTUFBSztnQ0FDWkMsYUFBWTtnQ0FDWkosSUFBSSxpQkFBNkIsT0FBWkwsU0FBU0ssRUFBRTtnQ0FDaENLLFVBQVVmOzs7Ozs7MENBRWQsOERBQUNsQixvREFBU0E7Z0NBQUMrQixNQUFLO2dDQUNaQyxhQUFZO2dDQUNaSixJQUFJLHFCQUFpQyxPQUFaTCxTQUFTSyxFQUFFO2dDQUNwQ0ssVUFBVUM7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNuQjt3QkFBSVMsT0FBTzs0QkFBRUcsWUFBWTs0QkFBT0csV0FBVzt3QkFBTztrQ0FFL0MsNEVBQUMzQixxRUFBb0JBOzRCQUFDZ0MsYUFBYTNCLDBFQUFZQTtzQ0FDM0MsNEVBQUNOLDJEQUFVQTs7Ozs7Ozs7Ozs7Ozs7O29CQUlsQlUsTUFBTVUsR0FBRyxDQUFDLENBQUNjLHdCQUNSLDhEQUFDckI7NEJBQUlTLE9BQU87Z0NBQUVHLFlBQVk7NEJBQU87OzhDQUU3Qiw4REFBQ1o7OENBQ0lxQjttQ0FESyxHQUFrQkEsT0FBZmIsU0FBU0ssRUFBRSxFQUFDLEtBQVcsT0FBUlE7Ozs7OzhDQUc1Qiw4REFBQ3JCOzhDQUNHLDRFQUFDUixnREFBT0E7d0NBQUNxQixJQUFJLEdBQVlMLE9BQVRaLE9BQU0sS0FBa0J5QixPQUFmYixTQUFTSyxFQUFFLEVBQUMsS0FBVyxPQUFSUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVV4RTtJQUlBLHFCQUNJLDhEQUFDckI7a0JBQ1FEOzs7Ozs7QUFHYjtHQWpGTUw7O1FBZ0JXSCx5REFBVUE7OztLQWhCckJHO0FBbUZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvUHJvZHVjdG8uanM/OGQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCBWYWxvcmVzIGZyb20gXCIuL1ZhbG9yZXNcIjtcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbmFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IG1lc2VzID0gW1xyXG4gICAgICAgIFwiRW5lcm9cIixcclxuICAgICAgICBcIkZlYnJlcm9cIixcclxuICAgICAgICBcIk1hcnpvXCIsXHJcbiAgICAgICAgXCJBYnJpbFwiLFxyXG4gICAgICAgIFwiTWF5b1wiLFxyXG4gICAgICAgIFwiSnVuaW9cIixcclxuICAgICAgICBcIkp1bGlvXCIsXHJcbiAgICAgICAgXCJBZ29zdG9cIixcclxuICAgICAgICBcIlNlcHRpZW1icmVcIixcclxuICAgICAgICBcIk9jdHVicmVcIixcclxuICAgICAgICBcIk5vdmllbWJyZVwiLFxyXG4gICAgICAgIFwiRGljaWVtYnJlXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldERhdGEoKVxyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3Rvcykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3ByZWNpb0luaWNpYWwsIHNldFByZWNpb0luaWNpYWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UHJlY2lvSW5pY2lhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBwcm9kdWN0b3MgPSBkYXRhLnByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDE2LCAwLjFmciknLCBtYXJnaW5MZWZ0OiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntwcm9kdWN0by5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE4cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcHJlY2lvSW5pY2lhbF8ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Bwb3JjZW50YWplQXVtZW50b18ke3Byb2R1Y3RvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9yY2VudGFqZUF1bWVudG9DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JywgbWFyZ2luVG9wOiAnMThweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzZXMubWFwKChlbGVtZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtwcm9kdWN0by5pZH0tJHtlbGVtZW50fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsb3JlcyBpZD17YCR7Y2FuYWx9LSR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuKTtcclxufSlcclxuXHJcblxyXG5cclxucmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0b3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0bzsiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VHZXREYXRhIiwiVmFsb3JlcyIsIkFkYXB0ZXJEYXlqcyIsIlByb2R1Y3RvIiwicHJvcHMiLCJjYW5hbCIsIm1lc2VzIiwiZGF0YSIsInByb2R1Y3RvcyIsImRpdiIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJwcm9kdWN0byIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW5MZWZ0IiwiaWQiLCJuYW1lIiwibWFyZ2luVG9wIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsImRhdGVBZGFwdGVyIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});