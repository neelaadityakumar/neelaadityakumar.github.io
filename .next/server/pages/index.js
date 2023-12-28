"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.js
var framer_motion = __webpack_require__(231);
;// CONCATENATED MODULE: ./components/Header/Headercomp/Logo.tsx



function Logo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(framer_motion.motion.div, {
            initial: {
                y: 0,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            transition: {
                type: "spring",
                y: {
                    delay: props.finishedLoading ? 0 : 8,
                    duration: 0
                },
                opacity: {
                    delay: props.finishedLoading ? 0 : 8,
                    duration: 0
                }
            },
            className: " relative h-12 w-10 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.span, {
                    initial: {
                        x: 1
                    },
                    className: "absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary",
                    children: "A"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: -30,
                        y: 5
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: 90,
                        x: -10,
                        y: 18
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: 30,
                        y: 31
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: -30,
                        y: 27,
                        x: 19
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: 30,
                        x: 19,
                        y: -10
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        rotate: 90,
                        x: 28,
                        y: 2
                    },
                    className: "h-1 w-6 rounded bg-AAsecondary"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
;// CONCATENATED MODULE: ./components/Header/Headercomp/DesktopMenu.tsx




function DesktopMenu(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "font-mono text-xs md:flex hidden flex-row items-center space-x-8 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: -40,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    duration: props.finishedLoading ? 0 : 1.2,
                    delay: props.finishedLoading ? 0 : 9.4
                },
                className: " text-AAsecondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                    to: "aboutSection",
                    spy: true,
                    smooth: true,
                    offset: -100,
                    duration: 200,
                    children: [
                        "> 01. ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white hover:cursor-pointer hover:text-AAsecondary duration-300",
                            children: "About"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: -40,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    duration: props.finishedLoading ? 0 : 1.2,
                    delay: props.finishedLoading ? 0 : 9.7
                },
                className: "text-AAsecondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                    to: "WhereIhaveWorkedSection",
                    spy: true,
                    smooth: true,
                    offset: -300,
                    duration: 200,
                    children: [
                        "> 02.",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white hover:cursor-pointer hover:text-AAsecondary duration-300",
                            children: "Experience"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: -40,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    duration: props.finishedLoading ? 0 : 1.2,
                    delay: props.finishedLoading ? 0 : 9.8
                },
                className: "text-AAsecondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                    to: "SomethingIveBuiltSection",
                    spy: true,
                    smooth: true,
                    offset: -100,
                    duration: 200,
                    children: [
                        "> 03. ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white hover:cursor-pointer hover:text-AAsecondary duration-300",
                            children: "Work"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.span, {
                initial: {
                    y: -40,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    duration: props.finishedLoading ? 0 : 1.2,
                    delay: props.finishedLoading ? 0 : 10
                },
                className: "text-AAsecondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                    to: "GetInTouchSection",
                    spy: true,
                    smooth: true,
                    offset: -100,
                    duration: 200,
                    children: [
                        "> 04. ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-white hover:cursor-pointer hover:text-AAsecondary duration-300",
                            children: "Contact"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/resume.pdf",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.button, {
                    initial: {
                        y: -40,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        type: "spring",
                        duration: props.finishedLoading ? 0 : 1.2,
                        delay: props.finishedLoading ? 0 : 10.2
                    },
                    // onClick={()=>{router.push("/resume.pdf")}}
                    className: "text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover",
                    children: "Resume"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Header/Headercomp/IconMenu.tsx



const IconMenu = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden text-white space-y-2 left-0 hover:cursor-pointer mt-2",
        onClick: ()=>{
            props.setRotate(!props.rotate);
            props.setShowElement(!props.ShowElement);
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: props.rotate ? {
                        y: 10,
                        rotate: 45
                    } : {
                        rotate: 0,
                        y: 0
                    },
                    transition: props.rotate ? {
                        y: 0.15,
                        rotate: {
                            delay: 0.2
                        }
                    } : {
                        y: {
                            delay: 0.2
                        },
                        rotate: {
                            duration: 0.2
                        }
                    },
                    className: "w-8 h-0.5 rounded bg-AAsecondary"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                animate: props.rotate ? {
                    opacity: 0
                } : {
                    opacity: 1
                },
                transition: {
                    opacity: {
                        duration: 0
                    }
                },
                className: "flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-6 h-0.5 rounded bg-AAsecondary"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: props.rotate ? {
                        y: -10,
                        width: "150%",
                        rotate: -45
                    } : {
                        y: 0,
                        rotate: 0,
                        width: "50%"
                    },
                    transition: props.rotate ? {
                        y: 0.15,
                        rotate: {
                            delay: 0.2
                        }
                    } : {
                        y: {
                            delay: 0.2
                        },
                        rotate: {
                            duration: 0.2
                        }
                    },
                    className: "w-4 h-0.5 rounded bg-AAsecondary"
                })
            })
        ]
    });
};
/* harmony default export */ const Headercomp_IconMenu = (IconMenu);

