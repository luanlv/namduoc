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
/******/ 	return __webpack_require__(__webpack_require__.s = 215);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(199);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      alert('ok');
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
    // return <a href={to} {...props} onClick={this.handleClick}>{children}</a>;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props),
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

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_lazy_load_image_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_lazy_load_image_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_lazy_load_image_component__);
/*global
 $, jQuery
 */


// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';






// import mp3_file from './tuy_hong_nhan.mp3';

const AudioPlayer = function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('audio', { src: mp3_file, controls: true, autoPlay: true, autoplay: true });
};

class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (false) {
      window.myfunload();
      window.addEventListener('load', () => {
        // noinspection JSUnresolvedVariable
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/tuy_hong_nhan.mp3');
        xhr.responseType = 'arraybuffer';
        xhr.addEventListener('load', () => {
          let playsound = audioBuffer => {
            let source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            source.loop = false;
            source.start();
          };

          // audioCtx.decodeAudioData(xhr.response).then(playsound);
        });
        xhr.send();
      });
    }
  }

  render() {
    // console.log(this.props.data)
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'wrapper' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], { data: this.props.data }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], { data: this.props.data }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__["a" /* default */], { data: this.props.data }),
      false && mobilecheck() && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'phone' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text-phone' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            null,
            'G\u1ECDi ngay'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            '0915.055.951'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'tel:0915055951' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { id: 'phone-image', className: 'vibrate', src: '/assets/images/phone.png', alt: 'call phone' })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(187);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = Promise.resolve().then((require => {
  return {
    App: __webpack_require__(103).default,
    Dashboard: __webpack_require__(106).default,
    Library: __webpack_require__(110).default,
    Setting: __webpack_require__(128).default,
    Menu: __webpack_require__(112).default,
    MenuBottom: __webpack_require__(114).default,
    ThongTin: __webpack_require__(130).default,
    Editor: __webpack_require__(108).default,
    ListNews: __webpack_require__(121).default,
    EditKhuyenMai: __webpack_require__(119).default,
    EditNews: __webpack_require__(120).default,
    EditFoods: __webpack_require__(116).default,
    ListFoods: __webpack_require__(117).default,
    EditProduct: __webpack_require__(123).default,
    ListProduct: __webpack_require__(124).default,
    Seo: __webpack_require__(126).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });




class Aside extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    let info = ((this.props.data || {}).info || {}).value || {};
    // console.log(this.props.data)
    // console.log(info)
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colAside' },
      this.props.banchay && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { className: 'title',
            style: {
              fontSize: 14
            }
          },
          'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
        ),
        this.props.data.map((el, idx) => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-12', key: idx
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                style: {
                  padding: '5px 15px'
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/san-pham/' + el.slug },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                  style: { width: '100%' },
                  src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.name })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/san-pham/' + el.slug,
                  style: {
                    textAlign: 'center',
                    display: 'block',
                    color: '#5CB247'
                  }
                },
                el.name
              )
            )
          );
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'adv' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/right.jpg', alt: 'Hotline' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'adv' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
              { appID: '1054383868055783' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Page"], { href: 'https://www.facebook.com/namduocquanyvn', 'data-numposts': '5' })
            )
          )
        )
      )
    );
  }
}



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });




class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {

    let info = ((this.props.data || {}).info || {}).value;
    let menuBottom = JSON.parse(info.menuBottom);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'footer-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'footer-box mobi480h' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading' },
                  'Menu '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer' },
                  menuBottom.map((el, idx) => {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { key: idx },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: el.url },
                        el.title,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                      )
                    );
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading' },
                  'TH\xD4NG TIN WEBSITE'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'H\xECnh th\u1EE9c thanh to\xE1n',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n, giao nh\u1EADn',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-12 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'botHeading' },
                  'TH\xD4NG TIN LI\xCAN H\u1EC6'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'address-box list-footer' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-1' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '\u0110\u1ECBa ch\u1EC9 :',
                      info.diachi
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-2' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '\u0110i\u1EC7n tho\u1EA1i : ',
                      info.phone
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      'Email: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: "mailto:" + info.email },
                        info.email
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'footer-box mobi480s' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'copyright' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-6' },
            '\xA9 2017 NAMDUOCQUANY. All rights reserved'
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



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    let info = ((this.props.data || {}).info || {}).value;
    let menu = JSON.parse(info.menu);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'header',
        style: { backgroundColor: '#5CB247' }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'headerTop' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', style: { position: 'relative' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-menu mobile-showhide' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'panel-left', href: '#menumobile' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              ' '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#searchbox', className: 'finda mobile-showhide' },
            'search'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'logo' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/logo_namduoc.png', alt: 'logo' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { id: 'menu2', className: 'desktop-showhide sf-js-enabled', style: { touchAction: 'pan-y' } },
            menu.map((el, idx) => {
              if (el.children && el.children.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: idx, className: 'hasSubMenu' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: el.url, className: 'sf-with-ul' },
                    el.title
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'subMenu' },
                    el.children.map((el2, idx2) => {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: idx2 },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: el2.url, className: 'sf-with-ul' },
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
                    key: idx
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: el.url },
                    el.title
                  )
                );
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'desktop-showhide sf-js-enabled headerBottom' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'searchbox', className: 'search-form' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'search-input' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'ctl00$ctl00$ctl00$txtSearch', type: 'text', id: 'ctl00_ctl00_ctl00_txtSearch',
                className: 'search-text' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState',
                id: 'ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'share desktop-showhide' },
            'Follow me on ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { target: '_blank', href: info.fanpage },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: '' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'hotline desktop-showhide' },
            'T\u1ED5ng \u0111\xE0i CSKH: ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              info.phone
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr' })
        )
      )
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


class MenuMobile extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  closeMenu() {
    if (false) {
      console.log('close');
      $('#close-menu').trigger('click');
    }
  }
  render() {
    let info = ((this.props.data || {}).info || {}).value;
    let menu = JSON.parse(info.menu);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'menumobile', className: 'mobile-panel mobile-left', style: { transform: 'translate3d(-120%, 0px, 0px)' } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'close-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { id: 'close-menu', href: '#menumobile', className: 'glyphicon glyphicon-remove-circle' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'menu-in' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'menu-mobile' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'logo' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/',
                onClick: this.closeMenu
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/logo_namduoc.png', alt: 'logo nam duoc quan y' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'menu-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/', onClick: this.closeMenu },
                'Trang ch\u1EE7'
              )
            ),
            menu.map((el, idx) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { key: idx },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: el.url, onClick: this.closeMenu },
                  el.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  null,
                  el.children && el.children.map((el2, idx2) => {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { key: idx2 },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: el2.url, onClick: this.closeMenu },
                        el2.title
                      )
                    );
                  })
                )
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline' },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                '0915 055 951'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share' },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: 'https://www.facebook.com/namduocquanyvn/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: true })
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
/* unused harmony export auth */


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
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





