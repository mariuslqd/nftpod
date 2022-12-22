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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)();\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    if (mounted) {\n        const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"herewalletaddress\");\n        const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }, [\n            mounted,\n            walletAddress\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-10 flex flex-col items-center\",\n            children: [\n                !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Please connect a wallet to view your NFTs.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 20\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 mt-8 gap-4\",\n                    children: nfts.map((nft)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded border p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-[200px] h-[200px] rounded shadow\",\n                                    src: nft.imageUrl,\n                                    alt: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold mt-8\",\n                                    children: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: nft.collectionName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(NFTs, \"yknlcGCudXtdJq8ZMyfdloesPQc=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBO0lBQzVCLE1BQU0sRUFBQ0csUUFBTyxFQUFDLEdBQUlKLGlEQUFVQTtJQUM3QixJQUFJRyxTQUFTO1FBQ2IsTUFBTSxDQUFDRSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQ2hEO1FBRUYsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFRLEVBQUU7UUFFMUNDLGdEQUFTQSxDQUFDLElBQU07WUFDYixXQUFZO2dCQUNYLE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUcsTUFBTVIseURBQU9BLENBQUNNO2dCQUMvQkcsUUFBUUQ7WUFDVjtRQUNGLEdBQUc7WUFBQ0o7WUFBU0U7U0FBYztRQUczQixxQkFDRSw4REFBQ0k7WUFBSUMsV0FBVTs7Z0JBQ1osQ0FBQ04seUJBQVcsOERBQUNPOzhCQUFFOzs7Ozs7OEJBQ2hCLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDWkgsS0FBS0ssR0FBRyxDQUFDLENBQUNDLE1BQVE7d0JBQ2pCLHFCQUNFLDhEQUFDSjs0QkFFQ0MsV0FBVTs7OENBRVYsOERBQUNJO29DQUNDSixXQUFVO29DQUNWSyxLQUFLRixJQUFJRyxRQUFRO29DQUNqQkMsS0FBS0osSUFBSUssSUFBSTs7Ozs7OzhDQUVmLDhEQUFDQztvQ0FBS1QsV0FBVTs4Q0FBa0JHLElBQUlLLElBQUk7Ozs7Ozs4Q0FDMUMsOERBQUNDOzhDQUFNTixJQUFJTyxjQUFjOzs7Ozs7OzJCQVRwQixHQUEwQlAsT0FBdkJBLElBQUlRLGVBQWUsRUFBQyxLQUFlLE9BQVpSLElBQUlTLE9BQU87Ozs7O29CQVloRDs7Ozs7Ozs7Ozs7O0lBSVIsQ0FBQztBQUFBLENBQUM7R0F4Q3NCcEI7O1FBQ05ELDZEQUFZQTtRQUNURCw2Q0FBVUE7OztLQUZQRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRzLnRzeD81MDc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXROZnRzLCB1c2VOZnRzIH0gZnJvbSAgXCIuLi9wcm92aWRlcnMvYW5rZXJcIjtcclxuaW1wb3J0IHsgTmZ0IH0gZnJvbSAnQGFua3IuY29tL2Fua3IuanMvZGlzdC90eXBlcyc7XHJcbmltcG9ydCB7dXNlQWNjb3VudH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7dXNlSXNNb3VudGVkfSBmcm9tIFwiLi9ob29rcy91c2VJc01vdW50ZWRcIlxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVHMoKSB7XHJcbiAgY29uc3QgbW91bnRlZCA9IHVzZUlzTW91bnRlZCgpO1xyXG4gIGNvbnN0IHthZGRyZXNzfSA9ICh1c2VBY2NvdW50KCkpO1xyXG4gIGlmIChtb3VudGVkKSB7XHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXHJcbiAgICBcImhlcmV3YWxsZXRhZGRyZXNzXCJcclxuICApO1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5mdFtdPihbXSk7XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBuZnRzIH0gPSBhd2FpdCBnZXROZnRzKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICBzZXROZnRzKG5mdHMpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbbW91bnRlZCwgd2FsbGV0QWRkcmVzc10pO1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICB7IWFkZHJlc3MgJiYgPHA+UGxlYXNlIGNvbm5lY3QgYSB3YWxsZXQgdG8gdmlldyB5b3VyIE5GVHMuPC9wPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTQgbXQtOCBnYXAtNCc+XHJcbiAgICAgICAge25mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2Ake25mdC5jb250cmFjdEFkZHJlc3N9LyR7bmZ0LnRva2VuSWR9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcm91bmRlZCBib3JkZXIgcC00J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LVsyMDBweF0gaC1bMjAwcHhdIHJvdW5kZWQgc2hhZG93J1xyXG4gICAgICAgICAgICAgICAgc3JjPXtuZnQuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e25mdC5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtOCc+e25mdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57bmZ0LmNvbGxlY3Rpb25OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn19O1xyXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXROZnRzIiwidXNlQWNjb3VudCIsInVzZUlzTW91bnRlZCIsIk5GVHMiLCJtb3VudGVkIiwiYWRkcmVzcyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwibmZ0cyIsInNldE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwibmZ0IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwic3BhbiIsImNvbGxlY3Rpb25OYW1lIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});