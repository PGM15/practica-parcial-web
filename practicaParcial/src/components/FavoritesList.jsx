import SeriesCard from "./SeriesCard";

export default function FavoritesList({ favorites, toggleFavorite }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      {favorites.length === 0 && (
        <p>No tienes favoritos todavía.</p>
      )}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {favorites.map((serie) => (
          <SeriesCard
            key={serie.id}
            serie={serie}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
