/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Federico",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Caro",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

let userFound = false;
const timeline = "";

do {
  const username = prompt("¿Cuál es tu usuario?");
  for (let i = 0; i < usersDatabase.length; i++) {
    if (usersDatabase[i].username.toLowerCase() === username.toLowerCase()) {
      const password = prompt("¿Cuál es tu contraseña?");
      userFound = true;
      if (usersDatabase[i].password === password) {
        for (let j = 0; j < usersTimeline.length; j++) {
          if (
            usersTimeline[j].username.toLowerCase() === username.toLowerCase()
          ) {
            alert(`Bienvenido, tu timeline es:${usersTimeline[j].timeline}`);
            timelineFound = true;
            break;
          }
        }
        if (!timelineFound) {
          alert("Bienvenido, aún no tienes timeline");
        }
      } else {
        alert(
          `La contraseña que has introducido para el usuario ${username} es incorrecta`
        );
      }
      break;
    }
  }
} while (!userFound);

//usuarioExistente(username);

/*function usuarioExistente(username) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (usersDatabase[i].username === username) {
      const password = prompt("¿Cuál es tu contraseña?");
      userFound = true;
      if (usersDatabase[i].password === password) {
        for (let j = 0; j < usersTimeline.length; j++) {
          if (usersTimeline[j].username === username) {
            alert(`Bienvenido, tu timeline es:${usersTimeline[j].timeline}`);
            break;
          }
        }
      } else {
        alert(
          `La contraseña que has introducido para el usuario ${username} es incorrecta`
        );
      }
       break;
    }
  }
  if (userFound == false) {
    alert("Ese usuario no existe");
  }
}*/
