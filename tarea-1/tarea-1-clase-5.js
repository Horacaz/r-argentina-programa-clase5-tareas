/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. 
https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA 1: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA 1: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>



const $botonCalcularSalarioMensual = document.querySelector("#boton-calcular-salario-mensual");
let $salarioAnualUsuario = document.querySelector("#salario-anual-usuario");
let $salarioMensual = document.querySelector("#salario-mensual");

function calcularSalarioMensual(salarioAnualUsuario) {

  $salarioMensual.value = salarioAnualUsuario / 12;

  return $salarioMensual.value;
}


$botonCalcularSalarioMensual.onclick = function () {
  calcularSalarioMensual($salarioAnualUsuario.value);

  return false
}

