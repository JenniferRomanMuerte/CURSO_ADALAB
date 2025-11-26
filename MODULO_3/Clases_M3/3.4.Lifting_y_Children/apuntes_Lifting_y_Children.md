# Código en el proyecto del capitkulo anterior(Componentes y props)

## Pintado condicional

- Se declaran como un condicional if con los operadores ternarios:
(formAddVisible ? "visible" : "")

De esta manera le estsamos diciendo que si la variable es true, le añada la clase visible y si no le añade ninguna clase.

- Esto tb se puede hacer en vez de añadirle una clase, meter el código que que queremos que pinte si se cumple la condicion entre parentesis detras de ? y depues de los puntos null(Que no pinte nada)
{formAddVisible ? (<código>) : null}


Para cambiar el estado de la variable, usamos un evento en el btn donde le cambiamos el valor

- Hay otra manera de declarar esto más corta:
{formAddVisible && (<código>)}

Si formAddVisible es true, usamos el operador && y entre paréntesis el codigo que queremos que se pinte, en este caso no hacemos el  nor (:) directamente no pinta nada.

- si necesitasemos pintar otro código HTML en el nor deberemos usar la 2º opción.


## Lifting

Se trata de pasar variables de hbija a madre, para ello tenemos que pasarle una funcion de la madre a la hija que luego la hija ejecutará dentro de su poropia función pasandole a la madre los valores necesarios, para que la madre pueda usarlos.