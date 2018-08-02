webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_RUNTIME_VARIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_DATA; });
/* eslint-disable import/prefer-default-export */
var SET_SETTING = 'SET_SETTING';
var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

var SET_DATA = 'SET_DATA';

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(703);
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
/* harmony default export */ __webpack_exports__["a"] = (true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Headers */
/* unused harmony export Request */
/* unused harmony export Response */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* harmony default export */ __webpack_exports__["a"] = (self.fetch.bind(self));
var Headers = self.Headers;
var Request = self.Request;
var Response = self.Response;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(137);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
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
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_messenger_customer_chat__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_messenger_customer_chat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_messenger_customer_chat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tuy_hong_nhan_mp3__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tuy_hong_nhan_mp3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__tuy_hong_nhan_mp3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Layout/Layout.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global
 $, jQuery
 */


// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';








var AudioPlayer = function AudioPlayer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('audio', { src: __WEBPACK_IMPORTED_MODULE_6__tuy_hong_nhan_mp3___default.a, controls: true, autoPlay: true, autoplay: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
};

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (true) {
        window.myfunload();

        window.addEventListener('load', function () {
          // noinspection JSUnresolvedVariable
          var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          var xhr = new XMLHttpRequest();
          xhr.open('GET', '/tuy_hong_nhan.mp3');
          xhr.responseType = 'arraybuffer';
          xhr.addEventListener('load', function () {
            var playsound = function playsound(audioBuffer) {
              var source = audioCtx.createBufferSource();
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
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.props.data)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_messenger_customer_chat___default.a, {
          pageId: '<PAGE_ID>',
          appId: '<APP_ID>',
          htmlRef: '<REF_STRING>',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], { data: this.props.data, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], { data: this.props.data, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__["a" /* default */], { data: this.props.data, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }),
        true && mobilecheck() && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'phone', __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'text-phone', __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
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
                  lineNumber: 84
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
                lineNumber: 86
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { id: 'phone-image', className: 'vibrate', src: '/assets/images/phone.png', alt: 'call phone', __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};


var mobilecheck = function mobilecheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_configureStore__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/client.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location, action) {
    var route;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;
            _context.next = 6;
            return router.resolve(_extends({}, context, {
              path: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_3_query_string___default.a.parse(location.search)
            }));

          case 6:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            if (!route.redirect) {
              _context.next = 12;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].replace(route.redirect);
            return _context.abrupt('return');

          case 12:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */],
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                },
                __self: this
              },
              route.component
            ), container, function () {
              return onRenderComplete(route, location);
            });
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 22;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            }), container);
            throw _context.t0;

          case 22:

            console.error(_context.t0); // eslint-disable-line no-console

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import UniversalRouter from 'universal-router';








// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__store_configureStore__["a" /* default */])(window.APP_STATE, { history: __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */] })
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__["a" /* updateMeta */])('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    // if (window.ga) {
    //   window.ga('send', 'pageview', createPath(location));
    // }w

    if (window.run) {
      window.run();
    }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_2_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].location;
var router = __webpack_require__(370).default;__WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./core/router', function () {
    router = require('./core/router').default; // eslint-disable-line global-require

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needFetch;

