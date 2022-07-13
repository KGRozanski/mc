/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #1d1d1d;\n  color: #fff;\n  font-family: \"Inconsolata\", monospace;\n}\n\np {\n  margin-left: 15px;\n}\np a {\n  color: rgb(255, 251, 0);\n}\n\ncode {\n  font-size: 14px;\n  background: #000;\n  padding: 6px 12px;\n  border: 1px solid gray;\n  display: inline-block;\n  margin: 10px 0 10px 0;\n  word-break: break-all;\n  max-width: 720px;\n}\ncode:hover {\n  cursor: pointer;\n}\n\nspan {\n  font-style: italic;\n}\n\n#copy {\n  position: absolute;\n  cursor: default;\n  opacity: 0;\n}\n\n@keyframes hintShowup {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.showUp {\n  animation-name: hintShowup;\n  animation-duration: 1s;\n}\n\n#gallery {\n  column-count: 4;\n  column-gap: 10px;\n}\n#gallery figure {\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  margin-bottom: 10px;\n  break-inside: avoid;\n}\n#gallery figure > img {\n  grid-row: 1/-1;\n  grid-column: 1;\n}\n#gallery figure a {\n  color: black;\n  text-decoration: none;\n}\n#gallery figcaption {\n  grid-row: 2;\n  grid-column: 1;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 0.2em 0.5em;\n  justify-self: start;\n}\n#gallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n@media only screen and (max-width: 576px) {\n  #gallery {\n    column-count: 1;\n  }\n}\n@media only screen and (min-width: 577px) and (max-width: 970px) {\n  #gallery {\n    column-count: 2;\n  }\n}\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\n  #gallery {\n    column-count: 3;\n  }\n}\n#othersGallery img {\n  max-width: 100%;\n}\n\n#header {\n  min-height: 100px;\n}\n#header nav ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n#header nav ol a {\n  color: #fff;\n  text-decoration: none;\n}\n#header nav ol li {\n  border: 1px solid #f2f2f2;\n  margin: 0 5px 10px 5px;\n  padding: 8px;\n}\n#header nav ol li:hover {\n  cursor: pointer;\n  background: #313131;\n}\n\n.links {\n  display: flex;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,WAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;AACI;EACI,uBAAA;AACR;;AAGA;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;AAAJ;AAEI;EACI,eAAA;AAAR;;AAIA;EACI,kBAAA;AADJ;;AAOA;EACI,kBAAA;EACA,eAAA;EACA,UAAA;AAJJ;;AAOA;EACI;IAAI,UAAA;EAHN;EAIE;IAAK,YAAA;EADP;EAEE;IAAK,UAAA;EACP;EAAE;IAAK,YAAA;EAGP;EAFE;IAAM,UAAA;EAKR;AACF;AAHA;EACI,0BAAA;EACA,sBAAA;AAKJ;;AAAA;EACI,eAAA;EACA,gBAAA;AAGJ;AACI;EACI,SAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,mBAAA;AACR;AAEI;EACI,cAAA;EACA,cAAA;AAAR;AAGI;EACI,YAAA;EACA,qBAAA;AADR;AAII;EACI,WAAA;EACA,cAAA;EACA,0CAAA;EACA,oBAAA;EACA,mBAAA;AAFR;AAMI;EACI,eAAA;EACA,eAAA;EACA,cAAA;AAJR;;AAQA;EACI;IACI,eAAA;EALN;AACF;AAQA;EACI;IACI,eAAA;EANN;AACF;AASA;EACI;IACI,eAAA;EAPN;AACF;AAWI;EACI,eAAA;AATR;;AAaA;EACI,iBAAA;AAVJ;AAaQ;EACI,aAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;AAXZ;AAaY;EACI,WAAA;EACA,qBAAA;AAXhB;AAcY;EACI,yBAAA;EACA,sBAAA;EACA,YAAA;AAZhB;AAcgB;EACI,eAAA;EACA,mBAAA;AAZpB;;AAmBA;EACI,aAAA;EACA,eAAA;AAhBJ","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background: #1d1d1d;\r\n    color: #fff;\r\n    font-family: 'Inconsolata', monospace;\r\n}\r\n\r\np{\r\n    margin-left: 15px;\r\n\r\n    a{\r\n        color: rgb(255, 251, 0);\r\n    }\r\n}\r\n\r\ncode{\r\n    font-size: 14px;\r\n    background: #000;\r\n    padding: 6px 12px;\r\n    border: 1px solid gray;\r\n    display: inline-block;\r\n    margin: 10px 0 10px 0;\r\n    word-break: break-all;\r\n    max-width: 720px;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\nspan{\r\n    font-style: italic;\r\n}\r\n\r\n\r\n\r\n\r\n#copy{\r\n    position: absolute;\r\n    cursor: default;\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes hintShowup {\r\n    0% {opacity: 0;}\r\n    10% {opacity: .9;}\r\n    50% {opacity: 1;}\r\n    80% {opacity: .9;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.showUp{\r\n    animation-name: hintShowup;\r\n    animation-duration: 1s;\r\n}\r\n\r\n\r\n\r\n#gallery{\r\n    column-count: 4;\r\n    column-gap: 10px;\r\n\r\n    \r\n\r\n    figure {\r\n        margin: 0;\r\n        display: grid;\r\n        grid-template-rows: 1fr auto;\r\n        margin-bottom: 10px;\r\n        break-inside: avoid;\r\n    }\r\n\r\n    figure > img {\r\n        grid-row: 1 / -1;\r\n        grid-column: 1;\r\n    }\r\n    \r\n    figure a {\r\n        color: black;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    figcaption {\r\n        grid-row: 2;\r\n        grid-column: 1;\r\n        background-color: rgba(255,255,255,.5);\r\n        padding: .2em .5em;\r\n        justify-self: start;\r\n    }\r\n\r\n    \r\n    img{\r\n        min-width: 100%;\r\n        max-width: 100%;\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    #gallery{\r\n        column-count: 1;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 577px) and (max-width: 970px) {\r\n    #gallery{\r\n        column-count: 2;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\r\n    #gallery{\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n#othersGallery{\r\n    img{\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n#header{\r\n    min-height: 100px;\r\n\r\n    nav{\r\n        ol{\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            list-style: none;\r\n            padding: 0;\r\n    \r\n            a{\r\n                color: #fff;\r\n                text-decoration: none;\r\n            }\r\n    \r\n            li{\r\n                border: 1px solid #f2f2f2;\r\n                margin: 0 5px 10px 5px;\r\n                padding: 8px;\r\n    \r\n                &:hover{\r\n                    cursor: pointer;\r\n                    background: #313131;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/js/components/header.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HEADER = `
        <h1>🌎 Mc'Docs</h1>

        <nav>
            <ol>
                <a href="index.html"><li>🏠 Home</li></a>
                <a href="map.html"><li>🗺️ Map</li></a>
                <a href="inspirations.html"><li>💡 Inspirations</li></a>
                <a href="selections.html"><li>📐 Selections</li></a>
                <a href="brushes.html"><li>⛏️ Brushes</li></a>
                <a href="formulas.html"><li>⚗️ Formulas</li></a>
                <a href="miscellaneous.html"><li>🪐 Miscellaneous</li></a>
                <a href="others.html"><li>📜 Archivas</li></a>
            </ol>
        </nav>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HEADER);

