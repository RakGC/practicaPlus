const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errores = [];

  const nombre = document.querySelector("#nombre").value.trim();
  const apellidos = document.querySelector("#apellidos").value.trim();
  const email = document.querySelector("#email").value.trim();
  const pass = document.querySelector("#password").value;

  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  if (apellidos.length < 3) {
    errores.push("Los apellidos deben tener al menos 3 caracteres.");
  }

  const posicionArroba = email.indexOf("@");
  const posicionPunto = email.lastIndexOf(".");

  if (
    posicionArroba === -1 ||
    posicionPunto === -1 ||
    posicionPunto < posicionArroba
  ) {
    errores.push("El email no es válido.");
  }

  if (pass1.length < 6) {
    errores.push("La contraseña debe tener al menos 8 caracteres.");
  }

  if (errores.length > 0) {
    mensajes.innerHTML = errores.join("<br>");
    mensajes.className = "mensajes err";
    return;
  }

  mensajes.textContent = "Formulario enviado correctamente.";
  mensajes.className = "mensajes ok";
  form.submit();
});
