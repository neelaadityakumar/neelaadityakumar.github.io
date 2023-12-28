"use strict";
(() => {
var exports = {};
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "cookie-cutter"
const external_cookie_cutter_namespaceObject = require("cookie-cutter");
var external_cookie_cutter_default = /*#__PURE__*/__webpack_require__.n(external_cookie_cutter_namespaceObject);
// EXTERNAL MODULE: ./components/Footer/Footer.tsx
var Footer = __webpack_require__(57);
// EXTERNAL MODULE: ./components/smallComp/image/Img.tsx
var Img = __webpack_require__(690);
;// CONCATENATED MODULE: ./components/DataPullerProject/AboutComp/About.tsx



function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-full py-8 md:px-8 flex md:flex-row flex-col md:space-x-12 items-center space-y-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-none w-32 lg:w-44 flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Img/* default */.Z, {
                    src: "gdscCercle.png",
                    alt: "About picture",
                    className: "opacity-80"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col space-y-8 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300",
                        children: "What's this project for?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-sans italic sm:text-base text-sm text-gray-400 text-center",
                        children: "It's no secret that sites want to know as much as possible about their visitors, whether it's to show them targeted ads or improve their user experience. The goal of this project is to give you an idea about types of information that websites can collect and access from you. No matter what the privacy settings of your browser are, certain information about you is inevitably revealed to the sites you visit. For example, you start sharing your IP address as soon as you go online, which can be used to pinpoint your approximate location."
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/DataPullerProject/TimerComp/Timer.tsx


function Timer(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sm:text-xl",
                    children: "Time you spent"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row space-x-4 justify-center ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col spacey-y-1 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row space-x-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col space-y-1 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ref: props.minTens,
                                                    className: "text-white font-mono sm:text-2xl text-sm",
                                                    children: "0"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col space-y-1 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ref: props.minUnits,
                                                    className: "text-white font-mono sm:text-2xl text-sm",
                                                    children: "0"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "m:text-base text-sm",
                                    children: "Minutes"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col spacey-y-1 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row space-x-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col space-y-1 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ref: props.secTens,
                                                    className: "text-white font-mono sm:text-2xl text-sm",
                                                    children: "0"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col space-y-1 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ref: props.secUnits,
                                                    className: "text-white font-mono sm:text-2xl text-sm",
                                                    children: "0"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sm:text-base text-sm",
                                    children: "Seconds"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/DataPullerProject/BlockElem/BlockElem.tsx


// repeted code for setting Additional Data user location
function BlockElem(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-none flex-row space-x-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `text-gray-200 font-semibold flex-none ${props.size} text-sm md:text-base`,
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-AAsecondary font-semibold text-sm md:text-base",
                children: props.value
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/AppContextFolder/AppContext.tsx
var AppContext = __webpack_require__(732);
;// CONCATENATED MODULE: ./components/Icons/Loader.tsx


function Loader(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        className: props.className,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/DataPullerProject/TableRow/TableRow.tsx


// repeated  table row code for setting General Information ip address,city,Zip Code ...etc
function TableRow(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "border-2 border-gray-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: " border-2 border-gray-300 pl-2 md:pl-4 py-3 text-xs md:text-base w-28 md:w-auto",
                children: props.item.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "pl-4 text-AAsecondary text-xs md:text-base",
                children: props.item.value
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/DataPullerProject/LatLonTable/LatLonTable.tsx


function LatLonTable(props) {
    switch(props.type){
        case "Desktop":
            return /*#__PURE__*/ jsx_runtime_.jsx(LatLongTableDesktop, {
                location: props.location
            });
        case "Mobile":
            return /*#__PURE__*/ jsx_runtime_.jsx(LatLongTableMobile, {
                location: props.location
            });
    }
};
const LatLongTableDesktop = (location)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("table", {
        className: "md:block hidden font-mono",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
            className: "border-2 md:text-sm text-xs",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    className: " border-2 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "border-2 py-1 px-8 ",
                            children: "Latitude :"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "text-AAsecondary px-8",
                            children: location.location[0]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "border-2 py-1 px-8",
                            children: "Longitude :"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "text-AAsecondary px-8",
                            children: location.location[1]
                        })
                    ]
                })
            ]
        })
    });
};
const LatLongTableMobile = (location)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("table", {
        className: "md:hidden block font-mono",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
            className: "border-2 md:text-xl text-xs",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    className: " border-2 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "border-2 py-1 px-8 ",
                            children: "Latitude :"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "text-AAsecondary px-8",
                            children: location.location[0]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "border-2 py-1 px-8",
                            children: "Longitude :"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "text-AAsecondary px-8",
                            children: location.location[1]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "detect-browser"
const external_detect_browser_namespaceObject = require("detect-browser");
;// CONCATENATED MODULE: external "detect-gpu"
const external_detect_gpu_namespaceObject = require("detect-gpu");
;// CONCATENATED MODULE: ./components/DataPullerProject/FuncVar/foo.ts
// ? this will update secUnits each second, secTens, minUnits, minTens cookies then update the span from cookies values
const CookieTimeCounter = ({ context , secUnits , secTens , minUnits , minTens , cookieCutter ,  })=>{
    if (true) {
        // Cookie existence verification
        if (cookieCutter.get("timer-sec-units")) {
            console.log("current cookie timer-sec-units value in useEffect: ", cookieCutter.get("timer-sec-units"));
        } else {
            console.log("timer cookie not exist");
            cookieCutter.set("timer-sec-units", String("0"));
            cookieCutter.set("timer-sec-tens", String("0"));
            cookieCutter.set("timer-min-units", String("0"));
            cookieCutter.set("timer-min-tens", String("0"));
        }
        // set setInterval for the context.sharedState.userdata.timerCookieRef
        context.sharedState.userdata.timerCookieRef.current = setInterval(function() {
            const countSec = Number(cookieCutter.get("timer-sec-units")) + 1;
            cookieCutter.set("timer-sec-units", String(countSec));
            if (countSec > 9) {
                cookieCutter.set("timer-sec-units", String("0"));
                cookieCutter.set("timer-sec-tens", String(Number(cookieCutter.get("timer-sec-tens")) + 1));
                const countSecTens = Number(cookieCutter.get("timer-sec-tens"));
                if (countSecTens > 5) {
                    cookieCutter.set("timer-sec-tens", String("0"));
                    cookieCutter.set("timer-min-units", String(Number(cookieCutter.get("timer-min-units")) + 1));
                    const countMinUnits = Number(cookieCutter.get("timer-min-units"));
                    if (countMinUnits > 9) {
                        cookieCutter.set("timer-min-units", String("0"));
                        cookieCutter.set("timer-min-tens", String(Number(cookieCutter.get("timer-min-tens")) + 1));
                    }
                }
            }
            // this checking is to prevent from type checking,
            // "secUnits.current" will be undefined if it is not yet rendered on the other pages
            if (secUnits.current) {
                secUnits.current.innerText = cookieCutter.get("timer-sec-units");
                secTens.current.innerText = cookieCutter.get("timer-sec-tens");
                minUnits.current.innerText = cookieCutter.get("timer-min-units");
                minTens.current.innerText = cookieCutter.get("timer-min-tens");
            }
            console.log("Cookie Timer Setter...");
        }, 1000);
    }
};
// ? Declare Mouse Event and Window size tracker event
const MouseWindowEventListners = ({ context , windowWidth , windowHeight , mouseX , mouseY ,  })=>{
    // assign context windowSize Ref here in useEffect once, so to make sure that it only assigned once
    context.sharedState.userdata.windowSizeTracker.current = ()=>{
        if (windowWidth.current) {
            windowWidth.current.innerText = String(window.innerWidth);
            windowHeight.current.innerText = String(window.innerHeight);
        }
        console.log("Window Size Tracker...");
    };
    // assint mousePositionTracker.current here to use in the as fallback function for the event
    // and to remove the event in the other pages
    context.sharedState.userdata.mousePositionTracker.current = (event)=>{
        if (mouseX.current) {
            mouseX.current.innerText = String(event.pageX);
            mouseY.current.innerText = String(event.pageY);
        }
        console.log("Mouse Position Tracker...");
    };
    // Apply this event Listener on Client
    if (false) {}
};


// ? async function for getting user information. IP, location, zip code, browser, OS, GPU, etc.
const userInfo = async ({ setLocation , setZipCode , setGpuTier , userData , cookieCutter , lastVisit_Ref , firstVisit_Ref ,  })=>{
    // this api will return current ip address of the requester
    const IP_Address = async ()=>{
        return fetch("https://api.ipify.org/?format=json").then((res)=>res.json()).then((data)=>data.ip);
    };
    // call api by passing the IP address of the requester & store in api_data
    const api_data = async ()=>{
        return fetch("/api/userInfoByIP/" + await IP_Address()).then((res)=>res.json()).then((data)=>data);
    };
    //to determine the browser info
    const browser = (0,external_detect_browser_namespaceObject.detect)();
    // get user Data from the api
    const result = await api_data();
    // Client side checks
    if (browser) {
        result["browser"] = browser.name;
        result["browserVersion"] = browser.version;
        result["browserOS"] = browser.os;
    }
    if (screen) {
        result["screenWidth"] = screen.width;
        result["screenHeight"] = screen.height;
        result["screenOrientationType"] = screen.orientation.type;
        result["screenColorDepth"] = screen.colorDepth + " bits";
    }
    if (navigator) {
        result["NavigatorLanguages"] = navigator.languages;
        result["NavigatorLogicalCores"] = navigator.hardwareConcurrency + " cores";
    }
    // ? this will add battery level if it's supported on the browser
    if (navigator) {
        if (navigator.hasOwnProperty("getBattery")) {
            //@ts-ignore
            navigator.getBattery().then((battery)=>{
                result["batteryLevel"] = battery.level + " %";
                console.log("battery level : ", battery.level + " %");
            });
        } else {
            result["batteryLevel"] = "Not supported";
        }
    }
    const temp_array_location = [];
    temp_array_location.push(result.lat);
    temp_array_location.push(result.lon);
    setLocation([
        ...temp_array_location
    ]);
    console.log("useEffect run, data :", result);
    setZipCode(result.zip);
    userData.current = result;
    // first & last visit tracker with conditional statement using cookies.
    //it's inside userInfo function to get the current time by the ip Address
    if (cookieCutter.get("first-visit")) {
        lastVisit_Ref.current.innerText = cookieCutter.get("last-visit");
        cookieCutter.set("last-visit", result.datetime);
    } else {
        lastVisit_Ref.current.innerText = "Now";
        cookieCutter.set("first-visit", result.datetime);
        cookieCutter.set("last-visit", result.datetime);
    }
    firstVisit_Ref.current.innerText = cookieCutter.get("first-visit");
    // set up gpuTier state value
    const gpuTier_data = await (0,external_detect_gpu_namespaceObject.getGPUTier)();
    setGpuTier(Object(gpuTier_data));
};
// ? update Location on click event callback function
const onClickUpdateLocation = async (setUpdatingLocatinResult, setUpdatingLocation, setLocation, setZipCode)=>{
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }
    // function will be executed after permission is authorized
    function success(position) {
        setLocation([
            position.coords.latitude,
            position.coords.longitude
        ]);
        const temp_array_location = [];
        temp_array_location.push(position.coords.latitude);
        temp_array_location.push(position.coords.longitude);
        // set new lat and lon
        setLocation([
            ...temp_array_location
        ]);
        // Show Map
        setUpdatingLocation(false);
        // Hide "Unable to retieve location" message
        setUpdatingLocatinResult(false);
        // call the api by passing new lat and lon
        const api_get_zip = async (lat, lon)=>{
            return fetch("/api/userInfoByLatLon/" + lat + "/" + lon).then((res)=>res.json()).then((data)=>{
                return data;
            });
        };
        // change zipcode useState
        const setNewZip = async ()=>setZipCode(await api_get_zip(position.coords.latitude, position.coords.longitude));
        setNewZip();
        console.log("Updated == > Longitude:", position.coords.longitude, "Latitude:", position.coords.latitude);
    }
    // function will be executed after permission is denied
    function error() {
        // error Show Unable to retieve location message
        setUpdatingLocatinResult(true);
        //Show Map after failed to update location
        setUpdatingLocation(false);
    }
    // ask for permission to access location
    navigator.geolocation.getCurrentPosition(success, error);
};
// data for Additional Information Section 1
const Additional_data = (userData, gpuTier)=>{
    return [
        {
            title: "Browser :",
            value: userData.current?.browser || "Checking..."
        },
        {
            title: "Browser Version :",
            value: userData.current?.browserVersion || "Checking..."
        },
        {
            title: "Languages :",
            value: userData.current?.NavigatorLanguages.toString().replace(",", ", ") || "Checking..."
        },
        {
            title: "OS :",
            value: userData.current?.browserOS || "Checking..."
        },
        {
            title: "CPU cores :",
            value: userData.current?.NavigatorLogicalCores || "Checking..."
        },
        {
            title: "GPU :",
            value: gpuTier?.gpu || "Checking..."
        }, 
    ];
};
// data for the table
const tableData = (userData, zipCode)=>{
    return [
        {
            title: "IP Address :",
            value: userData.current?.query || "Checking..."
        },
        {
            title: "City :",
            value: userData.current?.city || "Checking..."
        },
        {
            title: "Zip Code :",
            value: zipCode || "Checking..."
        },
        {
            title: "Region :",
            value: userData.current?.regionName || "Checking..."
        },
        {
            title: "Region Code :",
            value: userData.current?.region || "Checking..."
        },
        {
            title: "Country :",
            value: userData.current?.country || "Checking..."
        },
        {
            title: "Current Date/time :",
            value: userData.current?.datetime || "Checking..."
        },
        {
            title: "Battery :",
            value: userData.current?.batteryLevel || "Checking..."
        },
        {
            title: "As :",
            value: userData.current?.as || "Checking..."
        }, 
    ];
};

;// CONCATENATED MODULE: ./pages/userdatapuller/index.tsx













// import : functions

// values

function Page() {
    // location[latitude, longitude]
    const { 0: location , 1: setLocation  } = (0,external_react_.useState)([
        0,
        0
    ]);
    const { 0: updatingLocation , 1: setUpdatingLocation  } = (0,external_react_.useState)(false);
    const { 0: updatingLocatinResult , 1: setUpdatingLocatinResult  } = (0,external_react_.useState)(false);
    // zip code holder
    const { 0: zipCode , 1: setZipCode  } = (0,external_react_.useState)(undefined);
    // userData Ref holder
    const userData = (0,external_react_.useRef)(null);
    // gpu Detector state holder
    const { 0: gpuTier , 1: setGpuTier  } = (0,external_react_.useState)(null);
    const windowWidth = (0,external_react_.useRef)(null);
    const windowHeight = (0,external_react_.useRef)(null);
    const mouseX = (0,external_react_.useRef)(null);
    const mouseY = (0,external_react_.useRef)(null);
    //timer ref holder
    const secUnits = (0,external_react_.useRef)(null);
    const secTens = (0,external_react_.useRef)(null);
    const minUnits = (0,external_react_.useRef)(null);
    const minTens = (0,external_react_.useRef)(null);
    // First vist and Last visit ref holder
    let firstVisit_Ref = (0,external_react_.useRef)(null);
    let lastVisit_Ref = (0,external_react_.useRef)(null);
    // context for Shared State
    const context = (0,external_react_.useContext)(AppContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        // call CookieTimeCounter function here in useEffect once
        CookieTimeCounter({
            context,
            secUnits,
            secTens,
            minUnits,
            minTens,
            cookieCutter: (external_cookie_cutter_default())
        });
        // call MouseWindowEventListners function here in useEffect once
        MouseWindowEventListners({
            context,
            windowWidth,
            windowHeight,
            mouseX,
            mouseY
        });
        // call the async function "userInfo"  inside the useEffect to get the user Data and set them in the DOM
        userInfo({
            setLocation,
            setZipCode,
            setGpuTier,
            userData,
            cookieCutter: (external_cookie_cutter_default()),
            lastVisit_Ref,
            firstVisit_Ref
        });
    }, [
        context
    ]);
    // useEffect to clear others projects
    (0,external_react_.useEffect)(()=>{
        // remove the interval Cookie timer setter when
        if (false) {}
    }, [
        context.sharedState
    ]);
    // import Dynamically the Map component from the DataPuller package, cus it's using some client side objects
    const Map = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "userdatapuller/index.tsx -> " + "../../components/DataPullerProject/Map"
            ]
        },
        ssr: false
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    httpEquiv: "Content-Security-Policy",
                    content: "upgrade-insecure-requests"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen w-full bg-AAprimary text-white 2xl:px-64 xl:px-44 lg:px-24 md:px-16 px-4 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-full w-full py-16 sm:px-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full pb-6 flex md:flex-row flex-col space-y-4 justify-around items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "font-bold md:text-4xl text-lg text-AAsecondary",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-white hover:cursor-pointer",
                                                children: "IP :"
                                            }),
                                            " ",
                                            userData.current?.query || "Checking..."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LatLonTable, {
                                        type: "Mobile",
                                        location: location
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "h-full w-full flex md:flex-row flex-col ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "h-full md:w-2/3 md:order-1 order-2 md:pr-10 flex flex-col space-y-3 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pb-2 sm:pt-0 pt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-xl sm:text-2xl font-bold pb-8 underline",
                                                    children: "General Information :"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                                className: "border-2 border-gray-300 w-full font-mono",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                    children: tableData(userData, zipCode).map((item, index)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx(TableRow, {
                                                            item: item
                                                        }, index);
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pb-2 sm:pt-8 pt-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-xl sm:text-2xl font-bold underline",
                                                    children: "Additional Information :"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                className: "flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:space-x-4 font-mono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex-none flex-col space-y-3 ",
                                                        children: Additional_data(userData, gpuTier).map((item, index)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx(BlockElem, {
                                                                size: "32",
                                                                title: item.title,
                                                                value: item.value
                                                            }, index);
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex-none flex-col space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(BlockElem, {
                                                                size: "md:w-52 w-44",
                                                                title: " Screen orientation :",
                                                                value: userData.current?.screenOrientationType || ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(BlockElem, {
                                                                size: "w-32",
                                                                title: "Screen size :",
                                                                value: (userData.current?.screenWidth || "") + " x " + (userData.current?.screenHeight || "")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex flex-row space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-gray-200 font-semibold flex-none w-32 text-sm md:text-base",
                                                                        children: "Window size :"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-AAsecondary font-semibold text-sm md:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                ref: windowWidth,
                                                                                className: "text-AAsecondary",
                                                                                children: userData.current?.screenWidth || ""
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-gray-300",
                                                                                children: " x "
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                ref: windowHeight,
                                                                                className: "text-AAsecondary",
                                                                                children: userData.current?.screenHeight || ""
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex-none flex-row space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-gray-200 font-semibold flex-none w-36 text-sm md:text-base",
                                                                        children: "Mouse position :"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-AAsecondary font-semibold text-sm md:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-gray-300",
                                                                                children: "X - "
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                ref: mouseX,
                                                                                className: "text-AAsecondary",
                                                                                children: 0
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-gray-300",
                                                                                children: ", Y - "
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                ref: mouseY,
                                                                                className: "text-AAsecondary",
                                                                                children: 0
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(BlockElem, {
                                                                size: "w-44",
                                                                title: "Screen Color Depth :",
                                                                value: userData.current?.screenColorDepth || "Checking..."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(BlockElem, {
                                                                size: "w-44",
                                                                title: "fps :",
                                                                value: gpuTier?.fps || "Checking..."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "h-full w-full md:w-1/3 flex flex-col items-center md:order-2 order-1 md:pt-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full pb-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full flex flex-col space-y-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-row space-x-1 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "",
                                                                    children: "First visit :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    ref: firstVisit_Ref,
                                                                    className: "text-AAsecondary"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-row space-x-1 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "",
                                                                    children: "Last visit :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    ref: lastVisit_Ref,
                                                                    className: "text-AAsecondary"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative md:h-80 h-64 w-full pb-8",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${updatingLocation ? "" : "hidden"} absolute h-full w-full border-[1px] border-white z-10 flex justify-center items-center`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex flex-col space-y-2 items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Loader, {
                                                                    className: "mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-AAsecondary"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "",
                                                                    children: "Updating location..."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${updatingLocation ? "hidden" : ""} h-full w-full z-10`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Map, {
                                                            lat: location[0],
                                                            lon: location[1]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col space-y-2 items-center text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "",
                                                        children: "Location not accurate?"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>{
                                                            //Hide Map when updating location
                                                            setUpdatingLocation(true);
                                                            // Update lat & lon
                                                            onClickUpdateLocation(setUpdatingLocatinResult, setUpdatingLocation, setLocation, setZipCode);
                                                        },
                                                        className: "text-AAsecondary underline text-sm hover:cursor-pointer",
                                                        children: "Update My IP Location"
                                                    }),
                                                    updatingLocatinResult ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Unable to retrieve your location!!",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " Please Allow location permission"
                                                        ]
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(LatLonTable, {
                                                        type: "Desktop",
                                                        location: location
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Timer, {
                                                        secTens: secTens,
                                                        secUnits: secUnits,
                                                        minTens: minTens,
                                                        minUnits: minUnits
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(About, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                githubUrl: "https://github.com/hktitof/DataPuller",
                hideSocialsInDesktop: false
            })
        ]
    });
};


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,280,74], () => (__webpack_exec__(769)));
module.exports = __webpack_exports__;

})();