var Waypoint = __webpack_require__(50);


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
    // console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    // console.log(e);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.props.handleSelect(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(178);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(179);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(177);

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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);




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
        beforeUpload: this.beforeUpload
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-drag-icon' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'inbox' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-text' },
        'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-hint' },
        'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Coupon__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
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

    this.showModalCoupon = () => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalCoupon: true
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
        modalSelectImage: false,
        modalCoupon: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      modalCoupon: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleCoupon = this.handleCoupon.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }
  handleCoupon(coupon) {
    console.log(coupon);
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalCoupon: false
      });
    });
    this.editor.setMode('wysiwyg');
    this.editor.insertHtml('' + '<div class="modalmock"> <div class="subscription-plan"> <div class="subscription-plan--price second" style="text-align: center">GIẢM<br /> 50%</div> <div class="subscription-plan--description">Hạn dùng:<br /> Ngành hàng: <br /> Lưu ý: </div> <div class="subscription-plan--button"><a href="' + coupon.url + '" target="_blank">Chi tiết</a></div> </div> </>' + '<br/>');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { className: 'padding-5' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            id: 'addImage',
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('editor')
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            id: 'addCoupon',
            style: { marginRight: 10 },
            onClick: () => this.showModalCoupon()
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, { handleWidth: true, handleHeight: true, onResize: (w, h) => {
              let diff = h - this.state.oldEditorSize;
              if (this.state.isEndEditor && diff > 0) {
                var y = $(window).scrollTop();
                $(window).scrollTop(y + diff);
              }
              this.setState({
                oldEditorSize: h
              });
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'toolbarLocation' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: this.elementName, defaultValue: this.props.value }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: 20 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, { onChange: isVisible => {
              this.setState({
                isEndEditor: !isVisible
              });
            } })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
            {
              style: { top: 30 },
              width: '90%',
              title: 'Basic Modal', visible: this.state.modalSelectImage,
              onOk: this.handleOk, onCancel: this.handleCancel
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
            {
              style: { top: 30 },
              width: '90%',
              title: 'Basic Modal', visible: this.state.modalCoupon,
              onOk: this.handleOk, onCancel: this.handleCancel
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Coupon__["a" /* default */], { handleSelect: url => this.handleCoupon(url) })
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

    this.editor.addCommand("coupon", { // create named command
      exec: function (edt) {
        $("#addCoupon").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
    this.editor.ui.addButton('coupon', { // add new button and bind our command
      label: "Click me",
      command: 'coupon',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
    // let that = this
    // setTimeout(function(){
    //   that.editor.setMode('wysiwyg');
    //   that.editor.insertHtml( '' +
    //     '<div class="modalmock"> <div class="subscription-plan"> <div class="subscription-plan--price second" style="text-align: center">GIẢM<br /> 50%</div> <div class="subscription-plan--description">Hạn dùng:<br /> Ngành hàng: <br /> Lưu ý: </div> <div class="subscription-plan--button"><a href="https://www.google.com.vn/" target="_blank">Chi tiết</a></div> </div> </>' +
    //     '<br/>' );
    // }, 1000)
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);




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
      null,
      tags.map((tag, index) => {
        const isLongTag = tag.name.length > 20;
        const tagElem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tag"],
          { key: index, closable: true, afterClose: () => this.handleClose(tag) },
          isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name
        );
        return isLongTag ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"],
          { title: tag.name },
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
        onPressEnter: this.handleInputConfirm
      }),
      !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { size: 'small', type: 'dashed', onClick: this.showInput },
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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(174);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(34);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(216);

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
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(96);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync(...args);
}

/* harmony default export */ __webpack_exports__["a"] = ({ sync });

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
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
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop', 'khuyen-mai'];

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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(25);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(165);
    var insertCss = __webpack_require__(24);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(167);
    var insertCss = __webpack_require__(24);

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

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_App__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Html__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_passport__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_models__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_schema__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_setting__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
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





const session = __webpack_require__(186);
const MongoStore = __webpack_require__(181)(session);
var routeCache = __webpack_require__(210);

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

if (false) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(158));
app.use('/api', __webpack_require__(156));
app.use('/upload', __webpack_require__(160));
app.use('/auth', __webpack_require__(157));
//
// Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_4_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_16__data_schema__["a" /* default */],
  graphiql: false,
  rootValue: { request: req },
  pretty: false
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('/google1d90e7cebb1addc5.html', (req, res, next) => {
  res.send('google-site-verification: google1d90e7cebb1addc5.html');
});

app.get('*', routeCache.cacheSeconds(30), (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    // app.get('*', routeCache.cacheSeconds(0), async (req, res, next) => {
    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    if (isAdmin) {
      if (!req.user || !req.user.isAdmin) {
        console.log('admin');
        return res.redirect('/login');
      }
    }
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
          },

          noibat: {
            needUpdate: true,
            value: []
          },
          khuyenmai: {
            needUpdate: true,
            value: []
          },
          banchay: {
            needUpdate: true,
            value: []
          },
          productsInCategory: {
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
          { context: context },
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
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        let html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */], _extends({ v: version
        }, data, { isAdmin: isAdmin, scriptTop: setting.scriptTop || '',
          scriptBottom: setting.scriptBottom || '',
          css: setting.css || ''
        })));
        res.status(route.status || 200);
        html = html.replace('<body>', `<body><style>.fb-livechat, .fb-widget{display: none}.ctrlq.fb-button, .ctrlq.fb-close{position: fixed; right: 24px; cursor: pointer}.ctrlq.fb-button{z-index: 999; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxyZWN0IGZpbGw9IiMwMDg0RkYiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PC9nPjxwYXRoIGQ9Ik02NCwxNy41MzFjLTI1LjQwNSwwLTQ2LDE5LjI1OS00Niw0My4wMTVjMCwxMy41MTUsNi42NjUsMjUuNTc0LDE3LjA4OSwzMy40NnYxNi40NjIgIGwxNS42OTgtOC43MDdjNC4xODYsMS4xNzEsOC42MjEsMS44LDEzLjIxMywxLjhjMjUuNDA1LDAsNDYtMTkuMjU4LDQ2LTQzLjAxNUMxMTAsMzYuNzksODkuNDA1LDE3LjUzMSw2NCwxNy41MzF6IE02OC44NDUsNzUuMjE0ICBMNTYuOTQ3LDYyLjg1NUwzNC4wMzUsNzUuNTI0bDI1LjEyLTI2LjY1N2wxMS44OTgsMTIuMzU5bDIyLjkxLTEyLjY3TDY4Ljg0NSw3NS4yMTR6IiBmaWxsPSIjRkZGRkZGIiBpZD0iQnViYmxlX1NoYXBlIi8+PC9zdmc+) center no-repeat #0084ff; width: 60px; height: 60px; text-align: center; bottom: 50px; border: 0; outline: 0; border-radius: 60px; -webkit-border-radius: 60px; -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16); -webkit-transition: box-shadow .2s ease; background-size: 80%; transition: all .2s ease-in-out}.ctrlq.fb-button:focus, .ctrlq.fb-button:hover{transform: scale(1.1); box-shadow: 0 2px 8px rgba(0, 0, 0, .09), 0 4px 40px rgba(0, 0, 0, .24)}.fb-widget{background: #fff; z-index: 1000; position: fixed; width: 360px; height: 435px; overflow: hidden; opacity: 0; bottom: 0; right: 24px; border-radius: 6px; -o-border-radius: 6px; -webkit-border-radius: 6px; box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -webkit-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -moz-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -o-box-shadow: 0 5px 40px rgba(0, 0, 0, .16)}.fb-credit{text-align: center; margin-top: 8px}.fb-credit a{transition: none; color: #bec2c9; font-family: Helvetica, Arial, sans-serif; font-size: 12px; text-decoration: none; border: 0; font-weight: 400}.ctrlq.fb-overlay{z-index: 0; position: fixed; height: 100vh; width: 100vw; -webkit-transition: opacity .4s, visibility .4s; transition: opacity .4s, visibility .4s; top: 0; left: 0; background: rgba(0, 0, 0, .05); display: none}.ctrlq.fb-close{z-index: 4; padding: 0 6px; background: #365899; font-weight: 700; font-size: 11px; color: #fff; margin: 8px; border-radius: 3px}.ctrlq.fb-close::after{content: "X"; font-family: sans-serif}.bubble{width: 20px; height: 20px; background: #c00; color: #fff; position: absolute; z-index: 999999999; text-align: center; vertical-align: middle; top: -2px; left: -5px; border-radius: 50%;}.bubble-msg{width: 120px; left: -140px; top: 5px; position: relative; background: rgba(59, 89, 152, .8); color: #fff; padding: 5px 8px; border-radius: 8px; text-align: center; font-size: 13px;}</style><div class="fb-livechat"> <div class="ctrlq fb-overlay"></div><div class="fb-widget"> <div class="ctrlq fb-close"></div><div class="fb-page" data-href="https://www.facebook.com/namduocquanyvn" data-tabs="messages" data-width="360" data-height="400" data-small-header="true" data-hide-cover="true" data-show-facepile="false"> </div><div class="fb-credit">  </div><div id="fb-root"></div></div><a href="https://m.me/namduocquanyvn" title="Gửi tin nhắn cho chúng tôi qua Facebook" class="ctrlq fb-button"> <div class="bubble">1</div><div class="bubble-msg">Bạn cần hỗ trợ?</div></a></div><script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script>$(document).ready(function(){function detectmob(){if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){return true;}else{return false;}}var t={delay: 125, overlay: $(".fb-overlay"), widget: $(".fb-widget"), button: $(".fb-button")}; setTimeout(function(){$("div.fb-livechat").fadeIn()}, 8 * t.delay); if(!detectmob()){$(".ctrlq").on("click", function(e){e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({bottom: 0, opacity: 0}, 2 * t.delay, function(){$(this).hide("slow"), t.button.show()})) : t.button.fadeOut("medium", function(){t.widget.stop().show().animate({bottom: "30px", opacity: 1}, 2 * t.delay), t.overlay.fadeIn(t.delay)})})}});</script>`);
        html = html.replace('<body>', `<body><!-- Facebook Pixel Code --> <script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '137006580300562'); fbq('track', 'PageView'); </script> <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=137006580300562&ev=PageView&noscript=1" /></noscript> <!-- End Facebook Pixel Code -->`);
        html = html.replace('<body>', `<body><!-- Global site tag (gtag.js) - Google Analytics --> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125798720-1"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-125798720-1'); </script>`);
        html = html.replace('<body>', `<body><!-- Histats.com (div with counter) --><!-- Histats.com START (aync)--> <script type="text/javascript">var _Hasync= _Hasync|| []; _Hasync.push(['Histats.start', '1,4153078,4,1,120,40,00010000']); _Hasync.push(['Histats.fasi', '1']); _Hasync.push(['Histats.track_hits', '']); (function() { var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true; hs.src = ('//s10.histats.com/js15_as.js'); (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs); })();</script> <noscript><a href="/" target="_blank"><img src="//sstatic1.histats.com/0.gif?4153078&101" alt="" border="0"></a></noscript> <!-- Histats.com END -->`);
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
    },
    __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err }))
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
/* 54 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(33);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(46);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(175);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(33);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(34);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(55);

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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_react_parser__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_react_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html_react_parser__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






let myAttr = {
  attribution: "setup_tool",
  page_id: "181757592661149",
  logged_in_greeting: "Chúng tôi có thể giúp gì được cho bạn?",
  logged_out_greeting: "Chúng tôi có thể giúp gì được cho bạn?"
};

class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentDidMount() {}

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'vi' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:locale', content: 'vi_VN' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:app_id', content: '1054383868055783' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:admins', content: '100004231235930' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'fb:admins', content: '100008346038178' }),
        seo && seo.og_title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: seo.og_title }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'C\u01A1 s\u1EDF chuy\xEAn s\u1EA3n xu\u1EA5t v\xE0 cung c\u1EA5p \u0111\u1EB7c s\u1EA3n H\xE0 N\u1ED9i - C\u1ED1m M\u1EC5 Tr\xEC, Ch\u1EA3 C\u1ED1m, C\u1ED1m Kh\xF4 . \u0110\u1ECBa ch\u1EC9 b\xE1n c\u1ED1m M\u1EC5 Tr\xEC uy t\xEDn, ch\u1EA5t l\u01B0\u1EE3ng, gi\xE1 c\u1EA3 h\u1EE3p l\xFD' }),
        seo && seo.url ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'http://namduocquany.com' + seo.url }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'http://namduocquany.com' }),
        seo && seo.og_image ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'http://namduocquany.com' + seo.og_image }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'http://namduocquany.com/image/m5bZaSxOJG-banner.jpg' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', charset: 'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: "/assets/styles/style.min.css?v=" + v, rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/app.css?v=" + v }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptTop } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          dangerouslySetInnerHTML: { __html: `head.load("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")` + `.js("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" )` + `.js("/assets/js/jquery.ui.datepicker-vi-VN.js?v=${v}")` + `.js("/assets/js/jquery.easing.1.3.js?v=${v}")` + `.js("/assets/js/jquery.mb.browser.min.js?v=${v}")` + `.js("/assets/js/jquery.textheight.js?v=${v}")` + `.js("/assets/js/hoverIntent.js?v=${v}")` + `.js("/assets/js/imagesloaded.pkgd.min.js?v=${v}")` + `.js("/assets/js/bootstrap.min.js?v=${v}")` + `.js("/assets/js/jquery.uniform.min.js?v=${v}")` + `.js("/assets/js/isotope.pkgd.min.js")` + `.js("/assets/js/slick.min.js")` + `.js("/assets/js/jquery.panel.mobile.js?v=${v}")` + `.js("/assets/js/jquery.main.js?v=${v}")` + `.js("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js?v=${v}")` + `.js("${scripts[0]}?v=${v}")` + `.js("${scripts[1]}?v=${v}")` }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptBottom } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          dangerouslySetInnerHTML: { __html: `WebFontConfig = {
                google: { families: [ 'Roboto+Condensed:400,700:latin', 'Source+Sans+Pro:400,600,400italic,700italic,700:latin' ] }
              };
              (function() {
                var wf = document.createElement('script');
                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                  '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
              })();`
          }
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
var Facebook = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'Facebook',

  componentDidMount: function () {
    this.refs.facebook.getDOMNode().setAttribute('attribution', 'setup_tool');
  },
  render: function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: 'facebook', className: 'fb-customerchat' });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Html);
// attribution: "setup_tool",
//   page_id : "181757592661149",
//   logged_in_greeting : "Chúng tôi có thể giúp gì được cho bạn?",
//   logged_out_greeting : "Chúng tôi có thể giúp gì được cho bạn?"

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(20);
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
      { className: 'no-js', lang: 'en' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'unsafe-url' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin-when-cross-origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/lib/domenu/jquery.domenu-0.100.77.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/ckeditor/ckeditor.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/domenu/jquery.domenu-0.100.77.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/admin.css?v=" + v })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script + '?v=' + v }))
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });


class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const first_foodNews = this.props.data.foodNews.value.data[0];
    const foodNews = this.props.data.foodNews.value.data.slice(1, 4);
    const news = this.props.data.news.value.data.slice(0, 3);
    const products = this.props.data.products.value;
    const noibat = this.props.data.noibat.value.slice(0, 8);
    const banchay = this.props.data.banchay.value.slice(0, 8);
    const khuyenmai = this.props.data.khuyenmai.value.slice(0, 8);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colContent' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' } },
        'S\u1EA2N PH\u1EA8M N\u1ED4I B\u1EACT'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section pro-site' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'product-tb pro-tb row' },
          noibat.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, className: 'product-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'product-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug },
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
        'h1',
        { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' } },
        'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section pro-site' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'product-tb pro-tb row' },
          banchay.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, className: 'product-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'product-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug },
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
        'h1',
        { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' } },
        'S\u1EA2N PH\u1EA8M KHUY\u1EBEN M\u1EA0I'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section pro-site' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'product-tb pro-tb row' },
          khuyenmai.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, className: 'product-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'product-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug },
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
        { className: 'head lineh' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 } },
          'Tin t\u1EE9c'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/category/su-kien' },
            'S\u1EF1 ki\u1EC7n'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/category/tin-tuc-tong-hop' },
            'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'isotopelist', className: 'section-tb row mobile100',
            style: { position: 'relative', height: '305.25px' } },
          news.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-lg-4 col-md-6 col-sm-4 col-xs-6  element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'box-news' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { className: 'section-img',
                    to: '/bai-viet/' + el.slug },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                    src: el.coverUrl.replace("\/image", "\/image\/small"),
                    alt: el.title
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'section-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'section-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/bai-viet/' + el.slug },
                      el.title
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'description' },
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
          { className: 'more-all' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/tin-tuc' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Xem t\u1EA5t c\u1EA3'
            )
          )
        )
      )
    );
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




class Slider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const post = this.props.post;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sliderBig bgm-2 slick-initialized slick-slider' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slide slick-slide', 'data-slick-index': 0, 'aria-hidden': 'true', style: { width: '100%' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-big' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + post.slug, className: 'news-img', style: { margin: 10 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: post.coverUrl.replace("\/image", "\/image\/small"), alt: post.title })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: "/bai-viet/" + post.slug },
                  post.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description' },
                post.description.slice(0, 200),
                ' ...'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'more-details' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { className: 'text-uppercase', to: '/bai-viet/' + post.slug },
                  'Xem chi ti\u1EBFt'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'slick-dots', style: { display: 'block' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: true, 'aria-hidden': 'true' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
            '1'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'true', className: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
            '2'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'false', className: 'slick-active' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
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
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head lineh' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title-2', style: { lineHeight: 37 } },
            'M\xF3n ngon'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'head-list' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/mon-ngon-tu-com" },
              'M\xF3n ngon t\u1EEB c\u1ED1m'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/cach-lam-mon-ngon-tai-nha" },
              'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slider-wrap' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Slider, { post: firstPost })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1' },
          posts.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'news-lbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + el.slug,
                  className: 'news-img' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"),
                  alt: el.title })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'news-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { className: 'news-name' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug },
                    el.title
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'description' },
                  el.description
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '1054383868055783' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: 'https://namduocquany.com/mon-ngon', 'data-numposts': '5' })
        )
      );
    }
  }
}



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { page, totalPage, data } = this.props.news;
    const news = data;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colContent' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'head lineh' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 } },
          'tin t\u1EE9c'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/danh-muc/su-kien' },
            'S\u1EF1 ki\u1EC7n'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/danh-muc/tin-tuc-tong-hop' },
            'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'news-big line-bottom' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
          { to: '/bai-viet/' + news[0].slug, className: 'news-img' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: news[0].coverUrl.replace("\/image", "\/image\/small") })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'news-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'news-name' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + news[0].slug },
              news[0].title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'description' },
            news[0].description
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'more-details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + news[0].slug },
              'Xem chi ti\u1EBFt'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb row', style: { position: 'relative', height: '1656.63px' } },
            news.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-xs-4 element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small") })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', style: { height: 80 } },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/bai-viet/' + el.slug },
                        el.title
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'description', style: { height: 60 } },
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
          { id: 'pagerp', className: 'pager' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_DataPager1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'first' },
              'First'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'prev' },
              'Previous'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'current' },
              '1'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl01\',\'\')' },
              '2'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl02\',\'\')' },
              '3'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl03\',\'\')' },
              '4'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl04\',\'\')' },
              '5'
            ),
            '\xA0\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl05\',\'\')' },
              '...'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'next', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl03$ctl00\',\'\')' },
              'Next'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'last', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl04$ctl00\',\'\')' },
              'Last'
            ),
            '\xA0'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
        { appId: '1054383868055783' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "https://namduocquany.com/tin-tuc", 'data-numposts': '5' })
      )
    );
  }
}



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });




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
    { id: 'colContent' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'headno' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'title text-uppercase' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews' },
          mapSlugToName(post.category)
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrapper-text' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        post.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: post.body },
        onClick: onClick
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_facebook___default.a,
      { appId: '1054383868055783' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_facebook__["Comments"], { href: "https://namduocquany.com/bai-viet/" + post.slug, 'data-numposts': '5' })
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (this.props.posts.data.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'title text-uppercase' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory' },
              this.props.title
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'news-big line-bottom mb12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: "/bai-viet/" + firstPost.slug, className: 'news-img' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: firstPost.coverUrl.replace("\/image", "\/image\/small"),
              alt: firstPost.title })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { className: 'news-name' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: "/bai-viet/" + firstPost.slug },
                firstPost.title
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'description' },
              firstPost.description.slice(0, 50),
              ' ...'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'more-details' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + firstPost.slug },
                'Xem chi ti\u1EBFt'
              )
            )
          )
        ),
        posts.map((el, index) => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index, className: 'news-lbox' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              {
                to: '/bai-viet/' + el.slug,
                className: 'news-img' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                src: el.coverUrl.replace("\/image", "\/image\/small"),
                alt: el.title })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  {
                    to: '/bai-viet/' + el.slug },
                  el.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description' },
                el.description
              )
            )
          );
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '1054383868055783' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "https://namduocquany.com/danh-muc/" + firstPost.category, 'data-numposts': '5' })
        )
      );
    }
  }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_image_zoom__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_image_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_image_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuka_carousel__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuka_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nuka_carousel__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });





class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      loaded: false
    };

    this.initialState = {
      image: 0,
      loaded: true
    };
    this.setState(this.initialState);
  }

  componentDidMount() {
    if (false) {
      // $("#img_01").elevateZoom();
    }
  }

  render() {
    if (!this.props.product && this.state.loaded) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const product = this.props.product;
      const products = (this.props.products || []).slice(0, 6);
      let imgs = [];
      imgs.push(product.coverUrl);
      product.coverUrl2.forEach(el => {
        imgs.push(el);
      });
      console.log(imgs);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-details' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'details-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'title' },
              product.name
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-text detail-text' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-product' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-img', style: { paddingRight: 5 } },
              imgs.map((img, idx) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: 'zoom' + idx, style: { display: this.state.image === idx ? 'block' : 'none' } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_image_zoom___default.a, { width: 345, zoomWidth: 345, offset: { "vertical": 0, "horizontal": 10 }, img: img })
                );
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                imgs.map((img, idx) => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: 'sub' + idx, src: img, style: { height: 60, width: 'auto', maxWidth: 80, margin: '5px 5px 0 0', padding: 3, borderRadius: 3, border: "2px solid " + (this.state.image === idx ? "#005aa8" : "transparent") },
                    onClick: () => {
                      this.setState({ image: idx });
                    }
                  });
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-content details-content2' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'title-2', style: { textAlign: 'center' } },
                'Th\xF4ng tin s\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    verticalAlign: 'middle'
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'inline-block',
                      width: 90,
                      textAlign: 'left'
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: {
                        position: 'absolute',
                        top: '25%',
                        left: 0
                      }
                    },
                    'Gi\xE1:'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'inline-block',
                      width: 'calc(100% - 95px)'
                    }
                  },
                  product.price === product.newPrice && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'price-product', style: { textAlign: 'left' } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'em',
                      { style: { color: 'red' } },
                      numberWithCommas(product.price),
                      ' VN\u0110'
                    )
                  ),
                  product.price !== product.newPrice && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'price-product', style: { textAlign: 'left' } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'del',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'em',
                        { style: { color: '999', fontSize: 16 } },
                        numberWithCommas(product.price),
                        ' VN\u0110'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'em',
                      { style: { color: 'red', fontWeight: 'bold' } },
                      numberWithCommas(product.newPrice),
                      ' VN\u0110'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { style: { fontSize: 16 } },
                      '(Gi\u1EA3m ',
                      100 - Math.round(product.newPrice / product.price * 100),
                      '%)'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'inline-block',
                      width: 90,
                      height: '100%',
                      textAlign: 'left',
                      verticalAlign: 'middle'
                    }
                  },
                  'Quy c\xE1ch:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'inline-block',
                      width: 'calc(100% - 95px)',
                      textAlign: 'left',
                      fontWeight: 'bold'
                    }
                  },
                  product.unit
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrap-button', style: { textAlign: 'center', marginTop: 20 } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: { margin: 10 }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: {
                        display: 'inline-block',
                        width: 100
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'svg',
                      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 29.41 17.36' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'defs',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: ".cls-1{fill:#5cb247;fill-rule:evenodd;}" } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'title',
                        null,
                        'Asset 2'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'g',
                        { id: 'Layer_2', 'data-name': 'Layer 2' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'g',
                          { id: 'Layer_2-2', 'data-name': 'Layer 2' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M11.87,11.91H6c-.29,0-.39-.12-.39-.41V9.74c0-.15,0-.2-.2-.2q-1.61,0-3.21,0a.78.78,0,0,1-.78-1A.76.76,0,0,1,2.16,8H5.39c.07,0,.18,0,.19-.11s0-.2-.17-.2H3.83a.77.77,0,0,1-.75-.6.79.79,0,0,1,.41-.91.89.89,0,0,1,.36-.07H5.4c.11,0,.18,0,.18-.15s-.07-.15-.18-.15H.83A.75.75,0,0,1,0,5.12a.76.76,0,0,1,.76-.93c1.5,0,3,0,4.51,0a.86.86,0,0,1,.16,0c.09,0,.13,0,.13-.14s0-.18-.12-.18H2.75a.81.81,0,0,1-.58-.17A.8.8,0,0,1,2,2.79a.71.71,0,0,1,.73-.49H5.35c.23,0,.23,0,.23-.23v-1a1,1,0,0,1,.94-1A3.59,3.59,0,0,1,7,0h9.9a2.16,2.16,0,0,1,.51.06,1,1,0,0,1,.75,1V11.51c0,.26-.09.36-.34.4H11.87Zm-6-7.41H.8a.46.46,0,0,0-.46.64c.07.22.23.31.53.31H11a.45.45,0,0,0,.41-.38.46.46,0,0,0-.5-.57ZM8.93,7.34H14a.46.46,0,0,0,.44-.59c-.05-.25-.21-.36-.51-.36H3.8a.45.45,0,0,0-.42.55c.05.28.21.4.53.4ZM7.78,2.61H2.69A.43.43,0,0,0,2.21,3a.46.46,0,0,0,.38.51H12.85a.47.47,0,0,0,.48-.5.46.46,0,0,0-.51-.45C11.14,2.62,9.46,2.61,7.78,2.61ZM7.25,8.27H2.17a.46.46,0,0,0-.43.23.49.49,0,0,0,0,.52.47.47,0,0,0,.45.21H12.39a.48.48,0,0,0-.1-1Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M13.84,13H19c.24,0,.24,0,.24-.24v-.1c0-3.16,0-6.31,0-9.47,0-.12,0-.24,0-.36a.65.65,0,0,1,.69-.67q1.62,0,3.24,0a2.77,2.77,0,0,1,2.41,1.27l2.09,3.1a2.94,2.94,0,0,1,.5,1.7v4.52c0,.23,0,.24.25.24l.51,0a.4.4,0,0,1,.48.43v.91a.32.32,0,0,1-.31.37,3.23,3.23,0,0,1-.53,0h-2c-.29,0-.32,0-.4-.3a2.78,2.78,0,0,0-2.3-2.15,2.88,2.88,0,0,0-3.33,2.19c-.06.22-.1.26-.33.26H15c-.23,0-.28,0-.33-.24a2.65,2.65,0,0,0-.81-1.42A.1.1,0,0,1,13.84,13Zm9.52-5.76c.69,0,1.37,0,2.06,0a.46.46,0,0,0,.46-.23c.11-.19,0-.34-.1-.48-.5-.72-1-1.44-1.51-2.17a.75.75,0,0,0-.66-.34H21.42a1.33,1.33,0,0,0-.28,0c-.23,0-.34.1-.35.33,0,.81,0,1.62,0,2.43,0,.32.16.42.49.42Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M23.35,13a2.17,2.17,0,1,1-2.17,2.16A2.15,2.15,0,0,1,23.35,13Zm-1.12,2.16a1.09,1.09,0,0,0,1.1,1.11,1.11,1.11,0,1,0,0-2.22A1.08,1.08,0,0,0,22.23,15.19Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M14,15.2A2.17,2.17,0,1,1,11.86,13,2.16,2.16,0,0,1,14,15.2Zm-2.16,1.1A1.1,1.1,0,0,0,13,15.18a1.11,1.11,0,1,0-1.11,1.12Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M9.86,13l-.25.29A2.78,2.78,0,0,0,9,14.62c0,.12-.09.14-.2.14l-1.58,0-1.9,0H5.14c-.4-.07-.44-.15-.43-.49s0-.59,0-.88A.31.31,0,0,1,5,13l.24,0,4.49,0Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M22.23,15.19a1.08,1.08,0,0,1,1.12-1.11,1.11,1.11,0,1,1,0,2.22A1.09,1.09,0,0,1,22.23,15.19Z' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M11.85,16.3a1.09,1.09,0,0,1-1.11-1.12,1.11,1.11,0,0,1,2.22,0A1.1,1.1,0,0,1,11.85,16.3Z' })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      className: 'mienphi-right'
                    },
                    'Mi\u1EC5n ph\xED v\u1EADn chuy\u1EC3n cho h\xF3a \u0111\u01A1n tr\xEAn 500.000 VN\u0110'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: { margin: 10 }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: {
                        width: '40%',
                        display: 'inline-block',
                        // borderRadius: '60%',
                        background: '#5CB247',
                        borderTopRightRadius: '2em',
                        borderBottomRightRadius: '2em',
                        borderTopLeftRadius: '2em',
                        borderBottomLeftRadius: '2em',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      },
                      onClick: () => {
                        let that = this;
                        if (false) {
                          let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
                          let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
                          // console.log(product)
                          let index = cart.findIndex(el => {
                            return el.slug === product.slug;
                          });
                          if (index >= 0) {
                            cart[index].number = parseInt(cart[index].number) + 1;
                            sessionStorage.setItem('cart', JSON.stringify(cart));
                          } else {
                            cart.push({
                              slug: product.slug,
                              number: 1,
                              product: product
                            });
                            sessionStorage.setItem('cart', JSON.stringify(cart));
                            // $(".cart-counter").text(cart.length)
                          }
                          // console.log(cart)
                          // $(".cart-counter").text(cart.length)
                          document.location.href = '/lien-he-dat-hang';
                        }
                      }
                    },
                    '\u0110\u1EB7t h\xE0ng'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: {
                        width: '40%',
                        borderTopRightRadius: '2em',
                        borderBottomRightRadius: '2em',
                        borderTopLeftRadius: '2em',
                        borderBottomLeftRadius: '2em',
                        display: 'inline-block',
                        border: '2px solid #5CB247',
                        color: '#5CB247',
                        marginLeft: 5
                      } },
                    'T\u01B0 v\u1EA5n'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrapper-text', style: { marginTop: 20 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: product.body } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno headpo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title' },
            'Kh\xE1ch h\xE0ng'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section prom' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_nuka_carousel___default.a,
              { autoplay: true, slidesToShow: 2, style: { margin: 20 },
                renderTopCenterControls: ({ currentSlide }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                renderCenterLeftControls: ({ previousSlide }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null),
                renderCenterRightControls: ({ nextSlide }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null)
              },
              product.coverUrl3.map((img, idx) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, key: idx });
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
          { appID: '1054383868055783' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "https://namduocquany.com/san-pham/" + product.slug, 'data-numposts': '5' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno headpo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title' },
            'S\u1EA3n ph\u1EA9m li\xEAn quan'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section prom' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-xs-4 col-6  element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img'
                      // onClick={() => {
                      //   this.forceUpdate()
                      // }}
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.name })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
                        el.name
                      )
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }
}



function numberWithCommas(x = 0) {
  return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });




class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    // console.log(this.props.slug)
    if (this.props.products.length < 0) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        '...'
      );
    } else {
      const products = this.props.products;
      const banchay = this.props.data.banchay.value.slice(0, 6);
      const khuyenmai = this.props.data.khuyenmai.value.slice(0, 6);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'bannerSub' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'slider-wrapper' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 28 } },
          mapCategory(this.props.slug)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            products.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { textAlign: 'center' } },
              'Hi\u1EC7n ch\u01B0a c\xF3 s\u1EA3n ph\u1EA9m n\xE0o'
            ),
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
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
          'h2',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 18 } },
          'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            banchay.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
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
          'h2',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 18 } },
          'S\u1EA2N PH\u1EA8M KHUY\u1EBEN M\xC3I'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            khuyenmai.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
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
          { appID: '1054383868055783' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "https://namduocquany.com/san-pham", 'data-numposts': '5' })
        )
      );
    }
  }
}



function mapCategory(slug) {
  console.log("slug!!");
  console.log(slug);
  switch (slug) {
    case 'ung-thu':
      return "Ung thư";
      break;
    case 'san-pham-bo-gan':
      return "Sản phẩm bổ gan";
      break;
    case 'duong-huyet-huyet-ap':
      return "Đường huyết - Huyết áp";
      break;
    case 'da-day':
      return "Dạ dày";
      break;
    case 'giam-can':
      return "Giảm cân";
      break;
    case 'lam-dep':
      return "Làm đẹp";
      break;
    case 'xuong-khop':
      return "Xương khớp";
      break;
    case 'bo-tong-hop':
      return "Bổ tổng hợp";
      break;
    case 'nano-curcumin':
      return "Nano Curcumin";
      break;
    case 'toi-den':
      return "Tỏi đen";
      break;
    default:
      return "Sản phẩm khác";
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(20);
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
// passport.use(new FacebookStrategy({
//   clientID: config.facebook.id,
//   clientSecret: config.facebook.secret,
//   callbackURL: '/login/facebook/return',
//   profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
//   passReqToCallback: true,
// }, (req, accessToken, refreshToken, profile, done) => {
//   /* eslint-disable no-underscore-dangle */
//   const loginName = 'facebook';
//   const claimType = 'urn:facebook:access_token';
//   const fooBar = async () => {
//     if (req.user) {
//       const userLogin = await UserLogin.findOne({
//         attributes: ['name', 'key'],
//         where: { name: loginName, key: profile.id },
//       });
//       if (userLogin) {
//         // There is already a Facebook account that belongs to you.
//         // Sign in with that account or delete it, then link it with your current account.
//         done();
//       } else {
//         const user = await User.create({
//           id: req.user.id,
//           email: profile._json.email,
//           logins: [
//             { name: loginName, key: profile.id },
//           ],
//           claims: [
//             { type: claimType, value: profile.id },
//           ],
//           profile: {
//             displayName: profile.displayName,
//             gender: profile._json.gender,
//             picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
//           },
//         }, {
//           include: [
//             { model: UserLogin, as: 'logins' },
//             { model: UserClaim, as: 'claims' },
//             { model: UserProfile, as: 'profile' },
//           ],
//         });
//         done(null, {
//           id: user.id,
//           email: user.email,
//         });
//       }
//     } else {
//       const users = await User.findAll({
//         attributes: ['id', 'email'],
//         where: { '$logins.name$': loginName, '$logins.key$': profile.id },
//         include: [
//           {
//             attributes: ['name', 'key'],
//             model: UserLogin,
//             as: 'logins',
//             required: true,
//           },
//         ],
//       });
//       if (users.length) {
//         done(null, users[0]);
//       } else {
//         let user = await User.findOne({ where: { email: profile._json.email } });
//         if (user) {
//           // There is already an account using this email address. Sign in to
//           // that account and link it with Facebook manually from Account Settings.
//           done(null);
//         } else {
//           user = await User.create({
//             email: profile._json.email,
//             emailConfirmed: true,
//             logins: [
//               { name: loginName, key: profile.id },
//             ],
//             claims: [
//               { type: claimType, value: accessToken },
//             ],
//             profile: {
//               displayName: profile.displayName,
//               gender: profile._json.gender,
//               picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
//             },
//           }, {
//             include: [
//               { model: UserLogin, as: 'logins' },
//               { model: UserClaim, as: 'claims' },
//               { model: UserProfile, as: 'profile' },
//             ],
//           });
//           done(null, {
//             id: user.id,
//             email: user.email,
//           });
//         }
//       }
//     }
//   };

