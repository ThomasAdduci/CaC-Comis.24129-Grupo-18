document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
  
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', (event) => {
      let isValid = true;
  
      // Limpiar mensajes de error previos
      clearErrors();
  
      // Validaciones
      if (!validateFullName(fullName.value)) {
        fullNameError.textContent = 'El nombre completo debe tener al menos 3 caracteres.';
        isValid = false;
      }
  
      if (!validateEmail(email.value)) {
        emailError.textContent = 'El correo electrónico no es válido.';
        isValid = false;
      }
  
      if (!validatePassword(password.value)) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
      }
    });
  
    // Mostrar u ocultar contraseña
    showPassword.addEventListener('change', () => {
      if (showPassword.checked) {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    });
  
    // Funciones de validación
    function validateFullName(name) {
      return name.length >= 3;
    }
  
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    // Limpiar mensajes de error
    function clearErrors() {
      fullNameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
    }
  });
  