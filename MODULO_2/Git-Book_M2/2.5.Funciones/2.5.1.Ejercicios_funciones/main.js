// Multiplicación, Media y Pares

function suma(a, b) {
  return a * b;
}

function media(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

function isPar(a) {
  // Sacamos el residuo de la división entre 2, si el residuo es 0 es par
  if (a % 2 === 0) {
    return true;
  }else{
    return false;
  }
}


// Ticket con IVA

function iva(a){
  return console.log(
    `El precio sin IVA: ${a},
      IVA: ${a * 0.21},
      y Total ${a * 0.21 + a};
    `)
}



/*
  querySelector para todas
  Logueando errores
*/

function getElement(selector){

  // Comprobamos que el elemento empieza por . y no está vacio
  if( !selector.startsWith(".") || selector === ""){
    console.error(`No existe ningún elemento con clase ,id o tag llamado ${selector}`);
  }
  else{
    elemento = document.querySelector(selector);
  }
  return elemento;
}

const El = getElement('.p1');
console.log(El);



// Combinando funciones

const parrafo = getElement('.parrafo');
textoParrafo = Number(parrafo.innerHTML);

textoParrafoIsPar = isPar(textoParrafo);

if(textoParrafoIsPar  === true){
  console.log("Este nº es PAR");
}
else{
  console.log("Este nº es IMPAR");
}