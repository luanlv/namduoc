require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(20);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Link/Link.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }),
      children
    );
  }
}

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needFetch;

function needFetch() {
  if (false) {
    console.log('first');
    window.firstTime = true;
    return false;
  }
  console.log('second');
  return true;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Layout/Layout.js';
/*global
 $, jQuery
 */


// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';





class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (false) {
      window.myfunload();
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], { data: this.props.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], { data: this.props.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }),
      false && mobilecheck() && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'phone', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text-phone', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            'G\u1ECDi ngay'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            '0973.318.868'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'tel:0973318868', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { id: 'phone-image', className: 'vibrate', src: '/assets/images/phone.png', alt: 'call phone', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          })
        )
      )
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};
var mobilecheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* eslint-disable import/prefer-default-export */



function setData(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = Promise.resolve().then((require => {
  return {
    App: __webpack_require__(105).default,
    Dashboard: __webpack_require__(107).default,
    Library: __webpack_require__(111).default,
    Setting: __webpack_require__(126).default,
    Menu: __webpack_require__(113).default,
    ThongTin: __webpack_require__(128).default,
    Editor: __webpack_require__(109).default,
    ListNews: __webpack_require__(119).default,
    EditNews: __webpack_require__(118).default,
    EditFoods: __webpack_require__(115).default,
    ListFoods: __webpack_require__(116).default,
    EditProduct: __webpack_require__(121).default,
    ListProduct: __webpack_require__(122).default,
    Seo: __webpack_require__(124).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Aside.js';




class Aside extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    let info = ((this.props.data || {}).info || {}).value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colAside', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-12 col-xs-6', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-12 col-xs-6', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'adv', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/hotline.jpg', alt: 'Hotline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-12 col-xs-6', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-12 col-xs-6', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'wrap-video', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
        { appID: '123093138237586', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Page"], { href: info.fanpage, 'data-numposts': '5', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })
      )
    );
  }
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Footer.js';



class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {

    let info = ((this.props.data || {}).info || {}).value;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'footer-wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-box mobi480h', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dangky', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183', target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/dangky.png', alt: 'img', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-right', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
                  'Menu '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        },
                        __self: this
                      },
                      'Menu 1',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      'Menu 2',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        },
                        __self: this
                      },
                      'Menu 3',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        },
                        __self: this
                      },
                      'Menu 4',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 37
                        },
                        __self: this
                      },
                      'Menu 5',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        },
                        __self: this
                      })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'TH\xD4NG TIN WEBSITE'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      },
                      'H\xECnh th\u1EE9c thanh to\xE1n',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 48
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 49
                        },
                        __self: this
                      },
                      'Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n, giao nh\u1EADn',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 52
                        },
                        __self: this
                      },
                      'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        },
                        __self: this
                      })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-12 col-xs-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: this
                  },
                  'TH\xD4NG TIN LI\xCAN H\u1EC6'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'address-box list-footer', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        },
                        __self: this
                      },
                      '\u0110\u1ECBa ch\u1EC9 :',
                      info.diachi
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: this
                      },
                      '\u0110i\u1EC7n tho\u1EA1i : ',
                      info.phone
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-5', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      'Email: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: "mailto:" + info.email, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                          },
                          __self: this
                        },
                        info.email
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-box mobi480s', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dangky', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'http://online.gov.vn/CustomWebsiteDisplay.aspx', target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/dangky.png', alt: 'img', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                })
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'copyright', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-6', __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            },
            '\xA9 2017 COMHOAVANG. All rights reserved | ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'http://vnguy.com/', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                },
                __self: this
              },
              'Thiet Ke Web'
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'http://vnguy.com/', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                },
                __self: this
              },
              'VnGuy.Com'
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Header.js';



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    let info = ((this.props.data || {}).info || {}).value;
    let menu = JSON.parse(info.menu);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/main_logo.png', alt: 'logo', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'header-right', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-menu mobile-showhide', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'panel-left', href: '#menumobile', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                'bar'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                'bar'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                'bar'
              ),
              ' '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#searchbox', className: 'finda mobile-showhide', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            'search'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { id: 'menu', className: 'desktop-showhide sf-js-enabled', style: { touchAction: 'pan-y' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'home', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                'Trang ch\u1EE7'
              )
            ),
            menu.map((el, idx) => {
              if (el.children && el.children.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: idx, className: 'hasSubMenu', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: el.url, className: 'sf-with-ul', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                      },
                      __self: this
                    },
                    el.title
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'subMenu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      },
                      __self: this
                    },
                    el.children.map((el2, idx2) => {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: idx2, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: el2.url, className: 'sf-with-ul', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 39
                            },
                            __self: this
                          },
                          el2.title
                        )
                      );
                    })
                  )
                );
              } else {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    key: idx,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: el.url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      },
                      __self: this
                    },
                    el.title
                  )
                );
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'header-bottom', __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'searchbox', className: 'search-form', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', name: 'ctl00$ctl00$ctl00$btnSearch', value: '', id: 'ctl00_ctl00_ctl00_btnSearch',
                className: 'search-btn', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'search-input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'ctl00$ctl00$ctl00$txtSearch', type: 'text', id: 'ctl00_ctl00_ctl00_txtSearch',
                  className: 'search-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState',
                  id: 'ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share desktop-showhide', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: info.fanpage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline desktop-showhide', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                },
                info.phone
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr', __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr', __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'header-bgr desktop-showhide', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'header-bgl desktop-showhide', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })
    );
  }
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMobile; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/MenuMobile.js';


class MenuMobile extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  closeMenu() {
    if (false) {
      console.log('close');
      $('#close-menu').trigger('click');
    }
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'menumobile', className: 'mobile-panel mobile-left', style: { transform: 'translate3d(-120%, 0px, 0px)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'close-menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { id: 'close-menu', href: '#menumobile', className: 'glyphicon glyphicon-remove-circle', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'menu-in', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'menu-mobile', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'logo', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/',
                onClick: this.closeMenu,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/main_logo.png', alt: 'logo com hoa vang', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'menu-nav', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/san-pham', onClick: this.closeMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                'S\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/com-kho-hoa-vang', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    'C\u1ED1m kh\xF4 hoa v\xE0ng'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/cha-com', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: this
                    },
                    'Ch\u1EA3 C\u1ED1m'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/com-non-me-tri', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: this
                    },
                    'C\u1ED1m Non M\u1EC5 Tr\xEC'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/mon-ngon', onClick: this.closeMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                'M\xD3N NGON'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/mon-ngon-tu-com', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: this
                    }),
                    'M\xF3n ngon t\u1EEB C\u1ED1m'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/cach-lam-mon-ngon-tai-nha', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: this
                    }),
                    'C\xE1ch l\xE0m m\xF3n ngon t\xE0i nh\xE0'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'active', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/tin-tuc', onClick: this.closeMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                'TIN T\u1EE8C'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/su-kien', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: this
                    }),
                    'S\u1EF1 ki\u1EC7n'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/tin-tuc-tong-hop', onClick: this.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      },
                      __self: this
                    }),
                    'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'last', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/lien-he-dat-hang', onClick: this.closeMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                },
                'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box', __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                },
                __self: this
              },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: this
                },
                '097 331 8868'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box', __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: 'https://www.facebook.com/comhoavang', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                })
              )
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

const port = process.env.PORT || 3969;
/* harmony export (immutable) */ __webpack_exports__["a"] = port;

const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
/* harmony export (immutable) */ __webpack_exports__["d"] = host;


const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
/* harmony export (immutable) */ __webpack_exports__["c"] = databaseUrl;


const mongoDBURL = 'mongodb://localhost/namduoc';
/* harmony export (immutable) */ __webpack_exports__["b"] = mongoDBURL;


const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};
/* unused harmony export analytics */


const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};
/* harmony export (immutable) */ __webpack_exports__["e"] = auth;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */
const SET_SETTING = 'SET_SETTING';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_SETTING;

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_RUNTIME_VARIABLE;


const SET_DATA = 'SET_DATA';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_DATA;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(177);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(178);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(176);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(20);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* databaseUrl */], {
  define: {
    freezeTableName: true
  }
});

/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/ImageSelect/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(203);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

class ImageSelect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16, __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: this
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          },
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 186
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.props.handleSelect(el),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                  },
                  __self: this
                })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5', __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 196
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                },
                __self: this
              })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/ImageUpload/index.js';




const Dragger = __WEBPACK_IMPORTED_MODULE_1_antd__["Upload"].Dragger;

class ImageUpload extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      uploadArea: false,
      visible: false,
      selectedImage: {}
    };
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.props.handleUpload(info.file.response);
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      {
        name: 'image',
        multiple: this.props.isMultiple,
        showUploadList: false,
        action: '/upload/image',
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-drag-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'inbox', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        },
        'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-hint', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/CKEditor/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global CKEDITOR */





class CKEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { className: 'padding-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            id: 'addImage',
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('editor'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, { handleWidth: true, handleHeight: true, onResize: (w, h) => {
              let diff = h - this.state.oldEditorSize;
              if (this.state.isEndEditor && diff > 0) {
                var y = $(window).scrollTop();
                $(window).scrollTop(y + diff);
              }
              this.setState({
                oldEditorSize: h
              });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'toolbarLocation', __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: this.elementName, defaultValue: this.props.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, { onChange: isVisible => {
              this.setState({
                isEndEditor: !isVisible
              });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
            {
              style: { top: 30 },
              width: '90%',
              title: 'Basic Modal', visible: this.state.modalSelectImage,
              onOk: this.handleOk, onCancel: this.handleCancel,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img), __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            })
          )
        )
      )
    );
  }

  componentDidMount() {
    let configuration = {
      // removePlugins : 'magicline',
      extraPlugins: 'autogrow,image2,sharedspace,colorbutton,justify,font',
      uploadUrl: '/upload/imageCKEditor',
      disallowedContent: 'img{width,height}',
      sharedSpaces: {
        top: 'toolbarLocation'
      }
    };
    this.editor = CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));

    CKEDITOR.on('instanceReady', function (ev) {
      ev.editor.focus();
    });
    $("#toolbarLocation").sticky({ topSpacing: 0 });

    this.editor.addCommand("mySimpleCommand", { // create named command
      exec: function (edt) {
        $("#addImage").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/Tags/index.js';




class EditableTagGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag.slug !== removedTag);
      this.setState({ tags });
      this.props.handleChange(tags || []);
    };

    this.showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    this.handleInputChange = e => {
      this.setState({ inputValue: e.target.value });
    };

    this.handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && indexByField(tags, 'slug', __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }))) {
        tags = [...tags, { name: inputValue, slug: __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }) }];
      }
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ''
      });
      this.props.handleChange(tags || []);
    };

    this.saveInputRef = input => this.input = input;

    this.state = {
      tags: this.props.defaultValue || [],
      inputVisible: false,
      inputValue: ''
    };
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      },
      tags.map((tag, index) => {
        const isLongTag = tag.name.length > 20;
        const tagElem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tag"],
          { key: index, closable: true, afterClose: () => this.handleClose(tag), __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name
        );
        return isLongTag ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"],
          { title: tag.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          tagElem
        ) : tagElem;
      }),
      inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        ref: this.saveInputRef,
        type: 'text', size: 'small',
        style: { width: 78 },
        value: inputValue,
        onChange: this.handleInputChange,
        onBlur: this.handleInputConfirm,
        onPressEnter: this.handleInputConfirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }),
      !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { size: 'small', type: 'dashed', onClick: this.showInput, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        },
        '+ New Tag'
      )
    );
  }
}

