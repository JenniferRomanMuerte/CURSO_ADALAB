import "../styles/SeriesList.scss";

const SeriesItem = ({ id, name, year, description, setSelectedSeries }) => {
  const handleSelectedSerie = (ev) => {
    setSelectedSeries({
      name: name,
      year: year,
      description: description,
    });
  };

  return (
    <li className="list__item" id={id} onClick={handleSelectedSerie}>
      <h3 className="list__item--title">{name}</h3>
      <span className="list__item--year">{year}</span>
      <p className="list__item--desc">{description}</p>
    </li>
  );
};

export default SeriesItem;
