// --- base.js ---
// Variables globales
let sonidoActivo = false;
let overlay = document.getElementById("overlay");
let dynamicContent = document.getElementById("dynamic-content");
let birthdayText = document.getElementById("birthday-text");
let initOverlay = document.getElementById("init-overlay");

// --- Mostrar botón inicial de sonido ---
window.addEventListener("load", () => {
    initOverlay.style.display = "flex";
});

// --- Activar sonido ---
function handleStartSound() {
    sonidoActivo = true;
    initOverlay.style.display = "none";
}

// --- Mostrar overlay con video o imagen ---
function mostrarOverlay(contenidoHTML, duracion = 60) {
    dynamicContent.innerHTML = contenidoHTML;
    dynamicContent.style.display = "flex";
    birthdayText.style.display = "none";
    overlay.style.display = "flex";

    // Ocultar overlay después del tiempo definido
    setTimeout(() => {
        overlay.style.display = "none";
        dynamicContent.innerHTML = "";
    }, duracion * 1000);
}

// --- Mostrar cumpleaños ---
function mostrarCumple(nombre, imagen, duracion = 15) {
    overlay.style.display = "flex";
    dynamicContent.style.display = "none";
    birthdayText.textContent = nombre;
    birthdayText.style.display = "block";

    // Fondo de cumpleaños
    dynamicContent.innerHTML = `<img src="${imagen}" class="birthday-background-image">`;

    setTimeout(() => {
        overlay.style.display = "none";
        birthdayText.style.display = "none";
        dynamicContent.innerHTML = "";
    }, duracion * 1000);
}

// --- Verificar pausas activas ---
function verificarPausas() {
    const ahora = new Date();
    const dia = ahora.toLocaleString("es-CO", { weekday: "long" }).toLowerCase();
    const horaActual = ahora.getHours() * 3600 + ahora.getMinutes() * 60 + ahora.getSeconds();

    if (typeof horarios !== "undefined" && horarios[dia]) {
        const hoy = horarios[dia];
        if (hoy.pausas_activas) {
            for (const pausa of hoy.pausas_activas) {
                const inicio = pausa.hora_inicio;
                const inicioSeg = inicio.hour * 3600 + inicio.minute * 60;
                const duracion = pausa.duracion || 60;

                if (horaActual >= inicioSeg && horaActual <= inicioSeg + duracion) {
                    let html = "";
                    if (pausa.tipo === "video") {
                        html = `<video src="${pausa.url}" autoplay ${sonidoActivo ? "muted=false" : "muted"}></video>`;
                    } else if (pausa.tipo === "imagen") {
                        html = `<img src="${pausa.url}" style="width:100%;height:100%;object-fit:contain;">`;
                    }
                    mostrarOverlay(html, duracion);
                    return;
                }
            }
        }
    }
}

// --- Verificar cumpleaños ---
function verificarCumple() {
    const hoy = new Date();
    const fecha = `${String(hoy.getDate()).padStart(2, "0")}/${String(hoy.getMonth() + 1).padStart(2, "0")}`;

    if (typeof cumpleaños !== "undefined" && cumpleaños[fecha]) {
        const persona = cumpleaños[fecha];
        mostrarCumple(persona.nombre, persona.imagen);
    }
}

// --- Ciclo de verificación ---
setInterval(() => {
    verificarCumple();
    verificarPausas();
}, 30000); // cada 30 segundos
