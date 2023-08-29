/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function displayMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'dropdown-option') {\n            thisMenuArr[i].style.display = 'flex';\n            thisMenuArr[i].style.justifyContent = 'center';\n            thisMenuArr[i].style.alignItems = 'center';\n        }\n    }\n}\n\nfunction hideMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'dropdown-option') {\n            thisMenuArr[i].style.display = 'none';\n        }\n    }\n}\n\nfunction setMenuEvent() {\n    const body = document.querySelector('body');\n    const bodyArr = Array.from(body.childNodes);\n    for (let i = 0; i < bodyArr.length; i++) {\n        if (bodyArr[i].className === 'dropdown-menu') {\n            bodyArr[i].addEventListener('mouseover', displayMenu);\n            bodyArr[i].addEventListener('mouseout', hideMenu);\n        }\n    }\n}\n\nsetMenuEvent();\n\n//# sourceURL=webpack://drop-down-menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;