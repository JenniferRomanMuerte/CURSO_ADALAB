const callToApi = () => {
  // Llamamos a la API
  return fetch("https://randomuser.me/api/?results=12") // Url para hacer la peticion
    .then((response) => response.json())
    .then((responseData) => {
      const users = responseData.results.map((user) => ({
        gender: user.gender,
        name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
        country: user.location.country,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
        id: user.login.uuid,
        image: user.picture.medium,
      }));
      return users;
    });
};

export default callToApi;