function needFetch() {
  if (true && !window.firstTime) {
    console.log('first');
    window.firstTime = true;
    return false;
  }
  console.log('second');
  return true;
}

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var ContextType = {
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

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var first_foodNews = this.props.data.foodNews.value.data[0];
      var foodNews = this.props.data.foodNews.value.data.slice(1, 4);
      var news = this.props.data.news.value.data.slice(0, 3);
      var products = this.props.data.products.value;
      var noibat = this.props.data.noibat.value.slice(0, 8);
      var banchay = this.props.data.banchay.value.slice(0, 8);
      var khuyenmai = this.props.data.khuyenmai.value.slice(0, 8);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          'S\u1EA2N PH\u1EA8M N\u1ED4I B\u1EACT'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row', __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            noibat.map(function (el, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this2
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: _this2
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
          'h1',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            banchay.map(function (el, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: _this2
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                          },
                          __self: _this2
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
          'h1',
          { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          },
          'S\u1EA2N PH\u1EA8M KHUY\u1EBEN M\u1EA0I'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section pro-site', __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row', __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            khuyenmai.map(function (el, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      },
                      __self: _this2
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                          },
                          __self: _this2
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
              lineNumber: 143
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title-2', style: { lineHeight: 37 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            },
            'Tin t\u1EE9c'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'head-list', __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
              { to: '/danh-muc/su-kien', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                },
                __self: this
              },
              'S\u1EF1 ki\u1EC7n'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
              { to: '/danh-muc/tin-tuc-tong-hop', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                },
                __self: this
              },
              'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
              { to: '/danh-muc/khuyen-mai', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              },
              'Khuy\u1EBFn m\xE3i'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section', __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'isotopelist', className: 'section-tb row mobile100',
              style: { position: 'relative', height: '305.25px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            },
            news.map(function (el, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-lg-4 col-md-6 col-sm-4 col-xs-6  element-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'box-news', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                    { className: 'section-img',
                      to: '/bai-viet/' + el.slug, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                      src: el.coverUrl.replace("\/image", "\/image\/small"),
                      alt: el.title,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                      },
                      __self: _this2
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'section-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'section-name', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 172
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: '/bai-viet/' + el.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 173
                          },
                          __self: _this2
                        },
                        el.title
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'description', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176
                        },
                        __self: _this2
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
                lineNumber: 185
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
              { to: '/tin-tuc', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 186
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
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
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main2.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'render',
    value: function render() {
      var post = this.props.post;
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
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Main = function (_React$Component2) {
  _inherits(Main, _React$Component2);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

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
        var firstPost = this.props.posts.data[0];
        var posts = this.props.posts.data.slice(1);
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
            posts.map(function (el, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'news-lbox', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: _this3
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/bai-viet/' + el.slug,
                    className: 'news-img', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    },
                    __self: _this3
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"),
                    alt: el.title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    },
                    __self: _this3
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'news-content', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    },
                    __self: _this3
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'news-name', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      },
                      __self: _this3
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/' + el.slug, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        },
                        __self: _this3
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
                      __self: _this3
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
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main3.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$news = this.props.news,
          page = _props$news.page,
          totalPage = _props$news.totalPage,
          data = _props$news.data;

      var news = data;
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
              news.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-xs-4 element-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-box', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/' + el.slug, className: 'product-img', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: _this2
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 49
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'product-name', style: { height: 80 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: '/bai-viet/' + el.slug, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 51
                            },
                            __self: _this2
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
                          __self: _this2
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
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(137);
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

var Main = function Main(_ref) {
  var post = _ref.post;

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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main5.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
        var firstPost = this.props.posts.data[0];
        var posts = this.props.posts.data.slice(1);
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
          posts.map(function (el, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'news-lbox', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                {
                  to: '/bai-viet/' + el.slug,
                  className: 'news-img', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                  src: el.coverUrl.replace("\/image", "\/image\/small"),
                  alt: el.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: _this2
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'news-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { className: 'news-name', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    {
                      to: '/bai-viet/' + el.slug, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: _this2
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
                    __self: _this2
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
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_image_zoom__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_image_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_image_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuka_carousel__ = __webpack_require__(720);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main6.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      image: 0,
      loaded: false
    };

    _this.initialState = {
      image: 0,
      loaded: true
    };
    _this.setState(_this.initialState);
    return _this;
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (true) {
        // $("#img_01").elevateZoom();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.product && this.state.loaded) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mainContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          'Loading...'
        );
      } else {
        var product = this.props.product;
        var products = (this.props.products || []).slice(0, 6);
        var imgs = [];
        imgs.push(product.coverUrl);
        product.coverUrl2.forEach(function (el) {
          imgs.push(el);
        });
        console.log(imgs);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'colContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrapper-details', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                { className: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
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
                lineNumber: 53
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'wrap-product', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'details-img', style: { paddingRight: 5 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: this
                },
                imgs.map(function (img, idx) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: 'zoom' + idx, style: { display: _this2.state.image === idx ? 'block' : 'none' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_image_zoom___default.a, _extends({ width: 345, zoomWidth: 345, offset: { "vertical": 0, "horizontal": 10 }, img: img }, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: _this2
                    }))
                  );
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    },
                    __self: this
                  },
                  imgs.map(function (img, idx) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: 'sub' + idx, src: img, style: { height: 60, width: 'auto', maxWidth: 80, margin: '5px 5px 0 0', padding: 3, borderRadius: 3, border: "2px solid " + (_this2.state.image === idx ? "#005aa8" : "transparent") },
                      onClick: function onClick() {
                        _this2.setState({ image: idx });
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      },
                      __self: _this2
                    });
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'details-content details-content2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'title-2', style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80
                    },
                    __self: this
                  },
                  'Th\xF4ng tin s\u1EA3n ph\u1EA9m'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      position: 'relative',
                      verticalAlign: 'middle'
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: {
                        display: 'inline-block',
                        width: 90,
                        textAlign: 'left'
                        // verticalAlign: 'middle'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      {
                        style: {
                          position: 'absolute',
                          top: '25%',
                          left: 0
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
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
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                      },
                      __self: this
                    },
                    product.price === product.newPrice && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'price-product', style: { textAlign: 'left' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'em',
                        { style: { color: 'red' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 113
                          },
                          __self: this
                        },
                        numberWithCommas(product.price),
                        ' VN\u0110'
                      )
                    ),
                    product.price !== product.newPrice && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'price-product', style: { textAlign: 'left' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'del',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'em',
                          { style: { color: '999', fontSize: 16 }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 116
                            },
                            __self: this
                          },
                          numberWithCommas(product.price),
                          ' VN\u0110'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'em',
                        { style: { color: 'red', fontWeight: 'bold' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          },
                          __self: this
                        },
                        numberWithCommas(product.newPrice),
                        ' VN\u0110'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 119
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { style: { fontSize: 16 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120
                          },
                          __self: this
                        },
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
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      },
                      __self: this
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
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 133
                      },
                      __self: this
                    },
                    '30 vi\xEAn/h\u1ED9p'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'wrap-button', style: { textAlign: 'center', marginTop: 20 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 172
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: { margin: 10 },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      {
                        style: {
                          display: 'inline-block',
                          width: 100
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 189
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 29.41 17.36', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 195
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'defs',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 195
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: ".cls-1{fill:#5cb247;fill-rule:evenodd;}" }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 195
                            },
                            __self: this
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'title',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 195
                            },
                            __self: this
                          },
                          'Asset 2'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'g',
                          { id: 'Layer_2', 'data-name': 'Layer 2', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 195
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'g',
                            { id: 'Layer_2-2', 'data-name': 'Layer 2', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M11.87,11.91H6c-.29,0-.39-.12-.39-.41V9.74c0-.15,0-.2-.2-.2q-1.61,0-3.21,0a.78.78,0,0,1-.78-1A.76.76,0,0,1,2.16,8H5.39c.07,0,.18,0,.19-.11s0-.2-.17-.2H3.83a.77.77,0,0,1-.75-.6.79.79,0,0,1,.41-.91.89.89,0,0,1,.36-.07H5.4c.11,0,.18,0,.18-.15s-.07-.15-.18-.15H.83A.75.75,0,0,1,0,5.12a.76.76,0,0,1,.76-.93c1.5,0,3,0,4.51,0a.86.86,0,0,1,.16,0c.09,0,.13,0,.13-.14s0-.18-.12-.18H2.75a.81.81,0,0,1-.58-.17A.8.8,0,0,1,2,2.79a.71.71,0,0,1,.73-.49H5.35c.23,0,.23,0,.23-.23v-1a1,1,0,0,1,.94-1A3.59,3.59,0,0,1,7,0h9.9a2.16,2.16,0,0,1,.51.06,1,1,0,0,1,.75,1V11.51c0,.26-.09.36-.34.4H11.87Zm-6-7.41H.8a.46.46,0,0,0-.46.64c.07.22.23.31.53.31H11a.45.45,0,0,0,.41-.38.46.46,0,0,0-.5-.57ZM8.93,7.34H14a.46.46,0,0,0,.44-.59c-.05-.25-.21-.36-.51-.36H3.8a.45.45,0,0,0-.42.55c.05.28.21.4.53.4ZM7.78,2.61H2.69A.43.43,0,0,0,2.21,3a.46.46,0,0,0,.38.51H12.85a.47.47,0,0,0,.48-.5.46.46,0,0,0-.51-.45C11.14,2.62,9.46,2.61,7.78,2.61ZM7.25,8.27H2.17a.46.46,0,0,0-.43.23.49.49,0,0,0,0,.52.47.47,0,0,0,.45.21H12.39a.48.48,0,0,0-.1-1Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M13.84,13H19c.24,0,.24,0,.24-.24v-.1c0-3.16,0-6.31,0-9.47,0-.12,0-.24,0-.36a.65.65,0,0,1,.69-.67q1.62,0,3.24,0a2.77,2.77,0,0,1,2.41,1.27l2.09,3.1a2.94,2.94,0,0,1,.5,1.7v4.52c0,.23,0,.24.25.24l.51,0a.4.4,0,0,1,.48.43v.91a.32.32,0,0,1-.31.37,3.23,3.23,0,0,1-.53,0h-2c-.29,0-.32,0-.4-.3a2.78,2.78,0,0,0-2.3-2.15,2.88,2.88,0,0,0-3.33,2.19c-.06.22-.1.26-.33.26H15c-.23,0-.28,0-.33-.24a2.65,2.65,0,0,0-.81-1.42A.1.1,0,0,1,13.84,13Zm9.52-5.76c.69,0,1.37,0,2.06,0a.46.46,0,0,0,.46-.23c.11-.19,0-.34-.1-.48-.5-.72-1-1.44-1.51-2.17a.75.75,0,0,0-.66-.34H21.42a1.33,1.33,0,0,0-.28,0c-.23,0-.34.1-.35.33,0,.81,0,1.62,0,2.43,0,.32.16.42.49.42Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M23.35,13a2.17,2.17,0,1,1-2.17,2.16A2.15,2.15,0,0,1,23.35,13Zm-1.12,2.16a1.09,1.09,0,0,0,1.1,1.11,1.11,1.11,0,1,0,0-2.22A1.08,1.08,0,0,0,22.23,15.19Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M14,15.2A2.17,2.17,0,1,1,11.86,13,2.16,2.16,0,0,1,14,15.2Zm-2.16,1.1A1.1,1.1,0,0,0,13,15.18a1.11,1.11,0,1,0-1.11,1.12Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M9.86,13l-.25.29A2.78,2.78,0,0,0,9,14.62c0,.12-.09.14-.2.14l-1.58,0-1.9,0H5.14c-.4-.07-.44-.15-.43-.49s0-.59,0-.88A.31.31,0,0,1,5,13l.24,0,4.49,0Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M22.23,15.19a1.08,1.08,0,0,1,1.12-1.11,1.11,1.11,0,1,1,0,2.22A1.09,1.09,0,0,1,22.23,15.19Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'cls-1', d: 'M11.85,16.3a1.09,1.09,0,0,1-1.11-1.12,1.11,1.11,0,0,1,2.22,0A1.1,1.1,0,0,1,11.85,16.3Z', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                              },
                              __self: this
                            })
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      {
                        className: 'mienphi-right',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 198
                        },
                        __self: this
                      },
                      'Mi\u1EC5n ph\xED v\u1EADn chuy\u1EC3n cho h\xF3a \u0111\u01A1n tr\xEAn 500.000 VN\u0110'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: { margin: 10 },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 205
                      },
                      __self: this
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
                        onClick: function onClick() {
                          var that = _this2;
                          if (true) {
                            var sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
                            var cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
                            // console.log(product)
                            var index = cart.findIndex(function (el) {
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
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 208
                        },
                        __self: this
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
                        }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 249
                        },
                        __self: this
                      },
                      'T\u01B0 v\u1EA5n'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'wrapper-text', style: { marginTop: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 265
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: product.body }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 266
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'headno headpo', __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { className: 'title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 271
                },
                __self: this
              },
              'Kh\xE1ch h\xE0ng'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-section prom', __source: {
                fileName: _jsxFileName,
                lineNumber: 275
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'product-tb pro-tb row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 276
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_nuka_carousel__["a" /* default */],
                { autoplay: true, slidesToShow: 2, style: { margin: 20 },
                  renderTopCenterControls: function renderTopCenterControls(_ref) {
                    var currentSlide = _ref.currentSlide;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 279
                      },
                      __self: _this2
                    });
                  },
                  renderCenterLeftControls: function renderCenterLeftControls(_ref2) {
                    var previousSlide = _ref2.previousSlide;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 282
                      },
                      __self: _this2
                    });
                  },
                  renderCenterRightControls: function renderCenterRightControls(_ref3) {
                    var nextSlide = _ref3.nextSlide;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 285
                      },
                      __self: _this2
                    });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                  },
                  __self: this
                },
                product.coverUrl3.map(function (img, idx) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, key: idx, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 290
                    },
                    __self: _this2
                  });
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'headno headpo', __source: {
                fileName: _jsxFileName,
                lineNumber: 298
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { className: 'title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 299
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
                lineNumber: 303
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'product-tb pro-tb row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 304
                },
                __self: this
              },
              products.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-xs-4 col-6  element-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 307
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-box', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 308
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug, className: 'product-img'
                        // onClick={() => {
                        //   this.forceUpdate()
                        // }}
                        , __source: {
                          fileName: _jsxFileName,
                          lineNumber: 309
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.name, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 314
                        },
                        __self: _this2
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 315
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'product-name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 316
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: '/san-pham/' + el.slug, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 317
                            },
                            __self: _this2
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
                lineNumber: 328
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/san-pham/" + product.slug, 'data-numposts': '5', __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              },
              __self: this
            })
          )
        );
      }
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



