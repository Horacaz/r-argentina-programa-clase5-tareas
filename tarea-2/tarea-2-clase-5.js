//TAREA 2: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */


const $botonIngresoDatosUsuario = document.querySelector("#boton-ingreso-datos-usuario");


$botonIngresoDatosUsuario.onclick = function(){
  const $primerNombreUsuario  = document.querySelector("#primer-nombre-usuario").value;
  const $segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
  const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
  const $edadUsuario = document.querySelector("#edad-usuario").value;

  const $mostrarInformacionUsuario = document.querySelector("#mostrar-informacion-usuario");
  $mostrarInformacionUsuario.textContent = (`${$primerNombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario}. ${$edadUsuario} años.`) 

  const $tituloBienvenida = document.querySelector("#bienvenido");
  $tituloBienvenida.textContent = (`Hola ${$primerNombreUsuario}, te doy la bienvenida!`);
  
  return false
}


  /*
  for (i = 0; i < informacionIngresadaPorElUsuario.length; i++){
    $mostrarInformacionUsuario.textContent += (`${informacionIngresadaPorElUsuario[i].value} `);
  }
  */
