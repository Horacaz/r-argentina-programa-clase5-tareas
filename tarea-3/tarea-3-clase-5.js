//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*
const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeee!');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);
*/


//no es necesario hacer esto aca, mejor en las funciones, porque esto carga al inicio y no toma 
//ningun valor, solo en operaciones posteriores como en un evento onclick.

let $horasVideo = document.querySelector("#horas-video");
let $minutosVideo = document.querySelector("#minutos-video");
let $segundosVideo = document.querySelector("#segundos-video");
const $botonCalcularTiempoTotal = document.querySelector("#boton-calcular-tiempo-total");
const $botonReiniciarTiempoTotal = document.querySelector("#reiniciar-visualizacion");


let horasTotales = 0
let minutosTotales = 0
let segundosTotales = 0

let nodoResultadoTotal = document.querySelector("#total-tiempo-visualizacion");
let elementoStrongResultadoTotal = document.createElement("strong");
nodoResultadoTotal.appendChild(elementoStrongResultadoTotal);
let $strongTotalVisualizacion = document.querySelector("strong");

$botonCalcularTiempoTotal.onclick = function () {

    calcularTotalVisualizacion($horasVideo.value, $minutosVideo.value, $segundosVideo.value);

    $strongTotalVisualizacion.textContent = (` ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`);

    return false

}

$botonReiniciarTiempoTotal.onclick = function () {
    $strongTotalVisualizacion.textContent = "";

    horasTotales = 0
    minutosTotales = 0
    segundosTotales = 0

    return false
}

function calcularTotalVisualizacion(horas, minutos, segundos) {
    horasTotales += Number(horas);
    minutosTotales += Number(minutos);
    segundosTotales += Number(segundos);

    if (segundosTotales >= 60) {
        segundosTotales -= 60;
        minutosTotales += 1;
    }
    if (minutosTotales >= 60) {
        minutosTotales -= 60;
        horasTotales += 1;
    }
    return horasTotales, minutosTotales, segundosTotales;
}
