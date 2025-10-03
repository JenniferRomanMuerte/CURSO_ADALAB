// Es la forma en la que nosotros manejamos el código de sortma asincrona
/* Tiene 3 estados:
    - pending
    - fullfilled
    - rejected
*/
/* Manejan 2 tipos de callback:
    - resolve
    - reject
*/

/* Tiene 2 métodos:
    - then() -> Se ejecuta cuando la promesa se resuelve
    - catch() -> Se  ejecurta cuando no se resuelve (Aqui podemos capturar el error por el que no se ha resuelto)
*/

// Declaración de la promesa
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessfull = true;
    if (operationSuccessfull) {
      resolve("La operación fue exitosa");
    } else {
      reject("Fallo en la operación");
    }
  }, 2000);
});

/*Uso de los métodos:
 - si la promesa devuelve resolve se ejecuta el then
 - si la promesa devuelve reject se ejecuta el catch
*/
promise
  .then((succesMessage) => {
    console.log(succesMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
