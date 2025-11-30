const callToApi = () => {
  // Llamamos a la API
  return fetch(
    "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json"
  ) // Url para hacer la peticion
    .then((response) => response.json())
    .then((data) => {
      return data.items;
    });
};
export default callToApi;
