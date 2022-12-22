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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted && address) {\n            setWalletAddress(\"\".concat(address)); // set the walletAddress state variable\n        }\n    }, [\n        mounted,\n        address\n    ]); // re-run the effect whenever the mounted status or the wallet address changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted && walletAddress) {\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }\n    }, [\n        mounted,\n        walletAddress\n    ]); // re-run the effect whenever the mounted status or the wallet address changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!address) {\n            setNfts([]); // reset the nfts state variable to an empty array\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 39,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"hcvwcg/sCNSJWnOP/An/gaAjfeA=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdKLGlEQUFVQSxJQUFJLDRDQUE0QztJQUM5RSxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBcUJVO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBUSxFQUFFO0lBRTFDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUssV0FBV0MsU0FBUztZQUN0QkUsaUJBQWlCLEdBQVcsT0FBUkYsV0FBWSx1Q0FBdUM7UUFDekUsQ0FBQztJQUNILEdBQUc7UUFBQ0Q7UUFBU0M7S0FBUSxHQUFHLDhFQUE4RTtJQUV0R04sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlLLFdBQVdFLGVBQWU7WUFDM0IsV0FBWTtnQkFDWCxNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHLE1BQU1ULHlEQUFPQSxDQUFDTTtnQkFDL0JJLFFBQVFEO1lBQ1Y7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDTDtRQUFTRTtLQUFjLEdBQUcsOEVBQThFO0lBRTVHUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDTSxTQUFTO1lBQ1pLLFFBQVEsRUFBRSxHQUFHLGtEQUFrRDtRQUNqRSxDQUFDO0lBQ0g7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWixDQUFDUCx5QkFBVyw4REFBQ1E7MEJBQUU7Ozs7OzswQkFDaEIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaSCxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTtvQkFDakIscUJBQ0UsOERBQUNKO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLEtBQUtGLElBQUlHLFFBQVE7Z0NBQ2pCQyxLQUFLSixJQUFJSyxJQUFJOzs7Ozs7MENBRWYsOERBQUNDO2dDQUFLVCxXQUFVOzBDQUFrQkcsSUFBSUssSUFBSTs7Ozs7OzBDQUMxQyw4REFBQ0M7MENBQU1OLElBQUlPLGNBQWM7Ozs7Ozs7dUJBVHBCLEdBQTBCUCxPQUF2QkEsSUFBSVEsZUFBZSxFQUFDLEtBQWUsT0FBWlIsSUFBSVMsT0FBTzs7Ozs7Z0JBWWhEOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBbkR1QnJCOztRQUNORCw2REFBWUE7UUFDUkQsNkNBQVVBOzs7S0FGUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0cy50c3g/NTA3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0TmZ0cywgdXNlTmZ0cyB9IGZyb20gIFwiLi4vcHJvdmlkZXJzL2Fua2VyXCI7XHJcbmltcG9ydCB7IE5mdCB9IGZyb20gJ0BhbmtyLmNvbS9hbmtyLmpzL2Rpc3QvdHlwZXMnO1xyXG5pbXBvcnQge3VzZUFjY291bnR9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQge3VzZUlzTW91bnRlZH0gZnJvbSBcIi4vaG9va3MvdXNlSXNNb3VudGVkXCJcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRzKCkge1xyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTsgLy8gdXNlIHRoZSB1c2VJc01vdW50ZWQgaG9vayB0byBjaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IHdhbGxldCBhZGRyZXNzIGZyb20gV2FnbWlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGU8TmZ0W10+KFtdKTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobW91bnRlZCAmJiBhZGRyZXNzKSB7IC8vIGNoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCBhbmQgdGhlIHdhbGxldCBhZGRyZXNzIGlzIGRlZmluZWRcclxuICAgICAgc2V0V2FsbGV0QWRkcmVzcyhgJHthZGRyZXNzfWApOyAvLyBzZXQgdGhlIHdhbGxldEFkZHJlc3Mgc3RhdGUgdmFyaWFibGVcclxuICAgIH1cclxuICB9LCBbbW91bnRlZCwgYWRkcmVzc10pOyAvLyByZS1ydW4gdGhlIGVmZmVjdCB3aGVuZXZlciB0aGUgbW91bnRlZCBzdGF0dXMgb3IgdGhlIHdhbGxldCBhZGRyZXNzIGNoYW5nZXNcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobW91bnRlZCAmJiB3YWxsZXRBZGRyZXNzKSB7IC8vIGNoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCBhbmQgdGhlIHdhbGxldEFkZHJlc3Mgc3RhdGUgdmFyaWFibGUgaXMgZGVmaW5lZFxyXG4gICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmZ0cyB9ID0gYXdhaXQgZ2V0TmZ0cyh3YWxsZXRBZGRyZXNzKTtcclxuICAgICAgICBzZXROZnRzKG5mdHMpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH0sIFttb3VudGVkLCB3YWxsZXRBZGRyZXNzXSk7IC8vIHJlLXJ1biB0aGUgZWZmZWN0IHdoZW5ldmVyIHRoZSBtb3VudGVkIHN0YXR1cyBvciB0aGUgd2FsbGV0IGFkZHJlc3MgY2hhbmdlc1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWFkZHJlc3MpIHsgLy8gY2hlY2sgaWYgdGhlIHdhbGxldCBhZGRyZXNzIGlzIHVuZGVmaW5lZFxyXG4gICAgICBzZXROZnRzKFtdKTsgLy8gcmVzZXQgdGhlIG5mdHMgc3RhdGUgdmFyaWFibGUgdG8gYW4gZW1wdHkgYXJyYXlcclxuICAgIH07XHJcbiAgfVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgeyFhZGRyZXNzICYmIDxwPlBsZWFzZSBjb25uZWN0IGEgd2FsbGV0IHRvIHZpZXcgeW91ciBORlRzLjwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IG10LTggZ2FwLTQnPlxyXG4gICAgICAgIHtuZnRzLm1hcCgobmZ0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtuZnQuY29udHJhY3RBZGRyZXNzfS8ke25mdC50b2tlbklkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQgYm9yZGVyIHAtNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bMjAwcHhdIGgtWzIwMHB4XSByb3VuZGVkIHNoYWRvdydcclxuICAgICAgICAgICAgICAgIHNyYz17bmZ0LmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuZnQubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTgnPntuZnQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25mdC5jb2xsZWN0aW9uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXROZnRzIiwidXNlQWNjb3VudCIsInVzZUlzTW91bnRlZCIsIk5GVHMiLCJtb3VudGVkIiwiYWRkcmVzcyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwidW5kZWZpbmVkIiwibmZ0cyIsInNldE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwibmZ0IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwic3BhbiIsImNvbGxlY3Rpb25OYW1lIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});