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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetData */ \"./src/hooks/useGetData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Valores = (param)=>{\n    let { id  } = param;\n    _s();\n    const data = (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!data.productos) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 8,\n            columnNumber: 16\n        }, undefined);\n    }\n    const generarValue = (mes)=>{\n        if (mes == \"Enero\" && porcentajeAumento) return precioInicial;\n        else if (porcentajeAumento) {\n            let inicial = 0;\n            let index = mes.indexOf(mes);\n            for(let i = 0; i <= index - 1; i++){\n                if (i == 0) {\n                    inicial = parseInt(precioInicial) + parseInt(precioInicial) * parseInt(porcentajeAumento) / 100;\n                } else {\n                    inicial += inicial * parseInt(porcentajeAumento) / 100;\n                }\n            }\n            return inicial;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n            id: id,\n            // value={generarValue(mes)}\n            placeholder: \"m$0\",\n            variant: \"outlined\",\n            style: {\n                marginRight: \"10px\",\n                fontSize: \"10px\"\n            },\n            type: \"number\",\n            value: generarValue()\n        }, void 0, false, {\n            fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ecritorio\\\\ChallengeYP\\\\src\\\\component\\\\Valores.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Valores, \"Rm6mO6QsAyZrdbqELtktIrEcgOA=\", false, function() {\n    return [\n        _hooks_useGetData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Valores;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Valores);\nvar _c;\n$RefreshReg$(_c, \"Valores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1ZhbG9yZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQ21CO0FBRTdDLE1BQU1HLFVBQVUsU0FBWTtRQUFYLEVBQUVDLEdBQUUsRUFBRTs7SUFDbkIsTUFBTUMsT0FBT0gsNkRBQVVBO0lBQ3ZCLElBQUksQ0FBQ0csS0FBS0MsU0FBUyxFQUFFO1FBQ2pCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2hCLENBQUM7SUFHRCxNQUFNQyxlQUFlLENBQUNDLE1BQVE7UUFDMUIsSUFBSUEsT0FBTyxXQUFXQyxtQkFBbUIsT0FBT0M7YUFDM0MsSUFBSUQsbUJBQW1CO1lBQ3hCLElBQUlFLFVBQVU7WUFDZCxJQUFJQyxRQUFRSixJQUFJSyxPQUFPLENBQUNMO1lBQ3hCLElBQUssSUFBSU0sSUFBSSxHQUFHQSxLQUFLRixRQUFRLEdBQUdFLElBQUs7Z0JBQ2pDLElBQUlBLEtBQUssR0FBRztvQkFDUkgsVUFDSUksU0FBU0wsaUJBQ1QsU0FBVUEsaUJBQWlCSyxTQUFTTixxQkFBc0I7Z0JBQ2xFLE9BQU87b0JBQ0hFLFdBQVcsVUFBV0ksU0FBU04scUJBQXNCO2dCQUN6RCxDQUFDO1lBQ0w7WUFDQSxPQUFPRTtRQUNYLENBQUM7SUFDTDtJQUdBLHFCQUNJLDhEQUFDTDtrQkFDRyw0RUFBQ1Asb0RBQVNBO1lBQ05JLElBQUlBO1lBQ0osNEJBQTRCO1lBQzVCYSxhQUFZO1lBQ1pDLFNBQVE7WUFDUkMsT0FBTztnQkFBRUMsYUFBYTtnQkFBUUMsVUFBUztZQUFPO1lBQzlDQyxNQUFLO1lBQ0xDLE9BQU9mOzs7Ozs7Ozs7OztBQUt2QjtHQXhDTUw7O1FBQ1dELHlEQUFVQTs7O0tBRHJCQztBQTBDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L1ZhbG9yZXMuanM/ODgwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VHZXREYXRhIGZyb20gXCIuLi9ob29rcy91c2VHZXREYXRhXCI7XHJcblxyXG5jb25zdCBWYWxvcmVzID0gKHsgaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldERhdGEoKTtcclxuICAgIGlmICghZGF0YS5wcm9kdWN0b3MpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBnZW5lcmFyVmFsdWUgPSAobWVzKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lcyA9PSBcIkVuZXJvXCIgJiYgcG9yY2VudGFqZUF1bWVudG8pIHJldHVybiBwcmVjaW9JbmljaWFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHBvcmNlbnRhamVBdW1lbnRvKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmljaWFsID0gMDtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbWVzLmluZGV4T2YobWVzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmljaWFsID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VJbnQocHJlY2lvSW5pY2lhbCkgKiBwYXJzZUludChwb3JjZW50YWplQXVtZW50bykpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmljaWFsICs9IChpbmljaWFsICogcGFyc2VJbnQocG9yY2VudGFqZUF1bWVudG8pKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5pY2lhbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtnZW5lcmFyVmFsdWUobWVzKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibSQwXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIGZvbnRTaXplOicxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2dlbmVyYXJWYWx1ZSgpfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxvcmVzO1xyXG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiUmVhY3QiLCJ1c2VHZXREYXRhIiwiVmFsb3JlcyIsImlkIiwiZGF0YSIsInByb2R1Y3RvcyIsImRpdiIsImdlbmVyYXJWYWx1ZSIsIm1lcyIsInBvcmNlbnRhamVBdW1lbnRvIiwicHJlY2lvSW5pY2lhbCIsImluaWNpYWwiLCJpbmRleCIsImluZGV4T2YiLCJpIiwicGFyc2VJbnQiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/Valores.js\n"));

/***/ })

});