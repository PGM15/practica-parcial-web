import SeriesCard from "./SeriesCard";

export default function SeriesList({ results, onSelect }) {
  return (
    <div>
      <h2>Resultados</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "10px"
        }}
      >
        {results.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
