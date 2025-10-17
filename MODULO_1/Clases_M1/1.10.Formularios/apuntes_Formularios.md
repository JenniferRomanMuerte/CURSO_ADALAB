# FORMULARIOS

Para mandar los datos usamos el atributo action dentro de la etiqueta form donde le indicamos la dirección del servidor donde enviamos los datos

Hay que especificar tb el método cómo enviamos los datos para eso en el atributo method le indicamos:
- **get:**
Se ven los datos que enviamos en la url del navegador
Se usan cuando no se mandan datos sensibles, o cuando elegimos un producto y queremos que salaga en la url para después poder compratir...
- **post:**
Los datos se envían de otra manera y no se ven el url
Muy importante cuando se mandan datos personales que no queremos que se vean


### pattern
Para meter un regex (limitar lo que queremos que el usario escriba en el input se mete dentro de la etiqueta pattern)

## Agrupar label e input

Existe una propiedad para agrupar tanto label e input **fieldset**, sirve como dividir en secciones el formulario.
Y éste tiene una etiqueta llamada **legend** que se usa para darle un título al fieldset