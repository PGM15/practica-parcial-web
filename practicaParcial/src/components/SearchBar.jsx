export default function SearchBar({ query, setQuery, searchSeries }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchSeries}>Buscar</button>
    </div>
  );
}
