/*@author:Erick14911
 * Tipo de Variable: ([ var, let, const ], [symbol(); .valueOf();]) typeof, instanceof
 * Cambio de Variable: string(); parseInt(); parseFloat(); Number(); BigInt() 
 * Cambio de String: .toString(); .toUpperCase(); .toLowerCase(); .length;
 * Concatena: .concat(); 
 * Busquedas: .charAt(); .indexOf(""); .lastIndexOf(""); .match(/word/g); .includes("");
 * Remplazo: .substr(start, end); .slice(start, end); .replace("",""); 
 * Cortar: .trim(); .splice(indice, numElementos);
 * No es un numero: isNaN();  DECIMALES: numero.toFixed();
 * Plantilla: = `Texto con ${ }`;
 *
 * Agregar Elemento a Array: (.push(); .unshift()) (.pop(); shift();) { = [...object, value]; }
 * Ordenamientos: .sort((a, b) =>{ return a - b }); //.reverse();
 *
 * Hacer Array:  .split(" "); .trim();
 * Hacer String: .join()
 *
 * Rest y Spread son arreglos de n elementos, se indican con: ...name
 *
 * Funcion anonima es una funcion que puede pasarse como parametro o igualarse a una variable: 
 * function(){ arguments.length } | const fun = () => {} | function.toString();
 * ObjJson: let object = { key1: '', key2: '' } delete object.key1;  
 *
 * Eventos: .addEventListener('event', function, boolean(bubbling, capturing)); 
 * .click .dblclick  .keydown  .keypress  .keyup.key  .keycode  .change   
 * .focus .blur .hover .mouseover .mouseout .mousedown .mouseup .mousemove
 *
 * Efectos:
 * .show('fast'); .hide('scale'); .effect("explode");
 * .fadeOut('slow'); .fadeIn('normal'); .fadeTo('blind',1.0); .fadeToggle(shake);
 * .slideUp('drop'); .slideOut('fold'); .slideToggle('puff');  
 *
 * MATH OBJECT ${}:
 * Math.sqrt(); Math.max(); Math.min(); Math.random(); Math.round(); Math.ceil();
 *
 * UI jQuery: https://www.heteroclito.fr/modules/tooltipster/ 
 * .draggable(); .resizable(); .selectable(); .tooltip(); 
 * .datepicker(); .dialog(); .tabs();
 * .sorteable({update: function(event, ui){}});
 * .droppable({drop: function(){}});
 */
//import { alias } from "./" // export { alias: function, }

'use strict';

window.addEventListener('load', () => {

  const ip = "localhost";
  const _array = [];
  let jsonObject = {};
  Object.seal(jsonObject); // Object.freeze(jsonObject);

  //modeDark 
  const btnSwitch = document.querySelector('#switch'); 
  btnSwitch.addEventListener('click', (event) => {
    // event.preventDefault();
    let changes = event.target;
    document.body.classList.toggle('dark');
    changes.classList.toggle('active');

    if(document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode','true');
    }else{
      localStorage.setItem('dark-mode','false');
    }
    }, false);

  if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
  }else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
  }
  /*
  // Ocultar o Mostrar password
  let togglePassword = document.querySelector("#togglePassword");
  let password = document.querySelector("#password");
  togglePassword.addEventListener('click', (event) => {
    let changes = event.target;
    if(password.getAttribute("type") === "password"){
    password.setAttribute("type", "text");
    changes.setAttribute("src","../multimedia/oculto.png");
    }else{
    password.setAttribute("type", "password");
    changes.setAttribute("src","../multimedia/visible.png");
    }
  }, false);
  // Barra de rango
  let respuesta = document.querySelector("#set_range");
  let input_range = document.querySelector(".input_range");
  input_range.addEventListener('click', function(){
    let range = document.querySelector(".input_range").value;
    respuesta.innerHTML = range;
  }, false);
  // CheckCherry
  let cherry = document.querySelector("#switcherry");
  let switch1 = document.querySelector("#switch");
  cherry.addEventListener('click', (event) => {
    if(switch1.getAttribute("checked")=="true"){
      switch1.removeAttribute("checked"); 
     }else{
      switch1.setAttribute("checked","true");
     }
  }, false);
  //Scroll
  let animado = document.querySelectorAll(".animado");
  function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0;i<animado.length;i++){
      let alturaAnimado = animado[i].offsetTop;
      if(alturaAnimado - 300 < scrollTop){
        animado[i].style.opacity = 1;
      }
    }
  }
  window.addEventListener('scroll', mostrarScroll);
  */
});


