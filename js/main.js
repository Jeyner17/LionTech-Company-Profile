/**
 * PERSONAL PORTFOLIO - MAIN JS
 * Archivo principal que inicializa todos los módulos
 */

'use strict';

// Importar módulos
import { initSidebar } from './modules/sidebar.js';
import { initTestimonialsModal } from './modules/modal.js';
import { initPortfolioFilter } from './modules/filter.js';
import { initContactForm } from './modules/form.js';
import { initPageNavigation } from './modules/navigation.js';

/**
 * Inicializa la aplicación cuando el DOM esté listo
 */
const initApp = function () {
    console.log('🚀 Inicializando Portfolio...');

    // Inicializar módulos
    initSidebar();
    initTestimonialsModal();
    initPortfolioFilter();
    initContactForm();
    initPageNavigation();

    console.log('✅ Portfolio inicializado correctamente');
};

// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Opcional: Exportar función de inicialización
export default initApp;