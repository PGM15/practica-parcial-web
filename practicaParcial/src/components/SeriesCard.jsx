import { useState } from "react";

export default function SeriesCard({ serie, onSelect, toggleFavorite, isFavorite }) {
  const [showHeart, setShowHeart] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();

    toggleFavorite(serie);

    // Animación solo cuando se añade a favoritos
    if (!isFavorite) {
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 800); // dura 0.8s
    }
  };

  return (
    <div className="card" onClick={() => onSelect(serie.id)}>
      
      {/* Imagen */}
      {serie.image ? (
        <img src={serie.image.medium} className="card-img" />
      ) : (
        <div className="placeholder" />
      )}

      {/* Título */}
      <h3 className="card-title">{serie.name}</h3>

      {/* Botón favorito */}
      <button
        className={isFavorite ? "btn secondary" : "btn"}
        onClick={handleFavorite}
      >
        {isFavorite ? "Quitar" : "Favorito"}
      </button>

      {/* ❤️ Corazón animado */}
      {showHeart && <div className="heart-pop">❤️</div>}
    </div>
  );
}
