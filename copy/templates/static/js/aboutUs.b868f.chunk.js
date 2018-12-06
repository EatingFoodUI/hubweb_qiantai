webpackJsonp([7],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/static/img/logo.png";

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_less__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__footer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_img_logo_png__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_img_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_img_logo_png__);
/**
  *
  */




class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [{ name: '帮助', link: '' }, { name: '招聘', link: '' }, { name: '加入我们', link: '' }, { name: '关于我们', link: '' }, { name: '友情链接', link: '' }, { name: '法律申明', link: '' }, { name: '代理合作', link: '' }, { name: '服务条款', link: '' }, { name: '友情链接', link: '' }, { name: '友情链接', link: '' }, { name: '友情链接', link: '' }]
    };
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'links' },
          this.state.links.map((item, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { key: i, className: 'link' },
            item.name
          ))
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        '@copyright cqupthub\u7248\u6743\u6240\u6709 \u6E1DICP\u53F7\uFF1A123456789'
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(86)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./footer.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./footer.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(85)(false);
// imports


// module
exports.push([module.i, ".footer {\n  width: 100%;\n  height: 250px;\n  padding: 20px 0;\n  background-color: #333333;\n  color: #8b8b8b;\n  text-align: center;\n}\n.footer .wrapper {\n  width: 800px;\n  height: 160px;\n  margin: 0 auto;\n  display: flex;\n}\n.footer .wrapper .logo {\n  flex: 1;\n}\n.footer .wrapper .logo img {\n  margin-top: 80px;\n  transform: translate(0, -50%);\n  width: 100px;\n  vertical-align: middle;\n}\n.footer .wrapper .links {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.footer .wrapper .links .link {\n  width: 120px;\n  height: 40px;\n  line-height: 40px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.footer .wrapper .links .link:hover {\n  color: #409b76;\n}\n.footer h3 {\n  padding: 10px;\n  color: #8b8b8b;\n}\n", ""]);

// exports


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__title_less__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__title_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__title_less__);



class Title extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: props.fontSize
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'title' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: { fontSize: this.props.fontSize },
          className: 'title-text' },
        this.props.content
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(86)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./title.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/less-loader/dist/cjs.js!./title.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(85)(false);
// imports


// module
exports.push([module.i, ".title .title-text {\n  position: relative;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 600;\n}\n.title .title-text:before,\n.title .title-text:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  width: 38%;\n  height: 1px;\n  background: grey;\n}\n.title .title-text:before {\n  left: 0;\n}\n.title .title-text:after {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_less__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__contact_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_title_title_jsx__ = __webpack_require__(337);




const contactWays = [{
  icon: __webpack_require__(409),
  detail: '8141234567@163.com',
  name: 'email'
}, {
  icon: __webpack_require__(410),
  detail: '07:00AM-22:00PM',
  name: 'time'
}, {
  icon: __webpack_require__(411),
  detail: '13677890987',
  name: 'tel'
}, {
  icon: __webpack_require__(412),
  detail: 'http://cqupthub.com',
  name: 'website'
}];

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'contact' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'contact-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__common_title_title_jsx__["a" /* default */], {
          content: '\u8054\u7CFB\u6211\u4EEC'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'contact-body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'contact-bd-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'contact-bd-left-address' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              null,
              'CQUPTHub'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              '\u91CD\u5E86\u5E02\u5357\u5CB8\u533A\u5D07\u6587\u8DEF2\u53F7\u91CD\u5E86\u90AE\u7535\u5927\u5B66\u6570\u5B57\u56FE\u4E66\u9986T2301, T2303'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'contact-bd-left-contactways' },
            contactWays.map((val, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: i, className: 'contact-bd-left-cw-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'contact-bd-left-cw-item-icon' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: val.icon, alt: '' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'contact-bd-left-cw-item-detail' },
                val.detail
              )
            ))
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'contact-bd-mid' })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(86)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./contact.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./contact.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(85)(false);
// imports


