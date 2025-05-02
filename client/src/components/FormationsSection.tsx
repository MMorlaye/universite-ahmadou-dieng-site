import { Link } from "wouter";

// Organisation des formations par spécialité - exporté pour être réutilisé dans le Catalogue
export const specialites = [
  {
    name: "DROIT, ÉCONOMIE, GESTION",
    description: "Des formations de haut niveau dans les domaines du droit, de l'économie et de la gestion pour former les futurs cadres et dirigeants d'entreprises.",
    formations: [
      {
        title: "Économie",
        description: "Formation générale en sciences économiques, analyse des marchés et politiques économiques.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1710&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Finance (Banque et Assurance)",
        description: "Formation spécialisée en finance avec options en banque et assurance.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Commerce International/Douanes",
        description: "Formation axée sur le commerce international et les procédures douanières.",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Administration des Affaires",
        description: "Formation complète en administration et gestion des entreprises.",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1869&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Management",
        description: "Formation en management général et stratégie d'entreprise.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "2 ans",
        location: "Campus Principal",
        level: "Master"
      },
      {
        title: "Sciences Comptables",
        description: "Formation en comptabilité, audit et contrôle de gestion.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1711&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Banques & Assurances",
        description: "Formation spécialisée en gestion bancaire et assurances.",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      },
      {
        title: "Droit",
        description: "Formation en droit privé, public et international.",
        image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Principal",
        level: "Licence"
      }
    ]
  },
  {
    name: "SCIENCES HUMAINES ET SOCIALES",
    description: "Des formations pour comprendre les sociétés humaines et les interactions sociales, culturelles et politiques.",
    formations: [
      {
        title: "Sociologie",
        description: "Formation en analyse des phénomènes sociaux contemporains.",
        image: "https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Sciences Humaines",
        level: "Licence"
      },
      {
        title: "Administration Publique",
        description: "Formation en administration et gestion des services publics.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Sciences Humaines",
        level: "Licence"
      }
    ]
  },
  {
    name: "SCIENCES, TECHNOLOGIES, SANTÉ",
    description: "Des formations à la pointe de la recherche scientifique, technologique et médicale pour répondre aux défis du monde contemporain.",
    formations: [
      {
        title: "Biologie",
        description: "Formation en sciences biologiques et biotechnologies.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        duration: "3 ans",
        location: "Campus Sciences",
        level: "Licence"
      },
      {
        title: "Santé Publique",
        description: "Formation en promotion de la santé et prévention des maladies.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Médical",
        level: "Licence"
      },
      {
        title: "Technologie Biomédicale",
        description: "Formation en techniques d'analyse et d'imagerie médicale.",
        image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "3 ans",
        location: "Campus Médical",
        level: "Licence"
      },
      {
        title: "Gestion des structures de Santé",
        description: "Formation en management des établissements de santé.",
        image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        duration: "2 ans",
        location: "Campus Médical",
        level: "Master"
      },
      {
        title: "Sage femme",
        description: "Formation aux soins obstétricaux et à l'accompagnement de la naissance.",
        image: "https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        duration: "3 ans",
        location: "Campus Médical",
        level: "Licence Pro"
      },
      {
        title: "Technicien de laboratoire",
        description: "Formation aux techniques d'analyses biologiques et médicales.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "2 ans",
        location: "Campus Médical",
        level: "BTS"
      },
      {
        title: "Infirmier d'État",
        description: "Formation aux soins infirmiers et à la prise en charge des patients.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        duration: "3 ans",
        location: "Campus Médical",
        level: "Licence Pro"
      }
    ]
  },
  {
    name: "INGÉNIERIE",
    description: "Des formations d'excellence en ingénierie pour former les professionnels capables de relever les défis technologiques et industriels du futur.",
    formations: [
      {
        title: "Mines",
        description: "Formation en exploitation et gestion des ressources minières.",
        image: "https://images.unsplash.com/photo-1530709223910-b48dc705f416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Géologie",
        description: "Formation en sciences de la Terre et exploration géologique.",
        image: "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Génie Civil et Architecture",
        description: "Formation en conception et réalisation d'ouvrages de construction.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Génie Informatique",
        description: "Formation en développement logiciel et systèmes informatiques.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Génie Électrique",
        description: "Formation en systèmes électriques et électroniques.",
        image: "https://images.unsplash.com/photo-1620283085378-5df6b7a8bd4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "MIAGE",
        description: "Formation en méthodes informatiques appliquées à la gestion d'entreprise.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Télécommunications",
        description: "Formation en systèmes et réseaux de télécommunications.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "5 ans",
        location: "Campus Ingénierie",
        level: "Ingénieur"
      },
      {
        title: "Comptabilité Gestion",
        description: "Formation en techniques comptables et gestion financière.",
        image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        duration: "2 ans",
        location: "Campus Principal",
        level: "BTS"
      },
      {
        title: "Informatique Gestion",
        description: "Formation en informatique appliquée à la gestion d'entreprise.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
        duration: "2 ans",
        location: "Campus Principal",
        level: "BTS"
      },
      {
        title: "Douane Transit",
        description: "Formation aux procédures douanières et logistique internationale.",
        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "2 ans",
        location: "Campus Principal",
        level: "BTS"
      },
      {
        title: "Banques Finances Assurances",
        description: "Formation aux métiers de la banque, de la finance et de l'assurance.",
        image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "2 ans",
        location: "Campus Principal",
        level: "BTS"
      },
      {
        title: "Minage",
        description: "Formation aux techniques d'extraction minière.",
        image: "https://images.unsplash.com/photo-1599153816797-a3e6c3fb5f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        duration: "2 ans",
        location: "Campus Ingénierie",
        level: "BTS"
      },
      {
        title: "Échantillonnage",
        description: "Formation aux techniques de prélèvement et d'analyse d'échantillons.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        duration: "2 ans",
        location: "Campus Ingénierie",
        level: "BTS"
      },
      {
        title: "Sondage Forage",
        description: "Formation aux techniques de forage et d'exploration du sous-sol.",
        image: "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        duration: "2 ans",
        location: "Campus Ingénierie",
        level: "BTS"
      }
    ]
  }
];

