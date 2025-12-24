const form = document.getElementById("formContacto");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const telefono = document.getElementById("numerotelefonico").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (telefono === "" || telefono.length < 7) {
    alert("Por favor ingresa un número de teléfono válido");
    return;
  }

  if (mensaje === "") {
    alert("Por favor escribe un mensaje");
    return;
  }

  alert("Formulario enviado correctamente ✅");

  form.reset();
});