function indexByField(list = [], fieldName, value) {
  let lenth = list.length;
  for (let i = 0; i < lenth; i++) {
    if (list[i][fieldName] === value) {
      return i;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (EditableTagGroup);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(173);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(35);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(211);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, _en_US2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _en_US4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync(...args);
}

/* harmony default export */ __webpack_exports__["a"] = ({ sync });


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: String,
  slug: { type: String, required: true, unique: true, index: true },
  title: String,
  public: { type: Boolean, default: false },
  coverUrl: String,
  description: String,
  body: String,
  view: { type: Number, default: 0 },
  tags: [Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Post', schema);

module.exports = model;

// get ( news )

module.exports.getNews = (root, { page }) => {
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop'];

  return new Promise((resolve, reject) => {

    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOnePost = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    public: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    tags: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6);

var schema = new mongoose.Schema({
  id: { type: String },
  ssr: { type: Boolean, default: true },
  css: { type: String, default: '' },
  adminId: { type: String, default: '100004231235930' },
  emailAdmin: { type: String, default: 'luanlv2591@gmail.com' },
  scriptTop: { type: String, default: '' },
  scriptBottom: { type: String, default: '' }
}, {
  collection: 'setting'
});

let model = mongoose.model('Setting', schema);

module.exports = model;

module.exports.getSetting = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.update = (root, { ssr }) => {
  let query = {};
  if (ssr !== undefined) query.ssr = ssr;
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate({ id: 'setting' }, { $set: query }, { returnNewDocument: true, new: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Setting',
  description: 'Setting object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    ssr: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    css: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptTop: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    adminId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    emailAdmin: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptBottom: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  })
}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(165);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("gm");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_App__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Html__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_passport__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_models__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_schema__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_setting__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/server.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










// import UniversalRouter from 'universal-router';










 // eslint-disable-line import/no-unresolved





const session = __webpack_require__(185);
const MongoStore = __webpack_require__(180)(session);
var routeCache = __webpack_require__(206);

//mongoose

__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.Promise = __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a;
connect();
const Setting = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.model('Setting');
// var User =  mongoose.model('User', require('./data/models/user/userSchema'))
//end


const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------

var jsonParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/assets', (req, res) => {
  res.sendStatus(400);
});

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(session({
  cookie: { maxAge: 24 * 3600 * 1000 * 30 },
  resave: true,
  saveUninitialized: false,
  secret: 'luuVANluan',
  ttl: 7 * 24 * 60 * 60,
  store: new MongoStore({ mongooseConnection: __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection })
}));
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].initialize());
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].session());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
//
// Authentication
// -----------------------------------------------------------------------------

if (true) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(156));
app.use('/api', __webpack_require__(154));
app.use('/upload', __webpack_require__(158));
app.use('/auth', __webpack_require__(155));
//
// Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_4_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_16__data_schema__["a" /* default */],
  graphiql: true,
  rootValue: { request: req },
  pretty: true
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', routeCache.cacheSeconds(20), (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    // if(isAdmin){
    //   if(!req.user || !req.user.isAdmin){
    //     return res.redirect('/login')
    //   }
    // }
    try {
      let setting = yield Setting.findOne({});
      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__store_configureStore__["a" /* default */])({
        data: {
          info: {
            needUpdate: false,
            value: '{}'
          },
          post: {
            needUpdate: true,
            value: {}
          },
          foodNews: {
            needUpdate: true,
            value: {}
          },
          news: {
            needUpdate: true,
            value: {}
          },
          newsInCategory: {
            needUpdate: true,
            value: {}
          },
          product: {
            needUpdate: true,
            value: {}
          },
          products: {
            needUpdate: true,
            value: []
          }
        },
        user: req.user || null
      }, {
        cookie: req.headers.cookie
      });
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__actions_setting__["a" /* setSetting */])({
        value: setting.ssr || true
      }));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));
      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__core_router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);

      if (data.disableSSR || !store.getState().setting.ssr) {
        data.children = '';
      } else {
        data.children = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__components_App__["a" /* default */],
          { context: context, __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: _this
          },
          route.component
        ));
      }

      data.styles = [{ id: 'css', cssText: [...css].join('') }];

      data.scripts = [__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk].js);
      }
      let version = 6;

      if (isAdmin) {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin, __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: _this
        })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin, scriptTop: setting.scriptTop || '', scriptBottom: setting.scriptBottom || '', css: setting.css || '', __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: _this
        })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      }
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_8_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
__WEBPACK_IMPORTED_MODULE_15__data_models__["a" /* default */].sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */], () => {
    console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */]}/`);
  });
});
/* eslint-enable no-console */

function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } }, promiseLibrary: __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a };
  return __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_23__config__["b" /* mongoDBURL */], options).connection;
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(34);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(46);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(174);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(34);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(35);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(54);

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('en');
exports["default"] = {
    locale: 'en',
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Calendar: _en_US8["default"],
    Table: {
        filterTitle: 'Filter Menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No Data',
        selectAll: 'Select All',
        selectInvert: 'Select Invert'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = setSetting;
/* eslint-disable import/prefer-default-export */



function setSetting({ value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  componentDidMount() {}

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Html.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'vi', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/ico.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'ico.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:locale', content: 'vi_VN', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:app_id', content: '123093138237586', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:admins', content: '100004231235930', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:admins', content: '100008346038178', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }),
        seo && seo.og_title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: seo.og_title, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'C\u01A1 s\u1EDF chuy\xEAn s\u1EA3n xu\u1EA5t v\xE0 cung c\u1EA5p \u0111\u1EB7c s\u1EA3n H\xE0 N\u1ED9i - C\u1ED1m M\u1EC5 Tr\xEC, Ch\u1EA3 C\u1ED1m, C\u1ED1m Kh\xF4 . \u0110\u1ECBa ch\u1EC9 b\xE1n c\u1ED1m M\u1EC5 Tr\xEC uy t\xEDn, ch\u1EA5t l\u01B0\u1EE3ng, gi\xE1 c\u1EA3 h\u1EE3p l\xFD', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }),
        seo && seo.url ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'http://comhoavang.com' + seo.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'http://comhoavang.com', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }),
        seo && seo.og_image ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'http://comhoavang.com' + seo.og_image, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'http://comhoavang.com/image/705cP8xYVH-083610_c1mh.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css', async: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css', async: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css', async: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', type: 'text/css', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', rel: 'stylesheet', type: 'text/css', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: "/assets/styles/style.min.css?v=" + v, rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/app.css?v=" + v, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css }, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptTop }, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          dangerouslySetInnerHTML: { __html: `head.load("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")` + `.js("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" )` + `.js("/assets/js/jquery.ui.datepicker-vi-VN.js?v=${v}")` + `.js("/assets/js/jquery.easing.1.3.js?v=${v}")` + `.js("/assets/js/jquery.mb.browser.min.js?v=${v}")` + `.js("/assets/js/jquery.textheight.js?v=${v}")` + `.js("/assets/js/hoverIntent.js?v=${v}")` + `.js("/assets/js/imagesloaded.pkgd.min.js?v=${v}")` + `.js("/assets/js/bootstrap.min.js?v=${v}")` + `.js("/assets/js/jquery.uniform.min.js?v=${v}")` + `.js("/assets/js/isotope.pkgd.min.js")` + `.js("/assets/js/slick.min.js")` + `.js("/assets/js/jquery.panel.mobile.js?v=${v}")` + `.js("/assets/js/jquery.main.js?v=${v}")` + `.js("${scripts[0]}?v=${v}")` + `.js("${scripts[1]}?v=${v}")` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js', async: 'async', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptBottom }, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/HtmlAdmin.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children, v } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'unsafe-url', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'no-referrer-when-downgrade', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin-when-cross-origin', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/ico.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'ico.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/lib/domenu/jquery.domenu-0.100.77.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/ckeditor/ckeditor.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/domenu/jquery.domenu-0.100.77.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/admin.css?v=" + v, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script + '?v=' + v, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }))
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main.js';


class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const first_foodNews = this.props.data.foodNews.value.data[0];
    const foodNews = this.props.data.foodNews.value.data.slice(1, 4);
    const news = this.props.data.news.value.data.slice(0, 3);
    const products = this.props.data.products.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'title text-uppercase', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        'Nam D\u01B0\u1EE3c Qu\xE2n y'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section line-bottom pro-site', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'product-tb pro-tb row', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          },
          products.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-xs-4 element-item', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-box', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-content', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'product-name', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        },
                        __self: this
                      },
                      el.name
                    )
                  )
                )
              )
            );
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'head lineh', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          },
          'Tin t\u1EE9c'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list', __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/su-kien', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            },
            'S\u1EF1 ki\u1EC7n'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/tin-tuc-tong-hop', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            },
            'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'isotopelist', className: 'section-tb row mobile100',
            style: { position: 'relative', height: '305.25px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          },
          news.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-lg-4 col-md-6 col-sm-4 col-xs-6  element-item', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'box-news', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { className: 'section-img',
                    to: '/bai-viet/' + el.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                    src: el.coverUrl.replace("\/image", "\/image\/small"),
                    alt: el.title,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'section-content', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'section-name', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/bai-viet/' + el.slug, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        },
                        __self: this
                      },
                      el.title
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'description', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                      },
                      __self: this
                    },
                    el.description.slice(0, 50),
                    ' ...'
                  )
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'more-all', __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/tin-tuc', __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                },
                __self: this
              },
              'Xem t\u1EA5t c\u1EA3'
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main2.js';




class Slider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const post = this.props.post;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sliderBig bgm-2 slick-initialized slick-slider', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slide slick-slide', 'data-slick-index': 0, 'aria-hidden': 'true', style: { width: '100%' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-big', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + post.slug, className: 'news-img', style: { margin: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: post.coverUrl.replace("\/image", "\/image\/small"), alt: post.title, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: "/bai-viet/" + post.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  post.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                post.description.slice(0, 200),
                ' ...'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'more-details', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { className: 'text-uppercase', to: '/bai-viet/' + post.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: this
                  },
                  'Xem chi ti\u1EBFt'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'slick-dots', style: { display: 'block' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: true, 'aria-hidden': 'true', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            '1'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'true', className: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            '2'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'false', className: 'slick-active', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            '3'
          )
        )
      )
    );
  }
}

class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (this.props.posts.data.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head lineh', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title-2', style: { lineHeight: 37 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            'M\xF3n ngon'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'head-list', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/mon-ngon-tu-com", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              },
              'M\xF3n ngon t\u1EEB c\u1ED1m'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/cach-lam-mon-ngon-tai-nha", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slider-wrap', __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Slider, { post: firstPost, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1', __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          posts.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'news-lbox', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + el.slug,
                  className: 'news-img', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"),
                  alt: el.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'news-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { className: 'news-name', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    },
                    el.title
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'description', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  },
                  el.description
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '123093138237586', __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: 'http://comhoavang.com/mon-ngon', 'data-numposts': '5', __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          })
        )
      );
    }
  }
}



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main3.js';




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { page, totalPage, data } = this.props.news;
    const news = data;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'head lineh', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          'tin t\u1EE9c'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/danh-muc/su-kien', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            'S\u1EF1 ki\u1EC7n'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/danh-muc/tin-tuc-tong-hop', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'news-big line-bottom', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
          { to: '/bai-viet/' + news[0].slug, className: 'news-img', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: news[0].coverUrl.replace("\/image", "\/image\/small"), __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'news-content', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'news-name', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + news[0].slug, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              news[0].title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'description', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            news[0].description
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'more-details', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + news[0].slug, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              },
              'Xem chi ti\u1EBFt'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site', __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb row', style: { position: 'relative', height: '1656.63px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            news.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-xs-4 element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', style: { height: 80 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/bai-viet/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                          },
                          __self: this
                        },
                        el.title
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'description', style: { height: 60 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55
                        },
                        __self: this
                      },
                      el.description
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'pagerp', className: 'pager', __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_DataPager1', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'first', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              'First'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'prev', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              'Previous'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'current', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '1'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl01\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '2'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl02\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '3'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl03\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '4'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl04\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '5'
            ),
            '\xA0\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl05\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              '...'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'next', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl03$ctl00\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              'Next'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'last', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl04$ctl00\',\'\')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              'Last'
            ),
            '\xA0'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
        { appID: '123093138237586', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/tin-tuc", 'data-numposts': '5', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })
      )
    );
  }
}



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main4.js',
    _this = this;





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function onClick(event) {
  if (event.target.tagName === 'A' && isLeftClickEvent(event) && !isModifiedEvent(event) && event.target.host === window.location.host) {
    event.preventDefault();
    __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].push({
      pathname: event.target.pathname,
      search: event.target.search
    });
  }
}

const Main = ({ post }) => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'colContent', __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'headno', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'title text-uppercase', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: _this
          },
          mapSlugToName(post.category)
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrapper-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: _this
        },
        post.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: post.body },
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: _this
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_facebook___default.a,
      { appID: '123093138237586', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_facebook__["Comments"], { href: "http://comhoavang.com/bai-viet/" + post.slug, 'data-numposts': '5', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: _this
      })
    )
  );
};



function mapSlugToName(slug) {
  switch (slug) {
    case 'mon-ngon-tu-com':
      return 'Món ngon từ cốm';
      break;
    case 'cach-lam-mon-ngon-tai-nha':
      return 'Cách làm món ngon tại nhà';
      break;
    case 'su-kien':
      return 'Sự kiện';
      break;
    case 'tin-tuc-tong-hop':
      return 'Tin tức tổng hợp';
      break;
    default:
      return '';
  }
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main5.js';




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (this.props.posts.data.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'title text-uppercase', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              this.props.title
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'news-big line-bottom mb12', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: "/bai-viet/" + firstPost.slug, className: 'news-img', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: firstPost.coverUrl.replace("\/image", "\/image\/small"),
              alt: firstPost.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-content', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { className: 'news-name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: "/bai-viet/" + firstPost.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                },
                firstPost.title
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'description', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              firstPost.description.slice(0, 50),
              ' ...'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'more-details', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + firstPost.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                'Xem chi ti\u1EBFt'
              )
            )
          )
        ),
        posts.map((el, index) => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index, className: 'news-lbox', __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              {
                to: '/bai-viet/' + el.slug,
                className: 'news-img', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                src: el.coverUrl.replace("\/image", "\/image\/small"),
                alt: el.title, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  {
                    to: '/bai-viet/' + el.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    },
                    __self: this
                  },
                  el.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                el.description
              )
            )
          );
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '123093138237586', __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/danh-muc/" + firstPost.category, 'data-numposts': '5', __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          })
        )
      );
    }
  }
}



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main6.js';




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (!this.props.product) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        'Loading...'
      );
    } else {
      const product = this.props.product;
      const products = this.props.products || [];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-details', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'details-content', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              product.name
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-text detail-text', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-product', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-img', style: { paddingRight: 5 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: product.coverUrl, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-content details-content2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'title-2', style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                'Th\xF4ng tin s\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'price-product', style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'em',
                  { style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    },
                    __self: this
                  },
                  numberWithCommas(product.price),
                  ' \u0111/kg'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-ship', style: { textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'centerText', style: { display: 'inline-block', paddingRight: 5 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  'V\u1EADn chuy\u1EC3n'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { display: 'inline-block', borderLeft: '1px solid #ddd', paddingLeft: 5 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      },
                      __self: this
                    },
                    '<20km : 25k/đơn'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    '>20km : 25k/kg'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrap-button', style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-w230 w258', style: { width: 250, float: 'none', textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'box-in', style: { margin: '0 auto' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: "/lien-he-dat-hang?sp=" + product.slug, className: 'button-btn btn-b corner text-center blink_me2', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        },
                        __self: this
                      },
                      '\u0110\u1EB7t h\xE0ng ngay!'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-w230 w298', style: { width: 250, float: 'none' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'box-in', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { href: 'tel:0973318868', className: 'button-btn phone corner blink_me', style: { fontSize: 18, fontWeight: 'bold' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        },
                        __self: this
                      },
                      'T\u01B0 v\u1EA5n: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                          },
                          __self: this
                        },
                        '097 331 8868'
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrapper-text', style: { marginTop: 20 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: product.body }, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno headpo', __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title', __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            'S\u1EA3n ph\u1EA9m li\xEAn quan'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section prom', __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row', __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            },
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-xs-4 element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 83
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                          },
                          __self: this
                        },
                        el.name
                      )
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '123093138237586', __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/san-pham/" + product.slug, 'data-numposts': '5', __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          })
        )
      );
    }
  }
}



function numberWithCommas(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main7.js';




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (this.props.products.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        'Loading...'
      );
    } else {
      const products = this.props.products;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'bannerSub', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'slider-wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-la head-pro', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title text-uppercase', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            's\u1EA3n ph\u1EA9m'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb row isotopelist listfull', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-xs-12 element-item', key: index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                          },
                          __self: this
                        },
                        el.name
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'description', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      },
                      el.description,
                      ' ...'
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '123093138237586', __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/san-pham", 'data-numposts': '5', __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          })
        )
      );
    }
  }
}



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(20);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */






/**
 * Sign in with Facebook.
 */
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* auth */].facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* auth */].facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  const fooBar = (() => {
    var _ref = _asyncToGenerator(function* () {
      if (req.user) {
        const userLogin = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */].findOne({
          attributes: ['name', 'key'],
          where: { name: loginName, key: profile.id }
        });
        if (userLogin) {
          // There is already a Facebook account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
            id: req.user.id,
            email: profile._json.email,
            logins: [{ name: loginName, key: profile.id }],
            claims: [{ type: claimType, value: profile.id }],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
            }
          }, {
            include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
          });
          done(null, {
            id: user.id,
            email: user.email
          });
        }
      } else {
        const users = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findAll({
          attributes: ['id', 'email'],
          where: { '$logins.name$': loginName, '$logins.key$': profile.id },
          include: [{
            attributes: ['name', 'key'],
            model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */],
            as: 'logins',
            required: true
          }]
        });
        if (users.length) {
          done(null, users[0]);
        } else {
          let user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Facebook manually from Account Settings.
            done(null);
          } else {
            user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
              email: profile._json.email,
              emailConfirmed: true,
              logins: [{ name: loginName, key: profile.id }],
              claims: [{ type: claimType, value: accessToken }],
              profile: {
                displayName: profile.displayName,
                gender: profile._json.gender,
                picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
              }
            }, {
              include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
            });
            done(null, {
              id: user.id,
              email: user.email
            });
          }
        }
      }
    });

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  })();

  fooBar().catch(done);
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(141);

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(25);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true }
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }

}, {

  indexes: [{ fields: ['email'] }]

});

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(25);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(25);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(25);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(6);
let autoIncrement = __webpack_require__(194);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  listImage: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      num: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      time: {
        type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
      },
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getListImageByTime
  }

});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6);

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  type: String,
  fileSize: { type: Number, default: 0 },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  userUpload: String,
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Image', schema);

module.exports = model;

module.exports.getListImageByTime = (root, { num, time, filter }) => {
  if (!time) time = Date.now();
  let query = { created_at: { $lt: time } };
  if (filter) query.name = { $regex: new RegExp(filter, "ig") };
  console.log(query);
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).limit(num).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Image',
  description: 'Image object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    type: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    fileSize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    dimensions: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'dimensions',
        fields: () => ({
          width: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] },
          height: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] }
        })
      })
    },
    userUpload: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  info: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.info
  }

});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(6);
var uniqueValidator = __webpack_require__(196);
var crypto = __webpack_require__(182);

var Schema = new mongoose.Schema({
  menu: { type: mongoose.Schema.Types.Mixed },
  fanpage: { type: mongoose.Schema.Types.Mixed },
  phone: { type: mongoose.Schema.Types.Mixed },
  diachi: { type: mongoose.Schema.Types.Mixed },
  thanhtoan: { type: mongoose.Schema.Types.Mixed }
}, { collection: 'info' });

// Schema.plugin(autoIncrement.plugin, 'Place');

Schema.plugin(uniqueValidator, { message: 'is already taken.' });

let model = mongoose.model('Info', Schema);

module.exports = model;

module.exports.info = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err || !res[0] ? reject(err) : resolve(res[0]);
    });
  });
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_type_json__);



// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Info',
  description: 'Info object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    key: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    menu: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    fanpage: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    phone: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    diachi: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    thanhtoan: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  })
}));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOrders: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOrders
  }
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  product: { type: String, default: '' },
  quantity: { type: String, default: '' },
  done: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Order', schema);

module.exports = model;

// get ( product )


module.exports.getOrders = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Order',
  description: 'Order object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    phone: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    address: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    product: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    quantity: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    done: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_type_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  newPost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],

    args: {
      category: {
        name: 'category',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      slug: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      title: {
        name: 'title',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      coverUrl: {
        name: 'coverUrl',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      description: {
        name: 'description',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      body: {
        name: 'body',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      tags: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default.a)
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.newPost
  }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getNews: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getNews',
      description: 'getNews object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getNews
  },
  getFoodNews: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getFoodNews',
      description: 'getFoodNews object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getFoodNews
  },
  getOneNews: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getOnePost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getNewsInCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getNewsInCategory',
      description: 'getNewsInCategory object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getNewsInCategory
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneProduct: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneProduct
  },
  getProducts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProducts
  }
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  // category: String,
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  // public: {type: Boolean, default: false},
  coverUrl: String,
  price: Number,
  body: String,
  description: String,
  view: { type: Number, default: 0 },
  saleOff: {
    type: { type: Number },
    value: { type: Number }
  },
  // tags:[Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( product )


module.exports.getOneProduct = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProducts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    price: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    saleOff: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  seo: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      url: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getByUrl
  },
  allSeo: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllSeo
  }
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  url: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  og_title: { type: String, default: '' },
  og_image: { type: String, default: '' },
  og_description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Seo', schema);

module.exports = model;

// get ( product )

module.exports.getByUrl = (root, { url }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ url: url }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllSeo = (root, { filter }) => {
  let query = {};
  if (filter) query.url = { $regex: new RegExp(filter, "ig") };
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Seo',
  description: 'Seo object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    url: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_image: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  update: {
    type: __WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */],
    args: {
      ssr: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.update
  }
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(6),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(195);
let autoIncrement = __webpack_require__(74);
var bcrypt = __webpack_require__(179);

let UserSchema = new Schema({
  name: String,
  username: { type: String, default: 'abc@gmail.com' },
  uid: String,
  provider: String,
  accessToken: String,
  isAdmin: { type: Boolean, default: false },
  mustConfirmEmail: { type: Boolean, default: false },
  password: String,
  createAt: { type: Date, default: Date.now }
});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User');

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByEmail = function (username, callback) {
  User.find({ username: username }, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, callback);
    });
  });
};

module.exports.changePassword = function (email, password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      console.log(hash);
      User.update({ username: email }, { $set: { password: hash } }, callback);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    }
  })
}));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(99);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// React.js News Feed (RSS)
const url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
        lastFetchTime = new Date();
        lastFetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(url).then(response => response.json()).then(data => {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        }).finally(() => {
          lastFetchTask = null;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (news);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_news__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_image_queries__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_queries__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_queries__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_queries__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_order_queries__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_seo_queries__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_info_queries__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_setting_mutations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_post_mutations__ = __webpack_require__(84);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// import me from './queries/me';










// mutation



let { listImage } = __WEBPACK_IMPORTED_MODULE_2__models_image_queries__["a" /* default */];
let { users } = __WEBPACK_IMPORTED_MODULE_5__models_user_queries__["a" /* default */];
let { setting } = __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__["a" /* default */];
let { info } = __WEBPACK_IMPORTED_MODULE_9__models_info_queries__["a" /* default */];
let { getOrders } = __WEBPACK_IMPORTED_MODULE_7__models_order_queries__["a" /* default */];
let { getNews, getOneNews, getFoodNews, getOnePost, getNewsInCategory } = __WEBPACK_IMPORTED_MODULE_3__models_post_queries__["a" /* default */];
let { getOneProduct, getProducts } = __WEBPACK_IMPORTED_MODULE_4__models_product_queries__["a" /* default */];
let { seo, allSeo } = __WEBPACK_IMPORTED_MODULE_8__models_seo_queries__["a" /* default */];

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      setting,
      news: __WEBPACK_IMPORTED_MODULE_1__queries_news__["a" /* default */],
      listImage,
      users,
      getNews,
      getOneNews,
      getFoodNews,
      getOnePost,
      getNewsInCategory,
      getOneProduct,
      getProducts,
      getOrders,
      seo,
      allSeo,
      info
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: {
      // addUser: userMutations.addUser,
      // updateUser: userMutations.updateUser
      updateSetting: __WEBPACK_IMPORTED_MODULE_10__models_setting_mutations__["a" /* default */].update,
      newPost: __WEBPACK_IMPORTED_MODULE_11__models_post_mutations__["a" /* default */].newPost
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    link: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    author: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    pubDate: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    content: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (NewsItemType);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      const data = action.payload.value;
      return _extends({}, state, {
        info: _extends({}, state.info, {
          value: data.info || {}
        }),
        post: _extends({}, state.post, {
          value: data.getOnePost || {}
        }),
        news: _extends({}, state.news, {
          value: data.getNews || state.news.value
        }),
        foodNews: _extends({}, state.news, {
          value: data.getFoodNews || state.foodNews.value
        }),
        newsInCategory: _extends({}, state.newsInCategory, {
          value: data.getNewsInCategory || state.news.value
        }),
        product: _extends({}, state.product, {
          value: data.getOneProduct || {}
        }),
        products: _extends({}, state.products, {
          value: data.getProducts || []
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function setting(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */]:
      return _extends({}, state, {
        ['ssr']: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/App.js';


const { Header, Content, Footer, Sider } = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"];
const SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu;





class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.onCollapse = collapsed => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline'
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["LocaleProvider"],
      { locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Sider,
          {
            collapsible: true,
            breakpoint: 'lg',
            collapsedWidth: '0',
            collapsed: this.state.collapsed,
            onCollapse: this.onCollapse,
            width: '170',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'admin-topSlide', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              'ADMIN'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"],
            { theme: 'dark',
              mode: this.state.mode,
              selectedKeys: [this.props.name],
              defaultOpenKeys: ['sub0', 'sub1', 'sub2'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Dashboard', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      },
                      __self: this
                    },
                    'Dashboard'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Seo', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/seo/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: this
                    },
                    'SEO'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub0',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      },
                      __self: this
                    },
                    'S\u1EA3n ph\u1EA9m'
                  )
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=list', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=add', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub1',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    },
                    'M\xF3n ngon'
                  )
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'monngon1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/monngon?v=list', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    },
                    __self: this
                  },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'monngon2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/monngon?v=add', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    },
                    __self: this
                  },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub2',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      },
                      __self: this
                    },
                    'Tin t\u1EE9c'
                  )
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=list', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    },
                    __self: this
                  },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=add', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    },
                    __self: this
                  },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/library', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      },
                      __self: this
                    },
                    'Th\u01B0 vi\u1EC7n'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Setting', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/setting', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      },
                      __self: this
                    },
                    'C\xE0i \u0111\u1EB7t'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Logout', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/auth/logout', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 124
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                      },
                      __self: this
                    },
                    '\u0110\u0103ng xu\u1EA5t'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { style: { height: 47, background: 'white', padding: 0 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Content,
            { style: { margin: '0 5px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"],
              { style: { margin: '12px 0' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                  },
                  __self: this
                },
                'Admin'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                },
                this.state.name
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { background: '#fff', minHeight: 500 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                },
                __self: this
              },
              this.props.children
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Footer,
            { style: { textAlign: 'center' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            },
            'Admin Page \xA9201 Created by L\u01B0u V\u0103n Lu\u1EADn'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/Components/ImageEditor/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







class ImageEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSave = data => {
      let that = this;
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      const rect = this.editor.getCroppingRect();
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/upload/imageEditor', {
        override: this.state.override,
        name: this.state.name,
        slug: this.state.slug,
        img: img
      }).then(function (res) {
        that.props.handleOk();
      }).catch(function (err) {
        console.log(err);
      });
    };

    this.handleScale = value => {
      const scale = value;
      this.setState({ scale });
    };

    this.rotateLeft = e => {
      e.preventDefault();

      this.setState({
        rotate: this.state.rotate - 90
      });
    };

    this.rotateRight = e => {
      e.preventDefault();
      this.setState({
        rotate: this.state.rotate + 90
      });
    };

    this.handleBorderRadius = e => {
      const borderRadius = parseInt(e.target.value);
      this.setState({ borderRadius });
    };

    this.handleXPosition = value => {
      const x = value;
      this.setState({ position: _extends({}, this.state.position, { x }) });
    };

    this.handleYPosition = value => {
      const y = value;
      this.setState({ position: _extends({}, this.state.position, { y }) });
    };

    this.handleWidth = e => {
      const width = parseInt(e.target.value);
      this.setState({ width });
    };

    this.handleHeight = e => {
      console.log(e);
      const height = parseInt(e.target.value);
      this.setState({ height });
    };

    this.setEditorRef = editor => {
      if (editor) this.editor = editor;
    };

    this.handlePositionChange = position => {
      console.log('Position set to', position);
      this.setState({ position });
    };

    this.state = {
      slug: this.props.slug || '',
      name: this.props.name || '',
      imageRef: this.props.imageRef || '',
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      rate: 'keepOld',
      borderRadius: 0,
      preview: null,
      width: this.props.width || 200,
      initWidth: this.props.width || 200,
      height: this.props.height || 200,
      initHeight: this.props.height || 200,
      override: true,
      background: 'transparent'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => {
      return _extends({}, prev, {
        imageRef: nextProps.imageRef || '',
        width: this.props.width || 200,
        initWidth: this.props.width || 200,
        height: this.props.height || 200,
        initHeight: this.props.height || 200
      });
    });
  }

  logCallback(e) {
    console.log('callback', e);
  }

  heightWithRate(width, height) {
    if (this.state.rate === 'keepOld') {
      return Math.round(width * this.state.initHeight / this.state.initWidth);
    } else if (this.state.rate === 'custom') {
      return height;
    } else if (this.state.rate === '4-3') {
      return Math.round(width * 3 / 4);
    } else if (this.state.rate === '1-1') {
      return width;
    } else if (this.state.rate === '3-4') {
      return Math.round(width * 4 / 3);
    }
    return height;
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12, style: { padding: 15 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default.a, {
            style: { background: this.state.background },
            ref: this.setEditorRef,
            scale: parseFloat(this.state.scale),
            width: this.state.width,
            height: this.heightWithRate(this.state.width, this.state.height),
            position: this.state.position,
            onPositionChange: this.handlePositionChange,
            rotate: parseFloat(this.state.rotate),
            borderRadius: this.state.borderRadius,
            onSave: this.handleSave,
            onLoadFailure: this.logCallback.bind(this, 'onLoadFailed'),
            onLoadSuccess: this.logCallback.bind(this, 'onLoadSuccess'),
            onImageReady: this.logCallback.bind(this, 'onImageReady'),
            onImageLoad: this.logCallback.bind(this, 'onImageLoad'),
            onDropFile: this.logCallback.bind(this, 'onDropFile'),
            image: this.state.imageRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            },
            'T\u1EF7 l\u1EC7 ph\xF3ng to (',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                },
                __self: this
              },
              this.state.scale,
              ')'
            ),
            ':'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Slider"], {
            name: 'scale',
            type: 'range',
            min: 1, max: 5,
            step: 0.01,
            onChange: this.handleScale,
            defaultValue: 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            },
            'N\u1EC1n (Kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u1EA3nh):'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.background, onChange: e => {
                this.setState(prev => {
                  return {
                    prev,
                    background: e.target.value
                  };
                });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'transparent', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 186
                },
                __self: this
              },
              'Trong su\u1ED1t'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'red', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 187
                },
                __self: this
              },
              'N\u1EC1n \u0111\u1ECF'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'blue', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 188
                },
                __self: this
              },
              'N\u1EC1n xanh da tr\u1EDDi'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'green', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 189
                },
                __self: this
              },
              'N\u1EC1n xanh l\xE1 c\xE2y'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            },
            'T\u1EF7 l\u1EC7:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.rate, onChange: value => {
                this.setState(prev => {
                  return {
                    prev,
                    rate: value.target.value
                  };
                });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'keepOld', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 203
                },
                __self: this
              },
              'Nh\u01B0 \u1EA3nh c\u0169'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'custom', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                },
                __self: this
              },
              'T\u1EF1 do'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '4-3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 205
                },
                __self: this
              },
              '4/3'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '1-1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                },
                __self: this
              },
              '1/1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '3-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 207
                },
                __self: this
              },
              '3/4'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              },
              __self: this
            },
            'Chi\u1EC1u d\xE0i:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            name: 'width',
            type: 'number',
            onChange: this.handleWidth,
            min: '50',
            max: '400',
            step: '10',
            value: this.state.width,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              },
              __self: this
            },
            'Chi\u1EC1u r\u1ED9ng:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            disabled: this.state.rate !== 'custom',
            name: 'height',
            type: 'number',
            onChange: this.handleHeight,
            min: '50',
            max: '400',
            step: '10',
            value: this.heightWithRate(this.state.width, this.state.height),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              },
              __self: this
            },
            'Quay \u1EA3nh:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 237
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateLeft, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 238
                },
                __self: this
              },
              'Quay tr\xE1i'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateRight, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 239
                },
                __self: this
              },
              'Quay ph\u1EA3i'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 242
              },
              __self: this
            },
            '\u0110\xE8 \u1EA3nh c\u0169: '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.override, onChange: value => {
              this.setState(prev => {
                return _extends({}, prev, {
                  override: !prev.override
                });
              });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"],
            { placement: 'right',
              onConfirm: this.handleSave,
              okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y', __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { type: 'primary', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 257
                },
                __self: this
              },
              this.state.override ? 'Thay thế ảnh cũ' : 'Thêm ảnh mới'
            )
          )
        )
      )
    );
    console.log(parseFloat(this.state.scale));
  }
}

class ImageWithRect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.setCanvas = this.setCanvas.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  setCanvas(canvas) {
    if (canvas) this.canvas = canvas;
  }

  handleImageLoad() {
    const ctx = this.canvas.getContext('2d');
    const { rect, width, height } = this.props;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'red';

    if (rect && (rect.width > 1 || rect.height > 1)) {
      ctx.drawImage(this.imgElement, Math.round(-rect.x * (width / rect.width)), Math.round(-rect.y * (height / rect.height)), Math.round(width / rect.width), Math.round(height / rect.height));

      if (rect) {
        ctx.strokeRect(1, 1, Math.round(width) - 2, Math.round(height) - 2);
      }
    } else {
      ctx.drawImage(this.imgElement, 0, 0, width, height);

      if (rect) {
        ctx.strokeRect(Math.round(rect.x * width) + 0.5, Math.round(rect.y * height) + 0.5, Math.round(rect.width * width), Math.round(rect.height * height));
      }
    }
  }

  redraw() {
    const img = new Image();

    img.src = this.props.image;
    img.onload = this.handleImageLoad;
    this.imgElement = img;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
      ref: this.setCanvas,
      style: this.props.style,
      width: this.props.width,
      height: this.props.height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageEditor);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/dashboard/Admin.js',
    _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders || []
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Table"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Thead"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tr"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                'Th\u1EDDi gian \u0111\u1EB7t h\xE0ng'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                'T\xEAn'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                'S\u1ED1 l\u01B0\u1EE3ng (kg)'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                'S\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                },
                '\u0110\u1ECBa ch\u1EC9'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tbody"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            this.props.orders.map((el, key) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tr"],
                { key: key,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { style: { color: 'blue' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.created_at).format('LT')
                    ),
                    ', ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.created_at).format('L')
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    el.name
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      },
                      __self: this
                    },
                    mobilecheck() && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { href: "tel:" + el.phone, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'phone', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                          },
                          __self: this
                        }),
                        el.phone
                      )
                    ),
                    !mobilecheck() && el.phone
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    el.quantity
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      },
                      __self: this
                    },
                    mapProduct(el.product)
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      },
                      __self: this
                    },
                    el.address
                  )
                )
              );
            })
          )
        )
      )
    );
  }
}

const columns = [{
  title: 'Thời gian đặt hàng',
  dataIndex: 'created_at',
  key: 'created_at',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { style: { color: 'blue' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_3_moment___default()(text).format('LT')
    ),
    ', ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'b',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_3_moment___default()(text).format('L')
    )
  )
}, {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: _this
    },
    text
  )
}, {
  title: 'Số điện thoại',
  dataIndex: 'phone',
  key: 'phone',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: "tel:" + text, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: _this
        },
        'G\u1ECDi \u0111i\u1EC7n'
      )
    ),
    ' ',
    text
  )
}, {
  title: 'Số lượng (kg)',
  dataIndex: 'quantity',
  key: 'quantity',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: _this
    },
    text
  )
}, {
  title: 'Sản phẩm',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: _this
    },
    mapProduct(record.product)
  )
}, {
  title: 'Địa chỉ',
  dataIndex: 'address',
  key: 'address',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: _this
    },
    text
  )
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

var mobilecheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/dashboard/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { App, Dashboard } = yield __webpack_require__(13);

      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOrders{name, phone, address, product, quantity, done, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dashboard, { title: title, orders: data.getOrders, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/editor/Editor.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import {Tag, Input, Tooltip, Button, DatePicker, Select} from 'antd';
// import ColorPic from '../Components/ColorPicker'
// import axios from 'axios';
var slug = __webpack_require__(207);
class EditorComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  componentDidMount() {}

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 800, margin: '10px auto' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditorComponent));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(108).default, __webpack_require__(112).default, __webpack_require__(127).default, __webpack_require__(114).default, __webpack_require__(129).default,
  // require('./editor').default,
  __webpack_require__(120).default, __webpack_require__(117).default, __webpack_require__(123).default, __webpack_require__(125).default],
  action({ store, next }) {
    return _asyncToGenerator(function* () {
      let user = store.getState().user;
      const route = yield next();
      // Provide default values for title, description etc.
      route.title = `${route.title || 'Amdmin Page'}`;
      return route;
    })();
  }

});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageEditor__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/library/Library.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(203);



if (false) {
  message.config({
    top: 20,
    duration: 2.5
  });
}

const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

const text = 'Đồng ý?';

class Library extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      editImage: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {},
      vImg: '?v=' + new Date().getTime(),
      imageRef: null
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
      imageRef: null
    });
  }
  handleOkEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  handleCancelEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16, __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: this
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 196
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 197
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                },
                __self: this
              },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 200
                },
                __self: this
              },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          },
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 209
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.showModal(el),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name + "?t=" + el.created_at, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                  },
                  __self: this
                })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5', __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 219
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 222
                },
                __self: this
              })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Modal"],
        { title: 'Basic Modal', visible: this.state.visible,
          onOk: e => this.handleOk(e),
          onCancel: e => this.handleCancel(e),
          width: '90%',
          maskClosable: true,
          className: 'img',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              },
              __self: this
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 243
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/" + this.state.selectedImage.name + this.state.vImg, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 245
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12,
              className: 'padding-5',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              },
              __self: this
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 253
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                  },
                  __self: this
                },
                'T\xEAn t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.name
            ),
            this.state.selectedImage.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 258
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  },
                  __self: this
                },
                'Lo\u1EA1i t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.type
            ),
            this.state.selectedImage.created_at && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 263
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  },
                  __self: this
                },
                '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:'
              ),
              ' ',
              this.state.selectedImage.created_at
            ),
            !!this.state.selectedImage.fileSize && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 269
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                  },
                  __self: this
                },
                'Dung l\u01B0\u1EE3ng t\u1EC7p:'
              ),
              ' ',
              this.state.selectedImage.fileSize,
              ' KB'
            ),
            this.state.selectedImage.dimensions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 275
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                  },
                  __self: this
                },
                'K\xEDch th\u01B0\u1EDBc:'
              ),
              ' ',
              this.state.selectedImage.dimensions.width,
              ' \xD7 ',
              this.state.selectedImage.dimensions.height
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                },
                __self: this
              },
              'Link :'
            ),
            ' ',
            this.state.copied ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'red' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                },
                __self: this
              },
              'Copied !"'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                },
                __self: this
              },
              "/image/" + this.state.selectedImage.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 283
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default.a,
                { text: "/image/" + this.state.selectedImage.name,
                  onCopy: () => {
                    this.setState({ copied: true });
                    setTimeout(() => {
                      this.setState({ copied: false });
                    }, 1000);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'primary', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 292
                    },
                    __self: this
                  },
                  'Copy link \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 295
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"],
                { placement: 'right', title: text,
                  onConfirm: () => {
                    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/image/min/' + this.state.selectedImage.name, {}).then(res => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 300
                          },
                          __self: this
                        },
                        '\u0110\xE3 gi\u1EA3m t\u1EEB ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'red' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 300
                            },
                            __self: this
                          },
                          Math.floor(res.data.oldSize).toLocaleString(),
                          ' kB'
                        ),
                        ' c\xF2n ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'blue' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 300
                            },
                            __self: this
                          },
                          Math.floor(res.data.newSize).toLocaleString(),
                          ' kB'
                        )
                      ));
                      this.setState(prev => {
                        return _extends({}, prev, {
                          vImg: '?v=' + new Date().getTime()
                        });
                      });
                    }).catch(err => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
                    });
                  },
                  okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  {
                    type: 'primary',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 313
                    },
                    __self: this
                  },
                  'Gi\u1EA3m ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 318
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                {
                  type: 'primary',
                  onClick: () => {
                    this.setState(prev => {
                      return _extends({}, prev, {
                        visible: false,
                        editImage: true,
                        imageRef: "/image/" + this.state.selectedImage.name + this.state.vImg
                      });
                    });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 319
                  },
                  __self: this
                },
                'Ch\u1EC9nh s\u1EEDa \u1EA3nh n\xE0y'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 333
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"],
                { placement: 'right', title: text,
                  onConfirm: () => {
                    console.log(' confirm');
                    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/image/delete', {
                      slug: this.state.selectedImage.slug,
                      name: this.state.selectedImage.name
                    }).then(res => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success('Xóa thành công');
                      let currentTime = new Date().toISOString();
                      this.setState(prev => {
                        return _extends({}, prev, {
                          time: currentTime,
                          editImage: false,
                          visible: false
                        });
                      });
                      this.fetchImage(40, currentTime);
                    }).catch(err => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
                    });
                  },
                  okText: '\u0110\u1ED3ng \xFD x\xF3a', cancelText: 'H\u1EE7y', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'danger', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 359
                    },
                    __self: this
                  },
                  'X\xF3a \u1EA3nh'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Modal"],
        { title: 'Ch\u1EC9nh s\u1EEDa \u1EA3nh', visible: this.state.editImage,
          onOk: e => this.handleOkEditImage(e),
          onCancel: e => this.handleCancelEditImage(e),
          style: { top: 0 },
          width: '100%',
          maskClosable: true,
          className: 'img',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          },
          __self: this
        },
        this.state.imageRef && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageEditor__["a" /* default */], {
          imageRef: this.state.imageRef,
          width: this.state.selectedImage.dimensions.width,
          height: this.state.selectedImage.dimensions.height,
          slug: this.state.selectedImage.slug,
          name: this.state.selectedImage.name,
          handleOk: () => {
            console.log('close modal !!');
            let currentTime = new Date().toISOString();
            this.setState(prev => {
              return _extends({}, prev, {
                time: currentTime,
                editImage: false,
                visible: false
              });
            });
            this.fetchImage(40, currentTime);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/library/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import moment from 'moment'

const title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action({ store }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["showLoading"])());
      const { App, Library } = yield __webpack_require__(13);
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["hideLoading"])());
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Library, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/menu/Menu.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(49);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Menu extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.updateMenu = () => {
      let menu = window.domenu.toJson();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/menu/new', { menu: menu }).then(res => {
        console.log(res.data);
      });
    };

    this.state = {
      setting: {}
    };
    this.updateMenu = this.updateMenu.bind(this);
    this.init();
  }

  init() {
    // const menu = await axios.get('/api/menu/get')
    // window.data = menu.data
    // console.log(window.data)

    return _asyncToGenerator(function* () {})();
  }

  componentDidMount() {
    return _asyncToGenerator(function* () {
      // console.log(JSON.stringify([]))
      // console.log(JSON.stringify(window.data))
      // console.log(window.data)
      const menu = yield __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/menu/get');
      console.log(menu.data);
      window.domenu = $('#domenu-0').domenu({
        maxDepth: 1,
        data: menu.data
      }).parseJson();
    })();
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'dd', id: 'domenu-0', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'dd-new-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          '+'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'dd-item-blueprint', __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'collapse', 'data-action': 'collapse', type: 'button', style: { display: 'none' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            '\u2013'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'expand', 'data-action': 'expand', type: 'button', style: { display: 'none' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            },
            '+'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd-handle dd3-handle', __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            },
            'Drag'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd3-content', __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'item-name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                },
                __self: this
              },
              '[item_name]'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-button-container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-add', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: this
                },
                '+'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-remove', 'data-confirm-class': 'item-remove-confirm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  },
                  __self: this
                },
                '\xD7'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-edit-box', style: { display: 'none' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'title', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'T\u1EF1a \u0111\u1EC1 menu!', 'data-default-value': 'T\u1EF1a \u0111\u1EC1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'url', id: 'url', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'Link web', 'data-default-value': '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'i',
                { className: 'end-edit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ol', { className: 'dd-list', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { type: 'primary',
          onClick: this.updateMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        },
        'C\u1EADp nh\u1EADp'
      )
    );
  }
}

Menu.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/menu/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Menu Builder';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menu',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { App, Menu } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(31);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/monngon/EditFoods.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneNews(slug: "' + slug + '"){category, coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneNews
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        },
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              },
              __self: this
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card', __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1', __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 168
                        },
                        __self: this
                      },
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 169
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 195
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 196
                        },
                        __self: this
                      },
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 197
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 215
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 216
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 216
                        },
                        __self: this
                      },
                      'Danh m\u1EE5c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Select"],
                    {
                      defaultValue: this.state.data.category,
                      style: { width: '100%' },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mon-ngon-tu-com', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 232
                        },
                        __self: this
                      },
                      'M\xF3n ngon t\u1EEB c\u1ED1m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'cach-lam-mon-ngon-tai-nha', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 233
                        },
                        __self: this
                      },
                      'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 236
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 237
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 237
                        },
                        __self: this
                      },
                      'Tags:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Tags__["a" /* default */], { defaultValue: this.state.data.tags,
                    handleChange: tags => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            tags: tags
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 238
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 252
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 253
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 253
                        },
                        __self: this
                      },
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 253
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 253
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 254
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 273
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 274
                      },
                      __self: this
                    },
                    'Public: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.data.public || false, onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            public: value
                          })
                        });
                      });
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 275
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 287
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 288
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 288
                        },
                        __self: this
                      },
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 289
                    },
                    __self: this
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover'),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 293
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 296
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover'),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 299
                    },
                    __self: this
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 303
                    },
                    __self: this
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2', __source: {
                fileName: _jsxFileName,
                lineNumber: 320
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 321
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 322
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 323
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 324
                    },
                    __self: this
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img), __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/monngon/ListFoods.js',
    _this2 = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getFoodNews(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })
    );
  }
  getFoodNews(page) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getFoodNews(page:' + page + ' ){page,totalPage,data{category, coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getFoodNews.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: _this2
    },
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Công khai',
  dataIndex: 'public',
  key: 'public',
  render: boolean => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: _this2
    },
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: _this2
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/monngon?v=edit&slug=" + record.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: _this2
      },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/monngon/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/monngon?v=list' };
      }
      const { App, EditFoods, ListFoods } = yield __webpack_require__(13);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListFoods, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this
          })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'add', isEdit: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: _this
          })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: _this
          })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/mongon?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(31);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/news/EditNews.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneNews(slug: "' + slug + '"){category, coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneNews
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        },
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateNews(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              },
              __self: this
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.addNews(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card', __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1', __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 168
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 169
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 169
                        },
                        __self: this
                      },
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 170
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 196
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 197
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 197
                        },
                        __self: this
                      },
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 198
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 216
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 217
                        },
                        __self: this
                      },
                      'Danh m\u1EE5c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Select"],
                    {
                      defaultValue: this.state.data.category,
                      style: { width: '100%' },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 218
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'su-kien', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 233
                        },
                        __self: this
                      },
                      'S\u1EF1 ki\u1EC7n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'tin-tuc-tong-hop', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 234
                        },
                        __self: this
                      },
                      'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 237
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 238
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 238
                        },
                        __self: this
                      },
                      'Tags:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_Tags__["a" /* default */], { defaultValue: this.state.data.tags,
                    handleChange: tags => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            tags: tags
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 239
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 253
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 254
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 254
                        },
                        __self: this
                      },
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 255
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 274
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 275
                      },
                      __self: this
                    },
                    'Public: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Switch"], { checked: this.state.data.public || false, onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            public: value
                          })
                        });
                      });
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 276
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 288
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 289
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 289
                        },
                        __self: this
                      },
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 290
                    },
                    __self: this
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover'),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 294
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 297
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover'),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 300
                    },
                    __self: this
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 303
                    },
                    __self: this
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2', __source: {
                fileName: _jsxFileName,
                lineNumber: 320
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 321
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 322
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 323
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 324
                    },
                    __self: this
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img), __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/news/ListNews.js',
    _this2 = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getNews(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })
    );
  }
  getNews(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getNews(page:' + page + ' ){page,totalPage,data{category, coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getNews)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getNews.page,
          totalPage: data.getNews.totalPage,
          data: data.getNews.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: _this2
    },
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Công khai',
  dataIndex: 'public',
  key: 'public',
  render: boolean => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: _this2
    },
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: _this2
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/news?v=edit&slug=" + record.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: _this2
      },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/news/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditNews, ListNews } = yield __webpack_require__(13);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListNews, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this
          })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: _this
          })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: _this
          })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(31);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/product/EditProduct.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneProduct(slug: "' + slug + '"){name, slug, price, coverUrl, description, saleOff, body, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneProduct
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addProduct(product) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/new', product).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
        pathname: '/admin/product',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateProduct(product) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/update', product).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        },
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateProduct(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              },
              __self: this
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            {
              size: 'large',
              type: 'primary',
              style: { float: 'right' },

              onClick: () => {
                this.addProduct(this.state.data);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card', __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1', __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 172
                        },
                        __self: this
                      },
                      'T\xEAn s\u1EA3n ph\u1EA9m:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'T\xEAn s\u1EA3n ph\u1EA9m',
                    defaultValue: this.state.data.name,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            name: value,
                            slug: newSlug()
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 173
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 199
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 200
                        },
                        __self: this
                      },
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 201
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 221
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 221
                        },
                        __self: this
                      },
                      'Gi\xE1 s\u1EA3n ph\u1EA9m:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 222
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["InputNumber"], {
                    defaultValue: this.state.data.price || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price: parseInt(value)
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 223
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 242
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 243
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 243
                        },
                        __self: this
                      },
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 243
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 243
                          },
                          __self: this
                        },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 244
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 264
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 265
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 265
                        },
                        __self: this
                      },
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 266
                    },
                    __self: this
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover'),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 270
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 273
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover'),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 276
                    },
                    __self: this
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 279
                    },
                    __self: this
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2', __source: {
                fileName: _jsxFileName,
                lineNumber: 296
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 297
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 299
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 300
                    },
                    __self: this
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img), __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          },
          __self: this
        })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/product/ListProduct.js',
    _this2 = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getProducts(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })
    );
  }
  getProducts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: "{getProducts{coverUrl, slug,name, price, body, view, saleOff, created_at}}"
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getProducts.page,
          totalPage: data.getProducts.totalPage,
          data: data.getProducts
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tên sản phẩm',
  dataIndex: 'name',
  key: 'name',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: _this2
    },
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Giá sản phẩm',
  dataIndex: 'price',
  key: 'price',
  render: price => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: _this2
    },
    price
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: _this2
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/product?v=edit&slug=" + record.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: _this2
      },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/product/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditProduct, ListProduct } = yield __webpack_require__(13);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListProduct, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this
          })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'add', isEdit: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: _this
          })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: _this
          })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/seo/View.js',
    _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleOkSEO = e => {
      if (this.state.new) {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/new', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Thêm thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/update', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Cập nhập thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      }
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.state = {
      selectImageType: '',
      showModalSelectImage: false,
      new: true,
      listSEO: this.props.listSEO || [],
      showModal: false,
      selectSEO: {
        description: '',
        og_description: ''
      },
      filter_text: ''
    };
    this.fetchAllSeo();
  }

  fetchAllSeo(filter = this.state.filter_text) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allSeo(filter:"' + filter + '"){url,title,description,og_title,og_image,og_description,created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          listSEO: data.allSeo
        });
      });
    })();
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          selectSEO: _extends({}, prevState.selectSEO, {
            og_image: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        selectSEO: _extends({}, prevState.selectSEO, {
          og_image: '/image/' + img.name
        })
      });
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            type: 'primary',
            style: { marginRight: 10 },
            onClick: () => {
              this.setState(prev => {
                return _extends({}, prev, {
                  new: true,
                  showModal: true,
                  selectSEO: {
                    description: '',
                    og_description: ''
                  }
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          },
          'Th\xEAm m\u1EDBi'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"].Search, {
          placeholder: 'T\xECm ki\u1EBFm',
          style: { width: 200 },
          onSearch: value => {
            this.setState(prev => {
              return _extends({}, prev, {
                filter_text: value
              });
            });
            this.fetchAllSeo(value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Table"], {
          columns: columns, rowKey: record => record.created_at, dataSource: this.state.listSEO,
          onRowClick: (record, index) => {
            console.log(record);
            this.setState(prev => {
              return _extends({}, prev, {
                new: false,
                showModal: true,
                selectSEO: record
              });
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          width: '90%',
          wrapClassName: 'vertical-center-modal',
          visible: this.state.showModal,
          cancelText: '\u0110\xF3ng',
          okText: this.state.new ? "Thêm mới" : "Cập nhập",
          onCancel: () => this.setState({ showModal: false }),
          onOk: () => this.handleOkSEO(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 217
                },
                __self: this
              },
              'URL: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'URL',
            value: this.state.selectSEO.url || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    url: value
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 238
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 238
                },
                __self: this
              },
              'T\u1EF1a \u0111\u1EC1: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'T\u1EF1a \u0111\u1EC1',
            value: this.state.selectSEO.title || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    title: value
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 259
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 259
                },
                __self: this
              },
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.description.length >= 140 && this.state.selectSEO.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  },
                  __self: this
                },
                this.state.selectSEO.description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  },
                  __self: this
                },
                this.state.selectSEO.description.length
              ),
              ' /150) :'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
            autosize: { minRows: 2, maxRows: 10 },
            value: this.state.selectSEO.description,
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    description: value
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 279
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                },
                __self: this
              },
              'T\u1EF1a \u0111\u1EC1 (OG): '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'T\u1EF1a \u0111\u1EC1 (OG)',
            value: this.state.selectSEO.og_title || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    og_title: value
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 300
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 300
                },
                __self: this
              },
              '\u1EA2nh \u0111\u1EA1i di\u1EC7n (OG):'
            )
          ),
          !this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__["a" /* default */], {
            isMultiple: false,
            handleUpload: img => this.handleCoverUpload(img),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }),
          this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { width: 180, height: 150 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 306
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
              {
                bordered: false, className: 'imgWr',
                onClick: () => this.showModalSelectImage('cover'),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 307
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.selectSEO.og_image, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 311
                },
                __self: this
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('cover'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 316
            },
            __self: this
          },
          'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
        ),
        this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            onClick: () => {
              this.setState(prevState => {
                return _extends({}, prevState, {
                  selectSEO: _extends({}, prevState.selectSEO, {
                    og_image: ''
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          },
          'X\xF3a \u1EA3nh '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16, marginTop: 16 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 336
                },
                __self: this
              },
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.og_description.length >= 140 && this.state.selectSEO.og_description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                  },
                  __self: this
                },
                this.state.selectSEO.og_description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                  },
                  __self: this
                },
                this.state.selectSEO.og_description.length
              ),
              ' /150) :'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
            autosize: { minRows: 2, maxRows: 10 },
            value: this.state.selectSEO.og_description,
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    og_description: value
                  })
                });
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 337
            },
            __self: this
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img), __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        })
      )
    );
  }
}

const columns = [{
  title: 'Link trang web',
  dataIndex: 'url',
  key: 'url',
  render: url => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: _this2
    },
    url
  )
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: title => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: _this2
    },
    title
  )
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/seo/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { App, Seo } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Seo, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/setting/Setting.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(49);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Setting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ setting{ssr, css, scriptTop, scriptBottom, adminId, emailAdmin} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        setting: data.setting
      });
    })();
  }

  toggleSSR() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.setState(function (prevState) {
        return _extends({}, prevState, {
          setting: _extends({}, prevState.setting, {
            ssr: !prevState.setting.ssr
          })
        });
      });
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: 'mutation { updateSetting(ssr: ' + !_this2.state.setting.ssr + ') { ssr } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (data.updateSetting) {
        __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Update successful');
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: data.updateSetting.ssr
            })
          });
        });
      } else {
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: !prevState.setting.ssr
            })
          });
        });
      }
    })();
  }

  updateSetting(setting) {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/setting/update', setting).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      },
      this.state.setting.ssr !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          },
          'SSR: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.setting.ssr, onChange: () => this.toggleSSR(), __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        })
      ),
      this.state.setting.adminId !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          },
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.adminId, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  adminId: value
                })
              });
            });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        })
      ),
      this.state.setting.emailAdmin !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.emailAdmin, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  emailAdmin: value
                })
              });
            });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'STYLESHEETS', key: '1', __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          },
          this.state.setting.css !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5', __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.css, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    css: value
                  })
                });
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript đầu trang', key: '2', __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          },
          this.state.setting.scriptTop !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5', __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptTop, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptTop: value
                  })
                });
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript cuối trang', key: '3', __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          },
          this.state.setting.scriptBottom !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5', __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptBottom, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptBottom: value
                  })
                });
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              },
              __self: this
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            size: 'large',
            type: 'primary',
            onClick: () => {
              this.updateSetting(this.state.setting);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          },
          'C\u1EADp nh\u1EADp'
        )
      )
    );
  }
}

Setting.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/setting/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { App, Setting } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/thongtin/ThongTin.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(49);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Menu extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.updateMenu = () => {
      let that = this;
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/thongtin', {
        fanpage: that.state.fanpage,
        phone: that.state.phone,
        diachi: that.state.diachi,
        thanhtoan: that.state.thanhtoan
      }).then(res => {
        console.log(res.data);
      });
    };

    this.state = {};
    this.updateMenu = this.updateMenu.bind(this);
    this.init();
  }

  init() {
    return _asyncToGenerator(function* () {})();
  }

  componentWillMount() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const thongtin = yield __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/thongtin/get');
      console.log('===phone===');
      console.log(thongtin.data);
      console.log(thongtin.data.phone);
      _this.setState({
        fanpage: thongtin.data.fanpage || '',
        phone: thongtin.data.phone || '',
        diachi: thongtin.data.diachi || '',
        thanhtoan: thongtin.data.thanhtoan || '',
        init: true
      });
    })();
  }

  componentDidMount() {
    return _asyncToGenerator(function* () {})();
  }

  render() {
    if (!this.state.init) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        },
        'Loading ...'
      );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          },
          'fanpage: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.fanpage, onChange: e => {
            let value = e.target.value;
            this.setState({ fanpage: value });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          },
          'Hotline: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.phone, onChange: e => {
            let value = e.target.value;
            this.setState({ phone: value });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          },
          '\u0110\u1ECBa ch\u1EC9: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.diachi, onChange: e => {
            let value = e.target.value;
            this.setState({ diachi: value });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          },
          'Thanh To\xE1n: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.thanhtoan, onChange: e => {
            let value = e.target.value;
            this.setState({ thanhtoan: value });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { type: 'primary',
          onClick: this.updateMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        },
        'C\u1EADp nh\u1EADp'
      )
    );
  }
}

Menu.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/thongtin/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Thông tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/thongtin',

  action({ query }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { App, ThongTin } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ThongTin, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this
          })
        )
      };
    })();
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/baiviet/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__["a" /* default */], { post: this.props.post, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/baiviet/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/bai-viet/:slug',
  action({ store, params, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var post;
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getOnePost(slug: "' + params.slug + '"){title,slug,body,category, description}}'
          }),
          credentials: 'include'
        });
        let { data } = yield resp.json();
        // if (!data || !data.getOnePost) throw new Error('Failed to load data.');
        if (!data || !data.getOnePost) {
          return { redirect: '/' };
        }
        seo = data.seo || {};
        store.dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */](data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }
      return {
        title: seo.title || store.getState().data.post.value.title,
        description: seo.description || store.getState().data.post.value.description,
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { post: store.getState().data.post.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Aside__ = __webpack_require__(14);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/cauhoithuonggap/Home.js',
    _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        phone: '',
        address: '',
        product: this.props.selectProduct || 'com-kho-hoa-vang',
        quantity: ''
      }
    };
    this.order = this.order.bind(this);
  }

  order() {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/order/new', this.state.data).then(res => {
      $('#myModal').modal({
        show: true
      });
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'colContent', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'headno', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h1',
                  { className: 'title text-uppercase', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    'C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'panel-group', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'panel', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { 'data-toggle': 'collapse', href: '#collapse1', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'panel-heading', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h2',
                          { className: 'panel-title', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 62
                            },
                            __self: this
                          },
                          'C\xE2u h\u1ECFi'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { id: 'collapse1', className: 'panel-collapse collapse', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'panel-body', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                          },
                          __self: this
                        },
                        '\u0110ang c\u1EADp nh\u1EADp'
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Aside__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Modal, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        })
      )
    );
  }
}

const Modal = () => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog', __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: _this
            },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: _this
            },
            'Modal Header'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: _this
            },
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                },
                __self: _this
              },
              '0973.318.868'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-footer', __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/san-pham', className: 'btn btn-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: _this
            },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: _this
            },
            '\u0110\xF3ng c\u1EEDa s\u1ED5'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/cauhoithuonggap/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/cau-hoi-thuong-gap',
  action({ store, query, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let seo = {};
      if (true) {
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}}'
          }),
          credentials: 'include'
        });

        const { data } = yield resp.json();
        seo = data.seo || {};
      }

      return {
        title: seo.title || 'Câu hỏi thuờng gặp',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhmuc/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__["a" /* default */], { posts: this.props.posts, title: this.props.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhmuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danh-muc/:slug',
  action({ store, params, query, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let page = query.p || 1;
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getNewsInCategory(page:' + page + ', slug: "' + params.slug + '" ){page,totalPage,data{title, category, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }
      return {
        title: seo.title || 'Danh mục: ' + mapSlugToName(params.slug),
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.newsInCategory.value, title: mapSlugToName(params.slug), __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          })
        )
      };
    })();
  }

});

function mapSlugToName(slug) {
  switch (slug) {
    case 'mon-ngon-tu-com':
      return 'Món ngon từ cốm';
      break;
    case 'cach-lam-mon-ngon-tai-nha':
      return 'Cách làm món ngon tại nhà';
      break;
    case 'su-kien':
      return 'Sự kiện';
      break;
    case 'tin-tuc-tong-hop':
      return 'Tin tức tổng hợp';
      break;
    default:
      return '';
  }
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(14);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhsachsanpham/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__["a" /* default */], { products: this.props.products, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhsachsanpham/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham',
  action({ store, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{ seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, price, slug, coverUrl, description, saleOff, body, created_at} }'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang danh sách sản phẩm',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { products: store.getState().data.products.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    if (true) {
      const { error } = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          error.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          error.message
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/home/Home.js';








class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'banner-top', className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'left col-md-3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/banner_left.jpg', alt: 'banner 1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'right col-md-9', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/banner_right.jpg', alt: 'banner 2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__["a" /* default */], { data: this.props.data, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], { data: this.props.data, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action({ store, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, phone }';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at}, getNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}}, getFoodNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}} }'
          }),
          credentials: 'include'
        });

        const { data } = yield resp.json();
        // console.log(data)
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          { data: store.getState().data, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(140).default, __webpack_require__(147).default, __webpack_require__(151).default, __webpack_require__(137).default,
  // require('./landingpage').default,
  __webpack_require__(143).default, __webpack_require__(133).default, __webpack_require__(135).default, __webpack_require__(153).default, __webpack_require__(131).default,
  // require('./contact').default,
  __webpack_require__(145).default,
  // require('./register').default,
  // require('./about').default,
  // require('./privacy').default,
  __webpack_require__(110).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(149).default],

  action({ next, store }) {
    return _asyncToGenerator(function* () {
      if (false) {
        window.numRendered = 0;
      }
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/lienhedathang/Home.js',
    _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        phone: '',
        address: '',
        product: this.props.selectProduct || 'com-kho-hoa-vang',
        quantity: ''
      }
    };
    this.order = this.order.bind(this);
  }

  order() {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/order/new', this.state.data).then(res => {
      $('#myModal').modal({
        show: true
      });
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-horizontal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'fieldset',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'legend',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    '\u0110\u1EB7t h\xE0ng'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_id', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        },
                        __self: this
                      },
                      'H\u1ECD V\xE0 T\xEAn:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_id', name: 'product_id', placeholder: 'H\u1ECD V\xE0 T\xEAn', className: 'form-control input-md', required: true, type: 'text',
                        defaultValue: this.state.data.name,
                        onChange: e => {
                          let value = e.target.value;
                          this.setState(prev => {
                            return _extends({}, prev, {
                              data: _extends({}, prev.data, {
                                name: value
                              })
                            });
                          });
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        },
                        __self: this
                      },
                      'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_name', name: 'product_name', placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i', className: 'form-control input-md', required: true, type: 'text',
                        defaultValue: this.state.data.phone,
                        onChange: e => {
                          let value = e.target.value;
                          this.setState(prev => {
                            return _extends({}, prev, {
                              data: _extends({}, prev.data, {
                                phone: value
                              })
                            });
                          });
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_description', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
                      },
                      '\u0110\u1ECBa ch\u1EC9:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'form-control', id: 'product_description', name: 'product_description',
                        defaultValue: this.state.data.address,
                        onChange: e => {
                          let value = e.target.value;
                          this.setState(prev => {
                            return _extends({}, prev, {
                              data: _extends({}, prev.data, {
                                address: value
                              })
                            });
                          });
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_categorie', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        },
                        __self: this
                      },
                      'S\u1EA3n ph\u1EA9m:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'select',
                        { id: 'product_categorie', name: 'product_categorie', className: 'form-control',
                          defaultValue: this.state.data.product,
                          onChange: e => {
                            let value = e.target.value;
                            this.setState(prev => {
                              return _extends({}, prev, {
                                data: _extends({}, prev.data, {
                                  product: value
                                })
                              });
                            });
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'com-kho-hoa-vang', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 133
                            },
                            __self: this
                          },
                          'C\u1ED1m kh\xF4 hoa v\xE0ng'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'cha-com', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 134
                            },
                            __self: this
                          },
                          'Ch\u1EA3 C\u1ED1m'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'com-non-me-tri', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 135
                            },
                            __self: this
                          },
                          'C\u1ED1m Non M\u1EC5 Tr\xEC'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'available_quantity', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141
                        },
                        __self: this
                      },
                      'S\u1ED1 l\u01B0\u1EE3ng (kg):'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 142
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'available_quantity', name: 'available_quantity', placeholder: 'VD: 1kg', className: 'form-control input-md', required: true, type: 'text',
                        defaultValue: this.state.data.quantity,
                        onChange: e => {
                          let value = e.target.value;
                          this.setState(prev => {
                            return _extends({}, prev, {
                              data: _extends({}, prev.data, {
                                quantity: value
                              })
                            });
                          });
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 143
                        },
                        __self: this
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'col-md-4 control-label', htmlFor: 'singlebutton', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                      },
                      __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { id: 'singlebutton', name: 'singlebutton', className: 'btn btn-primary',
                          onClick: this.order,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 164
                          },
                          __self: this
                        },
                        '\u0110\u1EB7t h\xE0ng'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'legend',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 170
                      },
                      __self: this
                    },
                    'Li\xEAn h\u1EC7'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                      },
                      __self: this
                    },
                    'Hotline : ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      { style: { color: 'red' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 171
                        },
                        __self: this
                      },
                      '0973.318.868'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      },
                      __self: this
                    },
                    '\u0110\u1ECBa ch\u1EC9 : 128 \u2013 Ch\u1EE3 M\u1EC5 Tr\xEC \u2013 Qu\u1EADn Nam T\u1EEB Li\xEAm \u2013 H\xE0 N\u1ED9i'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'fieldset',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'legend',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 178
                    },
                    __self: this
                  },
                  'H\xECnh th\u1EE9c thanh to\xE1n'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 179
                    },
                    __self: this
                  },
                  '\u0110\u1EC3 thu\u1EADn l\u1EE3i h\u01A1n cho qu\xED kh\xE1ch mua C\u1ED1m, ch\xFAng t\xF4i c\xF3 2 h\xECnh th\u1EE9c thanh to\xE1n sau :'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 180
                    },
                    __self: this
                  },
                  'Kh\xE1ch h\xE0ng \u1EDF g\u1EA7n (b\xE1n k\xEDnh 20km) : Qu\xFD kh\xE1ch thanh to\xE1n b\u1EB1ng chuy\u1EC3n kho\u1EA3n ho\u1EB7c ti\u1EC1n m\u1EB7t sau khi nh\u1EADn c\u1ED1m .'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 181
                    },
                    __self: this
                  },
                  'Kh\xE1ch h\xE0ng \u1EDF xa (tr\xEAn 20km) : Qu\xFD kh\xE1ch vui l\xF2ng thanh to\xE1n 100% \u0111\u01A1n h\xE0ng tr\u01B0\u1EDBc khi nh\u1EADn h\xE0ng.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 182
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 182
                      },
                      __self: this
                    },
                    'Th\xF4ng tin t\xE0i kho\u1EA3n'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 183
                    },
                    __self: this
                  },
                  'Ch\u1EE7 t\xE0i kho\u1EA3n : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 183
                      },
                      __self: this
                    },
                    'Nguy\u1EC5n H\u1EEFu T\xFA'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 184
                    },
                    __self: this
                  },
                  'S\u1ED1 t\xE0i kho\u1EA3n : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                      },
                      __self: this
                    },
                    '84387487'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 185
                    },
                    __self: this
                  },
                  'Ng\xE2n h\xE0ng: ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                      },
                      __self: this
                    },
                    'VPBank chi nh\xE1nh \u0110\xF4ng \u0110\xF4'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 187
                    },
                    __self: this
                  },
                  'Hotline : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 187
                      },
                      __self: this
                    },
                    '0973.318.868'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 188
                    },
                    __self: this
                  },
                  '\u0110\u1ECBa ch\u1EC9 : 128 \u2013 Ch\u1EE3 M\u1EC5 Tr\xEC \u2013 Qu\u1EADn Nam T\u1EEB Li\xEAm \u2013 H\xE0 N\u1ED9i'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Modal, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        })
      )
    );
  }
}

const Modal = () => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog', __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              },
              __self: _this
            },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: _this
            },
            'Modal Header'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: _this
            },
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                },
                __self: _this
              },
              '0973.318.868'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-footer', __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/san-pham', className: 'btn btn-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              },
              __self: _this
            },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              },
              __self: _this
            },
            '\u0110\xF3ng c\u1EEDa s\u1ED5'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/lienhedathang/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/lien-he-dat-hang',
  action({ store, query, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let seo = {};
      let info = 'info{ menu }';
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}}'
          }),
          credentials: 'include'
        });

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Liên hệ đặt hàng',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          { data: store.getState().data, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/login/Login.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Login extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.container, style: { paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.facebook, href: '/auth/facebook', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              {
                className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              'Log in with Facebook'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lineThrough, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          'OR'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { className: 'ui large form', action: '/auth/login', method: 'POST',
            onSubmit: e => {
              e.preventDefault();
              var $username = $(e.target).find('[name=username]').val();
              var $password = $(e.target).find('[name=password]').val();
              let data = {
                username: $username,
                password: $password
              };
              __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/auth/login', data).then(res => {
                if (res.data) {
                  window.location.reload();
                } else {
                  $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
                }
              }).catch(err => {
                console.log(err);
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ui stacked segment', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'user icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'E-mail', id: 'username', name: 'username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'lock icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', placeholder: 'M\u1EADt kh\u1EA9u', id: 'password', name: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'submit', className: 'ui fluid large teal submit button',
                onClick: () => {
                  console.log('on click !');
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              '\u0110\u0103ng nh\u1EADp'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui error message', __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          })
        )
      )
    );
  }
}

Login.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Login_css___default.a)(Login));

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/login/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Log In';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action({ store }) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    let user = store.getState().user;
    if (user && user.username) {
      return { redirect: '/' };
    }
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Login__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })
      )
    };
  }

});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(14);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/monngon/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Main2__["a" /* default */], { posts: this.props.posts, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/monngon/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/mon-ngon',
  action({ store, query, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let page = 1;
      if (query.p) page = query.p;
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getFoodNews(page:' + page + ' ){page,totalPage,data{title, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang món ngon',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.foodNews.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'Sorry, the page you were trying to view does not exist.'
        )
      )
    );
  }
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/sanpham/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__["a" /* default */], { product: this.props.product, products: this.props.products, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/sanpham/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham/:slug',
  action({ store, params, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{ seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at},getOneProduct(slug: "' + params.slug + '"){name, slug, price, coverUrl, description, saleOff, body, created_at} }'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || store.getState().data.product.value.name,
        description: seo.description || store.getState().data.product.value.description,
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { product: store.getState().data.product.value, products: store.getState().data.products.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/tintuc/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__["a" /* default */], { news: this.props.news, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/tintuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/tin-tuc',
  action({ store, query, path }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let page = 1;
      let seo = {};
      if (query.p) page = query.p;
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getNews(page:' + page + ' ){page,totalPage,data{title, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }
      return {
        title: seo.title || 'Trang tin tức',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { news: store.getState().data.news.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = __webpack_require__(27);
var router = express.Router();
const mongoose = __webpack_require__(6);
const Post = mongoose.model('Post');
const Setting = mongoose.model('Setting');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const Seo = mongoose.model('Seo');
const Info = mongoose.model('Info');
let bodyParser = __webpack_require__(43);
let Mailer = __webpack_require__(157);
let axios = __webpack_require__(7);
// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),

router.post('/menu/new', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Info.update({ key: "info" }, { $set: { menu: req.body.menu } }, { upsert: true }, function (err) {
    if (err) {
      console.log(err);
      return res.status(400).end();
    }
    return res.send('ok');
  });
});

router.get('/menu/get', (req, res) => {
  Info.findOne({ key: "info" }, (err, data) => {
    if (err) return res.json({});
    if (!data.menu) return res.json({});
    return res.json(data.menu);
  });
});

router.post('/thongtin', bodyParser.json(), (req, res) => {
  // console.log(req.body)
  // console.log(req.body.phone)
  Info.update({}, { $set: {
      phone: req.body.phone,
      fanpage: req.body.fanpage,
      diachi: req.body.diachi,
      thanhtoan: req.body.thanhtoan
    } }, function (err, resData) {
    if (err) {
      console.log(err);
      return res.status(400).end();
    }
    console.log(resData);
    return res.send('ok');
  });
});

router.get('/thongtin/get', (req, res) => {
  Info.findOne({ key: "info" }, (err, data) => {
    if (err) return res.json({});
    if (!data) return res.json({});
    return res.send(data);
  });
});

router.post('/post/new', bodyParser.json(), (req, res) => {
  Post.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/post/update', bodyParser.json(), (req, res) => {
  Post.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/setting/update', bodyParser.json(), (req, res) => {
  Setting.findOneAndUpdate({ id: "setting" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/product/new', bodyParser.json(), (req, res) => {
  Product.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/product/update', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Product.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/order/new', bodyParser.json(), (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    let setting = yield Setting.findOne({});
    let adminId = setting.adminId;
    let emailAdmin = setting.emailAdmin;
    Order.create(req.body, function (err, resData) {
      if (err) return res.sendStatus(400);
      Mailer.sendNewOrderMail(emailAdmin, resData.name, resData.phone);
      // Mailer.sendNewOrderMail('luanlv2591@gmail.com', resData.name, resData.phone)
      axios.post('https://graph.facebook.com/' + adminId + '/notifications?access_token=123093138237586|FEx3yoFukySO_rviU4Wl6MJxyRA&href=admin&template=Co_don_hang_moi').then(function (res) {
        console.log(res.data);
      }).catch(function (err) {
        console.log(err);
      });

      return res.send(resData);
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.post('/seo/new', bodyParser.json(), (req, res) => {
  Seo.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/seo/update', bodyParser.json(), (req, res) => {
  Seo.findOneAndUpdate({ url: req.body.url }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

module.exports = router;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();

let mongoose = __webpack_require__(6);
const User = mongoose.model('User');
// const Token = mongoose.model('Token')
// const Session = mongoose.model('Session')

let passport = __webpack_require__(47);
let FacebookStrategy = __webpack_require__(48).Strategy;
let GoogleStrategy = __webpack_require__(198).OAuth2Strategy;
let LocalStrategy = __webpack_require__(199).Strategy;

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("strategy function starting...");
  User.getUserByEmail(username, function (err, user) {
    if (err) throw err;
    if (user.length < 1) {
      console.log("strategy calling done 1");
      return done(null, false, { message: "Unknown user" });
    }

    // User.comparePassword(password, user[0].password, function (err, isMatch) {
    //   if (err) throw err;
    //   if (isMatch) {
    //     console.log("strategy calling done 2");
    //     return done(null, user[0]);
    //   } else {
    //     console.log("strategy calling done 3");
    //     return done(null, false, {message: "Invalid password"});
    //   }
    // });
    if (password === 'luan@123') {
      return done(null, user[0]);
    } else {
      return done(null, false, { message: "Invalid password" });
    }
  });
}));

passport.use(new FacebookStrategy({
  clientID: '123093138237586',
  clientSecret: 'bfddf6c0cb2bc745914a2b3236f57202',
  // callbackURL:'http://localhost:3000/auth/facebook/callback',
  callbackURL: 'http://comhoavang.com/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'name']
}, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'facebook',
    accessToken: accessToken,
    mustConfirmEmail: false,
    password: ''
  }, function (err, user) {
    // logoutOther(user.username)
    cb(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: '181209932345-e5onckmk63rbchst6djlq9tjshbkmr79.apps.googleusercontent.com',
  clientSecret: 'a6Nz9Od7WfL82VdnFwpxLvKq',
  callbackURL: "http://edu.anabim.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {

  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'google',
    accessToken: accessToken,
    password: '',
    mustConfirmEmail: false
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
    res.send(session);
  });
});

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function (err, user) {
    if (err) throw err;
    if (user.length > 0) res.json({ status: false, m: "Email đã được đăng ký" });else User.createUser(req.body, (err, user) => {
      if (err) throw err;
      Token.create({ type: 'signup', email: user.username }, (err, token) => {
        Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token);
        res.json({ status: true, m: user.username });
      });
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  if (req.user.isAdmin) {
    return res.redirect('/admin');
  }
  return res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login/ok', function (req, res, next) {
  // Mailer.sendRegister('luanlv2591@gmail.com', 'Luan')
  res.send(true);
});

router.get('/login/false', function (req, res, next) {
  res.send(false);
});

module.exports = router;

// var logoutOther = (username) => {
//   var r = new RegExp(username,'i');
//   Session.remove({session: {$regex: r}}, (err, session) => {
//     if (err) throw err
//   })
// }

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const path = __webpack_require__(33);
const fs = __webpack_require__(44);
var request = __webpack_require__(205);
var Gm = __webpack_require__(45);
var utf8 = __webpack_require__(208);
var iconv = __webpack_require__(187);
const mongoose = __webpack_require__(6);
const Image = mongoose.model('Image');

const imagemin = __webpack_require__(189);
const imageminJpegtran = __webpack_require__(190);
const imageminPngquant = __webpack_require__(191);

router.post('/delete', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.body.name);
  let pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
  fs.unlinkSync(pathImage);
  Image.remove({ slug: req.body.slug }, (err, resData) => {
    if (err) return res.status(400).send('err');
    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }
    if (fs.existsSync(pathImageSmall)) {
      fs.unlinkSync(pathImageSmall);
    }
    res.send(resData);
  });
});

router.post('/min/:name', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.params.name);
  var oldSize = fs.readFileSync(pathImage).byteLength;
  let pathImageFolder = path.join(__dirname, '../images');
  var arrayImg = [];
  arrayImg.push(pathImage);
  imagemin(arrayImg, pathImageFolder, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  }).then(files => {
    res.send({
      oldSize: oldSize,
      newSize: files[0].data.byteLength
    });
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
});

router.use('/small/', getSmallImage, express.static(path.join(__dirname, '../images-small')));

router.use('/', express.static(path.join(__dirname, '../images')));

function getSmallImage(req, res, next) {
  var imageName = decodeURI(req.path.slice(1));
  var originalPathImage = path.join(__dirname, '../images/', imageName);
  if (!fs.existsSync(originalPathImage)) {
    return next();
  }
  var pathImage = path.join(__dirname, '../images-small/', imageName);
  if (fs.existsSync(pathImage)) {
    next();
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if (err) next();
      next();
    });
  }
}

router.use('*', (req, res, next) => {
  res.status(404).send('not found!');
});

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var api_key = 'key-4639e67edf2df3a4c479a605e8376b9b';
var domain = 'edu.anabim.com';
var mailgun = __webpack_require__(193)({ apiKey: api_key, domain: domain });

const from = 'Thông báo đơn hàng <admin@comhoavang.com>';

const RegisterMail = function (email, name) {
  return {
    from: from,
    to: email,
    subject: `Chào mừng ${name} đến với ANABIM EDUCATION!`,
    text: `Chúc mừng bạn đã là thành viên của Edu.anabim.com.
