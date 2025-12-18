import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import ListingAnimesPage from "./pages/ListingAnimesPage";

import "../styles/App.scss";
import CreateAnimePage from "./pages/CreateAnimePage";
import Filters from "./pages/Filters";

function App() {
  const [animes, setAnimes] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");
  const [newAnimeData, setNewAnimeData] = useState({
    titulo: "",
    descripcion: "",
  });
  const [editAnimeData, setEditAnimeData] = useState({});
  const [selectAuthor, setSelectAuthor] = useState("");

  const handleNewAnimeInput = (campo, valor) => {
    setNewAnimeData({
      ...newAnimeData,
      [campo]: valor,
    });
  };

  const handleNewAnimeClick = () => {
    fetch("http://localhost:3000/api/animes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnimeData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        // Interpretar
      });
  };

  const handleFilterAuthor = (value) =>{
    setSelectAuthor(value)
  }

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        setFetchStatus("loading");

        const res = await fetch(`http://localhost:3000/api/animes?creadora=${selectAuthor}`);
        const data = await res.json();

        setAnimes(data.result);
        setFetchStatus("");
      } catch (err) {
        setFetchStatus("error");
      }
    };

    fetchAnimes();
  }, [selectAuthor]);

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Catálogo de Animes</h1>
      </header>

      <main className="main">
      <Filters handleFilterAuthor={handleFilterAuthor} animes={animes} selectAuthor={selectAuthor}/>
        <ListingAnimesPage animes={animes} fetchStatus={fetchStatus} />

        <Routes>
          <Route
            path="/new"
            element={
              <CreateAnimePage
                newAnimeData={newAnimeData}
                handleNewAnimeInput={handleNewAnimeInput}
                handleNewAnimeClick={handleNewAnimeClick}
              />
            }
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