/***/ }),

/***/ "./src/assets/js/images.js":
/*!*********************************!*\
  !*** ./src/assets/js/images.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inspirations": () => (/* binding */ inspirations),
/* harmony export */   "others": () => (/* binding */ others)
/* harmony export */ });
let inspirations = ["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.png","26.jpg","27.png","28.jpg","29.png","3.jpg","30.jpg","31.png","32.jpg","33.png","34.jpg","35.png","36.jpg","37.png","38.jpg","39.png","4.jpg","40.jpg","41.webp","42.png","43.jpg","44.webp","45.png","46.jpg","47.webp","48.png","49.jpg","49.webp","5.jpg","50.png","6.jpg","7.jpg","8.jpg","9.jpg"];let others = ["2010vs2020.png","railway_stations_plan_31_07_2021.png","roads_plan_2021-09-07 212912.png","stara wyspa hyde parku.png","studium_korytazowe.png","which_way_to_wox_town.png","World1_2021-06-12.png","wox_elevator.png","Zrzut ekranu 2021-08-06 222656.png.png","Zrzut ekranu 2021-09-24 232241.png","Zrzut ekranu 2021-09-24 232412.png","Zrzut ekranu 2021-09-24 234257.png","Zrzut-ekranu-2021-09-23-224049.png"]; 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _assets_js_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/images */ "./src/assets/js/images.js");
/* harmony import */ var _assets_js_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/components/header */ "./src/assets/js/components/header.js");



