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

eval("function displayMenu() {\n    const menuOptions = document.querySelectorAll('.menu-option');\n    menuOptions.forEach((menuOption) => {\n        const optionVar = menuOption;\n        optionVar.style.display = 'flex';\n        optionVar.style.justifyContent = 'center';\n        optionVar.style.alignItems = 'center';\n    }); \n}\n\nfunction hideMenu() {\n    const menuOptions = document.querySelectorAll('.menu-option');\n    menuOptions.forEach((menuOption) => {\n        const optionVar = menuOption;\n        optionVar.style.display = 'none';\n    });\n}\n\nfunction setMenuEvent() {\n    const body = document.querySelector('body');\n    const bodyArr = Array.from(body.childNodes);\n    for (let i = 0; i < bodyArr.length; i++) {\n        if (bodyArr[i].className === 'menu-container') {\n                bodyArr[i].addEventListener('mouseover', displayMenu);\n                bodyArr[i].addEventListener('mouseout', hideMenu);\n        }\n    }\n}\n\nsetMenuEvent();\n\n//# sourceURL=webpack://drop-down-menu/./src/index.js?");

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