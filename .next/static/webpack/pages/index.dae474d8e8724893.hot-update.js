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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted && address) {\n            setWalletAddress(\"\".concat(address)); // set the walletAddress state variable\n        }\n    }, [\n        mounted,\n        address\n    ]); // re-run the effect whenever the mounted status or the wallet address changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted && walletAddress) {\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }\n    }, [\n        mounted,\n        walletAddress\n    ]); // re-run the effect whenever the mounted status or the wallet address changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 33,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"OA6o6FRSxHPZmFZ7owX2qVK4gTc=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdKLGlEQUFVQSxJQUFJLDRDQUE0QztJQUM5RSxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBcUJVO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBUSxFQUFFO0lBRTFDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUssV0FBV0MsU0FBUztZQUN0QkUsaUJBQWlCLEdBQVcsT0FBUkYsV0FBWSx1Q0FBdUM7UUFDekUsQ0FBQztJQUNILEdBQUc7UUFBQ0Q7UUFBU0M7S0FBUSxHQUFHLDhFQUE4RTtJQUV0R04sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlLLFdBQVdFLGVBQWU7WUFDM0IsV0FBWTtnQkFDWCxNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHLE1BQU1ULHlEQUFPQSxDQUFDTTtnQkFDL0JJLFFBQVFEO1lBQ1Y7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDTDtRQUFTRTtLQUFjLEdBQUcsOEVBQThFO0lBRzVHLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOztZQUNaLENBQUNQLHlCQUFXLDhEQUFDUTswQkFBRTs7Ozs7OzBCQUNoQiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1pILEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO29CQUNqQixxQkFDRSw4REFBQ0o7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssS0FBS0YsSUFBSUcsUUFBUTtnQ0FDakJDLEtBQUtKLElBQUlLLElBQUk7Ozs7OzswQ0FFZiw4REFBQ0M7Z0NBQUtULFdBQVU7MENBQWtCRyxJQUFJSyxJQUFJOzs7Ozs7MENBQzFDLDhEQUFDQzswQ0FBTU4sSUFBSU8sY0FBYzs7Ozs7Ozt1QkFUcEIsR0FBMEJQLE9BQXZCQSxJQUFJUSxlQUFlLEVBQUMsS0FBZSxPQUFaUixJQUFJUyxPQUFPOzs7OztnQkFZaEQ7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0E3Q3VCckI7O1FBQ05ELDZEQUFZQTtRQUNSRCw2Q0FBVUE7OztLQUZSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRzLnRzeD81MDc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXROZnRzLCB1c2VOZnRzIH0gZnJvbSAgXCIuLi9wcm92aWRlcnMvYW5rZXJcIjtcclxuaW1wb3J0IHsgTmZ0IH0gZnJvbSAnQGFua3IuY29tL2Fua3IuanMvZGlzdC90eXBlcyc7XHJcbmltcG9ydCB7dXNlQWNjb3VudH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7dXNlSXNNb3VudGVkfSBmcm9tIFwiLi9ob29rcy91c2VJc01vdW50ZWRcIlxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVHMoKSB7XHJcbiAgY29uc3QgbW91bnRlZCA9IHVzZUlzTW91bnRlZCgpOyAvLyB1c2UgdGhlIHVzZUlzTW91bnRlZCBob29rIHRvIGNoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpOyAvLyBnZXQgdGhlIGN1cnJlbnQgd2FsbGV0IGFkZHJlc3MgZnJvbSBXYWdtaVxyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZTxOZnRbXT4oW10pO1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb3VudGVkICYmIGFkZHJlc3MpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIGFuZCB0aGUgd2FsbGV0IGFkZHJlc3MgaXMgZGVmaW5lZFxyXG4gICAgICBzZXRXYWxsZXRBZGRyZXNzKGAke2FkZHJlc3N9YCk7IC8vIHNldCB0aGUgd2FsbGV0QWRkcmVzcyBzdGF0ZSB2YXJpYWJsZVxyXG4gICAgfVxyXG4gIH0sIFttb3VudGVkLCBhZGRyZXNzXSk7IC8vIHJlLXJ1biB0aGUgZWZmZWN0IHdoZW5ldmVyIHRoZSBtb3VudGVkIHN0YXR1cyBvciB0aGUgd2FsbGV0IGFkZHJlc3MgY2hhbmdlc1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb3VudGVkICYmIHdhbGxldEFkZHJlc3MpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIGFuZCB0aGUgd2FsbGV0QWRkcmVzcyBzdGF0ZSB2YXJpYWJsZSBpcyBkZWZpbmVkXHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuZnRzIH0gPSBhd2FpdCBnZXROZnRzKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICAgIHNldE5mdHMobmZ0cyk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgfSwgW21vdW50ZWQsIHdhbGxldEFkZHJlc3NdKTsgLy8gcmUtcnVuIHRoZSBlZmZlY3Qgd2hlbmV2ZXIgdGhlIG1vdW50ZWQgc3RhdHVzIG9yIHRoZSB3YWxsZXQgYWRkcmVzcyBjaGFuZ2VzXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgIHshYWRkcmVzcyAmJiA8cD5QbGVhc2UgY29ubmVjdCBhIHdhbGxldCB0byB2aWV3IHlvdXIgTkZUcy48L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBtdC04IGdhcC00Jz5cclxuICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7bmZ0LmNvbnRyYWN0QWRkcmVzc30vJHtuZnQudG9rZW5JZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCByb3VuZGVkIGJvcmRlciBwLTQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzIwMHB4XSBoLVsyMDBweF0gcm91bmRlZCBzaGFkb3cnXHJcbiAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17bmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC04Jz57bmZ0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntuZnQuY29sbGVjdGlvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0TmZ0cyIsInVzZUFjY291bnQiLCJ1c2VJc01vdW50ZWQiLCJORlRzIiwibW91bnRlZCIsImFkZHJlc3MiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsInVuZGVmaW5lZCIsIm5mdHMiLCJzZXROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIm5mdCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwibmFtZSIsInNwYW4iLCJjb2xsZWN0aW9uTmFtZSIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});