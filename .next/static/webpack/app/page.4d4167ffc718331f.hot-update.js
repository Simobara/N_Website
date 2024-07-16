"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/EmailSection.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/EmailSection.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/send\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        if (response.status === 200) {\n            console.log(\"Message sent.\");\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \" bg-black grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2\"\n            }, void 0, false, {\n                fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"socials flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"https://github.com/Simobara\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"https://www.linkedin.com/in/siba2410/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"Linkedin Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: emailSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-green-500 text-sm mt-2\",\n                    children: \"Email sent successfully!\"\n                }, void 0, false, {\n                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"jacob@google.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"subject\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Just saying hi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0ilbaroneutente/Desktop/progportf/src/app/components/EmailSection.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmailSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = EmailSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FbWFpbFNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFDRjtBQUNJO0FBQ3dCO0FBQ0k7QUFFN0QsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNTSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU87WUFDWEMsT0FBT0gsRUFBRUksTUFBTSxDQUFDRCxLQUFLLENBQUNFLEtBQUs7WUFDM0JDLFNBQVNOLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRCxLQUFLO1lBQy9CRSxTQUFTUCxFQUFFSSxNQUFNLENBQUNHLE9BQU8sQ0FBQ0YsS0FBSztRQUNqQztRQUNBLE1BQU1HLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ1I7UUFDaEMsTUFBTVMsV0FBVztRQUVqQixtREFBbUQ7UUFDbkQsTUFBTUMsVUFBVTtZQUNkLGtEQUFrRDtZQUNsREMsUUFBUTtZQUNSLHNDQUFzQztZQUN0Q0MsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQSx5REFBeUQ7WUFDekRDLE1BQU1QO1FBQ1I7UUFFQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU1OLFVBQVVDO1FBQ3ZDLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtRQUVuQyxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztZQUMzQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1p4QixrQkFBa0I7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFDQ0MsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FHbEQsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFDVjs0QkFBSTs7Ozs7OztrQ0FLUCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDakMsaURBQUlBO2dDQUFDcUMsTUFBSzswQ0FDVCw0RUFBQ3RDLGtEQUFLQTtvQ0FBQ3VDLEtBQUtwQywrREFBVUE7b0NBQUVxQyxLQUFJOzs7Ozs7Ozs7OzswQ0FFOUIsOERBQUN2QyxpREFBSUE7Z0NBQUNxQyxNQUFLOzBDQUNULDRFQUFDdEMsa0RBQUtBO29DQUFDdUMsS0FBS25DLGlFQUFZQTtvQ0FBRW9DLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQyw4REFBQ0w7MEJBQ0U3QiwrQkFDQyw4REFBQytCO29CQUFFSCxXQUFVOzhCQUE4Qjs7Ozs7OENBSTNDLDhEQUFDTztvQkFBS1AsV0FBVTtvQkFBZ0JRLFVBQVVsQzs7c0NBQ3hDLDhEQUFDMkI7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTGQsSUFBRztvQ0FDSGUsUUFBUTtvQ0FDUmQsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTGQsSUFBRztvQ0FDSGUsUUFBUTtvQ0FDUmQsV0FBVTtvQ0FDVmUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2Q7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FDQ0MsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDZ0I7b0NBQ0NKLE1BQUs7b0NBQ0xiLElBQUc7b0NBQ0hDLFdBQVU7b0NBQ1ZlLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNFOzRCQUNDSixNQUFLOzRCQUNMYixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBM0hNN0I7S0FBQUE7QUE2SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0VtYWlsU2VjdGlvbi5qc3g/NDliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZ2l0aHViLWljb24uc3ZnXCI7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvbGlua2VkaW4taWNvbi5zdmdcIjtcblxuY29uc3QgRW1haWxTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWxTdWJtaXR0ZWQsIHNldEVtYWlsU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgc3ViamVjdDogZS50YXJnZXQuc3ViamVjdC52YWx1ZSxcbiAgICAgIG1lc3NhZ2U6IGUudGFyZ2V0Lm1lc3NhZ2UudmFsdWUsXG4gICAgfTtcbiAgICBjb25zdCBKU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gXCIvYXBpL3NlbmRcIjtcblxuICAgIC8vIEZvcm0gdGhlIHJlcXVlc3QgZm9yIHNlbmRpbmcgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAvLyBUaGUgbWV0aG9kIGlzIFBPU1QgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBkYXRhLlxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vIFRlbGwgdGhlIHNlcnZlciB3ZSdyZSBzZW5kaW5nIEpTT04uXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIC8vIEJvZHkgb2YgdGhlIHJlcXVlc3QgaXMgdGhlIEpTT04gZGF0YSB3ZSBjcmVhdGVkIGFib3ZlLlxuICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50LlwiKTtcbiAgICAgIHNldEVtYWlsU3VibWl0dGVkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIGdyaWQgbWQ6Z3JpZC1jb2xzLTIgbXktMTIgbWQ6bXktMTIgcHktMjQgZ2FwLTQgcmVsYXRpdmVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctW3JhZGlhbC1ncmFkaWVudChlbGxpcHNlX2F0X2NlbnRlcixfdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKV0gZnJvbS1wcmltYXJ5LTkwMCB0by10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgaC04MCB3LTgwIHotMCBibHVyLWxnIGFic29sdXRlIHRvcC0zLzQgLWxlZnQtNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLTEvMlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG15LTJcIj5cbiAgICAgICAgICBMZXQmYXBvcztzIENvbm5lY3RcbiAgICAgICAgPC9oNT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV0gbWItNCBtYXgtdy1tZFwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBJJmFwb3M7bSBjdXJyZW50bHkgbG9va2luZyBmb3IgbmV3IG9wcG9ydHVuaXRpZXMsIG15IGluYm94IGlzIGFsd2F5c1xuICAgICAgICAgIG9wZW4uIFdoZXRoZXIgeW91IGhhdmUgYSBxdWVzdGlvbiBvciBqdXN0IHdhbnQgdG8gc2F5IGhpLCBJJmFwb3M7bGxcbiAgICAgICAgICB0cnkgbXkgYmVzdCB0byBnZXQgYmFjayB0byB5b3UhXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxzIGZsZXggZmxleC1yb3cgZ2FwLTJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NpbW9iYXJhXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHaXRodWJJY29ufSBhbHQ9XCJHaXRodWIgSWNvblwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2liYTI0MTAvXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMaW5rZWRpbkljb259IGFsdD1cIkxpbmtlZGluIEljb25cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlbWFpbFN1Ym1pdHRlZCA/IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCB0ZXh0LXNtIG10LTJcIj5cbiAgICAgICAgICAgIEVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImphY29iQGdvb2dsZS5jb21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgdGV4dC1zbSBtYi0yIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1YmplY3RcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxODE5MUVdIGJvcmRlciBib3JkZXItWyMzMzM1M0ZdIHBsYWNlaG9sZGVyLVsjOUNBMkE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVzdCBzYXlpbmcgaGlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgdGV4dC1zbSBtYi0yIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxODE5MUVdIGJvcmRlciBib3JkZXItWyMzMzM1M0ZdIHBsYWNlaG9sZGVyLVsjOUNBMkE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGV0J3MgdGFsayBhYm91dC4uLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktNTAwIGhvdmVyOmJnLXByaW1hcnktNjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHktMi41IHB4LTUgcm91bmRlZC1sZyB3LWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJFbWFpbFNlY3Rpb24iLCJlbWFpbFN1Ym1pdHRlZCIsInNldEVtYWlsU3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJqZWN0IiwibWVzc2FnZSIsIkpTT05kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc0RhdGEiLCJqc29uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImg1IiwicCIsImhyZWYiLCJzcmMiLCJhbHQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EmailSection.jsx\n"));

/***/ })

});