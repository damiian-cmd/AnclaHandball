document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-container form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los datos cargados en los campos
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const posicion = document.getElementById("posicion").value;
    const telefono = document.getElementById("telefono").value.trim();

    // Validación rápida de teléfono
    if (telefono.length < 8) {
      alert("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    // Número de WhatsApp del club (reemplaza con el número real, ej: 5491112345678)
    const numeroClub = "5491100000000";

    // Formatear el mensaje
    const mensaje = `Hola! Me quiero sumar a Ancla Handball 🤾‍♂️%0A` +
                    `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                    `*Edad:* ${encodeURIComponent(edad)} años%0A` +
                    `*Posición:* ${encodeURIComponent(posicion)}%0A` +
                    `*Teléfono:* ${encodeURIComponent(telefono)}`;

    // Redirigir a WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroClub}?text=${mensaje}`;
    window.open(urlWhatsapp, "_blank");

    // Limpiar el formulario
    form.reset();
  });
});