import SerieItem from "./Serieitem";

const SeriesList = ({serie}) => {
  return (
    <ul className="list">
      <SerieItem
        serie = {serie}
      />
    </ul>
  );
};

export default SeriesList;