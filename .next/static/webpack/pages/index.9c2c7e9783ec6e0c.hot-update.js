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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(address));\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    if (isConnected) {\n        var _s1 = $RefreshSig$();\n        return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n            _s1();\n            (async ()=>{\n                const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress);\n                setNfts(nfts);\n            })();\n            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n                if (!address) {\n                    setNfts([]); // reset the nfts state variable to an empty array\n                }\n            }, [\n                address\n            ]); // re-run the effect whenever the wallet address changes\n        }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"), [\n            walletAddress\n        ]) // re-run the effect whenever the mounted status or the walletAddress state variable changes\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 38,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"KxOOM6kvyakzhCtN6jkjzKWbmpc=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFHbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFQyxZQUFXLEVBQUUsR0FBR0wsaURBQVVBLElBQUksNENBQTRDO0lBQzNGLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDLEdBQVcsT0FBUk87SUFDdEQsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFRLEVBQUU7SUFHMUMsSUFBSVEsYUFBYTs7UUFDZixPQUNGUCxnREFBU0EsS0FBQyxJQUFNOztZQUNYLFdBQVk7Z0JBQ1gsTUFBTSxFQUFFVSxLQUFJLEVBQUUsR0FBRyxNQUFNVCx5REFBT0EsQ0FBQ087Z0JBQy9CRyxRQUFRRDtZQUNWO1lBRUpWLGdEQUFTQSxDQUFDLElBQU07Z0JBQ2QsSUFBSSxDQUFDTSxTQUFTO29CQUNaSyxRQUFRLEVBQUUsR0FBRyxrREFBa0Q7Z0JBQ2pFLENBQUM7WUFDSCxHQUFHO2dCQUFDTDthQUFRLEdBQUcsd0RBQXdEO1FBQ3ZFLG9DQUFHO1lBQUVFO1NBQWMsRUFBRSw0RkFBNEY7O0lBRWpILENBQUM7SUFJRCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7WUFDWixDQUFDUCx5QkFBVyw4REFBQ1E7MEJBQUU7Ozs7OzswQkFDaEIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaSCxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTtvQkFDakIscUJBQ0UsOERBQUNKO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLEtBQUtGLElBQUlHLFFBQVE7Z0NBQ2pCQyxLQUFLSixJQUFJSyxJQUFJOzs7Ozs7MENBRWYsOERBQUNDO2dDQUFLVCxXQUFVOzBDQUFrQkcsSUFBSUssSUFBSTs7Ozs7OzBDQUMxQyw4REFBQ0M7MENBQU1OLElBQUlPLGNBQWM7Ozs7Ozs7dUJBVHBCLEdBQTBCUCxPQUF2QkEsSUFBSVEsZUFBZSxFQUFDLEtBQWUsT0FBWlIsSUFBSVMsT0FBTzs7Ozs7Z0JBWWhEOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBakR1QnJCOztRQUNORCw2REFBWUE7UUFDS0QsNkNBQVVBOzs7S0FGckJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdHMudHN4PzUwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldE5mdHMsIHVzZU5mdHMgfSBmcm9tICBcIi4uL3Byb3ZpZGVycy9hbmtlclwiO1xyXG5pbXBvcnQgeyBOZnQgfSBmcm9tICdAYW5rci5jb20vYW5rci5qcy9kaXN0L3R5cGVzJztcclxuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHt1c2VJc01vdW50ZWR9IGZyb20gXCIuL2hvb2tzL3VzZUlzTW91bnRlZFwiXHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVHMoKSB7XHJcbiAgY29uc3QgbW91bnRlZCA9IHVzZUlzTW91bnRlZCgpOyAvLyB1c2UgdGhlIHVzZUlzTW91bnRlZCBob29rIHRvIGNoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IHdhbGxldCBhZGRyZXNzIGZyb20gV2FnbWlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShgJHthZGRyZXNzfWApO1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5mdFtdPihbXSk7XHJcbiBcclxuXHJcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuZnRzIH0gPSBhd2FpdCBnZXROZnRzKHdhbGxldEFkZHJlc3MpO1xyXG4gICAgICAgIHNldE5mdHMobmZ0cyk7XHJcbiAgICAgIH0pKCk7XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzKSB7IC8vIGNoZWNrIGlmIHRoZSB3YWxsZXQgYWRkcmVzcyBpcyB1bmRlZmluZWRcclxuICAgICAgc2V0TmZ0cyhbXSk7IC8vIHJlc2V0IHRoZSBuZnRzIHN0YXRlIHZhcmlhYmxlIHRvIGFuIGVtcHR5IGFycmF5XHJcbiAgICB9XHJcbiAgfSwgW2FkZHJlc3NdKTsgLy8gcmUtcnVuIHRoZSBlZmZlY3Qgd2hlbmV2ZXIgdGhlIHdhbGxldCBhZGRyZXNzIGNoYW5nZXNcclxuICB9LCBbIHdhbGxldEFkZHJlc3NdKSAvLyByZS1ydW4gdGhlIGVmZmVjdCB3aGVuZXZlciB0aGUgbW91bnRlZCBzdGF0dXMgb3IgdGhlIHdhbGxldEFkZHJlc3Mgc3RhdGUgdmFyaWFibGUgY2hhbmdlc1xyXG4gIClcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICB7IWFkZHJlc3MgJiYgPHA+UGxlYXNlIGNvbm5lY3QgYSB3YWxsZXQgdG8gdmlldyB5b3VyIE5GVHMuPC9wPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTQgbXQtOCBnYXAtNCc+XHJcbiAgICAgICAge25mdHMubWFwKChuZnQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2Ake25mdC5jb250cmFjdEFkZHJlc3N9LyR7bmZ0LnRva2VuSWR9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcm91bmRlZCBib3JkZXIgcC00J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LVsyMDBweF0gaC1bMjAwcHhdIHJvdW5kZWQgc2hhZG93J1xyXG4gICAgICAgICAgICAgICAgc3JjPXtuZnQuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e25mdC5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtOCc+e25mdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57bmZ0LmNvbGxlY3Rpb25OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldE5mdHMiLCJ1c2VBY2NvdW50IiwidXNlSXNNb3VudGVkIiwiTkZUcyIsIm1vdW50ZWQiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIm5mdHMiLCJzZXROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIm5mdCIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwibmFtZSIsInNwYW4iLCJjb2xsZWN0aW9uTmFtZSIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});