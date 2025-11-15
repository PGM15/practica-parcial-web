export default function SeriesCard({ serie, onSelect, toggleFavorite, isFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        textAlign: "center",
        background: "white",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        transition: "0.3s ease"
      }}
      onClick={() => onSelect && onSelect(serie.id)}
    >
      <h3>{serie.name}</h3>

      {serie.image ? (
        <img
          src={serie.image.medium}
          alt={serie.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        />
      ) : (
        <p style={{ marginTop: "10px" }}>Sin imagen disponible</p>
      )}

      <button
        style={{
          marginTop: "10px",
          padding: "7px 12px",
          background: isFavorite ? "#c62828" : "#1565c0",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.2s ease"
        }}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(serie);
        }}
      >
        {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
    </div>
  );
}
