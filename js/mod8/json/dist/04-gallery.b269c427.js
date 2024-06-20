// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/countries.json":[function(require,module,exports) {
module.exports = [{
  "name": "United States",
  "capital": "Washington, D.C.",
  "currency": "United States Dollar (USD)",
  "language": "English",
  "population": "331 million",
  "flag": "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_usa_enl.jpg",
  "infected": 45000000
}, {
  "name": "Germany",
  "capital": "Berlin",
  "currency": "Euro (EUR)",
  "language": "German",
  "population": "83 million",
  "flag": "https://www.megaflag.ru/sites/default/files/images/directory_names/flag_germanija_enl.jpg",
  "infected": true
}, {
  "name": "China",
  "capital": "Beijing",
  "currency": "Chinese Yuan (CNY)",
  "language": "Chinese",
  "population": "1400 million",
  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  "infected": false
}, {
  "name": "France",
  "capital": "Paris",
  "currency": "Euro",
  "language": "French",
  "population": 65273511,
  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png",
  "infected": true
}, {
  "name": "Brazil",
  "capital": "Brasília",
  "currency": "Brazilian Real",
  "language": "Portuguese",
  "population": 213993437,
  "flag": "data:image/png;base64,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",
  "infected": 3000000
}, {
  "name": "Japan",
  "capital": "Tokyo",
  "currency": "Japanese Yen",
  "language": "Japanese",
  "population": 126050000,
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAe1BMVEX///+wMT+tIzSvLDurFSqrGCysHS+qDiauKDivLTysHzGyNEL++/vbrLD16Om0PEnv2tzoy8747/DNiI7x3uDVn6Plw8bftrnivMDAZG24TFfr0NO7V2H79PW9XGXTl5zPj5XHeYDEbnbKgYe6UVzYpaq2RlHEc3qpACEs93TSAAAEBUlEQVR4nO3dCXaCMBAGYFnC5goqiopWa6v3P2FB22e0Koskk+D/nYCZl50snQ4AAAAAAAAAAAAAAAAAAAAAAAAA3EgHozCM4zhcTqIe9cfQicLpbt9lNmNOjtluMFyN+8u3S0k6/xy6julZvsHzLTNg9mqzpP4+eQb9vet412ngWSazD/FbFJA4sQPrYSL+eMwbT6g/VbB0ajCvMBNnpruKqb9XoPTDNR/Xjjv1hQ3n1N8sSG/DzAqZOPHZsJWlY2YFVVNxSoe9bl3bEa3tKhWE57kb6q9vVv9Yttm8Jxi2qHCkCXshFRnL/aKOoSkj65ViccZ27RiE9d26rQXP6w6oA2nA2G4gFUY+6NB/xnJwmslF1sm6uo/AklqDiwfcPnU4L1lVHnM+ddQ5G0mzucjKxow6pNq2TdaR32zoOlXZvDjUuovpORiduwJyYfhmSh1YDQMR5SLjrakjq2FYvLZXj6PfJHbbdEdy4eo2FI2FNBhnvq/XpK1nNDE5e8T8pI6vkrG4SpI7jqgDrGAksJLkrG/qCCtYiepJ/jB9huVhQ0sYj/ld6hhL+xZdMAwj0GVRNBZeMDImdZQl7cUXjKxo6LG0MZJRMAx/SB1nKdvXfwyUYYfUgZaQNrYC/Jx3oI60hH7zy1v3MQ0WNqQ0nzkNmtDoKCkXhqX+Ko+0WpLVk4g62CKJnL4k56j+h60nqS/JeaovaywFLQPfpfqQfCp2VeearfguhURWx5pTvdHoilz7vGV+UIf7VCRlkvbHSqjjfSqU2X6qvt41kzfkyrlK/0DZyOxMsu5E6V/yn/LGnzm197xJHIzn1O5bFzJ7VtVn8VKHGdlAY0od8DMyx5/KJ0Nuk2GYSu9bQTI4PtqMCzSgHHStHAy6OBiOczBR42AKz5G8uGNQx/sUlv14QjfD3lJ8QRi/Cnj4icSR2oIG1NEW6ElMhreljraIxEZD9Saj0/nCZpWLgeADBRfWijrWYgtscLuQt/VR+VrS6aSS+hNvRx1pGQdsl77ARnqe8ENZOUeTg1kyDt/4HnWUZUnoXR0N+tUzHNjjrUV3KBod5exMRB/yXVBHWAWOf3NwMQBP6JURltK/S+7AZSK8rrBrZj6oQ6tuIuoCIg3WdP6b4WoqjpBLy9T+8f7EAdfZcXDRIa/hKzA1vxAUl6Pyds0ddNW6jpw1dqGyHivABXDVNm9kNnAJe6Lb5OwRXM9/BQ838KKk/pMettLb5WuZd2s+9pK0o+W8MXVqPAP03YYO9Z50YweVHoiy2/ki0q9epafD1m1OxQkelbsy6K+Knhtk2/d4bvDk6UOU+3d6iPJXFH5tF/+fKB29T5H4B4/XAgAAAAAAAAAAAAAAAAAAAAAAABT7AXW+SAFnxumHAAAAAElFTkSuQmCC",
  "infected": 800000
}, {
  "name": "Australia",
  "capital": "Canberra",
  "currency": "Australian Dollar",
  "language": "English",
  "population": 25687000,
  "flag": "data:image/png;base64,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",
  "infected": 60000
}, {
  "name": "South Africa",
  "capital": "Pretoria",
  "currency": "South African Rand",
  "language": "Afrikaans, English",
  "population": 59308690,
  "flag": "https://brandburg.ru/images/flags/4x3/st.svg",
  "infected": 1200000
}];
},{}],"../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.7.8

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return /******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/exports: {},
        /******/id: moduleId,
        /******/loaded: false
        /******/
      };

      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      /******/ // Flag the module as loaded
      /******/
      module.loaded = true;

      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }

    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
  }
  /************************************************************************/
  /******/([( /* 0 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireWildcard = __webpack_require__(1)['default'];
    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    var _handlebarsBase = __webpack_require__(3);
    var base = _interopRequireWildcard(_handlebarsBase);

    // Each of these augment the Handlebars object. No need to setup here.
    // (This is done to easily share code between commonjs and browse envs)

    var _handlebarsSafeString = __webpack_require__(76);
    var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
    var _handlebarsException = __webpack_require__(5);
    var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
    var _handlebarsUtils = __webpack_require__(4);
    var Utils = _interopRequireWildcard(_handlebarsUtils);
    var _handlebarsRuntime = __webpack_require__(77);
    var runtime = _interopRequireWildcard(_handlebarsRuntime);
    var _handlebarsNoConflict = __webpack_require__(82);
    var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

    // For compatibility and usage outside of module systems, make the Handlebars object a namespace
    function create() {
      var hb = new base.HandlebarsEnvironment();
      Utils.extend(hb, base);
      hb.SafeString = _handlebarsSafeString2['default'];
      hb.Exception = _handlebarsException2['default'];
      hb.Utils = Utils;
      hb.escapeExpression = Utils.escapeExpression;
      hb.VM = runtime;
      hb.template = function (spec) {
        return runtime.template(spec, hb);
      };
      return hb;
    }
    var inst = create();
    inst.create = create;
    _handlebarsNoConflict2['default'](inst);
    inst['default'] = inst;
    exports['default'] = inst;
    module.exports = exports['default'];

    /***/
  }), ( /* 1 */
  /***/function (module, exports) {
    "use strict";

    exports["default"] = function (obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    };
    exports.__esModule = true;

    /***/
  }), ( /* 2 */
  /***/function (module, exports) {
    "use strict";

    exports["default"] = function (obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    };
    exports.__esModule = true;

    /***/
  }), ( /* 3 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    exports.HandlebarsEnvironment = HandlebarsEnvironment;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    var _helpers = __webpack_require__(9);
    var _decorators = __webpack_require__(69);
    var _logger = __webpack_require__(71);
    var _logger2 = _interopRequireDefault(_logger);
    var _internalProtoAccess = __webpack_require__(72);
    var VERSION = '4.7.8';
    exports.VERSION = VERSION;
    var COMPILER_REVISION = 8;
    exports.COMPILER_REVISION = COMPILER_REVISION;
    var LAST_COMPATIBLE_COMPILER_REVISION = 7;
    exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: '<= 1.0.rc.2',
      // 1.0.rc.2 is actually rev2 but doesn't report it
      2: '== 1.0.0-rc.3',
      3: '== 1.0.0-rc.4',
      4: '== 1.x.x',
      5: '== 2.0.0-alpha.x',
      6: '>= 2.0.0-beta.1',
      7: '>= 4.0.0 <4.3.0',
      8: '>= 4.3.0'
    };
    exports.REVISION_CHANGES = REVISION_CHANGES;
    var objectType = '[object Object]';
    function HandlebarsEnvironment(helpers, partials, decorators) {
      this.helpers = helpers || {};
      this.partials = partials || {};
      this.decorators = decorators || {};
      _helpers.registerDefaultHelpers(this);
      _decorators.registerDefaultDecorators(this);
    }
    HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,
      logger: _logger2['default'],
      log: _logger2['default'].log,
      registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2['default']('Arg not supported with multiple helpers');
          }
          _utils.extend(this.helpers, name);
        } else {
          this.helpers[name] = fn;
        }
      },
      unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
      },
      registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) {
          _utils.extend(this.partials, name);
        } else {
          if (typeof partial === 'undefined') {
            throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
          }
          this.partials[name] = partial;
        }
      },
      unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
      },
      registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2['default']('Arg not supported with multiple decorators');
          }
          _utils.extend(this.decorators, name);
        } else {
          this.decorators[name] = fn;
        }
      },
      unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
      },
      /**
       * Reset the memory of illegal property accesses that have already been logged.
       * @deprecated should only be used in handlebars test-cases
       */
      resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
      }
    };
    var log = _logger2['default'].log;
    exports.log = log;
    exports.createFrame = _utils.createFrame;
    exports.logger = _logger2['default'];

    /***/
  }), ( /* 4 */
  /***/function (module, exports) {
    'use strict';

    exports.__esModule = true;
    exports.extend = extend;
    exports.indexOf = indexOf;
    exports.escapeExpression = escapeExpression;
    exports.isEmpty = isEmpty;
    exports.createFrame = createFrame;
    exports.blockParams = blockParams;
    exports.appendContextPath = appendContextPath;
    var escape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    var badChars = /[&<>"'`=]/g,
      possible = /[&<>"'`=]/;
    function escapeChar(chr) {
      return escape[chr];
    }
    function extend(obj /* , ...source */) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    }
    var toString = Object.prototype.toString;
    exports.toString = toString;
    // Sourced from lodash
    // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
    /* eslint-disable func-style */
    var isFunction = function isFunction(value) {
      return typeof value === 'function';
    };
    // fallback for older versions of Chrome and Safari
    /* istanbul ignore next */
    if (isFunction(/x/)) {
      exports.isFunction = isFunction = function (value) {
        return typeof value === 'function' && toString.call(value) === '[object Function]';
      };
    }
    exports.isFunction = isFunction;

    /* eslint-enable func-style */

    /* istanbul ignore next */
    var isArray = Array.isArray || function (value) {
      return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
    };
    exports.isArray = isArray;
    // Older IE versions do not directly support indexOf so we must implement our own, sadly.

    function indexOf(array, value) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    }
    function escapeExpression(string) {
      if (typeof string !== 'string') {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) {
          return string.toHTML();
        } else if (string == null) {
          return '';
        } else if (!string) {
          return string + '';
        }

        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = '' + string;
      }
      if (!possible.test(string)) {
        return string;
      }
      return string.replace(badChars, escapeChar);
    }
    function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function createFrame(object) {
      var frame = extend({}, object);
      frame._parent = object;
      return frame;
    }
    function blockParams(params, ids) {
      params.path = ids;
      return params;
    }
    function appendContextPath(contextPath, id) {
      return (contextPath ? contextPath + '.' : '') + id;
    }

    /***/
  }), ( /* 5 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _Object$defineProperty = __webpack_require__(6)['default'];
    exports.__esModule = true;
    var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];
    function Exception(message, node) {
      var loc = node && node.loc,
        line = undefined,
        endLineNumber = undefined,
        column = undefined,
        endColumn = undefined;
      if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += ' - ' + line + ':' + column;
      }
      var tmp = Error.prototype.constructor.call(this, message);

      // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }

      /* istanbul ignore else */
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Exception);
      }
      try {
        if (loc) {
          this.lineNumber = line;
          this.endLineNumber = endLineNumber;

          // Work around issue under safari where we can't directly set the column value
          /* istanbul ignore next */
          if (_Object$defineProperty) {
            Object.defineProperty(this, 'column', {
              value: column,
              enumerable: true
            });
            Object.defineProperty(this, 'endColumn', {
              value: endColumn,
              enumerable: true
            });
          } else {
            this.column = column;
            this.endColumn = endColumn;
          }
        }
      } catch (nop) {
        /* Ignore if the browser is very particular */
      }
    }
    Exception.prototype = new Error();
    exports['default'] = Exception;
    module.exports = exports['default'];

    /***/
  }), ( /* 6 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(7),
      __esModule: true
    };

    /***/
  }), ( /* 7 */
  /***/function (module, exports, __webpack_require__) {
    var $ = __webpack_require__(8);
    module.exports = function defineProperty(it, key, desc) {
      return $.setDesc(it, key, desc);
    };

    /***/
  }), ( /* 8 */
  /***/function (module, exports) {
    var $Object = Object;
    module.exports = {
      create: $Object.create,
      getProto: $Object.getPrototypeOf,
      isEnum: {}.propertyIsEnumerable,
      getDesc: $Object.getOwnPropertyDescriptor,
      setDesc: $Object.defineProperty,
      setDescs: $Object.defineProperties,
      getKeys: $Object.keys,
      getNames: $Object.getOwnPropertyNames,
      getSymbols: $Object.getOwnPropertySymbols,
      each: [].forEach
    };

    /***/
  }), ( /* 9 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    exports.registerDefaultHelpers = registerDefaultHelpers;
    exports.moveHelperToHooks = moveHelperToHooks;
    var _helpersBlockHelperMissing = __webpack_require__(10);
    var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
    var _helpersEach = __webpack_require__(11);
    var _helpersEach2 = _interopRequireDefault(_helpersEach);
    var _helpersHelperMissing = __webpack_require__(64);
    var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
    var _helpersIf = __webpack_require__(65);
    var _helpersIf2 = _interopRequireDefault(_helpersIf);
    var _helpersLog = __webpack_require__(66);
    var _helpersLog2 = _interopRequireDefault(_helpersLog);
    var _helpersLookup = __webpack_require__(67);
    var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
    var _helpersWith = __webpack_require__(68);
    var _helpersWith2 = _interopRequireDefault(_helpersWith);
    function registerDefaultHelpers(instance) {
      _helpersBlockHelperMissing2['default'](instance);
      _helpersEach2['default'](instance);
      _helpersHelperMissing2['default'](instance);
      _helpersIf2['default'](instance);
      _helpersLog2['default'](instance);
      _helpersLookup2['default'](instance);
      _helpersWith2['default'](instance);
    }
    function moveHelperToHooks(instance, helperName, keepHelper) {
      if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) {
          delete instance.helpers[helperName];
        }
      }
    }

    /***/
  }), ( /* 10 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function (instance) {
      instance.registerHelper('blockHelperMissing', function (context, options) {
        var inverse = options.inverse,
          fn = options.fn;
        if (context === true) {
          return fn(this);
        } else if (context === false || context == null) {
          return inverse(this);
        } else if (_utils.isArray(context)) {
          if (context.length > 0) {
            if (options.ids) {
              options.ids = [options.name];
            }
            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          if (options.data && options.ids) {
            var data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
            options = {
              data: data
            };
          }
          return fn(context, options);
        }
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 11 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _Symbol = __webpack_require__(12)['default'];
    var _Symbol$iterator = __webpack_require__(42)['default'];
    var _getIterator = __webpack_require__(54)['default'];
    var _Object$keys = __webpack_require__(59)['default'];
    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function (instance) {
      instance.registerHelper('each', function (context, options) {
        if (!options) {
          throw new _exception2['default']('Must pass iterator to #each');
        }
        var fn = options.fn,
          inverse = options.inverse,
          i = 0,
          ret = '',
          data = undefined,
          contextPath = undefined;
        if (options.data && options.ids) {
          contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        if (options.data) {
          data = _utils.createFrame(options.data);
        }
        function execIteration(field, index, last) {
          if (data) {
            data.key = field;
            data.index = index;
            data.first = index === 0;
            data.last = !!last;
            if (contextPath) {
              data.contextPath = contextPath + field;
            }
          }
          ret = ret + fn(context[field], {
            data: data,
            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
          });
        }
        if (context && typeof context === 'object') {
          if (_utils.isArray(context)) {
            for (var j = context.length; i < j; i++) {
              if (i in context) {
                execIteration(i, i, i === context.length - 1);
              }
            }
          } else if (typeof _Symbol === 'function' && context[_Symbol$iterator]) {
            var newContext = [];
            var iterator = _getIterator(context);
            for (var it = iterator.next(); !it.done; it = iterator.next()) {
              newContext.push(it.value);
            }
            context = newContext;
            for (var j = context.length; i < j; i++) {
              execIteration(i, i, i === context.length - 1);
            }
          } else {
            (function () {
              var priorKey = undefined;
              _Object$keys(context).forEach(function (key) {
                // We're running the iterations one step out of sync so we can detect
                // the last iteration without have to scan the object twice and create
                // an itermediate keys array.
                if (priorKey !== undefined) {
                  execIteration(priorKey, i - 1);
                }
                priorKey = key;
                i++;
              });
              if (priorKey !== undefined) {
                execIteration(priorKey, i - 1, true);
              }
            })();
          }
        }
        if (i === 0) {
          ret = inverse(this);
        }
        return ret;
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 12 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(13),
      __esModule: true
    };

    /***/
  }), ( /* 13 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(14);
    __webpack_require__(41);
    module.exports = __webpack_require__(20).Symbol;

    /***/
  }), ( /* 14 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    // ECMAScript 6 symbols shim
    var $ = __webpack_require__(8),
      global = __webpack_require__(15),
      has = __webpack_require__(16),
      DESCRIPTORS = __webpack_require__(17),
      $export = __webpack_require__(19),
      redefine = __webpack_require__(23),
      $fails = __webpack_require__(18),
      shared = __webpack_require__(26),
      setToStringTag = __webpack_require__(27),
      uid = __webpack_require__(29),
      wks = __webpack_require__(28),
      keyOf = __webpack_require__(30),
      $names = __webpack_require__(35),
      enumKeys = __webpack_require__(36),
      isArray = __webpack_require__(37),
      anObject = __webpack_require__(38),
      toIObject = __webpack_require__(31),
      createDesc = __webpack_require__(25),
      getDesc = $.getDesc,
      setDesc = $.setDesc,
      _create = $.create,
      getNames = $names.get,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      setter = false,
      HIDDEN = wks('_hidden'),
      isEnum = $.isEnum,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      useNative = typeof $Symbol == 'function',
      ObjectProto = Object.prototype;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = DESCRIPTORS && $fails(function () {
      return _create(setDesc({}, 'a', {
        get: function () {
          return setDesc(this, 'a', {
            value: 7
          }).a;
        }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = getDesc(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      setDesc(it, key, D);
      if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
    } : setDesc;
    var wrap = function (tag) {
      var sym = AllSymbols[tag] = _create($Symbol.prototype);
      sym._k = tag;
      DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
        configurable: true,
        set: function (value) {
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        }
      });
      return sym;
    };
    var isSymbol = function (it) {
      return typeof it == 'symbol';
    };
    var $defineProperty = function defineProperty(it, key, D) {
      if (D && has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, {
            enumerable: createDesc(0, false)
          });
        }
        return setSymbolDesc(it, key, D);
      }
      return setDesc(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key);
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      var D = getDesc(it = toIObject(it), key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
      while (names.length > i) if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
      return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
      while (names.length > i) if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
      return result;
    };
    var $stringify = function stringify(it) {
      if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      var args = [it],
        i = 1,
        $$ = arguments,
        replacer,
        $replacer;
      while ($$.length > i) args.push($$[i++]);
      replacer = args[1];
      if (typeof replacer == 'function') $replacer = replacer;
      if ($replacer || !isArray(replacer)) replacer = function (key, value) {
        if ($replacer) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    };
    var buggyJSON = $fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({
        a: S
      }) != '{}' || _stringify(Object(S)) != '{}';
    });

    // 19.4.1.1 Symbol([description])
    if (!useNative) {
      $Symbol = function Symbol() {
        if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
        return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
      };
      redefine($Symbol.prototype, 'toString', function toString() {
        return this._k;
      });
      isSymbol = function (it) {
        return it instanceof $Symbol;
      };
      $.create = $create;
      $.isEnum = $propertyIsEnumerable;
      $.getDesc = $getOwnPropertyDescriptor;
      $.setDesc = $defineProperty;
      $.setDescs = $defineProperties;
      $.getNames = $names.get = $getOwnPropertyNames;
      $.getSymbols = $getOwnPropertySymbols;
      if (DESCRIPTORS && !__webpack_require__(40)) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }
    }
    var symbolStatics = {
      // 19.4.2.1 Symbol.for(key)
      'for': function (key) {
        return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(key) {
        return keyOf(SymbolRegistry, key);
      },
      useSetter: function () {
        setter = true;
      },
      useSimple: function () {
        setter = false;
      }
    };
    // 19.4.2.2 Symbol.hasInstance
    // 19.4.2.3 Symbol.isConcatSpreadable
    // 19.4.2.4 Symbol.iterator
    // 19.4.2.6 Symbol.match
    // 19.4.2.8 Symbol.replace
    // 19.4.2.9 Symbol.search
    // 19.4.2.10 Symbol.species
    // 19.4.2.11 Symbol.split
    // 19.4.2.12 Symbol.toPrimitive
    // 19.4.2.13 Symbol.toStringTag
    // 19.4.2.14 Symbol.unscopables
    $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
      var sym = wks(it);
      symbolStatics[it] = useNative ? sym : wrap(sym);
    });
    setter = true;
    $export($export.G + $export.W, {
      Symbol: $Symbol
    });
    $export($export.S, 'Symbol', symbolStatics);
    $export($export.S + $export.F * !useNative, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {
      stringify: $stringify
    });

    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);

    /***/
  }), ( /* 15 */
  /***/function (module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

    /***/
  }), ( /* 16 */
  /***/function (module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    /***/
  }), ( /* 17 */
  /***/function (module, exports, __webpack_require__) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(18)(function () {
      return Object.defineProperty({}, 'a', {
        get: function () {
          return 7;
        }
      }).a != 7;
    });

    /***/
  }), ( /* 18 */
  /***/function (module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    /***/
  }), ( /* 19 */
  /***/function (module, exports, __webpack_require__) {
    var global = __webpack_require__(15),
      core = __webpack_require__(20),
      ctx = __webpack_require__(21),
      PROTOTYPE = 'prototype';
    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && key in target;
        if (own && key in exports) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
        // bind timers to global for call from export context
        : IS_BIND && own ? ctx(out, global)
        // wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? function (C) {
          var F = function (param) {
            return this instanceof C ? new C(param) : C(param);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
          // make static versions for prototype methods
        }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
      }
    };
    // type bitmap
    $export.F = 1; // forced
    $export.G = 2; // global
    $export.S = 4; // static
    $export.P = 8; // proto
    $export.B = 16; // bind
    $export.W = 32; // wrap
    module.exports = $export;

    /***/
  }), ( /* 20 */
  /***/function (module, exports) {
    var core = module.exports = {
      version: '1.2.6'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

    /***/
  }), ( /* 21 */
  /***/function (module, exports, __webpack_require__) {
    // optional / simple context binding
    var aFunction = __webpack_require__(22);
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };
        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function /* ...args */
      () {
        return fn.apply(that, arguments);
      };
    };

    /***/
  }), ( /* 22 */
  /***/function (module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    /***/
  }), ( /* 23 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(24);

    /***/
  }), ( /* 24 */
  /***/function (module, exports, __webpack_require__) {
    var $ = __webpack_require__(8),
      createDesc = __webpack_require__(25);
    module.exports = __webpack_require__(17) ? function (object, key, value) {
      return $.setDesc(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    /***/
  }), ( /* 25 */
  /***/function (module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    /***/
  }), ( /* 26 */
  /***/function (module, exports, __webpack_require__) {
    var global = __webpack_require__(15),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
      return store[key] || (store[key] = {});
    };

    /***/
  }), ( /* 27 */
  /***/function (module, exports, __webpack_require__) {
    var def = __webpack_require__(8).setDesc,
      has = __webpack_require__(16),
      TAG = __webpack_require__(28)('toStringTag');
    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
      });
    };

    /***/
  }), ( /* 28 */
  /***/function (module, exports, __webpack_require__) {
    var store = __webpack_require__(26)('wks'),
      uid = __webpack_require__(29),
      Symbol = __webpack_require__(15).Symbol;
    module.exports = function (name) {
      return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };

    /***/
  }), ( /* 29 */
  /***/function (module, exports) {
    var id = 0,
      px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    /***/
  }), ( /* 30 */
  /***/function (module, exports, __webpack_require__) {
    var $ = __webpack_require__(8),
      toIObject = __webpack_require__(31);
    module.exports = function (object, el) {
      var O = toIObject(object),
        keys = $.getKeys(O),
        length = keys.length,
        index = 0,
        key;
      while (length > index) if (O[key = keys[index++]] === el) return key;
    };

    /***/
  }), ( /* 31 */
  /***/function (module, exports, __webpack_require__) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(32),
      defined = __webpack_require__(34);
    module.exports = function (it) {
      return IObject(defined(it));
    };

    /***/
  }), ( /* 32 */
  /***/function (module, exports, __webpack_require__) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(33);
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };

    /***/
  }), ( /* 33 */
  /***/function (module, exports) {
    var toString = {}.toString;
    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };

    /***/
  }), ( /* 34 */
  /***/function (module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

    /***/
  }), ( /* 35 */
  /***/function (module, exports, __webpack_require__) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = __webpack_require__(31),
      getNames = __webpack_require__(8).getNames,
      toString = {}.toString;
    var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function (it) {
      try {
        return getNames(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    module.exports.get = function getOwnPropertyNames(it) {
      if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
      return getNames(toIObject(it));
    };

    /***/
  }), ( /* 36 */
  /***/function (module, exports, __webpack_require__) {
    // all enumerable object keys, includes symbols
    var $ = __webpack_require__(8);
    module.exports = function (it) {
      var keys = $.getKeys(it),
        getSymbols = $.getSymbols;
      if (getSymbols) {
        var symbols = getSymbols(it),
          isEnum = $.isEnum,
          i = 0,
          key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) keys.push(key);
      }
      return keys;
    };

    /***/
  }), ( /* 37 */
  /***/function (module, exports, __webpack_require__) {
    // 7.2.2 IsArray(argument)
    var cof = __webpack_require__(33);
    module.exports = Array.isArray || function (arg) {
      return cof(arg) == 'Array';
    };

    /***/
  }), ( /* 38 */
  /***/function (module, exports, __webpack_require__) {
    var isObject = __webpack_require__(39);
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    /***/
  }), ( /* 39 */
  /***/function (module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    /***/
  }), ( /* 40 */
  /***/function (module, exports) {
    module.exports = true;

    /***/
  }), ( /* 41 */
  /***/function (module, exports) {

    /***/}), ( /* 42 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(43),
      __esModule: true
    };

    /***/
  }), ( /* 43 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(44);
    __webpack_require__(50);
    module.exports = __webpack_require__(28)('iterator');

    /***/
  }), ( /* 44 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var $at = __webpack_require__(45)(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    __webpack_require__(47)(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0; // next index
      // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t,
        index = this._i,
        point;
      if (index >= O.length) return {
        value: undefined,
        done: true
      };
      point = $at(O, index);
      this._i += point.length;
      return {
        value: point,
        done: false
      };
    });

    /***/
  }), ( /* 45 */
  /***/function (module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(46),
      defined = __webpack_require__(34);
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };

    /***/
  }), ( /* 46 */
  /***/function (module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil,
      floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    /***/
  }), ( /* 47 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var LIBRARY = __webpack_require__(40),
      $export = __webpack_require__(19),
      redefine = __webpack_require__(23),
      hide = __webpack_require__(24),
      has = __webpack_require__(16),
      Iterators = __webpack_require__(48),
      $iterCreate = __webpack_require__(49),
      setToStringTag = __webpack_require__(27),
      getProto = __webpack_require__(8).getProto,
      ITERATOR = __webpack_require__(28)('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      ,
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
    var returnThis = function () {
      return this;
    };
    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
      // Fix native
      if ($native) {
        var IteratorPrototype = getProto($default.call(new Base()));
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // FF fix
        if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
      }
      // Define iterator
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      // Plug for library
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: !DEF_VALUES ? $default : getMethod('entries')
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };

    /***/
  }), ( /* 48 */
  /***/function (module, exports) {
    module.exports = {};

    /***/
  }), ( /* 49 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var $ = __webpack_require__(8),
      descriptor = __webpack_require__(25),
      setToStringTag = __webpack_require__(27),
      IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    __webpack_require__(24)(IteratorPrototype, __webpack_require__(28)('iterator'), function () {
      return this;
    });
    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = $.create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + ' Iterator');
    };

    /***/
  }), ( /* 50 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(51);
    var Iterators = __webpack_require__(48);
    Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

    /***/
  }), ( /* 51 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var addToUnscopables = __webpack_require__(52),
      step = __webpack_require__(53),
      Iterators = __webpack_require__(48),
      toIObject = __webpack_require__(31);

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = __webpack_require__(47)(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated); // target
      this._i = 0; // next index
      this._k = kind; // kind
      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t,
        kind = this._k,
        index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
      }
      if (kind == 'keys') return step(0, index);
      if (kind == 'values') return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

    /***/
  }), ( /* 52 */
  /***/function (module, exports) {
    module.exports = function () {/* empty */};

    /***/
  }), ( /* 53 */
  /***/function (module, exports) {
    module.exports = function (done, value) {
      return {
        value: value,
        done: !!done
      };
    };

    /***/
  }), ( /* 54 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(55),
      __esModule: true
    };

    /***/
  }), ( /* 55 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(50);
    __webpack_require__(44);
    module.exports = __webpack_require__(56);

    /***/
  }), ( /* 56 */
  /***/function (module, exports, __webpack_require__) {
    var anObject = __webpack_require__(38),
      get = __webpack_require__(57);
    module.exports = __webpack_require__(20).getIterator = function (it) {
      var iterFn = get(it);
      if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
      return anObject(iterFn.call(it));
    };

    /***/
  }), ( /* 57 */
  /***/function (module, exports, __webpack_require__) {
    var classof = __webpack_require__(58),
      ITERATOR = __webpack_require__(28)('iterator'),
      Iterators = __webpack_require__(48);
    module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };

    /***/
  }), ( /* 58 */
  /***/function (module, exports, __webpack_require__) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = __webpack_require__(33),
      TAG = __webpack_require__(28)('toStringTag')
      // ES3 wrong here
      ,
      ARG = cof(function () {
        return arguments;
      }()) == 'Arguments';
    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };

    /***/
  }), ( /* 59 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(60),
      __esModule: true
    };

    /***/
  }), ( /* 60 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(61);
    module.exports = __webpack_require__(20).Object.keys;

    /***/
  }), ( /* 61 */
  /***/function (module, exports, __webpack_require__) {
    // 19.1.2.14 Object.keys(O)
    var toObject = __webpack_require__(62);
    __webpack_require__(63)('keys', function ($keys) {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });

    /***/
  }), ( /* 62 */
  /***/function (module, exports, __webpack_require__) {
    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__(34);
    module.exports = function (it) {
      return Object(defined(it));
    };

    /***/
  }), ( /* 63 */
  /***/function (module, exports, __webpack_require__) {
    // most Object methods by ES6 should accept primitives
    var $export = __webpack_require__(19),
      core = __webpack_require__(20),
      fails = __webpack_require__(18);
    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () {
        fn(1);
      }), 'Object', exp);
    };

    /***/
  }), ( /* 64 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function (instance) {
      instance.registerHelper('helperMissing', function () /* [args, ]options */{
        if (arguments.length === 1) {
          // A missing field in a {{foo}} construct.
          return undefined;
        } else {
          // Someone is actually trying to call something, blow up.
          throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        }
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 65 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function (instance) {
      instance.registerHelper('if', function (conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2['default']('#if requires exactly one argument');
        }
        if (_utils.isFunction(conditional)) {
          conditional = conditional.call(this);
        }

        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
      instance.registerHelper('unless', function (conditional, options) {
        if (arguments.length != 2) {
          throw new _exception2['default']('#unless requires exactly one argument');
        }
        return instance.helpers['if'].call(this, conditional, {
          fn: options.inverse,
          inverse: options.fn,
          hash: options.hash
        });
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 66 */
  /***/function (module, exports) {
    'use strict';

    exports.__esModule = true;
    exports['default'] = function (instance) {
      instance.registerHelper('log', function () /* message, options */{
        var args = [undefined],
          options = arguments[arguments.length - 1];
        for (var i = 0; i < arguments.length - 1; i++) {
          args.push(arguments[i]);
        }
        var level = 1;
        if (options.hash.level != null) {
          level = options.hash.level;
        } else if (options.data && options.data.level != null) {
          level = options.data.level;
        }
        args[0] = level;
        instance.log.apply(instance, args);
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 67 */
  /***/function (module, exports) {
    'use strict';

    exports.__esModule = true;
    exports['default'] = function (instance) {
      instance.registerHelper('lookup', function (obj, field, options) {
        if (!obj) {
          // Note for 5.0: Change to "obj == null" in 5.0
          return obj;
        }
        return options.lookupProperty(obj, field);
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 68 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function (instance) {
      instance.registerHelper('with', function (context, options) {
        if (arguments.length != 2) {
          throw new _exception2['default']('#with requires exactly one argument');
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
          var data = options.data;
          if (options.data && options.ids) {
            data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
          }
          return fn(context, {
            data: data,
            blockParams: _utils.blockParams([context], [data && data.contextPath])
          });
        } else {
          return options.inverse(this);
        }
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 69 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    exports.registerDefaultDecorators = registerDefaultDecorators;
    var _decoratorsInline = __webpack_require__(70);
    var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
    function registerDefaultDecorators(instance) {
      _decoratorsInline2['default'](instance);
    }

    /***/
  }), ( /* 70 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function (instance) {
      instance.registerDecorator('inline', function (fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
          props.partials = {};
          ret = function (context, options) {
            // Create a new partials stack frame prior to exec.
            var original = container.partials;
            container.partials = _utils.extend({}, original, props.partials);
            var ret = fn(context, options);
            container.partials = original;
            return ret;
          };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
      });
    };
    module.exports = exports['default'];

    /***/
  }), ( /* 71 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var logger = {
      methodMap: ['debug', 'info', 'warn', 'error'],
      level: 'info',
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function lookupLevel(level) {
        if (typeof level === 'string') {
          var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
          if (levelMap >= 0) {
            level = levelMap;
          } else {
            level = parseInt(level, 10);
          }
        }
        return level;
      },
      // Can be overridden in the host environment
      log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
          var method = logger.methodMap[level];
          // eslint-disable-next-line no-console
          if (!console[method]) {
            method = 'log';
          }
          for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            message[_key - 1] = arguments[_key];
          }
          console[method].apply(console, message); // eslint-disable-line no-console
        }
      }
    };
    exports['default'] = logger;
    module.exports = exports['default'];

    /***/
  }), ( /* 72 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _Object$create = __webpack_require__(73)['default'];
    var _Object$keys = __webpack_require__(59)['default'];
    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    exports.createProtoAccessControl = createProtoAccessControl;
    exports.resultIsAllowed = resultIsAllowed;
    exports.resetLoggedProperties = resetLoggedProperties;
    var _createNewLookupObject = __webpack_require__(75);
    var _logger = __webpack_require__(71);
    var _logger2 = _interopRequireDefault(_logger);
    var loggedProperties = _Object$create(null);
    function createProtoAccessControl(runtimeOptions) {
      var defaultMethodWhiteList = _Object$create(null);
      defaultMethodWhiteList['constructor'] = false;
      defaultMethodWhiteList['__defineGetter__'] = false;
      defaultMethodWhiteList['__defineSetter__'] = false;
      defaultMethodWhiteList['__lookupGetter__'] = false;
      var defaultPropertyWhiteList = _Object$create(null);
      // eslint-disable-next-line no-proto
      defaultPropertyWhiteList['__proto__'] = false;
      return {
        properties: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
          defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
          whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
          defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
      };
    }
    function resultIsAllowed(result, protoAccessControl, propertyName) {
      if (typeof result === 'function') {
        return checkWhiteList(protoAccessControl.methods, propertyName);
      } else {
        return checkWhiteList(protoAccessControl.properties, propertyName);
      }
    }
    function checkWhiteList(protoAccessControlForType, propertyName) {
      if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
        return protoAccessControlForType.whitelist[propertyName] === true;
      }
      if (protoAccessControlForType.defaultValue !== undefined) {
        return protoAccessControlForType.defaultValue;
      }
      logUnexpecedPropertyAccessOnce(propertyName);
      return false;
    }
    function logUnexpecedPropertyAccessOnce(propertyName) {
      if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        _logger2['default'].log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
      }
    }
    function resetLoggedProperties() {
      _Object$keys(loggedProperties).forEach(function (propertyName) {
        delete loggedProperties[propertyName];
      });
    }

    /***/
  }), ( /* 73 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(74),
      __esModule: true
    };

    /***/
  }), ( /* 74 */
  /***/function (module, exports, __webpack_require__) {
    var $ = __webpack_require__(8);
    module.exports = function create(P, D) {
      return $.create(P, D);
    };

    /***/
  }), ( /* 75 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _Object$create = __webpack_require__(73)['default'];
    exports.__esModule = true;
    exports.createNewLookupObject = createNewLookupObject;
    var _utils = __webpack_require__(4);

    /**
     * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
     * The resulting object can be used with "object[property]" to check if a property exists
     * @param {...object} sources a varargs parameter of source objects that will be merged
     * @returns {object}
     */

    function createNewLookupObject() {
      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
    }

    /***/
  }), ( /* 76 */
  /***/function (module, exports) {
    // Build out our basic SafeString type
    'use strict';

    exports.__esModule = true;
    function SafeString(string) {
      this.string = string;
    }
    SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
      return '' + this.string;
    };
    exports['default'] = SafeString;
    module.exports = exports['default'];

    /***/
  }), ( /* 77 */
  /***/function (module, exports, __webpack_require__) {
    'use strict';

    var _Object$seal = __webpack_require__(78)['default'];
    var _Object$keys = __webpack_require__(59)['default'];
    var _interopRequireWildcard = __webpack_require__(1)['default'];
    var _interopRequireDefault = __webpack_require__(2)['default'];
    exports.__esModule = true;
    exports.checkRevision = checkRevision;
    exports.template = template;
    exports.wrapProgram = wrapProgram;
    exports.resolvePartial = resolvePartial;
    exports.invokePartial = invokePartial;
    exports.noop = noop;
    var _utils = __webpack_require__(4);
    var Utils = _interopRequireWildcard(_utils);
    var _exception = __webpack_require__(5);
    var _exception2 = _interopRequireDefault(_exception);
    var _base = __webpack_require__(3);
    var _helpers = __webpack_require__(9);
    var _internalWrapHelper = __webpack_require__(81);
    var _internalProtoAccess = __webpack_require__(72);
    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = _base.COMPILER_REVISION;
      if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
        return;
      }
      if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
      }
    }
    function template(templateSpec, env) {
      /* istanbul ignore next */
      if (!env) {
        throw new _exception2['default']('No environment passed to template');
      }
      if (!templateSpec || !templateSpec.main) {
        throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
      }
      templateSpec.main.decorator = templateSpec.main_d;

      // Note: Using env.VM references rather than local var references throughout this section to allow
      // for external users to override these as pseudo-supported APIs.
      env.VM.checkRevision(templateSpec.compiler);

      // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
      var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
      function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
          context = Utils.extend({}, context, options.hash);
          if (options.ids) {
            options.ids[0] = true;
          }
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
          hooks: this.hooks,
          protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
          options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
          result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
          if (options.indent) {
            var lines = result.split('\n');
            for (var i = 0, l = lines.length; i < l; i++) {
              if (!lines[i] && i + 1 === l) {
                break;
              }
              lines[i] = options.indent + lines[i];
            }
            result = lines.join('\n');
          }
          return result;
        } else {
          throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
        }
      }

      // Just add water
      var container = {
        strict: function strict(obj, name, loc) {
          if (!obj || !(name in obj)) {
            throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
              loc: loc
            });
          }
          return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
          var result = parent[propertyName];
          if (result == null) {
            return result;
          }
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return result;
          }
          if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
            return result;
          }
          return undefined;
        },
        lookup: function lookup(depths, name) {
          var len = depths.length;
          for (var i = 0; i < len; i++) {
            var result = depths[i] && container.lookupProperty(depths[i], name);
            if (result != null) {
              return depths[i][name];
            }
          }
        },
        lambda: function lambda(current, context) {
          return typeof current === 'function' ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
          var ret = templateSpec[i];
          ret.decorator = templateSpec[i + '_d'];
          return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
          var programWrapper = this.programs[i],
            fn = this.fn(i);
          if (data || depths || blockParams || declaredBlockParams) {
            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
          }
          return programWrapper;
        },
        data: function data(value, depth) {
          while (value && depth--) {
            value = value._parent;
          }
          return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
          var obj = param || common;
          if (param && common && param !== common) {
            obj = Utils.extend({}, common, param);
          }
          return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: _Object$seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
      };
      function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
          data = initData(context, data);
        }
        var depths = undefined,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
          if (options.depths) {
            depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
          } else {
            depths = [context];
          }
        }
        function main(context /*, options*/) {
          return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
      }
      ret.isTop = true;
      ret._setup = function (options) {
        if (!options.partial) {
          var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
          wrapHelpersToPassLookupProperty(mergedHelpers, container);
          container.helpers = mergedHelpers;
          if (templateSpec.usePartial) {
            // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
          }
          if (templateSpec.usePartial || templateSpec.useDecorators) {
            container.decorators = Utils.extend({}, env.decorators, options.decorators);
          }
          container.hooks = {};
          container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
          var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
          _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
          _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
        } else {
          container.protoAccessControl = options.protoAccessControl; // internal option
          container.helpers = options.helpers;
          container.partials = options.partials;
          container.decorators = options.decorators;
          container.hooks = options.hooks;
        }
      };
      ret._child = function (i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) {
          throw new _exception2['default']('must pass block params');
        }
        if (templateSpec.useDepths && !depths) {
          throw new _exception2['default']('must pass parent depths');
        }
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
      };
      return ret;
    }
    function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
      function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
          currentDepths = [context].concat(depths);
        }
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
      }
      prog = executeDecorators(fn, prog, container, depths, data, blockParams);
      prog.program = i;
      prog.depth = depths ? depths.length : 0;
      prog.blockParams = declaredBlockParams || 0;
      return prog;
    }

    /**
     * This is currently part of the official API, therefore implementation details should not be changed.
     */

    function resolvePartial(partial, context, options) {
      if (!partial) {
        if (options.name === '@partial-block') {
          partial = options.data['partial-block'];
        } else {
          partial = options.partials[options.name];
        }
      } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
      }
      return partial;
    }
    function invokePartial(partial, context, options) {
      // Use the current closure context to save the partial-block if this partial
      var currentPartialBlock = options.data && options.data['partial-block'];
      options.partial = true;
      if (options.ids) {
        options.data.contextPath = options.ids[0] || options.data.contextPath;
      }
      var partialBlock = undefined;
      if (options.fn && options.fn !== noop) {
        (function () {
          options.data = _base.createFrame(options.data);
          // Wrapper function to get access to currentPartialBlock from the closure
          var fn = options.fn;
          partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = _base.createFrame(options.data);
            options.data['partial-block'] = currentPartialBlock;
            return fn(context, options);
          };
          if (fn.partials) {
            options.partials = Utils.extend({}, options.partials, fn.partials);
          }
        })();
      }
      if (partial === undefined && partialBlock) {
        partial = partialBlock;
      }
      if (partial === undefined) {
        throw new _exception2['default']('The partial ' + options.name + ' could not be found');
      } else if (partial instanceof Function) {
        return partial(context, options);
      }
    }
    function noop() {
      return '';
    }
    function initData(context, data) {
      if (!data || !('root' in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
      }
      return data;
    }
    function executeDecorators(fn, prog, container, depths, data, blockParams) {
      if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
      }
      return prog;
    }
    function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
      _Object$keys(mergedHelpers).forEach(function (helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
      });
    }
    function passLookupPropertyOption(helper, container) {
      var lookupProperty = container.lookupProperty;
      return _internalWrapHelper.wrapHelper(helper, function (options) {
        return Utils.extend({
          lookupProperty: lookupProperty
        }, options);
      });
    }

    /***/
  }), ( /* 78 */
  /***/function (module, exports, __webpack_require__) {
    module.exports = {
      "default": __webpack_require__(79),
      __esModule: true
    };

    /***/
  }), ( /* 79 */
  /***/function (module, exports, __webpack_require__) {
    __webpack_require__(80);
    module.exports = __webpack_require__(20).Object.seal;

    /***/
  }), ( /* 80 */
  /***/function (module, exports, __webpack_require__) {
    // 19.1.2.17 Object.seal(O)
    var isObject = __webpack_require__(39);
    __webpack_require__(63)('seal', function ($seal) {
      return function seal(it) {
        return $seal && isObject(it) ? $seal(it) : it;
      };
    });

    /***/
  }), ( /* 81 */
  /***/function (module, exports) {
    'use strict';

    exports.__esModule = true;
    exports.wrapHelper = wrapHelper;
    function wrapHelper(helper, transformOptionsFn) {
      if (typeof helper !== 'function') {
        // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
        // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
        return helper;
      }
      var wrapper = function wrapper() /* dynamic arguments */{
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
      };
      return wrapper;
    }

    /***/
  }), ( /* 82 */
  /***/function (module, exports) {
    /* global globalThis */
    'use strict';

    exports.__esModule = true;
    exports['default'] = function (Handlebars) {
      /* istanbul ignore next */
      // https://mathiasbynens.be/notes/globalthis
      (function () {
        if (typeof globalThis === 'object') return;
        Object.prototype.__defineGetter__('__magic__', function () {
          return this;
        });
        __magic__.globalThis = __magic__; // eslint-disable-line no-undef
        delete Object.prototype.__magic__;
      })();
      var $Handlebars = globalThis.Handlebars;

      /* istanbul ignore next */
      Handlebars.noConflict = function () {
        if (globalThis.Handlebars === Handlebars) {
          globalThis.Handlebars = $Handlebars;
        }
        return Handlebars;
      };
    };
    module.exports = exports['default'];

    /***/
  }
  /******/)]);
});
;
},{}],"templates/gallery-items.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return "<li class='gallery__item'>\r\n	<div class='gallery__thumb'>\r\n		<img src='" + alias4((helper = (helper = lookupProperty(helpers, "flag") || (depth0 != null ? lookupProperty(depth0, "flag") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "flag",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 12
        },
        "end": {
          "line": 4,
          "column": 22
        }
      }
    }) : helper)) + "' alt='Флаг " + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "name",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 34
        },
        "end": {
          "line": 4,
          "column": 44
        }
      }
    }) : helper)) + "' width='320' />\r\n	</div>\r\n	<h2>" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "name",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 6,
          "column": 5
        },
        "end": {
          "line": 6,
          "column": 15
        }
      }
    }) : helper)) + "</h2>\r\n	<p>\r\n		<b>столица:</b>\r\n		" + alias4((helper = (helper = lookupProperty(helpers, "capital") || (depth0 != null ? lookupProperty(depth0, "capital") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "capital",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 9,
          "column": 2
        },
        "end": {
          "line": 9,
          "column": 15
        }
      }
    }) : helper)) + "\r\n	</p>\r\n	<p>\r\n		<b>Валюта:</b>\r\n		" + alias4((helper = (helper = lookupProperty(helpers, "currency") || (depth0 != null ? lookupProperty(depth0, "currency") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "currency",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 13,
          "column": 2
        },
        "end": {
          "line": 13,
          "column": 16
        }
      }
    }) : helper)) + "\r\n	</p>\r\n	<p>\r\n		<b>Официальный язык:</b>\r\n		" + alias4((helper = (helper = lookupProperty(helpers, "language") || (depth0 != null ? lookupProperty(depth0, "language") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "language",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 17,
          "column": 2
        },
        "end": {
          "line": 17,
          "column": 16
        }
      }
    }) : helper)) + "\r\n	</p>\r\n	<p>\r\n		<b>Население:</b>\r\n		" + alias4((helper = (helper = lookupProperty(helpers, "population") || (depth0 != null ? lookupProperty(depth0, "population") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "population",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 21,
          "column": 2
        },
        "end": {
          "line": 21,
          "column": 18
        }
      }
    }) : helper)) + "\r\n		человек\r\n	</p>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "infected") : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(2, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 24,
          "column": 1
        },
        "end": {
          "line": 26,
          "column": 8
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "unless").call(alias1, depth0 != null ? lookupProperty(depth0, "infected") : depth0, {
      "name": "unless",
      "hash": {},
      "fn": container.program(4, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 27,
          "column": 1
        },
        "end": {
          "line": 29,
          "column": 12
        }
      }
    })) != null ? stack1 : "") + "</li>\r\n";
  },
  "2": function _(container, depth0, helpers, partials, data) {
    var helper,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return "	<p style=\"color: red;\">Все пропало! " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "infected") || (depth0 != null ? lookupProperty(depth0, "infected") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "infected",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 25,
          "column": 37
        },
        "end": {
          "line": 25,
          "column": 49
        }
      }
    }) : helper)) + "</p>\r\n";
  },
  "4": function _(container, depth0, helpers, partials, data) {
    return "	<p style=\"color: green;\">Пронесло</p>\r\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 31,
          "column": 9
        }
      }
    })) != null ? stack1 : "";
  },
  "useData": true
});
var _default = exports.default = templateFunction;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"js/04-gallery.js":[function(require,module,exports) {
"use strict";

require("../css/reset.css");
require("../css/style.css");
var _countries = _interopRequireDefault(require("./countries.json"));
var _galleryItems = _interopRequireDefault(require("../templates/gallery-items.hbs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// console.log('text');

var galleryRef = document.querySelector('.js-gallery');
var markup = (0, _galleryItems.default)(_countries.default);
galleryRef.insertAdjacentHTML('beforeend', markup);
},{"../css/reset.css":"css/reset.css","../css/style.css":"css/style.css","./countries.json":"js/countries.json","../templates/gallery-items.hbs":"templates/gallery-items.hbs"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55375" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/04-gallery.js"], null)
//# sourceMappingURL=/04-gallery.b269c427.js.map