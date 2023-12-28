"use strict";
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Fotter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_GithubIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);
/* harmony import */ var _Icons_LinkedinIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416);
/* harmony import */ var _Icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(777);





const ClickableIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: props.href,
        className: "",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(props.Icon, {
            className: "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        })
    });
};
const IconsData = [
    {
        href: "https://github.com/neelaadityakumar",
        Icon: _Icons_GithubIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
    },
    {
        href: "https://www.linkedin.com/in/aditya-kumar-994aa6155/",
        Icon: _Icons_LinkedinIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    },
    {
        href: "https://www.instagram.com/adityahasnoname/",
        Icon: _Icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    }, 
];
function Fotter(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`,
                children: IconsData.map((iconData, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClickableIcon, {
                        href: iconData.href,
                        Icon: iconData.Icon
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: props.githubUrl,
                className: "",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_GithubIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "",
                                children: "Source code - Github"
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Img(props) {
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: props.src,
        alt: props.alt,
        className: props.className
    }));
};


/***/ })

};
;