//   fooBar().catch(done);
// }));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(143);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(7);
let autoIncrement = __webpack_require__(196);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(73);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

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
/* 74 */
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
  info: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.info
  }

});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(7);
var uniqueValidator = __webpack_require__(198);
var crypto = __webpack_require__(183);

var Schema = new mongoose.Schema({
  menu: { type: mongoose.Schema.Types.Mixed, default: '[]' },
  menuBottom: { type: mongoose.Schema.Types.Mixed, default: '[]' },
  fanpage: { type: mongoose.Schema.Types.Mixed },
  phone: { type: mongoose.Schema.Types.Mixed },
  diachi: { type: mongoose.Schema.Types.Mixed },
  email: { type: mongoose.Schema.Types.Mixed }
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(25);
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
    menuBottom: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    fanpage: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    phone: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    diachi: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    thanhtoan: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    email: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
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
  getOrders: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOrders
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  cart: { type: [Schema.Types.Mixed], default: [] },
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(25);
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
    cart: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_type_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(36);
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(36);
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(84);
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
  },

  getProductsByCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductsByCategory
  },

  productsInCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug2: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.productsInCategory
  },

  getNoiBat: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductsNoiBat
  },
  getBanChay: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductsBanChay
  },
  getKhuyenMai: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductsKhuyenMai
  }

});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  // category: String,
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  // public: {type: Boolean, default: false},
  category: { type: String, require: true, default: 'san-pham-khac' },
  unit: { type: String, require: true, default: 'hộp' },
  loai: { type: [String], require: true, default: [] },
  coverUrl: String,
  coverUrl2: { type: [String], defautl: [] },
  coverUrl3: { type: [String], defautl: [] },
  price: { type: Number, default: 0 },
  newPrice: { type: Number, default: 0 },
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

