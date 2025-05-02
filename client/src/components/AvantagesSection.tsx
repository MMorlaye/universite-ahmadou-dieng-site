import { BookOpen, Wifi, Users, LibraryBig, Globe, PenTool, Building, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "Service d'accueil personnalisé",
    description: "Accompagnement individualisé pour tous les nouveaux étudiants dès leur arrivée",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    title: "Bibliothèque Virtuelle",
    description: "Accès à des milliers d'ouvrages et de ressources pédagogiques en ligne",
    icon: BookOpen,
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  },
  {
    title: "Cours en ligne",
    description: "Plateforme d'apprentissage interactive avec cours et exercices disponibles 24h/24",
    icon: PenTool,
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    title: "Internet haut débit",
    description: "Connexion WiFi gratuite sur l'ensemble des campus pour faciliter vos études",
    icon: Wifi,
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    title: "Centre d'Études et de Recherche",
    description: "Laboratoires modernes et espaces de travail collaboratif pour vos projets",
    icon: LibraryBig,
    color: "text-red-500",
    bgColor: "bg-red-100"
  },
  {
    title: "Plateforme d'Auto-évaluation",
    description: "Suivez votre progression académique et identifiez vos points d'amélioration",
    icon: GraduationCap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100"
  },
  {
    title: "Campus modernes",
    description: "Infrastructures de qualité avec des équipements pédagogiques à la pointe",
    icon: Building,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100"
  },
  {
    title: "Programmes internationaux",
    description: "Opportunités d'échanges et de doubles diplômes avec nos universités partenaires",
    icon: Globe,
    color: "text-teal-500",
    bgColor: "bg-teal-100"
  },
  {
    title: "Insertion professionnelle",
    description: "Partenariats avec les entreprises pour des stages et des emplois après diplôme",
    icon: Briefcase,
    color: "text-pink-500",
    bgColor: "bg-pink-100"
  }
];

export default function AvantagesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <section id="avantages" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Pourquoi étudier à l'Université Ahmadou Dieng ?
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Découvrez les nombreux avantages qui font de notre université le choix idéal pour construire votre avenir académique et professionnel.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${advantage.bgColor}`}>
                      <advantage.icon className={`h-6 w-6 ${advantage.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{advantage.title}</h3>
                      <p className="text-slate-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Rejoignez-nous pour la rentrée
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}