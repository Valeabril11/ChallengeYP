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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ \"./src/component/Valores.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Producto = ()=>{\n    _s();\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    console.log(data.productos);\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 29,\n            columnNumber: 16\n        }, undefined);\n    }\n    const productos = data.productos.map((producto)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(16, 0.1fr)\",\n                    marginLeft: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: producto.id\n                    }, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: producto.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"18px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"$0\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                type: \"number\",\n                                placeholder: \"%\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"8px\",\n                            marginTop: \"18px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {\n                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {}, void 0, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                lineNumber: 53,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    meses.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginLeft: \"15px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: element\n                                }, \"\".concat(producto.id, \"-\").concat(element), false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Valores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        id: \"\".concat(producto.id, \"-\").concat(element)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: productos\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Producto.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Producto, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Producto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1Byb2R1Y3RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNpQjtBQUM3QztBQUNtQjtBQUNiO0FBQ2dDO0FBS2hFLE1BQU1RLFdBQVcsSUFBTTs7SUFDbkIsTUFBTUMsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsT0FBT0wsNkRBQVVBO0lBQ3ZCTSxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLFNBQVM7SUFDMUIsSUFBSSxDQUFDSCxLQUFLRyxTQUFTLEVBQUU7UUFDakIscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDaEIsQ0FBQztJQUdELE1BQU1ELFlBQVlILEtBQUtHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDL0MscUJBQ0ksOERBQUNGO3NCQUNHLDRFQUFDQTtnQkFBSUcsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMscUJBQXFCO29CQUFxQkMsWUFBWTtnQkFBTzs7a0NBQ3hGO2tDQUVDSixTQUFTSyxFQUFFOztrQ0FFWiw4REFBQ0M7a0NBQUlOLFNBQVNPLElBQUk7Ozs7OztrQ0FDbEIsOERBQUNUO3dCQUFJRyxPQUFPOzRCQUFFTyxXQUFXO3dCQUFPOzswQ0FFNUIsOERBQUN4QixvREFBU0E7Z0NBQUN5QixNQUFLO2dDQUNaQyxhQUFZOzs7Ozs7MENBRWhCLDhEQUFDMUIsb0RBQVNBO2dDQUFDeUIsTUFBSztnQ0FDWkMsYUFBWTs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ1o7d0JBQUlHLE9BQU87NEJBQUVHLFlBQVk7NEJBQU9JLFdBQVc7d0JBQU87a0NBRS9DLDRFQUFDckIscUVBQW9CQTs0QkFBQ3dCLGFBQWFwQiwwRUFBWUE7c0NBQzNDLDRFQUFDTCwyREFBVUE7Ozs7Ozs7Ozs7Ozs7OztvQkFJbEJPLE1BQU1NLEdBQUcsQ0FBQyxDQUFDYSx3QkFDUiw4REFBQ2Q7NEJBQUlHLE9BQU87Z0NBQUVHLFlBQVk7NEJBQU87OzhDQUU3Qiw4REFBQ047OENBQ0ljO21DQURLLEdBQWtCQSxPQUFmWixTQUFTSyxFQUFFLEVBQUMsS0FBVyxPQUFSTzs7Ozs7OENBRzVCLDhEQUFDZDs4Q0FDRyw0RUFBQ1IsZ0RBQU9BO3dDQUFDZSxJQUFJLEdBQWtCTyxPQUFmWixTQUFTSyxFQUFFLEVBQUMsS0FBVyxPQUFSTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVUvRDtJQUlBLHFCQUNJLDhEQUFDZDtrQkFDUUQ7Ozs7OztBQUdiO0dBeEVNTDs7UUFlV0gseURBQVVBOzs7S0FmckJHO0FBMEVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvUHJvZHVjdG8uanM/OGQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUdldERhdGEgZnJvbSBcIi4uL2hvb2tzL3VzZUdldERhdGFcIjtcclxuaW1wb3J0IFZhbG9yZXMgZnJvbSBcIi4vVmFsb3Jlc1wiO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anNcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVzZXMgPSBbXHJcbiAgICAgICAgXCJFbmVyb1wiLFxyXG4gICAgICAgIFwiRmVicmVyb1wiLFxyXG4gICAgICAgIFwiTWFyem9cIixcclxuICAgICAgICBcIkFicmlsXCIsXHJcbiAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgXCJKdW5pb1wiLFxyXG4gICAgICAgIFwiSnVsaW9cIixcclxuICAgICAgICBcIkFnb3N0b1wiLFxyXG4gICAgICAgIFwiU2VwdGllbWJyZVwiLFxyXG4gICAgICAgIFwiT2N0dWJyZVwiLFxyXG4gICAgICAgIFwiTm92aWVtYnJlXCIsXHJcbiAgICAgICAgXCJEaWNpZW1icmVcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBkYXRhID0gdXNlR2V0RGF0YSgpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnByb2R1Y3RvcylcclxuICAgIGlmICghZGF0YS5wcm9kdWN0b3MpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBkYXRhLnByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDE2LCAwLjFmciknLCBtYXJnaW5MZWZ0OiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdG8ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMThweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJVwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcsIG1hcmdpblRvcDogJzE4cHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc2VzLm1hcCgoZWxlbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNXB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7cHJvZHVjdG8uaWR9LSR7ZWxlbWVudH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbG9yZXMgaWQ9e2Ake3Byb2R1Y3RvLmlkfS0ke2VsZW1lbnR9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbik7XHJcbn0pXHJcblxyXG5cclxuXHJcbnJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cHJvZHVjdG9zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sIm5hbWVzIjpbIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJSZWFjdCIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiQWRhcHRlckRheWpzIiwiUHJvZHVjdG8iLCJtZXNlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdG9zIiwiZGl2IiwibWFwIiwicHJvZHVjdG8iLCJzdHlsZSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luTGVmdCIsImlkIiwiaDIiLCJuYW1lIiwibWFyZ2luVG9wIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZGF0ZUFkYXB0ZXIiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Producto.js\n"));

/***/ })

});