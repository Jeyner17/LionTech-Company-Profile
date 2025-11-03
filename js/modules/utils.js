/**
 * UTILIDADES COMUNES
 * Funciones reutilizables en toda la aplicación
 */

'use strict';

/**
 * Alterna la clase "active" en un elemento
 * @param {HTMLElement} elem - Elemento al que agregar/quitar la clase
 */
export const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

/**
 * Agrega una clase a un elemento
 * @param {HTMLElement} elem - Elemento objetivo
 * @param {string} className - Clase a agregar
 */
export const addClass = function (elem, className) {
    elem.classList.add(className);
};

/**
 * Remueve una clase de un elemento
 * @param {HTMLElement} elem - Elemento objetivo
 * @param {string} className - Clase a remover
 */
export const removeClass = function (elem, className) {
    elem.classList.remove(className);
};

/**
 * Verifica si un elemento tiene una clase
 * @param {HTMLElement} elem - Elemento a verificar
 * @param {string} className - Clase a verificar
 * @returns {boolean}
 */
export const hasClass = function (elem, className) {
    return elem.classList.contains(className);
};