function numberWithCommas() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Main7.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.products.length < 1) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mainContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          'Loading...'
        );
      } else {
        var products = this.props.products;
        var banchay = this.props.data.banchay.value.slice(0, 6);
        var khuyenmai = this.props.data.khuyenmai.value.slice(0, 6);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'colContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'bannerSub', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'slider-wrapper', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 28 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            'UNG TH\u01AF'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-section pro-site', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'product-tb pro-tb row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              products.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-box', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 37
                        },
                        __self: _this2
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'product-name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: '/san-pham/' + el.slug, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 40
                            },
                            __self: _this2
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
            'h2',
            { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 18 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-section pro-site', __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'product-tb pro-tb row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              banchay.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-box', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        },
                        __self: _this2
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 64
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'product-name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: '/san-pham/' + el.slug, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 66
                            },
                            __self: _this2
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
            'h2',
            { className: 'title text-uppercase', style: { borderBottom: '1px solid #ddd', fontSize: 18 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            },
            'S\u1EA2N PH\u1EA8M KHUY\u1EBEN M\xC3I'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-section pro-site', __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'product-tb pro-tb row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                },
                __self: this
              },
              khuyenmai.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-md-3 col-xs-6 \t.col-6 element-item', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-box', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug, className: 'product-img', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.title, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        },
                        __self: _this2
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 91
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'product-name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 92
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: '/san-pham/' + el.slug, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 93
                            },
                            __self: _this2
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
                lineNumber: 104
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Comments"], { href: "http://comhoavang.com/san-pham", 'data-numposts': '5', __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            })
          )
        );
      }
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(842).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(727)
  };
}

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(397);

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      var _data = action.payload.value;
      return _extends({}, state, _defineProperty({
        info: _extends({}, state.info, {
          value: _data.info || {}
        }),
        post: _extends({}, state.post, {
          value: _data.getOnePost || {}
        }),
        news: _extends({}, state.news, {
          value: _data.getNews || state.news.value
        }),
        foodNews: _extends({}, state.news, {
          value: _data.getFoodNews || state.foodNews.value
        }),
        newsInCategory: _extends({}, state.newsInCategory, {
          value: _data.getNewsInCategory || state.news.value
        }),
        product: _extends({}, state.product, {
          value: _data.getOneProduct || {}
        }),
        products: _extends({}, state.products, {
          value: _data.getProducts || []
        }),
        productsInCategory: _extends({}, state.productsInCategory, {
          value: _data.getProductsByCategory || []
        }),
        noibat: _extends({}, state.noibat, {
          value: _data.getNoiBat || []
        }),
        khuyenmai: _extends({}, state.khuyenmai, {
          value: _data.getKhuyenMai || []
        }),
        banchay: _extends({}, state.banchay, {
          value: _data.getBanChay || []
        })
      }, 'productsInCategory', _extends({}, state.productsInCategory, {
        value: _data.productsInCategory || []
      })));
    default:
      return state;
  }
}

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function setting() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_SETTING */]:
      return _extends({}, state, _defineProperty({}, 'ssr', action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(19);
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




var title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Dashboard, resp, _ref3, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Dashboard = _ref2.Dashboard;
              _context.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])('/graphql', {
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

            case 7:
              resp = _context.sent;
              _context.next = 10;
              return resp.json();

            case 10:
              _ref3 = _context.sent;
              data = _ref3.data;
              return _context.abrupt('return', {
                title: title,
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
              });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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

var title = 'Admin Page';
var isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(376).default, __webpack_require__(378).default, __webpack_require__(385).default, __webpack_require__(379).default, __webpack_require__(380).default, __webpack_require__(386).default,
  // require('./editor').default,
  __webpack_require__(382).default, __webpack_require__(381).default, __webpack_require__(383).default, __webpack_require__(384).default],
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        next = _ref.next;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var user, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = store.getState().user;
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;

              // Provide default values for title, description etc.
              route.title = '' + (route.title || 'Amdmin Page');
              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
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

var title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Library;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["showLoading"])());
              _context.next = 3;
              return __webpack_require__(39);

            case 3:
              _ref2 = _context.sent;
              App = _ref2.App;
              Library = _ref2.Library;

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["hideLoading"])());
              return _context.abrupt('return', {
                title: title,
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
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Menu Builder';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menu',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Menu;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Menu = _ref2.Menu;
              return _context.abrupt('return', {
                title: title,
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
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/admin/menuBottom/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Menu Builder';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menuBottom',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, MenuBottom;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              MenuBottom = _ref2.MenuBottom;
              return _context.abrupt('return', {
                title: title,
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
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuBottom, { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: _this
                  })
                )
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditFoods, ListFoods, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/monngon?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(39);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditFoods = _ref2.EditFoods;
              ListFoods = _ref2.ListFoods;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

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
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

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
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

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
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/mongon?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditNews, ListNews, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(39);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditNews = _ref2.EditNews;
              ListNews = _ref2.ListNews;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

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
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

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
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

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
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditProduct, ListProduct, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(39);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditProduct = _ref2.EditProduct;
              ListProduct = _ref2.ListProduct;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

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
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

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
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

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
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(19);
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




var title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Seo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Seo = _ref2.Seo;
              return _context.abrupt('return', {
                title: title,
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
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Setting;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Setting = _ref2.Setting;
              return _context.abrupt('return', {
                title: title,
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
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
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



var title = 'Thông tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/thongtin',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, App, ThongTin;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(39);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              ThongTin = _ref2.ThongTin;
              return _context.abrupt('return', {
                title: title,
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
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(81);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/baiviet/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/baiviet/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/bai-viet/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var post, seo, info, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 16;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              _context.next = 6;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 6:
              resp = _context.sent;
              _context.next = 9;
              return resp.json();

            case 9:
              _ref2 = _context.sent;
              data = _ref2.data;

              if (!(!data || !data.getOnePost)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return', { redirect: '/' });

            case 13:
              seo = data.seo || {};
              store.dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */](data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 16:
              return _context.abrupt('return', {
                title: seo.title || store.getState().data.post.value.title,
                description: seo.description || store.getState().data.post.value.description,
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { post: store.getState().data.post.value, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: _this
                  })
                )
              });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Aside__ = __webpack_require__(53);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/cauhoithuonggap/Home.js',
    _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      data: {
        name: '',
        phone: '',
        address: '',
        product: _this.props.selectProduct || 'com-kho-hoa-vang',
        quantity: ''
      }
    };
    _this.order = _this.order.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'order',
    value: function order() {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/order/new', this.state.data).then(function (res) {
        $('#myModal').modal({
          show: true
        });
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Modal = function Modal() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog', __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: _this2
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: _this2
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: _this2
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: _this2
            },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: _this2
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
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: _this2
            },
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                },
                __self: _this2
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
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/san-pham', className: 'btn btn-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: _this2
            },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: _this2
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = __webpack_require__.e/* require.ensure */(0).then((function (require) {
  return {
    App: __webpack_require__(864).default,
    Dashboard: __webpack_require__(865).default,
    Library: __webpack_require__(867).default,
    Setting: __webpack_require__(877).default,
    Menu: __webpack_require__(868).default,
    MenuBottom: __webpack_require__(869).default,
    ThongTin: __webpack_require__(878).default,
    Editor: __webpack_require__(866).default,
    ListNews: __webpack_require__(873).default,
    EditNews: __webpack_require__(872).default,
    EditFoods: __webpack_require__(870).default,
    ListFoods: __webpack_require__(871).default,
    EditProduct: __webpack_require__(874).default,
    ListProduct: __webpack_require__(875).default,
    Seo: __webpack_require__(876).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/cauhoithuonggap/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/cau-hoi-thuong-gap',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        query = _ref.query,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var seo, info, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 11;
                break;
              }

              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

            case 11:
              return _context.abrupt('return', {
                title: seo.title || 'Câu hỏi thuờng gặp',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: _this
                  })
                )
              });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(81);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhmuc/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhmuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danh-muc/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        query = _ref.query,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var page, seo, info, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = query.p || 1;
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              _context.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 7:
              resp = _context.sent;
              _context.next = 10;
              return resp.json();

            case 10:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Danh mục: ' + mapSlugToName(params.slug),
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.newsInCategory.value, title: mapSlugToName(params.slug), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
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

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(53);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhsachsanpham/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Main7__["a" /* default */], { products: this.props.products, data: this.props.data, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__["a" /* default */], { banchay: true, data: this.props.data.banchay.value.slice(0, 3), __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/danhsachsanpham/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danh-muc/:slug2',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var seo, info, productsInCategory, khuyenmai, banchay, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 19;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              // console.log("params.slug")
              // console.log(params.slug2)

              productsInCategory = 'productsInCategory(slug2: "' + params.slug2 + '"){name, price, slug, coverUrl, description, saleOff, body, created_at}';
              khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              _context.next = 9;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 9:
              resp = _context.sent;
              _context.next = 12;
              return resp.json();

            case 12:
              _ref2 = _context.sent;
              data = _ref2.data;

              console.log('data');
              console.log(data);
              seo = data.seo || {};
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 19:
              return _context.abrupt('return', {
                title: seo.title || 'Danh mục sản phẩm',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data, products: store.getState().data.productsInCategory.value, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: _this
                  })
                )
              });

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Link__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/home/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mainContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'banner-top', className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'left col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    style: {
                      border: '2px solid #ddd',
                      height: '100%'
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'header',
                      style: { backgroundColor: '#5CB247', textAlign: 'center', color: 'white', textWeight: 'bold' },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: this
                    },
                    'DANH M\u1EE4C S\u1EA2N PH\u1EA8M'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { id: 'mainMenu', style: { height: 290,
                        padding: 3,
                        listStyle: 'none'
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'ungthu linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/ung-thu', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                          },
                          __self: this
                        },
                        'Ung th\u01B0'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'bogan linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/san-pham-bo-gan', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                          },
                          __self: this
                        },
                        'S\u1EA3n ph\u1EA9m b\u1ED5 gan'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'duonghuyet linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/duong-huyet-huyet-ap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                          },
                          __self: this
                        },
                        '\u0110\u01B0\u1EDDng huy\u1EBFt - Huy\u1EBFt \xE1p'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'daday linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 37
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/da-day', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                          },
                          __self: this
                        },
                        'D\u1EA1 d\xE0y'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'giamcan linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/giam-can', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        },
                        'Gi\u1EA3n c\xE2n'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'lamdep linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/lam-dep', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        },
                        'L\xE0m \u0111\u1EB9p'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'xuongkhop linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/xuong-khop', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                          },
                          __self: this
                        },
                        'X\u01B0\u01A1ng kh\u1EDBp'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'botonghop linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/bo-tong-hop', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                          },
                          __self: this
                        },
                        'B\u1ED5 t\u1ED5ng h\u1EE3p'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'nano linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/nano-curcumin', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                          },
                          __self: this
                        },
                        'Nano Curcumin'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'toiden linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/toi-den', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                          },
                          __self: this
                        },
                        'T\u1ECFi \u0111en'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'sanphamkhac linkMenuWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 44
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__components_Link__["a" /* default */],
                        { to: '/danh-muc/san-pham-khac', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                          },
                          __self: this
                        },
                        'S\u1EA3n ph\u1EA9m kh\xE1c'
                      ),
                      ' '
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'right col-md-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/banner.jpg', alt: 'banner 2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__["a" /* default */], { data: this.props.data, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], { data: this.props.data, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var seo, info, noibat, khuyenmai, banchay, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 19;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              noibat = 'getNoiBat{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              _context.next = 9;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 9:
              resp = _context.sent;
              _context.next = 12;
              return resp.json();

            case 12:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 17;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 17:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 19:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: _this
                  })
                )
              });

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 397:
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
  children: [__webpack_require__(396).default, __webpack_require__(403).default, __webpack_require__(407).default, __webpack_require__(394).default,
  // require('./landingpage').default,
  __webpack_require__(399).default, __webpack_require__(390).default, __webpack_require__(392).default, __webpack_require__(409).default, __webpack_require__(388).default,
  // require('./contact').default,
  __webpack_require__(401).default,
  // require('./register').default,
  // require('./about').default,
  // require('./privacy').default,
  __webpack_require__(377).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(405).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next,
        store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true && !window.numRendered) {
                window.numRendered = 0;
              }
              // Execute each child route until one of them return the result
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = '' + (route.title || 'Untitled Page');
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/lienhedathang/Home.js',
    _this3 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      data: {
        name: '',
        phone: '',
        address: ''
      },
      cart: []
    };
    _this.order = _this.order.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      if (true) {
        var sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
        var cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
        that.setState({ cart: cart });
      }
    }
  }, {
    key: 'order',
    value: function order() {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/order/new', this.state).then(function (res) {
        $('#myModal').modal({
          show: true
        });
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sum = 0;
      this.state.cart.forEach(function (el) {
        sum += el.number * el.product.newPrice;
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mainContent', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'table',
                  { className: 'dathang', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'thead',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                          },
                          __self: this
                        },
                        'S\u1EA3n ph\u1EA9m'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          },
                          __self: this
                        },
                        'Gi\xE1'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          },
                          __self: this
                        },
                        'S\u1ED1 l\u01B0\u1EE3ng'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'th',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          },
                          __self: this
                        },
                        'Th\xE0nh ti\u1EC1n'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tbody',
                    { style: { fontSize: '18' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      },
                      __self: this
                    },
                    this.state.cart.map(function (el, idx) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'tr',
                        { key: idx, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'td',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 74
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: '', style: { padding: 10 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'dt-img', src: el.product.coverUrl, alt: '',
                              style: { height: 80, width: 'auto' },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                              },
                              __self: _this2
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'dt-name', style: { paddingLeft: 20 }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 79
                                },
                                __self: _this2
                              },
                              el.product.name
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'td',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 82
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'dt-price', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                              },
                              __self: _this2
                            },
                            ' ',
                            el.product.newPrice.toLocaleString(),
                            ' VN\u0110 '
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'td',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number',
                            className: 'dt-numberWr',
                            defaultValue: el.number,
                            onChange: function onChange(event) {
                              var value = event.target.value;
                              var that = _this2;
                              if (value > 0) {
                                if (true) {
                                  var sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
                                  var cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
                                  var index = idx;
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
                                  _this2.setState({ cart: cart });
                                }
                              }
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 87
                            },
                            __self: _this2
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'td',
                          { style: { color: '#5CB247', fontWeight: 'bold' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 118
                            },
                            __self: _this2
                          },
                          (el.product.newPrice * el.number).toLocaleString(),
                          ' VN\u0110'
                        )
                      );
                    })
                  ),
                  this.state.cart.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tfoot',
                    { style: { marginTop: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 128
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          {
                            style: { margin: 10 },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 130
                            },
                            __self: this
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
                              to: '/',
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 133
                              },
                              __self: this
                            },
                            'Mua th\xEAm'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 154
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { style: { textAlign: 'right', paddingRight: 20, fontSize: 22 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 155
                          },
                          __self: this
                        },
                        'T\u1ED5ng ti\u1EC1n :'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        { style: { fontSize: 22, fontWeight: 'bold', color: '#5CB247' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 159
                          },
                          __self: this
                        },
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
              { className: 'row', style: { margin: '10px 0 0 0', fontSize: 20, border: '1px solid #ddd', borderRadius: 10, padding: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-6', style: { padding: 0 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-horizontal', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 170
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'fieldset',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'legend',
                      { style: { color: '#5CB247', fontWeight: 'bold' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 172
                        },
                        __self: this
                      },
                      'Th\xF4ng tin \u0111\u1EB7t h\xE0ng'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'form-group', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 174
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: 'col-md-4 control-label', htmlFor: 'product_id', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 175
                          },
                          __self: this
                        },
                        'H\u1ECD V\xE0 T\xEAn:'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-8', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 176
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_id', name: 'product_id', placeholder: 'H\u1ECD V\xE0 T\xEAn', className: 'form-control input-md', required: true, type: 'text',
                          defaultValue: this.state.data.name,
                          onChange: function onChange(e) {
                            var value = e.target.value;
                            _this2.setState(function (prev) {
                              return _extends({}, prev, {
                                data: _extends({}, prev.data, {
                                  name: value
                                })
                              });
                            });
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177
                          },
                          __self: this
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'form-group', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 195
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: 'col-md-4 control-label', htmlFor: 'product_name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 196
                          },
                          __self: this
                        },
                        'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-8', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 197
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_name', name: 'product_name', placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i', className: 'form-control input-md', required: true, type: 'text',
                          defaultValue: this.state.data.phone,
                          onChange: function onChange(e) {
                            var value = e.target.value;
                            _this2.setState(function (prev) {
                              return _extends({}, prev, {
                                data: _extends({}, prev.data, {
                                  phone: value
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
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'form-group', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 216
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        { className: 'col-md-4 control-label', htmlFor: 'product_description', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 217
                          },
                          __self: this
                        },
                        '\u0110\u1ECBa ch\u1EC9:'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-8', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 218
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'form-control', id: 'product_description', name: 'product_description',
                          defaultValue: this.state.data.address,
                          onChange: function onChange(e) {
                            var value = e.target.value;
                            _this2.setState(function (prev) {
                              return _extends({}, prev, {
                                data: _extends({}, prev.data, {
                                  address: value
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
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'form-group', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 237
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'col-md-4 control-label', htmlFor: 'singlebutton', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 238
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-8', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 239
                          },
                          __self: this
                        },
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
                            onClick: this.order,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 240
                            },
                            __self: this
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
                { className: 'col-md-6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { style: { color: '#5CB247', fontWeight: 'bold', borderBottom: '1px solid #ddd', marginBottom: 5 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 262
                    },
                    __self: this
                  },
                  'Li\xEAn h\u1EC7'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { style: { width: 60 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 263
                    },
                    __self: this
                  },
                  'Hotline 1:'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'b',
                  { style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 263
                    },
                    __self: this
                  },
                  '0973.318.868'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { style: { width: 60 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 265
                    },
                    __self: this
                  },
                  'Hotline 2:'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'b',
                  { style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 265
                    },
                    __self: this
                  },
                  '0915.055.951'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 266
                    },
                    __self: this
                  },
                  '\u0110\u1ECBa ch\u1EC9 : 27 \u2013 Hu\u1EF3nh Th\xFAc Kh\xE1ng \u2013 Qu\u1EADn \u0110\u1ED1ng \u0110a \u2013 H\xE0 N\u1ED9i'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Modal, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Modal = function Modal() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'myModal', className: 'modal fade', role: 'dialog', __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: _this3
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-dialog', __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: _this3
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: _this3
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: _this3
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 285
              },
              __self: _this3
            },
            '\xD7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'modal-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 286
              },
              __self: _this3
            },
            'Modal Header'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            },
            __self: _this3
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 289
              },
              __self: _this3
            },
            '\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng, ch\xFAng t\xF4i s\u1EBD s\u1EDBm li\xEAn l\u1EA1c v\u1EDBi b\u1EA1n, n\u1EBFu c\xF3 g\xEC th\u1EAFc m\u1EAFc xin l\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i t\u01B0 v\u1EA5n v\xE0 h\u1ED7 tr\u1EE3 ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              { style: { color: 'red' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 290
                },
                __self: _this3
              },
              '0973.318.868'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-footer', __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: _this3
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
            { to: '/san-pham', className: 'btn btn-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 294
              },
              __self: _this3
            },
            'Trang s\u1EA3n ph\u1EA9m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal', __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              },
              __self: _this3
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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/lienhedathang/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/lien-he-dat-hang',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        query = _ref.query,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var seo, info, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 16;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              _context.next = 6;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 6:
              resp = _context.sent;
              _context.next = 9;
              return resp.json();

            case 9:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 14;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 14:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 16:
              return _context.abrupt('return', {
                title: seo.title || 'Liên hệ đặt hàng',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { selectProduct: query.sp, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/login/Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
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
              onSubmit: function onSubmit(e) {
                e.preventDefault();
                var $username = $(e.target).find('[name=username]').val();
                var $password = $(e.target).find('[name=password]').val();
                var data = {
                  username: $username,
                  password: $password
                };
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/auth/login', data).then(function (res) {
                  if (res.data) {
                    window.location.reload();
                  } else {
                    $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
                  }
                }).catch(function (err) {
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
                  onClick: function onClick() {
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
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Login.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Login_css___default.a)(Login));

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/login/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var title = 'Log In';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action: function action(_ref) {
    var store = _ref.store;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    var user = store.getState().user;
    if (user && user.username) {
      return { redirect: '/' };
    }
    return {
      title: title,
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Main2__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Aside__ = __webpack_require__(53);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/monngon/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/monngon/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/mon-ngon',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        query = _ref.query,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var page, seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = 1;

              if (query.p) page = query.p;
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 7:
              resp = _context.sent;
              _context.next = 10;
              return resp.json();

            case 10:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
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
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/notFound/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
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
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action: function action() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    return {
      title: title,
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(81);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/sanpham/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], { banchay: true, data: this.props.banchay.slice(0, 3), __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/sanpham/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var seo, info, noibat, khuyenmai, banchay, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 17;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';
              noibat = 'getNoiBat{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}';
              _context.next = 9;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{' + banchay + info + ' seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at},getOneProduct(slug: "' + params.slug + '"){name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at} }'
                }),
                credentials: 'include'
              });

            case 9:
              resp = _context.sent;
              _context.next = 12;
              return resp.json();

            case 12:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 17:
              return _context.abrupt('return', {
                title: seo.title || store.getState().data.product.value.name,
                description: seo.description || store.getState().data.product.value.description,
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { banchay: store.getState().data.banchay.value, product: store.getState().data.product.value, products: store.getState().data.products.value, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: _this
                  })
                )
              });

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(81);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/tintuc/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/routes/tintuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/tin-tuc',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        query = _ref.query,
        path = _ref.path;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var page, seo, info, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = 1;
              seo = {};
              info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan }';

              if (query.p) page = query.p;

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 16;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 8;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

            case 8:
              resp = _context.sent;
              _context.next = 11;
              return resp.json();

            case 11:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 16:
              return _context.abrupt('return', {
                title: seo.title || 'Trang tin tức',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data, news: store.getState().data.news.value, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: _this
                  })
                )
              });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(412);






