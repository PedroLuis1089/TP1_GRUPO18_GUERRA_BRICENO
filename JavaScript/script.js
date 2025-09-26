/* funcion 'Cambiar color de fondo' Pedro L. */
let colorPrincipal = '#7890A8';
let colorActual = colorPrincipal;

function cambiarFondo(color) {
    if (colorActual !== color) {
        document.body.style.backgroundColor = color;
        colorActual = color;
    } else {
        document.body.style.backgroundColor = colorPrincipal;
        colorActual = colorPrincipal;
    }
}

/* funcion mostrar integrantes del grupo */
const integrantes = document.getElementById("integrantes-del-grupo");
const cards = document.querySelector(".group-cards");

integrantes.addEventListener("click", () => {
    const isHidden = window.getComputedStyle(cards).display === "none";

    if (isHidden) {
        cards.style.display = "flex";
    } else {
        cards.style.display = "none";
    }
});