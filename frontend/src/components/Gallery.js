import React from "react";

const Gallery = () => {
  const images = [
    "El padrino.jpeg",
    "Interstellar.jpeg",
    "La momia.jpeg",
    "Matrix.jpeg",
    "Norbit.jpeg",
    "Piratas del caribe.jpeg",
    "shrek.jpeg",
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Galería de Imágenes</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`/images/${image}`}
            alt={`Imagen ${index + 1}`}
            style={{
              width: "200px",
              height: "auto",
              border: "2px solid white",
              borderRadius: "8px",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/200x300?text=No+Image";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;


