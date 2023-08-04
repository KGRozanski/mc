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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_banner_faded_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/banner-faded.png */ "./src/assets/img/banner-faded.png");
/* harmony import */ var _assets_img_bg_footer_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/bg-footer.jpg */ "./src/assets/img/bg-footer.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_banner_faded_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_bg_footer_jpg__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n  position: relative;\n  min-height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n}\n#header h1 {\n  float: left;\n  margin-top: 0;\n  position: relative;\n  left: -6px;\n}\n#header .serverIp {\n  display: inline-block;\n  margin: 7px 0 0 30px;\n  border: 1px solid #00d26a;\n  border-radius: 6px;\n  padding: 5px 10px;\n}\n#header .serverIp:hover {\n  cursor: pointer;\n}\n#header nav {\n  clear: both;\n}\n#header nav ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n#header nav ol a {\n  color: #fff;\n  text-decoration: none;\n}\n#header nav ol li {\n  border: 1px solid #f2f2f2;\n  margin: 0 10px 10px 0;\n  padding: 8px;\n  background: #313131;\n}\n#header nav ol li:hover {\n  cursor: pointer;\n  background: #3a3a3a;\n}\n\n#footer {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  min-height: 150px;\n  padding-top: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#footer:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background: linear-gradient(180deg, rgb(29, 29, 29) 0%, rgba(64, 64, 64, 0) 56%);\n}\n\n#gallery {\n  column-count: 4;\n  column-gap: 10px;\n}\n#gallery figure {\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  margin-bottom: 10px;\n  break-inside: avoid;\n}\n#gallery figure > img {\n  grid-row: 1/-1;\n  grid-column: 1;\n}\n#gallery figure a {\n  color: black;\n  text-decoration: none;\n}\n#gallery figcaption {\n  grid-row: 2;\n  grid-column: 1;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 0.2em 0.5em;\n  justify-self: start;\n}\n#gallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n#archivasGallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n@media only screen and (max-width: 576px) {\n  #gallery {\n    column-count: 1;\n  }\n}\n@media only screen and (min-width: 577px) and (max-width: 970px) {\n  #gallery {\n    column-count: 2;\n  }\n}\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\n  #gallery {\n    column-count: 3;\n  }\n}\n#archivasGallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n\n.archivePhotoLink {\n  display: block;\n  text-decoration: none;\n  transition: border 0.1618s ease-out;\n  padding: 5px;\n}\n.archivePhotoLink:hover {\n  border: 1px solid rgb(248, 248, 248);\n}\n.archivePhotoLink figcaption {\n  color: rgb(248, 248, 248);\n}\n\ncode {\n  font-size: 14px;\n  background: #000;\n  padding: 6px 12px;\n  border: 1px solid gray;\n  display: inline-block;\n  margin: 10px 0 10px 0;\n  word-break: break-all;\n  max-width: 720px;\n}\ncode:hover {\n  cursor: pointer;\n}\n\n#copy {\n  position: absolute;\n  cursor: default;\n  opacity: 0;\n}\n\n@keyframes hintShowup {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.showUp {\n  animation-name: hintShowup;\n  animation-duration: 1s;\n}\n\n.warn-box {\n  display: flex;\n  align-items: center;\n  max-width: 800px;\n  background-color: rgba(0, 204, 255, 0.7);\n  border: 2px solid rgba(218, 218, 218, 0.9);\n  color: #000;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 10px 13px;\n}\n.warn-box .icon {\n  font-size: 28px;\n  margin-right: 20px;\n}\n\n.bio {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid;\n  padding: 0 20px;\n  max-width: 900px;\n  background-color: #2a6197;\n}\n.bio .desc {\n  max-width: 608px;\n}\n.bio p {\n  margin: 0;\n}\n.bio img {\n  display: block;\n  max-width: 200px;\n  border-radius: 50%;\n  margin: 20px 0 20px 50px;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tutorial-img {\n  display: block;\n  max-width: 500px;\n  margin: 10px 0;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n  background: linear-gradient(0deg, rgb(29, 29, 29) 0%, rgb(29, 29, 29) 80%, rgb(44, 44, 44) 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgb(29, 29, 29);\n}\n\nbody {\n  color: rgb(248, 248, 248);\n  font-family: \"Inconsolata\", monospace;\n}\n\np {\n  margin-left: 15px;\n}\np a {\n  color: rgb(255, 251, 0);\n}\n\n.links {\n  display: flex;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/parcials/_header.scss","webpack://./src/style.scss","webpack://./src/assets/scss/parcials/_footer.scss","webpack://./src/assets/scss/parcials/_gallery.scss","webpack://./src/assets/scss/mixins/_img-gallery.mixin.scss","webpack://./src/assets/scss/parcials/_archivas-gallery.scss","webpack://./src/assets/scss/abstracts/_variables.scss","webpack://./src/assets/scss/parcials/_code-snippet.scss","webpack://./src/assets/scss/parcials/_copy-hint.scss","webpack://./src/assets/scss/parcials/_warn-box.scss","webpack://./src/assets/scss/parcials/_bio.scss","webpack://./src/assets/scss/abstracts/_fonts.scss","webpack://./src/assets/scss/abstracts/_common.scss","webpack://./src/assets/scss/mixins/_global-bg-gradient.mixin.scss"],"names":[],"mappings":"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","sourcesContent":["#header{\n    position: relative;\n    min-height: 100px;\n    background-image: url('/src/assets/img/banner-faded.png');\n    background-position: bottom right;\n    background-repeat: no-repeat;\n\n    h1{\n        float: left;\n        margin-top: 0;\n        position: relative;\n        left: -6px;\n    }\n\n    .serverIp{\n        display: inline-block;\n        margin: 7px 0 0 30px;\n        border: 1px solid #00d26a;\n        border-radius: 6px;\n        padding: 5px 10px;\n\n        &:hover{\n            cursor: pointer;\n        }\n    }\n\n    nav{\n        clear: both;\n\n        ol{\n            display: flex;\n            flex-wrap: wrap;\n            list-style: none;\n            padding: 0;\n    \n            a{\n                color: #fff;\n                text-decoration: none;\n            }\n    \n            li{\n                border: 1px solid #f2f2f2;\n                margin: 0 10px 10px 0;\n                padding: 8px;\n                background: #313131;\n    \n                &:hover{\n                    cursor: pointer;\n                    background: #3a3a3a;\n                }\n            }\n        }\n    }\n}","@use './assets/scss/parcials/header';\n@use './assets/scss/parcials/footer';\n@use './assets/scss/parcials/gallery';\n@use './assets/scss/parcials/archivas-gallery';\n@use './assets/scss/parcials/code-snippet';\n@use './assets/scss/parcials/copy-hint';\n@use './assets/scss/parcials/warn-box';\n@use './assets/scss/parcials/bio';\n@use './assets/scss/abstracts';\n@use './assets/scss/mixins/global-bg-gradient.mixin' as bg;\n\n*{\n    box-sizing: border-box;\n}\nhtml{\n    overflow-x: hidden;\n    @include bg.global-bg-gradient();\n}\n\nbody{\n    color: abstracts.$main-font-color;\n    font-family: 'Inconsolata', monospace;\n\n}\n\np{\n    margin-left: 15px;\n\n    a{\n        color: abstracts.$link-color;\n    }\n}\n\n.links{\n    display: flex;\n    flex-wrap: wrap;\n}","#footer{\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    min-height: 150px;\n    padding-top: 50px;\n    background-image: url(\"/src/assets/img/bg-footer.jpg\");\n\n\n    &:after{\n        content: '';\n        display: block;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 100;\n        background: linear-gradient(180deg, rgba(29,29,29,1) 0%, rgba(64,64,64,0) 56%);\n    }\n}","@import '../mixins/img-gallery.mixin';\n\n#gallery{\n    column-count: 4;\n    column-gap: 10px;\n\n    figure {\n        margin: 0;\n        display: grid;\n        grid-template-rows: 1fr auto;\n        margin-bottom: 10px;\n        break-inside: avoid;\n    }\n\n    figure > img {\n        grid-row: 1 / -1;\n        grid-column: 1;\n    }\n    \n    figure a {\n        color: black;\n        text-decoration: none;\n    }\n    \n    figcaption {\n        grid-row: 2;\n        grid-column: 1;\n        background-color: rgba(255,255,255,.5);\n        padding: .2em .5em;\n        justify-self: start;\n    }\n\n    @include img-gallery()\n\n}\n\n#archivasGallery{\n    @include img-gallery()\n}\n\n@media only screen and (max-width: 576px) {\n    #gallery{\n        column-count: 1;\n    }\n}\n\n@media only screen and (min-width: 577px) and (max-width: 970px) {\n    #gallery{\n        column-count: 2;\n    }\n}\n\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\n    #gallery{\n        column-count: 3;\n    }\n}\n\n","@mixin img-gallery() {\n    img{\n        min-width: 100%;\n        max-width: 100%;\n        display: block;\n    }\n}\n","@use '../abstracts/variables';\n\n#archivasGallery{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n\n.archivePhotoLink{\n    display: block;\n    text-decoration: none;\n    transition: border 0.1618s ease-out;\n    padding: 5px;\n\n    &:hover{\n        border: 1px solid variables.$main-font-color;\n    }\n\n    figcaption{\n        color: variables.$main-font-color;\n    }\n}","$link-color: rgb(255, 251, 0);\n$main-font-color: rgb(248, 248, 248);","code{\n    font-size: 14px;\n    background: #000;\n    padding: 6px 12px;\n    border: 1px solid gray;\n    display: inline-block;\n    margin: 10px 0 10px 0;\n    word-break: break-all;\n    max-width: 720px;\n\n    &:hover{\n        cursor: pointer;\n    }\n}","#copy{\n    position: absolute;\n    cursor: default;\n    opacity: 0;\n}\n\n@keyframes hintShowup {\n    0% {opacity: 0;}\n    10% {opacity: .9;}\n    50% {opacity: 1;}\n    80% {opacity: .9;}\n    100% {opacity: 0;}\n}\n\n.showUp{\n    animation-name: hintShowup;\n    animation-duration: 1s;\n}",".warn-box{\n    display: flex;\n    align-items: center;\n    max-width: 800px;\n    background-color: rgba(0, 204, 255, 0.7);\n    border: 2px solid rgba(218, 218, 218, 0.9);\n    color: #000;\n    font-weight: bold;\n    font-size: 18px;\n    padding: 10px 13px;\n\n    .icon{\n        font-size: 28px;\n        margin-right: 20px;\n    }\n}",".bio{\n    display: flex;\n    flex-wrap: wrap;\n    border: 1px solid;\n    padding: 0 20px;\n    max-width: 900px;\n    background-color: #2a6197;\n\n    .desc{\n        max-width: 608px;\n    }\n\n    p {\n        margin: 0;\n    }\n\n    img{\n        display: block;\n        max-width: 200px;\n        border-radius: 50%;\n        margin: 20px 0 20px 50px;\n    }\n}",".italic{\n    font-style: italic;\n}",".tutorial-img{\n    display: block;\n    max-width: 500px;\n    margin: 10px 0;\n    width: 100%;\n}\n","@mixin global-bg-gradient() {\n    background: linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,1) 80%, rgb(44, 44, 44) 100%);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: rgb(29,29,29);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/assets/js/components/footer.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pkg = __webpack_require__(/*! ../../../../package.json */ "./package.json");


const FOOTER = `
    <span>Mc'Docs – krdevelopment © ${new Date().getFullYear()} v.${pkg.version}</span>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FOOTER);

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
        <div class="serverIp"><span class="ip">play.krdevelop.pl</span> 🟢 ONLINE</div>
        <nav>
            <ol>
                <a href="index.html"><li>🏠 Home</li></a>
                <a href="map.html"><li>🗺️ Map</li></a>
                <a href="inspirations.html"><li>💡 Inspirations</li></a>
                <a href="selections.html"><li>📐 Selections</li></a>
                <a href="brushes.html"><li>⛏️ Brushes</li></a>
                <a href="formulas.html"><li>⚗️ Formulas</li></a>
                <a href="miscellaneous.html"><li>🪐 Miscellaneous</li></a>
                <a href="archivas.html"><li>📜 Archivas</li></a>
            </ol>
        </nav>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HEADER);

/***/ }),

/***/ "./src/assets/js/img.js":
/*!******************************!*\
  !*** ./src/assets/js/img.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   archivas: () => (/* binding */ archivas),
/* harmony export */   inspirations: () => (/* binding */ inspirations)
/* harmony export */ });
let inspirations = ["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.png","26.jpg","27.png","28.jpg","29.png","3.jpg","30.jpg","31.png","32.jpg","33.png","34.jpg","35.png","36.jpg","37.png","38.jpg","39.png","4.jpg","40.jpg","41.webp","42.png","43.jpg","44.webp","45.png","46.jpg","47.webp","48.png","49.jpg","49.webp","5.jpg","50.jpg","50.png","51.jpg","52.jpg","53.jpg","54.jpg","55.jpg","56.jpg","57.jpg","58.jpg","59.jpg","6.jpg","60.jpg","61.jpg","62.jpg","63.jpg","64.jpg","65.jpg","66.jpg","67.jpg","68.jpg","69.jpg","7.jpg","70.jpg","71.jpg","72.jpg","73.jpg","74.jpg","75.jpg","76.jpg","77.jpg","78.jpg","79.jpg","8.jpg","80.jpg","81.jpg","82.jpg","83.jpg","9.jpg"];let archivas = ["2010vs2020.png","World1_2021-06-12.png","Zrzut ekranu 2021-08-06 222656.png.png","Zrzut ekranu 2021-09-24 232241.png","Zrzut ekranu 2021-09-24 232412.png","Zrzut ekranu 2021-09-24 234257.png","Zrzut-ekranu-2021-09-23-224049.png","corridor_study_2022-08-13 235036.jpg","corridor_study_2022-08-24.jpg","corridor_study_highway_2022-08-14 001303.jpg","corridor_study_krakow.jpeg","pendolino_wallpaper.gif","pkp_wallpaper.gif","railway_plan_24_11_2022.gif","railway_plan_24_11_2022.png","railway_stations_plan_31_07_2021.png","roads_plan_2021-09-07 212912.png","stara wyspa hyde parku.png","studium_korytazowe.png","which_way_to_wox_town.png","wox_elevator.png"]; 

/***/ }),

/***/ "./src/assets/img/banner-faded.png":
/*!*****************************************!*\
  !*** ./src/assets/img/banner-faded.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/banner-faded.png";

/***/ }),

/***/ "./src/assets/img/bg-footer.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/bg-footer.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bg-footer.jpg";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"mc-docs","version":"1.12.0","description":"CraftPlanet most common world edit commands and tips","main":"index.js","private":true,"scripts":{"cleandist":"rimraf ./dist","test":"echo \\"Error: no test specified\\" && exit 1","build":"npm run cleandist && node beforeBuild.js && webpack","watch":"webpack --watch","start":"webpack serve"},"repository":{"type":"git","url":"git+https://github.com/KGRozanski/world-edit-help.git"},"author":"KGRozanski","license":"MIT","bugs":{"url":"https://github.com/KGRozanski/world-edit-help/issues"},"homepage":"https://github.com/KGRozanski/world-edit-help#readme","devDependencies":{"@babel/core":"^7.18.6","copy-webpack-plugin":"^7.0.0","css-loader":"^5.0.1","file-loader":"^6.2.0","html-loader":"^4.1.0","html-webpack-plugin":"^5.5.0","sass":"^1.30.0","sass-loader":"^10.1.0","style-loader":"^2.0.0","ts-loader":"^8.0.11","typescript":"^4.1.2","url-loader":"^4.1.1","webpack":"^5.73.0","webpack-cli":"^4.2.0","webpack-dev-server":"^3.11.0"},"dependencies":{"rimraf":"^3.0.2"}}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _assets_js_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/img */ "./src/assets/js/img.js");
/* harmony import */ var _assets_js_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/components/header */ "./src/assets/js/components/header.js");
/* harmony import */ var _assets_js_components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/components/footer */ "./src/assets/js/components/footer.js");




var copy;
var codes = Array.prototype.slice.call(document.getElementsByTagName("code"));
document.addEventListener("DOMContentLoaded", function () {
    var div = document.createElement("div");
    div.id = "copy";
    div.textContent = "Copied!";
    document.body.appendChild(div);
    copy = div;
    addCopyHintEventListener();
    renderHeader();
    renderFooter();
    renderGallery('gallery');
    renderGallery('archivasGallery');
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
    var ARCHIVAS_GALLERY = document.getElementById(name);
    var tmpl = '';
    if (GALLERY && name == "gallery") {
        var sortedInspirations = _assets_js_img__WEBPACK_IMPORTED_MODULE_1__.inspirations.sort(function (a, b) {
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
            tmpl += "\n\t\t\t\t<figure>\n\t\t\t\t\t<img src=\"images/inspirations/".concat(file, "\">\n\t\t\t\t\t<figcaption>").concat(file, "</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t");
        }
        GALLERY.insertAdjacentHTML("beforeend", tmpl);
    }
    if (ARCHIVAS_GALLERY && name === "archivasGallery") {
        for (var _a = 0, archivas_1 = _assets_js_img__WEBPACK_IMPORTED_MODULE_1__.archivas; _a < archivas_1.length; _a++) {
            var file = archivas_1[_a];
            tmpl += "\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<a class=\"archivePhotoLink\" target=\"_blank\" href=\"images/archivas/".concat(file, "\"> \n\t\t\t\t\t\t\t<img src=\"images/archivas/").concat(file, "\">\n\t\t\t\t\t\t\t<figcaption>").concat(file, "</figcaption>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</figure>\n\t\t\t\t");
        }
        GALLERY.insertAdjacentHTML("beforeend", tmpl);
    }
}
function renderHeader() {
    document.getElementById('header').insertAdjacentHTML("beforeend", _assets_js_components_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
    addClickOnIpListener();
}
function renderFooter() {
    document.getElementById('footer').insertAdjacentHTML("beforeend", _assets_js_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
}
function addClickOnIpListener() {
    document.querySelector('.serverIp').addEventListener("click", function (e) {
        navigator.clipboard.writeText('play.krdevelop.pl').then(function () {
            copy.classList.add("showUp");
            setTimeout(function () {
                copy.classList.remove("showUp");
            }, 1000);
        });
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxV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LElBQUksNENBQ2xCLElBQUksbUVBR3BCLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDOUM7QUFHRixDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLG9FQUFNLENBQUMsQ0FBQztJQUMxRSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFDRCxTQUFTLFlBQVk7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsb0VBQU0sQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFFRCxTQUFTLG9CQUFvQjtJQUM1QixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQWtDO1FBQ2hHLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTdCLFVBQVUsQ0FBQztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21jLWRvY3MvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9tYy1kb2NzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYy1kb2NzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYy1kb2NzLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9tYy1kb2NzLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9tYy1kb2NzLy4vc3JjL2Fzc2V0cy9qcy9pbWcuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2ltZy9iYW5uZXItZmFkZWQucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYXNzZXRzL2ltZy9iZy1mb290ZXIuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNoZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuI2hlYWRlciBoMSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNnB4O1xcbn1cXG4jaGVhZGVyIC5zZXJ2ZXJJcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDdweCAwIDAgMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGQyNmE7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuI2hlYWRlciAuc2VydmVySXA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZGVyIG5hdiB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuI2hlYWRlciBuYXYgb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jaGVhZGVyIG5hdiBvbCBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4jaGVhZGVyIG5hdiBvbCBsaSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYmFja2dyb3VuZDogIzMxMzEzMTtcXG59XFxuI2hlYWRlciBuYXYgb2wgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzNhM2EzYTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbiNmb290ZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyOSwgMjksIDI5KSAwJSwgcmdiYSg2NCwgNjQsIDY0LCAwKSA1NiUpO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICBjb2x1bW4tY291bnQ6IDQ7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG4jZ2FsbGVyeSBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcXG59XFxuI2dhbGxlcnkgZmlndXJlID4gaW1nIHtcXG4gIGdyaWQtcm93OiAxLy0xO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcbiNnYWxsZXJ5IGZpZ3VyZSBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2dhbGxlcnkgZmlnY2FwdGlvbiB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4jZ2FsbGVyeSBpbWcge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNhcmNoaXZhc0dhbGxlcnkgaW1nIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjZ2FsbGVyeSB7XFxuICAgIGNvbHVtbi1jb3VudDogMTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxuICAjZ2FsbGVyeSB7XFxuICAgIGNvbHVtbi1jb3VudDogMjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NzFweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDM7XFxuICB9XFxufVxcbiNhcmNoaXZhc0dhbGxlcnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG59XFxuXFxuLmFyY2hpdmVQaG90b0xpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xNjE4cyBlYXNlLW91dDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmFyY2hpdmVQaG90b0xpbms6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbn1cXG4uYXJjaGl2ZVBob3RvTGluayBmaWdjYXB0aW9uIHtcXG4gIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxufVxcbmNvZGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29weSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpbnRTaG93dXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uc2hvd1VwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBoaW50U2hvd3VwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuLndhcm4tYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA0LCAyNTUsIDAuNyk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIxOCwgMjE4LCAyMTgsIDAuOSk7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxM3B4O1xcbn1cXG4ud2Fybi1ib3ggLmljb24ge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYmlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MTk3O1xcbn1cXG4uYmlvIC5kZXNjIHtcXG4gIG1heC13aWR0aDogNjA4cHg7XFxufVxcbi5iaW8gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5iaW8gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXG59XFxuXFxuLml0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50dXRvcmlhbC1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMjksIDI5LCAyOSkgMCUsIHJnYigyOSwgMjksIDI5KSA4MCUsIHJnYig0NCwgNDQsIDQ0KSAxMDAlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XFxuICBmb250LWZhbWlseTogXFxcIkluY29uc29sYXRhXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5wIGEge1xcbiAgY29sb3I6IHJnYigyNTUsIDI1MSwgMCk7XFxufVxcblxcbi5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19nYWxsZXJ5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9taXhpbnMvX2ltZy1nYWxsZXJ5Lm1peGluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fYXJjaGl2YXMtZ2FsbGVyeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19jb2RlLXNuaXBwZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19jb3B5LWhpbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL193YXJuLWJveC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2Jpby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYWJzdHJhY3RzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYWJzdHJhY3RzL19jb21tb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL21peGlucy9fZ2xvYmFsLWJnLWdyYWRpZW50Lm1peGluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURFSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtBQ0FaO0FESUk7RUFDSSxXQUFBO0FDRlI7QURJUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDRlo7QURJWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0ZoQjtBREtZO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBREtnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0hwQjs7QUM3Q0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7QURnREo7QUM3Q0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnRkFBQTtBRCtDUjs7QUVqRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUZvRUo7QUVsRUk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRm9FUjtBRWpFSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FGbUVSO0FFaEVJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FGa0VSO0FFL0RJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUZpRVI7QUc3Rkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUgrRlI7O0FHbEdJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FIcUdSOztBRWpFQTtFQUNJO0lBQ0ksZUFBQTtFRm9FTjtBQUNGO0FFakVBO0VBQ0k7SUFDSSxlQUFBO0VGbUVOO0FBQ0Y7QUVoRUE7RUFDSTtJQUNJLGVBQUE7RUZrRU47QUFDRjtBSXZIQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtBSnlISjs7QUl0SEE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUp5SEo7QUl2SEk7RUFDSSxvQ0FBQTtBSnlIUjtBSXRISTtFQUNJLHlCQ2pCVTtBTHlJbEI7O0FNMUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FONklKO0FNM0lJO0VBQ0ksZUFBQTtBTjZJUjs7QU94SkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FQMkpKOztBT3hKQTtFQUNJO0lBQUksVUFBQTtFUDRKTjtFTzNKRTtJQUFLLFlBQUE7RVA4SlA7RU83SkU7SUFBSyxVQUFBO0VQZ0tQO0VPL0pFO0lBQUssWUFBQTtFUGtLUDtFT2pLRTtJQUFNLFVBQUE7RVBvS1I7QUFDRjtBT2xLQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7QVBvS0o7O0FRcExBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FSdUxKO0FRckxJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FSdUxSOztBU3BNQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBVHVNSjtBU3JNSTtFQUNJLGdCQUFBO0FUdU1SO0FTcE1JO0VBQ0ksU0FBQTtBVHNNUjtBU25NSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QVRxTVI7O0FVek5BO0VBQ0ksa0JBQUE7QVY0Tko7O0FXN05BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QVhnT0o7O0FBek5BO0VBQ0ksc0JBQUE7QUE0Tko7O0FBMU5BO0VBQ0ksa0JBQUE7RVlkQSxnR0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBWjRPSjs7QUE3TkE7RUFDSSx5QktuQmM7RUxvQmQscUNBQUE7QUFnT0o7O0FBNU5BO0VBQ0ksaUJBQUE7QUErTko7QUE3Tkk7RUFDSSx1Qks3Qks7QUw0UGI7O0FBM05BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUE4TkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2Fzc2V0cy9pbWcvYmFubmVyLWZhZGVkLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIGgxe1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogLTZweDtcXG4gICAgfVxcblxcbiAgICAuc2VydmVySXB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDdweCAwIDAgMzBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGQyNmE7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIG5hdntcXG4gICAgICAgIGNsZWFyOiBib3RoO1xcblxcbiAgICAgICAgb2x7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG4gICAgICAgICAgICBhe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xcbiAgICBcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYTNhM2E7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJAdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2hlYWRlcic7XFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9mb290ZXInO1xcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvZ2FsbGVyeSc7XFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9hcmNoaXZhcy1nYWxsZXJ5JztcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2NvZGUtc25pcHBldCc7XFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9jb3B5LWhpbnQnO1xcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvd2Fybi1ib3gnO1xcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvYmlvJztcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL2Fic3RyYWN0cyc7XFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9taXhpbnMvZ2xvYmFsLWJnLWdyYWRpZW50Lm1peGluJyBhcyBiZztcXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1se1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIEBpbmNsdWRlIGJnLmdsb2JhbC1iZy1ncmFkaWVudCgpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBjb2xvcjogYWJzdHJhY3RzLiRtYWluLWZvbnQtY29sb3I7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuXFxufVxcblxcbnB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcbiAgICBhe1xcbiAgICAgICAgY29sb3I6IGFic3RyYWN0cy4kbGluay1jb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4ubGlua3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XCIsXCIjZm9vdGVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2Fzc2V0cy9pbWcvYmctZm9vdGVyLmpwZ1xcXCIpO1xcblxcblxcbiAgICAmOmFmdGVye1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjksMjksMjksMSkgMCUsIHJnYmEoNjQsNjQsNjQsMCkgNTYlKTtcXG4gICAgfVxcbn1cIixcIkBpbXBvcnQgJy4uL21peGlucy9pbWctZ2FsbGVyeS5taXhpbic7XFxuXFxuI2dhbGxlcnl7XFxuICAgIGNvbHVtbi1jb3VudDogNDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG5cXG4gICAgZmlndXJlIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICAgIH1cXG5cXG4gICAgZmlndXJlID4gaW1nIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgfVxcbiAgICBcXG4gICAgZmlndXJlIGEge1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICBmaWdjYXB0aW9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG4gICAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgaW1nLWdhbGxlcnkoKVxcblxcbn1cXG5cXG4jYXJjaGl2YXNHYWxsZXJ5e1xcbiAgICBAaW5jbHVkZSBpbWctZ2FsbGVyeSgpXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICAgI2dhbGxlcnl7XFxuICAgICAgICBjb2x1bW4tY291bnQ6IDE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxuICAgICNnYWxsZXJ5e1xcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTcxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcXG4gICAgI2dhbGxlcnl7XFxuICAgICAgICBjb2x1bW4tY291bnQ6IDM7XFxuICAgIH1cXG59XFxuXFxuXCIsXCJAbWl4aW4gaW1nLWdhbGxlcnkoKSB7XFxuICAgIGltZ3tcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblwiLFwiQHVzZSAnLi4vYWJzdHJhY3RzL3ZhcmlhYmxlcyc7XFxuXFxuI2FyY2hpdmFzR2FsbGVyeXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbn1cXG5cXG4uYXJjaGl2ZVBob3RvTGlua3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMTYxOHMgZWFzZS1vdXQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kbWFpbi1mb250LWNvbG9yO1xcbiAgICB9XFxuXFxuICAgIGZpZ2NhcHRpb257XFxuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRtYWluLWZvbnQtY29sb3I7XFxuICAgIH1cXG59XCIsXCIkbGluay1jb2xvcjogcmdiKDI1NSwgMjUxLCAwKTtcXG4kbWFpbi1mb250LWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XCIsXCJjb2Rle1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVwiLFwiI2NvcHl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpbnRTaG93dXAge1xcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxuICAgIDEwJSB7b3BhY2l0eTogLjk7fVxcbiAgICA1MCUge29wYWNpdHk6IDE7fVxcbiAgICA4MCUge29wYWNpdHk6IC45O31cXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxufVxcblxcbi5zaG93VXB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaW50U2hvd3VwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cIixcIi53YXJuLWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDQsIDI1NSwgMC43KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjkpO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMTBweCAxM3B4O1xcblxcbiAgICAuaWNvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgfVxcbn1cIixcIi5iaW97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjE5NztcXG5cXG4gICAgLmRlc2N7XFxuICAgICAgICBtYXgtd2lkdGg6IDYwOHB4O1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIGltZ3tcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXG4gICAgfVxcbn1cIixcIi5pdGFsaWN7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCIsXCIudHV0b3JpYWwtaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIixcIkBtaXhpbiBnbG9iYWwtYmctZ3JhZGllbnQoKSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI5LDI5LDI5LDEpIDAlLCByZ2JhKDI5LDI5LDI5LDEpIDgwJSwgcmdiKDQ0LCA0NCwgNDQpIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksMjksMjkpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBwa2cgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcblxuXG5jb25zdCBGT09URVIgPSBgXG4gICAgPHNwYW4+TWMnRG9jcyDigJMga3JkZXZlbG9wbWVudCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gdi4ke3BrZy52ZXJzaW9ufTwvc3Bhbj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZPT1RFUjsiLCJjb25zdCBIRUFERVIgPSBgXG4gICAgICAgIDxoMT7wn4yOIE1jJ0RvY3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmVySXBcIj48c3BhbiBjbGFzcz1cImlwXCI+cGxheS5rcmRldmVsb3AucGw8L3NwYW4+IPCfn6IgT05MSU5FPC9kaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj48bGk+8J+PoCBIb21lPC9saT48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hcC5odG1sXCI+PGxpPvCfl7rvuI8gTWFwPC9saT48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluc3BpcmF0aW9ucy5odG1sXCI+PGxpPvCfkqEgSW5zcGlyYXRpb25zPC9saT48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInNlbGVjdGlvbnMuaHRtbFwiPjxsaT7wn5OQIFNlbGVjdGlvbnM8L2xpPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiYnJ1c2hlcy5odG1sXCI+PGxpPuKbj++4jyBCcnVzaGVzPC9saT48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImZvcm11bGFzLmh0bWxcIj48bGk+4pqX77iPIEZvcm11bGFzPC9saT48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1pc2NlbGxhbmVvdXMuaHRtbFwiPjxsaT7wn6qQIE1pc2NlbGxhbmVvdXM8L2xpPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXJjaGl2YXMuaHRtbFwiPjxsaT7wn5OcIEFyY2hpdmFzPC9saT48L2E+XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICA8L25hdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhFQURFUjsiLCJsZXQgaW5zcGlyYXRpb25zID0gW1wiMS5qcGdcIixcIjEwLmpwZ1wiLFwiMTEuanBnXCIsXCIxMi5qcGdcIixcIjEzLmpwZ1wiLFwiMTQuanBnXCIsXCIxNS5qcGdcIixcIjE2LmpwZ1wiLFwiMTcuanBnXCIsXCIxOC5qcGdcIixcIjE5LmpwZ1wiLFwiMi5qcGdcIixcIjIwLmpwZ1wiLFwiMjEuanBnXCIsXCIyMi5qcGdcIixcIjIzLmpwZ1wiLFwiMjQuanBnXCIsXCIyNS5wbmdcIixcIjI2LmpwZ1wiLFwiMjcucG5nXCIsXCIyOC5qcGdcIixcIjI5LnBuZ1wiLFwiMy5qcGdcIixcIjMwLmpwZ1wiLFwiMzEucG5nXCIsXCIzMi5qcGdcIixcIjMzLnBuZ1wiLFwiMzQuanBnXCIsXCIzNS5wbmdcIixcIjM2LmpwZ1wiLFwiMzcucG5nXCIsXCIzOC5qcGdcIixcIjM5LnBuZ1wiLFwiNC5qcGdcIixcIjQwLmpwZ1wiLFwiNDEud2VicFwiLFwiNDIucG5nXCIsXCI0My5qcGdcIixcIjQ0LndlYnBcIixcIjQ1LnBuZ1wiLFwiNDYuanBnXCIsXCI0Ny53ZWJwXCIsXCI0OC5wbmdcIixcIjQ5LmpwZ1wiLFwiNDkud2VicFwiLFwiNS5qcGdcIixcIjUwLmpwZ1wiLFwiNTAucG5nXCIsXCI1MS5qcGdcIixcIjUyLmpwZ1wiLFwiNTMuanBnXCIsXCI1NC5qcGdcIixcIjU1LmpwZ1wiLFwiNTYuanBnXCIsXCI1Ny5qcGdcIixcIjU4LmpwZ1wiLFwiNTkuanBnXCIsXCI2LmpwZ1wiLFwiNjAuanBnXCIsXCI2MS5qcGdcIixcIjYyLmpwZ1wiLFwiNjMuanBnXCIsXCI2NC5qcGdcIixcIjY1LmpwZ1wiLFwiNjYuanBnXCIsXCI2Ny5qcGdcIixcIjY4LmpwZ1wiLFwiNjkuanBnXCIsXCI3LmpwZ1wiLFwiNzAuanBnXCIsXCI3MS5qcGdcIixcIjcyLmpwZ1wiLFwiNzMuanBnXCIsXCI3NC5qcGdcIixcIjc1LmpwZ1wiLFwiNzYuanBnXCIsXCI3Ny5qcGdcIixcIjc4LmpwZ1wiLFwiNzkuanBnXCIsXCI4LmpwZ1wiLFwiODAuanBnXCIsXCI4MS5qcGdcIixcIjgyLmpwZ1wiLFwiODMuanBnXCIsXCI5LmpwZ1wiXTtsZXQgYXJjaGl2YXMgPSBbXCIyMDEwdnMyMDIwLnBuZ1wiLFwiV29ybGQxXzIwMjEtMDYtMTIucG5nXCIsXCJacnp1dCBla3JhbnUgMjAyMS0wOC0wNiAyMjI2NTYucG5nLnBuZ1wiLFwiWnJ6dXQgZWtyYW51IDIwMjEtMDktMjQgMjMyMjQxLnBuZ1wiLFwiWnJ6dXQgZWtyYW51IDIwMjEtMDktMjQgMjMyNDEyLnBuZ1wiLFwiWnJ6dXQgZWtyYW51IDIwMjEtMDktMjQgMjM0MjU3LnBuZ1wiLFwiWnJ6dXQtZWtyYW51LTIwMjEtMDktMjMtMjI0MDQ5LnBuZ1wiLFwiY29ycmlkb3Jfc3R1ZHlfMjAyMi0wOC0xMyAyMzUwMzYuanBnXCIsXCJjb3JyaWRvcl9zdHVkeV8yMDIyLTA4LTI0LmpwZ1wiLFwiY29ycmlkb3Jfc3R1ZHlfaGlnaHdheV8yMDIyLTA4LTE0IDAwMTMwMy5qcGdcIixcImNvcnJpZG9yX3N0dWR5X2tyYWtvdy5qcGVnXCIsXCJwZW5kb2xpbm9fd2FsbHBhcGVyLmdpZlwiLFwicGtwX3dhbGxwYXBlci5naWZcIixcInJhaWx3YXlfcGxhbl8yNF8xMV8yMDIyLmdpZlwiLFwicmFpbHdheV9wbGFuXzI0XzExXzIwMjIucG5nXCIsXCJyYWlsd2F5X3N0YXRpb25zX3BsYW5fMzFfMDdfMjAyMS5wbmdcIixcInJvYWRzX3BsYW5fMjAyMS0wOS0wNyAyMTI5MTIucG5nXCIsXCJzdGFyYSB3eXNwYSBoeWRlIHBhcmt1LnBuZ1wiLFwic3R1ZGl1bV9rb3J5dGF6b3dlLnBuZ1wiLFwid2hpY2hfd2F5X3RvX3dveF90b3duLnBuZ1wiLFwid294X2VsZXZhdG9yLnBuZ1wiXTsgZXhwb3J0IHtpbnNwaXJhdGlvbnMsIGFyY2hpdmFzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgaW5zcGlyYXRpb25zLCBhcmNoaXZhcyB9IGZyb20gJy4vYXNzZXRzL2pzL2ltZyc7XG5pbXBvcnQgSEVBREVSIGZyb20gXCIuL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZPT1RFUiBmcm9tIFwiLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXJcIjtcblxubGV0IGNvcHk6IGFueTtcblxuY29uc3QgY29kZXM6IEFycmF5PEhUTUxFbGVtZW50PiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvZGVcIilcblxuKTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2LmlkID0gXCJjb3B5XCI7XG5cdGRpdi50ZXh0Q29udGVudCA9IFwiQ29waWVkIVwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cdGNvcHkgPSBkaXY7XG5cblx0YWRkQ29weUhpbnRFdmVudExpc3RlbmVyKCk7XG5cdHJlbmRlckhlYWRlcigpO1xuXHRyZW5kZXJGb290ZXIoKTtcblx0cmVuZGVyR2FsbGVyeSgnZ2FsbGVyeScpO1xuXHRyZW5kZXJHYWxsZXJ5KCdhcmNoaXZhc0dhbGxlcnknKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRDb3B5SGludEV2ZW50TGlzdGVuZXIoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XCJtb3VzZW1vdmVcIixcblx0XHQoZTogTW91c2VFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlcIikuc3R5bGUubGVmdCA9IGUucGFnZVggKyAyMCArIFwicHhcIjtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weVwiKS5zdHlsZS50b3AgPSBlLnBhZ2VZICsgMjAgKyBcInB4XCI7XG5cdFx0fVxuXHQpO1xufVxuXG5jb2Rlcy5mb3JFYWNoKChjb2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQgJiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4ge1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGUudGFyZ2V0LmlubmVyVGV4dCkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhjb3B5KTtcblx0XHRcdGNvcHkuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGNvcHkuY2xhc3NMaXN0LnJlbW92ZShcInNob3dVcFwiKTtcblx0XHRcdH0sIDEwMDApO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gcmVuZGVyR2FsbGVyeShuYW1lOiBzdHJpbmcpIHtcblx0Y29uc3QgR0FMTEVSWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuXHRjb25zdCBBUkNISVZBU19HQUxMRVJZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG5cdGxldCB0bXBsID0gJyc7XG5cblxuXG5cdGlmKEdBTExFUlkgJiYgbmFtZSA9PSBcImdhbGxlcnlcIikge1xuXHRcdGxldCBzb3J0ZWRJbnNwaXJhdGlvbnMgPSBpbnNwaXJhdGlvbnMuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcblx0XHRcdGNvbnN0IExFRlQgPSBOdW1iZXIoYS5zcGxpdCgnLicpWzBdKTtcblx0XHRcdGNvbnN0IFJJR0hUID0gIE51bWJlcihiLnNwbGl0KCcuJylbMF0pO1xuXHRcblx0XHRcdGlmKCBMRUZUID4gUklHSFQgKSB7IHJldHVybiAxOyB9XG5cdFxuXHRcdFx0aWYgKCBMRUZUIDwgUklHSFQgKSB7IHJldHVybiAtMTsgfVxuXHRcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChsZXQgZmlsZSBvZiBzb3J0ZWRJbnNwaXJhdGlvbnMpIHtcblx0XHRcdHRtcGwgKz0gYFxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL2luc3BpcmF0aW9ucy8ke2ZpbGV9XCI+XG5cdFx0XHRcdFx0PGZpZ2NhcHRpb24+JHtmaWxlfTwvZmlnY2FwdGlvbj5cblx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdGA7XG5cdFx0fVxuXG5cdFx0R0FMTEVSWS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wbCk7XG5cdH1cblxuXHRpZihBUkNISVZBU19HQUxMRVJZICYmIG5hbWUgPT09IFwiYXJjaGl2YXNHYWxsZXJ5XCIpIHtcblx0XHRmb3IgKGxldCBmaWxlIG9mIGFyY2hpdmFzKSB7XG5cdFx0XHR0bXBsICs9IGBcblx0XHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJhcmNoaXZlUGhvdG9MaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImltYWdlcy9hcmNoaXZhcy8ke2ZpbGV9XCI+IFxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9hcmNoaXZhcy8ke2ZpbGV9XCI+XG5cdFx0XHRcdFx0XHRcdDxmaWdjYXB0aW9uPiR7ZmlsZX08L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdGA7XG5cdFx0fVxuXG5cdFx0R0FMTEVSWS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wbCk7XG5cdH1cblxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBIRUFERVIpO1xuXHRhZGRDbGlja09uSXBMaXN0ZW5lcigpO1xufVxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIEZPT1RFUik7XG59XG5cbmZ1bmN0aW9uIGFkZENsaWNrT25JcExpc3RlbmVyKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmVySXAnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCggJ3BsYXkua3JkZXZlbG9wLnBsJykudGhlbigoKSA9PiB7XG5cdFx0XHRjb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRjb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9KTtcblx0fSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9