module.exports.getProductsByCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.find({ category: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.productsInCategory = (root, { slug2 }) => {
  console.log('slug2');
  console.log(slug2);
  return new Promise((resolve, reject) => {
    model.find({ category: slug2 }).exec((err, res) => {
      console.log('===============');
      console.log(res);
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProductsNoiBat = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({ loai: 'noi-bat' }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getProductsBanChay = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({ loai: 'ban-chay' }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getProductsKhuyenMai = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({ loai: 'khuyen-mai' }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(25);
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
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coverUrl: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coverUrl2: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    coverUrl3: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    category: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    unit: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    loai: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    price: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    newPrice: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    body: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    view: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    saleOff: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
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
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(25);
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
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(38);
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
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  }
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(197);
let autoIncrement = __webpack_require__(71);
var bcrypt = __webpack_require__(180);

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
/* 93 */
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
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(97);
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
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_news__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_image_queries__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_queries__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_queries__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_queries__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_order_queries__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_seo_queries__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_info_queries__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_setting_mutations__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_post_mutations__ = __webpack_require__(81);
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
let { getOneProduct, getProducts, getNoiBat, getKhuyenMai, getBanChay, getProductsByCategory, productsInCategory } = __WEBPACK_IMPORTED_MODULE_4__models_product_queries__["a" /* default */];
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
      info,
      getNoiBat,
      getKhuyenMai,
      getBanChay,
      getProductsByCategory,
      productsInCategory
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
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(211);
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
/* 97 */
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
/* 98 */
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
        }),
        productsInCategory: _extends({}, state.productsInCategory, {
          value: data.getProductsByCategory || []
        }),
        noibat: _extends({}, state.noibat, {
          value: data.getNoiBat || []
        }),
        khuyenmai: _extends({}, state.khuyenmai, {
          value: data.getKhuyenMai || []
        }),
        banchay: _extends({}, state.banchay, {
          value: data.getBanChay || []
        }),
        productsInCategory: _extends({}, state.productsInCategory, {
          value: data.productsInCategory || []
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(98);
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
/* 100 */
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
/* 101 */
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
/* 102 */
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
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);


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
      { locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Sider,
          {
            collapsible: true,
            breakpoint: 'lg',
            collapsedWidth: '0',
            collapsed: this.state.collapsed,
            onCollapse: this.onCollapse,
            width: '170'
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'logo' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'admin-topSlide' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'ADMIN'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"],
            { theme: 'dark',
              mode: this.state.mode,
              selectedKeys: [this.props.name],
              defaultOpenKeys: ['sub0', 'sub1', 'sub2']
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Dashboard' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Dashboard'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Seo' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/seo/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
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
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'S\u1EA3n ph\u1EA9m'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=add' },
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
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Tin t\u1EE9c'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=add' },
                  'Th\xEAm m\u1EDBi b\xE0i vi\u1EBFt'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=add2' },
                  'Th\xEAm m\u1EDBi m\xE3 khuy\u1EBFn m\xE3i'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'menutop' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/menu' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Menu Top'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'menubottom' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/menuBottom' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Menu Bottom'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'thongtin' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/thongtin' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\xF4ng tin'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/library' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\u01B0 vi\u1EC7n'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/menu' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Menu Ph\xEDa tr\xEAm'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/menuBottom' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Menu Ph\xEDa d\u01B0\u1EDBi'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/thongtin' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\xF4ng tin chung'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Setting' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/setting' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'C\xE0i \u0111\u1EB7t'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Logout' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/auth/logout' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    '\u0110\u0103ng xu\u1EA5t'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { style: { height: 47, background: 'white', padding: 0 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Content,
            { style: { margin: '0 5px' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"],
              { style: { margin: '12px 0' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                'Admin'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                this.state.name
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { background: '#fff', minHeight: 500 } },
              this.props.children
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Footer,
            { style: { textAlign: 'center' } },
            'Admin Page \xA9201 Created by L\u01B0u V\u0103n Lu\u1EADn'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(50);


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

class Coupon extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      url: '#'
    };
  }

  showModal(el) {
    this.setState({
      visible: true
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

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 24 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState({ url: newInput });
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            { type: 'primary', onClick: () => this.props.handleSelect(this.state) },
            'Th\xEAm link'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Coupon);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12, style: { padding: 15 } },
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
            image: this.state.imageRef
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'T\u1EF7 l\u1EC7 ph\xF3ng to (',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' } },
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
            defaultValue: 1
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'N\u1EC1n (Kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u1EA3nh):'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.background, onChange: e => {
                this.setState(prev => {
                  return {
                    prev,
                    background: e.target.value
                  };
                });
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'transparent' },
              'Trong su\u1ED1t'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'red' },
              'N\u1EC1n \u0111\u1ECF'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'blue' },
              'N\u1EC1n xanh da tr\u1EDDi'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'green' },
              'N\u1EC1n xanh l\xE1 c\xE2y'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'T\u1EF7 l\u1EC7:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.rate, onChange: value => {
                this.setState(prev => {
                  return {
                    prev,
                    rate: value.target.value
                  };
                });
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'keepOld' },
              'Nh\u01B0 \u1EA3nh c\u0169'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'custom' },
              'T\u1EF1 do'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '4-3' },
              '4/3'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '1-1' },
              '1/1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '3-4' },
              '3/4'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'Chi\u1EC1u d\xE0i:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            name: 'width',
            type: 'number',
            onChange: this.handleWidth,
            min: '50',
            max: '400',
            step: '10',
            value: this.state.width
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
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
            value: this.heightWithRate(this.state.width, this.state.height)
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'Quay \u1EA3nh:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateLeft },
              'Quay tr\xE1i'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateRight },
              'Quay ph\u1EA3i'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            '\u0110\xE8 \u1EA3nh c\u0169: '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.override, onChange: value => {
              this.setState(prev => {
                return _extends({}, prev, {
                  override: !prev.override
                });
              });
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"],
            { placement: 'right',
              onConfirm: this.handleSave,
              okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { type: 'primary' },
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
      height: this.props.height
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageEditor);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Table"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Thead"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tr"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                'Th\u1EDDi gian \u0111\u1EB7t h\xE0ng'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                'T\xEAn'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                '\u0110\u01A1n h\xE0ng'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                'T\u1ED5ng ti\u1EC1n'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Th"],
                null,
                '\u0110\u1ECBa ch\u1EC9'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tbody"],
            null,
            this.props.orders.map((el, key) => {
              let donhang = ``;
              let tongtien = 0;
              console.log(el);
              el.cart.forEach(el2 => {
                if (donhang.length > 0) {
                  donhang += ' | ';
                }
                donhang += `${el2.product.name} x ${el2.number}`;
                tongtien += el2.number * el2.product.newPrice;
              });
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Tr"],
                { key: key
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { style: { color: 'blue' } },
                      __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.created_at).format('LT')
                    ),
                    ', ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.created_at).format('L')
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.name
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    mobilecheck() && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { href: "tel:" + el.phone },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'phone' }),
                        el.phone
                      )
                    ),
                    !mobilecheck() && el.phone
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    donhang
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    tongtien.toLocaleString(),
                    ' \u0111'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
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
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { style: { color: 'blue' } },
      __WEBPACK_IMPORTED_MODULE_3_moment___default()(text).format('LT')
    ),
    ', ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'b',
      null,
      __WEBPACK_IMPORTED_MODULE_3_moment___default()(text).format('L')
    )
  )
}, {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text
  )
}, {
  title: 'Số điện thoại',
  dataIndex: 'phone',
  key: 'phone',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: "tel:" + text },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        null,
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
    null,
    text
  )
}, {
  title: 'Sản phẩm',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    mapProduct(record.product)
  )
}, {
  title: 'Địa chỉ',
  dataIndex: 'address',
  key: 'address',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
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
    return _asyncToGenerator(function* () {
      const { App, Dashboard } = yield __webpack_require__(13);

      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOrders{name, phone, address, cart, done, created_at} }'
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
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dashboard, { title: title, orders: data.getOrders })
        )
      };
    })();
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
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
var slug = __webpack_require__(212);
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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 800, margin: '10px auto' } });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditorComponent));

