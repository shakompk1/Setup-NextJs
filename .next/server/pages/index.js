(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./az/": [
		330,
		330
	],
	"./az/index": [
		330,
		330
	],
	"./az/index.json": [
		330,
		330
	],
	"./en/": [
		197,
		197
	],
	"./en/index": [
		197,
		197
	],
	"./en/index.json": [
		197,
		197
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
webpackAsyncContext.id = 655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
;// CONCATENATED MODULE: external "next-translate/loadNamespaces"
const loadNamespaces_namespaceObject = require("next-translate/loadNamespaces");
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "next-translate/useTranslation"
const useTranslation_namespaceObject = require("next-translate/useTranslation");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/index.tsx

// @ts-ignore

// @ts-ignore

// @ts-ignore


const Home = ()=>{
    const { t  } = useTranslation_default()('index');
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
            variant: "h1",
            children: t('welcome')
        })
    }));
};
/* harmony default export */ const pages = (Home);
// @ts-ignore
async function getStaticProps(ctx) {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        props: {
            // @ts-ignore
            // @ts-ignore
            ...await loadNamespaces_default()({
                // @ts-ignore
                ...ctx,
                // @ts-ignore
                pathname: '/index',
                // @ts-ignore
                loaderName: 'getStaticProps',
                // @ts-ignore
                ...i18n,
                // @ts-ignore
                loadLocaleFrom: (l, n)=>__webpack_require__(655)(`./${l}/${n}`).then((m)=>m.default
                    )
            })
        }
    };
// @ts-ignore
} // @ts-ignore


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["az","en"],"defaultLocale":"az","pages":{"*":[],"/":["index"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(823));
module.exports = __webpack_exports__;

})();