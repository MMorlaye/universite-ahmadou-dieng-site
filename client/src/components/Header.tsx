import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import logoPath from "../assets/logo.png";

// Structure du menu de navigation avec sous-menus
const navigationItems = [
  { name: "Accueil", path: "/", submenu: null },
  { 
    name: "Formation", 
    path: "#formations", 
    submenu: [
      { name: "Catalogue", path: "/catalogue" }
    ] 
  },
  { 
    name: "À propos de Nous", 
    path: "#about", 
    submenu: [
      { name: "Histoire et Direction", path: "/rectorat" },
      { name: "Gouvernance", path: "/gouvernance" }
    ] 
  },
  { 
    name: "Info", 
    path: "#actualites", 
    submenu: [
      { name: "Événements", path: "/evenements" },
      { name: "Blog", path: "/blog" },
      { name: "Vie de campus", path: "/vie-campus" },
      { name: "Nos Campus", path: "/nos-campus" }
    ] 
  },
  { name: "Contact", path: "/contact", submenu: null }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoveredItemRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    hoveredItemRef.current = index;
    // Ouvrir le sous-menu après un délai court pour éviter les ouvertures accidentelles
    setTimeout(() => {
      if (hoveredItemRef.current === index) {
        setOpenSubmenu(index);
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    hoveredItemRef.current = null;
    // Fermer le sous-menu après un délai pour permettre de bouger la souris vers le sous-menu
    setTimeout(() => {
      if (hoveredItemRef.current === null) {
        setOpenSubmenu(null);
      }
    }, 300);
  };
  
  const headerClasses = `fixed top-0 left-0 right-0 bg-white z-50 transition-all ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'shadow-md'}`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoPath} 
              alt="Logo Université Ahmadou DIENG" 
              className="h-12 md:h-14 mr-3"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-[#003366]">Université Ahmadou DIENG</h1>
              <p className="text-xs text-[#343A40]/70 hidden md:block">Excellence et Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" ref={menuRef}>
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(index)} 
                onMouseLeave={item.submenu ? handleMouseLeave : undefined}
              >
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      onFocus={() => setOpenSubmenu(index)}
                      className={`font-medium flex items-center space-x-1 px-1 py-1 border-b-2 ${
                        openSubmenu === index 
                          ? 'text-[#003366] border-[#E67E22]' 
                          : 'text-[#343A40] border-transparent hover:text-[#003366] hover:border-[#E67E22]'
                      } transition-all`}
                    >
                      <span>{item.name}</span>
                      <i className={`fas fa-chevron-down text-xs transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}></i>
                    </button>
                    
                    {/* Sous-menu en desktop */}
                    <div 
                      className={`absolute left-0 w-48 mt-1 py-2 bg-white rounded-md shadow-xl z-20 transition-all ${
                        openSubmenu === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        subItem.path.startsWith('#') ? (
                          <a
                            key={subIndex}
                            href={subItem.path}
                            onClick={() => setOpenSubmenu(null)}
                            className="block px-4 py-2 text-[#343A40] hover:bg-[#E9ECEF]/50 hover:text-[#003366]"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link 
                            key={subIndex}
                            href={subItem.path}
                            onClick={() => setOpenSubmenu(null)}
                            className="block px-4 py-2 text-[#343A40] hover:bg-[#E9ECEF]/50 hover:text-[#003366]"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.path}
                    className={`font-medium px-1 py-1 border-b-2 ${
                      item.path === "/" 
                        ? 'text-[#003366] border-[#E67E22]' 
                        : 'text-[#343A40] border-transparent hover:text-[#003366] hover:border-[#E67E22]'
                    } transition-all`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link href="/contact" className="bg-[#E67E22] hover:bg-[#D35400] text-white py-2 px-5 rounded-full transition-all font-medium ml-2 inline-block">
              Candidater
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#343A40] p-2 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-2 py-3">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`w-full flex justify-between items-center font-medium px-4 py-2 rounded ${
                        openSubmenu === index 
                          ? 'bg-[#E9ECEF]/50 text-[#003366]' 
                          : 'text-[#343A40] hover:bg-[#E9ECEF]/30 hover:text-[#003366]'
                      } transition-all`}
                    >
                      <span>{item.name}</span>
                      <i className={`fas fa-chevron-down text-xs transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}></i>
                    </button>
                    
                    {/* Sous-menu en mobile */}
                    <div className={`transition-all duration-200 overflow-hidden pl-4 ${
                      openSubmenu === index ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                    }`}>
                      {item.submenu.map((subItem, subIndex) => (
                        subItem.path.startsWith('#') ? (
                          <a
                            key={subIndex}
                            href={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-4 ml-2 border-l-2 border-[#E9ECEF] text-[#343A40] hover:text-[#003366]"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link 
                            key={subIndex}
                            href={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-4 ml-2 border-l-2 border-[#E9ECEF] text-[#343A40] hover:text-[#003366]"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium px-4 py-2 rounded ${
                      item.path === "/" 
                        ? 'bg-[#E9ECEF]/50 text-[#003366]' 
                        : 'text-[#343A40] hover:bg-[#E9ECEF]/30 hover:text-[#003366]'
                    } transition-all`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-5 rounded-full transition-all font-medium mt-2 inline-block text-center">
              Candidater
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