/***/ }),
/* 109 */
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
  children: [__webpack_require__(107).default, __webpack_require__(111).default, __webpack_require__(129).default, __webpack_require__(113).default, __webpack_require__(115).default, __webpack_require__(131).default,
  // require('./editor').default,
  __webpack_require__(122).default, __webpack_require__(118).default, __webpack_require__(125).default, __webpack_require__(127).default],
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
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageEditor__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
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





var Waypoint = __webpack_require__(50);



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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.showModal(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name + "?t=" + el.created_at })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
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
          className: 'img'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr'
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/" + this.state.selectedImage.name + this.state.vImg })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12,
              className: 'padding-5'
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'T\xEAn t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.name
            ),
            this.state.selectedImage.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Lo\u1EA1i t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.type
            ),
            this.state.selectedImage.created_at && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:'
              ),
              ' ',
              this.state.selectedImage.created_at
            ),
            !!this.state.selectedImage.fileSize && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Dung l\u01B0\u1EE3ng t\u1EC7p:'
              ),
              ' ',
              this.state.selectedImage.fileSize,
              ' KB'
            ),
            this.state.selectedImage.dimensions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'K\xEDch th\u01B0\u1EDBc:'
              ),
              ' ',
              this.state.selectedImage.dimensions.width,
              ' \xD7 ',
              this.state.selectedImage.dimensions.height
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Link :'
            ),
            ' ',
            this.state.copied ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'red' } },
              'Copied !"'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' } },
              "/image/" + this.state.selectedImage.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default.a,
                { text: "/image/" + this.state.selectedImage.name,
                  onCopy: () => {
                    this.setState({ copied: true });
                    setTimeout(() => {
                      this.setState({ copied: false });
                    }, 1000);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'primary' },
                  'Copy link \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"],
                { placement: 'right', title: text,
                  onConfirm: () => {
                    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/image/min/' + this.state.selectedImage.name, {}).then(res => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        '\u0110\xE3 gi\u1EA3m t\u1EEB ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'red' } },
                          Math.floor(res.data.oldSize).toLocaleString(),
                          ' kB'
                        ),
                        ' c\xF2n ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'blue' } },
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
                  okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  {
                    type: 'primary'
                  },
                  'Gi\u1EA3m ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
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
                  }
                },
                'Ch\u1EC9nh s\u1EEDa \u1EA3nh n\xE0y'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
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
                  okText: '\u0110\u1ED3ng \xFD x\xF3a', cancelText: 'H\u1EE7y' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'danger' },
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
          className: 'img'
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
          }
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
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
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Library, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(32);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'dd', id: 'domenu-0' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'dd-new-item' },
          '+'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'dd-item-blueprint' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'collapse', 'data-action': 'collapse', type: 'button', style: { display: 'none' } },
            '\u2013'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'expand', 'data-action': 'expand', type: 'button', style: { display: 'none' } },
            '+'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd-handle dd3-handle' },
            'Drag'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd3-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'item-name' },
              '[item_name]'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-button-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-add' },
                '+'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-remove', 'data-confirm-class': 'item-remove-confirm' },
                '\xD7'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-edit-box', style: { display: 'none' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'title', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'T\u1EF1a \u0111\u1EC1 menu!', 'data-default-value': 'T\u1EF1a \u0111\u1EC1' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'url', id: 'url', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'Link web', 'data-default-value': '/' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'i',
                { className: 'end-edit' },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ol', { className: 'dd-list' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { type: 'primary',
          onClick: this.updateMenu
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
/* 113 */
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



