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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)();\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    if (mounted) {\n        const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(address));\n        const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }, [\n            walletAddress\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-10 flex flex-col items-center\",\n            children: [\n                !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Please connect a wallet to view your NFTs.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 20\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 mt-8 gap-4\",\n                    children: nfts.map((nft)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded border p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-[200px] h-[200px] rounded shadow\",\n                                    src: nft.imageUrl,\n                                    alt: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold mt-8\",\n                                    children: nft.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: nft.collectionName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(NFTs, \"yknlcGCudXtdJq8ZMyfdloesPQc=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBO0lBQzVCLE1BQU0sRUFBQ0csUUFBTyxFQUFDLEdBQUlKLGlEQUFVQTtJQUM3QixJQUFJRyxTQUFTO1FBQ2IsTUFBTSxDQUFDRSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUMsR0FBVyxPQUFSTztRQUV0RCxNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQVEsRUFBRTtRQUUxQ0MsZ0RBQVNBLENBQUMsSUFBTTtZQUNiLFdBQVk7Z0JBQ1gsTUFBTSxFQUFFUyxLQUFJLEVBQUUsR0FBRyxNQUFNUix5REFBT0EsQ0FBQ007Z0JBQy9CRyxRQUFRRDtZQUNWO1FBQ0YsR0FBRztZQUFDRjtTQUFjO1FBRWxCLHFCQUNFLDhEQUFDSTtZQUFJQyxXQUFVOztnQkFDWixDQUFDTix5QkFBVyw4REFBQ087OEJBQUU7Ozs7Ozs4QkFDaEIsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNaSCxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTt3QkFDakIscUJBQ0UsOERBQUNKOzRCQUVDQyxXQUFVOzs4Q0FFViw4REFBQ0k7b0NBQ0NKLFdBQVU7b0NBQ1ZLLEtBQUtGLElBQUlHLFFBQVE7b0NBQ2pCQyxLQUFLSixJQUFJSyxJQUFJOzs7Ozs7OENBRWYsOERBQUNDO29DQUFLVCxXQUFVOzhDQUFrQkcsSUFBSUssSUFBSTs7Ozs7OzhDQUMxQyw4REFBQ0M7OENBQU1OLElBQUlPLGNBQWM7Ozs7Ozs7MkJBVHBCLEdBQTBCUCxPQUF2QkEsSUFBSVEsZUFBZSxFQUFDLEtBQWUsT0FBWlIsSUFBSVMsT0FBTzs7Ozs7b0JBWWhEOzs7Ozs7Ozs7Ozs7SUFJUixDQUFDO0FBQUEsQ0FBQztHQXRDc0JwQjs7UUFDTkQsNkRBQVlBO1FBQ1RELDZDQUFVQTs7O0tBRlBFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdHMudHN4PzUwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldE5mdHMsIHVzZU5mdHMgfSBmcm9tICBcIi4uL3Byb3ZpZGVycy9hbmtlclwiO1xyXG5pbXBvcnQgeyBOZnQgfSBmcm9tICdAYW5rci5jb20vYW5rci5qcy9kaXN0L3R5cGVzJztcclxuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHt1c2VJc01vdW50ZWR9IGZyb20gXCIuL2hvb2tzL3VzZUlzTW91bnRlZFwiXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUcygpIHtcclxuICBjb25zdCBtb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XHJcbiAgY29uc3Qge2FkZHJlc3N9ID0gKHVzZUFjY291bnQoKSk7XHJcbiAgaWYgKG1vdW50ZWQpIHtcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShgJHthZGRyZXNzfWApO1xyXG5cclxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZTxOZnRbXT4oW10pO1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmZ0cyB9ID0gYXdhaXQgZ2V0TmZ0cyh3YWxsZXRBZGRyZXNzKTtcclxuICAgICAgc2V0TmZ0cyhuZnRzKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW3dhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgeyFhZGRyZXNzICYmIDxwPlBsZWFzZSBjb25uZWN0IGEgd2FsbGV0IHRvIHZpZXcgeW91ciBORlRzLjwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IG10LTggZ2FwLTQnPlxyXG4gICAgICAgIHtuZnRzLm1hcCgobmZ0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtuZnQuY29udHJhY3RBZGRyZXNzfS8ke25mdC50b2tlbklkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQgYm9yZGVyIHAtNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bMjAwcHhdIGgtWzIwMHB4XSByb3VuZGVkIHNoYWRvdydcclxuICAgICAgICAgICAgICAgIHNyYz17bmZ0LmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuZnQubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTgnPntuZnQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25mdC5jb2xsZWN0aW9uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59fTtcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0TmZ0cyIsInVzZUFjY291bnQiLCJ1c2VJc01vdW50ZWQiLCJORlRzIiwibW91bnRlZCIsImFkZHJlc3MiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIm5mdHMiLCJzZXROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIm5mdCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwibmFtZSIsInNwYW4iLCJjb2xsZWN0aW9uTmFtZSIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});