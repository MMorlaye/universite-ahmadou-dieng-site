import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Evenements() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Événements";
  }, []);

  // État pour les filtres
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAllPastEvents, setShowAllPastEvents] = useState<boolean>(false);

  // Événements à venir
  const upcomingEvents = [
    {
      id: 1,
      title: "Journée Portes Ouvertes 2023",
      date: "15 octobre 2023",
      time: "9h à 17h",
      location: "Campus principal, Conakry",
      description: "Découvrez notre université, ses filières et rencontrez nos enseignants et étudiants lors de notre journée portes ouvertes annuelle. Visites guidées, conférences et ateliers démonstratifs vous permettront de mieux connaître notre offre de formation.",
      category: "Orientation"
    },
    {
      id: 2,
      title: "Conférence: Économie Circulaire et Développement Durable",
      date: "22 octobre 2023",
      time: "14h à 16h30",
      location: "Amphithéâtre A, Faculté d'Économie",
      description: "Conférence internationale sur les modèles économiques circulaires et leur application dans le contexte africain. Avec la participation d'experts internationaux et de chercheurs spécialisés dans le développement durable.",
      category: "Conférence"
    },
    {
      id: 3,
      title: "Hackathon: Innovation Technologique",
      date: "4-5 novembre 2023",
      time: "48 heures non-stop",
      location: "Centre d'Innovation et d'Entrepreneuriat",
      description: "Compétition intensive de programmation et de création numérique sur le thème des solutions technologiques pour l'agriculture. Ouvert aux étudiants et aux jeunes professionnels.",
      category: "Compétition"
    },
    {
      id: 4,
      title: "Semaine de la Recherche",
      date: "13-17 novembre 2023",
      time: "Horaires variables",
      location: "Divers lieux sur les campus",
      description: "Présentation des travaux de recherche, séminaires et laboratoires ouverts pour découvrir les avancées scientifiques réalisées par nos équipes de recherche.",
      category: "Recherche"
    },
  ];

  // Événements passés
  const allPastEvents = [
    {
      id: 1,
      title: "Nouveaux étudiants",
      date: "2022-2023",
      location: "Campus principal, Conakry",
      description: "Accueil et intégration des nouveaux étudiants pour l'année académique 2022-2023 lors d'une cérémonie officielle.",
      category: "Vie étudiante",
      image: "/images/events/nouveau_etudiant.jpg",
      gallery: ["/images/events/nouveau_etudiant.jpg"]
    },
    {
      id: 2,
      title: "Inscriptions",
      date: "Octobre 2022",
      location: "Tous les campus",
      description: "Période d'inscriptions administrative et pédagogique pour l'année académique 2022-2023.",
      category: "Administration",
      image: "/images/events/inscription.jpg",
      gallery: ["/images/events/inscription.jpg"]
    },
    {
      id: 3,
      title: "Incubateur UAD",
      date: "Mars 2018",
      location: "Campus principal, Conakry",
      description: "Inauguration de l'incubateur d'entreprises de l'Université Ahmadou Dieng pour accompagner les projets innovants des étudiants et diplômés.",
      category: "Innovation",
      image: "/images/events/incubateur.jpg",
      gallery: ["/images/events/incubateur.jpg"]
    },
    {
      id: 4,
      title: "Remise de Diplôme-Labé",
      date: "Février 2023",
      location: "Campus de Labé",
      description: "Cérémonie officielle de remise des diplômes aux étudiants du campus de Labé en présence des autorités locales et académiques.",
      category: "Cérémonie",
      image: "/images/events/remise_diplome_labe.jpg",
      gallery: ["/images/events/remise_diplome_labe.jpg"]
    },
    {
      id: 5,
      title: "Journée Culturelle",
      date: "Janvier 2023",
      location: "Campus principal, Conakry",
      description: "Célébration de la diversité culturelle avec des spectacles, danses traditionnelles et expositions d'art organisés par les associations étudiantes.",
      category: "Culture",
      image: "/images/events/journee_culturelle.jpg",
      gallery: ["/images/events/journee_culturelle.jpg"]
    },
    {
      id: 6,
      title: "Remise de Diplôme",
      date: "Janvier 2023",
      location: "Campus principal, Conakry",
      description: "Cérémonie solennelle de remise des diplômes aux lauréats de l'année académique 2022 au campus principal de Conakry.",
      category: "Cérémonie",
      image: "/images/events/remise_de_diplome_janvier.jpg",
      gallery: ["/images/events/remise_de_diplome_janvier.jpg"]
    },
  ];

  // Filtrer les événements passés en fonction du filtre actif
  const filteredPastEvents = activeFilter === 'all' 
    ? allPastEvents 
    : allPastEvents.filter(event => event.category.toLowerCase() === activeFilter.toLowerCase());
  
  // Nombre d'événements à afficher initialement et ensuite
  const initialEventsCount = 3;
  
  // Les événements à afficher en fonction de l'état showAllPastEvents
  const displayedPastEvents = showAllPastEvents 
    ? filteredPastEvents 
    : filteredPastEvents.slice(0, initialEventsCount);
  
  // Gestion du clic sur les filtres
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setShowAllPastEvents(false);
  };
  
  // Gestion du clic sur "Voir plus d'événements"
  const handleShowMoreClick = () => {
    setShowAllPastEvents(true);
  };
  
  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Événements</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Découvrez tous les événements organisés par l'Université Ahmadou Dieng: conférences, ateliers, compétitions et célébrations.
            </p>
          </div>
        </div>

        {/* Événements à venir */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-[#003366]">
              Événements à venir
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-heading font-bold text-[#003366]">{event.title}</h3>
                      <span className="bg-[#E67E22]/10 text-[#E67E22] text-sm font-medium py-1 px-3 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <i className="far fa-clock mr-2"></i>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filtres */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleFilterClick('all')}
                className={`${activeFilter === 'all' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Tous les événements
              </button>
              <button 
                onClick={() => handleFilterClick('vie étudiante')}
                className={`${activeFilter === 'vie étudiante' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Vie étudiante
              </button>
              <button 
                onClick={() => handleFilterClick('académique')}
                className={`${activeFilter === 'académique' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Académique
              </button>
              <button 
                onClick={() => handleFilterClick('culture')}
                className={`${activeFilter === 'culture' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Culture
              </button>
              <button 
                onClick={() => handleFilterClick('administration')}
                className={`${activeFilter === 'administration' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Administration
              </button>
              <button 
                onClick={() => handleFilterClick('innovation')}
                className={`${activeFilter === 'innovation' ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} py-2 px-4 rounded-full transition-all`}
              >
                Innovation
              </button>
            </div>
          </div>
        </section>

        {/* Événements passés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-[#003366]">
              Événements passés
            </h2>
            
            {displayedPastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPastEvents.map((event) => (
                  <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="h-48 bg-gray-200 relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-heading font-bold">{event.title}</h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <i className="far fa-calendar-alt mr-2"></i>
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#E67E22] font-medium">{event.category}</span>
                        <button className="text-[#003366] hover:text-[#00264d] text-sm font-medium transition-all">
                          Voir les photos
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <i className="fas fa-calendar-times text-gray-300 text-5xl mb-4"></i>
                <p className="text-xl text-gray-500">Aucun événement passé ne correspond à ce filtre.</p>
              </div>
            )}
            
            {!showAllPastEvents && filteredPastEvents.length > initialEventsCount && (
              <div className="mt-10 text-center">
                <button 
                  onClick={handleShowMoreClick}
                  className="border border-[#003366] text-[#003366] hover:bg-[#003366]/5 py-2 px-6 rounded-full transition-all font-medium"
                >
                  Voir plus d'événements
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Calendrier des événements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center text-[#003366]">
              Calendrier Universitaire
            </h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-4 text-[#003366]">Premier Semestre</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">2 octobre 2023</span>
                    <p className="text-gray-600">Rentrée universitaire et accueil des nouveaux étudiants</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">9 octobre 2023</span>
                    <p className="text-gray-600">Début des cours du premier semestre</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">20 décembre 2023</span>
                    <p className="text-gray-600">Début des vacances de Noël</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">8 janvier 2024</span>
                    <p className="text-gray-600">Reprise des cours</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">15-26 janvier 2024</span>
                    <p className="text-gray-600">Période d'examens du premier semestre</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-4 text-[#003366]">Deuxième Semestre</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">5 février 2024</span>
                    <p className="text-gray-600">Début des cours du deuxième semestre</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">25 mars - 5 avril 2024</span>
                    <p className="text-gray-600">Vacances de printemps</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">8 avril 2024</span>
                    <p className="text-gray-600">Reprise des cours</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">20 mai - 31 mai 2024</span>
                    <p className="text-gray-600">Période d'examens du deuxième semestre</p>
                  </div>
                  <div className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">15 juin 2024</span>
                    <p className="text-gray-600">Cérémonie de remise des diplômes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organisez votre événement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#003366]/5 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#003366]">
                    Organisez votre événement à l'Université
                  </h2>
                  <p className="text-lg mb-6">
                    L'Université Ahmadou Dieng met à disposition ses espaces pour l'organisation de conférences, séminaires et événements professionnels ou culturels.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#E67E22] mt-1 mr-2"></i>
                      <span>Amphithéâtres modernes de 100 à 500 places</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#E67E22] mt-1 mr-2"></i>
                      <span>Salles de conférence équipées de matériel audiovisuel</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#E67E22] mt-1 mr-2"></i>
                      <span>Espace d'exposition de 1000m²</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#E67E22] mt-1 mr-2"></i>
                      <span>Service de restauration sur place</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="bg-[#E67E22] hover:bg-[#D35400] text-white py-2 px-6 rounded-full transition-all font-medium inline-block">
                    Demander un devis
                  </Link>
                </div>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">
                    <i className="fas fa-building text-5xl mb-2 block text-center"></i>
                    <p className="text-center">Image des installations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}