const title = 'Menu Builder';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menu',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Menu } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(32);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class MenuBottom extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.updateMenu = () => {
      let menu = window.domenu.toJson();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/menuBottom/new', { menuBottom: menu }).then(res => {
        // console.log(res.data)
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
      const menu = yield __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/menuBottom/get');
      window.domenu = $('#domenu-0').domenu({
        maxDepth: 1,
        data: menu.data
      }).parseJson();
    })();
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'dd', id: 'domenu-0' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'dd-new-item' },
          '+'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'dd-item-blueprint' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'collapse', 'data-action': 'collapse', type: 'button', style: { display: 'none' } },
            '\u2013'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'expand', 'data-action': 'expand', type: 'button', style: { display: 'none' } },
            '+'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd-handle dd3-handle' },
            'Drag'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dd3-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'item-name' },
              '[item_name]'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-button-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-add' },
                '+'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'item-remove', 'data-confirm-class': 'item-remove-confirm' },
                '\xD7'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dd-edit-box', style: { display: 'none' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'title', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'T\u1EF1a \u0111\u1EC1 menu!', 'data-default-value': 'T\u1EF1a \u0111\u1EC1' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'url', id: 'url', autoComplete: 'off', placeholder: 'Item', 'data-placeholder': 'Link web', 'data-default-value': '/' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'i',
                { className: 'end-edit' },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ol', { className: 'dd-list' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { type: 'primary',
          onClick: this.updateMenu
        },
        'C\u1EADp nh\u1EADp'
      )
    );
  }
}

MenuBottom.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MenuBottom);

/***/ }),
/* 115 */
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



const title = 'Menu Builder';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menuBottom',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, MenuBottom } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuBottom, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(28);
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
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
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
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mon-ngon-tu-com' },
                      'M\xF3n ngon t\u1EEB c\u1ED1m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'cach-lam-mon-ngon-tai-nha' },
                      'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
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
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
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
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
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
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
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
                    }
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
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
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
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
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
    null,
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
    null,
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/monngon?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 118 */
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



const title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action({ query }) {
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
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListFoods, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'edit', isEdit: true, slug: query.slug })
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(28);
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
    if (post.coverUrl) {
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
        __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
        __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
          pathname: '/admin/news',
          search: '?v=edit&slug=' + res.data.slug
        });
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert("Chưa có ảnh đại diện");
    }
  }

  updateNews(post) {
    if (post.coverUrl) {
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
        __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
      });
    } else {
      alert("Chưa có ảnh đại diện");
    }
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    alert("ok");
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'su-kien' },
                      'S\u1EF1 ki\u1EC7n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'tin-tuc-tong-hop' },
                      'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-aeonshop' },
                      'M\xE3 gi\u1EA3m gi\xE1 Aeonshop'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-alotrip' },
                      'M\xE3 gi\u1EA3m gi\xE1 Alotrip'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-fptshop' },
                      'M\xE3 gi\u1EA3m gi\xE1 FPT Shop'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-ivivu' },
                      'M\xE3 gi\u1EA3m gi\xE1 IVIVU'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-lazada' },
                      'M\xE3 gi\u1EA3m gi\xE1 Lazada'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-leflair' },
                      'M\xE3 gi\u1EA3m gi\xE1 Leflair'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-Lotte' },
                      'M\xE3 gi\u1EA3m gi\xE1 Lotte'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-shopee' },
                      'M\xE3 gi\u1EA3m gi\xE1 Shopee'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-tiki' },
                      'M\xE3 gi\u1EA3m gi\xE1 Tiki'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-viettralvel' },
                      'M\xE3 gi\u1EA3m gi\xE1 VietTravel'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vinabook' },
                      'M\xE3 gi\u1EA3m gi\xE1 VinaBook'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vntrip' },
                      'M\xE3 gi\u1EA3m gi\xE1 VnTrip'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vuivui' },
                      'M\xE3 gi\u1EA3m gi\xE1 VuiVui'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-yes24' },
                      'M\xE3 gi\u1EA3m gi\xE1 Yes24'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
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
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
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
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
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
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
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
                    }
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
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
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
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(28);
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
    if (post.coverUrl) {
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
        __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
        __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
          pathname: '/admin/news',
          search: '?v=edit&slug=' + res.data.slug
        });
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert("Chưa có ảnh đại diện");
    }
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
        null,
        'loading...'
      );
    }

    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Danh m\u1EE5c:'
                    )
                  ),
                  !this.props.km && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'su-kien' },
                      'S\u1EF1 ki\u1EC7n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'tin-tuc-tong-hop' },
                      'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                    )
                  ),
                  this.props.km && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-aeonshop' },
                      'M\xE3 gi\u1EA3m gi\xE1 Aeonshop'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-alotrip' },
                      'M\xE3 gi\u1EA3m gi\xE1 Alotrip'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-fptshop' },
                      'M\xE3 gi\u1EA3m gi\xE1 FPT Shop'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-ivivu' },
                      'M\xE3 gi\u1EA3m gi\xE1 IVIVU'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-lazada' },
                      'M\xE3 gi\u1EA3m gi\xE1 Lazada'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-leflair' },
                      'M\xE3 gi\u1EA3m gi\xE1 Leflair'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-Lotte' },
                      'M\xE3 gi\u1EA3m gi\xE1 Lotte'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-shopee' },
                      'M\xE3 gi\u1EA3m gi\xE1 Shopee'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-tiki' },
                      'M\xE3 gi\u1EA3m gi\xE1 Tiki'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-viettralvel' },
                      'M\xE3 gi\u1EA3m gi\xE1 VietTravel'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vinabook' },
                      'M\xE3 gi\u1EA3m gi\xE1 VinaBook'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vntrip' },
                      'M\xE3 gi\u1EA3m gi\xE1 VnTrip'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-vuivui' },
                      'M\xE3 gi\u1EA3m gi\xE1 VuiVui'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mgg-yes24' },
                      'M\xE3 gi\u1EA3m gi\xE1 Yes24'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
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
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
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
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
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
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
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
                    }
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
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
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
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
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
    null,
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
    null,
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/news?v=edit&slug=" + record.slug },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_antd__["Button"],
        { type: 'primary' },
        'S\u1EEDa'
      )
    ),
    '- | -',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_antd__["Button"],
        { type: 'primary',
          onClick: () => {
            __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/api/post/delete', { slug: record.slug }).then(function (response) {
              location.reload();
            }).catch(function (error) {});
          }
        },
        'X\xF3a'
      )
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 122 */
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



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditNews, ListNews, EditKhuyenMai } = yield __webpack_require__(13);
      let component = {};

      console.log(query);

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListNews, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false, km: false })
        );
      } else if (query.v === 'add2') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false, km: true })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'edit', isEdit: true, slug: query.slug })
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
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(28);
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
        tags: [],
        coverUrl2: [],
        coverUrl3: []
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
          query: '{ getOneProduct(slug: "' + slug + '"){category, unit, loai, name, slug, price, newPrice, coverUrl, coverUrl2, coverUrl3, description, saleOff, body, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      console.log(data);
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

  handleCoverUpload2(img) {
    let coverUrl2 = this.state.data.coverUrl2;
    coverUrl2.push('/image/' + img.name);
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl2: coverUrl2
        })
      });
    });
  }
  handleCoverUpload3(img) {
    let coverUrl3 = this.state.data.coverUrl3;
    coverUrl3.push('/image/' + img.name);
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl3: coverUrl3
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
    } else if (this.state.selectImageType === 'cover2') {
      let coverUrl2 = this.state.data.coverUrl2;
      coverUrl2.push('/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl2: coverUrl2
          })
        });
      });
    } else if (this.state.selectImageType === 'cover3') {
      let coverUrl3 = this.state.data.coverUrl3;
      coverUrl3.push('/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl3: coverUrl3
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
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateProduct(this.state.data);
              }
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
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Danh m\u1EE5c: '
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Select"]
                    // mode="multiple"
                    ,
                    { placeholder: 'ch\u1ECDn danh m\u1EE5c',
                      defaultValue: this.state.data.category,
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      },
                      style: { width: '100%' }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'ung-thu' },
                      'Ung th\u01B0'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'san-pham-bo-gan' },
                      'S\u1EA3n ph\u1EA9m b\u1ED5 gan'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'duong-huyet-huyet-ap' },
                      '\u0110\u01B0\u1EDDng huy\u1EBFt - Huy\u1EBFt \xE1p'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'da-day' },
                      'D\u1EA1 d\xE0y'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'giam-can' },
                      'Gi\u1EA3m c\xE2n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'lam-dep' },
                      'L\xE0m \u0111\u1EB9p'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'xuong-khop' },
                      'X\u01B0\u01A1ng kh\u1EDBp'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'bo-tong-hop' },
                      'B\u1ED5 t\u1ED5ng h\u1EE3p'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'nano-curcumin' },
                      'Nano Curcumin'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'toi-den' },
                      'T\u1ECFi \u0111en'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'san-pham-khac' },
                      'S\u1EA3n ph\u1EA9m kh\xE1c'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Quy c\xE1ch: '
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Quy c\xE1ch',
                    value: this.state.data.unit,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            unit: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Lo\u1EA1i: '
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Select"],
                    {
                      mode: 'multiple',
                      placeholder: 'Ch\u1ECDn lo\u1EA1i',
                      defaultValue: this.state.data.loai,
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              loai: value
                            })
                          });
                        });
                      },
                      style: { width: '100%' }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'noi-bat' },
                      'N\u1ED5i b\u1EADt'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'ban-chay' },
                      'B\xE1n ch\u1EA1y'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { key: 'khuyen-mai' },
                      'Khuy\u1EBFn m\u1EA1i'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                    { sm: 12, className: 'padding-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        'Gi\xE1 c\u0169:'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
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
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                    { sm: 12, className: 'padding-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        'Gi\xE1 m\u1EDBi:'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["InputNumber"], {
                      defaultValue: this.state.data.newPrice || 0,
                      min: 0,
                      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                      parser: value => value.replace(/(,*)/g, ''),
                      style: { minWidth: 200 },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              newPrice: parseInt(value)
                            })
                          });
                        });
                      }
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
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
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                    { sm: 12, className: 'padding-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        '\u1EA2nh kh\xE1ch h\xE0ng:'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                      isMultiple: false,
                      handleUpload: img => this.handleCoverUpload3(img)
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                      { style: { marginRight: 10 },
                        onClick: () => this.showModalSelectImage('cover3')
                      },
                      'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                    { sm: 12, className: 'padding-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { marginBottom: 16 } },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        (this.state.data.coverUrl3 || []).map((el, idx) => {
                          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: idx, src: el, style: { height: 70, width: 'auto', margin: 5 },
                            onClick: () => {

                              let coverUrl3 = this.state.data.coverUrl3;
                              coverUrl3.splice(idx, 1);
                              this.setState(prevState => {
                                return _extends({}, prevState, {
                                  data: _extends({}, prevState.data, {
                                    coverUrl3: coverUrl3
                                  })
                                });
                              });
                            }
                          });
                        })
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
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
                    }
                  },
                  'X\xF3a \u1EA3nh '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { sm: 12, className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh kh\xE1c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload2(img)
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                    { style: { marginRight: 10 },
                      onClick: () => this.showModalSelectImage('cover2')
                    },
                    'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { sm: 12, className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      (this.state.data.coverUrl2 || []).map((el, idx) => {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: idx, src: el, style: { height: 70, width: 'auto', margin: 5 },
                          onClick: () => {

                            let coverUrl2 = this.state.data.coverUrl2;
                            coverUrl2.splice(idx, 1);
                            this.setState(prevState => {
                              return _extends({}, prevState, {
                                data: _extends({}, prevState.data, {
                                  coverUrl2: coverUrl2
                                })
                              });
                            });
                          }
                        });
                      })
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
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
                    }
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
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
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
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
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
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Giá sản phẩm',
  dataIndex: 'price',
  key: 'price',
  render: price => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    price
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/product?v=edit&slug=" + record.slug },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_antd__["Button"],
        { type: 'primary' },
        'S\u1EEDa'
      )
    ),
    '- | -',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_antd__["Button"],
        { type: 'primary',
          onClick: () => {
            __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/api/product/delete', { slug: record.slug }).then(function (response) {
              location.reload();
            }).catch(function (error) {});
          }
        },
        'X\xF3a'
      )
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 125 */
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



