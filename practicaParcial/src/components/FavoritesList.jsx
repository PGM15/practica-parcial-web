import SeriesCard from "./SeriesCard";

export default function FavoritesList({ favorites, toggleFavorite, onSelect }) {
  if (favorites.length === 0) {
    return <p>No has añadido ninguna serie a favoritos.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {favorites.map((serie) => (
        <SeriesCard
          key={serie.id}
          serie={serie}
          toggleFavorite={toggleFavorite}
          isFavorite={true}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
