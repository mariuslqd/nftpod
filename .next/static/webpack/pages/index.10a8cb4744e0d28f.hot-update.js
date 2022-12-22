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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(address));\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // only run this effect if the component is mounted and the wallet is connected\n        if (mounted && isConnected) {\n            // get the NFTs from the wallet address and set them in the state\n            (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress).then((response)=>{\n                setNfts(response.nfts);\n            });\n        }\n    }, [\n        isConnected,\n        mounted,\n        walletAddress\n    ]); // run this effect when the isConnected value or the mounted value changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 28,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"7U2AKulx5tWdAfo7qJRAcMtWdUw=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFHbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFQyxZQUFXLEVBQUUsR0FBR0wsaURBQVVBLElBQUksNENBQTRDO0lBQzNGLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDLEdBQVcsT0FBUk87SUFDdEQsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFRLEVBQUU7SUFFMUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCwrRUFBK0U7UUFDL0UsSUFBSUssV0FBV0UsYUFBYTtZQUMxQixpRUFBaUU7WUFDakVOLHlEQUFPQSxDQUFDTyxlQUFlSSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDeENGLFFBQVFFLFNBQVNILElBQUk7WUFDdkI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDSDtRQUFhRjtRQUFTRztLQUFjLEdBQUcsMEVBQTBFO0lBRXJILHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOztZQUNaLENBQUNULHlCQUFXLDhEQUFDVTswQkFBRTs7Ozs7OzBCQUNoQiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1pMLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO29CQUNqQixxQkFDRSw4REFBQ0o7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssS0FBS0YsSUFBSUcsUUFBUTtnQ0FDakJDLEtBQUtKLElBQUlLLElBQUk7Ozs7OzswQ0FFZiw4REFBQ0M7Z0NBQUtULFdBQVU7MENBQWtCRyxJQUFJSyxJQUFJOzs7Ozs7MENBQzFDLDhEQUFDQzswQ0FBTU4sSUFBSU8sY0FBYzs7Ozs7Ozt1QkFUcEIsR0FBMEJQLE9BQXZCQSxJQUFJUSxlQUFlLEVBQUMsS0FBZSxPQUFaUixJQUFJUyxPQUFPOzs7OztnQkFZaEQ7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0F2Q3VCdkI7O1FBQ05ELDZEQUFZQTtRQUNLRCw2Q0FBVUE7OztLQUZyQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0cy50c3g/NTA3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0TmZ0cywgdXNlTmZ0cyB9IGZyb20gIFwiLi4vcHJvdmlkZXJzL2Fua2VyXCI7XHJcbmltcG9ydCB7IE5mdCB9IGZyb20gJ0BhbmtyLmNvbS9hbmtyLmpzL2Rpc3QvdHlwZXMnO1xyXG5pbXBvcnQge3VzZUFjY291bnR9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQge3VzZUlzTW91bnRlZH0gZnJvbSBcIi4vaG9va3MvdXNlSXNNb3VudGVkXCJcclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUcygpIHtcclxuICBjb25zdCBtb3VudGVkID0gdXNlSXNNb3VudGVkKCk7IC8vIHVzZSB0aGUgdXNlSXNNb3VudGVkIGhvb2sgdG8gY2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpOyAvLyBnZXQgdGhlIGN1cnJlbnQgd2FsbGV0IGFkZHJlc3MgZnJvbSBXYWdtaVxyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKGAke2FkZHJlc3N9YCk7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGU8TmZ0W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9ubHkgcnVuIHRoaXMgZWZmZWN0IGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCBhbmQgdGhlIHdhbGxldCBpcyBjb25uZWN0ZWRcclxuICAgIGlmIChtb3VudGVkICYmIGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIC8vIGdldCB0aGUgTkZUcyBmcm9tIHRoZSB3YWxsZXQgYWRkcmVzcyBhbmQgc2V0IHRoZW0gaW4gdGhlIHN0YXRlXHJcbiAgICAgIGdldE5mdHMod2FsbGV0QWRkcmVzcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXROZnRzKHJlc3BvbnNlLm5mdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaXNDb25uZWN0ZWQsIG1vdW50ZWQsIHdhbGxldEFkZHJlc3NdKTsgLy8gcnVuIHRoaXMgZWZmZWN0IHdoZW4gdGhlIGlzQ29ubmVjdGVkIHZhbHVlIG9yIHRoZSBtb3VudGVkIHZhbHVlIGNoYW5nZXNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgeyFhZGRyZXNzICYmIDxwPlBsZWFzZSBjb25uZWN0IGEgd2FsbGV0IHRvIHZpZXcgeW91ciBORlRzLjwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IG10LTggZ2FwLTQnPlxyXG4gICAgICAgIHtuZnRzLm1hcCgobmZ0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtuZnQuY29udHJhY3RBZGRyZXNzfS8ke25mdC50b2tlbklkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQgYm9yZGVyIHAtNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bMjAwcHhdIGgtWzIwMHB4XSByb3VuZGVkIHNoYWRvdydcclxuICAgICAgICAgICAgICAgIHNyYz17bmZ0LmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuZnQubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTgnPntuZnQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25mdC5jb2xsZWN0aW9uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXROZnRzIiwidXNlQWNjb3VudCIsInVzZUlzTW91bnRlZCIsIk5GVHMiLCJtb3VudGVkIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJuZnRzIiwic2V0TmZ0cyIsInRoZW4iLCJyZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJuZnQiLCJpbWciLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsIm5hbWUiLCJzcGFuIiwiY29sbGVjdGlvbk5hbWUiLCJjb250cmFjdEFkZHJlc3MiLCJ0b2tlbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});