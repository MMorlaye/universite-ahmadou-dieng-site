const features = [
  {
    icon: "fas fa-graduation-cap",
    title: "Excellence académique",
    description: "Programmes accrédités et reconnus internationalement"
  },
  {
    icon: "fas fa-flask",
    title: "Recherche innovante",
    description: "Des laboratoires à la pointe de la technologie"
  },
  {
    icon: "fas fa-users",
    title: "Communauté diverse",
    description: "Étudiants et professeurs internationaux"
  },
  {
    icon: "fas fa-globe",
    title: "Partenariats mondiaux",
    description: "Collaboration avec des universités prestigieuses"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="/images/about/about_home_page.jpg" 
                alt="Délégation de l'Université Ahmadou DIENG" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:pl-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-6">À propos de l'Université Ahmadou DIENG</h2>
              <p className="text-lg mb-6 leading-relaxed">
                L'Université Ahmadou DIENG est un établissement d'enseignement supérieur d'excellence, engagé à fournir une éducation de qualité et à préparer les étudiants à devenir des leaders dans leurs domaines respectifs.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Notre mission est de cultiver un environnement d'apprentissage dynamique qui encourage la pensée critique, l'innovation et l'engagement communautaire. Nos programmes sont conçus pour répondre aux besoins du marché du travail local et international.
              </p>
              
              <div className="flex flex-wrap -mx-2">
                {features.map((feature, index) => (
                  <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
                    <div className="flex items-start">
                      <div className="text-[#E67E22] mr-3">
                        <i className={`${feature.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="/histoire" className="inline-block mt-6 text-[#E67E22] font-medium hover:text-[#D35400] transition-all">
                En savoir plus sur notre histoire <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
