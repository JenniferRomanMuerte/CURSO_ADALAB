// Fichero src/components/App.jsx
import "../styles/App.scss";
import Header from "./layout/Header";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SeriesList from "./SeriesList";
import Modal from "./Modal";

const initialSeries = [
  { id: "1", name: "Breaking Bad", year: 2008, description: "Química y caos." },
  {
    id: "2",
    name: "Dark",
    year: 2017,
    description: "Viajes temporales y traumas.",
  },
  {
    id: "3",
    name: "Stranger Things",
    year: 2016,
    description: "Ochenterismo sobrenatural.",
  },
  {
    id: "4",
    name: "The Witcher",
    year: 2019,
    description: "Monstruos y política mágica.",
  },
];

function App() {
  const [series, setSeries] = useState(initialSeries);
  const [searchText, setSearchText] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);

  const changeSearchText = (value) => {
    setSearchText(value);
  };

  const closeModal = () => {
    setSelectedSeries(null);
  };

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm changeSearchText={changeSearchText} />
        <SeriesList
          series={series}
          searchText={searchText}
          setSelectedSeries={setSelectedSeries}
        />
        {selectedSeries && (
          <Modal closeModal={closeModal}>
            <h2 className="modal__content--title">{selectedSeries.name}</h2>
            <p className="modal__content--year">{selectedSeries.year}</p>
            <p className="modal__content--desc">
              {selectedSeries.description}
            </p>
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;
