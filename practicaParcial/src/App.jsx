import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Función para buscar series en la API
  const searchSeries = async () => {
    if (!query.trim()) return;

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await res.json();

    setResults(data.map((item) => item.show));
  };

  return (
    <div>
      <h1>Buscador de Series</h1>

      {/* Barra de búsqueda */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchSeries={searchSeries}
      />

      {/* Lista de series */}
      <SeriesList results={results} />
    </div>
  );
}

export default App;
