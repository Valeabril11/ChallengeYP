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

/***/ "./src/component/Valores.js":
/*!**********************************!*\
  !*** ./src/component/Valores.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Valores = (param)=>{\n    let { id , porcentajeAumento , precioInicial , mes  } = param;\n    _s();\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 8,\n            columnNumber: 16\n        }, undefined);\n    }\n    const generarValue = (mes)=>{\n        if (mes === \"Enero\" && porcentajeAumento) {\n            return precioInicial;\n        } else if (porcentajeAumento) {\n            const meses = [\n                \"Enero\",\n                \"Febrero\",\n                \"Marzo\",\n                \"Abril\",\n                \"Mayo\",\n                \"Junio\",\n                \"Julio\",\n                \"Agosto\",\n                \"Septiembre\",\n                \"Octubre\",\n                \"Noviembre\",\n                \"Diciembre\"\n            ];\n            const index = meses.findIndex((m)=>m === mes);\n            let inicial = 0;\n            for(let i = 0; i <= index; i++){\n                if (i === 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n            id: id,\n            value: generarValue(mes),\n            placeholder: \"$0\",\n            variant: \"outlined\",\n            style: {\n                marginRight: \"10px\",\n                size: \"10px\",\n                width: \"70px\"\n            },\n            type: \"number\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Valores, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Valores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Valores);\nvar _c;\n$RefreshReg$(_c, \"Valores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1ZhbG9yZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQ21CO0FBRTdDLE1BQU1HLFVBQVUsU0FBaUQ7UUFBaEQsRUFBQ0MsR0FBRSxFQUFFQyxrQkFBaUIsRUFBRUMsY0FBYSxFQUFFQyxJQUFHLEVBQUM7O0lBQ3hELE1BQU1DLE9BQU9OLDZEQUFVQTtJQUN2QixJQUFJLENBQUNNLEtBQUtDLFNBQVMsRUFBRTtRQUNqQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNoQixDQUFDO0lBR0QsTUFBTUMsZUFBZSxDQUFDSixNQUFRO1FBQzFCLElBQUlBLFFBQVEsV0FBV0YsbUJBQW1CO1lBQ3hDLE9BQU9DO1FBQ1QsT0FBTyxJQUFJRCxtQkFBbUI7WUFDNUIsTUFBTU8sUUFBUTtnQkFBQztnQkFBUztnQkFBVztnQkFBUztnQkFBUztnQkFBUTtnQkFBUztnQkFBUztnQkFBVTtnQkFBYztnQkFBVztnQkFBYTthQUFZO1lBQzNJLE1BQU1DLFFBQVFELE1BQU1FLFNBQVMsQ0FBQ0MsQ0FBQUEsSUFBS0EsTUFBTVI7WUFDekMsSUFBSVMsVUFBVTtZQUNkLElBQUssSUFBSUMsSUFBSSxHQUFHQSxLQUFLSixPQUFPSSxJQUFLO2dCQUMvQixJQUFJQSxNQUFNLEdBQUc7b0JBQ1hELFVBQVVFLFNBQVNaLGlCQUFpQixTQUFVQSxpQkFBaUJZLFNBQVNiLHFCQUFzQjtnQkFDaEcsT0FBTztvQkFDTFcsV0FBVyxVQUFXRSxTQUFTYixxQkFBc0I7Z0JBQ3ZELENBQUM7WUFDSDtZQUNBLE9BQU9XO1FBQ1QsQ0FBQztJQUNIO0lBSUYscUJBQ0ksOERBQUNOO2tCQUNHLDRFQUFDVixvREFBU0E7WUFDTkksSUFBSUE7WUFDUGUsT0FBT1IsYUFBYUo7WUFDakJhLGFBQVk7WUFDWkMsU0FBUTtZQUNSQyxPQUFPO2dCQUFFQyxhQUFhO2dCQUFRQyxNQUFLO2dCQUFRQyxPQUFPO1lBQVE7WUFDMURDLE1BQUs7Ozs7Ozs7Ozs7O0FBT3JCO0dBMUNNdkI7O1FBQ1dELHlEQUFVQTs7O0tBRHJCQztBQTRDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L1ZhbG9yZXMuanM/ODgwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcblxyXG5jb25zdCBWYWxvcmVzID0gKHtpZCwgcG9yY2VudGFqZUF1bWVudG8sIHByZWNpb0luaWNpYWwsIG1lc30pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXREYXRhKCk7XHJcbiAgICBpZiAoIWRhdGEucHJvZHVjdG9zKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZ2VuZXJhclZhbHVlID0gKG1lcykgPT4ge1xyXG4gICAgICAgIGlmIChtZXMgPT09IFwiRW5lcm9cIiAmJiBwb3JjZW50YWplQXVtZW50bykge1xyXG4gICAgICAgICAgcmV0dXJuIHByZWNpb0luaWNpYWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb3JjZW50YWplQXVtZW50bykge1xyXG4gICAgICAgICAgY29uc3QgbWVzZXMgPSBbXCJFbmVyb1wiLCBcIkZlYnJlcm9cIiwgXCJNYXJ6b1wiLCBcIkFicmlsXCIsIFwiTWF5b1wiLCBcIkp1bmlvXCIsIFwiSnVsaW9cIiwgXCJBZ29zdG9cIiwgXCJTZXB0aWVtYnJlXCIsIFwiT2N0dWJyZVwiLCBcIk5vdmllbWJyZVwiLCBcIkRpY2llbWJyZVwiXTtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWVzZXMuZmluZEluZGV4KG0gPT4gbSA9PT0gbWVzKTtcclxuICAgICAgICAgIGxldCBpbmljaWFsID0gMDtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICBpbmljaWFsID0gcGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgKyAocGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGluaWNpYWwgKz0gKGluaWNpYWwgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gaW5pY2lhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgIHZhbHVlPXtnZW5lcmFyVmFsdWUobWVzKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJDBcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgc2l6ZTonMTBweCcsIHdpZHRoOiAnNzBweCcgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbG9yZXM7XHJcbiJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJSZWFjdCIsInVzZUdldERhdGEiLCJWYWxvcmVzIiwiaWQiLCJwb3JjZW50YWplQXVtZW50byIsInByZWNpb0luaWNpYWwiLCJtZXMiLCJkYXRhIiwicHJvZHVjdG9zIiwiZGl2IiwiZ2VuZXJhclZhbHVlIiwibWVzZXMiLCJpbmRleCIsImZpbmRJbmRleCIsIm0iLCJpbmljaWFsIiwiaSIsInBhcnNlSW50IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJzdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2l6ZSIsIndpZHRoIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Valores.js\n"));

/***/ })

});