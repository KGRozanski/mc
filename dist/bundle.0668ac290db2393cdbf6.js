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
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n  position: relative;\n  min-height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n}\n#header h1 {\n  float: left;\n  margin-top: 0;\n  position: relative;\n  left: -6px;\n}\n#header .serverIp {\n  display: inline-block;\n  margin: 7px 0 0 30px;\n  border: 1px solid #00d26a;\n  border-radius: 6px;\n  padding: 5px 10px;\n}\n#header .serverIp:hover {\n  cursor: pointer;\n}\n#header nav {\n  clear: both;\n}\n#header nav ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n#header nav ol a {\n  color: #fff;\n  text-decoration: none;\n}\n#header nav ol li {\n  border: 1px solid #f2f2f2;\n  margin: 0 10px 10px 0;\n  padding: 8px;\n  background: #313131;\n}\n#header nav ol li:hover {\n  cursor: pointer;\n  background: #3a3a3a;\n}\n\n#footer {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  min-height: 150px;\n  padding-top: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#footer:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background: linear-gradient(180deg, rgb(29, 29, 29) 0%, rgba(64, 64, 64, 0) 56%);\n}\n\n#gallery {\n  column-count: 4;\n  column-gap: 10px;\n}\n#gallery figure {\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  margin-bottom: 10px;\n  break-inside: avoid;\n}\n#gallery figure > img {\n  grid-row: 1/-1;\n  grid-column: 1;\n}\n#gallery figure a {\n  color: black;\n  text-decoration: none;\n}\n#gallery figcaption {\n  grid-row: 2;\n  grid-column: 1;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 0.2em 0.5em;\n  justify-self: start;\n}\n#gallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n#archivasGallery img {\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n@media only screen and (max-width: 576px) {\n  #gallery {\n    column-count: 1;\n  }\n}\n@media only screen and (min-width: 577px) and (max-width: 970px) {\n  #gallery {\n    column-count: 2;\n  }\n}\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\n  #gallery {\n    column-count: 3;\n  }\n}\ncode {\n  font-size: 14px;\n  background: #000;\n  padding: 6px 12px;\n  border: 1px solid gray;\n  display: inline-block;\n  margin: 10px 0 10px 0;\n  word-break: break-all;\n  max-width: 720px;\n}\ncode:hover {\n  cursor: pointer;\n}\n\n#copy {\n  position: absolute;\n  cursor: default;\n  opacity: 0;\n}\n\n@keyframes hintShowup {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.showUp {\n  animation-name: hintShowup;\n  animation-duration: 1s;\n}\n\n.warn-box {\n  display: flex;\n  align-items: center;\n  max-width: 800px;\n  background-color: rgba(0, 204, 255, 0.7);\n  border: 2px solid rgba(218, 218, 218, 0.9);\n  color: #000;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 10px 13px;\n}\n.warn-box .icon {\n  font-size: 28px;\n  margin-right: 20px;\n}\n\n.bio {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid;\n  padding: 0 20px;\n  max-width: 900px;\n  background-color: #2a6197;\n}\n.bio .desc {\n  max-width: 608px;\n}\n.bio p {\n  margin: 0;\n}\n.bio img {\n  display: block;\n  max-width: 200px;\n  border-radius: 50%;\n  margin: 20px 0 20px 50px;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tutorial-img {\n  display: block;\n  max-width: 500px;\n  margin: 10px 0;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n  background: linear-gradient(0deg, rgb(29, 29, 29) 0%, rgb(29, 29, 29) 80%, rgb(44, 44, 44) 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgb(29, 29, 29);\n}\n\nbody {\n  color: rgb(248, 248, 248);\n  font-family: \"Inconsolata\", monospace;\n}\n\np {\n  margin-left: 15px;\n}\np a {\n  color: rgb(255, 251, 0);\n}\n\n.links {\n  display: flex;\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/parcials/_header.scss","webpack://./src/style.scss","webpack://./src/assets/scss/parcials/_footer.scss","webpack://./src/assets/scss/parcials/_gallery.scss","webpack://./src/assets/scss/mixins/_img-gallery.mixin.scss","webpack://./src/assets/scss/parcials/_code-snippet.scss","webpack://./src/assets/scss/parcials/_copy-hint.scss","webpack://./src/assets/scss/parcials/_warn-box.scss","webpack://./src/assets/scss/parcials/_bio.scss","webpack://./src/assets/scss/abstracts/_fonts.scss","webpack://./src/assets/scss/abstracts/_common.scss","webpack://./src/assets/scss/mixins/_global-bg-gradient.mixin.scss","webpack://./src/assets/scss/abstracts/_variables.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,iBAAA;EACA,yDAAA;EACA,iCAAA;EACA,4BAAA;ACCJ;ADCI;EACI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;ACCR;ADEI;EACI,qBAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;ACAR;ADEQ;EACI,eAAA;ACAZ;ADII;EACI,WAAA;ACFR;ADIQ;EACI,aAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;ACFZ;ADIY;EACI,WAAA;EACA,qBAAA;ACFhB;ADKY;EACI,yBAAA;EACA,qBAAA;EACA,YAAA;EACA,mBAAA;ACHhB;ADKgB;EACI,eAAA;EACA,mBAAA;ACHpB;;AC7CA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,yDAAA;ADgDJ;AC7CI;EACI,WAAA;EACA,cAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,gFAAA;AD+CR;;AEjEA;EACI,eAAA;EACA,gBAAA;AFoEJ;AElEI;EACI,SAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,mBAAA;AFoER;AEjEI;EACI,cAAA;EACA,cAAA;AFmER;AEhEI;EACI,YAAA;EACA,qBAAA;AFkER;AE/DI;EACI,WAAA;EACA,cAAA;EACA,0CAAA;EACA,oBAAA;EACA,mBAAA;AFiER;AG7FI;EACI,eAAA;EACA,eAAA;EACA,cAAA;AH+FR;;AGlGI;EACI,eAAA;EACA,eAAA;EACA,cAAA;AHqGR;;AEjEA;EACI;IACI,eAAA;EFoEN;AACF;AEjEA;EACI;IACI,eAAA;EFmEN;AACF;AEhEA;EACI;IACI,eAAA;EFkEN;AACF;AIzHA;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;AJ2HJ;AIzHI;EACI,eAAA;AJ2HR;;AKtIA;EACI,kBAAA;EACA,eAAA;EACA,UAAA;ALyIJ;;AKtIA;EACI;IAAI,UAAA;EL0IN;EKzIE;IAAK,YAAA;EL4IP;EK3IE;IAAK,UAAA;EL8IP;EK7IE;IAAK,YAAA;ELgJP;EK/IE;IAAM,UAAA;ELkJR;AACF;AKhJA;EACI,0BAAA;EACA,sBAAA;ALkJJ;;AMlKA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,wCAAA;EACA,0CAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;ANqKJ;AMnKI;EACI,eAAA;EACA,kBAAA;ANqKR;;AOlLA;EACI,aAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;APqLJ;AOnLI;EACI,gBAAA;APqLR;AOlLI;EACI,SAAA;APoLR;AOjLI;EACI,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;APmLR;;AQvMA;EACI,kBAAA;AR0MJ;;AS3MA;EACI,cAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;AT8MJ;;AAxMA;EACI,sBAAA;AA2MJ;;AAzMA;EACI,kBAAA;EUbA,gGAAA;EACA,4BAAA;EACA,sBAAA;EACA,iCAAA;AV0NJ;;AA5MA;EACI,yBWlBc;EXmBd,qCAAA;AA+MJ;;AA3MA;EACI,iBAAA;AA8MJ;AA5MI;EACI,uBW5BK;AX0Ob;;AA1MA;EACI,aAAA;EACA,eAAA;AA6MJ","sourcesContent":["#header{\r\n    position: relative;\r\n    min-height: 100px;\r\n    background-image: url('/src/assets/img/banner-faded.png');\r\n    background-position: bottom right;\r\n    background-repeat: no-repeat;\r\n\r\n    h1{\r\n        float: left;\r\n        margin-top: 0;\r\n        position: relative;\r\n        left: -6px;\r\n    }\r\n\r\n    .serverIp{\r\n        display: inline-block;\r\n        margin: 7px 0 0 30px;\r\n        border: 1px solid #00d26a;\r\n        border-radius: 6px;\r\n        padding: 5px 10px;\r\n\r\n        &:hover{\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    nav{\r\n        clear: both;\r\n\r\n        ol{\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            list-style: none;\r\n            padding: 0;\r\n    \r\n            a{\r\n                color: #fff;\r\n                text-decoration: none;\r\n            }\r\n    \r\n            li{\r\n                border: 1px solid #f2f2f2;\r\n                margin: 0 10px 10px 0;\r\n                padding: 8px;\r\n                background: #313131;\r\n    \r\n                &:hover{\r\n                    cursor: pointer;\r\n                    background: #3a3a3a;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@use './assets/scss/parcials/header';\r\n@use './assets/scss/parcials/footer';\r\n@use './assets/scss/parcials/gallery';\r\n@use './assets/scss/parcials/code-snippet';\r\n@use './assets/scss/parcials/copy-hint';\r\n@use './assets/scss/parcials/warn-box';\r\n@use './assets/scss/parcials/bio';\r\n@use './assets/scss/abstracts';\r\n@use './assets/scss/mixins/global-bg-gradient.mixin' as bg;\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    overflow-x: hidden;\r\n    @include bg.global-bg-gradient();\r\n}\r\n\r\nbody{\r\n    color: abstracts.$main-font-color;\r\n    font-family: 'Inconsolata', monospace;\r\n\r\n}\r\n\r\np{\r\n    margin-left: 15px;\r\n\r\n    a{\r\n        color: abstracts.$link-color;\r\n    }\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}","#footer{\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    min-height: 150px;\r\n    padding-top: 50px;\r\n    background-image: url(\"/src/assets/img/bg-footer.jpg\");\r\n\r\n\r\n    &:after{\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 100;\r\n        background: linear-gradient(180deg, rgba(29,29,29,1) 0%, rgba(64,64,64,0) 56%);\r\n    }\r\n}","@import '../mixins/img-gallery.mixin';\r\n\r\n#gallery{\r\n    column-count: 4;\r\n    column-gap: 10px;\r\n\r\n    figure {\r\n        margin: 0;\r\n        display: grid;\r\n        grid-template-rows: 1fr auto;\r\n        margin-bottom: 10px;\r\n        break-inside: avoid;\r\n    }\r\n\r\n    figure > img {\r\n        grid-row: 1 / -1;\r\n        grid-column: 1;\r\n    }\r\n    \r\n    figure a {\r\n        color: black;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    figcaption {\r\n        grid-row: 2;\r\n        grid-column: 1;\r\n        background-color: rgba(255,255,255,.5);\r\n        padding: .2em .5em;\r\n        justify-self: start;\r\n    }\r\n\r\n    @include img-gallery()\r\n\r\n}\r\n\r\n#archivasGallery{\r\n    @include img-gallery()\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    #gallery{\r\n        column-count: 1;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 577px) and (max-width: 970px) {\r\n    #gallery{\r\n        column-count: 2;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 971px) and (max-width: 1170px) {\r\n    #gallery{\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n","@mixin img-gallery() {\r\n    img{\r\n        min-width: 100%;\r\n        max-width: 100%;\r\n        display: block;\r\n    }\r\n}\r\n","code{\r\n    font-size: 14px;\r\n    background: #000;\r\n    padding: 6px 12px;\r\n    border: 1px solid gray;\r\n    display: inline-block;\r\n    margin: 10px 0 10px 0;\r\n    word-break: break-all;\r\n    max-width: 720px;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n    }\r\n}","#copy{\r\n    position: absolute;\r\n    cursor: default;\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes hintShowup {\r\n    0% {opacity: 0;}\r\n    10% {opacity: .9;}\r\n    50% {opacity: 1;}\r\n    80% {opacity: .9;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.showUp{\r\n    animation-name: hintShowup;\r\n    animation-duration: 1s;\r\n}",".warn-box{\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 800px;\r\n    background-color: rgba(0, 204, 255, 0.7);\r\n    border: 2px solid rgba(218, 218, 218, 0.9);\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    padding: 10px 13px;\r\n\r\n    .icon{\r\n        font-size: 28px;\r\n        margin-right: 20px;\r\n    }\r\n}",".bio{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border: 1px solid;\r\n    padding: 0 20px;\r\n    max-width: 900px;\r\n    background-color: #2a6197;\r\n\r\n    .desc{\r\n        max-width: 608px;\r\n    }\r\n\r\n    p {\r\n        margin: 0;\r\n    }\r\n\r\n    img{\r\n        display: block;\r\n        max-width: 200px;\r\n        border-radius: 50%;\r\n        margin: 20px 0 20px 50px;\r\n    }\r\n}",".italic{\r\n    font-style: italic;\r\n}",".tutorial-img{\r\n    display: block;\r\n    max-width: 500px;\r\n    margin: 10px 0;\r\n    width: 100%;\r\n}\r\n","@mixin global-bg-gradient() {\r\n    background: linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,1) 80%, rgb(44, 44, 44) 100%);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: rgb(29,29,29);\r\n}\r\n","$link-color: rgb(255, 251, 0);\r\n$main-font-color: rgb(248, 248, 248);"],"sourceRoot":""}]);
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
/* harmony export */   "archivas": () => (/* binding */ archivas),
/* harmony export */   "inspirations": () => (/* binding */ inspirations)
/* harmony export */ });
let inspirations = ["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.png","26.jpg","27.png","28.jpg","29.png","3.jpg","30.jpg","31.png","32.jpg","33.png","34.jpg","35.png","36.jpg","37.png","38.jpg","39.png","4.jpg","40.jpg","41.webp","42.png","43.jpg","44.webp","45.png","46.jpg","47.webp","48.png","49.jpg","49.webp","5.jpg","50.jpg","50.png","51.jpg","52.jpg","53.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];let archivas = ["2010vs2020.png","corridor_study_2022-08-13 235036.jpg","corridor_study_2022-08-24.jpg","corridor_study_highway_2022-08-14 001303.jpg","corridor_study_krakow.jpeg","railway_stations_plan_31_07_2021.png","roads_plan_2021-09-07 212912.png","Screenshot 2022-08-01 002240.jpeg","stara wyspa hyde parku.png","studium_korytazowe.png","which_way_to_wox_town.png","World1_2021-06-12.png","wox_elevator.png","Zrzut ekranu 2021-08-06 222656.png.png","Zrzut ekranu 2021-09-24 232241.png","Zrzut ekranu 2021-09-24 232412.png","Zrzut ekranu 2021-09-24 234257.png","Zrzut-ekranu-2021-09-23-224049.png"]; 

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

module.exports = JSON.parse('{"name":"mc-docs","version":"1.5.0","description":"CraftPlanet most common world edit commands and tips","main":"index.js","private":true,"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","build":"node beforeBuild.js && webpack","watch":"webpack --watch","start":"webpack serve"},"repository":{"type":"git","url":"git+https://github.com/KGRozanski/world-edit-help.git"},"author":"KGRozanski","license":"MIT","bugs":{"url":"https://github.com/KGRozanski/world-edit-help/issues"},"homepage":"https://github.com/KGRozanski/world-edit-help#readme","devDependencies":{"@babel/core":"^7.18.6","copy-webpack-plugin":"^7.0.0","css-loader":"^5.0.1","file-loader":"^6.2.0","html-loader":"^4.1.0","html-webpack-plugin":"^5.5.0","sass":"^1.30.0","sass-loader":"^10.1.0","style-loader":"^2.0.0","ts-loader":"^8.0.11","typescript":"^4.1.2","url-loader":"^4.1.1","webpack":"^5.73.0","webpack-cli":"^4.2.0","webpack-dev-server":"^3.11.0"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8s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VyxFQUFFLG9FQUFNLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQsU0FBUyxvQkFBb0I7SUFDNUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFrQztRQUNoRyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBRSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3QixVQUFVLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYy1kb2NzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21jLWRvY3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21jLWRvY3MvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL21jLWRvY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbWMtZG9jcy8uL3NyYy9hc3NldHMvanMvaW1nLmpzIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWMtZG9jcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYy1kb2NzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21jLWRvY3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21jLWRvY3MvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9pbWcvYmFubmVyLWZhZGVkLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2Fzc2V0cy9pbWcvYmctZm9vdGVyLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbiNoZWFkZXIgaDEge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTZweDtcXG59XFxuI2hlYWRlciAuc2VydmVySXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA3cHggMCAwIDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBkMjZhO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbiNoZWFkZXIgLnNlcnZlcklwOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRlciBuYXYge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbiNoZWFkZXIgbmF2IG9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2hlYWRlciBuYXYgb2wgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2hlYWRlciBuYXYgb2wgbGkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcXG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQ6ICMzMTMxMzE7XFxufVxcbiNoZWFkZXIgbmF2IG9sIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4jZm9vdGVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjksIDI5LCAyOSkgMCUsIHJnYmEoNjQsIDY0LCA2NCwgMCkgNTYlKTtcXG59XFxuXFxuI2dhbGxlcnkge1xcbiAgY29sdW1uLWNvdW50OiA0O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuI2dhbGxlcnkgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxufVxcbiNnYWxsZXJ5IGZpZ3VyZSA+IGltZyB7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4jZ2FsbGVyeSBmaWd1cmUgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiNnYWxsZXJ5IGZpZ2NhcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuI2dhbGxlcnkgaW1nIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYXJjaGl2YXNHYWxsZXJ5IGltZyB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDE7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xcbiAgI2dhbGxlcnkge1xcbiAgICBjb2x1bW4tY291bnQ6IDI7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTcxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcXG4gICNnYWxsZXJ5IHtcXG4gICAgY29sdW1uLWNvdW50OiAzO1xcbiAgfVxcbn1cXG5jb2RlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbn1cXG5jb2RlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvcHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBoaW50U2hvd3VwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLnNob3dVcCB7XFxuICBhbmltYXRpb24tbmFtZTogaGludFNob3d1cDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbi53YXJuLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwNCwgMjU1LCAwLjcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjkpO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTNweDtcXG59XFxuLndhcm4tYm94IC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmJpbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjE5NztcXG59XFxuLmJpbyAuZGVzYyB7XFxuICBtYXgtd2lkdGg6IDYwOHB4O1xcbn1cXG4uYmlvIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYmlvIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIwcHggMCAyMHB4IDUwcHg7XFxufVxcblxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udHV0b3JpYWwtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDI5LCAyOSwgMjkpIDAlLCByZ2IoMjksIDI5LCAyOSkgODAlLCByZ2IoNDQsIDQ0LCA0NCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmNvbnNvbGF0YVxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxucCBhIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fZ2FsbGVyeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL19pbWctZ2FsbGVyeS5taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2NvZGUtc25pcHBldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX2NvcHktaGludC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvcGFyY2lhbHMvX3dhcm4tYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9wYXJjaWFscy9fYmlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hYnN0cmFjdHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hYnN0cmFjdHMvX2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL19nbG9iYWwtYmctZ3JhZGllbnQubWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURFSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtBQ0FaO0FESUk7RUFDSSxXQUFBO0FDRlI7QURJUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDRlo7QURJWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0ZoQjtBREtZO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBREtnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0hwQjs7QUM3Q0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7QURnREo7QUM3Q0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnRkFBQTtBRCtDUjs7QUVqRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUZvRUo7QUVsRUk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRm9FUjtBRWpFSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FGbUVSO0FFaEVJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FGa0VSO0FFL0RJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUZpRVI7QUc3Rkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUgrRlI7O0FHbEdJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FIcUdSOztBRWpFQTtFQUNJO0lBQ0ksZUFBQTtFRm9FTjtBQUNGO0FFakVBO0VBQ0k7SUFDSSxlQUFBO0VGbUVOO0FBQ0Y7QUVoRUE7RUFDSTtJQUNJLGVBQUE7RUZrRU47QUFDRjtBSXpIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBSjJISjtBSXpISTtFQUNJLGVBQUE7QUoySFI7O0FLdElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBTHlJSjs7QUt0SUE7RUFDSTtJQUFJLFVBQUE7RUwwSU47RUt6SUU7SUFBSyxZQUFBO0VMNElQO0VLM0lFO0lBQUssVUFBQTtFTDhJUDtFSzdJRTtJQUFLLFlBQUE7RUxnSlA7RUsvSUU7SUFBTSxVQUFBO0VMa0pSO0FBQ0Y7QUtoSkE7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FMa0pKOztBTWxLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBTnFLSjtBTW5LSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBTnFLUjs7QU9sTEE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QVBxTEo7QU9uTEk7RUFDSSxnQkFBQTtBUHFMUjtBT2xMSTtFQUNJLFNBQUE7QVBvTFI7QU9qTEk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FQbUxSOztBUXZNQTtFQUNJLGtCQUFBO0FSME1KOztBUzNNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FUOE1KOztBQXhNQTtFQUNJLHNCQUFBO0FBMk1KOztBQXpNQTtFQUNJLGtCQUFBO0VVYkEsZ0dBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QVYwTko7O0FBNU1BO0VBQ0kseUJXbEJjO0VYbUJkLHFDQUFBO0FBK01KOztBQTNNQTtFQUNJLGlCQUFBO0FBOE1KO0FBNU1JO0VBQ0ksdUJXNUJLO0FYME9iOztBQTFNQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBNk1KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1nL2Jhbm5lci1mYWRlZC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgICBoMXtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC02cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlcnZlcklwe1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiA3cHggMCAwIDMwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBkMjZhO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXZ7XFxyXFxuICAgICAgICBjbGVhcjogYm90aDtcXHJcXG5cXHJcXG4gICAgICAgIG9se1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgYXtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIGxpe1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMxMzEzMTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiLFwiQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9oZWFkZXInO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvZm9vdGVyJztcXHJcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2dhbGxlcnknO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvcGFyY2lhbHMvY29kZS1zbmlwcGV0JztcXHJcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL3BhcmNpYWxzL2NvcHktaGludCc7XFxyXFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy93YXJuLWJveCc7XFxyXFxuQHVzZSAnLi9hc3NldHMvc2Nzcy9wYXJjaWFscy9iaW8nO1xcclxcbkB1c2UgJy4vYXNzZXRzL3Njc3MvYWJzdHJhY3RzJztcXHJcXG5AdXNlICcuL2Fzc2V0cy9zY3NzL21peGlucy9nbG9iYWwtYmctZ3JhZGllbnQubWl4aW4nIGFzIGJnO1xcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgQGluY2x1ZGUgYmcuZ2xvYmFsLWJnLWdyYWRpZW50KCk7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGNvbG9yOiBhYnN0cmFjdHMuJG1haW4tZm9udC1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFxyXFxuICAgIGF7XFxyXFxuICAgICAgICBjb2xvcjogYWJzdHJhY3RzLiRsaW5rLWNvbG9yO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5saW5rc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cIixcIiNmb290ZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ltZy9iZy1mb290ZXIuanBnXFxcIik7XFxyXFxuXFxyXFxuXFxyXFxuICAgICY6YWZ0ZXJ7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgei1pbmRleDogMTAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyOSwyOSwyOSwxKSAwJSwgcmdiYSg2NCw2NCw2NCwwKSA1NiUpO1xcclxcbiAgICB9XFxyXFxufVwiLFwiQGltcG9ydCAnLi4vbWl4aW5zL2ltZy1nYWxsZXJ5Lm1peGluJztcXHJcXG5cXHJcXG4jZ2FsbGVyeXtcXHJcXG4gICAgY29sdW1uLWNvdW50OiA0O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICBmaWd1cmUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBmaWd1cmUgPiBpbWcge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBmaWd1cmUgYSB7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGZpZ2NhcHRpb24ge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgICAgICAgcGFkZGluZzogLjJlbSAuNWVtO1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBpbWctZ2FsbGVyeSgpXFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNhcmNoaXZhc0dhbGxlcnl7XFxyXFxuICAgIEBpbmNsdWRlIGltZy1nYWxsZXJ5KClcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICAjZ2FsbGVyeXtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3N3B4KSBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcXHJcXG4gICAgI2dhbGxlcnl7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NzFweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xcclxcbiAgICAjZ2FsbGVyeXtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIkBtaXhpbiBpbWctZ2FsbGVyeSgpIHtcXHJcXG4gICAgaW1ne1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJjb2Rle1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVwiLFwiI2NvcHl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhpbnRTaG93dXAge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwJSB7b3BhY2l0eTogLjk7fVxcclxcbiAgICA1MCUge29wYWNpdHk6IDE7fVxcclxcbiAgICA4MCUge29wYWNpdHk6IC45O31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5zaG93VXB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaW50U2hvd3VwO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cIixcIi53YXJuLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDQsIDI1NSwgMC43KTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjkpO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxM3B4O1xcclxcblxcclxcbiAgICAuaWNvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cIixcIi5iaW97XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjE5NztcXHJcXG5cXHJcXG4gICAgLmRlc2N7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYwOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggNTBweDtcXHJcXG4gICAgfVxcclxcbn1cIixcIi5pdGFsaWN7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XCIsXCIudHV0b3JpYWwtaW1ne1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBnbG9iYWwtYmctZ3JhZGllbnQoKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI5LDI5LDI5LDEpIDAlLCByZ2JhKDI5LDI5LDI5LDEpIDgwJSwgcmdiKDQ0LCA0NCwgNDQpIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksMjksMjkpO1xcclxcbn1cXHJcXG5cIixcIiRsaW5rLWNvbG9yOiByZ2IoMjU1LCAyNTEsIDApO1xcclxcbiRtYWluLWZvbnQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBwa2cgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuXHJcblxyXG5jb25zdCBGT09URVIgPSBgXHJcbiAgICA8c3Bhbj5NYydEb2NzIOKAkyBrcmRldmVsb3BtZW50IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSB2LiR7cGtnLnZlcnNpb259PC9zcGFuPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRk9PVEVSOyIsImNvbnN0IEhFQURFUiA9IGBcclxuICAgICAgICA8aDE+8J+MjiBNYydEb2NzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmVySXBcIj48c3BhbiBjbGFzcz1cImlwXCI+cGxheS5rcmRldmVsb3AucGw8L3NwYW4+IPCfn6IgT05MSU5FPC9kaXY+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj48bGk+8J+PoCBIb21lPC9saT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFwLmh0bWxcIj48bGk+8J+Xuu+4jyBNYXA8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbnNwaXJhdGlvbnMuaHRtbFwiPjxsaT7wn5KhIEluc3BpcmF0aW9uczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInNlbGVjdGlvbnMuaHRtbFwiPjxsaT7wn5OQIFNlbGVjdGlvbnM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJicnVzaGVzLmh0bWxcIj48bGk+4puP77iPIEJydXNoZXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJmb3JtdWxhcy5odG1sXCI+PGxpPuKal++4jyBGb3JtdWxhczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1pc2NlbGxhbmVvdXMuaHRtbFwiPjxsaT7wn6qQIE1pc2NlbGxhbmVvdXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhcmNoaXZhcy5odG1sXCI+PGxpPvCfk5wgQXJjaGl2YXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICA8L25hdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhFQURFUjsiLCJsZXQgaW5zcGlyYXRpb25zID0gW1wiMS5qcGdcIixcIjEwLmpwZ1wiLFwiMTEuanBnXCIsXCIxMi5qcGdcIixcIjEzLmpwZ1wiLFwiMTQuanBnXCIsXCIxNS5qcGdcIixcIjE2LmpwZ1wiLFwiMTcuanBnXCIsXCIxOC5qcGdcIixcIjE5LmpwZ1wiLFwiMi5qcGdcIixcIjIwLmpwZ1wiLFwiMjEuanBnXCIsXCIyMi5qcGdcIixcIjIzLmpwZ1wiLFwiMjQuanBnXCIsXCIyNS5wbmdcIixcIjI2LmpwZ1wiLFwiMjcucG5nXCIsXCIyOC5qcGdcIixcIjI5LnBuZ1wiLFwiMy5qcGdcIixcIjMwLmpwZ1wiLFwiMzEucG5nXCIsXCIzMi5qcGdcIixcIjMzLnBuZ1wiLFwiMzQuanBnXCIsXCIzNS5wbmdcIixcIjM2LmpwZ1wiLFwiMzcucG5nXCIsXCIzOC5qcGdcIixcIjM5LnBuZ1wiLFwiNC5qcGdcIixcIjQwLmpwZ1wiLFwiNDEud2VicFwiLFwiNDIucG5nXCIsXCI0My5qcGdcIixcIjQ0LndlYnBcIixcIjQ1LnBuZ1wiLFwiNDYuanBnXCIsXCI0Ny53ZWJwXCIsXCI0OC5wbmdcIixcIjQ5LmpwZ1wiLFwiNDkud2VicFwiLFwiNS5qcGdcIixcIjUwLmpwZ1wiLFwiNTAucG5nXCIsXCI1MS5qcGdcIixcIjUyLmpwZ1wiLFwiNTMuanBnXCIsXCI2LmpwZ1wiLFwiNy5qcGdcIixcIjguanBnXCIsXCI5LmpwZ1wiXTtsZXQgYXJjaGl2YXMgPSBbXCIyMDEwdnMyMDIwLnBuZ1wiLFwiY29ycmlkb3Jfc3R1ZHlfMjAyMi0wOC0xMyAyMzUwMzYuanBnXCIsXCJjb3JyaWRvcl9zdHVkeV8yMDIyLTA4LTI0LmpwZ1wiLFwiY29ycmlkb3Jfc3R1ZHlfaGlnaHdheV8yMDIyLTA4LTE0IDAwMTMwMy5qcGdcIixcImNvcnJpZG9yX3N0dWR5X2tyYWtvdy5qcGVnXCIsXCJyYWlsd2F5X3N0YXRpb25zX3BsYW5fMzFfMDdfMjAyMS5wbmdcIixcInJvYWRzX3BsYW5fMjAyMS0wOS0wNyAyMTI5MTIucG5nXCIsXCJTY3JlZW5zaG90IDIwMjItMDgtMDEgMDAyMjQwLmpwZWdcIixcInN0YXJhIHd5c3BhIGh5ZGUgcGFya3UucG5nXCIsXCJzdHVkaXVtX2tvcnl0YXpvd2UucG5nXCIsXCJ3aGljaF93YXlfdG9fd294X3Rvd24ucG5nXCIsXCJXb3JsZDFfMjAyMS0wNi0xMi5wbmdcIixcIndveF9lbGV2YXRvci5wbmdcIixcIlpyenV0IGVrcmFudSAyMDIxLTA4LTA2IDIyMjY1Ni5wbmcucG5nXCIsXCJacnp1dCBla3JhbnUgMjAyMS0wOS0yNCAyMzIyNDEucG5nXCIsXCJacnp1dCBla3JhbnUgMjAyMS0wOS0yNCAyMzI0MTIucG5nXCIsXCJacnp1dCBla3JhbnUgMjAyMS0wOS0yNCAyMzQyNTcucG5nXCIsXCJacnp1dC1la3JhbnUtMjAyMS0wOS0yMy0yMjQwNDkucG5nXCJdOyBleHBvcnQge2luc3BpcmF0aW9ucywgYXJjaGl2YXN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgaW5zcGlyYXRpb25zLCBhcmNoaXZhcyB9IGZyb20gJy4vYXNzZXRzL2pzL2ltZyc7XHJcbmltcG9ydCBIRUFERVIgZnJvbSBcIi4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBGT09URVIgZnJvbSBcIi4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcblxyXG5sZXQgY29weTogYW55O1xyXG5cclxuY29uc3QgY29kZXM6IEFycmF5PEhUTUxFbGVtZW50PiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29kZVwiKVxyXG5cclxuKTtcclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0ZGl2LmlkID0gXCJjb3B5XCI7XHJcblx0ZGl2LnRleHRDb250ZW50ID0gXCJDb3BpZWQhXCI7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdGNvcHkgPSBkaXY7XHJcblxyXG5cdGFkZENvcHlIaW50RXZlbnRMaXN0ZW5lcigpO1xyXG5cdHJlbmRlckhlYWRlcigpO1xyXG5cdHJlbmRlckZvb3RlcigpO1xyXG5cdHJlbmRlckdhbGxlcnkoJ2dhbGxlcnknKTtcclxuXHRyZW5kZXJHYWxsZXJ5KCdhcmNoaXZhc0dhbGxlcnknKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDb3B5SGludEV2ZW50TGlzdGVuZXIoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFwibW91c2Vtb3ZlXCIsXHJcblx0XHQoZTogTW91c2VFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9KSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weVwiKS5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArIDIwICsgXCJweFwiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlcIikuc3R5bGUudG9wID0gZS5wYWdlWSArIDIwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbmNvZGVzLmZvckVhY2goKGNvZGU6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0Y29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGUudGFyZ2V0LmlubmVyVGV4dCkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNvcHkpO1xyXG5cdFx0XHRjb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYWxsZXJ5KG5hbWU6IHN0cmluZykge1xyXG5cdGNvbnN0IEdBTExFUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuXHRjb25zdCBBUkNISVZBU19HQUxMRVJZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcblx0bGV0IHRtcGwgPSAnJztcclxuXHJcblxyXG5cclxuXHRpZihHQUxMRVJZICYmIG5hbWUgPT0gXCJnYWxsZXJ5XCIpIHtcclxuXHRcdGxldCBzb3J0ZWRJbnNwaXJhdGlvbnMgPSBpbnNwaXJhdGlvbnMuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuXHRcdFx0Y29uc3QgTEVGVCA9IE51bWJlcihhLnNwbGl0KCcuJylbMF0pO1xyXG5cdFx0XHRjb25zdCBSSUdIVCA9ICBOdW1iZXIoYi5zcGxpdCgnLicpWzBdKTtcclxuXHRcclxuXHRcdFx0aWYoIExFRlQgPiBSSUdIVCApIHsgcmV0dXJuIDE7IH1cclxuXHRcclxuXHRcdFx0aWYgKCBMRUZUIDwgUklHSFQgKSB7IHJldHVybiAtMTsgfVxyXG5cdFxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGZpbGUgb2Ygc29ydGVkSW5zcGlyYXRpb25zKSB7XHJcblx0XHRcdHRtcGwgKz0gYFxyXG5cdFx0XHRcdDxmaWd1cmU+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9pbnNwaXJhdGlvbnMvJHtmaWxlfVwiPlxyXG5cdFx0XHRcdFx0PGZpZ2NhcHRpb24+JHtmaWxlfTwvZmlnY2FwdGlvbj5cclxuXHRcdFx0XHQ8L2ZpZ3VyZT5cclxuXHRcdFx0XHRgO1xyXG5cdFx0fVxyXG5cclxuXHRcdEdBTExFUlkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRtcGwpO1xyXG5cdH1cclxuXHJcblx0aWYoQVJDSElWQVNfR0FMTEVSWSAmJiBuYW1lID09PSBcImFyY2hpdmFzR2FsbGVyeVwiKSB7XHJcblx0XHRmb3IgKGxldCBmaWxlIG9mIGFyY2hpdmFzKSB7XHJcblx0XHRcdHRtcGwgKz0gYFxyXG5cdFx0XHRcdDxmaWd1cmU+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9hcmNoaXZhcy8ke2ZpbGV9XCI+XHJcblx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj4ke2ZpbGV9PC9maWdjYXB0aW9uPlxyXG5cdFx0XHRcdDwvZmlndXJlPlxyXG5cdFx0XHRcdGA7XHJcblx0XHR9XHJcblxyXG5cdFx0R0FMTEVSWS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wbCk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIEhFQURFUik7XHJcblx0YWRkQ2xpY2tPbklwTGlzdGVuZXIoKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBGT09URVIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGlja09uSXBMaXN0ZW5lcigpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmVySXAnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxFbGVtZW50IH0pID0+IHtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCAncGxheS5rcmRldmVsb3AucGwnKS50aGVuKCgpID0+IHtcclxuXHRcdFx0Y29weS5jbGFzc0xpc3QuYWRkKFwic2hvd1VwXCIpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Y29weS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1VwXCIpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9