const slider = document.querySelector('.slider');


// Función para desplazar las imágenes automáticamente
function autoSlide() {
  console.log("HOLA");
  const slideWidth = slider.offsetWidth;
  const scrollPosition = slider.scrollLeft;

  // Calcula la posición siguiente sumando el ancho de cada imagen
  const nextPosition = scrollPosition + slideWidth/10;

  // Desplaza al siguiente elemento con suavidad
  slider.scrollTo({ left: nextPosition, behavior: 'smooth' });

  // Reinicia el desplazamiento cuando se llega al final
  if (nextPosition >= slider.scrollWidth - slideWidth) {
    setTimeout(() => {
      slider.scrollTo({ left: 0, behavior: 'auto' });
    }, 3000); // Espera 3 segundos antes de reiniciar
  }
}

// Inicia el desplazamiento automático cada 5 segundos
setInterval(autoSlide, 5000);

