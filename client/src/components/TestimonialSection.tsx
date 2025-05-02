import { useState, useEffect } from "react";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Témoignages réels d'anciens étudiants
  const testimonials = [
    {
      id: 1,
      quote: "Diplômé 1er de ma promotion en 2017, j'ai bénéficié d'une bourse d'études au Maroc (IMPT) pour mon Master entièrement payé par l'Université Ahmadou Dieng.",
      name: "Alexis Camara",
      position: "Promotion 2017",
      image: "/images/testimonials/temoin_1.jpg"
    },
    {
      id: 2,
      quote: "Diplômé 1er de ma promotion en 2018, j'ai bénéficié d'une bourse d'études au Maroc (IMPT) pour mon Master entièrement payé par l'Université Ahmadou Dieng.",
      name: "Lelano Michel",
      position: "Promotion 2018",
      image: "/images/testimonials/temoin_2.jpg"
    },
    {
      id: 3,
      quote: "Diplômé 1er de ma promotion en 2017, campus Labé, j'ai bénéficié d'une bourse d'études au Maroc (EFES) pour mon Master entièrement payé par l'Université Ahmadou Dieng.",
      name: "Fatoumata Binta Barry",
      position: "Promotion 2016",
      image: "/images/testimonials/temoin_3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 bg-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-heading font-bold mb-2">Témoignages</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl text-[#E67E22]/30 absolute top-3 left-4">
              <i className="fas fa-quote-left"></i>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
              >
                <div className="pl-4 pr-4 pt-2">
                  <p className="text-base leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-3 overflow-hidden bg-white border-2 border-[#E67E22]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/80'}`}
                aria-label={`Témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
