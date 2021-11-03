//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonIngresarNumeros = document.querySelector("#boton-ingresar-numeros");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonReiniciarListas = document.querySelector("#boton-reiniciar-listas");
let arrayNumeros = [];


$botonIngresarNumeros.onclick = function () {

    crearListadoNumeros(document.querySelector("#numero-usuario").value);

    arrayNumeros.push(Number(document.querySelector("#numero-usuario").value));

    return false;

}

function crearListadoNumeros(numeroUsuario) {
let nuevaLista = document.createElement("li");
nuevaLista.textContent = numeroUsuario;
document.querySelector("#lista-de-numeros").appendChild(nuevaLista);
  
}



$botonCalcular.onclick = function () {
    mostrarListas();
    mensajeCalculos("#numero-promedio", calcularPromedio(arrayNumeros));
    mensajeCalculos("#numero-mas-pequeño", calcularNumeroMasPequeno(arrayNumeros));
    mensajeCalculos("#numero-mas-grande", calcularNumeroMasGrande(arrayNumeros));
    mensajeCalculos("#numero-mas-frecuente", calcularNumeroMasFrecuente(arrayNumeros));

    return false;
}

function mostrarListas() {
    document.querySelector("#calculo-numeros").classList= "mostrar";
   

}

function mensajeCalculos(id, funcion){
document.querySelector(id).textContent = funcion

    
}

$botonReiniciarListas.onclick = function () {
   arrayNumeros = []

   let liCreados = document.querySelectorAll("li");
   for (i = 0; i < liCreados.length; i++){
       document.querySelector("li").remove()
   }

   document.querySelector("#calculo-numeros").classList= "oculto";

   return;
}
