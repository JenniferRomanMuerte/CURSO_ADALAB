

const list = document.querySelector(".section__list--list");

const paintProducts = (products) => {
  for(const product of products){
    const li = document.createElement('li');
    li.classList.add('section__list--list--li');

    const divImg = document.createElement ('div');
    divImg.classList.add('section__list--list--li--div');

    const img = document.createElement('img');
    img.classList.add('section__list--list--li--div--img');
    img.setAttribute('src', product.imageUrl);

    const productName = document.createElement('h3');
    const textProductName = document.createTextNode(product.name);
    productName.appendChild(textProductName);

    const productPrice = document.createElement('p');
    const textProductPrice = document.createTextNode(`${product.price} €`);
    productPrice.appendChild(textProductPrice);

    const addBasketButton = document.createElement('button');
    const textAddBasketButton = document.createTextNode('Añadir a la cesta');
    addBasketButton.appendChild(textAddBasketButton);
    addBasketButton.classList.add('section__list--list--li--btn');
    addBasketButton.dataset.id = product.id;

    divImg.appendChild (img);
    li.appendChild (divImg);
    li.appendChild (productName);
    li.appendChild (productPrice);
    li.appendChild (addBasketButton);

    list.appendChild(li);

    addBasketButton.addEventListener('click', addingBasket);
  }
};

