document.getElementById('btnMensaje').addEventListener('click', function() {
    alert('Este es un mensaje desde JavaScript en la Página 1.');
});

document.getElementById('btnAlerta').addEventListener('click', function() {
    if (confirm('¿Estás seguro de mostrar esta alerta en la Página 2?')) {
        alert('Alerta confirmada desde JavaScript en la Página 2.');
    }
});