# Router

Una ruta está por compuesta por:


https://localhost:5173/about-us

- potocolo: Es la manera con la que nos comunicamos con el servidor (http, https)
  - https: Es la segura, se supone que en esta es segura y sólo se ve la direccion los datos que se manden van encriptados
- hostname: nombre del servidor (localhost:5173)
  - localhost es el hostname
  - 5173: Es el puerto donde corre

- about-us: Lo que vaya aqui detrás del / es el path

## Seguimos en ejercico de libros de la lección 3.3


Si queremos ir a otras páginas se mantiene la redirección con la etiqueta <a href=""> de enlaces

*** Si queremos redirigir a alguna parte de nuestra web usaremos el ReactRouter ***

La página principal tiene el path: /
Otras páginas tendrán el path: /loquesea


Cada página que queramos mostrar será un componente de React, dependiendo de la ruta que se clique, se mostrará un comoponente u otro.

## Comenzamos

1º. Instalar en el proeyecto donde vamos a usarlo el react Router:
  npm i react-router

2º. Añadir en el main.jsx
    Envolvemos el componente app en otro componente:
    ```bash
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    ```

  Aqui existen 2 componentes para envolver:

  - BrowserRouter: Con esta etiqueta si subimos nuestro proyecto a ciertos servidores del estilo GitHubPages no funcionará, pero si tenemos nustros propio dominio o    servidor usaremos ésta.
  - HashRouter: Con esta etiqueta forma la ruta con un hastag para evitar que no funcione en algunos servidores


  ## Definir nuestros enlaces a otras páginas de nuestra web

  Para definir los enlaces usamos la etiqueta <Link>: (Hay que importarla de reactRoute), en el elemento que queramos que nos mande a esa ruta, es como la etiqueta <a></a>
  <Link to ="/Contacto"></Link>

  Esto sería como decirle cuando clique aqui llevame aqui, sólo salta.

  ## Definir rutas estáticas

  Aqui definimos los componentes que  queremos que se muestren en el caso de que la ruta que hemos asociado en el Link que han clicado sea la misma que asociamos aqui en la Route

  <Route path="/sobre-nosotras" element = {<div><h2>Sobre Nosotras</h2></div>}/> Aqui podríamos poner un componente en vez de html


## Definir rutas dinámicas

Son las rutas que nos llevan a un componente "plantilla", que mostrará una info u otra dependiendo del param que le mandemos

Se definen igual que las estáticas pero detrás de la barra se pone "/:id"
<Route path="/product/:id" element = {<div><h2>Esta es una ruta dinámica</h2></div>}/>

- "/:id" es la manera de indicar que eso es un párametro variable, y hay que mandarselo.

Para mandar ese id, en el Link del enlace donde queremos que nos mande con la info que queremos que nos muestre le mandamos el identificador único, con comillas catalanas y la interpolación para la variable
<Link to ={`/product${product.id}`}></Link>

Para capturar este id en el componente donde tenemos que mostrar los datos accedemos a este valor através de useParams:

importamos el hook:
import {useParams} from "react-router"

capturamos ese valor y lo metemos en una variable:
const variableDeLaRuta = useParams();
const idDeLaVariableRuta =  parseInt(variableDeLaRuta.id);
CUIDADO AQUI!!!! nos devuelvbe un string, si lo que vamos a buscar es un id number hay que convertirlo


Y ya en este componente buscariamos la info en el array pertienente, con el id que ya tenemos


## Controlar que no pueda encontrar lo que nos mandan


ponemos un if y dentro un return con el código html que queramos mostrar en estos casos
(Esto va en la parte del cófigo js)
if(variableDeLaRutaNumber === undefined){
  return(
    .....
  )
}