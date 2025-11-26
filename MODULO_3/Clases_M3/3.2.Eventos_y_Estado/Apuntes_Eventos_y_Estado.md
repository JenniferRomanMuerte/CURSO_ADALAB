
## Variables y eventos

- Podemos pintar elementos con un pintado condicional:
Si una variable boolenana se cumple pintamos una cosa si no se cumple pintamos otra o nada:

```bash
<p>
La variable numero es mayor que 20:
{bolean === true ? "SI" : "NO"}
</p>
```

Si es true pintará SI y si es false pintará N0



- Para pintar objetos metemos entre las llaves el objeto.propiedad que queramos mostrar:
{persona.name}
{persona.edad}



- Podemos llamar a funciones desde el código html:
{saludar()}
Podemos pasarle una variable:
{saludar(persona.name)}

- Para eventos se pone en el html el evento = {nombre de la función}
Y luego creamos en el js la función.
Éstas van sin paréntesis al final de la funcion en la llamada porque se ejecutarán cuando se clique, si le ponemos paréntesis se ejecutarían al cargar la página.


- Casos en los eventos para saber el elemento donde se está clicando.
Para saber el elemento donde está el evento usaremos el event como haciamos en js

Por ejemplo para coger el valor de lo que se esctibe en un input:
event.target.value;


 ## Variables de estado


Son variables que a lo largo de la ejecución van a cambiar y debemos cambiar la vista de la página si estas cambian.

Para crearlas:

const [classHidden, setClassHidden] = useState("");

el set se debe poner porque es la única manera de cambiarlas no se puede cambiar como antes en js asignandoles u nuevo valor.
setClassHidden("hidden");