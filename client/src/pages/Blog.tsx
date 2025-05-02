import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Blog";
    window.scrollTo(0, 0);
  }, []);

  // Articles de blog fictifs
  const blogPosts = [
    {
      id: 1,
      title: "La recherche scientifique en Guinée: défis et perspectives",
      excerpt: "Analyse des enjeux de la recherche scientifique dans le contexte guinéen et des opportunités de développement.",
      date: "28 septembre 2023",
      author: "Dr. Mamadou Bah",
      category: "Recherche",
      image: "research.jpg",
      readTime: "8 min de lecture"
    },
    {
      id: 2,
      title: "Témoignage: Mon expérience d'échange universitaire au Canada",
      excerpt: "Fatou Camara, étudiante en relations internationales, partage son expérience enrichissante d'échange à l'Université de Montréal.",
      date: "20 septembre 2023",
      author: "Fatou Camara",
      category: "Vie étudiante",
      image: "exchange.jpg",
      readTime: "5 min de lecture"
    },
    {
      id: 3,
      title: "L'intelligence artificielle au service du développement agricole",
      excerpt: "Découvrez comment les technologies d'IA développées par notre université transforment les pratiques agricoles en Guinée.",
      date: "15 septembre 2023",
      author: "Pr. Ibrahim Touré",
      category: "Innovation",
      image: "ai-agriculture.jpg",
      readTime: "10 min de lecture"
    },
    {
      id: 4,
      title: "Entretien avec Amadou Diallo, entrepreneur et ancien de l'UAD",
      excerpt: "Portrait d'un ancien étudiant devenu entrepreneur à succès dans le domaine des énergies renouvelables.",
      date: "8 septembre 2023",
      author: "Rédaction UAD",
      category: "Alumni",
      image: "entrepreneur.jpg",
      readTime: "7 min de lecture"
    },
    {
      id: 5,
      title: "Résumé de la conférence sur le changement climatique",
      excerpt: "Retour sur les moments forts de la conférence internationale sur le changement climatique en Afrique de l'Ouest.",
      date: "1 septembre 2023",
      author: "Dr. Aïssatou Diallo",
      category: "Événements",
      image: "climate-conference.jpg",
      readTime: "6 min de lecture"
    },
    {
      id: 6,
      title: "Nouveaux partenariats académiques: opportunités pour nos étudiants",
      excerpt: "Présentation des nouveaux partenariats signés avec des universités en Europe et en Amérique du Nord.",
      date: "25 août 2023",
      author: "Bureau des Relations Internationales",
      category: "Partenariats",
      image: "partnerships.jpg",
      readTime: "4 min de lecture"
    },
  ];

  // Catégories pour le filtrage
  const categories = [
    "Tous", "Recherche", "Vie étudiante", "Innovation", "Alumni", "Événements", "Partenariats"
  ];
  
  // Fonction de filtrage des articles
  const filteredPosts = blogPosts.filter(post => {
    // Filtre par catégorie
    const categoryMatch = activeCategory === "Tous" || post.category === activeCategory;
    
    // Filtre par recherche (titre, extrait, auteur)
    const searchTerms = searchQuery.toLowerCase().trim();
    const searchMatch = searchTerms === "" || 
      post.title.toLowerCase().includes(searchTerms) ||
      post.excerpt.toLowerCase().includes(searchTerms) ||
      post.author.toLowerCase().includes(searchTerms);
    
    return categoryMatch && searchMatch;
  });
  
  // Calcul du nombre total de pages
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  
  // Ajustement de la page courante si nécessaire
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [activeCategory, searchQuery, totalPages, currentPage]);
  
  // Obtention des articles pour la page actuelle
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  
  // Navigation entre les pages
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.getElementById("blog-articles")?.offsetTop || 0,
      behavior: "smooth"
    });
  };
  
  // Pour générer les numéros de page
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxPageButtons = 5; // Nombre maximal de boutons de page à afficher
    
    if (totalPages <= maxPageButtons) {
      // Afficher tous les numéros de page si leur nombre est inférieur ou égal au max
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Gérer les cas où il y a plus de pages que de boutons
      let startPage: number;
      let endPage: number;
      
      if (currentPage <= Math.floor(maxPageButtons / 2) + 1) {
        // Si on est près du début
        startPage = 1;
        endPage = maxPageButtons - 1;
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
        pageNumbers.push('ellipsis');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxPageButtons / 2)) {
        // Si on est près de la fin
        startPage = totalPages - (maxPageButtons - 2);
        endPage = totalPages;
        pageNumbers.push(1);
        pageNumbers.push('ellipsis');
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
      } else {
        // Si on est au milieu
        startPage = currentPage - Math.floor((maxPageButtons - 3) / 2);
        endPage = currentPage + Math.floor((maxPageButtons - 3) / 2);
        pageNumbers.push(1);
        pageNumbers.push('ellipsis');
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
        pageNumbers.push('ellipsis');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Blog Universitaire</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Actualités, articles de fond, témoignages et analyses sur la vie universitaire et la recherche à l'Université Ahmadou Dieng.
            </p>
          </div>
        </div>

        {/* Articles mis en avant */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article principal */}
              <div className="md:col-span-2 bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-72 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <i className="fas fa-newspaper text-5xl"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="bg-[#E67E22]/10 text-[#E67E22] py-1 px-2 rounded-full font-medium mr-3">
                      {blogPosts[0].category}
                    </span>
                    <span className="mr-3">{blogPosts[0].date}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold mb-3 text-[#003366] hover:text-[#E67E22] transition-colors">
                    <Link href={`/article/${blogPosts[0].id}`}>{blogPosts[0].title}</Link>
                  </h2>
                  <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center mr-2">
                        <i className="fas fa-user text-sm"></i>
                      </div>
                      <span className="text-sm font-medium">{blogPosts[0].author}</span>
                    </div>
                    <Link href={`/article/${blogPosts[0].id}`} className="text-[#003366] hover:text-[#E67E22] font-medium flex items-center transition-colors">
                      Lire l'article
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Articles secondaires */}
              <div className="md:col-span-1 space-y-6">
                {blogPosts.slice(1, 3).map((post) => (
                  <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-600 mb-2">
                        <span className="bg-[#E67E22]/10 text-[#E67E22] py-1 px-2 rounded-full font-medium mr-2">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-heading font-bold mb-2 text-[#003366] hover:text-[#E67E22] transition-colors">
                        <Link href={`/article/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">{post.readTime}</span>
                        <Link href={`/article/${post.id}`} className="text-[#003366] hover:text-[#E67E22] text-sm font-medium transition-colors">
                          Lire
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filtres */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`py-2 px-4 rounded-full ${category === activeCategory ? 'bg-[#003366] text-white' : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#003366]/5'} transition-all`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="mt-8 relative max-w-md mx-auto">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Rechercher un article..." 
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#003366]"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </section>

        {/* Liste des articles */}
        <section id="blog-articles" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-[#003366]">
              {activeCategory === "Tous" ? "Articles Récents" : `Articles - ${activeCategory}`}
              {searchQuery && <span className="ml-2 text-lg font-normal text-gray-500">Résultats pour "{searchQuery}"</span>}
            </h2>
            
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <i className="fas fa-image text-3xl"></i>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#E67E22] text-white text-xs py-1 px-2 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3 text-[#003366] hover:text-[#E67E22] transition-colors">
                        <Link href={`/article/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center mr-2">
                            <i className="fas fa-user text-sm"></i>
                          </div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <Link href={`/article/${post.id}`} className="text-[#003366] hover:text-[#E67E22] font-medium text-sm transition-colors">
                          Lire l'article
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <i className="fas fa-newspaper text-gray-300 text-5xl mb-4"></i>
                <p className="text-xl text-gray-500">Aucun article ne correspond à vos critères de recherche.</p>
              </div>
            )}
            
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button 
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${currentPage > 1 ? 'hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}`}
                    disabled={currentPage === 1}
                  >
                    <i className="fas fa-chevron-left text-[#003366]"></i>
                  </button>
                  
                  {getPageNumbers().map((pageNumber, index) => (
                    pageNumber === 'ellipsis' ? (
                      <span key={`ellipsis-${index}`} className="mx-1">...</span>
                    ) : (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(Number(pageNumber))}
                        className={`w-9 h-9 rounded-md ${currentPage === pageNumber ? 'bg-[#003366] text-white' : 'border hover:bg-gray-50'} flex items-center justify-center`}
                      >
                        {pageNumber}
                      </button>
                    )
                  ))}
                  
                  <button 
                    onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${currentPage < totalPages ? 'hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}`}
                    disabled={currentPage === totalPages}
                  >
                    <i className="fas fa-chevron-right text-[#003366]"></i>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>

        {/* Abonnement newsletter */}
        <section className="py-16 bg-[#003366]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#003366]">
                Restez informé
              </h2>
              <p className="text-lg mb-8">
                Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités de l'université directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003366]"
                />
                <button className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-6 rounded-lg transition-all font-medium">
                  S'abonner
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nous respectons votre vie privée. Désabonnez-vous à tout moment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}