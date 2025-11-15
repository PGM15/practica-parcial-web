import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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

      <SearchBar
        query={query}
        setQuery={setQuery}
        searchSeries={searchSeries}
      />

      <SeriesList results={results} />
    </div>
  );
}

export default App;
