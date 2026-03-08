const botonMensaje = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", () => {
  mensaje.textContent =
    "Gracias por visitar mi portfolio. Aquí iré mostrando proyectos de e-learning, diseño instruccional y formación digital.";
});