document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("El formulario se envió correctamente");

    // Obtener el valor del nombre de usuario del campo de entrada
    var username = document.getElementById("username").value;

    // Actualizar el texto del elemento con ID "username"
    document.getElementById("username").textContent = username;
     // Almacenar el nombre de usuario en localStorage
     localStorage.setItem("username", username);

    // Redireccionar a la página "taller.html"
    window.location.href = "taller.html";
});
