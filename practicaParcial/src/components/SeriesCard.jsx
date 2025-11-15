export default function SeriesCard({ serie }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{serie.name}</h3>

      {serie.image ? (
        <img
          src={serie.image.medium}
          alt={serie.name}
          style={{ width: "200px", borderRadius: "8px" }}
        />
      ) : (
        <p>Sin imagen disponible</p>
      )}
    </div>
  );
}
