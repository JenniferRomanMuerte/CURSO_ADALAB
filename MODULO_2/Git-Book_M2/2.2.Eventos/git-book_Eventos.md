# 2.2.1 Eventos

Ya hemos aprendido a modificar cosas en nuestra página web mediante JavaScript: cambiar contenidos, estilos, etc. Pero hasta ahora nuestro script (código JavaScript) se ejecutaba al cargar la página. En esta sesión vamos a aprender a hacer nuestra **web interactiva**, es decir, que haya modificaciones también de contenidos o estilos pero en respuesta a la interacción de la usuaria. La forma de modelar esa interacción de la usuaria en la web es mediante *eventos*. Un evento representa una interacción, que normalmente es de la usuaria, tras la cual podemos realizar una acción. Vamos a ver algunos ejemplos de acciones que implican eventos:

* mostrar una alerta cuando la usuaria hace click en un botón
* cambiar el tamaño de una cabecera fija cuando la usuaria llega a un punto de scroll
* abrir una sección oculta de un formulario cuando hago click sobre un botón
* cerrar una ventana modal cuando termina un temporizador de 15 segundos (aquí no hay acción de la usuaria)
* deshabilitar algunos campos de un formulario, cuando la usuaria selecciona una opción de un select
* enviar una petición al servidor para pedir los datos de los artículos que coinciden con la búsqueda, cuando la usuaria pincha en el botón de buscar en Amazon. Y cuando los datos del servidor llegan al navegador, pintarlos en la página

Es importante entender que nosotros no creamos eventos desde JavaScript sino que un evento se genera pero desde JavaScript podemos saber que ha sucedido. Ejemplos de eventos:

* click en un botón
* scroll en la página
* un cambio en el contenido de un input
* expira un temporizador
* llegan los datos del servidor

Lo que podemos hacer desde JavaScript es escuchar y responder a estos eventos. ¿Cómo? Creando el código que se va a ejecutar cuando el evento sucede.

Vamos a entender cómo actuamos en JavaScript con los ejemplos anteriores:

* cuando la usuaria hace click en el botón *más info*, ejecutamos un código que muestra una información que estaba escondida
* cuando el usuario hace scroll en la página, ejecutamos el código que comprueba si la posición de la pantalla es mayor que *x* y en caso afirmativo aplica una clase CSS a la cabecera
