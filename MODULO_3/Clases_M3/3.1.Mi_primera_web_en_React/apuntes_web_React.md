# REACT

Libreria: Código que han hecho otras personas y podemos usar nuestro proyecto
Framework: Muchas bibliotecas que se rigen por unas normas.
Librería para hacer aplicaciones web.

Son aplicaciones SPA. (Single Page Aplication) = Aplicaciones de una sóla página.
Todo nuestro código está en un html y usaremos diferentes recursos para cambiar la vista de ésta.

Usa programación declarativa.

## Cómo trabajar con React

1º.Para poder usar vite en nuestro ordenador:
npm install -g create-vite

2º. Una vez instalado vite para crear un proyecto:
create-vite nombre --template vite

- Un atajo de los comandos anteriores sería:
  npx create-vite nombre --template vite

  esto no instala nada en el oredenador, simplemente permite crear el proyecto sin necesidad de instalarlo en todo el ordenador.

## Plantilla de React

Hemos creado el react-starterKit, una plantilla para tener todo configuradod esde el principio y nada más tener que copiarlo.

- index.html:

  Se puede tocar el head para meter enlaces a googleFont o a enlaces a iconos...
  dentro del body no va html, sólo van dos etiquetas:

  -
  <div id="root"></div>

  - Para cargar el js:
  <script type="module" src="/src/main.jsx"></script>

- main.jsx:

  Es el encargado de renderizar los componentes, debemos importarlos para poder pintarlos, los pintamos

- App.jsx:

  Componente principal de la página, aqui se importa el App.css (Archivo principal de estilos de la web) para poder usarlo. debemos dedclarar como una función y dentro del return de ésta va el html que se va a pintar.
  Después debemos exportar este componente para poder usarlo en otros ficheros.


- Archivos jsx:

  Son ficheros js donde podemos escribir html.
  El html tienen que tener una etiqueta que contenga las demás, pero no puede haber 2 etiquetas principales hermanas.


## Estilos en React

Tenemos que importar el fichero de estilos en el fichero jsx donde queramos usarlo.

Para poder usar Sass en nuestro proyecto debemos instalar una dependencia:
- npm install sass


## Imagenes en React

Para poder usar imagenes en React, en la etiqueta html ya no importamos entre comillas debemos:
- Guardar la imagen el carpeta src/images

- Importar la imagen en el fichero donde vayamos a usarla, se declara:
  import nombre from "ruta en nuestro proyecto"

- Para usarla en la etiqueta img: (se mete entre llaves el nombre de la variable que le hayamos asignado)
  <img src={nombre} alt="logo"/>


## Migración de código a React

Para migrar el proyecto html a un proyecto React hay varias cosas que debemos tener en cuenta:

- Que el html tenga una etiqueta principal sin hermanas, podemos usar una etiqueta fantasma que contenga las demas, para ello:
<> {Código} </>
- Cambiar el atributo class por className
- Todas las etiquetas deben llevar etiqueta de cierre o autocierre (Antes en html las de input e img no la llevaban).
- y el atributo for de los label se debe sustituir pot htmlFor