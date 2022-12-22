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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_anker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/anker */ \"./providers/anker/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useIsMounted */ \"./pages/hooks/useIsMounted.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction NFTs() {\n    _s();\n    const mounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)(); // use the useIsMounted hook to check if the component is mounted\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(); // get the current wallet address from Wagmi\n    const walletAddress = address; // define a separate walletAddress variable and assign the address to it\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { nfts  } = await (0,_providers_anker__WEBPACK_IMPORTED_MODULE_2__.getNfts)({\n                walletAddress\n            }); // pass the walletAddress to getNfts\n            setNfts(nfts);\n        })();\n    }, [\n        walletAddress\n    ]); // re-run the effect whenever the wallet address changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            !address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please connect a wallet to view your NFTs.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 25,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mt-8 gap-4\",\n                children: nfts.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col rounded border p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[200px] h-[200px] rounded shadow\",\n                                src: nft.imageUrl,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold mt-8\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: nft.collectionName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, \"\".concat(nft.contractAddress, \"/\").concat(nft.tokenId), true, {\n                        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NaWs2\\\\nftpod\\\\pages\\\\nfts.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTs, \"9ogQxbhLLgrco3zBbDH63KaFjpY=\", false, function() {\n    return [\n        _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = NFTs;\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBRW1EO0FBQ0k7QUFFdEI7QUFDZ0I7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTUMsVUFBVUYsaUVBQVlBLElBQUksaUVBQWlFO0lBQ2pHLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdKLGlEQUFVQSxJQUFJLDRDQUE0QztJQUM5RSxNQUFNSyxnQkFBZ0JELFNBQVMsd0VBQXdFO0lBQ3ZHLE1BQU0sQ0FBQ0UsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBUSxFQUFFO0lBRTFDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsV0FBWTtZQUNYLE1BQU0sRUFBRVEsS0FBSSxFQUFFLEdBQUcsTUFBTVAseURBQU9BLENBQUM7Z0JBQUVNO1lBQWMsSUFBSSxvQ0FBb0M7WUFDdkZFLFFBQVFEO1FBQ1Y7SUFDRixHQUFHO1FBQUNEO0tBQWMsR0FBRyx3REFBd0Q7SUFHN0UscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7O1lBQ1osQ0FBQ0wseUJBQVcsOERBQUNNOzBCQUFFOzs7Ozs7MEJBQ2hCLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWkgsS0FBS0ssR0FBRyxDQUFDLENBQUNDLE1BQVE7b0JBQ2pCLHFCQUNFLDhEQUFDSjt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxLQUFLRixJQUFJRyxRQUFRO2dDQUNqQkMsS0FBS0osSUFBSUssSUFBSTs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FBS1QsV0FBVTswQ0FBa0JHLElBQUlLLElBQUk7Ozs7OzswQ0FDMUMsOERBQUNDOzBDQUFNTixJQUFJTyxjQUFjOzs7Ozs7O3VCQVRwQixHQUEwQlAsT0FBdkJBLElBQUlRLGVBQWUsRUFBQyxLQUFlLE9BQVpSLElBQUlTLE9BQU87Ozs7O2dCQVloRDs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXJDdUJuQjs7UUFDTkQsNkRBQVlBO1FBQ1JELDZDQUFVQTs7O0tBRlJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdHMudHN4PzUwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldE5mdHMsIHVzZU5mdHMgfSBmcm9tICBcIi4uL3Byb3ZpZGVycy9hbmtlclwiO1xyXG5pbXBvcnQgeyBOZnQgfSBmcm9tICdAYW5rci5jb20vYW5rci5qcy9kaXN0L3R5cGVzJztcclxuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHt1c2VJc01vdW50ZWR9IGZyb20gXCIuL2hvb2tzL3VzZUlzTW91bnRlZFwiXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUcygpIHtcclxuICBjb25zdCBtb3VudGVkID0gdXNlSXNNb3VudGVkKCk7IC8vIHVzZSB0aGUgdXNlSXNNb3VudGVkIGhvb2sgdG8gY2hlY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7IC8vIGdldCB0aGUgY3VycmVudCB3YWxsZXQgYWRkcmVzcyBmcm9tIFdhZ21pXHJcbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGFkZHJlc3M7IC8vIGRlZmluZSBhIHNlcGFyYXRlIHdhbGxldEFkZHJlc3MgdmFyaWFibGUgYW5kIGFzc2lnbiB0aGUgYWRkcmVzcyB0byBpdFxyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5mdFtdPihbXSk7XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBuZnRzIH0gPSBhd2FpdCBnZXROZnRzKHsgd2FsbGV0QWRkcmVzcyB9KTsgLy8gcGFzcyB0aGUgd2FsbGV0QWRkcmVzcyB0byBnZXROZnRzXHJcbiAgICAgIHNldE5mdHMobmZ0cyk7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFt3YWxsZXRBZGRyZXNzXSk7IC8vIHJlLXJ1biB0aGUgZWZmZWN0IHdoZW5ldmVyIHRoZSB3YWxsZXQgYWRkcmVzcyBjaGFuZ2VzXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgIHshYWRkcmVzcyAmJiA8cD5QbGVhc2UgY29ubmVjdCBhIHdhbGxldCB0byB2aWV3IHlvdXIgTkZUcy48L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBtdC04IGdhcC00Jz5cclxuICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7bmZ0LmNvbnRyYWN0QWRkcmVzc30vJHtuZnQudG9rZW5JZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCByb3VuZGVkIGJvcmRlciBwLTQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzIwMHB4XSBoLVsyMDBweF0gcm91bmRlZCBzaGFkb3cnXHJcbiAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17bmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC04Jz57bmZ0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntuZnQuY29sbGVjdGlvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0TmZ0cyIsInVzZUFjY291bnQiLCJ1c2VJc01vdW50ZWQiLCJORlRzIiwibW91bnRlZCIsImFkZHJlc3MiLCJ3YWxsZXRBZGRyZXNzIiwibmZ0cyIsInNldE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwibmZ0IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwic3BhbiIsImNvbGxlY3Rpb25OYW1lIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nfts.tsx\n"));

/***/ })

});