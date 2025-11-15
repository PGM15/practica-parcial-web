import SeriesCard from "./SeriesCard";

export default function SeriesList() {
  return (
    <div>
      <h2>Resultados</h2>
      <div>
        {/* Aquí irán las tarjetas */}
        <SeriesCard />
        <SeriesCard />
      </div>
    </div>
  );
}
