const table = document.querySelector(".section__basketShop--table");
const headerRow = document.createElement("tr");
const headers = ["Producto", "Precio", "Unidades", "Total"];

let productsInBasket = [];

// Creamos la cabecera una sola vez
for (const headerText of headers) {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Función para pintar toda la tabla a partir del array productsInBasket
const paintBasket = () => {
  // Limpiamos la tabla y añadimos la cabecera
  table.innerHTML = "";
  table.appendChild(headerRow);

  for (const productBasket of productsInBasket) {
    const productRow = document.createElement("tr");

    // Nombre
    const nameTd = document.createElement("td");
    nameTd.textContent = productBasket.name;

    // Precio
    const priceTd = document.createElement("td");
    priceTd.textContent = `${productBasket.price} €`;

    // Contenedor de cantidad con botones
    const unitTd = document.createElement("td");
    const containerQuantity = document.createElement("div");
    containerQuantity.classList.add("containerQuantity");

    const btnDecrement = document.createElement("button");
    btnDecrement.textContent = "-";
    btnDecrement.classList.add("buttonsQuantity");
    btnDecrement.addEventListener("click", quantityDecrement);

    const quantity = document.createElement("p");
    quantity.textContent = productBasket.quantity;

    const btnIncrement = document.createElement("button");
    btnIncrement.textContent = "+";
    btnIncrement.classList.add("buttonsQuantity");
    btnIncrement.addEventListener("click", quantityIncrement);

    containerQuantity.appendChild(btnDecrement);
    containerQuantity.appendChild(quantity);
    containerQuantity.appendChild(btnIncrement);
    unitTd.appendChild(containerQuantity);

    // Total
    const totalTd = document.createElement("td");
    const totalPriceProduct = productBasket.quantity * productBasket.price;
    totalTd.textContent = `${totalPriceProduct} €`;

    // Montamos la fila
    productRow.appendChild(nameTd);
    productRow.appendChild(priceTd);
    productRow.appendChild(unitTd);
    productRow.appendChild(totalTd);
    productRow.dataset.id = productBasket.id;

    table.appendChild(productRow);
  }
};

// Función para añadir productos al carrito
const addingBasket = (event) => {
  const btnId = event.currentTarget.dataset.id;
  const foundProduct = products.find((product) => product.id === btnId);

  const existingProduct = productsInBasket.find(
    (item) => item.id === foundProduct.id
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    productsInBasket.push({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: 1,
    });
  }

  paintBasket(); // repintamos todo el carrito actualizado
};

// Incrementar cantidad
const quantityIncrement = (ev) => {
  const productId = ev.target.closest("tr").dataset.id;
  const product = productsInBasket.find((item) => item.id === productId);
  product.quantity++;
  paintBasket(); // repintar la tabla con valores actualizados
};

//  Decrementar cantidad
const quantityDecrement = (ev) => {
  const productId = ev.target.closest("tr").dataset.id;
  const product = productsInBasket.find((item) => item.id === productId);
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    // Si llega a cero Buscamos el indice del producvto en el array de la cesta
    const index = productsInBasket.findIndex((item) => item.id === productId);
    // Comprobamos que es distinto de -1 (En ese caso no ñllo ha encontrado)
    if (index !== -1) {
      // Borramos el producto del array
      productsInBasket.splice(index, 1);
    }
  }
  paintBasket();
};
