import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import ModalDetail from "./components/ModalDetail";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

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

  return (
    <div>
      <h1>Buscador de Series</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        searchSeries={searchSeries}
      />

      <SeriesList results={results} onSelect={openDetails} />

      {selected && (
        <ModalDetail serie={selected} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
