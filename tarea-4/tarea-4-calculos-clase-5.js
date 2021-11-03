//1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularPromedio(array) {
    let promedio = 0
    for (i = 0; i > array.length; i++) {
        promedio += array[i];
    }
    return "El promedio es: " + (promedio / array.length);
    //(...).tofixed(2) > muestra decimales segun (n). 100.01234 > 100.01
}


function calcularNumeroMasPequeno(array) {
    let numeroMasPequeno = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] < numeroMasPequeno) {
            numeroMasPequeno = array[i]
        }
    }
    return "El numero más pequeño es: " + numeroMasPequeno;
}


function calcularNumeroMasGrande(array) {
    let numeroMasGrande = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] > numeroMasGrande) {
            numeroMasGrande = array[i]
        }
    }
    return "El numero más grande es: " + numeroMasGrande;
}


//tomado de https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php

function calcularNumeroMasFrecuente(array) {
    let frecuencia = 1;
    let contador = 0
    let elemento;

    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {

            if (array[i] == array[j]) {
                contador++;
            }

            if (frecuencia < contador) {
                frecuencia = contador;
                elemento = array[i]
            }
        }
        contador = 0;
    }
return "El numero más frecuente es: " + elemento;
}

