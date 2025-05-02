import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function Campus() {
  useEffect(() => {
    document.title = "Université Ahmadou DIENG - Nos Campus";
    // Remettre la page au début lors du chargement
    window.scrollTo(0, 0);
  }, []);

  // État pour suivre le campus sélectionné
  const [selectedCampus, setSelectedCampus] = useState(0);

  // Liste des campus
  const campuses = [
    {
      id: 1,
      name: "Campus Bentourayah",
      location: "Bentourayah-Plateau, Manéah, Coyah",
      image: "/images/campus/image1.jpeg",
      description: "Le Campus principal de Bentourayah est l'un des trois Campus de l'Université Ahmadou DIENG. Il est situé dans la Région Administrative de Kindia-Préfecture de Coyah sous-Préfecture de Manéah/ secteur Bentourayah-Plateau à 200 mètres de la route nationale n°1.",
      facilities: [
        "Bibliothèque centrale avec accès aux ressources numériques",
        "Amphithéâtres et salles de cours modernes",
        "Laboratoires scientifiques équipés",
        "Centre informatique avec accès internet haut débit",
        "Installations sportives",
        "Cafétéria et espaces de restauration",
        "Espaces de travail collaboratif",
        "Centre d'accueil et d'orientation"
      ],
      faculties: [
        "Faculté des Sciences",
        "Faculté de Droit et Sciences Politiques",
        "Faculté des Lettres et Sciences Humaines",
        "Faculté d'Économie et Gestion",
        "Faculté de Médecine et Sciences de la Santé"
      ],
      contact: {
        phone: "+224 620 71 73 45 / +224 620 71 73 23",
        email: "contact@univadieng.org",
        hours: "Lundi - Samedi, 9h00 - 17h00"
      }
    },
    {
      id: 2,
      name: "Campus Sangoyah",
      location: "Quartier Sangoyah, Commune de Matoto, Conakry",
      image: "/images/campus/image2.jpeg",
      description: "Ouvert depuis l'année universitaire 2014-2015, le Campus de Sangoyah est l'un des trois campus de l'Université Ahmadou DIENG situé dans la Commune de Matoto au quartier Sangoyah.",
      facilities: [
        "Salles de cours équipées",
        "Laboratoires informatiques",
        "Bibliothèque et centre de documentation",
        "Espace d'études collaboratives",
        "Salles de conférences",
        "Cafétéria",
        "Centre d'orientation professionnelle",
        "Accès internet haut débit"
      ],
      faculties: [
        "Faculté d'Informatique et Sciences du Numérique",
        "Faculté de Management et Commerce",
        "Institut de Formation Continue",
        "Centre de Langues et de Communication"
      ],
      contact: {
        phone: "+224 620 71 73 42 / +224 620 71 73 36",
        email: "contact@univadieng.org",
        hours: "Lundi - Samedi, 9h00 - 17h00"
      }
    },
    {
      id: 3,
      name: "Campus Labé",
      location: "Secteur N'Diolou, Quartier Pountioun, Préfecture de Labé",
      image: "/images/campus/IMG_1150.jpg",
      description: "Situé dans le secteur N'Diolou, Quartier Pountioun, Préfecture de Labé, Région de Labé, ce campus permet à l'Université Ahmadou DIENG d'étendre son enseignement de qualité dans cette région stratégique de la Guinée.",
      facilities: [
        "Salles de cours adaptées",
        "Centre de documentation",
        "Laboratoire informatique",
        "Espaces d'études",
        "Connexion internet",
        "Salle polyvalente",
        "Espace de restauration",
        "Services administratifs"
      ],
      faculties: [
        "Faculté d'Éducation",
        "Institut de Développement Régional",
        "Centre de Formation Professionnelle",
        "Département d'Études Communautaires"
      ],
      contact: {
        phone: "+224 620 71 73 39 / +224 622 94 84 84",
        email: "contact@univadieng.org",
        hours: "Lundi - Samedi, 9h00 - 17h00"
      }
    }
  ];

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nos Campus</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Découvrez les trois campus de l'Université Ahmadou DIENG: des environnements d'étude inspirants et des installations modernes réparties dans différentes régions de Guinée.
            </p>
          </div>
        </div>

        {/* Vue d'ensemble des campus */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
              Un réseau universitaire national
            </h2>
            <p className="text-lg mb-12 max-w-3xl">
              L'Université Ahmadou DIENG dispose de trois campus stratégiquement situés dans différentes régions de la Guinée, offrant ainsi un accès élargi à l'enseignement supérieur et répondant aux besoins spécifiques de chaque région.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {campuses.map((campus, index) => (
                <div 
                  key={campus.id} 
                  className={`border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer ${
                    selectedCampus === index ? 'border-[#E67E22] shadow-md' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedCampus(index)}
                >
                  <div 
                    className="h-48 relative bg-cover bg-center" 
                    style={{ backgroundImage: `url('${campus.image}')` }}
                  >
                    {/* Overlay pour améliorer la lisibilité du texte */}
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Nom du campus sur l'image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-heading font-bold drop-shadow-md">{campus.name}</h3>
                    </div>
                    
                    {selectedCampus === index && (
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#E67E22] flex items-center justify-center text-white shadow-md">
                        <i className="fas fa-check"></i>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2 text-[#E67E22]"></i>
                      <span>{campus.location}</span>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                      {campus.description.substring(0, 120)}...
                    </p>
                    <button 
                      className={`text-sm font-medium py-1 px-4 rounded-full ${selectedCampus === index ? 
                        'bg-[#E67E22] text-white' : 
                        'bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20'
                      } transition-all`}
                      onClick={() => setSelectedCampus(index)}
                    >
                      {selectedCampus === index ? 'Sélectionné' : 'Voir les détails'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Détails du campus sélectionné */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-[#003366]">
              {campuses[selectedCampus].name}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Colonne gauche: Description et galerie */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Présentation</h3>
                  <p className="text-gray-700 mb-4">{campuses[selectedCampus].description}</p>
                  
                  <h4 className="font-heading font-bold mt-6 mb-3">Facultés et Écoles</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {campuses[selectedCampus].faculties.map((faculty, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-graduation-cap text-[#E67E22] mr-2"></i>
                        <span>{faculty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-4">Galerie du campus</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-gray-200 aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <i className="fas fa-image text-2xl"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Colonne droite: Informations pratiques */}
              <div className="lg:col-span-1">
                {/* Équipements et services */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                    <i className="fas fa-building text-[#E67E22] mr-2"></i>
                    Équipements et Services
                  </h3>
                  <ul className="space-y-3">
                    {campuses[selectedCampus].facilities.map((facility, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-[#003366] mt-1 mr-2"></i>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Informations de contact */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                    <i className="fas fa-info-circle text-[#E67E22] mr-2"></i>
                    Contact et Accès
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#003366] mt-1 mr-2"></i>
                      <span>{campuses[selectedCampus].location}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-phone text-[#003366] mt-1 mr-2"></i>
                      <span>{campuses[selectedCampus].contact.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-envelope text-[#003366] mt-1 mr-2"></i>
                      <span>{campuses[selectedCampus].contact.email}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-clock text-[#003366] mt-1 mr-2"></i>
                      <span>{campuses[selectedCampus].contact.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-[#003366] hover:bg-[#00264d] text-white py-2 rounded transition-all font-medium">
                      <i className="fas fa-map-marked-alt mr-2"></i>
                      Voir sur la carte
                    </button>
                  </div>
                </div>
                
                {/* Visites guidées */}
                <div className="bg-[#E67E22]/10 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-3 text-[#E67E22]">
                    Visites guidées
                  </h3>
                  <p className="mb-4">
                    Découvrez notre campus en personne! Des visites guidées sont organisées tous les mercredis et vendredis.
                  </p>
                  <a href="/contact" className="block w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded transition-all font-medium text-center">
                    Réserver une visite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vie sur le campus */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
                  Vie étudiante sur le campus
                </h2>
                <p className="text-lg mb-4">
                  Chacun de nos campus offre un environnement propice à l'épanouissement personnel et académique. Au-delà des études, vous trouverez une vie étudiante riche et dynamique avec des activités culturelles, sportives et associatives.
                </p>
                <p className="text-lg mb-8">
                  Nos installations modernes, espaces de vie conviviaux et services dédiés sont conçus pour vous offrir une expérience universitaire complète et enrichissante.
                </p>
                
                <div className="flex space-x-4">
                  <button className="bg-[#003366] hover:bg-[#00264d] text-white py-2 px-6 rounded-full transition-all font-medium">
                    <i className="fas fa-utensils mr-2"></i>
                    Services aux étudiants
                  </button>

                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-200 aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <i className="fas fa-image text-2xl"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Carte des campus */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center text-[#003366]">
              Nos Campus en Guinée
            </h2>
            <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
              L'Université Ahmadou DIENG est présente dans trois régions stratégiques de la Guinée, offrant un accès facilité à l'enseignement supérieur sur l'ensemble du territoire.
            </p>
            
            <div className="bg-white h-96 rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center text-gray-400">
                  <i className="fas fa-map-marked-alt text-5xl mb-3"></i>
                  <p>Carte des campus en Guinée</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-[#003366]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
              Venez étudier à l'Université Ahmadou DIENG
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Nos campus vous attendent pour vous offrir une formation de qualité dans un environnement stimulant et moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-[#003366] hover:bg-gray-100 py-3 px-8 rounded-full transition-all font-medium inline-flex items-center">
                <i className="fas fa-calendar-alt mr-2"></i>
                Réserver une visite
              </a>
              <a href="/contact" className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-8 rounded-full transition-all font-medium inline-flex items-center">
                <i className="fas fa-user-graduate mr-2"></i>
                Postuler maintenant
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}