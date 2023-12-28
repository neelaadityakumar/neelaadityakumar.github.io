"use strict";
(() => {
var exports = {};
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const HasZipCode = (obj)=>{
    for (const x of obj){
        const elem = x.address_components;
        if (!isNaN(elem[elem.length - 1].long_name)) {
            return elem[elem.length - 1].long_name;
        }
    }
    return "00000";
};
async function handler(req, res) {
    const getcoding = async (lat, lon)=>{
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=` + lat + `,` + lon + `&key=` + process.env.NEXT_PUBLIC_KEY_GOOGLE_API).then((res)=>res.json()).then((data)=>{
            const result = data.results;
            return HasZipCode(result);
        // return data;
        }).catch((err)=>{
            console.error("When fetching data from google api : \n", err);
            return "00000";
        });
    };
    const geolocation = async (ip)=>{
        return fetch(`http://ip-api.com/json/` + ip).then((res)=>res.json()).then(async (data)=>{
            return {
                zip: await getcoding(data.lat, data.lon),
                country: data.country,
                countryCode: data.countryCode,
                region: data.region,
                regionName: data.regionName,
                city: data.city,
                datetime: new Date().toLocaleString("en-US", {
                    timeZone: data.timezone
                }),
                lat: data.lat,
                lon: data.lon,
                timezone: data.timezone,
                isp: data.isp,
                org: data.org,
                as: data.as,
                query: data.query
            };
        }).catch((err)=>console.log(err));
    };
    //  const result = await getcoding(req.query.userInfo);
    // res.status(200).json(result)
    res.status(200).json(await getcoding(req.query.lat, req.query.lon));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(938));
module.exports = __webpack_exports__;

})();