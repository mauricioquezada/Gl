document.getElementById('btnMensaje').addEventListener('click', function() {
alert('lo que pasa en galdys se queda en gladys');                            // Alerta desde la pagina 1
});

document.getElementById('btnAlerta').addEventListener('click', function() {
    if (confirm('¿Estás seguro de mostrar esta alerta en la Página 2?')) {   // Alerta desde la pagina 1
alert('lo que pasa en gladys se queda en gladys');
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("formulario");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "pgl.html";                   // la parte del formulario donde lo conecto 
        });


        function irAlInicio() {
            window.location.href = "Pgl.html"; // Redirigir al inicio desde la pagina 2
        }
        });       