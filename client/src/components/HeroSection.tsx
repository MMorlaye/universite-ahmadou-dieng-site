import { useEffect, useState } from "react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "/images/hero/hero1.jpg",
      alt: "Cérémonie de remise des diplômes à l'Université Ahmadou DIENG"
    },
    {
      src: "/images/hero/hero2.jpg",
      alt: "Diplômés de l'Université Ahmadou DIENG"
    },
    {
      src: "/images/hero/hero3.jpg",
      alt: "Célébration des diplômés de l'Université Ahmadou DIENG"
    }
  ];

  useEffect(() => {
    // Fonction pour faire défiler automatiquement les images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changer d'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lorsque le composant est démonté
  }, [images.length]);

  return (
    <section className="relative bg-[#003366] overflow-hidden" style={{ height: "80vh", maxHeight: "700px", minHeight: "500px" }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Carousel d'images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      
      {/* Indicateurs de navigation */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'} transition-all`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
        <div className="w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6 text-center">
            Construisons demain aujourd'hui !
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            L'Université Ahmadou DIENG offre des formations de qualité internationale dans un environnement d'apprentissage innovant et dynamique.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#formations" className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-8 rounded-full transition-all font-medium text-lg">
              Découvrir nos formations
            </a>
            <a href="#about" className="bg-white hover:bg-gray-100 text-[#003366] py-3 px-8 rounded-full transition-all font-medium text-lg">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
