# Clase Asíncronia y temporizadores

La asincronía es un código que NO se ejecuta cuando carga la página sino en un momento determinado.
Ejemplos de código que ya hemos visto que son asíncronos:
- Eventos
- Funciones
- Fecth

Hoy veremos:
- setInterval()
  Se ejecuta todo el rato pasado el tiempo que le indiquemos
- setTimeout()
  Se ejecuta una vez pàsado el tiempo que le indiquemos
se declaran:

setTimeout(función que queremos que ejecutemos, tiempo en milisegundos);
setInterval(función que queremos que ejecutemos, tiempo en milisegundos);