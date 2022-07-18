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
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n  position: relative;\n  min-height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n}\n#header h1 {\n  margin-top: 0;\n  position: relative;\n  left: -6px;\n}\n#header nav ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n#header nav ol a {\n  color: #fff;\n  text-decoration: none;\n}\n#header nav ol li {\n  border: 1px solid #f2f2f2;\n  margin: 0 10px 10px 0;\n  padding: 8px;\n  background: #313131;\n}\n#header nav ol li:hover {\n  cursor: pointer;\n  background: #3a3a3a;\n}\n\n#footer {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  min-height: 150px;\n  padding-top: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#footer:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background: linear-gradient(180deg, rgb(29, 29, 29) 0%, rgba(64, 64, 64, 0) 56%);\n}\n\n#gallery {\n  column-count: 4;\n  column-gap: 10px;\n}\n#gallery figure {\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  margin-bottom: 10px;\n  break-inside: avoid;\n}\n#gallery figure > img {\n  grid-row: 1/-1;\n  grid-column: 1;\n}\n#gallery figure a {\n  color: black;\n  text-decoration: none;\n}\n#gallery figcaption {\n  grid-row: 2;\n  grid-column: 1;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 0.2em 0.5em;\n  justify-self: start;\n}\n#gallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n#archivasGallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n@media only screen and (max-width: 576px) {\n  #gallery {\n    column-count: 1;\n  }\n}\n@media only screen and (min-width: 577px) and (max-width: 970px) {\n  #gallery {\n    column-count: 2;\n  }\n}\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\n  #gallery {\n    column-count: 3;\n  }\n}\ncode {\n  font-size: 14px;\n  background: #000;\n  padding: 6px 12px;\n  border: 1px solid gray;\n  display: inline-block;\n  margin: 10px 0 10px 0;\n  word-break: break-all;\n  max-width: 720px;\n}\ncode:hover {\n  cursor: pointer;\n}\n\n#copy {\n  position: absolute;\n  cursor: default;\n  opacity: 0;\n}\n\n@keyframes hintShowup {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.showUp {\n  animation-name: hintShowup;\n  animation-duration: 1s;\n}\n\n.warn-box {\n  display: flex;\n  align-items: center;\n  max-width: 800px;\n  background-color: rgba(0, 204, 255, 0.7);\n  border: 2px solid rgba(218, 218, 218, 0.9);\n  color: #000;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 10px 13px;\n}\n.warn-box .icon {\n  font-size: 28px;\n  margin-right: 20px;\n}\n\n.bio {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid;\n  padding: 0 20px;\n  max-width: 900px;\n  background-color: #2a6197;\n}\n.bio .desc {\n  max-width: 608px;\n}\n.bio p {\n  margin: 0;\n}\n.bio img {\n  display: block;\n  max-width: 200px;\n  border-radius: 50%;\n  margin: 20px 0 20px 50px;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tutorial-img {\n  display: block;\n  max-width: 500px;\n  margin: 10px 0;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n  background: linear-gradient(0deg, rgb(29, 29, 29) 0%, rgb(29, 29, 29) 80%, rgb(44, 44, 44) 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgb(29, 29, 29);\n}\n\nbody {\n  color: rgb(248, 248, 248);\n  font-family: \"Inconsolata\", monospace;\n}\n\np {\n  margin-left: 15px;\n}\np a {\n  color: rgb(255, 251, 0);\n}\n\n.links {\n  display: flex;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/parcials/_header.scss","webpack://./src/style.scss","webpack://./src/assets/scss/parcials/_footer.scss","webpack://./src/assets/scss/parcials/_gallery.scss","webpack://./src/assets/scss/mixins/_img-gallery.mixin.scss","webpack://./src/assets/scss/parcials/_code-snippet.scss","webpack://./src/assets/scss/parcials/_copy-hint.scss","webpack://./src/assets/scss/parcials/_warn-box.scss","webpack://./src/assets/scss/parcials/_bio.scss","webpack://./src/assets/scss/abstracts/_fonts.scss","webpack://./src/assets/scss/abstracts/_common.scss","webpack://./src/assets/scss/mixins/_global-bg-gradient.mixin.scss","webpack://./src/assets/scss/abstracts/_variables.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,iBAAA;EACA,yDAAA;EACA,iCAAA;EACA,4BAAA;ACCJ;ADCI;EACI,aAAA;EACA,kBAAA;EACA,UAAA;ACCR;ADGQ;EACI,aAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;ACDZ;ADGY;EACI,WAAA;EACA,qBAAA;ACDhB;ADIY;EACI,yBAAA;EACA,qBAAA;EACA,YAAA;EACA,mBAAA;ACFhB;ADIgB;EACI,eAAA;EACA,mBAAA;ACFpB;;AC/BA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,yDAAA;ADkCJ;AC/BI;EACI,WAAA;EACA,cAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,gFAAA;ADiCR;;AEnDA;EACI,eAAA;EACA,gBAAA;AFsDJ;AEpDI;EACI,SAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,mBAAA;AFsDR;AEnDI;EACI,cAAA;EACA,cAAA;AFqDR;AElDI;EACI,YAAA;EACA,qBAAA;AFoDR;AEjDI;EACI,WAAA;EACA,cAAA;EACA,0CAAA;EACA,oBAAA;EACA,mBAAA;AFmDR;AG/EI;EACI,eAAA;EACA,eAAA;EACA,cAAA;AHiFR;;AGpFI;EACI,eAAA;EACA,eAAA;EACA,cAAA;AHuFR;;AEnDA;EACI;IACI,eAAA;EFsDN;AACF;AEnDA;EACI;IACI,eAAA;EFqDN;AACF;AElDA;EACI;IACI,eAAA;EFoDN;AACF;AI3GA;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;AJ6GJ;AI3GI;EACI,eAAA;AJ6GR;;AKxHA;EACI,kBAAA;EACA,eAAA;EACA,UAAA;AL2HJ;;AKxHA;EACI;IAAI,UAAA;EL4HN;EK3HE;IAAK,YAAA;EL8HP;EK7HE;IAAK,UAAA;ELgIP;EK/HE;IAAK,YAAA;ELkIP;EKjIE;IAAM,UAAA;ELoIR;AACF;AKlIA;EACI,0BAAA;EACA,sBAAA;ALoIJ;;AMpJA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,wCAAA;EACA,0CAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;ANuJJ;AMrJI;EACI,eAAA;EACA,kBAAA;ANuJR;;AOpKA;EACI,aAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;APuKJ;AOrKI;EACI,gBAAA;APuKR;AOpKI;EACI,SAAA;APsKR;AOnKI;EACI,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;APqKR;;AQzLA;EACI,kBAAA;AR4LJ;;AS7LA;EACI,cAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;ATgMJ;;AA1LA;EACI,sBAAA;AA6LJ;;AA3LA;EACI,kBAAA;EUbA,gGAAA;EACA,4BAAA;EACA,sBAAA;EACA,iCAAA;AV4MJ;;AA9LA;EACI,yBWlBc;EXmBd,qCAAA;AAiMJ;;AA7LA;EACI,iBAAA;AAgMJ;AA9LI;EACI,uBW5BK;AX4Nb;;AA5LA;EACI,aAAA;EACA,eAAA;AA+LJ","sourcesContent":["#header{\r\n    position: relative;\r\n    min-height: 100px;\r\n    background-image: url('/src/assets/img/banner-faded.png');\r\n    background-position: bottom right;\r\n    background-repeat: no-repeat;\r\n\r\n    h1{\r\n        margin-top: 0;\r\n        position: relative;\r\n        left: -6px;\r\n    }\r\n\r\n    nav{\r\n        ol{\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            list-style: none;\r\n            padding: 0;\r\n    \r\n            a{\r\n                color: #fff;\r\n                text-decoration: none;\r\n            }\r\n    \r\n            li{\r\n                border: 1px solid #f2f2f2;\r\n                margin: 0 10px 10px 0;\r\n                padding: 8px;\r\n                background: #313131;\r\n    \r\n                &:hover{\r\n                    cursor: pointer;\r\n                    background: #3a3a3a;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@use './assets/scss/parcials/header';\r\n@use './assets/scss/parcials/footer';\r\n@use './assets/scss/parcials/gallery';\r\n@use './assets/scss/parcials/code-snippet';\r\n@use './assets/scss/parcials/copy-hint';\r\n@use './assets/scss/parcials/warn-box';\r\n@use './assets/scss/parcials/bio';\r\n@use './assets/scss/abstracts';\r\n@use './assets/scss/mixins/global-bg-gradient.mixin' as bg;\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    overflow-x: hidden;\r\n    @include bg.global-bg-gradient();\r\n}\r\n\r\nbody{\r\n    color: abstracts.$main-font-color;\r\n    font-family: 'Inconsolata', monospace;\r\n\r\n}\r\n\r\np{\r\n    margin-left: 15px;\r\n\r\n    a{\r\n        color: abstracts.$link-color;\r\n    }\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}","#footer{\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    min-height: 150px;\r\n    padding-top: 50px;\r\n    background-image: url(\"/src/assets/img/bg-footer.jpg\");\r\n\r\n\r\n    &:after{\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 100;\r\n        background: linear-gradient(180deg, rgba(29,29,29,1) 0%, rgba(64,64,64,0) 56%);\r\n    }\r\n}","@import '../mixins/img-gallery.mixin';\r\n\r\n#gallery{\r\n    column-count: 4;\r\n    column-gap: 10px;\r\n\r\n    figure {\r\n        margin: 0;\r\n        display: grid;\r\n        grid-template-rows: 1fr auto;\r\n        margin-bottom: 10px;\r\n        break-inside: avoid;\r\n    }\r\n\r\n    figure > img {\r\n        grid-row: 1 / -1;\r\n        grid-column: 1;\r\n    }\r\n    \r\n    figure a {\r\n        color: black;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    figcaption {\r\n        grid-row: 2;\r\n        grid-column: 1;\r\n        background-color: rgba(255,255,255,.5);\r\n        padding: .2em .5em;\r\n        justify-self: start;\r\n    }\r\n\r\n    @include img-gallery()\r\n\r\n}\r\n\r\n#archivasGallery{\r\n    @include img-gallery()\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    #gallery{\r\n        column-count: 1;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 577px) and (max-width: 970px) {\r\n    #gallery{\r\n        column-count: 2;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\r\n    #gallery{\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n","@mixin img-gallery() {\r\n    img{\r\n        min-width: 100%;\r\n        max-width: 100%;\r\n        display: block;\r\n    }\r\n}\r\n","code{\r\n    font-size: 14px;\r\n    background: #000;\r\n    padding: 6px 12px;\r\n    border: 1px solid gray;\r\n    display: inline-block;\r\n    margin: 10px 0 10px 0;\r\n    word-break: break-all;\r\n    max-width: 720px;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n    }\r\n}","#copy{\r\n    position: absolute;\r\n    cursor: default;\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes hintShowup {\r\n    0% {opacity: 0;}\r\n    10% {opacity: .9;}\r\n    50% {opacity: 1;}\r\n    80% {opacity: .9;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.showUp{\r\n    animation-name: hintShowup;\r\n    animation-duration: 1s;\r\n}",".warn-box{\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 800px;\r\n    background-color: rgba(0, 204, 255, 0.7);\r\n    border: 2px solid rgba(218, 218, 218, 0.9);\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    padding: 10px 13px;\r\n\r\n    .icon{\r\n        font-size: 28px;\r\n        margin-right: 20px;\r\n    }\r\n}",".bio{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border: 1px solid;\r\n    padding: 0 20px;\r\n    max-width: 900px;\r\n    background-color: #2a6197;\r\n\r\n    .desc{\r\n        max-width: 608px;\r\n    }\r\n\r\n    p {\r\n        margin: 0;\r\n    }\r\n\r\n    img{\r\n        display: block;\r\n        max-width: 200px;\r\n        border-radius: 50%;\r\n        margin: 20px 0 20px 50px;\r\n    }\r\n}",".italic{\r\n    font-style: italic;\r\n}",".tutorial-img{\r\n    display: block;\r\n    max-width: 500px;\r\n    margin: 10px 0;\r\n    width: 100%;\r\n}\r\n","@mixin global-bg-gradient() {\r\n    background: linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,1) 80%, rgb(44, 44, 44) 100%);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: rgb(29,29,29);\r\n}\r\n","$link-color: rgb(255, 251, 0);\r\n$main-font-color: rgb(248, 248, 248);"],"sourceRoot":""}]);
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
/* harmony export */   "archivas": () => (/* binding */ archivas),
/* harmony export */   "inspirations": () => (/* binding */ inspirations)
/* harmony export */ });
let inspirations = ["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.png","26.jpg","27.png","28.jpg","29.png","3.jpg","30.jpg","31.png","32.jpg","33.png","34.jpg","35.png","36.jpg","37.png","38.jpg","39.png","4.jpg","40.jpg","41.webp","42.png","43.jpg","44.webp","45.png","46.jpg","47.webp","48.png","49.jpg","49.webp","5.jpg","50.png","6.jpg","7.jpg","8.jpg","9.jpg"];let archivas = ["2010vs2020.png","railway_stations_plan_31_07_2021.png","roads_plan_2021-09-07 212912.png","stara wyspa hyde parku.png","studium_korytazowe.png","which_way_to_wox_town.png","World1_2021-06-12.png","wox_elevator.png","Zrzut ekranu 2021-08-06 222656.png.png","Zrzut ekranu 2021-09-24 232241.png","Zrzut ekranu 2021-09-24 232412.png","Zrzut ekranu 2021-09-24 234257.png","Zrzut-ekranu-2021-09-23-224049.png"]; 

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

