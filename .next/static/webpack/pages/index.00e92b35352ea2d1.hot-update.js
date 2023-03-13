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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getApi.js */ \"./src/hooks/getApi.js\");\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Producto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Producto.js */ \"./src/component/Producto.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Canales = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCountry, setSelectedCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [precioInicial, setPrecioInicial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [porcentajeAumento, setPorcentajeAumento] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__.getApi)().then((response)=>{\n            setData(response.response.assumptionData[0]);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(error);\n            setLoading(false);\n        });\n    }, []);\n    const handleCountryClick = (pais)=>{\n        setSelectedCountry(pais);\n    };\n    const handlePrecioInicialChange = (event)=>{\n        setPrecioInicial(event.target.value);\n    };\n    const handlePorcentajeAumentoChange = (event)=>{\n        setPorcentajeAumento(event.target.value);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, undefined);\n    }\n    console.log(data);\n    console.log(\"soy home\");\n    const meses = [\n        \"Enero\",\n        \"Febrero\",\n        \"Marzo\",\n        \"Abril\",\n        \"Mayo\",\n        \"Junio\",\n        \"Julio\",\n        \"Agosto\",\n        \"Septiembre\",\n        \"Octubre\",\n        \"Noviembre\",\n        \"Diciembre\"\n    ];\n    const generarValue = (mes)=>{\n        if (mes == \"Enero\" && porcentajeAumento) return precioInicial;\n        else if (porcentajeAumento) {\n            let inicial = 0;\n            let index = meses.indexOf(mes);\n            for(let i = 0; i <= index - 1; i++){\n                if (i == 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                    console.log(inicial);\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Precio (P)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 80,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"small\"\n                },\n                children: \"Plan de ventas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 81,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            style: {\n                                fontSize: \"20px\"\n                            },\n                            children: \"Carga de datos / precios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, undefined),\n                        data.paises.map((pais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: pais.value,\n                                onClick: ()=>handleCountryClick(pais.value),\n                                children: pais.value\n                            }, pais.value, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)),\n                        selectedCountry && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.canales.map((canal)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundColor: \"rgb(159, 165, 170)\",\n                                                textAlign: \"center\",\n                                                marginTop: \"12px\",\n                                                marginBottom: \"20px\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    children: canal.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                    children: \"A\\xd1O 1\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Producto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Canales, \"udFpxTcsY2zDTL6ZlXn7Q6EliOA=\");\n_c = Canales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canales);\nvar _c;\n$RefreshReg$(_c, \"Canales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBU2xCbEIsaUNBQ0MsOERBQUNvQjtzQ0FDRXhCLEtBQUt5QyxPQUFPLENBQUNILEdBQUcsQ0FBQyxDQUFDSSxRQUFVO2dDQUMzQixxQkFDRSw4REFBQ2xCOztzREFDQyw4REFBQ0E7NENBQUlVLE9BQU87Z0RBQ1hTLGlCQUFpQjtnREFDakJDLFdBQVc7Z0RBQ1hSLFdBQVc7Z0RBQ1hTLGNBQWE7NENBQ2Q7OzhEQUNFLDhEQUFDaEQscURBQVVBOzhEQUFFNkMsTUFBTUksSUFBSTs7Ozs7OzhEQUN2Qiw4REFBQ2pELHFEQUFVQTs4REFBQzs7Ozs7Ozs7Ozs7O3NEQUVkLDhEQUFDQyw4REFBUUE7Ozs7Ozs7Ozs7OzRCQUdmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBeEhNQztLQUFBQTtBQTBITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanM/NDFiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBcGkgfSBmcm9tIFwiLi4vaG9va3MvZ2V0QXBpLmpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUHJvZHVjdG8gZnJvbSBcIi4uL2NvbXBvbmVudC9Qcm9kdWN0by5qc1wiO1xyXG5cclxuY29uc3QgQ2FuYWxlcyA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDb3VudHJ5LCBzZXRTZWxlY3RlZENvdW50cnldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3ByZWNpb0luaWNpYWwsIHNldFByZWNpb0luaWNpYWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BvcmNlbnRhamVBdW1lbnRvLCBzZXRQb3JjZW50YWplQXVtZW50b10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaSgpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UucmVzcG9uc2UuYXNzdW1wdGlvbkRhdGFbMF0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvdW50cnlDbGljayA9IChwYWlzKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZENvdW50cnkocGFpcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UHJlY2lvSW5pY2lhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBvcmNlbnRhamVBdW1lbnRvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRQb3JjZW50YWplQXVtZW50byhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2PkNhcmdhbmRvLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc29sZS5sb2coXCJzb3kgaG9tZVwiKTtcclxuICBjb25zdCBtZXNlcyA9IFtcclxuICAgIFwiRW5lcm9cIixcclxuICAgIFwiRmVicmVyb1wiLFxyXG4gICAgXCJNYXJ6b1wiLFxyXG4gICAgXCJBYnJpbFwiLFxyXG4gICAgXCJNYXlvXCIsXHJcbiAgICBcIkp1bmlvXCIsXHJcbiAgICBcIkp1bGlvXCIsXHJcbiAgICBcIkFnb3N0b1wiLFxyXG4gICAgXCJTZXB0aWVtYnJlXCIsXHJcbiAgICBcIk9jdHVicmVcIixcclxuICAgIFwiTm92aWVtYnJlXCIsXHJcbiAgICBcIkRpY2llbWJyZVwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdlbmVyYXJWYWx1ZSA9IChtZXMpID0+IHtcclxuICAgIGlmIChtZXMgPT0gXCJFbmVyb1wiICYmIHBvcmNlbnRhamVBdW1lbnRvKSByZXR1cm4gcHJlY2lvSW5pY2lhbDtcclxuICAgIGVsc2UgaWYgKHBvcmNlbnRhamVBdW1lbnRvKSB7XHJcbiAgICAgIGxldCBpbmljaWFsID0gMDtcclxuICAgICAgbGV0IGluZGV4ID0gbWVzZXMuaW5kZXhPZihtZXMpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgIGluaWNpYWwgPVxyXG4gICAgICAgICAgICBwYXJzZUludChwcmVjaW9JbmljaWFsKSArXHJcbiAgICAgICAgICAgIChwYXJzZUludChwcmVjaW9JbmljaWFsKSAqIHBhcnNlSW50KHBvcmNlbnRhamVBdW1lbnRvKSkgLyAxMDA7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmljaWFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW5pY2lhbCArPSAoaW5pY2lhbCAqIHBhcnNlSW50KHBvcmNlbnRhamVBdW1lbnRvKSkgLyAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpbmljaWFsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCd9fT5QcmVjaW8gKFApPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tmb250U2l6ZTogJ3NtYWxsJ319PlBsYW4gZGUgdmVudGFzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tmb250U2l6ZTogJzIwcHgnfX0+Q2FyZ2EgZGUgZGF0b3MgLyBwcmVjaW9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAge2RhdGEucGFpc2VzLm1hcCgocGFpcykgPT4gKFxyXG4gICAgIFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtwYWlzLnZhbHVlIH1cclxuICAgICAgICAgICAgICBpZD17cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb3VudHJ5Q2xpY2socGFpcy52YWx1ZSl9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGFpcy52YWx1ZX0gIFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB7c2VsZWN0ZWRDb3VudHJ5ICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7ZGF0YS5jYW5hbGVzLm1hcCgoY2FuYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTU5LCAxNjUsIDE3MCknLFxyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOicyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NhbmFsLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+QcORTyAxPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0by8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FuYWxlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQdXJlQ29tcG9uZW50IiwiZ2V0QXBpIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiUHJvZHVjdG8iLCJDYW5hbGVzIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkQ291bnRyeSIsInNldFNlbGVjdGVkQ291bnRyeSIsInByZWNpb0luaWNpYWwiLCJzZXRQcmVjaW9JbmljaWFsIiwicG9yY2VudGFqZUF1bWVudG8iLCJzZXRQb3JjZW50YWplQXVtZW50byIsInRoZW4iLCJyZXNwb25zZSIsImFzc3VtcHRpb25EYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDb3VudHJ5Q2xpY2siLCJwYWlzIiwiaGFuZGxlUHJlY2lvSW5pY2lhbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3JjZW50YWplQXVtZW50b0NoYW5nZSIsImRpdiIsIm1lc2VzIiwiZ2VuZXJhclZhbHVlIiwibWVzIiwiaW5pY2lhbCIsImluZGV4IiwiaW5kZXhPZiIsImkiLCJwYXJzZUludCIsInNlY3Rpb24iLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwicGFpc2VzIiwibWFwIiwiaWQiLCJvbkNsaWNrIiwiY2FuYWxlcyIsImNhbmFsIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/container/canales.js\n"));

/***/ })

});