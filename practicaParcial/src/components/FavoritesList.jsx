import SeriesCard from "./SeriesCard";

export default function FavoritesList({ favorites, toggleFavorite, onSelect }) {
  return (
    <>
      <h2 className="subtitle">Favoritos</h2>

      {favorites.length === 0 && <p>No tienes favoritos todavía.</p>}

      <div className="grid">
        {favorites.map((serie) => (
          <SeriesCard
            key={serie.id}
            serie={serie}
            onSelect={onSelect}
            toggleFavorite={toggleFavorite}
            isFavorite={true}   // Siempre favorito aquí
          />
        ))}
      </div>
    </>
  );
}