const title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action({ query }) {
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
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListProduct, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'edit', isEdit: true, slug: query.slug })
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
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
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
            }
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
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
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
          }
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
          onOk: () => this.handleOkSEO()
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'URL: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
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
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'T\u1EF1a \u0111\u1EC1: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
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
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.description.length >= 140 && this.state.selectSEO.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' } },
                this.state.selectSEO.description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' } },
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
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'T\u1EF1a \u0111\u1EC1 (OG): '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
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
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              '\u1EA2nh \u0111\u1EA1i di\u1EC7n (OG):'
            )
          ),
          !this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__["a" /* default */], {
            isMultiple: false,
            handleUpload: img => this.handleCoverUpload(img)
          }),
          this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { width: 180, height: 150 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
              {
                bordered: false, className: 'imgWr',
                onClick: () => this.showModalSelectImage('cover')
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.selectSEO.og_image })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('cover')
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
            }
          },
          'X\xF3a \u1EA3nh '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16, marginTop: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.og_description.length >= 140 && this.state.selectSEO.og_description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' } },
                this.state.selectSEO.og_description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' } },
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
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
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
    null,
    url
  )
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: title => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
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
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
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
    return _asyncToGenerator(function* () {
      const { App, Seo } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Seo, { title: title })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(32);
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
      null,
      this.state.setting.ssr !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'SSR: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.setting.ssr, onChange: () => this.toggleSSR() })
      ),
      this.state.setting.adminId !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.adminId, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  adminId: value
                })
              });
            });
          } })
      ),
      this.state.setting.emailAdmin !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.emailAdmin, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  emailAdmin: value
                })
              });
            });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'STYLESHEETS', key: '1' },
          this.state.setting.css !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.css, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    css: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript đầu trang', key: '2' },
          this.state.setting.scriptTop !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptTop, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptTop: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript cuối trang', key: '3' },
          this.state.setting.scriptBottom !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptBottom, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptBottom: value
                  })
                });
              })
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            size: 'large',
            type: 'primary',
            onClick: () => {
              this.updateSetting(this.state.setting);
            }
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
/* 129 */
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



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Setting } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(32);
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
        email: that.state.email
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
        email: thongtin.data.email || '',
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
        null,
        'Loading ...'
      );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'fanpage: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.fanpage, onChange: e => {
            let value = e.target.value;
            this.setState({ fanpage: value });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Hotline: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.phone, onChange: e => {
            let value = e.target.value;
            this.setState({ phone: value });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          '\u0110\u1ECBa ch\u1EC9: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.diachi, onChange: e => {
            let value = e.target.value;
            this.setState({ diachi: value });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Email: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.email, onChange: e => {
            let value = e.target.value;
            this.setState({ email: value });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { type: 'primary',
          onClick: this.updateMenu
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
/* 131 */
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



const title = 'Thông tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/thongtin',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, ThongTin } = yield __webpack_require__(13);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ThongTin, { title: title })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__["a" /* default */], { post: this.props.post }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/bai-viet/:slug',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      var post;
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getOnePost(slug: "' + params.slug + '"){title,slug,body,category, description}}'
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
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { post: store.getState().data.post.value })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Aside__ = __webpack_require__(15);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'colContent' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'headno' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h1',
                  { className: 'title text-uppercase' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory' },
                    'C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'panel-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'panel' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { 'data-toggle': 'collapse', href: '#collapse1' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'panel-heading' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h2',
                          { className: 'panel-title' },
                          'C\xE2u h\u1ECFi'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { id: 'collapse1', className: 'panel-collapse collapse' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'panel-body' },
                        '\u0110ang c\u1EADp nh\u1EADp'
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Aside__["a" /* default */], null)
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Modal, null)
      )
    );
  }
}

const Modal = () => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal' },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title' },
            'Modal Header'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-body' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' } },
              '0973.318.868'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-footer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/san-pham', className: 'btn btn-primary' },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
            '\u0110\xF3ng c\u1EEDa s\u1ED5'
          )
        )
      )
    )
  );
};

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/cau-hoi-thuong-gap',
  action({ store, query, path }) {
    return _asyncToGenerator(function* () {
      let seo = {};
      if (true) {
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
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
      }

      return {
        title: seo.title || 'Câu hỏi thuờng gặp',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp })
        )
      };
    })();
  }

});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__["a" /* default */], { posts: this.props.posts, title: this.props.title }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/category/:slug',
  action({ store, params, query, path }) {
    return _asyncToGenerator(function* () {
      let page = query.p || 1;
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getNewsInCategory(page:' + page + ', slug: "' + params.slug + '" ){page,totalPage,data{title, category, slug, coverUrl, description}}}'
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
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.newsInCategory.value, title: mapSlugToName(params.slug) })
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(15);
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
    console.log(this.props.slug);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__["a" /* default */], { slug: this.props.slug, products: this.props.products, data: this.props.data }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__["a" /* default */], { banchay: true, data: this.props.data.banchay.value.slice(0, 3) })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danh-muc/:slug2',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      let seo = {};
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
        // console.log("params.slug")
        // console.log(params.slug2)
        let productsInCategory = 'productsInCategory(slug2: "' + params.slug2 + '"){name, price, slug, coverUrl, description, saleOff, body, created_at}';
        let khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        let banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + productsInCategory + khuyenmai + banchay + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description} }'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        // console.log('data')
        // console.log(data)
        seo = data.seo || {};
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Danh mục sản phẩm',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { slug: params.slug2, data: store.getState().data, products: store.getState().data.productsInCategory.value })
        )
      };
    })();
  }

});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
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
    if (false) {
      const { error } = this.props;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          error.name
        ),
        React.createElement(
          'p',
          null,
          error.message
        ),
        React.createElement(
          'pre',
          null,
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
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
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_progressive_image__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_progressive_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_progressive_image__);








// import IronImage from 'react-image-lazy-load-component';


class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'banner-top', className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'left col-md-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  style: {
                    border: '2px solid #ddd',
                    height: '100%'
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'header',
                    style: { backgroundColor: '#5CB247', textAlign: 'center', color: 'white', textWeight: 'bold' }
                  },
                  'DANH M\u1EE4C S\u1EA2N PH\u1EA8M'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { id: 'mainMenu', style: { height: 290,
                      padding: 3,
                      listStyle: 'none'
                    } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'ungthu linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/ung-thu' },
                      'Ung th\u01B0'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'bogan linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/san-pham-bo-gan' },
                      'S\u1EA3n ph\u1EA9m b\u1ED5 gan'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'duonghuyet linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/duong-huyet-huyet-ap' },
                      '\u0110\u01B0\u1EDDng huy\u1EBFt - Huy\u1EBFt \xE1p'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'daday linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/da-day' },
                      'D\u1EA1 d\xE0y'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'giamcan linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/giam-can' },
                      'Gi\u1EA3m c\xE2n'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'lamdep linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/lam-dep' },
                      'L\xE0m \u0111\u1EB9p'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'xuongkhop linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/xuong-khop' },
                      'X\u01B0\u01A1ng kh\u1EDBp'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'botonghop linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/bo-tong-hop' },
                      'B\u1ED5 t\u1ED5ng h\u1EE3p'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nano linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/nano-curcumin' },
                      'Nano Curcumin'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'toiden linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/toi-den' },
                      'T\u1ECFi \u0111en'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'sanphamkhac linkMenuWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                      { to: '/danh-muc/san-pham-khac' },
                      'S\u1EA3n ph\u1EA9m kh\xE1c'
                    ),
                    ' '
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'right col-md-9' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_react_progressive_image___default.a,
                { src: '/assets/banner.jpg', placeholder: 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?&container=focus&resize_w=21&url=https://namduocquany.com/assets/banner.jpg' },
                src => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src, alt: 'an image' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__["a" /* default */], { data: this.props.data }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], { data: this.props.data })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action({ store, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
        let noibat = 'getNoiBat{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        let khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        let banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + noibat + khuyenmai + banchay + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at}, getNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}}, getFoodNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}} }'
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
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data })
        )
      };
    })();
  }

});

/***/ }),
/* 143 */
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
  children: [__webpack_require__(142).default, __webpack_require__(149).default, __webpack_require__(153).default, __webpack_require__(139).default,
  // require('./landingpage').default,
  __webpack_require__(145).default, __webpack_require__(135).default, __webpack_require__(137).default, __webpack_require__(155).default, __webpack_require__(133).default,
  // require('./contact').default,
  __webpack_require__(147).default,
  // require('./register').default,
  // require('./about').default,
  // require('./privacy').default,
  __webpack_require__(109).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(151).default],

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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        address: ''
      },
      cart: []
    };
    this.order = this.order.bind(this);
  }

  componentDidMount() {
    let that = this;
    if (false) {
      console.log('browser');
      let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
      that.setState({ cart: cart });
    }
  }

  order() {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/order/new', this.state).then(res => {
      $('#myModal').modal({
        show: true
      });
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    let sum = 0;
    this.state.cart.forEach(el => {
      sum += el.number * el.product.newPrice;
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-12' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'table',
                { className: 'dathang' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'thead',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      null,
                      'S\u1EA3n ph\u1EA9m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      null,
                      'Gi\xE1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      null,
                      'S\u1ED1 l\u01B0\u1EE3ng'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      null,
                      'Th\xE0nh ti\u1EC1n'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  { style: { fontSize: '18' } },
                  this.state.cart.map((el, idx) => {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      { key: idx },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: '', style: { padding: 10 } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'dt-img', src: el.product.coverUrl, alt: '',
                            style: { height: 80, width: 'auto' }
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'dt-name', style: { paddingLeft: 20 } },
                            el.product.name
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'dt-price' },
                          ' ',
                          el.product.newPrice.toLocaleString(),
                          ' VN\u0110 '
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number',
                          className: 'dt-numberWr',
                          defaultValue: el.number,
                          onChange: event => {
                            let value = event.target.value;
                            let that = this;
                            if (value > 0) {
                              if (false) {
                                let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
                                let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
                                let index = idx;
                                if (index >= 0) {
                                  cart[index].number = value;
                                  sessionStorage.setItem('cart', JSON.stringify(cart));
                                  $(".cart-counter").text(cart.length);
                                } else {
                                  cart.push({
                                    slug: that.state.product.slug,
                                    number: value,
                                    product: that.state.product
                                  });
                                  sessionStorage.setItem('cart', JSON.stringify(cart));
                                }
                                // $(".cart-counter").text(cart.length)
                                this.setState({ cart: cart });
                              }
                            }
                          }
                        })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { style: { color: '#5CB247', fontWeight: 'bold' } },
                        (el.product.newPrice * el.number).toLocaleString(),
                        ' VN\u0110'
                      )
                    );
                  })
                ),
                this.state.cart.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tfoot',
                  { style: { marginTop: 20 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                          style: { margin: 10 }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          {
                            style: {
                              // width: '100%',
                              display: 'inline-block',
                              // borderRadius: '60%',
                              background: '#5CB247',
                              padding: '5px 20px',
                              borderTopRightRadius: '1.5em',
                              borderBottomRightRadius: '1.5em',
                              borderTopLeftRadius: '1.5em',
                              borderBottomLeftRadius: '1.5em',
                              color: 'white',
                              fontWeight: 'bold',
                              cursor: 'pointer'
                            },
                            href: '/',
                            to: '/'
                          },
                          'Mua th\xEAm'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { style: { textAlign: 'right', paddingRight: 20, fontSize: 22 } },
                      'T\u1ED5ng ti\u1EC1n :'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { style: { fontSize: 22, fontWeight: 'bold', color: '#5CB247' } },
                      sum.toLocaleString(),
                      ' VN\u0110'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', style: { margin: '10px 0 0 0', fontSize: 20, border: '1px solid #ddd', borderRadius: 10, padding: 20 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6', style: { padding: 0 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-horizontal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'fieldset',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'legend',
                    { style: { color: '#5CB247', fontWeight: 'bold' } },
                    'Th\xF4ng tin \u0111\u1EB7t h\xE0ng'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_id' },
                      'H\u1ECD V\xE0 T\xEAn:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
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
                        }
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_name' },
                      'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
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
                        }
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_description' },
                      '\u0110\u1ECBa ch\u1EC9:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
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
                        }
                      })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'col-md-4 control-label', htmlFor: 'singlebutton' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        {
                          style: {
                            display: 'inline-block',
                            background: '#5CB247',
                            padding: '5px 20px',
                            borderTopRightRadius: '1em',
                            borderBottomRightRadius: '1em',
                            borderTopLeftRadius: '1em',
                            borderBottomLeftRadius: '1em',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          },
                          onClick: this.order
                        },
                        '\u0110\u1EB7t h\xE0ng'
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { style: { color: '#5CB247', fontWeight: 'bold', borderBottom: '1px solid #ddd', marginBottom: 5 } },
                'Li\xEAn h\u1EC7'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { width: 60 } },
                'Hotline:'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                { style: { color: 'red' } },
                '0915.055.951'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                '\u0110\u1ECBa ch\u1EC9 : 27 \u2013 Hu\u1EF3nh Th\xFAc Kh\xE1ng \u2013 Qu\u1EADn \u0110\u1ED1ng \u0110a \u2013 H\xE0 N\u1ED9i'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Modal, null)
      )
    );
  }
}

