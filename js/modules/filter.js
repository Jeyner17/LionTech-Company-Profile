/**
 * MÓDULO: FILTROS DE PORTFOLIO
 * Maneja el sistema de filtrado de proyectos
 */

'use strict';

import { elementToggleFunc } from './utils.js';

/**
 * Inicializa el sistema de filtros
 */
export const initPortfolioFilter = function () {
    const select = document.querySelector('[data-select]');
    const selectItems = document.querySelectorAll('[data-select-item]');
    const selectValue = document.querySelector('[data-select-value]');
    const filterBtn = document.querySelectorAll('[data-filter-btn]');
    const filterItems = document.querySelectorAll('[data-filter-item]');

    // Verificar que los elementos existan
    if (!select || selectItems.length === 0 || !selectValue) {
        console.warn('Portfolio Filter: Elementos no encontrados');
        return;
    }

    /**
     * Filtra los elementos según la categoría seleccionada
     * @param {string} selectedValue - Categoría seleccionada
     */
    const filterFunc = function (selectedValue) {
        filterItems.forEach(item => {
            if (selectedValue === "all") {
                item.classList.add('active');
            } else if (selectedValue === item.dataset.category) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    // Select dropdown para móvil
    select.addEventListener('click', function () {
        elementToggleFunc(this);
    });

    // Items del select
    selectItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });

    // Botones de filtro para desktop
    if (filterBtn.length > 0) {
        let lastClickedBtn = filterBtn[0];

        filterBtn.forEach(btn => {
            btn.addEventListener('click', function () {
                const selectedValue = this.innerText.toLowerCase();
                selectValue.innerText = this.innerText;
                filterFunc(selectedValue);

                lastClickedBtn.classList.remove('active');
                this.classList.add('active');
                lastClickedBtn = this;
            });
        });
    }

    console.log('✓ Filtros de portfolio inicializados');
};