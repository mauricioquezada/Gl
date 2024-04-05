document.getElementById('btnMensaje').addEventListener('click', function() {
    alert('lo que pasa en galdys se queda en gladys');
});

document.getElementById('btnAlerta').addEventListener('click', function() {
    if (confirm('¿Estás seguro de mostrar esta alerta en la Página 2?')) { 
alert('lo que pasa en gladys se queda en gladys');
    }
});
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("formulario");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "pgl.html";

        });
        });