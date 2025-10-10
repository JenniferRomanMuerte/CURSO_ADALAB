# SASS

Los **@use** son como import de ficheros pero de ficheros .scss
Van siempre arriba del fichero donde se utilizan.
Deben ir en orden de importación:
   Explicacición si importo el header.scss y debajo tengo código general, 1º cargará el header y luego el general con lo cual nos cargamos en otro.
   Asi que se deben importar en orden.

### Importante estructurar todo, dentro de carpeta scss crear carpetas
- core (estilos comunes de la página)
  - reset
  - variables
- layout (estructura de la página):
  - header
  - main
  - footer...
- componentes (estilos de componentes que reutilizamos en varias partres de la página)

......




# BEM

Es una guia de como nombrar a las clases de scss.
1º se nombra el bloque
2º el elemento
3º cosas que cambien algunos elementos

Ejemplo:

bloque__elemento--modificador

- Para los titulos de una sección:
  section__title
- Si tenenemos titulos de distintos tamaños:
  section__title--medium
  section__title--small


# NESTING

Cuando yo tengo varias reglas que empiezan por el mismo selector podemos como anidarlas con  el selector '&'
Cuando pongo el & es como si estuviese poniendo la palabra del padre.

Ejemplo:

.section {
  propiedad
  propiedad

  & __title{
    propiedad
    propiedad

    &--small{
      propiedad
    }
    &--medium{
      propiedad
    }
  &__button{
    propiedad
    propiedad
  }
  }
}

## También podemos poner las media queries dentro de los elementos

En ese caso se pone dentro de la clase pero no hace el ampersan

