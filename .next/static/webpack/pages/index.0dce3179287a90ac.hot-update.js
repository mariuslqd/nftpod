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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(address));\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // only run this effect if the component is hydrated and the wallet is connected\n        if (isConnected) {\n            // get the NFTs from the wallet address and set them in the state\n            (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)(walletAddress).then((response)=>{\n                setNfts(response.nfts);\n            });\n        } else if (!isConnected) {\n            // if the wallet is not connected, clear the NFTs from the state\n            setNfts([]);\n        }\n    }, [\n        isConnected,\n        walletAddress\n    ]); // run this effect when the isConnected value or the isHydrated value changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 32,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"7U2AKulx5tWdAfo7qJRAcMtWdUw=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFHbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFQyxZQUFXLEVBQUUsR0FBR0wsaURBQVVBLElBQUksNENBQTRDO0lBQzNGLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDLEdBQVcsT0FBUk87SUFDdEQsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFRLEVBQUU7SUFFMUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxnRkFBZ0Y7UUFDaEYsSUFBSU8sYUFBYTtZQUNmLGlFQUFpRTtZQUNqRU4seURBQU9BLENBQUNPLGVBQWVJLElBQUksQ0FBQyxDQUFDQyxXQUFhO2dCQUN4Q0YsUUFBUUUsU0FBU0gsSUFBSTtZQUN2QjtRQUNGLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQ3ZCLGdFQUFnRTtZQUNoRUksUUFBUSxFQUFFO1FBQ1osQ0FBQztJQUNILEdBQUc7UUFBQ0o7UUFBYUM7S0FBYyxHQUFHLDZFQUE2RTtJQUcvRyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7WUFDWixDQUFDVCx5QkFBVyw4REFBQ1U7MEJBQUU7Ozs7OzswQkFDaEIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaTCxLQUFLTyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTtvQkFDakIscUJBQ0UsOERBQUNKO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLEtBQUtGLElBQUlHLFFBQVE7Z0NBQ2pCQyxLQUFLSixJQUFJSyxJQUFJOzs7Ozs7MENBRWYsOERBQUNDO2dDQUFLVCxXQUFVOzBDQUFrQkcsSUFBSUssSUFBSTs7Ozs7OzBDQUMxQyw4REFBQ0M7MENBQU1OLElBQUlPLGNBQWM7Ozs7Ozs7dUJBVHBCLEdBQTBCUCxPQUF2QkEsSUFBSVEsZUFBZSxFQUFDLEtBQWUsT0FBWlIsSUFBSVMsT0FBTzs7Ozs7Z0JBWWhEOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBM0N1QnZCOztRQUNORCw2REFBWUE7UUFDS0QsNkNBQVVBOzs7S0FGckJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdHMudHN4PzUwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldE5mdHMsIHVzZU5mdHMgfSBmcm9tICBcIi4uL3Byb3ZpZGVycy9hbmtlclwiO1xyXG5pbXBvcnQgeyBOZnQgfSBmcm9tICdAYW5rci5jb20vYW5rci5qcy9kaXN0L3R5cGVzJztcclxuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHt1c2VJc01vdW50ZWR9IGZyb20gXCIuL2hvb2tzL3VzZUlzTW91bnRlZFwiXHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVHMoKSB7XHJcbiAgY29uc3QgbW91bnRlZCA9IHVzZUlzTW91bnRlZCgpOyAvLyB1c2UgdGhlIHVzZUlzTW91bnRlZCBob29rIHRvIGNoZWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IHdhbGxldCBhZGRyZXNzIGZyb20gV2FnbWlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShgJHthZGRyZXNzfWApO1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5mdFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBvbmx5IHJ1biB0aGlzIGVmZmVjdCBpZiB0aGUgY29tcG9uZW50IGlzIGh5ZHJhdGVkIGFuZCB0aGUgd2FsbGV0IGlzIGNvbm5lY3RlZFxyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIC8vIGdldCB0aGUgTkZUcyBmcm9tIHRoZSB3YWxsZXQgYWRkcmVzcyBhbmQgc2V0IHRoZW0gaW4gdGhlIHN0YXRlXHJcbiAgICAgIGdldE5mdHMod2FsbGV0QWRkcmVzcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXROZnRzKHJlc3BvbnNlLm5mdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoIWlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIC8vIGlmIHRoZSB3YWxsZXQgaXMgbm90IGNvbm5lY3RlZCwgY2xlYXIgdGhlIE5GVHMgZnJvbSB0aGUgc3RhdGVcclxuICAgICAgc2V0TmZ0cyhbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQ29ubmVjdGVkLCB3YWxsZXRBZGRyZXNzXSk7IC8vIHJ1biB0aGlzIGVmZmVjdCB3aGVuIHRoZSBpc0Nvbm5lY3RlZCB2YWx1ZSBvciB0aGUgaXNIeWRyYXRlZCB2YWx1ZSBjaGFuZ2VzXHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgIHshYWRkcmVzcyAmJiA8cD5QbGVhc2UgY29ubmVjdCBhIHdhbGxldCB0byB2aWV3IHlvdXIgTkZUcy48L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBtdC04IGdhcC00Jz5cclxuICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7bmZ0LmNvbnRyYWN0QWRkcmVzc30vJHtuZnQudG9rZW5JZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCByb3VuZGVkIGJvcmRlciBwLTQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzIwMHB4XSBoLVsyMDBweF0gcm91bmRlZCBzaGFkb3cnXHJcbiAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17bmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC04Jz57bmZ0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntuZnQuY29sbGVjdGlvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0TmZ0cyIsInVzZUFjY291bnQiLCJ1c2VJc01vdW50ZWQiLCJORlRzIiwibW91bnRlZCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwibmZ0cyIsInNldE5mdHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwibmZ0IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwic3BhbiIsImNvbGxlY3Rpb25OYW1lIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});