export default function ModalDetail({ serie, onClose, toggleFavorite, favorites }) {
  const isFavorite = favorites.some(f => f.id === serie.id);

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close" onClick={onClose}>✖</button>

        {serie.image && (
          <img src={serie.image.medium} className="modal-img" />
        )}

        <h2>{serie.name}</h2>

        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: serie.summary }}
        />

        <button className="btn" onClick={() => toggleFavorite(serie)}>
          {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>

      </div>
    </div>
  );
}
