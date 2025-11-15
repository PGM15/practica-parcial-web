import SeriesCard from "./SeriesCard";

export default function SeriesList({ results, onSelect, toggleFavorite, favorites }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {results.map((serie) => (
        <SeriesCard
          key={serie.id}
          serie={serie}
          onSelect={onSelect}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((f) => f.id === serie.id)}
        />
      ))}
    </div>
  );
}
