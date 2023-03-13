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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Valores = (param)=>{\n    let { id , porcentajeAumento , precioInicial , mes  } = param;\n    _s();\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 8,\n            columnNumber: 16\n        }, undefined);\n    }\n    const generarValue = (mes)=>{\n        if (mes === \"Enero\" && porcentajeAumento) {\n            return precioInicial;\n        } else if (porcentajeAumento) {\n            const meses = [\n                \"Enero\",\n                \"Febrero\",\n                \"Marzo\",\n                \"Abril\",\n                \"Mayo\",\n                \"Junio\",\n                \"Julio\",\n                \"Agosto\",\n                \"Septiembre\",\n                \"Octubre\",\n                \"Noviembre\",\n                \"Diciembre\"\n            ];\n            const index = meses.findIndex((m)=>m === mes);\n            let inicial = 0;\n            for(let i = 0; i <= index; i++){\n                if (i === 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n            id: id,\n            value: generarValue(mes),\n            placeholder: \"m$0\",\n            variant: \"outlined\",\n            style: {\n                marginRight: \"10px\",\n                size: \"10px\",\n                width: \"80px\"\n            },\n            type: \"text\",\n            InputProps: {\n                inputProps: {\n                    inputMode: \"numeric\",\n                    pattern: \"[0-9]*\"\n                }\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Valores, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Valores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Valores);\nvar _c;\n$RefreshReg$(_c, \"Valores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1ZhbG9yZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQ21CO0FBRTdDLE1BQU1HLFVBQVUsU0FBaUQ7UUFBaEQsRUFBQ0MsR0FBRSxFQUFFQyxrQkFBaUIsRUFBRUMsY0FBYSxFQUFFQyxJQUFHLEVBQUM7O0lBQ3hELE1BQU1DLE9BQU9OLDZEQUFVQTtJQUN2QixJQUFJLENBQUNNLEtBQUtDLFNBQVMsRUFBRTtRQUNqQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNoQixDQUFDO0lBR0QsTUFBTUMsZUFBZSxDQUFDSixNQUFRO1FBQzFCLElBQUlBLFFBQVEsV0FBV0YsbUJBQW1CO1lBQ3hDLE9BQU9DO1FBQ1QsT0FBTyxJQUFJRCxtQkFBbUI7WUFDNUIsTUFBTU8sUUFBUTtnQkFBQztnQkFBUztnQkFBVztnQkFBUztnQkFBUztnQkFBUTtnQkFBUztnQkFBUztnQkFBVTtnQkFBYztnQkFBVztnQkFBYTthQUFZO1lBQzNJLE1BQU1DLFFBQVFELE1BQU1FLFNBQVMsQ0FBQ0MsQ0FBQUEsSUFBS0EsTUFBTVI7WUFDekMsSUFBSVMsVUFBVTtZQUNkLElBQUssSUFBSUMsSUFBSSxHQUFHQSxLQUFLSixPQUFPSSxJQUFLO2dCQUMvQixJQUFJQSxNQUFNLEdBQUc7b0JBQ1hELFVBQVVFLFNBQVNaLGlCQUFpQixTQUFVQSxpQkFBaUJZLFNBQVNiLHFCQUFzQjtnQkFDaEcsT0FBTztvQkFDTFcsV0FBVyxVQUFXRSxTQUFTYixxQkFBc0I7Z0JBQ3ZELENBQUM7WUFDSDtZQUNBLE9BQU9XO1FBQ1QsQ0FBQztJQUNIO0lBSUYscUJBQ0ksOERBQUNOO2tCQUNHLDRFQUFDVixvREFBU0E7WUFDTkksSUFBSUE7WUFDUGUsT0FBT1IsYUFBYUo7WUFDakJhLGFBQVk7WUFDWkMsU0FBUTtZQUNSQyxPQUFPO2dCQUFFQyxhQUFhO2dCQUFRQyxNQUFLO2dCQUFRQyxPQUFPO1lBQVE7WUFDMURDLE1BQUs7WUFDakJDLFlBQVk7Z0JBQ1JDLFlBQVk7b0JBQ1JDLFdBQVc7b0JBQ1hDLFNBQVM7Z0JBQ2I7WUFDSjs7Ozs7Ozs7Ozs7QUFNSjtHQS9DTTNCOztRQUNXRCx5REFBVUE7OztLQURyQkM7QUFpRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9WYWxvcmVzLmpzPzg4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlR2V0RGF0YSBmcm9tIFwiLi4vaG9va3MvdXNlR2V0RGF0YVwiO1xyXG5cclxuY29uc3QgVmFsb3JlcyA9ICh7aWQsIHBvcmNlbnRhamVBdW1lbnRvLCBwcmVjaW9JbmljaWFsLCBtZXN9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlR2V0RGF0YSgpO1xyXG4gICAgaWYgKCFkYXRhLnByb2R1Y3Rvcykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXJWYWx1ZSA9IChtZXMpID0+IHtcclxuICAgICAgICBpZiAobWVzID09PSBcIkVuZXJvXCIgJiYgcG9yY2VudGFqZUF1bWVudG8pIHtcclxuICAgICAgICAgIHJldHVybiBwcmVjaW9JbmljaWFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9yY2VudGFqZUF1bWVudG8pIHtcclxuICAgICAgICAgIGNvbnN0IG1lc2VzID0gW1wiRW5lcm9cIiwgXCJGZWJyZXJvXCIsIFwiTWFyem9cIiwgXCJBYnJpbFwiLCBcIk1heW9cIiwgXCJKdW5pb1wiLCBcIkp1bGlvXCIsIFwiQWdvc3RvXCIsIFwiU2VwdGllbWJyZVwiLCBcIk9jdHVicmVcIiwgXCJOb3ZpZW1icmVcIiwgXCJEaWNpZW1icmVcIl07XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IG1lc2VzLmZpbmRJbmRleChtID0+IG0gPT09IG1lcyk7XHJcbiAgICAgICAgICBsZXQgaW5pY2lhbCA9IDA7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgaW5pY2lhbCA9IHBhcnNlSW50KHByZWNpb0luaWNpYWwpICsgKHBhcnNlSW50KHByZWNpb0luaWNpYWwpICogcGFyc2VJbnQocG9yY2VudGFqZUF1bWVudG8pKSAvIDEwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpbmljaWFsICs9IChpbmljaWFsICogcGFyc2VJbnQocG9yY2VudGFqZUF1bWVudG8pKSAvIDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGluaWNpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICB2YWx1ZT17Z2VuZXJhclZhbHVlKG1lcyl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm0kMFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBzaXplOicxMHB4Jywgd2lkdGg6ICc4MHB4JyAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgaW5wdXRQcm9wczoge1xyXG4gICAgICAgICAgICBpbnB1dE1vZGU6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgcGF0dGVybjogJ1swLTldKidcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsb3JlcztcclxuIl0sIm5hbWVzIjpbIlRleHRGaWVsZCIsIlJlYWN0IiwidXNlR2V0RGF0YSIsIlZhbG9yZXMiLCJpZCIsInBvcmNlbnRhamVBdW1lbnRvIiwicHJlY2lvSW5pY2lhbCIsIm1lcyIsImRhdGEiLCJwcm9kdWN0b3MiLCJkaXYiLCJnZW5lcmFyVmFsdWUiLCJtZXNlcyIsImluZGV4IiwiZmluZEluZGV4IiwibSIsImluaWNpYWwiLCJpIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidmFyaWFudCIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJzaXplIiwid2lkdGgiLCJ0eXBlIiwiSW5wdXRQcm9wcyIsImlucHV0UHJvcHMiLCJpbnB1dE1vZGUiLCJwYXR0ZXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Valores.js\n"));

/***/ })

});