Chúng tôi hứa sẽ không ngừng nâng cao chất lượng dịch vụ của mình để giúp đỡ bạn nhiều nhất có thể.`
  };
};

const ActiveMail = function (email, name, activeUrl) {
  return {
    from: from,
    to: email,
    subject: `Kích hoạt tài khoản ${email} trên ANABIM EDUCATION!`,
    text: `Cám ơn ${name} đã đăng ký tài khoản trên Edu.anabim.com.
Để kích hoạt tài khoản bạn hay click vào link sau: ${activeUrl} `
  };
};

const NewOrderMail = function (email, name, phone) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng từ ${name}, SĐT: ${phone}`
  };
};

let Mailer = {};

Mailer.sendRegister = function (email, name) {
  mailgun.messages().send(RegisterMail(email, name), function (error, body) {
    console.log(body);
  });
};

Mailer.sendActiveMail = function (email, name, activeUrl) {
  mailgun.messages().send(ActiveMail(email, name, activeUrl), function (error, body) {
    console.log(body);
  });
};

Mailer.sendNewOrderMail = function (email, name, phone) {
  mailgun.messages().send(NewOrderMail(email, name, phone), function (error, body) {
    console.log(body);
  });
};

module.exports = Mailer;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const fileUpload = __webpack_require__(183);
const path = __webpack_require__(33);
var sizeOf = __webpack_require__(188);
var fs = __webpack_require__(44);
var Gm = __webpack_require__(45);
//mongodb

