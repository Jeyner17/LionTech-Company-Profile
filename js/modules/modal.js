/**
 * MÓDULO: MODAL DE TESTIMONIOS
 * Maneja la funcionalidad del modal de testimonios
 */

'use strict';

/**
 * Inicializa el modal de testimonios
 */
export const initTestimonialsModal = function () {
    const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
    const modalContainer = document.querySelector('[data-modal-container]');
    const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
    const overlay = document.querySelector('[data-overlay]');

    const modalImg = document.querySelector('[data-modal-img]');
    const modalTitle = document.querySelector('[data-modal-title]');
    const modalText = document.querySelector('[data-modal-text]');

    // Verificar que los elementos existan
    if (!modalContainer || !modalCloseBtn || !overlay) {
        console.warn('Modal: Elementos no encontrados');
        return;
    }

    /**
     * Alterna la visibilidad del modal
     */
    const toggleModal = function () {
        modalContainer.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    /**
     * Abre el modal con información del testimonio
     * @param {HTMLElement} item - Elemento del testimonio clickeado
     */
    const openModal = function (item) {
        const avatar = item.querySelector('[data-testimonials-avatar]');
        const title = item.querySelector('[data-testimonials-title]');
        const text = item.querySelector('[data-testimonials-text]');

        if (avatar && title && text) {
            modalImg.src = avatar.src;
            modalImg.alt = avatar.alt;
            modalTitle.innerHTML = title.innerHTML;
            modalText.innerHTML = text.innerHTML;

            toggleModal();
        }
    };

    // Agregar eventos a cada testimonio
    testimonialsItem.forEach(item => {
        item.addEventListener('click', function () {
            openModal(this);
        });
    });

    // Agregar eventos para cerrar el modal
    modalCloseBtn.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);

    console.log('✓ Modal de testimonios inicializado');
};