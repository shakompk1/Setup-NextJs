(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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
	"./ru/": [
		264,
		264
	],
	"./ru/index": [
		264,
		264
	],
	"./ru/index.json": [
		264,
		264
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

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/constants/enums.ts
var Language;
(function(Language) {
    Language["uk"] = "uk";
    Language["ru"] = "ru";
})(Language || (Language = {}));
var ThemeStyle;
(function(ThemeStyle) {
    ThemeStyle["dark"] = "dark";
    ThemeStyle["light"] = "light";
})(ThemeStyle || (ThemeStyle = {}));
/* harmony default export */ const enums = ({
    Language
});

;// CONCATENATED MODULE: ./src/theme/palette.ts

/* harmony default export */ const palette = ({
    type: ThemeStyle.light,
    primary: {
        main: '#49599A',
        light: '#F2F3FA',
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#fff',
        dark: '#1D1F21'
    },
    grey: {
        100: '#EDEFF1',
        300: '#D3D9DE',
        500: '#F6F7F8',
        600: '#7F8385'
    },
    success: {
        main: '#3CC13B',
        light: 'rgba(60, 193, 59, 0.1)'
    },
    error: {
        main: '#F44336',
        light: 'rgba(244, 67, 54, 0.1);'
    },
    info: {
        main: '#2196F3',
        light: 'rgba(33, 150, 243, 0.1)'
    },
    warning: {
        main: '#FF9800',
        light: 'rgba(255, 152, 0, 0.1)'
    },
    background: {
        paper: '#FFFFFF'
    }
});

;// CONCATENATED MODULE: ./src/theme/spacing.ts
/* harmony default export */ const spacing = (8);

;// CONCATENATED MODULE: ./src/theme/overrides/MuiButton.ts


/* harmony default export */ const MuiButton = ({
    MuiButton: {
        root: {
            textTransform: 'uppercase'
        },
        contained: {
            backgroundColor: palette.secondary.main
        },
        textSecondary: {
            color: palette.error.main
        },
        containedSecondary: {
            backgroundColor: palette.error.main,
            color: palette.secondary.main,
            '&:hover': {
                backgroundColor: palette.error.main
            }
        },
        label: {
            fontWeight: 500
        },
        sizeLarge: {
            paddingBottom: spacing * 1.5,
            paddingTop: spacing * 1.5
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiChip.ts

/* harmony default export */ const MuiChip = ({
    MuiChip: {
        root: {
            padding: 0,
            color: palette.primary.contrastText,
            backgroundColor: palette.grey[600]
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/typography.ts
/* harmony default export */ const typography = ({
    fontFamily: [
        'Roboto',
        'sans-serif'
    ].join(','),
    h1: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    h2: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    h3: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    body1: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    body2: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    button: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    subtitle1: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    subtitle2: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    },
    caption: {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 500,
        fontStyle: 'normal'
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiCssBaseline.ts

/* harmony default export */ const MuiCssBaseline = ({
    '@global': {
        body: {
            ...typography.body1
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiDialog.ts


/* harmony default export */ const MuiDialog = ({
    MuiDialogTitle: {
        root: {
            position: 'relative',
            padding: `${spacing * 3}px ${spacing * 4}px ${spacing * 2}px ${spacing * 3}px`,
            '& .MuiTypography-root': {
                ...typography.h1
            }
        }
    },
    MuiDialogContent: {
        root: {
            position: 'relative'
        }
    },
    MuiDialogActions: {
        root: {
            padding: `${spacing}px ${spacing * 3}px ${spacing * 3}px ${spacing * 3}px`
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiInput.ts

/* harmony default export */ const MuiInput = ({
    MuiInputBase: {
        input: {
            padding: 14,
            '&::placeholder': {
                color: palette.grey[600],
                opacity: 1
            }
        }
    },
    MuiOutlinedInput: {
        input: {
            padding: 14,
            height: 'auto'
        },
        notchedOutline: {
            border: `1px solid ${palette.grey[300]}`
        }
    },
    MuiInputLabel: {
        outlined: {
            transform: `translate(14px, 14px) scale(1)`
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiList.ts


/* harmony default export */ const MuiList = ({
    MuiListItem: {
        root: {
            '&$selected': {
                backgroundColor: palette.primary.light,
                '&:hover': {
                    backgroundColor: palette.primary.light
                }
            }
        },
        button: {
            '&:hover': {
                backgroundColor: palette.primary.light,
                color: palette.primary.main,
                '& svg': {
                    color: palette.primary.main
                }
            }
        }
    },
    MuiListItemIcon: {
        root: {
            minWidth: spacing * 4
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiTable.ts

/* harmony default export */ const MuiTable = ({
    MuiTableCell: {
        root: {
            ...typography.body1,
            wordBreak: 'keep-all'
        }
    },
    MuiTableRow: {
        root: {
            '&:last-child>td': {
                border: 0
            }
        }
    },
    MuiTableContainer: {
        root: {
            overflowX: 'visible'
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiTabs.ts


/* harmony default export */ const MuiTabs = ({
    MuiTab: {
        root: {
            ...typography.h3,
            maxWidth: 160,
            minWidth: 0,
            textTransform: 'uppercase',
            '&$selected': {
                color: palette.primary.main
            }
        },
        textColorInherit: {
            opacity: 1
        }
    },
    MuiTabs: {
        root: {
            backgroundColor: palette.secondary.main,
            color: palette.grey[600]
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiTooltip.ts

/* harmony default export */ const MuiTooltip = ({
    MuiTooltip: {
        tooltip: {
            backgroundColor: palette.secondary.main,
            color: palette.secondary.main
        },
        arrow: {
            color: palette.secondary.main
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiTypography.ts

/* harmony default export */ const MuiTypography = ({
    MuiTypography: {
        subtitle1: {
            color: palette.grey[600]
        },
        subtitle2: {
            color: palette.grey[600]
        },
        gutterBottom: {
            marginBottom: '0.5em'
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiAutocomplete.ts


/* harmony default export */ const MuiAutocomplete = ({
    MuiAutocomplete: {
        inputRoot: {
            '&[class*="MuiOutlinedInput-root"]': {
                padding: '0 14px 0 12px',
                '& .MuiAutocomplete-endAdornment': {
                    right: spacing * 2
                },
                '& .MuiAutocomplete-input': {
                    paddingTop: 14,
                    paddingBottom: 14
                }
            }
        },
        popupIndicator: {
            color: 'inherit'
        },
        option: {
            '&[aria-selected="true"]': {
                backgroundColor: 'inherit'
            },
            '&[data-focus="true"]': {
                color: palette.primary.main,
                backgroundColor: palette.primary.light
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiSelect.ts

/* harmony default export */ const MuiSelect = ({
    MuiSelect: {
        icon: {
            color: 'inherit'
        },
        iconOutlined: {
            right: spacing * 2
        },
        // selectMenu: {
        //   height: 48,
        // },
        select: {
            // paddingTop: spacing,
            // paddingBottom: spacing,
            '&:focus': {
                backgroundColor: 'inherit'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiPagination.ts


/* harmony default export */ const MuiPagination = ({
    MuiPaginationItem: {
        page: {
            ...typography.body2,
            fontWeight: 700,
            color: palette.grey[600],
            borderColor: palette.grey[300],
            '&.Mui-selected': {
                backgroundColor: palette.primary.light,
                color: palette.primary.main,
                borderColor: palette.primary.light
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/MuiLink.ts
/* harmony default export */ const MuiLink = ({
    MuiLink: {
        underlineHover: {
            cursor: 'pointer'
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/overrides/index.ts














/* harmony default export */ const overrides = ({
    MuiCssBaseline: MuiCssBaseline,
    ...MuiInput,
    ...MuiDialog,
    ...MuiList,
    ...MuiButton,
    ...MuiTabs,
    ...MuiChip,
    ...MuiTooltip,
    ...MuiTypography,
    ...MuiTable,
    ...MuiAutocomplete,
    ...MuiSelect,
    ...MuiPagination,
    ...MuiLink,
    PrivateNotchedOutline: {
        root: {
            borderWidth: 0
        }
    }
});

;// CONCATENATED MODULE: ./src/theme/index.ts





/* harmony default export */ const theme = ((0,styles_namespaceObject.createTheme)({
    typography: typography,
    // @ts-ignore
    overrides: overrides,
    palette: palette,
    spacing: spacing
}));

;// CONCATENATED MODULE: ./src/pages/_app.tsx

// @ts-ignore

// @ts-ignore

// @ts-ignore




const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
const __Page_Next_Translate__ = MyApp;
// @ts-ignore
/* harmony default export */ const _app = (appWithI18n_default()(__Page_Next_Translate__, {
    // @ts-ignore
    ...i18n,
    // @ts-ignore
    isLoader: true,
    // @ts-ignore
    skipInitialProps: true,
    // @ts-ignore
    loadLocaleFrom: (l, n)=>__webpack_require__(655)(`./${l}/${n}`).then((m)=>m.default
        )
})); // @ts-ignore


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["az","ru"],"defaultLocale":"az","pages":{"*":[],"/":["index"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(925));
module.exports = __webpack_exports__;

})();