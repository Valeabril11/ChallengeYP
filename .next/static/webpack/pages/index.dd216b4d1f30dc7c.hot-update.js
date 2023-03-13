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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getApi.js */ \"./src/hooks/getApi.js\");\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Producto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Producto.js */ \"./src/component/Producto.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Canales = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCountry, setSelectedCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__.getApi)().then((response)=>{\n            setData(response.response.assumptionData[0]);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(error);\n            setLoading(false);\n        });\n    }, []);\n    const handleCountryClick = (pais)=>{\n        setSelectedCountry(pais);\n    };\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n            lineNumber: 38,\n            columnNumber: 16\n        }, undefined);\n    }\n    const generarValue = (mes)=>{\n        if (mes == \"Enero\" && porcentajeAumento) return precioInicial;\n        else if (porcentajeAumento) {\n            let inicial = 0;\n            let index = mes.indexOf(mes);\n            for(let i = 0; i <= index - 1; i++){\n                if (i == 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Precio (P)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"small\"\n                },\n                children: \"Plan de ventas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            style: {\n                                fontSize: \"20px\"\n                            },\n                            children: \"Carga de datos / precios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        data.paises.map((pais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: pais.value,\n                                onClick: ()=>handleCountryClick(pais.value),\n                                children: pais.value\n                            }, pais.value, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined)),\n                        selectedCountry && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.canales.map((canal)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundColor: \"rgb(159, 165, 170)\",\n                                                textAlign: \"center\",\n                                                marginTop: \"12px\",\n                                                marginBottom: \"8px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                children: canal.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            style: {\n                                                backgroundColor: \"rgb(194, 194, 194, 0.5)\",\n                                                textAlign: \"center\",\n                                                marginBottom: \"20px\",\n                                                marginLeft: \"23rem\"\n                                            },\n                                            children: \"A\\xd1O 1\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Producto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            canal: canal.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 37\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Canales, \"udFpxTcsY2zDTL6ZlXn7Q6EliOA=\");\n_c = Canales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canales);\nvar _c;\n$RefreshReg$(_c, \"Canales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ3RCO0FBQ0Y7QUFDQztBQUNLO0FBRWhELE1BQU1RLFVBQVUsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLG1CQUFtQkMscUJBQXFCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUzREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRSx3REFBTUEsR0FDRGUsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDaEJWLFFBQVFVLFNBQVNBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEVBQUU7WUFDM0NULFdBQVcsS0FBSztRQUNwQixHQUNDVSxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pYLFdBQVcsS0FBSztRQUNwQjtJQUNSLEdBQUcsRUFBRTtJQUVMLE1BQU1jLHFCQUFxQixDQUFDQyxPQUFTO1FBQ2pDYixtQkFBbUJhO0lBQ3ZCO0lBRUEsTUFBTUMsNEJBQTRCLENBQUNDLFFBQVU7UUFDekNiLGlCQUFpQmEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3ZDO0lBRUEsTUFBTUMsZ0NBQWdDLENBQUNILFFBQVU7UUFDN0NYLHFCQUFxQlcsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzNDO0lBQ0EsSUFBSXBCLFNBQVM7UUFDVCxxQkFBTyw4REFBQ3NCO3NCQUFJOzs7Ozs7SUFDaEIsQ0FBQztJQUVELE1BQU1DLGVBQWUsQ0FBQ0MsTUFBUTtRQUMxQixJQUFJQSxPQUFPLFdBQVdsQixtQkFBbUIsT0FBT0Y7YUFDM0MsSUFBSUUsbUJBQW1CO1lBQ3hCLElBQUltQixVQUFVO1lBQ2QsSUFBSUMsUUFBUUYsSUFBSUcsT0FBTyxDQUFDSDtZQUN4QixJQUFLLElBQUlJLElBQUksR0FBR0EsS0FBS0YsUUFBUSxHQUFHRSxJQUFLO2dCQUNqQyxJQUFJQSxLQUFLLEdBQUc7b0JBQ1JILFVBQ0lJLFNBQVN6QixpQkFDVCxTQUFVQSxpQkFBaUJ5QixTQUFTdkIscUJBQXNCO2dCQUNsRSxPQUFPO29CQUNIbUIsV0FBVyxVQUFXSSxTQUFTdkIscUJBQXNCO2dCQUN6RCxDQUFDO1lBQ0w7WUFDQSxPQUFPbUI7UUFDWCxDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0s7OzBCQUVHLDhEQUFDbkMscURBQVVBO2dCQUFDb0MsT0FBTztvQkFBRUMsVUFBVTtnQkFBTzswQkFBRzs7Ozs7OzBCQUN6Qyw4REFBQ3JDLHFEQUFVQTtnQkFBQ29DLE9BQU87b0JBQUVDLFVBQVU7Z0JBQVE7MEJBQUc7Ozs7OzswQkFFMUMsOERBQUNWO2dCQUNHUyxPQUFPO29CQUFDRSxXQUFXO2dCQUFPOzBCQUMxQiw0RUFBQ1g7O3NDQUNHLDhEQUFDM0IscURBQVVBOzRCQUFDb0MsT0FBTztnQ0FBRUMsVUFBVTs0QkFBTztzQ0FBRzs7Ozs7O3dCQUV4Q2xDLEtBQUtvQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDbkIscUJBRWQsOERBQUN0Qiw0REFBTUE7Z0NBRUgwQyxJQUFJcEIsS0FBS0ksS0FBSztnQ0FDZGlCLFNBQVMsSUFBTXRCLG1CQUFtQkMsS0FBS0ksS0FBSzswQ0FFM0NKLEtBQUtJLEtBQUs7K0JBSk5KLEtBQUtJLEtBQUs7Ozs7O3dCQVN0QmxCLGlDQUNHLDhEQUFDb0I7c0NBQ0l4QixLQUFLd0MsT0FBTyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0ksUUFBVTtnQ0FDekIscUJBQ0ksOERBQUNqQjs7c0RBQ0csOERBQUNBOzRDQUFJUyxPQUFPO2dEQUNSUyxpQkFBaUI7Z0RBQ2pCQyxXQUFXO2dEQUNYUixXQUFXO2dEQUNYUyxjQUFjOzRDQUNsQjtzREFDSSw0RUFBQy9DLHFEQUFVQTswREFBRTRDLE1BQU1JLElBQUk7Ozs7Ozs7Ozs7O3NEQUUzQiw4REFBQ2hELHFEQUFVQTs0Q0FDUG9DLE9BQU87Z0RBQ0hTLGlCQUFpQjtnREFDakJDLFdBQVc7Z0RBQ1hDLGNBQWM7Z0RBQ2RFLFlBQVk7NENBQ2hCO3NEQUFHOzs7Ozs7c0RBQ1AsOERBQUNoRCw4REFBUUE7NENBQUMyQyxPQUFPQSxNQUFNSSxJQUFJOzs7Ozs7Ozs7Ozs7NEJBR3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QjtHQXpHTTlDO0tBQUFBO0FBMkdOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXIvY2FuYWxlcy5qcz80MWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEFwaSB9IGZyb20gXCIuLi9ob29rcy9nZXRBcGkuanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBQcm9kdWN0byBmcm9tIFwiLi4vY29tcG9uZW50L1Byb2R1Y3RvLmpzXCI7XHJcblxyXG5jb25zdCBDYW5hbGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENvdW50cnksIHNldFNlbGVjdGVkQ291bnRyeV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwcmVjaW9JbmljaWFsLCBzZXRQcmVjaW9JbmljaWFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BvcmNlbnRhamVBdW1lbnRvLCBzZXRQb3JjZW50YWplQXVtZW50b10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEFwaSgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5yZXNwb25zZS5hc3N1bXB0aW9uRGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvdW50cnlDbGljayA9IChwYWlzKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb3VudHJ5KHBhaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0UHJlY2lvSW5pY2lhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFBvcmNlbnRhamVBdW1lbnRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmFyVmFsdWUgPSAobWVzKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lcyA9PSBcIkVuZXJvXCIgJiYgcG9yY2VudGFqZUF1bWVudG8pIHJldHVybiBwcmVjaW9JbmljaWFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHBvcmNlbnRhamVBdW1lbnRvKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmljaWFsID0gMDtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbWVzLmluZGV4T2YobWVzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmljaWFsID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmljaWFsICs9IChpbmljaWFsICogcGFyc2VJbnQocG9yY2VudGFqZUF1bWVudG8pKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5pY2lhbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gPlxyXG5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6ICczMHB4JyB9fT5QcmVjaW8gKFApPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsJyB9fT5QbGFuIGRlIHZlbnRhczwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcgfX0+Q2FyZ2EgZGUgZGF0b3MgLyBwcmVjaW9zPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wYWlzZXMubWFwKChwYWlzKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvdW50cnlDbGljayhwYWlzLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ291bnRyeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYW5hbGVzLm1hcCgoY2FuYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNTksIDE2NSwgMTcwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2FuYWwubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE5NCwgMTk0LCAxOTQsIDAuNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIzcmVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkHDkU8gMTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byBjYW5hbD17Y2FuYWwubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW5hbGVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlB1cmVDb21wb25lbnQiLCJnZXRBcGkiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiUHJvZHVjdG8iLCJDYW5hbGVzIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkQ291bnRyeSIsInNldFNlbGVjdGVkQ291bnRyeSIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwicG9yY2VudGFqZUF1bWVudG8iLCJzZXRQb3JjZW50YWplQXVtZW50byIsInRoZW4iLCJyZXNwb25zZSIsImFzc3VtcHRpb25EYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDb3VudHJ5Q2xpY2siLCJwYWlzIiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsImRpdiIsImdlbmVyYXJWYWx1ZSIsIm1lcyIsImluaWNpYWwiLCJpbmRleCIsImluZGV4T2YiLCJpIiwicGFyc2VJbnQiLCJzZWN0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInBhaXNlcyIsIm1hcCIsImlkIiwib25DbGljayIsImNhbmFsZXMiLCJjYW5hbCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm5hbWUiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/container/canales.js\n"));

/***/ })

});