module.exports = JSON.parse('{"name":"mc-docs","version":"1.3.0","description":"CraftPlanet most common world edit commands and tips","main":"index.js","private":true,"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","build":"node beforeBuild.js && webpack","watch":"webpack --watch","start":"webpack serve"},"repository":{"type":"git","url":"git+https://github.com/KGRozanski/world-edit-help.git"},"author":"KGRozanski","license":"MIT","bugs":{"url":"https://github.com/KGRozanski/world-edit-help/issues"},"homepage":"https://github.com/KGRozanski/world-edit-help#readme","devDependencies":{"@babel/core":"^7.18.6","copy-webpack-plugin":"^7.0.0","css-loader":"^5.0.1","file-loader":"^6.2.0","html-loader":"^4.1.0","html-webpack-plugin":"^5.5.0","sass":"^1.30.0","sass-loader":"^10.1.0","style-loader":"^2.0.0","ts-loader":"^8.0.11","typescript":"^4.1.2","url-loader":"^4.1.1","webpack":"^5.73.0","webpack-cli":"^4.2.0","webpack-dev-server":"^3.11.0"}}');

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
            tmpl += "\n\t\t\t\t<figure>\n\t\t\t\t\t<img src=\"images/archivas/".concat(file, "\">\n\t\t\t\t\t<figcaption>").concat(file, "</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t");
        }
        GALLERY.insertAdjacentHTML("beforeend", tmpl);
    }
}
function renderHeader() {
    document.getElementById('header').insertAdjacentHTML("beforeend", _assets_js_components_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
function renderFooter() {
    document.getElementById('footer').insertAdjacentHTML("beforeend", _assets_js_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLGtDQUFrQywyQkFBMkIsMEJBQTBCLGtFQUFrRSwwQ0FBMEMscUNBQXFDLGVBQWUsMEJBQTBCLCtCQUErQix1QkFBdUIsU0FBUyxnQkFBZ0IsZUFBZSw4QkFBOEIsZ0NB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LENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBaUIsVUFBa0IsRUFBbEIseUNBQWtCLEVBQWxCLGdDQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQWhDLElBQUksSUFBSTtZQUNaLElBQUksSUFBSSx1RUFFMEIsSUFBSSx3Q0FDdEIsSUFBSSwrQ0FFbEIsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztJQUVELElBQUcsZ0JBQWdCLElBQUksSUFBSSxLQUFLLGlCQUFpQixFQUFFO1FBQ2xELEtBQWlCLFVBQVEsRUFBUixpRUFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO1lBQXRCLElBQUksSUFBSTtZQUNaLElBQUksSUFBSSxtRUFFc0IsSUFBSSx3Q0FDbEIsSUFBSSwrQ0FFbEIsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztBQUdGLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsb0VBQU0sQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFDRCxTQUFTLFlBQVk7SUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsb0VBQU0sQ0FBQyxDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYy1kb2NzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21jLWRvY3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21jLWRvY3MvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL21jLWRvY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvaW1nLmpzIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21jLWRvY3MvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9pbWcvYmFubmVyLWZhZGVkLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2Fzc2V0cy9pbWcvYmctZm9vdGVyLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbiNoZWFkZXIgaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC02cHg7XFxufVxcbiNoZWFkZXIgbmF2IG9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2hlYWRlciBuYXYgb2wgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2hlYWRlciBuYXYgb2wgbGkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQ6ICMzMTMxMzE7XFxufVxcbiNoZWFkZXIgbmF2IG9sIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4jZm9vdGVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjksIDI5LCAyOSkgMCUsIHJnYmEoNjQsIDY0LCA2NCwgMCkgNTYlKTtcXG59XFxuXFxuI2dhbGxlcnkge1xcbiAgY29sdW1uLWNvdW50OiA0O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuI2dhbGxlcnkgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxufVxcbiNnYWxsZXJ5IGZpZ3VyZSA+IGltZyB7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4jZ2FsbGVyeSBmaWd1cmUgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiNnYWxsZXJ5IGZpZ2NhcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuI2dhbGxlcnkgaW1nIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYXJjaGl2YXNHYWxsZXJ5IGltZyB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDE7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDI7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTcxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcXG4gICNnYWxsZXJ5IHtcXG4gICAgY29sdW1uLWNvdW50OiAzO1xcbiAgfVxcbn1cXG5jb2RlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbn1cXG5jb2RlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvcHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBoaW50U2hvd3VwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLnNob3dVcCB7XFxuICBhbmltYXRpb24tbmFtZTogaGludFNob3d1cDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbi53YXJuLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNCwgMjU1LCAwLjcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjkpO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTNweDtcXG59XFxuLndhcm4tYm94IC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmJpbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjE5NztcXG59XFxuLmJpbyAuZGVzYyB7XFxuICBtYXgtd2lkdGg6IDYwOHB4O1xcbn1cXG4uYmlvIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYmlvIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxufVxcblxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udHV0b3JpYWwtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDI5LCAyOSwgMjkpIDAlLCByZ2IoMjksIDI5LCAyOSkgODAlLCByZ2IoNDQsIDQ0LCA0NCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmNvbnNvbGF0YVxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxucCBhIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fZ2FsbGVyeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL19pbWctZ2FsbGVyeS5taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2NvZGUtc25pcHBldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2NvcHktaGludC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX3dhcm4tYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fYmlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hYnN0cmFjdHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hYnN0cmFjdHMvX2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL19nbG9iYWwtYmctZ3JhZGllbnQubWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDUjtBREdRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNEWjtBREdZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDRGhCO0FESVk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRmhCO0FESWdCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDRnBCOztBQy9CQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtBRGtDSjtBQy9CSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdGQUFBO0FEaUNSOztBRW5EQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBRnNESjtBRXBESTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FGc0RSO0FFbkRJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUZxRFI7QUVsREk7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUZvRFI7QUVqREk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBRm1EUjtBRy9FSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBSGlGUjs7QUdwRkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUh1RlI7O0FFbkRBO0VBQ0k7SUFDSSxlQUFBO0VGc0ROO0FBQ0Y7QUVuREE7RUFDSTtJQUNJLGVBQUE7RUZxRE47QUFDRjtBRWxEQTtFQUNJO0lBQ0ksZUFBQTtFRm9ETjtBQUNGO0FJM0dBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FKNkdKO0FJM0dJO0VBQ0ksZUFBQTtBSjZHUjs7QUt4SEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FMMkhKOztBS3hIQTtFQUNJO0lBQUksVUFBQTtFTDRITjtFSzNIRTtJQUFLLFlBQUE7RUw4SFA7RUs3SEU7SUFBSyxVQUFBO0VMZ0lQO0VLL0hFO0lBQUssWUFBQTtFTGtJUDtFS2pJRTtJQUFNLFVBQUE7RUxvSVI7QUFDRjtBS2xJQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7QUxvSUo7O0FNcEpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FOdUpKO0FNckpJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FOdUpSOztBT3BLQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBUHVLSjtBT3JLSTtFQUNJLGdCQUFBO0FQdUtSO0FPcEtJO0VBQ0ksU0FBQTtBUHNLUjtBT25LSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QVBxS1I7O0FRekxBO0VBQ0ksa0JBQUE7QVI0TEo7O0FTN0xBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QVRnTUo7O0FBMUxBO0VBQ0ksc0JBQUE7QUE2TEo7O0FBM0xBO0VBQ0ksa0JBQUE7RVViQSxnR0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBVjRNSjs7QUE5TEE7RUFDSSx5QldsQmM7RVhtQmQscUNBQUE7QUFpTUo7O0FBN0xBO0VBQ0ksaUJBQUE7QUFnTUo7QUE5TEk7RUFDSSx1Qlc1Qks7QVg0TmI7O0FBNUxBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUErTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2Fzc2V0cy9pbWcvYmFubmVyLWZhZGVkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFxyXFxuICAgIGgxe1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC02cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgb2x7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBhe1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgbGl7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYTNhM2E7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2hlYWRlcic7XFxyXFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9mb290ZXInO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvZ2FsbGVyeSc7XFxyXFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9jb2RlLXNuaXBwZXQnO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvY29weS1oaW50JztcXHJcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL3dhcm4tYm94JztcXHJcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2Jpbyc7XFxyXFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9hYnN0cmFjdHMnO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvbWl4aW5zL2dsb2JhbC1iZy1ncmFkaWVudC5taXhpbicgYXMgYmc7XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBAaW5jbHVkZSBiZy5nbG9iYWwtYmctZ3JhZGllbnQoKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgY29sb3I6IGFic3RyYWN0cy4kbWFpbi1mb250LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5we1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG5cXHJcXG4gICAgYXtcXHJcXG4gICAgICAgIGNvbG9yOiBhYnN0cmFjdHMuJGxpbmstY29sb3I7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVwiLFwiI2Zvb3RlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9hc3NldHMvaW1nL2JnLWZvb3Rlci5qcGdcXFwiKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgJjphZnRlcntcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI5LDI5LDI5LDEpIDAlLCByZ2JhKDY0LDY0LDY0LDApIDU2JSk7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAaW1wb3J0ICcuLi9taXhpbnMvaW1nLWdhbGxlcnkubWl4aW4nO1xcclxcblxcclxcbiNnYWxsZXJ5e1xcclxcbiAgICBjb2x1bW4tY291bnQ6IDQ7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIGZpZ3VyZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZpZ3VyZSA+IGltZyB7XFxyXFxuICAgICAgICBncmlkLXJvdzogMSAvIC0xO1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGZpZ3VyZSBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgZmlnY2FwdGlvbiB7XFxyXFxuICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGltZy1nYWxsZXJ5KClcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2FyY2hpdmFzR2FsbGVyeXtcXHJcXG4gICAgQGluY2x1ZGUgaW1nLWdhbGxlcnkoKVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgICNnYWxsZXJ5e1xcclxcbiAgICAgICAgY29sdW1uLWNvdW50OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xcclxcbiAgICAjZ2FsbGVyeXtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk3MXB4KSBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XFxyXFxuICAgICNnYWxsZXJ5e1xcclxcbiAgICAgICAgY29sdW1uLWNvdW50OiAzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQG1peGluIGltZy1nYWxsZXJ5KCkge1xcclxcbiAgICBpbWd7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcImNvZGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCIsXCIjY29weXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaGludFNob3d1cCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAlIHtvcGFjaXR5OiAuOTt9XFxyXFxuICAgIDUwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgIDgwJSB7b3BhY2l0eTogLjk7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLnNob3dVcHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpbnRTaG93dXA7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxufVwiLFwiLndhcm4tYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNCwgMjU1LCAwLjcpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIxOCwgMjE4LCAyMTgsIDAuOSk7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XFxyXFxuXFxyXFxuICAgIC5pY29ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVwiLFwiLmJpb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2MTk3O1xcclxcblxcclxcbiAgICAuZGVzY3tcXHJcXG4gICAgICAgIG1heC13aWR0aDogNjA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1ne1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCA1MHB4O1xcclxcbiAgICB9XFxyXFxufVwiLFwiLml0YWxpY3tcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cIixcIi50dXRvcmlhbC1pbWd7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiQG1peGluIGdsb2JhbC1iZy1ncmFkaWVudCgpIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjksMjksMjksMSkgMCUsIHJnYmEoMjksMjksMjksMSkgODAlLCByZ2IoNDQsIDQ0LCA0NCkgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwyOSwyOSk7XFxyXFxufVxcclxcblwiLFwiJGxpbmstY29sb3I6IHJnYigyNTUsIDI1MSwgMCk7XFxyXFxuJG1haW4tZm9udC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxuXHJcbmNvbnN0IEZPT1RFUiA9IGBcclxuICAgIDxzcGFuPk1jJ0RvY3Mg4oCTIGtyZGV2ZWxvcG1lbnQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHYuJHtwa2cudmVyc2lvbn08L3NwYW4+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGT09URVI7IiwiY29uc3QgSEVBREVSID0gYFxyXG4gICAgICAgIDxoMT7wn4yOIE1jJ0RvY3M8L2gxPlxyXG5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPjxsaT7wn4+gIEhvbWU8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXAuaHRtbFwiPjxsaT7wn5e677iPIE1hcDwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluc3BpcmF0aW9ucy5odG1sXCI+PGxpPvCfkqEgSW5zcGlyYXRpb25zPC9saT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwic2VsZWN0aW9ucy5odG1sXCI+PGxpPvCfk5AgU2VsZWN0aW9uczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImJydXNoZXMuaHRtbFwiPjxsaT7im4/vuI8gQnJ1c2hlczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImZvcm11bGFzLmh0bWxcIj48bGk+4pqX77iPIEZvcm11bGFzPC9saT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWlzY2VsbGFuZW91cy5odG1sXCI+PGxpPvCfqpAgTWlzY2VsbGFuZW91czwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImFyY2hpdmFzLmh0bWxcIj48bGk+8J+TnCBBcmNoaXZhczwvbGk+PC9hPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgIDwvbmF2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSEVBREVSOyIsImxldCBpbnNwaXJhdGlvbnMgPSBbXCIxLmpwZ1wiLFwiMTAuanBnXCIsXCIxMS5qcGdcIixcIjEyLmpwZ1wiLFwiMTMuanBnXCIsXCIxNC5qcGdcIixcIjE1LmpwZ1wiLFwiMTYuanBnXCIsXCIxNy5qcGdcIixcIjE4LmpwZ1wiLFwiMTkuanBnXCIsXCIyLmpwZ1wiLFwiMjAuanBnXCIsXCIyMS5qcGdcIixcIjIyLmpwZ1wiLFwiMjMuanBnXCIsXCIyNC5qcGdcIixcIjI1LnBuZ1wiLFwiMjYuanBnXCIsXCIyNy5wbmdcIixcIjI4LmpwZ1wiLFwiMjkucG5nXCIsXCIzLmpwZ1wiLFwiMzAuanBnXCIsXCIzMS5wbmdcIixcIjMyLmpwZ1wiLFwiMzMucG5nXCIsXCIzNC5qcGdcIixcIjM1LnBuZ1wiLFwiMzYuanBnXCIsXCIzNy5wbmdcIixcIjM4LmpwZ1wiLFwiMzkucG5nXCIsXCI0LmpwZ1wiLFwiNDAuanBnXCIsXCI0MS53ZWJwXCIsXCI0Mi5wbmdcIixcIjQzLmpwZ1wiLFwiNDQud2VicFwiLFwiNDUucG5nXCIsXCI0Ni5qcGdcIixcIjQ3LndlYnBcIixcIjQ4LnBuZ1wiLFwiNDkuanBnXCIsXCI0OS53ZWJwXCIsXCI1LmpwZ1wiLFwiNTAucG5nXCIsXCI2LmpwZ1wiLFwiNy5qcGdcIixcIjguanBnXCIsXCI5LmpwZ1wiXTtsZXQgYXJjaGl2YXMgPSBbXCIyMDEwdnMyMDIwLnBuZ1wiLFwicmFpbHdheV9zdGF0aW9uc19wbGFuXzMxXzA3XzIwMjEucG5nXCIsXCJyb2Fkc19wbGFuXzIwMjEtMDktMDcgMjEyOTEyLnBuZ1wiLFwic3RhcmEgd3lzcGEgaHlkZSBwYXJrdS5wbmdcIixcInN0dWRpdW1fa29yeXRhem93ZS5wbmdcIixcIndoaWNoX3dheV90b193b3hfdG93bi5wbmdcIixcIldvcmxkMV8yMDIxLTA2LTEyLnBuZ1wiLFwid294X2VsZXZhdG9yLnBuZ1wiLFwiWnJ6dXQgZWtyYW51IDIwMjEtMDgtMDYgMjIyNjU2LnBuZy5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzMjI0MS5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzMjQxMi5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA5LTI0IDIzNDI1Ny5wbmdcIixcIlpyenV0LWVrcmFudS0yMDIxLTA5LTIzLTIyNDA0OS5wbmdcIl07IGV4cG9ydCB7aW5zcGlyYXRpb25zLCBhcmNoaXZhc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBpbnNwaXJhdGlvbnMsIGFyY2hpdmFzIH0gZnJvbSAnLi9hc3NldHMvanMvaW1nJztcclxuaW1wb3J0IEhFQURFUiBmcm9tIFwiLi9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IEZPT1RFUiBmcm9tIFwiLi9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXJcIjtcclxuXHJcbmxldCBjb3B5OiBhbnk7XHJcblxyXG5jb25zdCBjb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb2RlXCIpXHJcbik7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0ZGl2LmlkID0gXCJjb3B5XCI7XHJcblx0ZGl2LnRleHRDb250ZW50ID0gXCJDb3BpZWQhXCI7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdGNvcHkgPSBkaXY7XHJcblxyXG5cdGFkZENvcHlIaW50RXZlbnRMaXN0ZW5lcigpO1xyXG5cdHJlbmRlckhlYWRlcigpO1xyXG5cdHJlbmRlckZvb3RlcigpO1xyXG5cdHJlbmRlckdhbGxlcnkoJ2dhbGxlcnknKTtcclxuXHRyZW5kZXJHYWxsZXJ5KCdhcmNoaXZhc0dhbGxlcnknKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDb3B5SGludEV2ZW50TGlzdGVuZXIoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFwibW91c2Vtb3ZlXCIsXHJcblx0XHQoZTogTW91c2VFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weVwiKS5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArIDIwICsgXCJweFwiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlcIikuc3R5bGUudG9wID0gZS5wYWdlWSArIDIwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbmNvZGVzLmZvckVhY2goKGNvZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0Y29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGUudGFyZ2V0LmlubmVyVGV4dCkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNvcHkpO1xyXG5cdFx0XHRjb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYWxsZXJ5KG5hbWU6IHN0cmluZykge1xyXG5cdGNvbnN0IEdBTExFUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuXHRjb25zdCBBUkNISVZBU19HQUxMRVJZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcblx0bGV0IHRtcGwgPSAnJztcclxuXHJcblxyXG5cclxuXHRpZihHQUxMRVJZICYmIG5hbWUgPT0gXCJnYWxsZXJ5XCIpIHtcclxuXHRcdGxldCBzb3J0ZWRJbnNwaXJhdGlvbnMgPSBpbnNwaXJhdGlvbnMuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuXHRcdFx0Y29uc3QgTEVGVCA9IE51bWJlcihhLnNwbGl0KCcuJylbMF0pO1xyXG5cdFx0XHRjb25zdCBSSUdIVCA9ICBOdW1iZXIoYi5zcGxpdCgnLicpWzBdKTtcclxuXHRcclxuXHRcdFx0aWYoIExFRlQgPiBSSUdIVCApIHsgcmV0dXJuIDE7IH1cclxuXHRcclxuXHRcdFx0aWYgKCBMRUZUIDwgUklHSFQgKSB7IHJldHVybiAtMTsgfVxyXG5cdFxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGZpbGUgb2Ygc29ydGVkSW5zcGlyYXRpb25zKSB7XHJcblx0XHRcdHRtcGwgKz0gYFxyXG5cdFx0XHRcdDxmaWd1cmU+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9pbnNwaXJhdGlvbnMvJHtmaWxlfVwiPlxyXG5cdFx0XHRcdFx0PGZpZ2NhcHRpb24+JHtmaWxlfTwvZmlnY2FwdGlvbj5cclxuXHRcdFx0XHQ8L2ZpZ3VyZT5cclxuXHRcdFx0XHRgO1xyXG5cdFx0fVxyXG5cclxuXHRcdEdBTExFUlkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRtcGwpO1xyXG5cdH1cclxuXHJcblx0aWYoQVJDSElWQVNfR0FMTEVSWSAmJiBuYW1lID09PSBcImFyY2hpdmFzR2FsbGVyeVwiKSB7XHJcblx0XHRmb3IgKGxldCBmaWxlIG9mIGFyY2hpdmFzKSB7XHJcblx0XHRcdHRtcGwgKz0gYFxyXG5cdFx0XHRcdDxmaWd1cmU+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9hcmNoaXZhcy8ke2ZpbGV9XCI+XHJcblx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj4ke2ZpbGV9PC9maWdjYXB0aW9uPlxyXG5cdFx0XHRcdDwvZmlndXJlPlxyXG5cdFx0XHRcdGA7XHJcblx0XHR9XHJcblxyXG5cdFx0R0FMTEVSWS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wbCk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIEhFQURFUik7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgRk9PVEVSKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==