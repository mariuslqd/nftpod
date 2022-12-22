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

/***/ "./pages/nfts.tsx":
/*!************************!*\
  !*** ./pages/nfts.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\nfunction NFTs() {\n    _s();\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    if (address) {\n        const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"{address}\");\n        const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }, [\n            walletAddress\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-10 flex flex-col items-center\",\n            children: [\n                !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Please connect a wallet to view your NFTs.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 20\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 mt-8 gap-4\",\n                    children: nfts.map((nft)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded border p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-[200px] h-[200px] rounded shadow\",\n                                    src: nft.imageUrl,\n                                    alt: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold mt-8\",\n                                    children: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: nft.collectionName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(NFTs, \"x17soHwPJjYmyEp3Yxc6Nij3hHg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQUE7QUFFbUQ7QUFDSTtBQUV0QjtBQUVsQixTQUFTSyxPQUFPOztJQUM3QixNQUFNLEVBQUNDLFFBQU8sRUFBQyxHQUFJRixpREFBVUE7SUFDN0IsSUFBSUUsU0FBUztRQUNiLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUNoRDtRQUVGLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBUSxFQUFFO1FBRTFDQyxnREFBU0EsQ0FBQyxJQUFNO1lBQ2IsV0FBWTtnQkFDWCxNQUFNLEVBQUVPLEtBQUksRUFBRSxHQUFHLE1BQU1OLHlEQUFPQSxDQUFDSTtnQkFDL0JHLFFBQVFEO1lBQ1Y7UUFDRixHQUFHO1lBQUNGO1NBQWM7UUFFbEIscUJBQ0UsOERBQUNJO1lBQUlDLFdBQVU7O2dCQUNaLENBQUNOLHlCQUFXLDhEQUFDTzs4QkFBRTs7Ozs7OzhCQUNoQiw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ1pILEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO3dCQUNqQixxQkFDRSw4REFBQ0o7NEJBRUNDLFdBQVU7OzhDQUVWLDhEQUFDSTtvQ0FDQ0osV0FBVTtvQ0FDVkssS0FBS0YsSUFBSUcsUUFBUTtvQ0FDakJDLEtBQUtKLElBQUlLLElBQUk7Ozs7Ozs4Q0FFZiw4REFBQ0M7b0NBQUtULFdBQVU7OENBQWtCRyxJQUFJSyxJQUFJOzs7Ozs7OENBQzFDLDhEQUFDQzs4Q0FBTU4sSUFBSU8sY0FBYzs7Ozs7OzsyQkFUcEIsR0FBMEJQLE9BQXZCQSxJQUFJUSxlQUFlLEVBQUMsS0FBZSxPQUFaUixJQUFJUyxPQUFPOzs7OztvQkFZaEQ7Ozs7Ozs7Ozs7OztJQUlSLENBQUM7QUFBQSxDQUFDO0dBdENzQm5COztRQUNIRCw2Q0FBVUE7OztLQURQQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRzLnRzeD81MDc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXROZnRzLCB1c2VOZnRzIH0gZnJvbSAgXCIuLi9wcm92aWRlcnMvYW5rZXJcIjtcclxuaW1wb3J0IHsgTmZ0IH0gZnJvbSAnQGFua3IuY29tL2Fua3IuanMvZGlzdC90eXBlcyc7XHJcbmltcG9ydCB7dXNlQWNjb3VudH0gZnJvbSBcIndhZ21pXCI7XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUcygpIHtcclxuICBjb25zdCB7YWRkcmVzc30gPSAodXNlQWNjb3VudCgpKTtcclxuICBpZiAoYWRkcmVzcykge1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJ7YWRkcmVzc31cIlxyXG4gICk7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGU8TmZ0W10+KFtdKTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5mdHMgfSA9IGF3YWl0IGdldE5mdHMod2FsbGV0QWRkcmVzcyk7XHJcbiAgICAgIHNldE5mdHMobmZ0cyk7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFt3YWxsZXRBZGRyZXNzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgIHshYWRkcmVzcyAmJiA8cD5QbGVhc2UgY29ubmVjdCBhIHdhbGxldCB0byB2aWV3IHlvdXIgTkZUcy48L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBtdC04IGdhcC00Jz5cclxuICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7bmZ0LmNvbnRyYWN0QWRkcmVzc30vJHtuZnQudG9rZW5JZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCByb3VuZGVkIGJvcmRlciBwLTQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzIwMHB4XSBoLVsyMDBweF0gcm91bmRlZCBzaGFkb3cnXHJcbiAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17bmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC04Jz57bmZ0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntuZnQuY29sbGVjdGlvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufX07XHJcbiAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldE5mdHMiLCJ1c2VBY2NvdW50IiwiTkZUcyIsImFkZHJlc3MiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIm5mdHMiLCJzZXROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIm5mdCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwibmFtZSIsInNwYW4iLCJjb2xsZWN0aW9uTmFtZSIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});