"use strict";
(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 990:
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
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(34);
;// CONCATENATED MODULE: ./components/TypingProject/timer/TimerSpan.tsx



// this will return min and sec Tens and Units example of of seconds is 180 sec return is [3,0,0]
const getMinutesAndSeconds = (secondsCounts)=>{
    if (secondsCounts >= 60) {
        const minutes = Math.floor(secondsCounts / 60);
        const secondsUnits = secondsCounts - minutes * 60;
        if (secondsUnits > 9) {
            const secondsUnit = Math.floor(secondsUnits / 10);
            return [
                minutes,
                secondsUnit,
                secondsUnits - secondsUnit * 10
            ];
        } else {
            return [
                minutes,
                0,
                secondsUnits
            ];
        }
    } else {
        if (secondsCounts > 9) {
            const secondsTen = Math.floor(secondsCounts / 10);
            return [
                0,
                secondsTen,
                secondsCounts - secondsTen * 10
            ];
        } else {
            return [
                0,
                0,
                secondsCounts
            ];
        }
    }
};
function TimerSpan({ setIsFinished , inputLostFocus , seconds , timerCountingInterval , updateStatistics ,  }) {
    const { 0: secondsState , 1: setSecondsState  } = (0,external_react_.useState)(seconds.current);
    const timerSpanRef = (0,external_react_.useRef)(null);
    const { 0: timerFinishedByItSelf , 1: setTimerIsFinishedByItSelf  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (inputLostFocus) {
            clearInterval(timerCountingInterval.current); //clear interval when input is lost focus
        } else {
            timerCountingInterval.current = setInterval(()=>{
                console.log("Timer executing...", seconds.current);
                seconds.current--;
                setSecondsState(seconds.current);
                if (seconds.current > 0) {
                    if (timerSpanRef.current) {
                        const [minutes, secondsTen, secondsUnit] = getMinutesAndSeconds(seconds.current);
                        timerSpanRef.current.innerText = `${minutes}:${secondsTen}${secondsUnit}`;
                    }
                } else {
                    // timer is Finished here by it self
                    setTimerIsFinishedByItSelf(true);
                }
            }, 1000);
        }
    }, [
        setIsFinished,
        inputLostFocus,
        seconds,
        timerCountingInterval
    ]);
    (0,external_react_.useEffect)(()=>{
        if (timerFinishedByItSelf == true) {
            setTimerIsFinishedByItSelf(false);
            updateStatistics();
            setIsFinished(true);
            clearInterval(timerCountingInterval.current);
        }
    }, [
        setIsFinished,
        timerCountingInterval,
        timerFinishedByItSelf,
        updateStatistics
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            secondsState <= 5 && /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.span, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: [
                        0,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity
                },
                ref: timerSpanRef,
                className: "text-AAError md:text-xl text-sm",
                children: "0:05"
            }),
            secondsState <= 15 && secondsState > 5 && /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.span, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: [
                        0,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 1,
                    repeat: Infinity
                },
                ref: timerSpanRef,
                className: "text-AAError md:text-xl text-sm",
                children: "0:15"
            }),
            secondsState > 15 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ref: timerSpanRef,
                className: "text-gray-400 md:text-xl text-sm"
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Icons/GithubIcon.tsx
var GithubIcon = __webpack_require__(145);
// EXTERNAL MODULE: ./components/Icons/LinkedinIcon.tsx
var LinkedinIcon = __webpack_require__(416);
// EXTERNAL MODULE: ./components/Icons/InstagramIcon.tsx
var InstagramIcon = __webpack_require__(777);
;// CONCATENATED MODULE: ./components/Icons/YoutubeIcon.tsx


function YoutubeIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
        })
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/Footer/Footer.tsx






const ClickableIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: props.href,
        className: "",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ jsx_runtime_.jsx(props.Icon, {
            className: "w-5 h-5 text-gray-400 hover:text-AAsecondary transition duration-800 fill-current hover:cursor-pointer "
        })
    });
};
function Fotter(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` ${props.className} bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row space-x-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ClickableIcon, {
                        href: "https://github.com/hktitof",
                        Icon: GithubIcon/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ClickableIcon, {
                        href: "https://www.linkedin.com/in/abdellatif-anaflous/",
                        Icon: LinkedinIcon/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ClickableIcon, {
                        href: "https://www.instagram.com/titof_abdo/",
                        Icon: InstagramIcon/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ClickableIcon, {
                        href: "https://www.youtube.com/c/NTTFT",
                        Icon: YoutubeIcon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: props.link,
                className: "",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "group-hover:text-AAsecondary sm:text-sm text-xs",
                            children: "Designed & Built by Anaflous Abdellatif"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GithubIcon/* default */.Z, {
                                    className: "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary duration-800"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "",
                                    children: "Source code - Github"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/statisticsTab/StatisticsTab.tsx



const getTopScore = (st)=>{
    if (st.length > 1) {
        const statics = [
            ...st.slice(0).reverse()
        ];
        let topScore = statics[0].wpm;
        let topScoreIndex = 0;
        statics.forEach((item, index)=>{
            if (item.wpm > topScore) {
                topScore = item.wpm;
                topScoreIndex = index;
            }
        });
        return topScoreIndex;
    } else {
        return null;
    }
};
const isTopScore = (index, statistics)=>{
    const result = getTopScore(statistics);
    return result == null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : index === result ? /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.span, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: [
                1,
                0,
                1
            ]
        },
        transition: {
            repeat: Infinity,
            duration: 1
        },
        className: "text-yellow-300",
        children: "TopScore"
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
function StatisticsTab({ statistics , round , finishedTime  }) {
    console.log("score list : ", statistics);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-col space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sm:text-xl text-sm text-gray-400 underline ",
                            children: "Statistics"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full font-mono text-AAsecondary flex flex-row justify-between px-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sm:text-base text-sm ",
                                children: [
                                    "round ",
                                    round.toString(),
                                    " : "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sm:text-base text-sm ",
                                children: [
                                    finishedTime,
                                    " sec"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col duration-400",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-1.5 w-full inline-block align-middle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overflow-hidden border rounded-lg border-gray-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                className: "min-w-full divide-y divide-gray-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        className: "bg-gray-500 border border-gray-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",
                                                    children: "ROUND"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",
                                                    children: "Wpm"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-xs font-bold text-left text-gray-300 uppercase ",
                                                    children: "Accuracy"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        className: "divide-y divide-gray-200 text-AAsecondary",
                                        children: statistics.slice(0).reverse().map((item, index)=>{
                                            return index == 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.5
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    default: {
                                                        duration: 0.3,
                                                        ease: [
                                                            0,
                                                            0.71,
                                                            0.2,
                                                            1.01
                                                        ]
                                                    },
                                                    scale: {
                                                        type: "spring",
                                                        damping: 5,
                                                        stiffness: 100,
                                                        restDelta: 0.001
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "px-6 py-4 text-sm font-medium whitespace-nowrap",
                                                        children: item.round
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                        className: "px-6 py-4 text-sm flex sm:flex-row flex-col whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sm:order-2 order-1 sm:pl-2",
                                                                children: isTopScore(index, statistics)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    item.wpm,
                                                                    " wpm "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                        className: "px-6 py-4 text-sm text-left whitespace-nowrap",
                                                        children: [
                                                            item.accuracy,
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }, index) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "px-6 py-4 text-sm font-medium whitespace-nowrap",
                                                        children: item.round
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                        className: "px-6 py-4 text-sm flex sm:flex-row flex-col whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sm:order-2 order-1 sm:pl-2",
                                                                children: isTopScore(index, statistics)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    item.wpm,
                                                                    " wpm "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                        className: "px-6 py-4 text-sm text-left whitespace-nowrap",
                                                        children: [
                                                            item.accuracy,
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/Icons/RestartIcon.tsx


function RestartIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-full h-full text-gray-400 group-hover:text-AAsecondary group-hover:rotate-180 duration-200",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
        })
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/Image/Img.tsx


function Img(props) {
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: props.src,
        alt: props.alt,
        className: props.className
    }));
};

;// CONCATENATED MODULE: ./components/TypingProject/AboutComp/About.tsx


function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex md:flex-row flex-col md:space-x-12 items-center space-y-4 pt-24 opacity-70 hover:opacity-100 duration-500 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-none w-32 lg:w-44 flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                    src: "gdscCercle.png",
                    alt: "About picture",
                    className: "opacity-80"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col space-y-8 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300 text-center",
                        children: "What's this project for?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "font-sans italic sm:text-base text-sm text-gray-400 text-center",
                        children: [
                            "Most jobs do not explicitly require certain typing speeds, but that's because basic typing skills are taken as a given. Thus, you should",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold text-gray-300",
                                children: "aim for a typing speed of at least 40 WPM"
                            }),
                            " to keep up a standard level of efficiency at work..However this project aim to help you to improve your typing speed by tracking your progress in each round and give you a score based on your typing speed and accuracy."
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/Statistics/TypingStatistics.tsx





function TypingStatistics(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: " w-full h-full flex flex-row sm:space-x-12 space-x-4 justify-center items-center pb-16",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
                        initial: {
                            opacity: 0,
                            x: 30
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "flex flex-col items-center text-gray-400 hover:text-AAsecondary duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-base text-xs",
                                children: "Windows : Ctrl + /"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-base text-xs",
                                children: "Or"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-base text-xs",
                                children: "Mac : Cmd + /"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-8 w-[2px] bg-gray-400 rounded"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        onClick: ()=>{
                            console.log("Restarted By a click!!!!");
                            props.restart();
                        },
                        className: "group flex flex-row space-x-3 items-center hover:cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:h-8 sm:w-8 h-5 w-5 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(RestartIcon, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sm:text-lg text-sm font-mono text-gray-400 group-hover:text-AAsecondary duration-200 group-hover:translate-x-2",
                                children: "Restart"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: " w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 sm:px-12 flex flex-col space-y-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(StatisticsTab, {
                    statistics: props.statistics,
                    round: props.roundCounter,
                    finishedTime: (props.timeToType - props.seconds.current).toString()
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/TypingProject/Functions/functions.ts
/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */ const getData = async (arg_state, setActiveWordWithIndex, setRoundCounter, roundCounter)=>{
    fetch("/api/typing/10").then((response)=>response.json()).then((data)=>{
        // ?UNCOMMENT THIS TO MODIFY THE QUOTE FOR TESTING
        // data.quote = "j";
        const wordsAndStatus = []; // this aaay will hold the words and their status
        data.quote.split(" ").forEach((item, index)=>{
            const word = ()=>{
                if (data.quote.split(" ").length - 1 == index) {
                    return item;
                } else {
                    return item + " ";
                }
            };
            wordsAndStatus.push({
                word: word(),
                indexFrom: 0,
                indexTo: 0
            });
        });
        // getting index of the first char and last char in the text.
        let LastIndex = 0;
        wordsAndStatus.forEach((item, index)=>{
            if (index == 0) {
                item.indexFrom = 0;
                item.indexTo = item.word.length - 1;
                LastIndex = item.indexTo;
            } else {
                item.indexFrom = LastIndex + 1;
                item.indexTo = item.indexFrom + item.word.length - 1;
                LastIndex = item.indexTo;
            }
        });
        const temArray = [
            wordsAndStatus,
            [],
            {
                CursorPosition: 0
            }
        ]; //temporary array to hold the data
        /**
       * @@explanation for the following action
       * this will will convert data to array of char then push each char to the tempArray second Array
       * as objects with background default value ""
       */ data.quote.split("").forEach((item, index)=>{
            // pushing the char to the tempArray second Array
            temArray[1].push({
                char: item,
                charColor: "text-gray-500"
            });
        });
        setRoundCounter(roundCounter + 1);
        setActiveWordWithIndex({
            wordIndex: 0,
            wordDetail: temArray[0][0]
        }); // set the first active word as active after Data is loaded
        /**
       * @stateChange : this will change the state that contains the data
       */ arg_state(temArray);
    }).catch((err)=>console.error(err));
};
// this function will calculate the wpm
const calculateWpm = (input, time)=>{
    let cpm = 0;
    for(let i = 0; i < input.length; i++){
        if (input[i].charColor == "text-AAsecondary") {
            cpm++;
        } else if (input[i].charColor == "text-gray-500") {
            break;
        }
    }
    return Math.floor(Math.round(cpm / time * 60) / 5);
};
// this function will calculate the accuracy
const calculateAccuracy = (input)=>{
    let correct = 0;
    let incorrect = 0;
    for(let i = 0; i < input.length; i++){
        if (input[i].charColor == "text-AAsecondary") {
            correct++;
        } else if (input[i].charColor == "text-AAerror") {
            incorrect++;
        }
    }
    return Math.floor(correct * 100 / input.length);
};
// this will handle onCharChange event and will update the states
const handleOnChangeInput = (input, event, activeWordWithIndex, setActiveWordWithIndex, myText, setMyText, setIsFinished, timerCountingInterval, updateStatistics)=>{
    /**
   * @nextForLoop
   * this for loop to give the char its default color back, starting from activeWord first char index
   * this loop will help  when user delete a character
   */ for(let j = activeWordWithIndex.wordDetail.indexFrom; j < myText[1].length; j++){
        myText[1][j].charColor = "text-gray-500";
    }
    // start validating from this index CharIndex initial
    let targetWordIndexIncrement = activeWordWithIndex.wordDetail.indexFrom;
    input.split("").forEach((element, index)=>{
        myText[1][targetWordIndexIncrement].charColor = element === myText[1][targetWordIndexIncrement].char ? "text-AAsecondary" : "text-AAError";
        targetWordIndexIncrement++;
    });
    // checks if input is equal to the active word ( true => set inputValue to "" )
    if (input.localeCompare(activeWordWithIndex.wordDetail.word) == 0) {
        const nextWordIndex = activeWordWithIndex.wordIndex + 1;
        setActiveWordWithIndex({
            wordIndex: nextWordIndex,
            wordDetail: myText[0][nextWordIndex]
        });
        event.target.value = ""; // clear the input
    }
    // set the cursor position to next target Char that will be typed of the active word
    /**
   * @note : normal for loop is used here to break the loop
   */ for(let i = 0; i < myText[1].length; i++){
        if (myText[1][i].charColor.localeCompare("text-gray-500") == 0) {
            myText[2].CursorPosition = i;
            break;
        }
    }
    setMyText([
        ...myText
    ]); // update the state
    // Checking if the user finished typing by checking if the last char gray color is changed!
    if (!(myText[1][myText[1].length - 1].charColor === "text-gray-500")) {
        console.log("Player Finished typing!!");
        updateStatistics(); // update statistics
        /**
     * @note :  next line will prevent from showing the previous text when user restarts
     *  by checking !(myText[1].length==0)
     */ myText[1] = [];
        setMyText([
            ...myText
        ]);
        setIsFinished(true);
        clearInterval(timerCountingInterval.current); // stop the timer
    }
};

;// CONCATENATED MODULE: ./components/TypingProject/CursorCarotComp/CursorCarotComp.tsx


function CursorCarotComp() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.span, {
        initial: {
            opacity: 0,
            x: 0
        },
        animate: {
            opacity: [
                1,
                0
            ]
        },
        transition: {
            opacity: {
                duration: 0.8,
                repeat: Infinity
            }
        },
        className: "absolute left-0 w-[3px] lg:h-8 sm:bottom-0 top-1 sm:h-5 h-4 rounded bg-AAsecondary "
    });
};

// EXTERNAL MODULE: ./components/AppContextFolder/AppContext.tsx
var AppContext = __webpack_require__(732);
;// CONCATENATED MODULE: ./pages/typing/index.tsx








// let keyboardEvent; // this variable will hold the keyboard event callback function;
function Home() {
    //  this general state will hold the data
    const [myText, setMyText] = external_react_default().useState([
        [],
        [],
        {
            CursorPosition: 0
        }
    ]);
    // this state will hold the active word index and the word details
    const { 0: activeWordWithIndex , 1: setActiveWordWithIndex  } = (0,external_react_.useState)(null); // this state will hold the active word with its index in the quote
    const { 0: roundCounter , 1: setRoundCounter  } = (0,external_react_.useState)(0); // this state will hold the round counter
    const { 0: isFinished , 1: setIsFinished  } = (0,external_react_.useState)(false); // this state will hold when user finished typing
    const inputRef = (0,external_react_.useRef)(null); // user input Ref
    const textInputRef = (0,external_react_.useRef)(null);
    const absoluteTextINputRef = (0,external_react_.useRef)(null); // absolute div Ref when input Lost focus
    const { 0: inputLostFocus , 1: setInputLostFocus  } = (0,external_react_.useState)(false);
    const timeToType = 180; // default time to type
    const seconds = (0,external_react_.useRef)(timeToType); // this useRef will hold the remaining seconds to type
    const timerCountingInterval = (0,external_react_.useRef)(); // this useRef will hold the interval that is used in TimerSpan Component
    const { 0: statistics , 1: setStatistics  } = (0,external_react_.useState)([]); // this state will hold the statistics after user finish typing
    const { 0: isStartedTyping , 1: seIsStartedTyping  } = (0,external_react_.useState)(false); // this state will hold if user started typing
    const context = (0,external_react_.useContext)(AppContext/* default */.Z);
    //  this restart will be assigned again in each render only when roundCounter increase
    const restart = (0,external_react_.useCallback)(()=>{
        document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
        console.log("event Listener is Removed!!!!!!!!!!");
        seconds.current = timeToType; // update the seconds to default value again
        getData(setMyText, setActiveWordWithIndex, setRoundCounter, roundCounter);
        setActiveWordWithIndex(null);
        seIsStartedTyping(false);
        if (inputRef.current?.value) {
            inputRef.current.value = "";
        }
    }, [
        context.sharedState.typing.keyboardEvent,
        roundCounter
    ]);
    // update Statistics state
    const updateStatistics = (0,external_react_.useCallback)(()=>{
        statistics.push({
            round: roundCounter,
            wpm: calculateWpm(myText[1], timeToType - seconds.current),
            accuracy: calculateAccuracy(myText[1])
        });
        setStatistics([
            ...statistics
        ]);
    }, [
        myText,
        roundCounter,
        statistics
    ]);
    // add event listener to track window size to change inputLostFocus Element height
    (0,external_react_.useEffect)(()=>{
        if (inputLostFocus) {
            context.sharedState.typing.eventInputLostFocus = ()=>{
                console.log("window is resized..Changing inputLostFocus height");
                if (absoluteTextINputRef.current?.style && inputLostFocus) {
                    absoluteTextINputRef.current.style.height = textInputRef.current.clientHeight + "px";
                }
            };
            window.addEventListener("resize", context.sharedState.typing.eventInputLostFocus);
        } else {
            // delete event listener when it's Focused
            window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
        }
    }, [
        context.sharedState.typing,
        inputLostFocus
    ]);
    // this useEffect will be called when the component is rendered for the first time and will keep focus on input
    (0,external_react_.useEffect)(()=>{
        if (myText[0].length == 0) {
            console.log("#useEffect Getting Data.......");
            getData(setMyText, setActiveWordWithIndex, setRoundCounter, roundCounter); // setMyText is the callback function
        }
        inputRef.current?.focus();
        console.log("useEffect executed...");
    }, [
        myText,
        activeWordWithIndex,
        isFinished,
        roundCounter
    ]);
    // this useEffect will be called each time restart is changed, it will initialize the keyboard event
    (0,external_react_.useEffect)(()=>{
        inputRef.current?.focus();
        context.sharedState.typing.keyboardEvent = (e)=>{
            console.log("KeyDown Detected : ", e.code);
            if ((e.metaKey || e.ctrlKey) && e.code === "Slash") {
                restart();
                console.log("Restarted By Shortcut!!!!");
            }
        };
    }, [
        context.sharedState.typing,
        restart
    ]);
    // add event listener when the user finished typing
    (0,external_react_.useEffect)(()=>{
        if (isFinished) {
            console.log("event Listener added!!!");
            document.addEventListener("keydown", context.sharedState.typing.keyboardEvent);
        }
    }, [
        context.sharedState.typing.keyboardEvent,
        isFinished
    ]);
    // this will handle new round conditions.
    (0,external_react_.useEffect)(()=>{
        console.log("event Listener is Removed!!!!!!!!!!");
        document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
        if (inputRef.current?.value) {
            inputRef.current.value = "";
        }
        setIsFinished(false); // set isFinished to false each time roundCounter changes that means each new round
        console.log("useEffect RoundCounter executed...");
    }, [
        context.sharedState.typing.keyboardEvent,
        roundCounter
    ]);
    // this useEffect will handle inputLostFocus state
    (0,external_react_.useEffect)(()=>{
        if (inputLostFocus) {
            if (absoluteTextINputRef.current?.style && inputLostFocus) {
                absoluteTextINputRef.current.style.height = textInputRef.current.clientHeight + "px";
            }
        } else {
            inputRef.current?.focus();
        }
    }, [
        inputLostFocus
    ]);
    // useEffect to clear EventListener of others projects
    (0,external_react_.useEffect)(()=>{
        // remove the interval Cookie timer setter when
        if (false) {}
    }, [
        context.sharedState
    ]);
    // console.log("rounded Count : ", roundCounter);
    // console.log("page re-rendered...");
    // console.log("data : ", myText);
    // console.log("Active Word : ", activeWordWithIndex);
    // console.log("CursorPosition : ", myText[2].CursorPosition);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` bg-AAprimary min-h-screen  w-full flex flex-col justify-center items-center ${isFinished ? "pt-48" : ""}`,
        children: [
            !isFinished && !(myText[1].length == 0) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col justify-center items-center space-y-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            ref: textInputRef,
                            className: "relative w-full h-full flex flex-col space-y-8 ",
                            children: [
                                inputLostFocus && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>{
                                        setInputLostFocus(false);
                                    },
                                    ref: absoluteTextINputRef,
                                    className: "absolute w-full z-10 bg-AAprimary opacity-90 rounded border-[0.5px] border-gray-700 flex justify-center items-center hover:cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-gray-400 font-mono",
                                        children: "Click to continue.."
                                    })
                                }),
                                isStartedTyping && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full flex justify-between pb-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-gray-400 md:text-xl text-sm ",
                                            children: [
                                                seconds.current == timeToType ? "0" : calculateWpm(myText[1], timeToType - seconds.current),
                                                " wpm"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TimerSpan, {
                                            setIsFinished: setIsFinished,
                                            inputLostFocus: inputLostFocus,
                                            seconds: seconds,
                                            timerCountingInterval: timerCountingInterval,
                                            updateStatistics: updateStatistics
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:text-3xl md:text-xl sm:text-xl hover:cursor-pointer flex flex-wrap px-2 ",
                                    onClick: ()=>inputRef.current.focus(),
                                    children: myText[0].map((item, index)=>{
                                        // console.log("DOM Showing words......");
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex ",
                                            children: item.word.split("").map((char, i)=>{
                                                if (char.localeCompare(" ") == 0 && myText[1][item.indexFrom + i].charColor.localeCompare("text-AAError") == 0) {
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: `relative text-AAError`,
                                                        children: [
                                                            i + item.indexFrom == myText[2].CursorPosition ? /*#__PURE__*/ jsx_runtime_.jsx(CursorCarotComp, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    "\xa0 ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "absolute bottom-0 h-[3px] w-full bg-AAError"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, i);
                                                } else if (char.localeCompare(" ") == 0) {
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "relative ",
                                                        children: [
                                                            i + item.indexFrom == myText[2].CursorPosition ? /*#__PURE__*/ jsx_runtime_.jsx(CursorCarotComp, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            "\xa0"
                                                        ]
                                                    }, i);
                                                } else {
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: `relative ${myText[1][item.indexFrom + i].charColor}`,
                                                        children: [
                                                            char,
                                                            i + item.indexFrom == myText[2].CursorPosition ? /*#__PURE__*/ jsx_runtime_.jsx(CursorCarotComp, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                        ]
                                                    }, i);
                                                }
                                            })
                                        }, index);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full flex justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        onBlur: ()=>{
                                            console.log("input lost focus!!");
                                            setInputLostFocus(true);
                                        },
                                        ref: inputRef,
                                        type: "text",
                                        // ?INFORMATIONAL : uncomment the following line to see the input
                                        // className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600
                                        //           py-2 px-4 focus:outline-none "
                                        className: "w-0 h-0 bg-AAprimary text-xl text-center text-gray-600 border-b-gray-600 py-2 px-4 focus:outline-none ",
                                        onChange: (e)=>{
                                            if (isStartedTyping == false) {
                                                seIsStartedTyping(true);
                                            }
                                            handleOnChangeInput(e.target.value, e, activeWordWithIndex, setActiveWordWithIndex, myText, setMyText, setIsFinished, timerCountingInterval, updateStatistics);
                                        },
                                        onKeyDownCapture: (e)=>{
                                            // prevent cursor in input from jumping two characters
                                            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                                                inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length + 1);
                                            }
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Fotter, {
                        className: "absolute bottom-0",
                        link: "https://github.com/hktitof/Typing"
                    })
                ]
            }),
            isFinished && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TypingStatistics, {
                        restart: restart,
                        roundCounter: roundCounter,
                        seconds: seconds,
                        statistics: statistics,
                        timeToType: timeToType
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Fotter, {
                        className: "pt-16",
                        link: "https://github.com/hktitof/Typing"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 34:
/***/ ((module) => {

module.exports = require("framer-motion");

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
var __webpack_exports__ = __webpack_require__.X(0, [280], () => (__webpack_exec__(990)));
module.exports = __webpack_exports__;

})();