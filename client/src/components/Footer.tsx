import { Link } from "wouter";
import logoPath from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-10">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <img src={logoPath} alt="Logo Université Ahmadou DIENG" className="h-12" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Université Ahmadou DIENG</h3>
              </div>
            </div>
            <p className="mb-6 text-white/80 leading-relaxed">
              L'Université Ahmadou DIENG est dédiée à l'excellence académique et à la formation de leaders pour relever les défis du monde moderne.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/univadieng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/univadieng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/univadieng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/univadieng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/univadieng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-10">
            <h4 className="text-lg font-heading font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-all">Accueil</Link></li>
              <li><Link href="/catalogue" className="text-white/70 hover:text-white transition-all">Formations</Link></li>
              <li><Link href="/histoire" className="text-white/70 hover:text-white transition-all">Notre Histoire</Link></li>
              <li><Link href="/evenements" className="text-white/70 hover:text-white transition-all">Événements</Link></li>
              <li><Link href="/vie-campus" className="text-white/70 hover:text-white transition-all">Vie Étudiante</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-10">
            <h4 className="text-lg font-heading font-bold mb-6">Ressources</h4>
            <ul className="space-y-3">
              <li><Link href="/vie-campus" className="text-white/70 hover:text-white transition-all">Vie étudiante</Link></li>
              <li><Link href="/campus" className="text-white/70 hover:text-white transition-all">Nos campus</Link></li>
              <li><Link href="/evenements" className="text-white/70 hover:text-white transition-all">Actualités</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white transition-all">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 lg:w-4/12 px-4 mb-10">
            <h4 className="text-lg font-heading font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                <span>Bentourayah Plateau, Maneah Km 42 Coyah – Guinée BP 2308</span>
              </li>
              <li className="flex items-start">
                <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-phone-alt"></i></div>
                <div className="flex flex-col">
                  <span>+224 620 71 73 45 – Bentourayah</span>
                  <span>+224 620 71 73 42 – Sangoyah</span>
                  <span>+224 620 71 73 39 – Labé</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-clock"></i></div>
                <span>Horaires : Lundi – Samedi, 9h00 – 17h00</span>
              </li>
              <li className="flex items-start">
                <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-envelope"></i></div>
                <span>contact@univadieng.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Université Ahmadou DIENG. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
