import SeriesCard from "./SeriesCard";

export default function SeriesList({ results, onSelect, toggleFavorite, favorites }) {
  return (
    <div className="grid">
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
