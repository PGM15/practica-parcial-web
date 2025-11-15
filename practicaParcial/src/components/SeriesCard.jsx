export default function SeriesCard({ serie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <h3>{serie.name}</h3>

      {serie.image ? (
        <img
          src={serie.image.medium}
          alt={serie.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        />
      ) : (
        <p style={{ marginTop: "10px" }}>Sin imagen disponible</p>
      )}
    </div>
  );
}
