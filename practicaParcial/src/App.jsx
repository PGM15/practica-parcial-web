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

  // Favoritos desde localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar cambios de favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Buscar series
  const searchSeries = async () => {
    if (!query.trim()) return;

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await res.json();

    setResults(data.map((item) => item.show));
  };

  // Ver detalles
  const openDetails = async (id) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    setSelected(data);
  };

  const closeModal = () => setSelected(null);

  // Añadir/quitar favoritos
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

      <h2>Mis Favoritos</h2>
      <p>Las series que marques como favoritas aparecerán aquí automáticamente.</p>

      <FavoritesList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onSelect={openDetails}
      />

      {results.length > 0 && (
        <>
          <h2>Resultados de búsqueda</h2>
          <SeriesList
            results={results}
            onSelect={openDetails}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </>
      )}

      {selected && (
        <ModalDetail serie={selected} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
