/*Acceder a los atributos */
resultado.style.color = 'red';
resultado.style.backgroundColor = 'grey';

const parrafo = document.createElement('p');

parrafo.textContent = `Lorem ipsum ${2 + 2}`;

parrafo.setAttribute('id', 'otro-parrafo');
