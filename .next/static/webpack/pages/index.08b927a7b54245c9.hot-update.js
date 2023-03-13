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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getApi.js */ \"./src/hooks/getApi.js\");\n/* harmony import */ var _hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _component_Producto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Producto.js */ \"./src/component/Producto.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Canales = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCountry, setSelectedCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_getApi_js__WEBPACK_IMPORTED_MODULE_2__.getApi)().then((response)=>{\n            setData(response.response.assumptionData[0]);\n            setLoading(false);\n        }).catch((error)=>{\n            console.log(error);\n            setLoading(false);\n        });\n    }, []);\n    const handleCountryClick = (pais)=>{\n        setSelectedCountry(pais);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n            lineNumber: 29,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Precio (P)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                style: {\n                    fontSize: \"small\"\n                },\n                children: \"Plan de ventas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\",\n                    size: \"50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            style: {\n                                fontSize: \"20px\"\n                            },\n                            children: \"Carga de datos / precios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        data.paises.map((pais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: pais.value,\n                                onClick: ()=>handleCountryClick(pais.value),\n                                children: pais.value\n                            }, pais.value, false, {\n                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)),\n                        selectedCountry && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.canales.map((canal)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundColor: \"rgb(159, 165, 170)\",\n                                                textAlign: \"center\",\n                                                marginTop: \"12px\",\n                                                marginBottom: \"8px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                children: canal.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            style: {\n                                                backgroundColor: \"rgb(194, 194, 194, 0.5)\",\n                                                textAlign: \"center\",\n                                                marginBottom: \"20px\",\n                                                marginLeft: \"23rem\"\n                                            },\n                                            children: \"A\\xd1O 1\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Producto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            canal: canal.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 37\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\container\\\\canales.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Canales, \"RAFfESEzzzaAVJR97/maJDXAph4=\");\n_c = Canales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canales);\nvar _c;\n$RefreshReg$(_c, \"Canales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ3RCO0FBQ0Y7QUFDQztBQUNLO0FBRWhELE1BQU1RLFVBQVUsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pFLHdEQUFNQSxHQUNMVyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNoQk4sUUFBUU0sU0FBU0EsUUFBUSxDQUFDQyxjQUFjLENBQUMsRUFBRTtZQUMzQ0wsV0FBVyxLQUFLO1FBQ3BCLEdBQ0NNLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlAsV0FBVyxLQUFLO1FBQ3BCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTVUscUJBQXFCLENBQUNDLE9BQVM7UUFDakNULG1CQUFtQlM7SUFDdkI7SUFFQSxJQUFJWixTQUFTO1FBQ1QscUJBQU8sOERBQUNhO3NCQUFJOzs7Ozs7SUFDaEIsQ0FBQztJQUlELHFCQUNJLDhEQUFDQzs7MEJBRUcsOERBQUNuQixxREFBVUE7Z0JBQUNvQixPQUFPO29CQUFFQyxVQUFVO2dCQUFPOzBCQUFHOzs7Ozs7MEJBQ3pDLDhEQUFDckIscURBQVVBO2dCQUFDb0IsT0FBTztvQkFBRUMsVUFBVTtnQkFBUTswQkFBRzs7Ozs7OzBCQUUxQyw4REFBQ0g7Z0JBQUlFLE9BQU87b0JBQUVFLFdBQVc7b0JBQVFDLE1BQUs7Z0JBQU07MEJBQ3hDLDRFQUFDTDs7c0NBQ0csOERBQUNsQixxREFBVUE7NEJBQUNvQixPQUFPO2dDQUFFQyxVQUFVOzRCQUFPO3NDQUFHOzs7Ozs7d0JBRXhDbEIsS0FBS3FCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNSLHFCQUNkLDhEQUFDbEIsNERBQU1BO2dDQUVIMkIsSUFBSVQsS0FBS1UsS0FBSztnQ0FDZEMsU0FBUyxJQUFNWixtQkFBbUJDLEtBQUtVLEtBQUs7MENBQzNDVixLQUFLVSxLQUFLOytCQUhOVixLQUFLVSxLQUFLOzs7Ozt3QkFNdEJwQixpQ0FDRyw4REFBQ1c7c0NBQ0lmLEtBQUswQixPQUFPLENBQUNKLEdBQUcsQ0FBQyxDQUFDSyxRQUFVO2dDQUN6QixxQkFDSSw4REFBQ1o7O3NEQUNHLDhEQUFDQTs0Q0FBSUUsT0FBTztnREFDUlcsaUJBQWlCO2dEQUNqQkMsV0FBVztnREFDWFYsV0FBVztnREFDWFcsY0FBYzs0Q0FDbEI7c0RBQ0ksNEVBQUNqQyxxREFBVUE7MERBQUU4QixNQUFNSSxJQUFJOzs7Ozs7Ozs7OztzREFFM0IsOERBQUNsQyxxREFBVUE7NENBQ1BvQixPQUFPO2dEQUNIVyxpQkFBaUI7Z0RBQ2pCQyxXQUFXO2dEQUNYQyxjQUFjO2dEQUNkRSxZQUFZOzRDQUNoQjtzREFBRzs7Ozs7O3NEQUdQLDhEQUFDbEMsOERBQVFBOzRDQUFDNkIsT0FBT0EsTUFBTUksSUFBSTs7Ozs7Ozs7Ozs7OzRCQUd2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUI7R0E3RU1oQztLQUFBQTtBQStFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL2NhbmFsZXMuanM/NDFiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBcGkgfSBmcm9tIFwiLi4vaG9va3MvZ2V0QXBpLmpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUHJvZHVjdG8gZnJvbSBcIi4uL2NvbXBvbmVudC9Qcm9kdWN0by5qc1wiO1xyXG5cclxuY29uc3QgQ2FuYWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDb3VudHJ5LCBzZXRTZWxlY3RlZENvdW50cnldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0QXBpKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5yZXNwb25zZS5hc3N1bXB0aW9uRGF0YVswXSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDb3VudHJ5Q2xpY2sgPSAocGFpcykgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ291bnRyeShwYWlzKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uID5cclxuXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcgfX0+UHJlY2lvIChQKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbCcgfX0+UGxhbiBkZSB2ZW50YXM8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnLCBzaXplOic1MHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19PkNhcmdhIGRlIGRhdG9zIC8gcHJlY2lvczwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEucGFpc2VzLm1hcCgocGFpcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvdW50cnlDbGljayhwYWlzLnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFpcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvdW50cnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2FuYWxlcy5tYXAoKGNhbmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTU5LCAxNjUsIDE3MCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NhbmFsLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxOTQsIDE5NCwgMTk0LCAwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyM3JlbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBw5FPIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byBjYW5hbD17Y2FuYWwubmFtZX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FuYWxlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQdXJlQ29tcG9uZW50IiwiZ2V0QXBpIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlByb2R1Y3RvIiwiQ2FuYWxlcyIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZENvdW50cnkiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJhc3N1bXB0aW9uRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ291bnRyeUNsaWNrIiwicGFpcyIsImRpdiIsInNlY3Rpb24iLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwic2l6ZSIsInBhaXNlcyIsIm1hcCIsImlkIiwidmFsdWUiLCJvbkNsaWNrIiwiY2FuYWxlcyIsImNhbmFsIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibmFtZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/container/canales.js\n"));

/***/ })

});