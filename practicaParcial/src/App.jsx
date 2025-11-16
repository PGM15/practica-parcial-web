import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import FavoritesList from "./components/FavoritesList";
import ModalDetail from "./components/ModalDetail";
import "./styles/layout.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const [showHome, setShowHome] = useState(true); 
  const [loading, setLoading] = useState(false);  // ← LOADER

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  // Buscar series con loader
  const searchSeries = async () => {
    if (!query.trim()) return;

    setLoading(true);  // ← INICIA loader

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();

    setResults(data.map((item) => item.show));
    setShowHome(false);

    setLoading(false); // ← FINALIZA loader
  };


  // Abrir modal (detalle)
  const openDetails = async (id) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    setSelected(data);
  };


  // Añadir o quitar favoritos
  const toggleFavorite = (serie) => {
    const exists = favorites.some(f => f.id === serie.id);
    if (exists) {
      setFavorites(favorites.filter(f => f.id !== serie.id));
    } else {
      setFavorites([...favorites, serie]);
    }
  };


  return (
    <div className="container">

      <h1 className="title">Buscador de Series</h1>

      {/* Botón volver a favoritos */}
      {!showHome && (
        <button
          className="home-btn"
          onClick={() => setShowHome(true)}
        >
          ⬅ Volver a favoritos
        </button>
      )}

      <SearchBar query={query} setQuery={setQuery} searchSeries={searchSeries} />

      {/* LOADER */}
      {loading && <div className="loader"></div>}

      {/* SOLO favoritos si estamos en Home */}
      {showHome && (
        <FavoritesList
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onSelect={openDetails}
        />
      )}

      {/* Resultados si NO estamos en Home */}
      {!showHome && !loading && (
        <SeriesList
          results={results}
          onSelect={openDetails}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
/>

      )}

      {selected && (
        <ModalDetail
          serie={selected}
          onClose={() => setSelected(null)}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}

      <footer className="footer">
        Práctica Parcial – Pablo González Mediavilla
      </footer>
    </div>
  );
}
