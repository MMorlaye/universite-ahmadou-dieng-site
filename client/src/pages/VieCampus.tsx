import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function VieCampus() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Vie de Campus";
  }, []);

  // Services et activités étudiantes
  const studentServices = [
    {
      title: "Associations Étudiantes",
      icon: "fas fa-users",
      description: "Plus de 30 associations et clubs étudiants couvrant des activités culturelles, sportives, académiques et humanitaires."
    },
    {
      title: "Sport Universitaire",
      icon: "fas fa-futbol",
      description: "Installations sportives modernes et équipes compétitives dans plusieurs disciplines (football, basket-ball, athlétisme, etc.)."
    },
    {
      title: "Service d'Orientation",
      icon: "fas fa-compass",
      description: "Accompagnement personnalisé pour votre parcours académique et votre future carrière professionnelle."
    },
    {
      title: "Services Numériques",
      icon: "fas fa-laptop",
      description: "Accès à des ressources numériques, Wi-Fi sur le campus et outils collaboratifs pour faciliter les études."
    },
    {
      title: "Restauration",
      icon: "fas fa-utensils",
      description: "Restaurants et cafétérias proposant des repas équilibrés à tarifs adaptés aux étudiants."
    },
    {
      title: "Santé et Bien-être",
      icon: "fas fa-heartbeat",
      description: "Centre de santé universitaire, services de soutien psychologique et activités de bien-être."
    },
    {
      title: "Bibliothèques",
      icon: "fas fa-book",
      description: "Espaces d'étude modernes avec une vaste collection d'ouvrages et accès à des ressources numériques."
    },
    {
      title: "Activités Culturelles",
      icon: "fas fa-theater-masks",
      description: "Programmation culturelle riche: théâtre, musique, expositions et festivals tout au long de l'année."
    }
  ];

  // Témoignages d'étudiants
  const testimonials = [
    {
      name: "Aissatou Balde",
      program: "Sciences Politiques, 3ème année",
      quote: "La vie associative à l'UAD m'a permis de développer des compétences en leadership tout en me faisant des amis pour la vie. Mon expérience universitaire va bien au-delà des salles de classe!"
    },
    {
      name: "Ousmane Sylla",
      program: "Génie Informatique, 4ème année",
      quote: "Entre mes cours, mon club de robotique et les événements du campus, ma vie étudiante est incroyablement enrichissante. Les infrastructures sportives sont aussi un excellent moyen de décompresser."
    },
    {
      name: "Mariama Condé",
      program: "Sciences de la Santé, 2ème année",
      quote: "Les activités extra-scolaires et les événements universitaires sont une source d'enrichissement personnel. L'ambiance sur le campus est studieuse mais conviviale, ce qui est parfait pour s'épanouir."
    }
  ];

  // Événements annuels
  const annualEvents = [
    {
      name: "Semaine d'Intégration",
      period: "Début octobre",
      description: "Activités d'accueil et d'intégration pour les nouveaux étudiants."
    },
    {
      name: "Festival Culturel Universitaire",
      period: "Novembre",
      description: "Célébration de la diversité culturelle avec des spectacles, expositions et dégustations."
    },
    {
      name: "Tournoi Sportif Inter-facultés",
      period: "Février",
      description: "Compétitions sportives entre les différentes facultés de l'université."
    },
    {
      name: "Journées Carrières",
      period: "Mars",
      description: "Rencontres avec des employeurs et ateliers de préparation professionnelle."
    },
    {
      name: "Printemps des Arts",
      period: "Avril",
      description: "Festival des arts et de la création étudiante."
    },
    {
      name: "Gala de Fin d'Année",
      period: "Juin",
      description: "Célébration des réussites étudiantes et remise de prix d'excellence."
    }
  ];

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Vie de Campus</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Découvrez la richesse de la vie étudiante à l'Université Ahmadou Dieng: activités, services et opportunités pour une expérience universitaire épanouissante.
            </p>
          </div>
        </div>

        {/* Introduction vidéo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
                  Bienvenue sur nos campus
                </h2>
                <p className="text-lg mb-4">
                  L'Université Ahmadou Dieng offre bien plus qu'une simple formation académique. Nos campus sont des lieux de vie, d'échanges et de développement personnel où les étudiants peuvent s'épanouir pleinement.
                </p>
                <p className="text-lg mb-6">
                  Avec des infrastructures modernes, une vie associative dynamique et des services adaptés, nous nous efforçons de créer un environnement propice à l'apprentissage, à l'innovation et à l'épanouissement personnel.
                </p>
                <button className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-6 rounded-full transition-all font-medium flex items-center">
                  <i className="fas fa-film mr-2"></i>
                  Découvrir notre campus en vidéo
                </button>
              </div>
              <div className="bg-gray-200 rounded-lg h-72 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <i className="fas fa-play-circle text-5xl mb-2"></i>
                  <p>Vidéo de présentation du campus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services aux étudiants */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center text-[#003366]">
              Services et Activités Étudiantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studentServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] text-xl mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie de photos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
              La Vie sur le Campus en Images
            </h2>
            <p className="text-lg mb-12 max-w-3xl">
              Découvrez l'atmosphère unique et dynamique de nos campus à travers ces images de la vie étudiante.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-gray-200 aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <i className="fas fa-image text-2xl"></i>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="border border-[#003366] text-[#003366] hover:bg-[#003366]/5 py-2 px-6 rounded-full transition-all font-medium">
                Voir plus de photos
              </button>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-[#003366]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center text-[#003366]">
              Paroles d'Étudiants
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-[#E67E22] text-2xl mb-4">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#003366] flex items-center justify-center text-white mr-4">
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.program}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Événements annuels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-[#003366]">
              Événements Annuels
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {annualEvents.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-[#E67E22] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold">{event.name}</h3>
                    <span className="bg-[#003366]/10 text-[#003366] text-sm font-medium py-1 px-3 rounded-full">
                      {event.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Associations étudiantes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
                  Rejoignez nos associations
                </h2>
                <p className="text-lg mb-4">
                  Les associations et clubs étudiants sont au cœur de la vie sur le campus. Ils vous permettent de poursuivre vos passions, de développer de nouvelles compétences et de vous constituer un réseau.
                </p>
                <p className="text-lg mb-6">
                  Que vous soyez intéressé par le sport, les arts, l'entrepreneuriat, l'action humanitaire ou les activités académiques, vous trouverez certainement un groupe qui correspond à vos intérêts.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-[#E67E22] flex items-center justify-center text-white mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Développez vos compétences</h4>
                      <p className="text-gray-600">Leadership, travail d'équipe, gestion de projet...</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-[#E67E22] flex items-center justify-center text-white mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Élargissez votre réseau</h4>
                      <p className="text-gray-600">Rencontrez des étudiants partageant vos intérêts</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-[#E67E22] flex items-center justify-center text-white mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Enrichissez votre CV</h4>
                      <p className="text-gray-600">Valorisez votre engagement extra-académique</p>
                    </div>
                  </div>
                </div>
                

              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-3">
                      <i className="fas fa-users text-xl"></i>
                    </div>
                    <h4 className="font-heading font-bold mb-1">Association {index + 1}</h4>
                    <p className="text-gray-600 text-sm">Description brève</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 bg-[#003366]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
              Prêt à rejoindre notre communauté ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Découvrez tous les aspects de notre vie de campus en personne lors d'une visite guidée ou postulez dès maintenant pour rejoindre notre communauté universitaire dynamique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#003366] hover:bg-gray-100 py-3 px-8 rounded-full transition-all font-medium">
                Planifier une visite
              </button>
              <button className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-8 rounded-full transition-all font-medium">
                Candidater maintenant
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}