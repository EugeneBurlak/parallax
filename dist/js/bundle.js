/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js___ = __webpack_require__(3);


window.addEventListener('load', function () {
    new __WEBPACK_IMPORTED_MODULE_0__js___["a" /* MouseMove */]();
    new __WEBPACK_IMPORTED_MODULE_0__js___["b" /* Scroll */]({
        container: '.scroll-parallax',
        styles: {
            height: '100vh',
            position: 'relative'
        },
        commonStyles: {
            top: 0,
            left: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%'
        },
        items: [{
            deep: 0,
            tag: 'div',
            className: 'first-layout',
            styles: {
                zIndex: 6,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/bridge.png)'
            }
        }, {
            deep: 5,
            tag: 'div',
            className: 'second-layout',
            styles: {
                zIndex: 5,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/forest.png)'
            }
        }, {
            deep: 2,
            tag: 'div',
            className: 'third-layout',
            styles: {
                zIndex: 4,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds.png)'
            }
        }, {
            deep: 2.5,
            tag: 'div',
            className: 'four-layout',
            styles: {
                zIndex: 3,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/mountain.png)'
            }
        }, {
            deep: 2,
            tag: 'div',
            className: 'five-layout',
            styles: {
                zIndex: 2,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds4.png)'
            }
        }, {
            deep: 7,
            tag: 'div',
            className: 'seven-layout',
            styles: {
                zIndex: 1,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds5.png)'
            }
        }]
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_MouseMove__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Scroll__ = __webpack_require__(5);


const MouseMove = __WEBPACK_IMPORTED_MODULE_0__modules_MouseMove__["a" /* default */];
/* harmony export (immutable) */ __webpack_exports__["a"] = MouseMove;

const Scroll = __WEBPACK_IMPORTED_MODULE_1__modules_Scroll__["a" /* default */];
/* harmony export (immutable) */ __webpack_exports__["b"] = Scroll;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Parallax {

    constructor(options = {}) {
        this.nameSpaces = {
            wrapper: options.wrapper || '.parallax',
            layers: options.layers || '.parallax-layer',
            deep: options.deep || 'data-parallax-deep'
        };
        this.init();
    }

    init() {
        const self = this,
              parallaxWrappers = document.querySelectorAll(self.nameSpaces.wrapper);
        for (let i = 0; i < parallaxWrappers.length; i++) {
            parallaxWrappers[i].addEventListener('mousemove', e => {
                let x = e.clientX,
                    y = e.clientY,
                    layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
                for (let j = 0; j < layers.length; j++) {
                    let deep = layers[j].getAttribute(self.nameSpaces.deep),
                        disallow = layers[j].getAttribute('data-parallax-disallow'),
                        itemX = disallow && disallow === 'x' ? 0 : x / deep,
                        itemY = disallow && disallow === 'y' ? 0 : y / deep;
                    if (disallow && disallow === 'both') return;
                    layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
                }
            });
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Scroll {
    constructor(options) {
        this.options = options.styles || false;
        this.commonStyles = options && options.commonStyles ? options.commonStyles : false;
        this.container = options && options.container ? document.querySelector(options.container) : null;
        this.items = options && options.items ? options.items : [];
        this.itemsDom = [];

        this.init();
    }
    bindStyles(item, styles) {
        if (!item || !styles) return false;
        for (let style in styles) {
            item.style[style] = styles[style];
        }
    }

    createItem(item) {
        let tag = item.tag || 'div',
            element = document.createElement(tag);
        if (item.className) element.setAttribute('class', item.className);
        this.bindStyles(element, this.commonStyles);
        this.bindStyles(element, item.styles);
        this.itemsDom.push(element);
        return element;
    }

    build() {
        let items = this.items,
            container = this.container,
            self = this;
        self.bindStyles(container, self.options);
        if (!items.length) return false;
        items.forEach(function (item, index) {
            item.index = index;
            container.appendChild(self.createItem(item));
        });
    }

    addScrollEvent() {
        let container = this.container,
            itemsDom = this.itemsDom,
            items = this.items;
        window.addEventListener('scroll', function (event) {
            let windowTop = this.pageYOffset,
                containerTop = container.offsetTop;
            if (windowTop >= containerTop) {
                itemsDom.forEach(function (element, index) {
                    let deep = items[index].deep,
                        inverst = items[index].inverst;
                    if (deep) {
                        let transition = (windowTop - containerTop) / deep;
                        if (inverst) transition = transition * -1;
                        element.style.transform = 'translateY(' + transition + 'px)';
                        element.style.webkitTransform = 'translateY(' + transition + 'px)';
                    }
                });
            }
        });
    }

    init() {
        if (!this.container) return false;
        this.build();
        this.addScrollEvent();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Scroll);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map