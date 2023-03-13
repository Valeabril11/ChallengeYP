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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getApi.js */ \"./src/hooks/getApi.js\");\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Producto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Producto.js */ \"./src/component/Producto.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Canales = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCountry, setSelectedCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__.getApi)().then((response)=>{\n            setData(response.response.assumptionData[0]);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(error);\n            setLoading(false);\n        });\n    }, []);\n    const handleCountryClick = (pais)=>{\n        setSelectedCountry(pais);\n    };\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, undefined);\n    }\n    console.log(data);\n    console.log(\"soy home\");\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const generarValue = (mes)=>{\n        if (mes == \"Enero\" && porcentajeAumento) return precioInicial;\n        else if (porcentajeAumento) {\n            let inicial = 0;\n            let index = meses.indexOf(mes);\n            for(let i = 0; i <= index - 1; i++){\n                if (i == 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                    console.log(inicial);\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Precio (P)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 83,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"small\"\n                },\n                children: \"Plan de ventas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 84,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            style: {\n                                fontSize: \"20px\"\n                            },\n                            children: \"Carga de datos / precios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, undefined),\n                        data.paises.map((pais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: pais.value,\n                                onClick: ()=>handleCountryClick(pais.value),\n                                children: pais.value\n                            }, pais.value, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)),\n                        selectedCountry && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.canales.map((canal)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundColor: \"rgb(159, 165, 170)\",\n                                                textAlign: \"center\",\n                                                marginTop: \"10px\",\n                                                marginBottom: \"16\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    children: canal.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    children: \"A\\xd1O 1\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Producto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Canales, \"udFpxTcsY2zDTL6ZlXn7Q6EliOA=\");\n_c = Canales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canales);\nvar _c;\n$RefreshReg$(_c, \"Canales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ3RCO0FBQ0Y7QUFDeUI7QUFDSDtBQUNnQjtBQUNwQjtBQUNaO0FBRWhELE1BQU1hLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2lCLGlCQUFpQkMsbUJBQW1CLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNELE1BQU0sQ0FBQ21CLGVBQWVDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDcUIsbUJBQW1CQyxxQkFBcUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRTNEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLHdEQUFNQSxHQUNIb0IsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEJWLFFBQVFVLFNBQVNBLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEVBQUU7WUFDM0NULFdBQVcsS0FBSztRQUNsQixHQUNDVSxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaWCxXQUFXLEtBQUs7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNYyxxQkFBcUIsQ0FBQ0MsT0FBUztRQUNuQ2IsbUJBQW1CYTtJQUNyQjtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQyxRQUFVO1FBQzNDYixpQkFBaUJhLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQztJQUVBLE1BQU1DLGdDQUFnQyxDQUFDSCxRQUFVO1FBQy9DWCxxQkFBcUJXLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QztJQUNBLElBQUlwQixTQUFTO1FBQ1gscUJBQU8sOERBQUNzQjtzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVEVCxRQUFRQyxHQUFHLENBQUNoQjtJQUNaZSxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNUyxRQUFRO1FBQ1o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNQyxlQUFlLENBQUNDLE1BQVE7UUFDNUIsSUFBSUEsT0FBTyxXQUFXbkIsbUJBQW1CLE9BQU9GO2FBQzNDLElBQUlFLG1CQUFtQjtZQUMxQixJQUFJb0IsVUFBVTtZQUNkLElBQUlDLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0g7WUFDMUIsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLEtBQUtGLFFBQVEsR0FBR0UsSUFBSztnQkFDbkMsSUFBSUEsS0FBSyxHQUFHO29CQUNWSCxVQUNFSSxTQUFTMUIsaUJBQ1QsU0FBVUEsaUJBQWlCMEIsU0FBU3hCLHFCQUFzQjtvQkFDNURPLFFBQVFDLEdBQUcsQ0FBQ1k7Z0JBQ2QsT0FBTztvQkFDTEEsV0FBVyxVQUFXSSxTQUFTeEIscUJBQXNCO2dCQUN2RCxDQUFDO1lBQ0g7WUFDQSxPQUFPb0I7UUFDVCxDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0s7OzBCQUVLLDhEQUFDdkMscURBQVVBO2dCQUFDd0MsT0FBTztvQkFBQ0MsVUFBVTtnQkFBTTswQkFBRzs7Ozs7OzBCQUMzQiw4REFBQ3pDLHFEQUFVQTtnQkFBQ3dDLE9BQU87b0JBQUNDLFVBQVU7Z0JBQU87MEJBQUc7Ozs7OzswQkFHeEQsOERBQUNYO2dCQUNEVSxPQUFPO29CQUNMRSxXQUFXO2dCQUNiOzBCQUNFLDRFQUFDWjs7c0NBQ0QsOERBQUM5QixxREFBVUE7NEJBQUN3QyxPQUFPO2dDQUFDQyxVQUFVOzRCQUFNO3NDQUFHOzs7Ozs7d0JBRXBDbkMsS0FBS3FDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNwQixxQkFFaEIsOERBQUMzQiw0REFBTUE7Z0NBRUxnRCxJQUFJckIsS0FBS0ksS0FBSztnQ0FDZGtCLFNBQVMsSUFBTXZCLG1CQUFtQkMsS0FBS0ksS0FBSzswQ0FFM0NKLEtBQUtJLEtBQUs7K0JBSk5KLEtBQUtJLEtBQUs7Ozs7O3dCQVNsQmxCLGlDQUNDLDhEQUFDb0I7c0NBQ0V4QixLQUFLeUMsT0FBTyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0ksUUFBVTtnQ0FDM0IscUJBQ0UsOERBQUNsQjs7c0RBQ0MsOERBQUNBOzRDQUFJVSxPQUFPO2dEQUNYUyxpQkFBaUI7Z0RBQ2pCQyxXQUFXO2dEQUNYUixXQUFXO2dEQUNYUyxjQUFhOzRDQUNkOzs4REFDRSw4REFBQ25ELHFEQUFVQTs4REFBRWdELE1BQU1JLElBQUk7Ozs7Ozs4REFDdkIsOERBQUNwRCxxREFBVUE7OERBQUM7Ozs7Ozs7Ozs7OztzREFFZCw4REFBQ0ksOERBQVFBOzs7Ozs7Ozs7Ozs0QkFHZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtHQXhITUM7S0FBQUE7QUEwSE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9jYW5hbGVzLmpzPzQxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QXBpIH0gZnJvbSBcIi4uL2hvb2tzL2dldEFwaS5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXJcIjtcclxuaW1wb3J0IFByb2R1Y3RvIGZyb20gXCIuLi9jb21wb25lbnQvUHJvZHVjdG8uanNcIjtcclxuXHJcbmNvbnN0IENhbmFsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ291bnRyeSwgc2V0U2VsZWN0ZWRDb3VudHJ5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwcmVjaW9JbmljaWFsLCBzZXRQcmVjaW9JbmljaWFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwb3JjZW50YWplQXVtZW50bywgc2V0UG9yY2VudGFqZUF1bWVudG9dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLnJlc3BvbnNlLmFzc3VtcHRpb25EYXRhWzBdKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb3VudHJ5Q2xpY2sgPSAocGFpcykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDb3VudHJ5KHBhaXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZWNpb0luaWNpYWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFByZWNpb0luaWNpYWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UG9yY2VudGFqZUF1bWVudG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKFwic295IGhvbWVcIik7XHJcbiAgY29uc3QgbWVzZXMgPSBbXHJcbiAgICBcIkVuZXJvXCIsXHJcbiAgICBcIkZlYnJlcm9cIixcclxuICAgIFwiTWFyem9cIixcclxuICAgIFwiQWJyaWxcIixcclxuICAgIFwiTWF5b1wiLFxyXG4gICAgXCJKdW5pb1wiLFxyXG4gICAgXCJKdWxpb1wiLFxyXG4gICAgXCJBZ29zdG9cIixcclxuICAgIFwiU2VwdGllbWJyZVwiLFxyXG4gICAgXCJPY3R1YnJlXCIsXHJcbiAgICBcIk5vdmllbWJyZVwiLFxyXG4gICAgXCJEaWNpZW1icmVcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBnZW5lcmFyVmFsdWUgPSAobWVzKSA9PiB7XHJcbiAgICBpZiAobWVzID09IFwiRW5lcm9cIiAmJiBwb3JjZW50YWplQXVtZW50bykgcmV0dXJuIHByZWNpb0luaWNpYWw7XHJcbiAgICBlbHNlIGlmIChwb3JjZW50YWplQXVtZW50bykge1xyXG4gICAgICBsZXQgaW5pY2lhbCA9IDA7XHJcbiAgICAgIGxldCBpbmRleCA9IG1lc2VzLmluZGV4T2YobWVzKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXggLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICBpbmljaWFsID1cclxuICAgICAgICAgICAgcGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgK1xyXG4gICAgICAgICAgICAocGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaW5pY2lhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGluaWNpYWwgKz0gKGluaWNpYWwgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaW5pY2lhbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnfX0+UHJlY2lvIChQKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Zm9udFNpemU6ICdzbWFsbCd9fT5QbGFuIGRlIHZlbnRhczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICA8ZGl2IFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Zm9udFNpemU6ICcyMHB4J319PkNhcmdhIGRlIGRhdG9zIC8gcHJlY2lvczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIHtkYXRhLnBhaXNlcy5tYXAoKHBhaXMpID0+IChcclxuICAgICBcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17cGFpcy52YWx1ZSB9XHJcbiAgICAgICAgICAgICAgaWQ9e3BhaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ291bnRyeUNsaWNrKHBhaXMudmFsdWUpfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhaXMudmFsdWV9ICBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAge3NlbGVjdGVkQ291bnRyeSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2RhdGEuY2FuYWxlcy5tYXAoKGNhbmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE1OSwgMTY1LCAxNzApJyxcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTonMTYnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2FuYWwubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Bw5FPIDE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW5hbGVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlB1cmVDb21wb25lbnQiLCJnZXRBcGkiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJBZGFwdGVyRGF5anMiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkRhdGVQaWNrZXIiLCJQcm9kdWN0byIsIkNhbmFsZXMiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRDb3VudHJ5Iiwic2V0U2VsZWN0ZWRDb3VudHJ5IiwicHJlY2lvSW5pY2lhbCIsInNldFByZWNpb0luaWNpYWwiLCJwb3JjZW50YWplQXVtZW50byIsInNldFBvcmNlbnRhamVBdW1lbnRvIiwidGhlbiIsInJlc3BvbnNlIiwiYXNzdW1wdGlvbkRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNvdW50cnlDbGljayIsInBhaXMiLCJoYW5kbGVQcmVjaW9JbmljaWFsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlIiwiZGl2IiwibWVzZXMiLCJnZW5lcmFyVmFsdWUiLCJtZXMiLCJpbmljaWFsIiwiaW5kZXgiLCJpbmRleE9mIiwiaSIsInBhcnNlSW50Iiwic2VjdGlvbiIsInN0eWxlIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJwYWlzZXMiLCJtYXAiLCJpZCIsIm9uQ2xpY2siLCJjYW5hbGVzIiwiY2FuYWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/container/canales.js\n"));

/***/ })

});