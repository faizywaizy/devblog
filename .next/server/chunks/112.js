"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 7518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5 position:relative",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(7518);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/alert.tsx



const Alert = ({ preview  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("border-b", {
            "bg-neutral-800 border-neutral-800 text-white": preview,
            "bg-neutral-50 border-neutral-200": !preview
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-2 text-center text-sm",
                children: preview ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "This page is a preview.",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/api/exit-preview",
                            className: "underline hover:text-teal-300 duration-200 transition-colors",
                            children: "Click here"
                        }),
                        " ",
                        "to exit preview mode."
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Help improve this website by  ",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `https://github.com/faizywaizy`,
                            target: "_blank",
                            className: "underline font-bold hover:text-blue-600 duration-200 transition-colors",
                            children: "sending feedback!"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_alert = (Alert);

;// CONCATENATED MODULE: ./components/footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-neutral-50 border-t border-neutral-200",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-28 flex flex-col lg:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                        children: "Thanks for looking me up!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://nextjs.org/docs/basic-features/pages",
                                className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                                children: "Contact Me"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `https://github.com/faizywaizy`,
                                className: "mx-3 font-bold hover:underline",
                                children: "View on GitHub"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./lib/constants.ts
const EXAMPLE_PATH = "blog-starter";
const CMS_NAME = "Markdown";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

;// CONCATENATED MODULE: ./components/meta.tsx



const Meta = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `The everyday world through a Product lens`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: HOME_OG_IMAGE_URL
            })
        ]
    });
};
/* harmony default export */ const meta = (Meta);

// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(3047);
;// CONCATENATED MODULE: ./components/ParticleBackground.tsx



const particlesInit = async (main)=>{
    console.log(main);
    await (0,external_tsparticles_.loadFull)(main);
    await (0,external_tsparticles_.loadFull)(main);
};
const particlesLoaded = (container)=>{
    console.log(container);
};
const ParticleBackground = ({})=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            position: "absolute",
            zIndex: -1
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
            id: "tsparticles",
            init: particlesInit,
            options: {
                background: {
                    color: {
                        value: "#212833"
                    },
                    opacity: 0.99
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: [
                            "#cc892b",
                            "#1cd6b1",
                            "#8c4ec7",
                            "#8bc74e"
                        ]
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 3
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5
                        }
                    }
                },
                detectRetina: true
            }
        })
    });
};
/* harmony default export */ const components_ParticleBackground = (ParticleBackground);

;// CONCATENATED MODULE: ./components/layout.tsx





const Layout = ({ preview , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ParticleBackground, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(meta, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen px-{40} position:relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_alert, {
                        preview: preview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;