import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Histoire() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Notre Histoire";
    // Remonter en haut de page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Notre Histoire</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Fondée en 2007, l'Université Ahmadou DIENG a grandi pour devenir une institution d'excellence en Guinée.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Présentation Générale</h2>
                  <p>
                    L'Université Ahmadou DIENG (U.A.D) est un établissement privé à caractère scientifique et technique sous la tutelle du Ministère de l'Enseignement Supérieur, de la Recherche Scientifique et de l'Innovation (MESRSI). Elle a été créée officiellement le 06 mars 2007 par l'Arrêté ministériel N° 2007/919/ME/MESRS/CAB.
                  </p>
                  <p>
                    Depuis sa création, l'U.A.D s'est engagée à offrir une formation de qualité adaptée aux besoins de développement économique, social et culturel de la Guinée et de l'Afrique.
                  </p>

                  <h2>Vision et Mission</h2>
                  <p>
                    Notre vision est de devenir une université de renommée mondiale au service du développement économique, social et culturel de la Guinée et de l'Afrique. Inspirée par la devise "Construisons demain aujourd'hui", l'Université Ahmadou DIENG s'appuie sur des valeurs fondamentales d'excellence, de qualité, d'innovation, de transparence et de diversité.
                  </p>
                  <p>
                    Notre mission est de former des professionnels compétents dans divers domaines, capables de relever les défis du monde contemporain et de contribuer activement au développement du pays.
                  </p>

                  <h2>Expansion et Développement (2007-Présent)</h2>
                  <p>
                    Depuis sa création en 2007, l'Université Ahmadou DIENG a connu une croissance remarquable. D'un seul campus, elle s'est étendue pour établir une présence significative dans diverses régions de la Guinée, avec aujourd'hui cinq campus stratégiquement situés.
                  </p>
                  <p>
                    Le Campus principal de Bentourayah, situé à Manéah (Préfecture de Coyah), constitue le cœur de notre université. Au fil des années, nous avons ouvert les campus de Sangoyah dans la Commune de Matoto à Conakry, de Labé dans la région de Moyenne Guinée, ainsi que les campus de Sonfonia et de Petit Simbaya dans la Commune de Ratoma à Conakry.
                  </p>

                  <h2>Rayonnement et Partenariats</h2>
                  <p>
                    L'Université Ahmadou DIENG a développé de nombreux partenariats avec des institutions académiques nationales et internationales, des entreprises et des organisations gouvernementales et non gouvernementales. Ces collaborations enrichissent notre offre de formation et permettent des échanges académiques bénéfiques pour nos étudiants et notre corps professoral.
                  </p>
                  <p>
                    Aujourd'hui, l'Université Ahmadou DIENG est reconnue pour la qualité de son enseignement, son engagement envers l'excellence académique et son rôle dans la formation des futurs leaders et professionnels guinéens. Avec cinq campus répartis dans différentes régions, nous continuons d'étendre notre impact et notre contribution au développement de l'enseignement supérieur en Guinée.
                  </p>
                </div>
              </div>

              {/* Sidebar avec implantations et dates importantes */}
              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h3 className="text-xl font-heading font-bold mb-4 text-[#003366]">Nos Campus</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-[#003366] pl-4 py-1">
                    <span className="font-bold block">Campus Bentourayah (Principal)</span>
                    <p className="text-gray-600">Bentourayah Plateau, Manéah, Coyah</p>
                    <p className="text-gray-600 text-sm">Tel: +224 620 71 73 45 / 620 71 73 23</p>
                  </li>
                  <li className="border-l-2 border-[#003366] pl-4 py-1">
                    <span className="font-bold block">Campus Sangoyah</span>
                    <p className="text-gray-600">Quartier Sangoyah, Commune de Matoto, Conakry</p>
                    <p className="text-gray-600 text-sm">Tel: +224 620 71 73 42 / 620 71 73 36</p>
                  </li>
                  <li className="border-l-2 border-[#003366] pl-4 py-1">
                    <span className="font-bold block">Campus Labé</span>
                    <p className="text-gray-600">Secteur N'Diolou, Quartier Pountioun, Labé</p>
                    <p className="text-gray-600 text-sm">Tel: +224 620 71 73 39 / 622 94 84 84</p>
                  </li>
                  <li className="border-l-2 border-[#003366] pl-4 py-1">
                    <span className="font-bold block">Campus Sonfonia</span>
                    <p className="text-gray-600">Sonfonia Bonfi, Commune de Ratoma, Conakry</p>
                  </li>
                  <li className="border-l-2 border-[#003366] pl-4 py-1">
                    <span className="font-bold block">Campus Petit Simbaya</span>
                    <p className="text-gray-600">Commune de Ratoma, Conakry</p>
                  </li>
                </ul>
                
                <h3 className="text-xl font-heading font-bold mb-4 mt-8 text-[#003366]">Dates Clés</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">06 mars 2007</span>
                    <p className="text-gray-600">Création de l'Université Ahmadou DIENG par Arrêté N° 2007/919/ME/MESRS/CAB</p>
                  </li>
                  <li className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">2014</span>
                    <p className="text-gray-600">Ouverture du Campus de Sangoyah à Conakry</p>
                  </li>
                  <li className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">2017</span>
                    <p className="text-gray-600">15ème anniversaire - Développement international</p>
                  </li>
                  <li className="border-l-2 border-[#E67E22] pl-4 py-1">
                    <span className="font-bold block">Mars 2018</span>
                    <p className="text-gray-600">Lancement de l'Incubateur UAD d'entreprises</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}