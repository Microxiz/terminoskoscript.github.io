document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const toggleModeBtn = document.getElementById('toggle-mode');
    const acceptCheckbox = document.getElementById('accept-checkbox');
    const continueBtn = document.getElementById('continue-btn');
    const body = document.body;
    
    // Alternar modo oscuro/claro
    toggleModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = 'Modo Claro';
        } else {
            toggleModeBtn.textContent = 'Modo Oscuro';
        }
    });
    
    // Habilitar/deshabilitar botón Continuar
    acceptCheckbox.addEventListener('change', function() {
        continueBtn.disabled = !this.checked;
    });
    
    // Acción del botón Continuar
    continueBtn.addEventListener('click', function() {
        if (!this.disabled) {
            alert('¡Gracias por aceptar nuestros términos y condiciones!');
            // Aquí podrías redirigir al usuario a otra página
            // window.location.href = "siguiente-pagina.html";
        }
    });
});