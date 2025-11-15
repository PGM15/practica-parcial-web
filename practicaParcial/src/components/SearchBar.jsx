export default function SearchBar({ query, setQuery, searchSeries }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Buscar series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
          marginRight: "10px"
        }}
      />
      <button onClick={searchSeries} style={{ padding: "10px 15px" }}>
        Buscar
      </button>
    </div>
  );
}
