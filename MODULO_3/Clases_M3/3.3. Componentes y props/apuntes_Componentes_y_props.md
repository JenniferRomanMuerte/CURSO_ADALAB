# Componentes

## Para hacer un componente

1º. Crear un fichero jsx con la 1º letra en mayúscula.
2º. Dentro del fichero crear una función con el mismo nombre que el fichero.
3º. Dentro de la función poner un return con el código HTML.
4º. Exportar la función al final del fichero.

## Para usarlo

1º. Importar el fichero donde queramos usarlo
2º. Lo usamos como si fuese una etiqueta HTML dentro del HTML del componente donde queramos mostrarlo.

## shadcn (Es una librería de componenetes)

Podemos instalar la librería y luego en su página tienen los componentes que podemos usarlos en nuestra web.


# Personalizar componentes

Podemos pasarle variables a los componenets para que muestren en cada momento lo que nos haga falta.

```bash
<Saludar nombre = "Amparo"/>
<Saludar nombre = "Jennifer"/>

```

En el componente que recibe estas variables (es como una función, recibe estas variables con el valor que le ha mandado el componente madre).
Se ponen entre los paréntisis:
llaves y dentro las variables ({nombre, edad})


## Podemos cambiar estilos también

Pasandole desde el componenete madre como variable el nombre de la clase que queramos y despues en el hijo se lo asignamos como variable a la clase


## Podemos pasar variables de estado al componente hija

Con esto conseguimos por ejemplo, si tengo un input y lo guardo en una variable de estado el valor y lo mando al componente hija, de esta manera cada vez que se rellene el input el valor de este se actualiza también en la hija.