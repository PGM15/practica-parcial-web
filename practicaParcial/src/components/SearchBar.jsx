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
          width: "260px",
          marginRight: "10px",
          border: "1px solid #bbb",
          borderRadius: "6px"
        }}
      />

      <button
        onClick={searchSeries}
        style={{
          padding: "10px 18px",
          background: "#2d7ae0",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px"
        }}
      >
        Buscar
      </button>
    </div>
  );
}
