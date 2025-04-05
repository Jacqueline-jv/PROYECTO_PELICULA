import React from "react";

const images = [
  { name: "El padrino", src: "/images/El padrino.jpeg" },
  { name: "Interstellar", src: "/images/Interstellar.jpeg" },
  { name: "La momia", src: "/images/La momia.jpeg" },
  { name: "Matrix", src: "/images/Matrix.jpeg" },
  { name: "Norbit", src: "/images/Norbit.jpeg" },
  { name: "Piratas del Caribe", src: "/images/Piratas del caribe.jpeg" },
  { name: "Shrek", src: "/images/shrek.jpeg" },
];

const Gallery = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Galería de Imágenes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded-lg">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-center mt-2">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;