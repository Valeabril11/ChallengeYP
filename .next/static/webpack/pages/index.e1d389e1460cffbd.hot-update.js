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

/***/ "./src/container/canales.js":
/*!**********************************!*\
  !*** ./src/container/canales.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getApi.js */ \"./src/hooks/getApi.js\");\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Producto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Producto.js */ \"./src/component/Producto.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Canales = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCountry, setSelectedCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // const [precioInicial, setPrecioInicial] = useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__.getApi)().then((response)=>{\n            setData(response.response.assumptionData[0]);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(error);\n            setLoading(false);\n        });\n    }, []);\n    const handleCountryClick = (pais)=>{\n        setSelectedCountry(pais);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n            lineNumber: 30,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Precio (P)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"small\"\n                },\n                children: \"Plan de ventas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            style: {\n                                fontSize: \"20px\"\n                            },\n                            children: \"Carga de datos / precios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        data.paises.map((pais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: pais.value,\n                                onClick: ()=>handleCountryClick(pais.value),\n                                children: pais.value\n                            }, pais.value, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined)),\n                        selectedCountry && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.canales.map((canal)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundColor: \"rgb(159, 165, 170)\",\n                                                textAlign: \"center\",\n                                                marginTop: \"12px\",\n                                                marginBottom: \"8px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                children: canal.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            style: {\n                                                backgroundColor: \"rgb(194, 194, 194, 0.5)\",\n                                                textAlign: \"center\",\n                                                marginBottom: \"20px\",\n                                                marginLeft: \"16rem\"\n                                            },\n                                            children: \"A\\xd1O 1\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Producto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            canal: canal.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 37\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Canales, \"RAFfESEzzzaAVJR97/maJDXAph4=\");\n_c = Canales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canales);\nvar _c;\n$RefreshReg$(_c, \"Canales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ3RCO0FBQ0Y7QUFDQztBQUNLO0FBRWhELE1BQU1RLFVBQVUsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNELHlEQUF5RDtJQUV6REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRSx3REFBTUEsR0FDRFcsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDaEJOLFFBQVFNLFNBQVNBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEVBQUU7WUFDM0NMLFdBQVcsS0FBSztRQUNwQixHQUNDTSxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pQLFdBQVcsS0FBSztRQUNwQjtJQUNSLEdBQUcsRUFBRTtJQUVMLE1BQU1VLHFCQUFxQixDQUFDQyxPQUFTO1FBQ2pDVCxtQkFBbUJTO0lBQ3ZCO0lBRUEsSUFBSVosU0FBUztRQUNULHFCQUFPLDhEQUFDYTtzQkFBSTs7Ozs7O0lBQ2hCLENBQUM7SUFJRCxxQkFDSSw4REFBQ0M7OzBCQUVHLDhEQUFDbkIscURBQVVBO2dCQUFDb0IsT0FBTztvQkFBRUMsVUFBVTtnQkFBTzswQkFBRzs7Ozs7OzBCQUN6Qyw4REFBQ3JCLHFEQUFVQTtnQkFBQ29CLE9BQU87b0JBQUVDLFVBQVU7Z0JBQVE7MEJBQUc7Ozs7OzswQkFFMUMsOERBQUNIO2dCQUFJRSxPQUFPO29CQUFFRSxXQUFXO2dCQUFROzBCQUM3Qiw0RUFBQ0o7O3NDQUNHLDhEQUFDbEIscURBQVVBOzRCQUFDb0IsT0FBTztnQ0FBRUMsVUFBVTs0QkFBTztzQ0FBRzs7Ozs7O3dCQUV4Q2xCLEtBQUtvQixNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDUCxxQkFDZCw4REFBQ2xCLDREQUFNQTtnQ0FFSDBCLElBQUlSLEtBQUtTLEtBQUs7Z0NBQ2RDLFNBQVMsSUFBTVgsbUJBQW1CQyxLQUFLUyxLQUFLOzBDQUMzQ1QsS0FBS1MsS0FBSzsrQkFITlQsS0FBS1MsS0FBSzs7Ozs7d0JBTXRCbkIsaUNBQ0csOERBQUNXO3NDQUNJZixLQUFLeUIsT0FBTyxDQUFDSixHQUFHLENBQUMsQ0FBQ0ssUUFBVTtnQ0FDekIscUJBQ0ksOERBQUNYOztzREFDRyw4REFBQ0E7NENBQUlFLE9BQU87Z0RBQ1JVLGlCQUFpQjtnREFDakJDLFdBQVc7Z0RBQ1hULFdBQVc7Z0RBQ1hVLGNBQWM7NENBQ2xCO3NEQUNJLDRFQUFDaEMscURBQVVBOzBEQUFFNkIsTUFBTUksSUFBSTs7Ozs7Ozs7Ozs7c0RBRTNCLDhEQUFDakMscURBQVVBOzRDQUNQb0IsT0FBTztnREFDSFUsaUJBQWlCO2dEQUNqQkMsV0FBVztnREFDWEMsY0FBYztnREFDZEUsWUFBWTs0Q0FDaEI7c0RBQUc7Ozs7OztzREFHUCw4REFBQ2pDLDhEQUFRQTs0Q0FBQzRCLE9BQU9BLE1BQU1JLElBQUk7Ozs7Ozs7Ozs7Ozs0QkFHdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBOUVNL0I7S0FBQUE7QUFnRk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9jYW5hbGVzLmpzPzQxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QXBpIH0gZnJvbSBcIi4uL2hvb2tzL2dldEFwaS5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFByb2R1Y3RvIGZyb20gXCIuLi9jb21wb25lbnQvUHJvZHVjdG8uanNcIjtcclxuXHJcbmNvbnN0IENhbmFsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ291bnRyeSwgc2V0U2VsZWN0ZWRDb3VudHJ5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy8gY29uc3QgW3ByZWNpb0luaWNpYWwsIHNldFByZWNpb0luaWNpYWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRBcGkoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UucmVzcG9uc2UuYXNzdW1wdGlvbkRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb3VudHJ5Q2xpY2sgPSAocGFpcykgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ291bnRyeShwYWlzKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gPlxyXG5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6ICczMHB4JyB9fT5QcmVjaW8gKFApPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsJyB9fT5QbGFuIGRlIHZlbnRhczwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcsIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19PkNhcmdhIGRlIGRhdG9zIC8gcHJlY2lvczwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEucGFpc2VzLm1hcCgocGFpcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvdW50cnlDbGljayhwYWlzLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvdW50cnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNhbmFsZXMubWFwKChjYW5hbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE1OSwgMTY1LCAxNzApJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjYW5hbC5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTk0LCAxOTQsIDE5NCwgMC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTZyZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQcORTyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gY2FuYWw9e2NhbmFsLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FuYWxlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQdXJlQ29tcG9uZW50IiwiZ2V0QXBpIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlByb2R1Y3RvIiwiQ2FuYWxlcyIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZENvdW50cnkiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJhc3N1bXB0aW9uRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ291bnRyeUNsaWNrIiwicGFpcyIsImRpdiIsInNlY3Rpb24iLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwicGFpc2VzIiwibWFwIiwiaWQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJjYW5hbGVzIiwiY2FuYWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJuYW1lIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/container/canales.js\n"));

/***/ })

});