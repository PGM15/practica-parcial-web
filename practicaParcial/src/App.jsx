import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import ModalDetail from "./components/ModalDetail";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  // Favoritos (cargados desde localStorage)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cuando cambian
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

  const closeModal = () => {
    setSelected(null);
  };

  const toggleFavorite = (serie) => {
    const exists = favorites.some(f => f.id === serie.id);

    if (exists) {
      setFavorites(favorites.filter(f => f.id !== serie.id));
    } else {
      setFavorites([...favorites, serie]);
    }
  };

  return (
    <div>
      <h1>Buscador de Series</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        searchSeries={searchSeries}
      />

      <h2>Favoritos</h2>
      <FavoritesList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <SeriesList
        results={results}
        onSelect={openDetails}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />

      {selected && (
        <ModalDetail serie={selected} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
