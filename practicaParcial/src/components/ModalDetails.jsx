export default function ModalDetail({ serie, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "500px",
          maxHeight: "90vh",
          overflow: "auto"
        }}
      >
        <button
          onClick={onClose}
          style={{ float: "right", marginBottom: "10px" }}
        >
          Cerrar
        </button>

        <h2>{serie.name}</h2>

        {serie.image && (
          <img
            src={serie.image.medium}
            alt={serie.name}
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: serie.summary }}
          style={{ marginTop: "15px" }}
        />
      </div>
    </div>
  );
}