;// CONCATENATED MODULE: ./components/Header/Headercomp/MobileMenu.tsx



const MobileMenu = (props)=>{
    const closeMenu = ()=>{
        props.setRotate(!props.rotate);
        props.setShowElement(!props.ShowElement);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(framer_motion.motion.div, {
            initial: {
                x: "100%"
            },
            animate: props.rotate ? {
                x: "0"
            } : {
                x: "100%"
            },
            transition: {
                x: {
                    duration: 0.4
                }
            },
            className: "w-full fixed h-screen flex md:hidden duration-300 z-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>closeMenu(),
                    className: "w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-3/4 h-full bg-MobileNavBarColor flex flex-col justify-center items-center space-y-8 font-sans",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                            to: "aboutSection",
                            spy: true,
                            smooth: true,
                            offset: -50,
                            duration: 200,
                            onClick: ()=>closeMenu(),
                            className: "flex flex-col text-center space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary text-xs font-mono",
                                    children: "01."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300",
                                    children: "About"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                            to: "WhereIhaveWorkedSection",
                            spy: true,
                            smooth: true,
                            offset: -250,
                            duration: 200,
                            onClick: ()=>closeMenu(),
                            className: "flex flex-col text-center space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary text-xs font-mono hover:cursor-pointer",
                                    children: "02."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300",
                                    children: "Experience"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                            to: "SomethingIveBuiltSection",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 200,
                            onClick: ()=>closeMenu(),
                            className: "flex flex-col text-center space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary text-xs font-mono",
                                    children: "03."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300",
                                    children: "Work"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                            to: "GetInTouchSection",
                            spy: true,
                            smooth: true,
                            offset: 100,
                            duration: 200,
                            onClick: ()=>closeMenu(),
                            className: "flex flex-col text-center space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary text-xs font-mono",
                                    children: "04."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300",
                                    children: "Contact"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/resume.pdf",
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "rounded border font-Text2 border-AAsecondary hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary",
                                children: "Resume"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Headercomp_MobileMenu = (MobileMenu);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(34);
// EXTERNAL MODULE: ./components/AppContextFolder/AppContext.tsx
var AppContext = __webpack_require__(732);
;// CONCATENATED MODULE: ./components/Header/Header.tsx








const addClass = (ref, myclass)=>{
    ref.current?.classLIst.add(myclass);
};
const Header = (props)=>{
    const RefNavBar = (0,external_react_.useRef)(null);
    const { 0: ShowElement , 1: setShowElement  } = (0,external_react_.useState)(false);
    const { 0: rotate , 1: setRotate  } = (0,external_react_.useState)(false);
    const context = (0,external_react_.useContext)(AppContext/* default */.Z);
    const scrollSizeY = (0,external_react_.useRef)(0);
    // Define the EventListener for the NavBar
    (0,external_react_.useEffect)(()=>{
        if (context.sharedState.portfolio.NavBar.IntervalEvent == null) {
            context.sharedState.portfolio.NavBar.IntervalEvent = ()=>{
                if (scrollSizeY.current == 0) {
                    scrollSizeY.current = window.scrollY;
                } else {
                    if (window.scrollY > 50) {
                        if (window.scrollY > scrollSizeY.current) {
                            if (RefNavBar) {
                                RefNavBar.current?.classList.remove("translate-y-0");
                                RefNavBar.current?.classList.add("-translate-y-full");
                            }
                        } else {
                            RefNavBar.current?.classList.add("translate-y-0");
                            RefNavBar.current?.classList.remove("-translate-y-full");
                        }
                        scrollSizeY.current = window.scrollY;
                    }
                }
                console.log("Scrolling checking for NavBar ", scrollSizeY.current);
            };
        }
    }, [
        context.sharedState.portfolio.NavBar,
        context.sharedState.portfolio.NavBar.IntervalEvent, 
    ]);
    //Adding the EventListener for the NavBar
    (0,external_react_.useEffect)(()=>{
        if (context.sharedState.portfolio.NavBar.scrolling == null) {
            context.sharedState.portfolio.NavBar.scrolling = true;
            scrollSizeY.current = 0;
            //Hide when scroll down & show when scroll up
            if (false) {}
        }
    }, [
        context.sharedState.portfolio.NavBar,
        context.sharedState.portfolio.NavBar.scrolling, 
    ]);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setShowElement(true);
        }, 10400);
    }, []);
    console.log("rotate from header : ", rotate);
    //veify document for serverSide rendering
    if (typeof document !== "undefined") {
        rotate ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Headercomp_MobileMenu, {
                rotate: rotate,
                setRotate: setRotate,
                setShowElement: setShowElement,
                ShowElement: ShowElement
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
                ref: RefNavBar,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                // changed from 10.4 to 1
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 9.4,
                        duration: 0
                    }
                },
                className: `w-full fixed ${ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `} bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        finishedLoading: props.finishedLoading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Headercomp_IconMenu, {
                        rotate: rotate,
                        setRotate: setRotate,
                        setShowElement: setShowElement,
                        ShowElement: ShowElement,
                        finishedLoading: props.finishedLoading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DesktopMenu, {
                        finishedLoading: props.finishedLoading
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Header/StartupLogo/Startup.tsx



const Startup = (props)=>{
    let WidthBy2 = 0;
    let HeightBy2 = 0;
    let greaterThanSmall = false;
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        },
        transition: {
            opacity: {
                delay: 4.9,
                duration: 0
            }
        },
        className: "absolute h-full w-full flex justify-center items-center bg-StartupBackground",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(framer_motion.motion.div, {
            initial: {
                opacity: 0,
                x: 0,
                y: 0,
                scale: "100%"
            },
            animate: {
                opacity: [
                    1,
                    0,
                    1
                ],
                x: -WidthBy2,
                y: -HeightBy2,
                scale: greaterThanSmall ? "57%" : "50%"
            },
            transition: {
                opacity: {
                    delay: 3,
                    duration: 1.5
                },
                x: {
                    duration: 0.5,
                    delay: 4.5
                },
                y: {
                    duration: 0.5,
                    delay: 4.5
                },
                scale: {
                    duration: 0.5,
                    delay: 4.5
                }
            },
            className: "relative h-24 w-24 flex justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        scale: 0,
                        x: 0
                    },
                    animate: {
                        scale: 1,
                        rotate: 90,
                        x: 38
                    },
                    transition: {
                        scale: {
                            duration: 1.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        x: {
                            delay: 0.8,
                            duration: 1
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        scale: 0,
                        x: 0
                    },
                    animate: {
                        scale: 1,
                        rotate: 90,
                        x: -39
                    },
                    transition: {
                        scale: {
                            duration: 1.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        x: {
                            delay: 0.8,
                            duration: 1
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1.05,
                        rotate: 35,
                        x: 18,
                        y: -34
                    },
                    transition: {
                        opacity: {
                            delay: 2,
                            duration: 0
                        },
                        scale: {
                            duration: 2.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        y: {
                            delay: 1.2,
                            duration: 2
                        },
                        x: {
                            delay: 1.5,
                            duration: 0.5
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1.05,
                        rotate: -35,
                        x: -18,
                        y: -34
                    },
                    transition: {
                        opacity: {
                            delay: 2,
                            duration: 0
                        },
                        scale: {
                            duration: 2.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        y: {
                            delay: 1.2,
                            duration: 2
                        },
                        x: {
                            delay: 1.5,
                            duration: 0.5
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1.05,
                        rotate: -35,
                        x: 18,
                        y: 34
                    },
                    transition: {
                        opacity: {
                            delay: 2,
                            duration: 0
                        },
                        scale: {
                            duration: 2.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        y: {
                            delay: 1.2,
                            duration: 2
                        },
                        x: {
                            delay: 1.5,
                            duration: 0.5
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1.05,
                        rotate: 35,
                        x: -18,
                        y: 34
                    },
                    transition: {
                        opacity: {
                            delay: 2,
                            duration: 0
                        },
                        scale: {
                            duration: 2.5
                        },
                        rotate: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        y: {
                            delay: 1.2,
                            duration: 2
                        },
                        x: {
                            delay: 1.5,
                            duration: 0.5
                        }
                    },
                    className: "absolute h-2 w-12 bg-AAsecondary rounded "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.span, {
                    initial: {
                        scale: 0,
                        y: -4,
                        x: -1
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        scale: {
                            delay: 1.5,
                            duration: 1.5
                        }
                    },
                    className: "text-AAsecondary font-Text2 text-4xl",
                    children: "A"
                })
            ]
        })
    });
};
/* harmony default export */ const StartupLogo_Startup = (Startup);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Home/MyName/MyName.tsx




function MyName(props) {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.span, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 10.4,
                        duration: props.finishedLoading ? 0 : 0.2
                    },
                    y: {
                        delay: props.finishedLoading ? 0 : 10.4,
                        duration: props.finishedLoading ? 0 : 0.2
                    }
                },
                className: "text-AAsecondary font-mono",
                children: "Greetings, I'm"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.h1, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 10.5,
                        duration: props.finishedLoading ? 0 : 0.2
                    },
                    y: {
                        delay: props.finishedLoading ? 0 : 10.5,
                        duration: props.finishedLoading ? 0 : 0.2
                    }
                },
                className: "text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4",
                children: "Aditya Kumar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.h2, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 10.6,
                        duration: props.finishedLoading ? 0 : 0.2
                    },
                    y: {
                        delay: props.finishedLoading ? 0 : 10.6,
                        duration: props.finishedLoading ? 0 : 0.2
                    }
                },
                className: "text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4",
                children: "I love building tech products."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(framer_motion.motion.h3, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 10.7,
                        duration: props.finishedLoading ? 0 : 0.2
                    },
                    y: {
                        delay: props.finishedLoading ? 0 : 10.7,
                        duration: props.finishedLoading ? 0 : 0.2
                    }
                },
                className: "text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider",
                children: [
                    "I'm a ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-AAsecondary",
                        children: "software engineer"
                    }),
                    ", i possess strong problem-solving skills and specialize in crafting exceptional ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        className: "2xl:block hidden"
                    }),
                    "digital experiences. My current area of focus is in the",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-AAsecondary",
                        children: "web3 domain"
                    }),
                    ", where I actively engage in developing ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        className: "2xl:block hidden"
                    }),
                    "and designing immersive",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-AAsecondary",
                        children: "web3 applications"
                    }),
                    ". This involves working with",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-AAsecondary",
                        children: "Smart Contracts"
                    }),
                    " on the",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-AAsecondary",
                        children: "Blockchain"
                    }),
                    "."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    opacity: {
                        delay: props.finishedLoading ? 0 : 10.8,
                        duration: props.finishedLoading ? 0 : 0.2
                    },
                    y: {
                        delay: props.finishedLoading ? 0 : 10.8,
                        duration: props.finishedLoading ? 0 : 0.2
                    }
                },
                className: "mt-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/resume.pdf",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary",
                        children: "Check out my resume!"
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Icons/GithubIcon.tsx
var GithubIcon = __webpack_require__(145);
// EXTERNAL MODULE: ./components/Icons/LinkedinIcon.tsx
var LinkedinIcon = __webpack_require__(416);
;// CONCATENATED MODULE: ./components/Home/SocialMediaArround/SocialMediaArround.tsx





