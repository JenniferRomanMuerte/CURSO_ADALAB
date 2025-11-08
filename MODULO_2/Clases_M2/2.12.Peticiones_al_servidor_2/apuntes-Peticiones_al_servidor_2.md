## Trabajando con JSON

Para transformar un string a datos de JavaScript:
-  JSON.parse(string);

Para transformar datos de JavaScript a string:
-  JSON.stringify(array);

## LocalStorage

Sirve para guardar datos en el navegador.
Necesitamos su clave y su valor.
Acceder al valor:
- localStorage.getItem('key');
- Guardar un dato: (Comprobamos 1º si no existe).
  if (!localStorage.getItem('key')) {
  localStorage.setItem('key', 'valor');
}

