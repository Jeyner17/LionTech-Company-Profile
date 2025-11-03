/**
 * MÓDULO: FORMULARIO DE CONTACTO
 * Maneja la validación y habilitación del botón de envío
 */

'use strict';

/**
 * Inicializa el formulario de contacto
 */
export const initContactForm = function () {
    const form = document.querySelector('[data-form]');
    const formInputs = document.querySelectorAll('[data-form-input]');
    const formBtn = document.querySelector('[data-form-btn]');

    // Verificar que los elementos existan
    if (!form || formInputs.length === 0 || !formBtn) {
        console.warn('Contact Form: Elementos no encontrados');
        return;
    }

    /**
     * Valida el formulario y habilita/deshabilita el botón
     */
    const validateForm = function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    };

    // Agregar evento de validación a cada input
    formInputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    // Opcional: Manejar el envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        if (form.checkValidity()) {
            console.log('Formulario válido - listo para enviar');
            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo: enviar datos a un servidor via fetch/axios
            
            // Ejemplo de mensaje de éxito
            alert('¡Mensaje enviado con éxito!');
            form.reset();
            formBtn.setAttribute('disabled', '');
        }
    });

    console.log('✓ Formulario de contacto inicializado');
};