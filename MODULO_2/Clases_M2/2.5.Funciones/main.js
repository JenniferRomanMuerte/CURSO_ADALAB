
// Recogemos el elemento donde vamos a pintar
const greetingSection = document.querySelector(".js-greetings");


// Declaramos la función como función flecha
const gretting = () =>{
  greetingSection.innerHTML = "Buenos dias";
}

// Llamamos a la función
gretting();


/*
 La misma función con parametros, le pasamos un parametro con el nombre,
 usamos esa variable para meterla en el elemento html
*/
 const grettingWithName = (name)=>{
   greetingSection.innerHTML = `Buenos dias ${name}`;
}

grettingWithName('jennifer');