import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";

function App() {
  return (
    <div>
      <h1>Buscador de Series</h1>

      {/* Barra de búsqueda */}
      <SearchBar />

      {/* Lista de series */}
      <SeriesList />
    </div>
  );
}

export default App;