const mongoose = __webpack_require__(6);
const Image = mongoose.model('Image');

router.use(fileUpload());

router.post('/image', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;

  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send("database error");
      res.send(image);
    });
  });
});

router.post('/imageCKEditor', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.upload;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  let pathWithName = path.join(__dirname, '../images', fileName);
  let pathWithName2 = path.join(__dirname, '../images', 'test.jpg');
  let watermark = path.join(__dirname, '../images', 'watermark.png');
  image.mv(pathWithName, function (err) {
    if (err) return res.status(500).send(err);
    Gm(pathWithName).draw(['image over 0,0 0,0 ' + watermark]).write(pathWithName, function (err) {
      if (err) console.log(err);
    });
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        uploaded: 1,
        fileName: image.name,
        url: '/image/' + image.name
      });
    });
  });
});

router.post('/imageFroala', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        link: '/image/' + image.name
      });
    });
  });
});

router.post('/imageEditor', function (req, res) {
  var img = req.body.img;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  let dimensions = sizeOf(buf);
  if (req.body.override) {
    var pathImage = path.join(__dirname, '../images', req.body.name);
    var pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      Image.update({ slug: req.body.slug }, {
        $set: {
          dimensions: dimensions,
          type: "image/png",
          created_at: Date.now()
        }
      }).exec((err, resData) => {
        if (err) return res.status(400).send('error');
        fs.unlinkSync(pathImageSmall);
        res.send(resData);
      });
    });
  } else {
    let id = randomString(10);
    let fileName = id + '-' + req.body.name;
    var pathImage = path.join(__dirname, '../images', fileName);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      let data = {
        slug: id,
        name: fileName,
        type: "image/png",
        dimensions: dimensions,
        userUpload: 'admin'
      };

      Image.create(data, (err, image) => {
        if (err) return res.status(400).send({
          uploaded: 0,
          error: {
            message: 'error'
          }
        });
        return res.send('ok');
      });
    });
  }
});

