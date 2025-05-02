import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Gouvernance() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Gouvernance";
  }, []);

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Gouvernance Universitaire</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Découvrez les instances de gouvernance et les principes directeurs de l'Université Ahmadou Dieng.
            </p>
          </div>
        </div>

        {/* Nos valeurs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center text-[#003366]">
              Nos Valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] text-2xl mb-4">
                  <i className="fas fa-medal"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans tous nos programmes académiques, nos recherches et nos services administratifs.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] text-2xl mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous encourageons la créativité, l'entrepreneuriat et l'adoption de nouvelles approches pour résoudre les défis contemporains.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] text-2xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Intégrité</h3>
                <p className="text-gray-600">
                  Nous maintenons les plus hauts standards d'éthique et de responsabilité dans toutes nos activités.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] text-2xl mb-4">
                  <i className="fas fa-globe-africa"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Inclusion</h3>
                <p className="text-gray-600">
                  Nous valorisons la diversité des perspectives et promouvons un environnement où chacun se sent respecté et inclus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structure de Gouvernance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center text-[#003366]">Gouvernance de l'Université</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              L'Université Ahmadou DIENG repose sur une structure de gouvernance efficace permettant d'assurer la qualité de l'enseignement et le bon fonctionnement de l'institution.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="text-xl font-bold text-[#003366] text-center mb-4">Niveau Supérieur</h3>
                <ul className="space-y-3">
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">1</span>
                    <span>Conseil d'Administration</span>
                  </li>
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">2</span>
                    <span>Conseil d'Université</span>
                  </li>
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">3</span>
                    <span>Rectorat</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  <i className="fas fa-university"></i>
                </div>
                <h3 className="text-xl font-bold text-[#003366] text-center mb-4">Niveau Académique</h3>
                <ul className="space-y-3">
                  <li className="p-2 bg-orange-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center text-xs mr-2">4</span>
                    <span>Conseil de Campus</span>
                  </li>
                  <li className="p-2 bg-orange-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center text-xs mr-2">5</span>
                    <span>Facultés</span>
                  </li>
                  <li className="p-2 bg-orange-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center text-xs mr-2">6</span>
                    <span>Départements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="text-xl font-bold text-[#003366] text-center mb-4">Niveau Administratif</h3>
                <ul className="space-y-3">
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">7</span>
                    <span>Secrétariat Général</span>
                  </li>
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">8</span>
                    <span>Services Administratifs</span>
                  </li>
                  <li className="p-2 bg-blue-50 rounded-md flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs mr-2">9</span>
                    <span>Services Techniques</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-[#003366]">
              Instances de Gouvernance
            </h2>
            
            <div className="space-y-12">
              {/* Conseil d'Administration */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center text-[#003366]">
                  <i className="fas fa-users mr-3 text-[#E67E22]"></i> Conseil d'Administration
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="mb-4">
                      Le Conseil d'Administration est l'instance suprême de gouvernance de l'Université Ahmadou Dieng. Il est composé de représentants du ministère de l'Enseignement Supérieur, de la communauté universitaire, du secteur privé et de la société civile. Il se réunit quatre fois par an pour discuter et décider des orientations stratégiques de l'université.
                    </p>
                    <p>
                      Le Conseil est présidé par Dr. Abdoulaye Barry, personnalié respecteé du monde académique et ancien ministre de l'Enseignement Supérieur. Sous sa direction, le Conseil veille à la bonne gestion des ressources de l'université et à l'alignement de ses activités avec sa mission et sa vision.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3">Principales Attributions</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Définir les orientations stratégiques</li>
                        <li>Approuver le budget annuel</li>
                        <li>Superviser les performances institutionnelles</li>
                        <li>Nommer les membres de la haute direction</li>
                        <li>Approuver les partenariats stratégiques</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseil Académique */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center text-[#003366]">
                  <i className="fas fa-graduation-cap mr-3 text-[#E67E22]"></i> Conseil Académique
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="mb-4">
                      Le Conseil Académique est responsable de toutes les questions relatives aux programmes d'enseignement, à la recherche et aux affaires étudiantes. Il est composé du Recteur, des Vice-Recteurs, des Doyens des facultés, des Directeurs d'écoles et d'instituts, ainsi que de représentants élus du corps professoral et des étudiants.
                    </p>
                    <p>
                      Ce conseil se réunit mensuellement pour évaluer la qualité des programmes académiques, approuver les nouveaux cursus, définir les politiques d'admission et traiter les questions relatives à la vie étudiante. Il joue un rôle crucial dans le maintien de l'excellence académique de l'université.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3">Principales Attributions</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Approuver les programmes d'études</li>
                        <li>Établir les normes académiques</li>
                        <li>Définir les politiques de recherche</li>
                        <li>Gérer les affaires étudiantes</li>
                        <li>Superviser l'évaluation des enseignements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comité de Direction */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center text-[#003366]">
                  <i className="fas fa-compass mr-3 text-[#E67E22]"></i> Comité de Direction
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="mb-4">
                      Le Comité de Direction assure la gestion quotidienne de l'université. Présidé par le Recteur, il regroupe les Vice-Recteurs, le Secrétaire Général et les Directeurs des principaux services administratifs. Le Comité se réunit hebdomadairement pour coordonner les activités des différents services et pour mettre en œuvre les décisions du Conseil d'Administration et du Conseil Académique.
                    </p>
                    <p>
                      Cette instance joue un rôle essentiel dans la fluidité des opérations de l'université, la gestion des ressources humaines et financières, et la résolution des problèmes opérationnels qui peuvent survenir.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-3">Principales Attributions</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Assurer la gestion quotidienne</li>
                        <li>Coordonner les services administratifs</li>
                        <li>Exécuter le budget</li>
                        <li>Gérer les ressources humaines</li>
                        <li>Résoudre les problèmes opérationnels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Stratégique */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
              Plan Stratégique 2020-2025
            </h2>
            <p className="text-lg mb-12 max-w-3xl">
              L'Université Ahmadou Dieng s'est dotée d'un plan stratégique quinquennal visant à renforcer son positionnement comme institution de référence en Afrique de l'Ouest.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-book"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 1 : Excellence Académique</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Révision et modernisation des programmes</li>
                  <li>Renforcement des méthodes pédagogiques innovantes</li>
                  <li>Amélioration des infrastructures d'enseignement</li>
                  <li>Développement des compétences du corps enseignant</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-flask"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 2 : Recherche et Innovation</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Création de nouveaux centres de recherche</li>
                  <li>Augmentation des publications scientifiques</li>
                  <li>Développement des partenariats de recherche</li>
                  <li>Valorisation et transfert des résultats de recherche</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 3 : Impact Social</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Renforcement des programmes de service à la communauté</li>
                  <li>Développement de l'entrepreneuriat étudiant</li>
                  <li>Contribution aux projets de développement local</li>
                  <li>Promotion du développement durable</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 4 : Internationalisation</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Expansion des partenariats internationaux</li>
                  <li>Augmentation de la mobilité étudiante et enseignante</li>
                  <li>Développement de programmes conjoints</li>
                  <li>Participation aux réseaux universitaires internationaux</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 5 : Transformation Numérique</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Développement de l'enseignement à distance</li>
                  <li>Modernisation des systèmes d'information</li>
                  <li>Formation aux compétences numériques</li>
                  <li>Intégration des technologies éducatives innovantes</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Axe 6 : Gouvernance et Gestion</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Optimisation des processus administratifs</li>
                  <li>Diversification des sources de financement</li>
                  <li>Amélioration de la qualité des services</li>
                  <li>Développement d'une culture d'évaluation continue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}