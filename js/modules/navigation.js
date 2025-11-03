/**
 * MÓDULO: NAVEGACIÓN DE PÁGINAS
 * Maneja la navegación SPA (Single Page Application)
 */

'use strict';

/**
 * Inicializa la navegación entre páginas
 */
export const initPageNavigation = function () {
    const navigationLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');

    // Verificar que los elementos existan
    if (navigationLinks.length === 0 || pages.length === 0) {
        console.warn('Page Navigation: Elementos no encontrados');
        return;
    }

    /**
     * Navega a una página específica
     * @param {string} pageName - Nombre de la página a mostrar
     */
    const navigateToPage = function (pageName) {
        pages.forEach((page, index) => {
            if (pageName === page.dataset.page) {
                page.classList.add('active');
                navigationLinks[index].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                page.classList.remove('active');
                navigationLinks[index].classList.remove('active');
            }
        });
    };

    // Agregar eventos a los enlaces de navegación
    navigationLinks.forEach((link, index) => {
        link.addEventListener('click', function () {
            const pageName = this.innerHTML.toLowerCase();
            navigateToPage(pageName);
            
            // Opcional: Actualizar URL sin recargar la página
            // history.pushState(null, '', `#${pageName}`);
        });
    });

    // Opcional: Manejar navegación con botones del navegador
    /*
    window.addEventListener('popstate', function () {
        const hash = window.location.hash.substring(1) || 'about';
        navigateToPage(hash);
    });
    */

    console.log('✓ Navegación de páginas inicializada');
};