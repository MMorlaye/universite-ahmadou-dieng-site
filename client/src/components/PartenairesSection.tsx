import douanesLogo from "../assets/logos/DouanesGuinee2-removebg-preview.png";
import cbgLogo from "../assets/logos/LOGO-CBG-FBlanc-removebg-preview.png";
import fbsLogo from "../assets/logos/Logo_France_Business_School-removebg-preview.png";
import ludongLogo from "../assets/logos/ludong_university-removebg-preview.png";
import tunisLogo from "../assets/logos/Universite-de-Tunis-el-Manar-removebg-preview.png";
import umonsLogo from "../assets/logos/UMONS-UNIV-removebg-preview.png";
import heciLogo from "../assets/logos/images-removebg-preview.png";
import bokeLogo from "../assets/logos/Mine_boke_logo-removebg-preview.png";
import isenLogo from "../assets/logos/ISEN-removebg-preview.png";
import embaLogo from "../assets/logos/emba-removebg-preview.png";
import bbsLogo from "../assets/logos/brest_school-removebg-preview.png";
import esrimLogo from "../assets/logos/esrim-removebg-preview.png";

// Liste des logos partenaires
const partenairesLogos = [
  { name: "Douanes Guinée", logo: douanesLogo },
  { name: "CBG", logo: cbgLogo },
  { name: "France Business School", logo: fbsLogo },
  { name: "Ludong University", logo: ludongLogo },
  { name: "Université de Tunis El Manar", logo: tunisLogo },
  { name: "Université de Mons", logo: umonsLogo },
  { name: "Groupe HECI Business School", logo: heciLogo },
  { name: "Mine de Boké", logo: bokeLogo },
  { name: "ISEN École d'Ingénieurs", logo: isenLogo },
  { name: "EMBA Business School", logo: embaLogo },
  { name: "Brest Business School", logo: bbsLogo },
  { name: "ESRIM", logo: esrimLogo }
];

// Dupliquer les logos pour assurer un défilement infini fluide
const allLogos = [...partenairesLogos, ...partenairesLogos];

export default function PartenairesSection() {
  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-4">Nos Partenaires</h2>
          <p className="text-lg text-[#343A40]/70 max-w-2xl mx-auto">
            L'Université Ahmadou Diéng collabore avec des institutions prestigieuses et des entreprises de renom pour enrichir l'expérience éducative de nos étudiants.
          </p>
        </div>
        
        {/* Premier carousel avec défilement de gauche à droite */}
        <div className="mb-8 overflow-hidden">
          <div className="flex logos-slide-animation-left">
            {allLogos.map((partenaire, index) => (
              <div key={index} className="mx-6 flex-shrink-0">
                <div className="w-48 h-32 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <img 
                    src={partenaire.logo} 
                    alt={`Logo ${partenaire.name}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Deuxième carousel avec défilement de droite à gauche */}
        <div className="overflow-hidden">
          <div className="flex logos-slide-animation-right">
            {[...allLogos].reverse().map((partenaire, index) => (
              <div key={index} className="mx-6 flex-shrink-0">
                <div className="w-48 h-32 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <img 
                    src={partenaire.logo} 
                    alt={`Logo ${partenaire.name}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
}
