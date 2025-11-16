export default function SearchBar({ query, setQuery, searchSeries }) {
  return (
    <div className="search-box">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar serie..."
        className="input"
      />
      <button className="btn" onClick={searchSeries}>
        Buscar
      </button>
    </div>
  );
}
