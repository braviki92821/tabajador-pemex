/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/busqueda.js":
/*!****************************!*\
  !*** ./src/js/busqueda.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\r\n    const busquedaTrabajador = document.getElementById('termino')\r\n    const botonBusqueda = document.getElementById('buscar')\r\n    const botonEliminar = document.querySelectorAll('.btn-eliminar')\r\n    const formulario = document.querySelector('.formulario')\r\n    const btnActivarModal = document.querySelector('.modal-click')\r\n    \r\n    botonBusqueda?.addEventListener('click', e => {\r\n        const a = document.createElement('a')\r\n\r\n        let ficha = busquedaTrabajador?.value\r\n\r\n       if(ficha == ''){\r\n        return alert('Debe ingresar una ficha para la busqueda')\r\n       }\r\n\r\n       if(ficha.length  < 6){\r\n        return alert('La ficha debe contener 6 digitos')\r\n       }\r\n\r\n       a.href=`/admin/lista-empleados?mostrar=${ficha}`\r\n       a.click()\r\n    })\r\n\r\n\r\n    botonEliminar?.forEach(boton => {\r\n        boton.addEventListener('click', e => {\r\n            const { empleadoFicha } = e.target.dataset\r\n            console.log(empleadoFicha)\r\n            formulario.action = `/admin/eliminar-trabajador/${empleadoFicha}`\r\n            btnActivarModal.click()\r\n        })\r\n    })\r\n\r\n})()\n\n//# sourceURL=webpack://pemex-nodejs/./src/js/busqueda.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/busqueda.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;