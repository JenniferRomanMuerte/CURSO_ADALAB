# Formularios

Cuando hay varios input lo mejor es crear un objeto con las mismas propiedades que input, y guardaremos el valor de los input en esas propiedades.


## Radio-buttons

Para los input de tipo radio que sólo se pueda seleccionar uno, hay que ponerles a todos el mismo name.
En este tipo de input no se asocia el value de la variable de estado ya que la opcion no cambia su valor, para obtener el valor que se selecciona se accede a través del atributo name, y para saber si está seleccionado es el atributo checked.

## CheckBox

✔ Checkbox individual → guarda booleanos
✔ Grupo de checkbox → guarda arrays

La variable de estado que guarda las selecciones de varios checkboxes debe ser un array, ya que puede contener varios valores.

Para capturarlos:

```bash
const handleIngredientsChange = (ev) => {
  const value = ev.target.value;
  const checked = ev.target.checked;

  if (checked) {
    // Añadir al array
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, value],
    });
  } else {
    // Quitar del array
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter(
        (item) => item !== value
      ),
    });
  }
};

```

🌟 Así funciona mentalmente
Cuando marcas un checkbox:

checked = true

Se hace:

[...formData.ingredients, value]


Resultado: añade ese item

Cuando lo desmarcas:

checked = false

Se hace:

formData.ingredients.filter(item => item !== value)


Resultado: elimina ese item