/**
 * MÓDULO: SIDEBAR
 * Maneja la funcionalidad de abrir/cerrar el sidebar
 */

'use strict';

import { elementToggleFunc } from './utils.js';

/**
 * Inicializa la funcionalidad del sidebar
 */
export const initSidebar = function () {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // Verificar que los elementos existan
    if (!sidebar || !sidebarBtn) {
        console.warn('Sidebar: Elementos no encontrados');
        return;
    }

    // Agregar evento al botón del sidebar
    sidebarBtn.addEventListener("click", function () {
        elementToggleFunc(sidebar);
    });

    console.log('✓ Sidebar inicializado');
};