// module
exports.push([module.i, ".contact {\n  width: 1000px;\n  margin: 40px auto;\n}\n.contact .contact-header {\n  text-align: center;\n}\n.contact .contact-body {\n  display: flex;\n  padding: 50px 60px;\n}\n.contact .contact-body .contact-bd-left {\n  flex: 1;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-address {\n  margin-bottom: 60px;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-address h1 {\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-address p {\n  font-size: 17px;\n  color: rgba(0, 0, 0, 0.527);\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-contactways {\n  display: block;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-contactways .contact-bd-left-cw-item {\n  display: flex;\n  margin: 10px 0;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-contactways .contact-bd-left-cw-item .contact-bd-left-cw-item-icon {\n  display: inline-block;\n  width: 30px;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-contactways .contact-bd-left-cw-item .contact-bd-left-cw-item-icon img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.contact .contact-body .contact-bd-left .contact-bd-left-contactways .contact-bd-left-cw-item .contact-bd-left-cw-item-detail {\n  display: inline-block;\n  padding: 4px 0 0 10px;\n  font-size: 17px;\n}\n.contact .contact-body .contact-bd-mid {\n  flex: 0 0 12%;\n}\n.contact .contact-body .contact-bd-right {\n  flex: 1;\n  text-align: right;\n}\n.contact .contact-body .contact-bd-right img {\n  width: 370px;\n}\n", ""]);

// exports


/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/static/img/shijian.png";

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/static/img/weibiaoti.png";

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/static/img/wangzhan.png";

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feedback_less__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feedback_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__feedback_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_title_title_jsx__ = __webpack_require__(337);




class Feedback extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'feedback' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'feedback-head' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'feedback-hd-title' },
          'HAVE ANY QUESTION?'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__common_title_title_jsx__["a" /* default */], {
          content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'feedback-hd-subtitle' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '\u975E\u5E38\u611F\u8C22\u60A8\u5BF9\u6211\u4EEC\u5B9E\u9A8C\u5BA4\u5173\u6CE8,'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '\u5982\u679C\u60A8\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u7ED9\u6211\u4EEC\u7559\u8A00\u5427!'
            )
          )
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'feedback-body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'feedback-bd-inputs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'feedback-bd-input-name', placeholder: '\u4F60\u7684\u540D\u5B57' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'feedback-bd-input-email', placeholder: '\u4F60\u7684\u90AE\u7BB1' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'feedback-bd-textarea' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'feedback-bd-textarea-fdb', id: '', cols: '30', rows: '10', placeholder: '\u4F60\u7684\u610F\u89C1\u548C\u5EFA\u8BAE' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'feedback-bd-submit' },
          '\u63D0\u4EA4\u4FE1\u606F'
        )
      )
    );
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Feedback);

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(86)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./feedback.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./feedback.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(85)(false);
// imports


// module
exports.push([module.i, ".feedback {\n  width: 1000px;\n  margin: 40px auto;\n}\n.feedback .feedback-head {\n  position: relative;\n  text-align: center;\n}\n.feedback .feedback-head .feedback-hd-title {\n  padding-top: 4px;\n  margin: 20px auto;\n  width: 220px;\n  font-size: 20px;\n  background-color: rgba(252, 252, 7, 0.582);\n}\n.feedback .feedback-head .feedback-hd-subtitle {\n  font-size: 1px;\n}\n.feedback .feedback-body .feedback-bd-inputs {\n  display: flex;\n  height: 40px;\n  margin: 20px 0;\n}\n.feedback .feedback-body .feedback-bd-inputs .feedback-bd-input-name {\n  flex: 1;\n  margin-right: 24px;\n  background: #fff;\n  outline: none;\n  padding-left: 10px;\n}\n.feedback .feedback-body .feedback-bd-inputs .feedback-bd-input-email {\n  flex: 1;\n  background: #fff;\n  outline: none;\n  padding-left: 10px;\n}\n.feedback .feedback-body .feedback-bd-textarea .feedback-bd-textarea-fdb {\n  outline: none;\n  background: #fff;\n  width: 100%;\n  padding-left: 10px;\n  padding-top: 15px;\n}\n.feedback .feedback-body .feedback-bd-submit {\n  width: 180px;\n  margin: 0 auto;\n  text-align: center;\n  background-color: rgba(0, 128, 0, 0.74);\n  color: #fff;\n  font-size: 22px;\n  padding: 3px 0;\n  margin-top: 20px;\n  font-weight: 500;\n}\n", ""]);

// exports


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_contact_jsx__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_feedback_feedback_jsx__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_footer_footer_jsx__ = __webpack_require__(249);
/**
  *
  */




class About extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'about' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_contact_contact_jsx__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__common_footer_footer_jsx__["a" /* default */], null)
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = About;


/***/ })

});