const fila = document.querySelector('.contenedor-corousel');
const peliculas = document.querySelectorAll('.peliculas');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


// event listener para flecha derecha
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// event listener para flecha izquierda
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});



// paginación
const numeroPaginas = Math.ceil(peliculas.length / 5);