var copy;
var codes = Array.prototype.slice.call(document.getElementsByTagName("code"));
document.addEventListener("DOMContentLoaded", function () {
    var div = document.createElement("div");
    div.id = "copy";
    div.textContent = "Skopiowano!";
    document.body.appendChild(div);
    copy = div;
    addCopyHintEventListener();
    renderHeader();
    renderGallery('gallery');
    renderGallery('othersGallery');
});
function addCopyHintEventListener() {
    document.addEventListener("mousemove", function (e) {
        document.getElementById("copy").style.left = e.pageX + 20 + "px";
        document.getElementById("copy").style.top = e.pageY + 20 + "px";
    });
}
codes.forEach(function (code) {
    code.addEventListener("click", function (e) {
        navigator.clipboard.writeText(e.target.innerText).then(function () {
            console.log(copy);
            copy.classList.add("showUp");
            setTimeout(function () {
                copy.classList.remove("showUp");
            }, 1000);
        });
    });
});
function renderGallery(name) {
    var GALLERY = document.getElementById(name);
    var OTHERS_GALLERY = document.getElementById(name);
    var tmpl = '';
    if (GALLERY && name == "gallery") {
        var sortedInspirations = _assets_js_images__WEBPACK_IMPORTED_MODULE_1__.inspirations.sort(function (a, b) {
            var LEFT = Number(a.split('.')[0]);
            var RIGHT = Number(b.split('.')[0]);
            if (LEFT > RIGHT) {
                return 1;
            }
            if (LEFT < RIGHT) {
                return -1;
            }
            return 0;
        });
        for (var _i = 0, sortedInspirations_1 = sortedInspirations; _i < sortedInspirations_1.length; _i++) {
            var file = sortedInspirations_1[_i];
            tmpl += "\n\t\t\t\t<figure>\n\t\t\t\t\t<img src=\"/images/inspirations/".concat(file, "\">\n\t\t\t\t\t<figcaption>").concat(file, "</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t");
        }
        GALLERY.insertAdjacentHTML("beforeend", tmpl);
    }
    if (OTHERS_GALLERY && name === "othersGallery") {
        for (var _a = 0, others_1 = _assets_js_images__WEBPACK_IMPORTED_MODULE_1__.others; _a < others_1.length; _a++) {
            var file = others_1[_a];
            tmpl += "\n\t\t\t\t<figure>\n\t\t\t\t\t<img src=\"/images/others/".concat(file, "\">\n\t\t\t\t\t<figcaption>").concat(file, "</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t");
        }
        GALLERY.insertAdjacentHTML("beforeend", tmpl);
    }
}
function renderHeader() {
    document.getElementById('header').insertAdjacentHTML("beforeend", _assets_js_components_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQU4sSUFBTSxFQUFFO1lBQXBCLElBQUksSUFBSTtZQUNaLElBQUksSUFBSSxrRUFFcUIsSUFBSSx3Q0FDakIsSUFBSSwrQ0FFbEIsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztBQUdGLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsb0VBQU0sQ0FBQyxDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JsZC1lZGl0LWhlbHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93b3JsZC1lZGl0LWhlbHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd29ybGQtZWRpdC1oZWxwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd29ybGQtZWRpdC1oZWxwLy4vc3JjL2Fzc2V0cy9qcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vd29ybGQtZWRpdC1oZWxwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93b3JsZC1lZGl0LWhlbHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmxkLWVkaXQtaGVscC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd29ybGQtZWRpdC1oZWxwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5jb25zb2xhdGFcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbnAgYSB7XFxuICBjb2xvcjogcmdiKDI1NSwgMjUxLCAwKTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG59XFxuY29kZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jY29weSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpbnRTaG93dXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uc2hvd1VwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBoaW50U2hvd3VwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuI2dhbGxlcnkge1xcbiAgY29sdW1uLWNvdW50OiA0O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuI2dhbGxlcnkgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxufVxcbiNnYWxsZXJ5IGZpZ3VyZSA+IGltZyB7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4jZ2FsbGVyeSBmaWd1cmUgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiNnYWxsZXJ5IGZpZ2NhcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuI2dhbGxlcnkgaW1nIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjZ2FsbGVyeSB7XFxuICAgIGNvbHVtbi1jb3VudDogMTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxuICAjZ2FsbGVyeSB7XFxuICAgIGNvbHVtbi1jb3VudDogMjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NzFweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDM7XFxuICB9XFxufVxcbiNvdGhlcnNHYWxsZXJ5IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcbiNoZWFkZXIgbmF2IG9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2hlYWRlciBuYXYgb2wgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2hlYWRlciBuYXYgb2wgbGkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbiNoZWFkZXIgbmF2IG9sIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzMTMxMzE7XFxufVxcblxcbi5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUNJO0VBQ0ksdUJBQUE7QUFDUjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9BO0VBQ0k7SUFBSSxVQUFBO0VBSE47RUFJRTtJQUFLLFlBQUE7RUFEUDtFQUVFO0lBQUssVUFBQTtFQUNQO0VBQUU7SUFBSyxZQUFBO0VBR1A7RUFGRTtJQUFNLFVBQUE7RUFLUjtBQUNGO0FBSEE7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUNJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFJSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFNSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpSOztBQVFBO0VBQ0k7SUFDSSxlQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0k7SUFDSSxlQUFBO0VBTk47QUFDRjtBQVNBO0VBQ0k7SUFDSSxlQUFBO0VBUE47QUFDRjtBQVdJO0VBQ0ksZUFBQTtBQVRSOztBQWFBO0VBQ0ksaUJBQUE7QUFWSjtBQWFRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFYWjtBQWFZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBWGhCO0FBY1k7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVpoQjtBQWNnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQVpwQjs7QUFtQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQWhCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMWQxZDFkO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFxyXFxuICAgIGF7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjUxLCAwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5jb2Rle1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbnNwYW57XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvcHl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhpbnRTaG93dXAge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwJSB7b3BhY2l0eTogLjk7fVxcclxcbiAgICA1MCUge29wYWNpdHk6IDE7fVxcclxcbiAgICA4MCUge29wYWNpdHk6IC45O31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5zaG93VXB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaW50U2hvd3VwO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jZ2FsbGVyeXtcXHJcXG4gICAgY29sdW1uLWNvdW50OiA0O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgZmlndXJlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZmlndXJlID4gaW1nIHtcXHJcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgZmlndXJlIGEge1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBmaWdjYXB0aW9uIHtcXHJcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgI2dhbGxlcnl7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxyXFxuICAgICNnYWxsZXJ5e1xcclxcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTcxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcXHJcXG4gICAgI2dhbGxlcnl7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI290aGVyc0dhbGxlcnl7XFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVye1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgb2x7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBhe1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgbGl7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5saW5rc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IEhFQURFUiA9IGBcclxuICAgICAgICA8aDE+8J+MjiBNYydEb2NzPC9oMT5cclxuXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj48bGk+8J+PoCBIb21lPC9saT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFwLmh0bWxcIj48bGk+8J+Xuu+4jyBNYXA8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbnNwaXJhdGlvbnMuaHRtbFwiPjxsaT7wn5KhIEluc3BpcmF0aW9uczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInNlbGVjdGlvbnMuaHRtbFwiPjxsaT7wn5OQIFNlbGVjdGlvbnM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJicnVzaGVzLmh0bWxcIj48bGk+4puP77iPIEJydXNoZXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJmb3JtdWxhcy5odG1sXCI+PGxpPuKal++4jyBGb3JtdWxhczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1pc2NlbGxhbmVvdXMuaHRtbFwiPjxsaT7wn6qQIE1pc2NlbGxhbmVvdXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJvdGhlcnMuaHRtbFwiPjxsaT7wn5OcIEFyY2hpdmFzPC9saT48L2E+XHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgPC9uYXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIRUFERVI7IiwibGV0IGluc3BpcmF0aW9ucyA9IFtcIjEuanBnXCIsXCIxMC5qcGdcIixcIjExLmpwZ1wiLFwiMTIuanBnXCIsXCIxMy5qcGdcIixcIjE0LmpwZ1wiLFwiMTUuanBnXCIsXCIxNi5qcGdcIixcIjE3LmpwZ1wiLFwiMTguanBnXCIsXCIxOS5qcGdcIixcIjIuanBnXCIsXCIyMC5qcGdcIixcIjIxLmpwZ1wiLFwiMjIuanBnXCIsXCIyMy5qcGdcIixcIjI0LmpwZ1wiLFwiMjUucG5nXCIsXCIyNi5qcGdcIixcIjI3LnBuZ1wiLFwiMjguanBnXCIsXCIyOS5wbmdcIixcIjMuanBnXCIsXCIzMC5qcGdcIixcIjMxLnBuZ1wiLFwiMzIuanBnXCIsXCIzMy5wbmdcIixcIjM0LmpwZ1wiLFwiMzUucG5nXCIsXCIzNi5qcGdcIixcIjM3LnBuZ1wiLFwiMzguanBnXCIsXCIzOS5wbmdcIixcIjQuanBnXCIsXCI0MC5qcGdcIixcIjQxLndlYnBcIixcIjQyLnBuZ1wiLFwiNDMuanBnXCIsXCI0NC53ZWJwXCIsXCI0NS5wbmdcIixcIjQ2LmpwZ1wiLFwiNDcud2VicFwiLFwiNDgucG5nXCIsXCI0OS5qcGdcIixcIjQ5LndlYnBcIixcIjUuanBnXCIsXCI1MC5wbmdcIixcIjYuanBnXCIsXCI3LmpwZ1wiLFwiOC5qcGdcIixcIjkuanBnXCJdO2xldCBvdGhlcnMgPSBbXCIyMDEwdnMyMDIwLnBuZ1wiLFwicmFpbHdheV9zdGF0aW9uc19wbGFuXzMxXzA3XzIwMjEucG5nXCIsXCJyb2Fkc19wbGFuXzIwMjEtMDktMDcgMjEyOTEyLnBuZ1wiLFwic3RhcmEgd3lzcGEgaHlkZSBwYXJrdS5wbmdcIixcInN0dWRpdW1fa29yeXRhem93ZS5wbmdcIixcIndoaWNoX3dheV90b193b3hfdG93bi5wbmdcIixcIldvcmxkMV8yMDIxLTA2LTEyLnBuZ1wiLFwid294X2VsZXZhdG9yLnBuZ1wiLFwiWnJ6dXQgZWtyYW51IDIwMjEtMDgtMDYgMjIyNjU2LnBuZy5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzMjI0MS5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzMjQxMi5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzNDI1Ny5wbmdcIixcIlpyenV0LWVrcmFudS0yMDIxLTA5LTIzLTIyNDA0OS5wbmdcIl07IGV4cG9ydCB7aW5zcGlyYXRpb25zLCBvdGhlcnN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge2luc3BpcmF0aW9ucywgb3RoZXJzfSBmcm9tICcuL2Fzc2V0cy9qcy9pbWFnZXMnO1xyXG5pbXBvcnQgSEVBREVSIGZyb20gXCIuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5sZXQgY29weTogYW55O1xyXG5cclxuY29uc3QgY29kZXM6IEFycmF5PEhUTUxFbGVtZW50PiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29kZVwiKVxyXG4pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGRpdi5pZCA9IFwiY29weVwiO1xyXG5cdGRpdi50ZXh0Q29udGVudCA9IFwiU2tvcGlvd2FubyFcIjtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblx0Y29weSA9IGRpdjtcclxuXHJcblx0YWRkQ29weUhpbnRFdmVudExpc3RlbmVyKCk7XHJcblx0cmVuZGVySGVhZGVyKCk7XHJcblx0cmVuZGVyR2FsbGVyeSgnZ2FsbGVyeScpO1xyXG5cdHJlbmRlckdhbGxlcnkoJ290aGVyc0dhbGxlcnknKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDb3B5SGludEV2ZW50TGlzdGVuZXIoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFwibW91c2Vtb3ZlXCIsXHJcblx0XHQoZTogTW91c2VFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weVwiKS5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArIDIwICsgXCJweFwiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlcIikuc3R5bGUudG9wID0gZS5wYWdlWSArIDIwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbmNvZGVzLmZvckVhY2goKGNvZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0Y29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGUudGFyZ2V0LmlubmVyVGV4dCkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNvcHkpO1xyXG5cdFx0XHRjb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYWxsZXJ5KG5hbWU6IHN0cmluZykge1xyXG5cdGNvbnN0IEdBTExFUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuXHRjb25zdCBPVEhFUlNfR0FMTEVSWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xyXG5cdGxldCB0bXBsID0gJyc7XHJcblxyXG5cclxuXHJcblx0aWYoR0FMTEVSWSAmJiBuYW1lID09IFwiZ2FsbGVyeVwiKSB7XHJcblx0XHRsZXQgc29ydGVkSW5zcGlyYXRpb25zID0gaW5zcGlyYXRpb25zLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XHJcblx0XHRcdGNvbnN0IExFRlQgPSBOdW1iZXIoYS5zcGxpdCgnLicpWzBdKTtcclxuXHRcdFx0Y29uc3QgUklHSFQgPSAgTnVtYmVyKGIuc3BsaXQoJy4nKVswXSk7XHJcblx0XHJcblx0XHRcdGlmKCBMRUZUID4gUklHSFQgKSB7IHJldHVybiAxOyB9XHJcblx0XHJcblx0XHRcdGlmICggTEVGVCA8IFJJR0hUICkgeyByZXR1cm4gLTE7IH1cclxuXHRcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBmaWxlIG9mIHNvcnRlZEluc3BpcmF0aW9ucykge1xyXG5cdFx0XHR0bXBsICs9IGBcclxuXHRcdFx0XHQ8ZmlndXJlPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2luc3BpcmF0aW9ucy8ke2ZpbGV9XCI+XHJcblx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj4ke2ZpbGV9PC9maWdjYXB0aW9uPlxyXG5cdFx0XHRcdDwvZmlndXJlPlxyXG5cdFx0XHRcdGA7XHJcblx0XHR9XHJcblxyXG5cdFx0R0FMTEVSWS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wbCk7XHJcblx0fVxyXG5cclxuXHRpZihPVEhFUlNfR0FMTEVSWSAmJiBuYW1lID09PSBcIm90aGVyc0dhbGxlcnlcIikge1xyXG5cdFx0Zm9yIChsZXQgZmlsZSBvZiBvdGhlcnMpIHtcclxuXHRcdFx0dG1wbCArPSBgXHJcblx0XHRcdFx0PGZpZ3VyZT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9vdGhlcnMvJHtmaWxlfVwiPlxyXG5cdFx0XHRcdFx0PGZpZ2NhcHRpb24+JHtmaWxlfTwvZmlnY2FwdGlvbj5cclxuXHRcdFx0XHQ8L2ZpZ3VyZT5cclxuXHRcdFx0XHRgO1xyXG5cdFx0fVxyXG5cclxuXHRcdEdBTExFUlkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRtcGwpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBIRUFERVIpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9