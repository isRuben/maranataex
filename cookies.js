// Script para manejar el banner de cookies
document.addEventListener("DOMContentLoaded", function() {
    if (!getCookie("aceptarCookies")) {
        // Si la cookie 'aceptarCookies' no está presente, muestra el banner
        document.getElementById("cookieBanner").style.display = "block";
    }
});

function aceptarCookies() {
    // Establecer la cookie 'aceptarCookies' con una duración de 30 días
    setCookie("aceptarCookies", "true", 30);
    // Ocultar el banner de cookies
    document.getElementById("cookieBanner").style.display = "none";
}

function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreEQ) == 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}