const IconClickableWithAnimation = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
        whileHover: {
            y: -3,
            transition: {
                duration: 0.1
            }
        },
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.href,
            className: "",
            target: "_blank",
            rel: "noreferrer",
            children: /*#__PURE__*/ jsx_runtime_.jsx(props.Icon, {
                className: "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
            })
        })
    });
};
function SocialMediaEmail(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: "100%"
                },
                animate: {
                    y: "0%"
                },
                transition: {
                    y: {
                        delay: props.finishedLoading ? 0 : 11,
                        duration: props.finishedLoading ? 0 : 0.5
                    }
                },
                className: "z-10 fixed bottom-0 left-0 hidden lg:flex flex-row px-12 items-center justify-between ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col space-y-8 justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-center items-center space-y-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(IconClickableWithAnimation, {
                                    Icon: GithubIcon/* default */.Z,
                                    href: "https://github.com/neelaadityakumar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(IconClickableWithAnimation, {
                                    Icon: LinkedinIcon/* default */.Z,
                                    href: "https://www.linkedin.com/in/aditya-kumar-994aa6155/"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-28 w-0.5 bg-gray-400"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                initial: {
                    y: "170%"
                },
                animate: {
                    y: "0%"
                },
                // ! change delay from 0 to 11
                transition: {
                    y: {
                        delay: props.finishedLoading ? 0 : 11,
                        duration: props.finishedLoading ? 0 : 0.5
                    }
                },
                className: "z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col space-y-24 justify-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                            initial: {
                                rotate: 90
                            },
                            whileHover: {
                                y: -3,
                                transition: {
                                    y: {
                                        duration: 0.1
                                    },
                                    rotate: {
                                        duration: 0
                                    }
                                }
                            },
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:abdellatif@anaflous.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: " font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer",
                                    children: [
                                        "abdellatif",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-AAsecondary",
                                            children: "@"
                                        }),
                                        "anaflous",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-AAsecondary",
                                            children: "."
                                        }),
                                        "com"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-24 w-0.5 bg-gray-400"
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/smallComp/image/Img.tsx
var Img = __webpack_require__(690);
;// CONCATENATED MODULE: ./components/Icons/ArrowIcon.tsx


function ArrowIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `${props.className} `,
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
            clipRule: "evenodd"
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/AboutMe/AboutMe.tsx




function AboutMe(props) {
    const technologies = [
        [
            "Next.js",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Ether.js",
            "Solidity"
        ],
        [
            "Node.js",
            "TypeScript",
            "Framer Motion",
            "react-moralis",
            "web3.js"
        ], 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "aboutSection",
        "data-aos": "fade-up",
        className: "snap-start flex flex-col items-center py-20 bg-AAprimary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row items-center ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row items-center mr-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary font-Header text-sm sm:text-xl",
                                    children: " 01."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4",
                                    children: "About Me"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full md:w-7/12 space-y-4 sm:text-base text-sm ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-Header ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-gray-400 ",
                                        children: "Hello! My name is Abdellatif, and I am a passionate software engineer and problem solver, dedicated to creating impactful codes that thrive on the internet. My journey in computer science began in 2009 when I delved into the world of Ethical Hacking using BackTrack OS. Little did I know that programming skills would become essential in pursuing this interest, marking the start of my programming journey."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-Header ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-gray-400 ",
                                        children: [
                                            "Since pursuing my engineering degree, my career has taken me through diverse industries, allowing me to refine my expertise in desktop and web development. In the realm of",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-AAsecondary",
                                                children: "web3"
                                            }),
                                            ", I am dedicated to pushing boundaries and driving advancements. With experience working alongside esteemed organizations like",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-AAsecondary",
                                                children: "ENS Vision"
                                            }),
                                            ", where I played a key role in releasing v2 of",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-AAsecondary",
                                                children: "ENS Vision Marketplace"
                                            }),
                                            " , my passion for web3 and continuous learning drives me to make a positive impact and advance technology."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-Header tracking-wide",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-gray-400 ",
                                        children: "Here are a few technologies I've been working with recently :"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "font-Header tracking-wide flex flex-row space-x-16",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row space-x-2 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex flex-col space-y-4 sm:text-base text-sm",
                                                children: technologies[0].map((tech, index)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-row items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                                                className: "h-3 w-3 text-AAsecondary"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-400 sm:text-sm text-xs",
                                                                children: tech
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row space-x-2 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex flex-col space-y-4 sm:text-base text-sm",
                                                children: technologies[1].map((tech, index)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-row items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                                                className: "h-3 w-3 text-AAsecondary"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-400 sm:text-sm text-xs",
                                                                children: tech
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "absolute w-5/6 h-5/6 rounded overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Img/* default */.Z, {
                                            src: "/img/Portfolio-portrait-3.jpg",
                                            className: "object-contain rounded-lg",
                                            alt: "My Image Not Found"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " relative w-full h-48 md:hidden flex justify-center items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute w-48 h-full rounded overflow-hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Img/* default */.Z, {
                                        src: "/img/Portfolio-portrait-3.jpg",
                                        className: "object-contain rounded-lg",
                                        alt: "My Image Not Found"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/taskAndType.ts
const getTasksTextWithHighlightedKeyword = (text, keyword)=>{
    if (keyword.length > 0) {
        const regex = new RegExp(keyword.join("|"), "gi");
        console.log("regex", regex);
        return text.replace(regex, (match)=>`<span class="text-AAsecondary">${match}</span>`);
    }
    return text;
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/TrouveTavoie.tsx




function TrouveTavoie() {
    const tasks = [
        {
            text: "Spearhead & implemented a new design user workflow system for the Frond-End Architecture of a NFT Marketplace.",
            keywords: [
                "NFT Marketplace"
            ]
        },
        {
            text: "Worked with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Next.js/React, AWS and Vercel.",
            keywords: [
                "Next.js/React",
                "AWS",
                "Vercel"
            ]
        },
        {
            text: "Interfaced with developers on a daily basis, providing technological expertise.",
            keywords: []
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Engineer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ Blockchain"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "Mars - August 2022"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-AAsecondary hover:cursor-pointer",
                            style: {
                                fontSize: "0.6rem"
                            },
                            // set on click to open the website
                            onClick: ()=>window.open("https://www.trouvetavoie.io/", "_blank"),
                            children: "www.trouvetavoie.io"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: " h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/FeverTokens.tsx




function FeverTokens() {
    const tasks = [
        {
            text: "Leading the development of the NFT Marketplace v2 for the Platform FeverTokens.",
            keywords: [
                "NFT Marketplace v2"
            ]
        },
        {
            text: "Worked with a team of six developers to build a temporary NFT Marketplace platform for VivaTech2022 event, an ambitious startup originating from France,Paris.",
            keywords: [
                "VivaTech2022 event"
            ]
        },
        {
            text: "Interacted with the blockchain & Smart Contracts to build the new FeverTokens Platform.",
            keywords: [
                "blockchain & Smart Contracts"
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Engineer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ web3"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "Mars - August 2022"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-AAsecondary hover:cursor-pointer",
                            // set text size on style attribute
                            style: {
                                fontSize: "0.6rem"
                            },
                            onClick: ()=>window.open("https:///www.fevertokens.io", "_blank"),
                            children: "www.fevertokens.io"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: " h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/IdealFresh.tsx




function IdealFresh() {
    const tasks = [
        {
            text: "Designed and Built a Desktop app for IdealFresh that manage billings, client circumstances using Apache POI with Microsoft Office Excel.",
            keywords: [
                "Apache POI"
            ]
        },
        {
            text: "Creating customized scripts for pulling, managing and refactoring files from Clouds.",
            keywords: [
                "scripts"
            ]
        },
        {
            text: "Daily communications and interactions with a non-developers to solve their problems by providing technological solutions and expertise.",
            keywords: [
                "non-developers"
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Developer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ JavaFX"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "June - August 2021"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: "h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/AdvancedAgroManagement.tsx




function AdvancedAgroManagement() {
    const tasks = [
        {
            text: "Developed and Build a new version customizable website for Advanced Agro Management.",
            keywords: [
                "Advanced Agro Management"
            ]
        },
        {
            text: "Monitored website performance and handled troubleshooting and WordPress issues.",
            keywords: [
                "MOnitored",
                "WordPress issues"
            ]
        },
        {
            text: "Managed company WordPress website back-end with Oracle Database including plugins, tools, and themes.",
            keywords: [
                "Oracle Database"
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Developer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ Wordpress"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "june - August 2019"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: " h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/Fantasia.tsx




function Fantasia() {
    const tasks = [
        {
            text: "Responsible for Windows Server 2008 r2 installs, configuration and support Active Directory, DNS, DHCP, WINS..",
            keywords: [
                "Windows Server 2008"
            ]
        },
        {
            text: "Migration of Windows 2008 to Windows Server 2012 .",
            keywords: [
                "Migration"
            ]
        },
        {
            text: "Responsible for Server full, differential and incremental backups using Veeam Endpoint Backup with SQL Server 2012.",
            keywords: [
                "Veeam Endpoint Backup",
                "SQL Server 2012"
            ]
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col spacey-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                        children: [
                            "Server Manager Assistant ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-AAsecondary",
                                children: "@ Windows Server"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-mono text-xs text-gray-500",
                        children: "June - July 2018"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col space-y-4 sm:text-sm text-xs",
                children: tasks.map((item, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: " h-5 w-4 text-AAsecondary flex-none"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-500 sm:text-sm text-xs",
                                dangerouslySetInnerHTML: {
                                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                }
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/SuperBerry.tsx




function SuperBerry() {
    const tasks = [
        {
            text: "Designed and Built user-friendly customizable static web application using ReactJS, TailwindCSS v1, and TypeScript.",
            keywords: [
                "ReactJS",
                "TailwindCSS v1",
                "TypeScript"
            ]
        },
        {
            text: "upgraded the web application for better SEO with Next.js and exploiting the server-side rendering benefits.",
            keywords: [
                "Next.js"
            ]
        },
        {
            text: "Provided technical support and troubleshoots errors and/or problems with web based applications.",
            keywords: [
                "technical support",
                "troubleshoots"
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Engineer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ Web App"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "June - August 2020"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: " h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/Descriptions/EnsVision.tsx




function EnsVision() {
    const tasks = [
        {
            text: "Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS, Wagmi, Web3.js, Moralis, Ethers.js",
            keywords: [
                "Alchemy",
                "Wagmi",
                "Web3.js",
                "Moralis",
                "Ethers.js"
            ]
        },
        {
            text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
            keywords: [
                "quality",
                "testing tasks",
                "user base"
            ]
        },
        {
            text: "Implemented website design and enhanced interactivity.",
            keywords: [
                "website design"
            ]
        },
        {
            text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in ENS",
            keywords: [
                "smart contracts",
                "ENS"
            ]
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 max-w-xl px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col spacey-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide",
                            children: [
                                "Software Engineer ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-AAsecondary",
                                    children: "@ web3"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: "Dec 2022 - Jun 2023"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-mono text-xs text-AAsecondary hover:cursor-pointer",
                            style: {
                                fontSize: "0.6rem"
                            },
                            // set on click to open the website
                            onClick: ()=>window.open("https://www.ens.vision/", "_blank"),
                            children: "www.ens.vision"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4 sm:text-sm text-xs",
                    children: tasks.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row space-x-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                    className: " h-5 w-4 text-AAsecondary flex-none"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-gray-500 sm:text-sm text-xs",
                                    dangerouslySetInnerHTML: {
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }
                                })
                            ]
                        }, index);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/WhereIHaveWorked/WhereIHaveWorked.tsx











function WhereIHaveWorked() {
    const barRef = external_react_default().useRef(null);
    // ? INFORMATIONAL control the green position using px,
    // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
    const GetDescription = ()=>{
        switch(DescriptionJob){
            case "ENSVision":
                return /*#__PURE__*/ jsx_runtime_.jsx(EnsVision, {});
            case "TrouveTavoie":
                return /*#__PURE__*/ jsx_runtime_.jsx(TrouveTavoie, {});
            case "FeverTokens":
                return /*#__PURE__*/ jsx_runtime_.jsx(FeverTokens, {});
            case "IdealFresh":
                return /*#__PURE__*/ jsx_runtime_.jsx(IdealFresh, {});
            case "Advanced Agro Management":
                return /*#__PURE__*/ jsx_runtime_.jsx(AdvancedAgroManagement, {});
            case "Fantasia":
                return /*#__PURE__*/ jsx_runtime_.jsx(Fantasia, {});
            case "SuperBerry":
                return /*#__PURE__*/ jsx_runtime_.jsx(SuperBerry, {});
        }
    };
    const [DescriptionJob, setDescriptionJob] = external_react_default().useState("ENSVision");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        "data-aos": "fade-up",
        className: "flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "flex flex-row items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: "flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-AAsecondary font-sans text-sm sm:text-xl",
                                children: " 02."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3",
                        children: "Where I've Worked"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-center items-center md:items-start ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CompaniesBar, {
                        setDescriptionJob: setDescriptionJob
                    }),
                    GetDescription()
                ]
            })
        ]
    });
};
const CompaniesBar = (props)=>{
    const [barPosition, setBarPosition] = external_react_default().useState(-8); // Green bar position by the default it's -20px
    const [barAbovePosition, setBarAbovePosition] = external_react_default().useState(0);
    const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = external_react_default().useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false, 
    ]);
    const CompanyButton = (props)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: ()=>{
                setBarPosition(props.BarPosition);
                setBarAbovePosition(props.BarAvobePosition);
                props.setDescriptionJob(props.DescriptionJob);
                setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
            },
            className: `flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen] ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`,
            children: props.CompanyName
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "WhereIhaveWorkedSection",
        className: " flex flex-col md:flex-row w-screen lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5 rounded md:order-1 order-2 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                    animate: {
                        y: barPosition
                    },
                    // ref={barRef}
                    className: `absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row md:flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 0,
                                CompanyName: "ENS Vision",
                                BarPosition: -12,
                                BarAvobePosition: 1,
                                DescriptionJob: "ENSVision",
                                CompanyNameBackgroundColorGreen: [
                                    true,
                                    false,
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 1,
                                CompanyName: "TrouveTavoie",
                                BarPosition: 32,
                                BarAvobePosition: 129,
                                DescriptionJob: "TrouveTavoie",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    true,
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 2,
                                CompanyName: "FeverTokens",
                                BarPosition: 76,
                                BarAvobePosition: 257,
                                DescriptionJob: "FeverTokens",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    false,
                                    true,
                                    false,
                                    false,
                                    false
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 3,
                                CompanyName: "IdealFresh",
                                BarPosition: 120,
                                BarAvobePosition: 385,
                                DescriptionJob: "IdealFresh",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    false,
                                    false,
                                    true,
                                    false,
                                    false
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 4,
                                CompanyName: "SuperBerry",
                                BarPosition: 164,
                                BarAvobePosition: 513,
                                DescriptionJob: "SuperBerry",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    false,
                                    false,
                                    false,
                                    true,
                                    false
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 5,
                                CompanyName: "AA Management",
                                BarPosition: 208,
                                BarAvobePosition: 641,
                                DescriptionJob: "Advanced Agro Management",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    true
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CompanyButton, {
                                ButtonOrderOfcompanyNameBackgroundColorGreen: 6,
                                CompanyName: "Fantasia SME",
                                BarPosition: 252,
                                BarAvobePosition: 769,
                                DescriptionJob: "Fantasia",
                                CompanyNameBackgroundColorGreen: [
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    true
                                ],
                                setDescriptionJob: props.setDescriptionJob
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block md:hidden h-0.5 rounded bg-gray-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(framer_motion.motion.div, {
                            animate: {
                                x: barAbovePosition
                            },
                            className: "w-[128px] h-0.5 rounded bg-AAsecondary"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Home/GetInTouch/GetInTouch.tsx



function GetInTouch() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "GetInTouchSection",
        "data-aos": "fade-up",
        className: "flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                        className: "flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row space-x-2 items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-AAsecondary font-sans text-sm sm:text-base",
                                children: [
                                    " ",
                                    "03."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: " font-sans text-AAsecondary text-base",
                                children: "What's Next?"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85",
                children: "Get In Touch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]",
                children: "Although I'm Always open for any new opportunities, my inbox is open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "mailto:abdellatif@anaflous.com",
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded ",
                        children: "Say Hello"
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Footer/Footer.tsx
var Footer = __webpack_require__(57);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/CustomComponents/ScreenSizeDetector.tsx


function ScreenSizeDetector() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "z-10 fixed bottom-16 left-0 ",
        // make this div on the top of everything
        style: {
            zIndex: 1000
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-6 w-8 rounded-r-md bg-yellow-300 flex justify-center items-center text-black font-bold text-xs p-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "4xl:block 3xl:block 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden hidden",
                    children: "4XL"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "3xl:hidden 2xl:block xl:hidden lg:hidden md:hidden sm:hidden hidden",
                    children: "3XL"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "2xl:hidden xl:block lg:hidden md:hidden sm:hidden hidden",
                    children: "2XL"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "xl:hidden lg:block md:hidden sm:hidden hidden",
                    children: "XL"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: " xl:hidden lg:hidden md:block sm:hidden hidden ",
                    children: "Lg"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "xl:hidden lg:hidden md:hidden sm:block hidden ",
                    children: "md"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "xl:hidden lg:hidden md:hidden sm:hidden block",
                    children: "sm"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/Maintenance/Maintenance.tsx


function Maintenance() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative snap-mandatory min-h-screen bg-AAprimary w-full flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "bg-white bg-transparent",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "mx-auto mb-4 w-10 h-10 text-gray-400",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "currentColor",
                            d: "M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white",
                        children: "Under Maintenance"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400",
                        children: "Sorry! the administrator is performing scheduled maintenance."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-light text-white-500 md:text-lg xl:text-xl dark:text-gray-400",
                        children: [
                            "No problem contact me on",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-white underline",
                                href: "mailto:abdellatif@anaflous.com?subject=Hello%20World&body=Body%20of%20the%20email",
                                children: "abdellatif@anaflous.com"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx
















function Home() {
    const { 0: ShowElement , 1: setShowElement  } = (0,external_react_.useState)(false);
    // const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
    // const [ShowMe, setShowMe] = useState(false);
    // context Variable to clearInterval
    const context = (0,external_react_.useContext)(AppContext/* default */.Z);
    const aboutRef = (0,external_react_.useRef)(null);
    const homeRef = (0,external_react_.useRef)(null);
    // userData state that will be used to get usr location
    // const [userData, setUserData] = useState(null);
    // check if user from Black List
    const { 0: isBlackListed , 1: setIsBlackListed  } = (0,external_react_.useState)(false);
    // check if NEXT_PUBLC_BLACKLIST_COUNTRIES is empty
    // const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    //   process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === "" ? true : false
    // );
    // this userEffect will be called to get the user location, so we can check if he is from the blackList,
    // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
    // useEffect(() => {
    //   if (!IsBlackListEmpty) {
    //     const fetchData = async () => {
    //       try {
    //         const IP_Address = async () => {
    //           return fetch("https://api.ipify.org/?format=json")
    //             .then(res => res.json())
    //             .then(data => data.ip);
    //         };
    //         const response = await fetch("/api/userInfoByIP/" + (await IP_Address())); // Replace with your actual API endpoint
    //         const data = await response.json();
    //         setUserData(data);
    //       } catch (error) {
    //         console.error("Error fetching data location and ip address:", error);
    //         // Handle errors as needed
    //       }
    //     };
    //     fetchData();
    //   }
    // }, [IsBlackListEmpty]);
    // Empty dependency array ensures that this effect runs once when the component mounts
    // this useEffect will be called when userData is set
    // useEffect(() => {
    //   // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
    //   if (!IsBlackListEmpty) {
    //     if (userData) {
    //       // check if the user country is in the blackList
    //       if (
    //         process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES.includes(userData.country)
    //       ) {
    //         // set isBlackListed to true
    //         setIsBlackListed(true);
    //       }
    //     }
    //   }
    // }, [IsBlackListEmpty, userData]);
    (0,external_react_.useEffect)(()=>{
        // remove the interval Cookie timer setter when
        clearInterval(context.sharedState.userdata.timerCookieRef.current);
        if (false) {}
        setTimeout(()=>{
            setShowElement(true);
        }, 4500);
        // setTimeout(() => {
        //   setShowThisCantBeReached(false);
        // }, 5400);
        // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
        setTimeout(()=>{
            setShowElement(false);
            // setShowMe(true);
            context.sharedState.finishedLoading = true;
            context.setSharedState(context.sharedState);
        }, 10400);
    }, [
        context,
        context.sharedState
    ]);
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000,
            once: true
        });
    }, []);
    console.log("website is rendering...");
    const meta = {
        title: "Abdellatif Anaflous - Software Engineer",
        description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
        image: "/titofCercle.png",
        type: "website"
    };
    const isProd = true;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://anaflous.com`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://anaflous.com`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Manu Arora"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@titofabdo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    })
                ]
            }),
            !isBlackListed ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative snap-mandatory min-h-screen bg-AAprimary w-full ",
                children: [
                    context.sharedState.finishedLoading ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : ShowElement ? /*#__PURE__*/ jsx_runtime_.jsx(StartupLogo_Startup, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                        finishedLoading: context.sharedState.finishedLoading,
                        sectionsRef: homeRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MyName, {
                        finishedLoading: context.sharedState.finishedLoading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaEmail, {
                        finishedLoading: context.sharedState.finishedLoading
                    }),
                    context.sharedState.finishedLoading ? /*#__PURE__*/ jsx_runtime_.jsx(AboutMe, {
                        ref: aboutRef
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    context.sharedState.finishedLoading ? /*#__PURE__*/ jsx_runtime_.jsx(WhereIHaveWorked, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    context.sharedState.finishedLoading ? /*#__PURE__*/ jsx_runtime_.jsx(GetInTouch, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    context.sharedState.finishedLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        githubUrl: "https://github.com/hktitof/my-website",
                        hideSocialsInDesktop: true
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    !isProd && /*#__PURE__*/ jsx_runtime_.jsx(ScreenSizeDetector, {})
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Maintenance, {})
        ]
    });
};


/***/ }),

/***/ 527:
/***/ ((module) => {

module.exports = require("@emotion/is-prop-valid");

/***/ }),

/***/ 34:
/***/ ((module) => {

module.exports = require("framer-motion");

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
var __webpack_exports__ = __webpack_require__.X(0, [231,280,74], () => (__webpack_exec__(888)));
module.exports = __webpack_exports__;

})();