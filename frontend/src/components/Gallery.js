import React from "react";

const Gallery = () => {
  const images = [
    { src: "/images/El%20padrino.jpeg", alt: "El padrino" },
    { src: "/images/Interstellar.jpeg", alt: "Interstellar" },
    { src: "/images/La%20momia.jpeg", alt: "La momia" },
    { src: "/images/Matrix.jpeg", alt: "Matrix" },
    { src: "/images/Norbit.jpeg", alt: "Norbit" },
    { src: "/images/Piratas%20del%20caribe.jpeg", alt: "Piratas del Caribe" },
    { src: "/images/shrek.jpeg", alt: "Shrek" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Galería de Imágenes</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="max-w-xs w-full border-2 border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
