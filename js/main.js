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

/**
 * Espera a que los componentes HTML se carguen antes de inicializar
 */
const waitForComponents = function() {
    // Verificar si los componentes ya se cargaron
    const checkInterval = setInterval(() => {
        const sidebar = document.querySelector('[data-sidebar]');
        const navigation = document.querySelector('[data-nav-link]');
        
        if (sidebar && navigation) {
            clearInterval(checkInterval);
            initApp();
        }
    }, 100);

    // Timeout de seguridad (10 segundos)
    setTimeout(() => {
        clearInterval(checkInterval);
        console.warn('Timeout esperando componentes. Inicializando de todos modos...');
        initApp();
    }, 10000);
};

// Esperar a que el DOM y los componentes estén listos
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForComponents);
} else {
    waitForComponents();
}

// Opcional: Exportar función de inicialización
export default initApp;