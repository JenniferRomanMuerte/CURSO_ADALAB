import SeriesItem from "./SeriesItem";
import "../styles/SeriesList.scss";

const SeriesList = ({ series, searchText, setSelectedSeries }) => {
  return (
    <ul className="list">
      {series
        .filter((serie) =>
          serie.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((serie) => (
          <SeriesItem
            setSelectedSeries={setSelectedSeries}
            key={serie.id}
            id={serie.id}
            name={serie.name}
            year={serie.year}
            description={serie.description}
          />
        ))}
    </ul>
  );
};

export default SeriesList;
