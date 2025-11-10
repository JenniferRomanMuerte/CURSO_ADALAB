'use strict';

let products = [];
fetch("/api/data.json")
  .then((response) => response.json())
  .then((data) => {
    products = data.cart.items;
    paintProducts(products);
  });


import './list_of_t-shirts.js';
import './shopping_basket.js';