// Sélection de 3 formations phares pour la page d'accueil
const formationsPhares = [
  {
    title: "Génie Informatique",
    description: "Formation d'excellence en développement logiciel, systèmes et réseaux informatiques pour les futurs ingénieurs du numérique.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    duration: "5 ans",
    location: "Campus Ingénierie",
    level: "Ingénieur"
  },
  {
    title: "Finance (Banque et Assurance)",
    description: "Formation spécialisée en finance avec expertise en gestion bancaire et en analyse des risques pour le secteur de l'assurance.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    duration: "3 ans",
    location: "Campus Principal",
    level: "Licence"
  },
  {
    title: "Santé Publique",
    description: "Formation d'avenir en promotion de la santé et prévention des maladies pour contribuer aux défis mondiaux de santé publique.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    duration: "3 ans",
    location: "Campus Médical",
    level: "Licence"
  }
];

export default function FormationsSection() {
  return (
    <section id="formations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-4">Nos Formations</h2>
          <p className="text-lg text-[#343A40]/70 max-w-2xl mx-auto">
            Découvrez nos programmes académiques conçus pour répondre aux besoins du marché du travail et favoriser l'excellence professionnelle.
          </p>
        </div>
        
        {/* Affichage des 3 formations phares uniquement sur la page d'accueil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {formationsPhares.map((formation, index) => (
            <div key={index} className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
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
                <p className="text-[#343A40]/80 mb-4 min-h-[80px]">
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
        
        {/* Bouton pour voir le catalogue complet */}
        <div className="text-center mt-8">
          <button 
            className="inline-block bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-8 rounded-full transition-all font-medium"
            onClick={() => window.location.href = "/catalogue"}
          >
            Découvrir notre catalogue de formations
          </button>
        </div>
      </div>
    </section>
  );
}
