import { useState, useEffect, useRef } from "react";

// Statistiques réelles de l'université
const stats = [
  { 
    value: 150, 
    prefix: "", 
    suffix: "", 
    label: "Professeurs Agrégés" 
  },
  { 
    value: 100, 
    prefix: "", 
    suffix: "", 
    label: "Cours Dispensés" 
  },
  { 
    value: 12, 
    prefix: "", 
    suffix: "", 
    label: "Partenariats Signés" 
  },
  { 
    value: 500, 
    prefix: "", 
    suffix: "", 
    label: "Étudiants/Ans" 
  }
];

// Composant d'animation personnalisé pour éviter les problèmes avec CountUp
function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  startAnimation 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startAnimation) return;
    
    // Réinitialiser le compteur
    setCount(0);
    
    // Nombre d'étapes pour l'animation
    const steps = 30;
    const stepTime = 1500 / steps; // 1.5 secondes au total
    const increment = value / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      setCount(Math.min(Math.round(increment * currentStep), value));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [startAnimation, value]);
  
  return (
    <span>
      {prefix}{startAnimation ? count : 0}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Observer pour déclencher l'animation quand la section devient visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-r from-[#003366] to-[#005599] py-16 text-white shadow-inner overflow-hidden relative"
    >
      {/* Éléments de décoration en arrière-plan */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-6 mb-8 lg:mb-0 text-center transform transition-all duration-500 hover:scale-105"
                 style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-4">
                {index === 0 && <i className="fas fa-user-tie text-3xl text-white/80"></i>}
                {index === 1 && <i className="fas fa-book text-3xl text-white/80"></i>}
                {index === 2 && <i className="fas fa-handshake text-3xl text-white/80"></i>}
                {index === 3 && <i className="fas fa-user-graduate text-3xl text-white/80"></i>}
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 font-bold">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  startAnimation={inView} 
                />
              </div>
              <div className="text-lg text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
