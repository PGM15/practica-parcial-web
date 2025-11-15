export default function SeriesCard({ serie, onSelect, toggleFavorite, isFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        cursor: "pointer",
        background: "#fafafa"
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
        <p>Sin imagen disponible</p>
      )}

      <button
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          background: isFavorite ? "red" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
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
