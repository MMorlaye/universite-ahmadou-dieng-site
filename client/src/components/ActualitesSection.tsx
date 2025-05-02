const actualites = [
  {
    title: "Conférence Internationale sur l'Intelligence Artificielle",
    description: "L'Université Ahmadou DIENG accueillera une conférence internationale sur les avancées en intelligence artificielle et apprentissage machine.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "15 Octobre 2023",
    category: "Événement"
  },
  {
    title: "Inauguration du Nouveau Laboratoire de Recherche",
    description: "Un nouveau laboratoire de recherche en biotechnologie vient d'être inauguré, renforçant nos capacités de recherche.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "8 Septembre 2023",
    category: "Actualité"
  },
  {
    title: "Cérémonie de Remise des Diplômes 2023",
    description: "Plus de 1500 étudiants ont reçu leur diplôme lors de la cérémonie annuelle qui s'est tenue sur le campus principal.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "25 Août 2023",
    category: "Événement"
  }
];

export default function ActualitesSection() {
  return (
    <section id="actualites" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-4">Actualités et Événements</h2>
          <p className="text-lg text-[#343A40]/70 max-w-2xl mx-auto">
            Restez informé des dernières actualités et des événements à venir à l'Université Ahmadou DIENG.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actualite, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={actualite.image}
                  alt={actualite.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-[#E67E22] font-medium">
                    <i className="far fa-calendar-alt mr-1"></i> {actualite.date}
                  </span>
                  <span className="mx-2 text-[#343A40]/30">|</span>
                  <span className="text-sm text-[#343A40]/70">{actualite.category}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#003366] mb-3">{actualite.title}</h3>
                <p className="text-[#343A40]/80 mb-4">
                  {actualite.description}
                </p>
                <a href="/blog" className="text-[#E67E22] font-medium hover:text-[#D35400] transition-all">
                  Lire la suite <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog" className="inline-block bg-white border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white py-3 px-8 rounded-full transition-all font-medium">
            Toutes les actualités
          </a>
        </div>
      </div>
    </section>
  );
}