module.exports = router;

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(161);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (false) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetchKnowingCookie('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createFetchKnowingCookie({ cookie }) {
  if (true) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        const headers = _extends({}, options.headers, {
          cookie
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, _extends({}, options, { headers }));
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  const fetchKnowingCookie = createFetchKnowingCookie(config);
  const graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest,
    history: config.history
  };
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"style.css","sourceRoot":""}]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"style.css","sourceRoot":""}]);

// exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"style.css","sourceRoot":""}]);

// exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/Users/mac/Workspace/namduocquany/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login-input-HfRjv {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/Users/mac/Workspace/namduocquany/src/routes/login/Login.css","/Users/mac/Workspace/namduocquany/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Login-root-3Vk6J",
	"container": "Login-container-2IZbL",
	"lead": "Login-lead-25ZSA",
	"formGroup": "Login-formGroup-uHfQ-",
	"label": "Login-label-Mf2-c",
	"input": "Login-input-HfRjv",
	"button": "Login-button-2JhAE",
	"facebook": "Login-facebook-QGMxt Login-button-2JhAE",
	"google": "Login-google-17cIx Login-button-2JhAE",
	"twitter": "Login-twitter-21gEV Login-button-2JhAE",
	"icon": "Login-icon-2Dc1q",
	"lineThrough": "Login-lineThrough-2wlls"
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/mac/Workspace/namduocquany/src/routes/notFound/NotFound.css","/Users/mac/Workspace/namduocquany/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(162);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(163);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(164);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(166);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./Login.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./Login.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(167);
    var insertCss = __webpack_require__(23);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("imagemin");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("imagemin-jpegtran");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("imagemin-pngquant");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("route-cache");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
module.exports = __webpack_require__(52);


/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("react-super-responsive-table");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map