const Modal = () => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal' },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title' },
            'Modal Header'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-body' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' } },
              '0973.318.868'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-footer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/', className: 'btn btn-primary' },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal', style: { background: '#5CB247 !impotant' } },
            '\u0110\xF3ng c\u1EEDa s\u1ED5'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/lien-he-dat-hang',
  action({ store, query, path }) {
    return _asyncToGenerator(function* () {
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
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
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp })
        )
      };
    })();
  }

});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
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
      { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.root },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.container, style: { paddingTop: 50 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lineThrough },
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
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ui stacked segment' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'user icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'E-mail', id: 'username', name: 'username' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'lock icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', placeholder: 'M\u1EADt kh\u1EA9u', id: 'password', name: 'password' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'submit', className: 'ui fluid large teal submit button',
                onClick: () => {
                  console.log('on click !');
                }
              },
              '\u0110\u0103ng nh\u1EADp'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui error message' })
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
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
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
    let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    let user = store.getState().user;
    if (user && user.username) {
      return { redirect: '/' };
    }
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Login__["a" /* default */], { title: title })
    };
  }

});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(15);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Main2__["a" /* default */], { posts: this.props.posts }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/mon-ngon',
  action({ store, query, path }) {
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
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.foodNews.value })
        )
      };
    })();
  }

});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
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
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
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
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
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
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__["a" /* default */], { product: this.props.product, products: this.props.products }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], { banchay: true, data: this.props.banchay.slice(0, 3) })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham/:slug',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
        let noibat = 'getNoiBat{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        let khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        let banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{' + banchay + info + ' seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at},getOneProduct(slug: "' + params.slug + '"){name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at, unit} }'
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
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { banchay: store.getState().data.banchay.value, product: store.getState().data.product.value, products: store.getState().data.products.value })
        )
      };
    })();
  }

});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(19);
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
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__["a" /* default */], { news: this.props.news }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/tin-tuc',
  action({ store, query, path }) {
    return _asyncToGenerator(function* () {
      let page = 1;
      let seo = {};
      let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}';
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
            query: '{' + info + 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getNews(page:' + page + ' ){page,totalPage,data{title, slug, coverUrl, description}}}'
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
          { data: store.getState().data },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data, news: store.getState().data.news.value })
        )
      };
    })();
  }

});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = __webpack_require__(27);
var router = express.Router();
const mongoose = __webpack_require__(7);
const Post = mongoose.model('Post');
const Setting = mongoose.model('Setting');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const Seo = mongoose.model('Seo');
const Info = mongoose.model('Info');
let bodyParser = __webpack_require__(43);
let Mailer = __webpack_require__(159);
let axios = __webpack_require__(5);
// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),

router.post('/menuBottom/new', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Info.update({ key: "info" }, { $set: { menuBottom: req.body.menuBottom } }, { upsert: true }, function (err) {
    if (err) {
      console.log(err);
      return res.status(400).end();
    }
    return res.send('ok');
  });
});

router.get('/menuBottom/get', (req, res) => {
  Info.findOne({ key: "info" }, (err, data) => {
    if (err) return res.json({});
    if (!data.menu) return res.json({});
    return res.json(data.menuBottom);
  });
});

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
  console.log(req.body);
  Info.update({}, { $set: {
      phone: req.body.phone,
      fanpage: req.body.fanpage,
      diachi: req.body.diachi,
      email: req.body.email
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

router.post('/product/delete', bodyParser.json(), (req, res) => {
  Product.remove({ slug: req.body.slug }, () => {
    res.send('ok');
  });
});

router.post('/post/delete', bodyParser.json(), (req, res) => {
  Post.remove({ slug: req.body.slug }, () => {
    res.send('ok');
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
    // console.log(req.body)
    let order = {
      name: req.body.data.name,
      phone: req.body.data.phone,
      address: req.body.data.address,
      cart: req.body.cart
    };
    Order.create(order, function (err, resData) {
      if (err) return res.sendStatus(400);
      let donhang = ``;
      let tongtien = 0;
      order.cart.forEach(function (el) {
        donhang += `
            Tên sản phẩm: ${el.product.name}
            Số lượng: ${el.number}
      `;
        tongtien += el.number * el.product.newPrice;
      });
      axios.post("https://api.pushover.net/1/messages.json", {
        token: "auhi99puv38qt542o49gpca4nijnp4",
        user: "urjjxg4efo6grfikn65gpqcgqv5nr2",
        title: "namduocquany.com",
        message: `
        Họ tên: ${resData.name}
        SDT: ${resData.phone}
        Địa chỉ: ${resData.address}
        Tổng tiền: ${tongtien.toLocaleString()}
        Chi tiết đơn hàng: 
        ${donhang}
        `
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();

let mongoose = __webpack_require__(7);
const User = mongoose.model('User');
// const Token = mongoose.model('Token')
// const Session = mongoose.model('Session')

let passport = __webpack_require__(47);
let FacebookStrategy = __webpack_require__(48).Strategy;
let GoogleStrategy = __webpack_require__(201).OAuth2Strategy;
let LocalStrategy = __webpack_require__(202).Strategy;

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("strategy function starting...");
  if (username === "admin" && password === "admin@123") {
    console.log('admin');
    User.findOne({}, function (err, user) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(user);
      return done(null, user[0]);
    });
  } else {
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
      if (password === 'admin@123') {
        return done(null, user[0]);
      } else {
        return done(null, false, { message: "Invalid password" });
      }
    });
  }
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const path = __webpack_require__(31);
const fs = __webpack_require__(44);
var request = __webpack_require__(209);
var Gm = __webpack_require__(45);
var utf8 = __webpack_require__(213);
var iconv = __webpack_require__(189);
const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

const imagemin = __webpack_require__(191);
const imageminJpegtran = __webpack_require__(192);
const imageminPngquant = __webpack_require__(193);

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var api_key = 'key-4639e67edf2df3a4c479a605e8376b9b';
var domain = 'edu.anabim.com';
var mailgun = __webpack_require__(195)({ apiKey: api_key, domain: domain });

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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const fileUpload = __webpack_require__(184);
const path = __webpack_require__(31);
var sizeOf = __webpack_require__(190);
var fs = __webpack_require__(44);
var Gm = __webpack_require__(45);
//mongodb

const mongoose = __webpack_require__(7);
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
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(163);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
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
/* 162 */
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
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* unused harmony export default */


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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "._3Vk6J{padding-left:20px;padding-right:20px}._2IZbL{margin:0 auto;padding:0 0 40px;max-width:380px}._25ZSA{font-size:1.25em}.uHfQ-{margin-bottom:15px}.Mf2-c{display:inline-block;margin-bottom:5px;max-width:100%;font-weight:700}.HfRjv{display:block;box-sizing:border-box;padding:10px 16px;width:100%;height:46px;outline:0;border:1px solid #ccc;border-radius:0;background:#fff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.HfRjv:focus{border-color:#0074c2;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6)}._2JhAE{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;border:1px solid #373277;border-radius:0;background:#373277;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer}._2JhAE:hover{background:rgba(54,50,119,.8)}._2JhAE:focus{border-color:#0074c2;box-shadow:0 0 8px rgba(0,116,194,.6)}.QGMxt{border-color:#3b5998;background:#3b5998}.QGMxt:hover{background:#2d4373}._17cIx{border-color:#dd4b39;background:#dd4b39}._17cIx:hover{background:#c23321}._21gEV{border-color:#55acee;background:#55acee}._21gEV:hover{background:#2795e9}._2Dc1q{display:inline-block;margin:-2px 12px -2px 0;width:20px;height:20px;vertical-align:middle;fill:currentColor}._2wlls{position:relative;z-index:1;display:block;margin-bottom:15px;width:100%;color:#757575;text-align:center;font-size:80%}._2wlls:before{position:absolute;top:50%;left:50%;z-index:-1;margin-top:-5px;margin-left:-20px;width:40px;height:10px;background-color:#fff;content:\"\"}._2wlls:after{position:absolute;top:49%;z-index:-2;display:block;width:100%;border-bottom:1px solid #ddd;content:\"\"}", ""]);

// exports
exports.locals = {
	"root": "_3Vk6J",
	"container": "_2IZbL",
	"lead": "_25ZSA",
	"formGroup": "uHfQ-",
	"label": "Mf2-c",
	"input": "HfRjv",
	"button": "_2JhAE",
	"facebook": "QGMxt _2JhAE",
	"google": "_17cIx _2JhAE",
	"twitter": "_21gEV _2JhAE",
	"icon": "_2Dc1q",
	"lineThrough": "_2wlls"
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "._3_3g8{padding-left:20px;padding-right:20px}._3FKMx{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3_3g8",
	"container": "_3FKMx"
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(164);
    var insertCss = __webpack_require__(24);

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
    var insertCss = __webpack_require__(24);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(168);
    var insertCss = __webpack_require__(24);

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(169);
    var insertCss = __webpack_require__(24);

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
/* 174 */
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
/* 175 */
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
/* 176 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("imagemin");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("imagemin-jpegtran");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("imagemin-pngquant");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("react-image-zoom");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("react-progressive-image");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = require("route-cache");

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
module.exports = __webpack_require__(53);


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("react-super-responsive-table");

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map