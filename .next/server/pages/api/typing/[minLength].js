"use strict";
(() => {
var exports = {};
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    await fetch("https://api.quotable.io/random?minLength=" + req.query.minLength.toString()).then((response)=>response.json()).then((data)=>{
        res.status(200).json({
            quote: data.content,
            author: data.authorSlug
        });
    }).catch((err)=>{
        res.status(500).json({
            error: err
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(659));
module.exports = __webpack_exports__;

})();