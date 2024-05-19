
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.navbar ul');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
});

const datosOriginales = [
    {
      imgSrc: "./img/compa0.jpg",
      nombre: "Franco Luca Parera",
      contenido: "Lider de proyecto, Desarrollador Web, Frontend Dev.",
    },
    {
      imgSrc: "./img/compa2.jpg",
      nombre: "Gisela Emilce Serapio",
      contenido: "Desarrolladora Creativa, ..., ....",
    },
    {
      imgSrc: "./img/compa3.jpeg",
      nombre: "Noelia Deborah Lopez",
      contenido: "Mediadora, ...., ....",
    },
    {
      imgSrc: "./img/compa1.jpg",
      nombre: "Thomas Ezequiel Adduci",
      contenido: "Impulsor del proyecto, Desarrollador, CTO",
    },
  ];
  
  // Función para cambiar el contenido de las tarjetas
  function cambiarContenido() {
    const button = document.getElementById("toggleButton");
    const cambiosRealizados = button.getAttribute("data-cambios-realizados");
  
    if (cambiosRealizados === "true") {
      // Restaurar datos originales
      restaurarDatosOriginales();
      
      button.setAttribute("data-cambios-realizados", "false");
      button.textContent = "Mecánicos";
       // Restaurar título y subtítulo originales
       document.getElementById("titulo").textContent = "Equipo de Desarrollo";
       document.getElementById("subtitulo").textContent = "Conoce a nuestro equipo de desarrolladores";
    } else {
      // Definir nuevos datos para las tarjetas
      const nuevosDatos = [
        {
          imgSrc: "../img/mecanicos/mecanico1.jpg",
          nombre: "Jhon Berry",
          contenido: "Mantenimiento preventivo, Reparaciones Mecanicas, Servicios de Alineacion",
        },
        {
          imgSrc: "../img/mecanicos/mecanica3.jpeg",
          nombre: "Mariana Soler",
          contenido: "Tecnica Electronica Automotiz, de inyeccion, y GNC.",
        },
        {
          imgSrc: "../img/mecanicos/mecanico2.jpg",
          nombre: "Fernando Espinoza",
          contenido: "Sistema Reparado Inyección, Equipo de refrigeración, Alternadores y Sistema de Audio.",
        },
        {
          imgSrc: "../img/mecanicos/mecanico4.jpg",
          nombre: "Hector Suriano",
          contenido: "Mecanica General, Sistema Electronicos, Encendidos Electronicos. ",
        },
      ];
  
      // Obtener todas las tarjetas
      const cards = document.querySelectorAll(".card");
  
      // Iterar sobre cada tarjeta y cambiar su contenido
      cards.forEach((card, index) => {
        const nuevoDato = nuevosDatos[index];
        const overlayText = card.querySelector(".overlay-text");
  
        overlayText.innerHTML = `
          <span>${nuevoDato.nombre}</span><br>
          ${nuevoDato.contenido}
        `;
        card.querySelector("img").src = nuevoDato.imgSrc;
      });
  
      button.setAttribute("data-cambios-realizados", "true");
      button.textContent = "Codo a Codo";
      document.getElementById("titulo").textContent = "Nuestro Equipo de Mecánicos";
      document.getElementById("subtitulo").textContent = "Conoce a nuestro equipo de mecánicos expertos";
    }
  }
  
  // Función para restaurar los datos originales de las tarjetas
  function restaurarDatosOriginales() {
    // Obtener todas las tarjetas
    const cards = document.querySelectorAll(".card");
  
    // Iterar sobre cada tarjeta y restaurar sus datos originales
    cards.forEach((card, index) => {
      const datoOriginal = datosOriginales[index];
      const overlayText = card.querySelector(".overlay-text");
  
      overlayText.innerHTML = `
        <span>${datoOriginal.nombre}</span><br>
        ${datoOriginal.contenido}
      `;
      card.querySelector("img").src = datoOriginal.imgSrc;
    });
  }


  //scroll
  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".scroll-link");
    
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.offsetTop;
        
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  

  //navegar en otra pagina

  document.addEventListener("DOMContentLoaded", function() {
    const loginIcon = document.getElementById("loginIcon");
  
    loginIcon.addEventListener("click", function(event) {
      event.preventDefault(); // Para prevenir el comportamiento predeterminado del enlace
      window.location.href = "../views/login.html"; // Reemplaza "tu_pagina_destino.html" con la URL de la página a la que deseas redirigir
    });
  });

  // Slide bar con las marcas de autos
  const imagesContainer = document.querySelector('.images-container');

  const images = imagesContainer.querySelectorAll('.images-car-brands-sizes');
  images.forEach(img => {
    const clone = img.cloneNode(true);
    imagesContainer.appendChild(clone);
  });
  

  //flecha hacia arriba
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollUpBtn = document.getElementById("ArrowUpBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}


function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


//Carrousel
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);



//PWA

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.log('Fallo en el registro del Service Worker:', error);
      });
  });
}
