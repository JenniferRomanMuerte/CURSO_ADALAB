# Posicionamiento y Transformaciones en CSS

## Propiedades de posición
Las propiedades:
- `top`
- `left`
- `bottom`
- `right`

👉 Sirven para mover un elemento, **pero sólo funcionan si el elemento tiene asignado un `position` distinto de `static`** (que es el valor por defecto).

---

### `position: absolute`
- Mueve el elemento con respecto a su **contenedor más cercano** que tenga `position` distinta de `static`.
- Si no encuentra ninguno, se posiciona con respecto al **`body`**.

---

### `position: sticky`
- Se usa para que un elemento se quede **fijo en la página aunque hagamos scroll**.
- Siempre hay que asignarle el valor de dónde queremos que se posicione (`top`, `left`, etc.).
- Muy usado para **cabeceras**.
- ⚠️ Con este tipo de posicionamiento, al hacer scroll **se pierden los márgenes** (tenerlo en cuenta).

---

### `position: fixed`
- Posiciona un elemento con respecto a la parte **visible del dispositivo**.
- Se combinan las propiedades `top`, `left`, `bottom`, `right` para colocarlo en pantalla.

---

## Transformaciones (`transform`)
Sirve para **mover, rotar o escalar un elemento**.

### `translate`
- Mueve el elemento **horizontal y verticalmente**.
- Si sólo se indica **un valor**, se mueve en el eje **X** (horizontal).
- Si se indican **dos valores**, el primero es para **X** (horizontal) y el segundo para **Y** (vertical).

### `rotate`
- Rota el elemento sobre sí mismo.
- Se asignan valores en grados, por ejemplo: `rotate(45deg)`.

### `scale`
- Hace **zoom** en un elemento.
- Se le asigna un número:
  - Mayor a `1` → lo agranda.
  - Entre `0` y `1` → lo reduce.
