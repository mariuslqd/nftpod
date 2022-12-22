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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(address));\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    if (mounted) {\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n        }, [\n            walletAddress\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 27,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"G/Dt8Yog7YS7LA4U10NiWCBE5YU=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdKLGlEQUFVQSxJQUFJLDRDQUE0QztJQUM5RSxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQyxHQUFXLE9BQVJPO0lBQ3RELE1BQU0sQ0FBQ0csTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBRTFDLElBQUlNLFNBQVM7UUFDWEwsZ0RBQVNBLENBQUMsSUFBTTtZQUNiLFdBQVk7Z0JBQ1gsTUFBTSxFQUFFUyxLQUFJLEVBQUUsR0FBRyxNQUFNUix5REFBT0EsQ0FBQ007Z0JBQy9CRyxRQUFRRDtZQUNWO1FBQ0YsR0FBRztZQUFDRjtTQUFjO0lBQ3BCLENBQUM7SUFHRCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7WUFDWixDQUFDTix5QkFBVyw4REFBQ087MEJBQUU7Ozs7OzswQkFDaEIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaSCxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTtvQkFDakIscUJBQ0UsOERBQUNKO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLEtBQUtGLElBQUlHLFFBQVE7Z0NBQ2pCQyxLQUFLSixJQUFJSyxJQUFJOzs7Ozs7MENBRWYsOERBQUNDO2dDQUFLVCxXQUFVOzBDQUFrQkcsSUFBSUssSUFBSTs7Ozs7OzBDQUMxQyw4REFBQ0M7MENBQU1OLElBQUlPLGNBQWM7Ozs7Ozs7dUJBVHBCLEdBQTBCUCxPQUF2QkEsSUFBSVEsZUFBZSxFQUFDLEtBQWUsT0FBWlIsSUFBSVMsT0FBTzs7Ozs7Z0JBWWhEOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBdkN1QnBCOztRQUNORCw2REFBWUE7UUFDUkQsNkNBQVVBOzs7S0FGUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0cy50c3g/NTA3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0TmZ0cywgdXNlTmZ0cyB9IGZyb20gIFwiLi4vcHJvdmlkZXJzL2Fua2VyXCI7XHJcbmltcG9ydCB7IE5mdCB9IGZyb20gJ0BhbmtyLmNvbS9hbmtyLmpzL2Rpc3QvdHlwZXMnO1xyXG5pbXBvcnQge3VzZUFjY291bnR9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQge3VzZUlzTW91bnRlZH0gZnJvbSBcIi4vaG9va3MvdXNlSXNNb3VudGVkXCJcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRzKCkge1xyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTsgLy8gdXNlIHRoZSB1c2VJc01vdW50ZWQgaG9vayB0byBjaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IHdhbGxldCBhZGRyZXNzIGZyb20gV2FnbWlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShgJHthZGRyZXNzfWApO1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5mdFtdPihbXSk7XHJcbiBcclxuICBpZiAobW91bnRlZCkgeyAvLyBjaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuZnRzIH0gPSBhd2FpdCBnZXROZnRzKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICAgIHNldE5mdHMobmZ0cyk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9LCBbd2FsbGV0QWRkcmVzc10pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgeyFhZGRyZXNzICYmIDxwPlBsZWFzZSBjb25uZWN0IGEgd2FsbGV0IHRvIHZpZXcgeW91ciBORlRzLjwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IG10LTggZ2FwLTQnPlxyXG4gICAgICAgIHtuZnRzLm1hcCgobmZ0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtuZnQuY29udHJhY3RBZGRyZXNzfS8ke25mdC50b2tlbklkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQgYm9yZGVyIHAtNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bMjAwcHhdIGgtWzIwMHB4XSByb3VuZGVkIHNoYWRvdydcclxuICAgICAgICAgICAgICAgIHNyYz17bmZ0LmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtuZnQubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTgnPntuZnQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25mdC5jb2xsZWN0aW9uTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXROZnRzIiwidXNlQWNjb3VudCIsInVzZUlzTW91bnRlZCIsIk5GVHMiLCJtb3VudGVkIiwiYWRkcmVzcyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwibmZ0cyIsInNldE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwibmZ0IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwic3BhbiIsImNvbGxlY3Rpb25OYW1lIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});