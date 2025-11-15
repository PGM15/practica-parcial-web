import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import FavoritesList from "./components/FavoritesList";
import ModalDetail from "./components/ModalDetail";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  // Favoritos
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar automáticamente
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchSeries = async () => {
    if (!query.trim()) return;

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await res.json();

    setResults(data.map((item) => item.show));
  };

  const openDetails = async (id) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    setSelected(data);
  };

  const closeModal = () => setSelected(null);

  const toggleFavorite = (serie) => {
    const exists = favorites.some((f) => f.id === serie.id);

    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== serie.id));
    } else {
      setFavorites([...favorites, serie]);
    }
  };

  return (
    <div className="app-container">

      <h1 className="main-title">Buscador de Series</h1>

      <div className="section">
        <SearchBar
          query={query}
          setQuery={setQuery}
          searchSeries={searchSeries}
        />
      </div>

      <div className="section">
        <h2 className="section-title">Mis Favoritos</h2>
        <FavoritesList
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onSelect={openDetails}
        />
      </div>

      {results.length > 0 && (
        <div className="section">
          <h2 className="section-title">Resultados de búsqueda</h2>
          <SeriesList
            results={results}
            onSelect={openDetails}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      )}

      {selected && (
        <ModalDetail serie={selected} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
