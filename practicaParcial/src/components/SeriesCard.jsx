export default function SeriesCard({ serie, onSelect, toggleFavorite, isFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        cursor: onSelect ? "pointer" : "default"
      }}
    >
      <h3 onClick={() => onSelect && onSelect(serie.id)}>
        {serie.name}
      </h3>

      {serie.image ? (
        <img
          src={serie.image.medium}
          alt={serie.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px"
          }}
          onClick={() => onSelect && onSelect(serie.id)}
        />
      ) : (
        <p>Sin imagen disponible</p>
      )}

      <button
        style={{ marginTop: "10px", padding: "5px 10px" }}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(serie);
        }}
      >
        {isFavorite ? "Quitar" : "Favorito"}
      </button>
    </div>
  );
}
