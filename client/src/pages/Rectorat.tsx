import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Rectorat() {
  // État pour gérer l'onglet actif (Histoire ou Direction)
  const [activeTab, setActiveTab] = useState<'direction' | 'histoire'>('direction');
  const [location] = useLocation();
  
  useEffect(() => {
    document.title = "Université Ahmadou DIENG - Histoire et Direction";
    // Remettre la page au début lors du chargement
    window.scrollTo(0, 0);
    
    // Détecter l'onglet à afficher depuis l'URL
    if (location.includes("?tab=histoire")) {
      setActiveTab('histoire');
    }
  }, [location]);
  
  // Effet pour l'animation de la frise chronologique
  useEffect(() => {
    if (activeTab === 'histoire') {
      // Sélectionner les éléments nécessaires
      const timelineContainer = document.getElementById('timeline-container');
      const timelineProgress = document.getElementById('timeline-progress');
      const timelineEvents = document.querySelectorAll('#timeline-container > div > div');
      
      // Création de l'intersection observer pour les événements de la frise
      const eventObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
      
      // Observer chaque événement de la frise
      timelineEvents.forEach(event => {
        event.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-1000');
        eventObserver.observe(event);
      });
      
      // Fonction pour mettre à jour la barre de progression
      const updateProgress = () => {
        if (!timelineContainer || !timelineProgress) return;
        
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculer le pourcentage de défilement
        let scrollPercentage = 0;
        
        if (containerTop <= 0) {
          // Si le haut du conteneur a déjà dépassé le haut de la fenêtre
          const visibleHeight = Math.min(containerHeight, windowHeight - containerTop);
          scrollPercentage = (visibleHeight / containerHeight) * 100;
        } else if (containerTop < windowHeight) {
          // Si le conteneur est partiellement visible
          const visibleHeight = windowHeight - containerTop;
          scrollPercentage = (visibleHeight / containerHeight) * 100;
        }
        
        // Limiter à 100%
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);
        
        // Appliquer la hauteur à la barre de progression avec une animation plus douce
        timelineProgress.style.transition = 'height 0.5s ease-out';
        timelineProgress.style.height = `${scrollPercentage}%`;
      };
      
      // Utiliser un throttle pour limiter la fréquence des mises à jour lors du défilement
      let ticking = false;
      const scrollHandler = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateProgress();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      // Écouter l'événement de défilement pour mettre à jour la progression
      window.addEventListener('scroll', scrollHandler, { passive: true });
      
      // Mise à jour initiale
      updateProgress();
      
      // Nettoyage
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        eventObserver.disconnect();
      };
    }
  }, [activeTab]);

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Histoire et Direction</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Découvrez l'histoire, l'équipe dirigeante et l'organisation administrative de l'Université Ahmadou DIENG.
            </p>
          </div>
        </div>
        
        {/* Onglets pour basculer entre Histoire et Direction */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex">
              <button 
                onClick={() => {
                  setActiveTab('direction');
                  // Mettre à jour l'URL sans recharger la page
                  window.history.pushState({}, '', '/rectorat');
                }}
                className={`px-6 py-4 font-medium text-lg transition-colors ${
                  activeTab === 'direction' 
                    ? 'border-b-2 border-[#E67E22] text-[#003366]' 
                    : 'text-gray-500 hover:text-[#003366]'
                }`}
              >
                Direction et Gouvernance
              </button>
              <button 
                onClick={() => {
                  setActiveTab('histoire');
                  // Mettre à jour l'URL sans recharger la page
                  window.history.pushState({}, '', '/rectorat?tab=histoire');
                }}
                className={`px-6 py-4 font-medium text-lg transition-colors ${
                  activeTab === 'histoire' 
                    ? 'border-b-2 border-[#E67E22] text-[#003366]' 
                    : 'text-gray-500 hover:text-[#003366]'
                }`}
              >
                Notre Histoire
              </button>
            </div>
          </div>
        </div>

        {/* Contenu conditionnel basé sur l'onglet actif */}
        {activeTab === 'direction' ? (
          <>
            {/* Message du Président */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">Message de la Fondatrice</h2>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Chers étudiants, chers parents, chers collaborateurs et visiteurs,
                      </p>
                      <p>
                        C'est avec une grande émotion et beaucoup de fierté que je vous accueille sur le site de l'Université Ahmadou DIENG. Notre institution, fruit d'une vision et d'un engagement pour l'éducation de qualité en Guinée, est aujourd'hui une réalité vibrante qui forme les leaders de demain.
                      </p>
                      <p>
                        Lorsque nous avons posé les premières pierres de cette université, notre rêve était de créer un espace où la connaissance, l'innovation et l'excellence seraient accessibles à tous les jeunes Guinéens désireux d'apprendre et de se développer. Aujourd'hui, avec nos trois campus répartis stratégiquement dans le pays, nous sommes heureux de voir ce rêve se réaliser et s'amplifier.
                      </p>
                      <p>
                        Notre université porte le nom d'un homme exceptionnel, Ahmadou DIENG, dont la vision et les valeurs continuent de nous inspirer. Nous nous engageons à perpétuer cet héritage en offrant une formation de qualité qui répond aux défis contemporains tout en restant ancrée dans nos valeurs africaines.
                      </p>
                      <p>
                        À tous nos étudiants actuels et futurs, je vous encourage à saisir chaque opportunité d'apprentissage, à cultiver votre curiosité intellectuelle et à vous préparer à contribuer positivement au développement de notre belle Guinée. Notre équipe pédagogique et administrative est entièrement dévouée à votre réussite.
                      </p>
                      <p>
                        Je remercie chaleureusement tous ceux qui ont contribué et qui continuent de contribuer à cette aventure éducative. Ensemble, nous bâtissons une institution dont notre pays peut être fier.
                      </p>
                      <p className="font-semibold">
                        Hadja Ramatoulaye SOW<br/>
                        Fondatrice de l'Université Ahmadou DIENG
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="w-40 h-40 mx-auto bg-[#E67E22] rounded-full flex items-center justify-center text-white text-6xl mb-4">
                        <i className="fas fa-user"></i>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-2">Hadja Ramatoulaye SOW</h3>
                      <p className="text-center text-gray-600 mb-4">Fondatrice</p>
                      <div className="flex justify-center space-x-4 text-[#003366]">
                        <a href="#" className="hover:text-[#E67E22]">
                          <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-[#E67E22]">
                          <i className="fas fa-envelope text-xl"></i>
                        </a>
                        <a href="#" className="hover:text-[#E67E22]">
                          <i className="fas fa-globe text-xl"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* L'Équipe de Direction */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center text-[#003366]">
                  L'Équipe de Direction
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Direction Fondatrice et Présidence */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/fondatrice.jpg" alt="Hadja Ramatoulaye SOW" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">Hadja Ramatoulaye SOW</h3>
                      <p className="text-center text-gray-600 mb-4">Fondatrice</p>
                      <p className="text-center text-sm text-gray-500">
                        Fondatrice et visionnaire de l'Université Ahmadou DIENG.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/president.jpg" alt="M. Mamadou Pathé DIENG" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">M. Mamadou Pathé DIENG</h3>
                      <p className="text-center text-gray-600 mb-4">PRÉSIDENT</p>
                      <p className="text-center text-sm text-gray-500">
                        Président de l'Université Ahmadou DIENG.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/directeur-general.jpg" alt="M. Thierno Saïdou DIENG" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">M. Thierno Saïdou DIENG</h3>
                      <p className="text-center text-gray-600 mb-4">Directeur Général</p>
                      <p className="text-center text-sm text-gray-500">
                        Directeur Général du Complexe Scolaire Professionnel et Universitaire Ahmadou DIENG.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/directeur-financier.jpg" alt="M. Alaidhy DIENG" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">M. Alaidhy DIENG</h3>
                      <p className="text-center text-gray-600 mb-4">Directeur Financier</p>
                      <p className="text-center text-sm text-gray-500">
                        Directeur Financier du Complexe Scolaire Professionnel et Universitaire Ahmadou DIENG.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/recteur.jpg" alt="Dr Boubacar Koubia Diallo" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">Dr Boubacar Koubia Diallo</h3>
                      <p className="text-center text-gray-600 mb-4">Recteur</p>
                      <p className="text-center text-sm text-gray-500">
                        Recteur Coordinateur général et DG du campus de Bentourayah.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                        <img src="/images/leadership/vice-recteur.jpg" alt="Pr Alpha Oumar Diallo" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-center mb-1">Pr Alpha Oumar Diallo</h3>
                      <p className="text-center text-gray-600 mb-4">Vice-Recteur</p>
                      <p className="text-center text-sm text-gray-500">
                        Vice-recteur chargé de la recherche, et responsable de la CIAQ.
                      </p>
                    </div>
                  </div>






                </div>
              </div>
            </section>

          </>
        ) : (
          /* Section Histoire */
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center text-[#003366]">
                  Notre Histoire
                </h2>
                <p className="text-lg text-center mb-8">
                  Découvrez les moments clés qui ont façonné l'Université Ahmadou DIENG depuis sa création.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 mb-12">
                  <div className="bg-[#003366] text-white p-3 rounded-lg inline-block">
                    <i className="fas fa-landmark mr-2"></i>
                    Établie par l'Arrêté N° 2007/919/ME/MESRS/CAB du 06 mars 2007
                  </div>
                  <p className="text-[#003366] font-medium">
                    L'Université Ahmadou DIENG est officiellement reconnue par l'État guinéen
                  </p>
                </div>
              </div>

              {/* Frise chronologique moderne et responsive */}
              <div className="relative max-w-5xl mx-auto" id="timeline-container">
                {/* Ligne centrale verticale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E67E22]/30">
                  {/* Ligne de progression animée */}
                  <div id="timeline-progress" className="absolute top-0 left-0 w-full bg-[#E67E22] transition-all duration-500" style={{ height: '0%' }}></div>
                </div>
                
                {/* Points clés de l'histoire */}
                <div className="relative z-10">
                  {/* 2007: Fondation */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003366] md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Fondation de l'Université</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">06 mars 2007</p>
                        <p className="text-gray-700">
                          L'Université Ahmadou DIENG (U.A.D) a été créée officiellement par l'Arrêté ministériel N° 2007/919/ME/MESRS/CAB du 06 mars 2007. L'U.A.D est un établissement privé à caractère scientifique et technique sous la tutelle du Ministère de l'Enseignement Supérieur.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-star text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* 2008: Programmes de licence */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#003366] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-graduation-cap text-xs"></i>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-2">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#E67E22] max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Premiers programmes de licence</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2008</p>
                        <p className="text-gray-700">
                          Développement des premiers programmes de licence dans plusieurs domaines d'études, incluant l'informatique, la gestion et les sciences économiques. L'université commence à s'établir comme un acteur important de l'enseignement supérieur en Guinée.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2010: Premier partenariat international */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003366] md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Premier partenariat international</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2010</p>
                        <p className="text-gray-700">
                          Les premiers accords d'échange et de collaboration sont établis avec des universités en Europe et ailleurs en Afrique, renforçant la dimension internationale de notre université et offrant de nouvelles opportunités à nos étudiants.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-globe text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* 2010: Inauguration du campus de Bentourayah */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#003366] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-building text-xs"></i>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-2">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#E67E22] max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Développement du campus de Bentourayah</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2010</p>
                        <p className="text-gray-700">
                          Agrandissement du campus principal à Bentourayah avec des infrastructures modernes, de nouvelles bibliothèques et des laboratoires équipés avec des technologies avancées pour répondre à la demande croissante.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2012: Ouverture du campus de Labé */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003366] md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Ouverture du campus de Labé</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2012</p>
                        <p className="text-gray-700">
                          Face à la demande croissante et dans le cadre de sa mission d'accessibilité à l'éducation, l'Université ouvre son premier campus régional à Labé, permettant d'accueillir un nombre croissant d'étudiants.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-map-marker-alt text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* 2015: Ouverture du campus de Sangoyah */}
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#003366] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-university text-xs"></i>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-2">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#E67E22] max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Ouverture du campus de Sangoyah</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2015</p>
                        <p className="text-gray-700">
                          Poursuite de l'expansion avec l'ouverture d'un troisième campus à Sangoyah, renforçant la présence de l'université sur le territoire guinéen et diversifiant davantage les programmes académiques.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2018: Lancement de l'incubateur d'entreprises */}
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003366] md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">Lancement de l'incubateur d'entreprises</h3>
                        <p className="text-lg font-semibold text-[#E67E22] mb-3">2018</p>
                        <p className="text-gray-700">
                          L'innovation devient un pilier central avec la création d'incubateurs d'entreprises et de laboratoires d'innovation pour encourager les initiatives étudiantes et la recherche appliquée.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold">
                        <i className="fas fa-lightbulb text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}