function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk__["a" /* default */].withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* applyMiddleware */].apply(undefined, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(undefined, middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(19);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetchKnowingCookie('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createFetchKnowingCookie(_ref2) {
  var cookie = _ref2.cookie;

  if (false) {
    return function (url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        var headers = _extends({}, options.headers, {
          cookie: cookie
        });
        return fetch(url, _extends({}, options, { headers: headers }));
      }

      return fetch(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  var fetchKnowingCookie = createFetchKnowingCookie(config);
  var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest: graphqlRequest,
    history: config.history
  };
}

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);


function createLogger() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
/* eslint-disable import/prefer-default-export */



function setData() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value: value
    }
  };
}

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_facebook__);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Aside.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Aside = function (_React$Component) {
  _inherits(Aside, _React$Component);

  function Aside() {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
  }

  _createClass(Aside, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var info = ((this.props.data || {}).info || {}).value || {};
      // console.log(this.props.data)
      // console.log(info)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colAside', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        this.props.banchay && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'title',
              style: {
                fontSize: 14
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            'S\u1EA2N PH\u1EA8M B\xC1N CH\u1EA0Y'
          ),
          this.props.data.map(function (el, idx) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-12', key: idx,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  style: {
                    padding: '5px 15px'
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                    style: { width: '100%' },
                    src: el.coverUrl.replace("\/image", "\/image\/small"), alt: el.name, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: _this2
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug,
                    style: {
                      textAlign: 'center',
                      display: 'block',
                      color: '#5CB247'
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    },
                    __self: _this2
                  },
                  el.name
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'adv', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/right.jpg', alt: 'Hotline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'adv', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_facebook___default.a,
                { appID: '123093138237586', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_facebook__["Page"], { href: 'https://www.facebook.com/namduocquany0973318868', 'data-numposts': '5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  },
                  __self: this
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Aside;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(208)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login-input-HfRjv {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/Users/mac/Workspace/namduocquany/src/routes/login/Login.css","/Users/mac/Workspace/namduocquany/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yEAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

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

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(208)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/mac/Workspace/namduocquany/src/routes/notFound/NotFound.css","/Users/mac/Workspace/namduocquany/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(655);
    var insertCss = __webpack_require__(212);

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

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(656);
    var insertCss = __webpack_require__(212);

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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var info = ((this.props.data || {}).info || {}).value;
      var menuBottom = JSON.parse(info.menuBottom);
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
                    menuBottom.map(function (el, idx) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: idx, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: el.url, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 27
                            },
                            __self: _this2
                          },
                          el.title,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 29
                            },
                            __self: _this2
                          })
                        )
                      );
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-md-4 col-sm-6 col-xs-12', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'botHeading', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                      },
                      __self: this
                    },
                    'TH\xD4NG TIN WEBSITE'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'list-footer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/lien-he-dat-hang', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        },
                        'H\xECnh th\u1EE9c thanh to\xE1n',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
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
                          lineNumber: 42
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/lien-he-dat-hang', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                          },
                          __self: this
                        },
                        'Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n, giao nh\u1EADn',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
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
                          lineNumber: 45
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/lien-he-dat-hang', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                          },
                          __self: this
                        },
                        'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
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
                      lineNumber: 50
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'botHeading', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    'TH\xD4NG TIN LI\xCAN H\u1EC6'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'address-box list-footer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'add-1', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 53
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
                        '\u0110\u1ECBa ch\u1EC9 :',
                        info.diachi
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'add-2', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
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
                          lineNumber: 55
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                          },
                          __self: this
                        },
                        'Email: ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { href: "mailto:" + info.email, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 55
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
                  lineNumber: 60
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'dangky', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'http://online.gov.vn/CustomWebsiteDisplay.aspx', target: '_blank', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/dangky.png', alt: 'img', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
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
              lineNumber: 67
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              '\xA9 2017 NAMDUOCQUANY. All rights reserved'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var info = ((this.props.data || {}).info || {}).value;
      var menu = JSON.parse(info.menu);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'header',
          style: { backgroundColor: '#5CB247' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headerTop', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', style: { position: 'relative' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'button-menu mobile-showhide', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'panel-left', href: '#menumobile', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'icon-bar', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: this
                  },
                  'bar'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'icon-bar', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
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
                      lineNumber: 19
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
                  lineNumber: 21
                },
                __self: this
              },
              'search'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'logo', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/logo_namduoc.png', alt: 'logo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { id: 'menu2', className: 'desktop-showhide sf-js-enabled', style: { touchAction: 'pan-y' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              menu.map(function (el, idx) {
                if (el.children && el.children.length > 0) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: idx, className: 'hasSubMenu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: el.url, className: 'sf-with-ul', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        },
                        __self: _this2
                      },
                      el.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'ul',
                      { className: 'subMenu', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        },
                        __self: _this2
                      },
                      el.children.map(function (el2, idx2) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          { key: idx2, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 37
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                            { to: el2.url, className: 'sf-with-ul', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                              },
                              __self: _this2
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
                        lineNumber: 42
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: el.url, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 44
                        },
                        __self: _this2
                      },
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
          { className: 'desktop-showhide sf-js-enabled headerBottom', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'searchbox', className: 'search-form', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'search-input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'ctl00$ctl00$ctl00$txtSearch', type: 'text', id: 'ctl00_ctl00_ctl00_txtSearch',
                  className: 'search-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState',
                  id: 'ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share desktop-showhide', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: info.fanpage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline desktop-showhide', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  },
                  __self: this
                },
                info.phone
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr', __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMobile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(20);
var _jsxFileName = '/Users/mac/Workspace/namduocquany/src/components/Partials/MenuMobile.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MenuMobile = function (_React$Component) {
  _inherits(MenuMobile, _React$Component);

  function MenuMobile() {
    _classCallCheck(this, MenuMobile);

    return _possibleConstructorReturn(this, (MenuMobile.__proto__ || Object.getPrototypeOf(MenuMobile)).apply(this, arguments));
  }

  _createClass(MenuMobile, [{
    key: 'closeMenu',
    value: function closeMenu() {
      if (true) {
        console.log('close');
        $('#close-menu').trigger('click');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var info = ((this.props.data || {}).info || {}).value;
      var menu = JSON.parse(info.menu);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'menumobile', className: 'mobile-panel mobile-left', style: { transform: 'translate3d(-120%, 0px, 0px)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'close-menu', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { id: 'close-menu', href: '#menumobile', className: 'glyphicon glyphicon-remove-circle', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'menu-in', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'menu-mobile', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'logo', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/',
                  onClick: this.closeMenu,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/logo_namduoc.png', alt: 'logo nam duoc quan y', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'menu-nav', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/', onClick: this.closeMenu, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: this
                  },
                  'Trang ch\u1EE7'
                )
              ),
              menu.map(function (el, idx) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: idx, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: el.url, onClick: _this2.closeMenu, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: _this2
                    },
                    el.title
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: _this2
                    },
                    el.children && el.children.map(function (el2, idx2) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: idx2, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                          { to: el2.url, onClick: _this2.closeMenu, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 37
                            },
                            __self: _this2
                          },
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
              { className: 'mo-box', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'hotline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                'T\u1ED5ng \u0111\xE0i CSKH: ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
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
                  lineNumber: 53
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'share', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                },
                'Follow me on ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { target: '_blank', href: 'https://www.facebook.com/comhoavang', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
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
  }]);

  return MenuMobile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Layout/tuy_hong_nhan.mp3?c215d49f";

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);
module.exports = __webpack_require__(329);


/***/ })

},[863]);
//# sourceMappingURL=client.js.map