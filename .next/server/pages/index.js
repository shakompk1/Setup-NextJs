/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./az/": [
		"./locales/az/index.json",
		"locales_az_index_json"
	],
	"./az/index": [
		"./locales/az/index.json",
		"locales_az_index_json"
	],
	"./az/index.json": [
		"./locales/az/index.json",
		"locales_az_index_json"
	],
	"./uk/": [
		"./locales/uk/index.json",
		"locales_uk_index_json"
	],
	"./uk/index": [
		"./locales/uk/index.json",
		"locales_uk_index_json"
	],
	"./uk/index.json": [
		"./locales/uk/index.json",
		"locales_uk_index_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ \"next-translate/useTranslation\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);\n\n// @ts-ignore\n\n// @ts-ignore\n\n// @ts-ignore\n\n\nconst Home = ()=>{\n    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('index');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n            variant: \"h1\",\n            children: t('welcome')\n        }, void 0, false, {\n            fileName: \"/Users/sahriarmirzai-sefidi/Documents/Project/setup/src/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sahriarmirzai-sefidi/Documents/Project/setup/src/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n// @ts-ignore\nasync function getStaticProps(ctx) {\n    // @ts-ignore\n    // @ts-ignore\n    // @ts-ignore\n    return {\n        // @ts-ignore\n        // @ts-ignore\n        // @ts-ignore\n        props: {\n            // @ts-ignore\n            // @ts-ignore\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                // @ts-ignore\n                ...ctx,\n                // @ts-ignore\n                pathname: '/index',\n                // @ts-ignore\n                loaderName: 'getStaticProps',\n                // @ts-ignore\n                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,\n                // @ts-ignore\n                loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default\n                    )\n            })\n        }\n    };\n// @ts-ignore\n} // @ts-ignore\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEVBQWE7QUFDMkM7QUFDeEQsRUFBYTtBQUNtRDtBQUNoRSxFQUFhO0FBRW1DO0FBQ1U7QUFHMUQsS0FBSyxDQUFDSyxJQUFJLE9BQW1CLENBQUM7SUFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxFQUFDLENBQUMsR0FBR0Ysb0VBQWMsQ0FBQyxDQUFPO0lBQ3BDLE1BQU0sNkVBQ0hGLCtDQUFJOzhGQUNGQyxxREFBVTtZQUFDSSxPQUFPLEVBQUMsQ0FBSTtzQkFBRUQsQ0FBQyxDQUFDLENBQVM7Ozs7Ozs7Ozs7O0FBRzNDLENBQUM7QUFFRCxpRUFBZUQsSUFBSTtBQUduQixFQUFhO0FBQ0YsZUFBZUcsY0FBYyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxFQUFhO0lBRWIsRUFBYTtJQUViLEVBQWE7SUFDTCxNQUFNLENBQUMsQ0FBQztRQUNoQixFQUFhO1FBRWIsRUFBYTtRQUViLEVBQWE7UUFDSEMsS0FBSyxFQUFFLENBQUM7WUFDbEIsRUFBYTtZQUViLEVBQWE7ZUFDRyxLQUFLLENBQUNULG9FQUFnQixDQUFDLENBQUM7Z0JBQ3hDLEVBQWE7bUJBQ0lRLEdBQUc7Z0JBQ3BCLEVBQWE7Z0JBQ0NFLFFBQVEsRUFBRSxDQUFRO2dCQUNoQyxFQUFhO2dCQUNDQyxVQUFVLEVBQUUsQ0FBZ0I7Z0JBQzFDLEVBQWE7bUJBQ0laLHNEQUFZO2dCQUM3QixFQUFhO2dCQUNDYSxjQUFjLEdBQUdDLENBQUMsRUFBRUMsQ0FBQyxHQUFLLGdFQUFPLEdBQThCLEVBQUVELENBQUMsQ0FBQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDQyxDQUFDLEdBQUlBLENBQUMsQ0FBQ0MsT0FBTzs7WUFFaEcsQ0FBQztRQUVILENBQUM7SUFFSCxDQUFDO0FBQ1QsRUFBYTtBQUNULENBQUMsQ0FDUSIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdpbmRleCcpXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj57dCgnd2VsY29tZScpfTwvVHlwb2dyYXBoeT5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBwcm9wczoge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLmN0eCxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaW5kZXgnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgfSkpXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgfVxuLy8gQHRzLWlnbm9yZVxuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19sb2FkTmFtZXNwYWNlcyIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwidXNlVHJhbnNsYXRpb24iLCJIb21lIiwidCIsInZhcmlhbnQiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2FkZXJOYW1lIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsInRoZW4iLCJtIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["az","uk"],"defaultLocale":"az","pages":{"*":[],"/":["index"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();