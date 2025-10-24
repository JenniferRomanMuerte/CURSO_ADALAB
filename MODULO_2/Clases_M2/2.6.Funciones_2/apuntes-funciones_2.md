## Snipets

Son abreviaturas de código que podemos crear nosotras:

En ajustes/Snipets/:
- Elegimos el lenguaje de programación.
- Se declaran asi:
```bash
  "QuerySelector":{
    "prefix":"dqs", // Abreviatura que queramos
    /*
    Código que queremos que se autorellene,
    y con dolar nº, es para las variables que es código fijo
    */
    "body": [
      "const $1 = document.querySelector('.$2');"
    ],
    "description": "Traemos un elemento de HTML a JS"
  },
  ```

  ## Debbugger

  En las devTools en la pestaña source podemos hacer el debuger de la app, ponemos puntos de ruptura y nos vamos moviendo con las flechas por las lienas y viendo donde entra el código en cada momneto, y los valores de cada variable en ese momento.

  
