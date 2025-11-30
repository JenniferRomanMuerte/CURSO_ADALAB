# Mirar ejercicio de libros 3.3.Componentes y props

## useState

- Nos sirve para guardar variables  en el estado de react

## useEffect

- Sirve para ejecutar código cuando cambie una variable de estado o0 si no le indicamos nunguna variable se ejecuta cuando carga la página por 1º vez.

``` bash
useEffect(()=>{

}, []); // Si este array lo dejamos vacio sólo se ejecuta cuando cargamos la página


useEffect(()=>{

}, [variableDeEstado]); // Se ejecuta cuando carga la página y cuando cambia esa variable
```

