const callToApi = (searchName) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then(response => response.json())
    .then(response => {
      // Transformamos los datos de la API
      const series = response.map(eachSerie => {
        return {
          id: eachSerie.show.id,
          name: eachSerie.show.name,
          type: eachSerie.show.type,
          language: eachSerie.show.language,
          genres: eachSerie.show.genres,
          runtime: eachSerie.show.runtime
        };
      });

      return series;
    });
};

export default callToApi;
