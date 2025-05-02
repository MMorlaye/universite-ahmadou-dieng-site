import { useEffect } from "react";
import { specialites } from "../components/FormationsSection";
import Layout from "../components/Layout";

export default function Catalogue() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Catalogue des Formations";
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">
              Catalogue des Formations
            </h1>
            <p className="text-lg text-[#343A40]/70">
              Explorez l'ensemble de nos formations et trouvez celle qui correspond à votre projet professionnel.
            </p>
          </div>

          {/* Index des spécialités - Déplacé en haut de la page */}
          <div className="mb-12 py-6 px-6 bg-[#F8F9FA] rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#003366] mb-4">Spécialités disponibles</h3>
            <div className="flex flex-wrap gap-4">
              {specialites.map((specialite, index) => (
                <a 
                  key={index} 
                  href={`#${specialite.name.toLowerCase().replace(/[, ]/g, '-')}`}
                  className="px-4 py-2 bg-white border border-[#DEE2E6] rounded-md hover:bg-[#E9ECEF] transition-colors"
                >
                  {specialite.name}
                </a>
              ))}
            </div>
          </div>

          {specialites.map((specialite, specialiteIndex) => (
            <div key={specialiteIndex} className="mb-20" id={specialite.name.toLowerCase().replace(/[, ]/g, '-')}>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] border-b-2 border-[#E67E22] pb-2 inline-block">
                  {specialite.name}
                </h2>
                <p className="text-[#343A40]/80 mt-3 max-w-4xl">
                  {specialite.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialite.formations.map((formation, formationIndex) => (
                  <div key={formationIndex} className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="h-48 bg-[#004080] relative overflow-hidden">
                      <img 
                        src={formation.image}
                        alt={formation.title} 
                        className="w-full h-full object-cover transition-all hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-[#E67E22] text-white text-xs font-bold px-2 py-1 rounded">
                        {formation.level}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-[#003366] mb-3">{formation.title}</h3>
                      <p className="text-[#343A40]/80 mb-4 min-h-[60px]">
                        {formation.description}
                      </p>
                      <div className="flex items-center mb-5">
                        <div className="text-[#E67E22] mr-2"><i className="fas fa-clock"></i></div>
                        <span className="text-sm">{formation.duration}</span>
                        <div className="text-[#E67E22] mx-3">|</div>
                        <div className="text-[#E67E22] mr-2"><i className="fas fa-map-marker-alt"></i></div>
                        <span className="text-sm">{formation.location}</span>
                      </div>
                      <a href="#" className="inline-block w-full bg-[#003366] hover:bg-[#004080] text-white py-2 px-4 rounded text-center transition-all font-medium">
                        Détails du programme
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}