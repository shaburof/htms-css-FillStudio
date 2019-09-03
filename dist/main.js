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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main/main.scss":
/*!********************************!*\
  !*** ./src/css/main/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/main/main.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main/main.scss */ \"./src/css/main/main.scss\");\n\n// querySelector short function\nfunction qs(selector) {\n  return document.querySelector(selector);\n}\n// select elements\nvar headerDesktopNav = qs(\".header__desktop-nav\");\nvar headerDesktopNavItems = qs(\".header__desktop-nav--items\");\nvar logoWhite = qs(\"#logo-white\");\nvar logoBlack = qs(\"#logo-black\");\n\nvar headeHamburgerButton = qs(\".header__hamburger\");\nvar mobileNav = qs(\".mobile-nav\");\n\nvar contattiLink = qs('.mobile-nav__item a[href=\"#contatti\"]');\n\n// another color for active link in desktop navigation bar\nhighlightActiveLink(\"big\");\n\n// listenet for scroll for show/hide diferent nav bars\ndocument.addEventListener(\"scroll\", function () {\n  var scrollPosition = window.scrollY;\n  if (scrollPosition >= 100) showSmallNav();else if (scrollPosition <= 0) showBigNav();\n});\n\n// toggle mobile navigation bar\nvar mobileNovigationBarShow = false;\nheadeHamburgerButton.addEventListener(\"click\", function () {\n  if (!mobileNovigationBarShow) {\n    setTimeout(function () {\n      return mobileNav.style.transform = \"translateX(0)\";\n    }, 0);\n  } else {\n    mobileNav.style.transform = \"translateX(100%)\";\n  }\n  mobileNovigationBarShow = !mobileNovigationBarShow;\n});\n\n// listener on resize width ow window, in <767px - disable mobile navigation bar\nwindow.addEventListener(\"resize\", function () {\n  var windowWidth = window.innerWidth;\n  if (windowWidth >= 767) {\n    mobileNav.style.transform = \"translateX(100%)\";\n    mobileNovigationBarShow = false;\n  }\n});\n\n// add event click on contatti link\ncontattiLink.addEventListener(\"click\", function (event) {\n  mobileNav.style.transform = \"translateX(100%)\";\n  mobileNovigationBarShow = !mobileNovigationBarShow;\n});\n\n// show small nav bar\nfunction showSmallNav() {\n  headerDesktopNavItems.style.fontSize = \"1.2em\";\n  headerDesktopNavItems.style.marginRight = \"2.8rem\";\n  headerDesktopNavItems.style.color = \"black\";\n  headerDesktopNav.style.alignItems = \"center\";\n  headerDesktopNav.style.height = \"78px\";\n  headerDesktopNav.style.borderBottom = \"solid 1px rgb(224,224,224)\";\n  setTimeout(function () {\n    headerDesktopNav.style.background = \"white\";\n  }, 0);\n\n  logoWhite.style.transform = \"translateY(-80px)\";\n  logoBlack.style.transform = \"translateY(0)\";\n  logoBlack.style.opacity = \"1\";\n\n  highlightActiveLink(\"small\");\n}\n\n//show big nav bar\nfunction showBigNav() {\n  headerDesktopNav.style.background = \"\";\n  headerDesktopNav.style.alignItems = \"space-between\";\n  headerDesktopNav.style.height = \"130px\";\n\n  headerDesktopNavItems.style.fontSize = \"1.35em\";\n  headerDesktopNavItems.style.marginRight = \"3.8rem\";\n  headerDesktopNavItems.style.color = \"white\";\n  headerDesktopNav.style.borderBottom = \"none\";\n\n  logoBlack.style.transform = \"translateY(80px)\";\n  logoBlack.style.opacity = \"0\";\n  logoWhite.style.transform = \"translateY(0)\";\n\n  highlightActiveLink(\"big\");\n}\n\nfunction highlightActiveLink(navType) {\n  var navActiveLink = qs(\".header__desktop-nav--item--active\");\n  if (navActiveLink) {\n    navActiveLink.style.transition = \"color 1s\";\n    if (navType === \"big\") navActiveLink.style.color = \"#e88c8c\";else if (navType === \"small\") navActiveLink.style.color = \"gray\";\n  }\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });