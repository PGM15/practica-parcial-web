import SeriesCard from "./SeriesCard";

export default function SeriesList({ results }) {
  return (
    <div>
      <h2>Resultados</h2>

      {/* Renderizar tarjeta por cada serie */}
      <div>
        {results.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
  );
}
