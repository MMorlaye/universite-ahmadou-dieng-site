import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Réinitialiser le formulaire après un délai
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };
  
  useEffect(() => {
    document.title = "Contact - Université Ahmadou Dieng";
    // Remonter en haut de page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos formations, admissions ou services.
            </p>
          </div>
        </div>

        {/* Informations principales de contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulaire de contact */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-8 text-[#003366]">Envoyez-nous un message</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input 
                        type="text" 
                        id="nom" 
                        name="nom" 
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input 
                        type="text" 
                        id="prenom" 
                        name="prenom" 
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      name="telephone" 
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <select 
                      id="sujet" 
                      name="sujet" 
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="admission">Demande d'admission</option>
                      <option value="information">Demande d'information</option>
                      <option value="formation">Formation continue</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md">
                      Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.                  
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting || isSubmitted}
                      className={`relative bg-[#003366] hover:bg-[#00264d] text-white font-medium py-3 px-8 rounded-full transition-colors ${isSubmitting || isSubmitted ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block mr-2"><i className="fas fa-spinner fa-spin"></i></span>
                          Envoi en cours...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <span className="inline-block mr-2"><i className="fas fa-check"></i></span>
                          Message envoyé !
                        </>
                      ) : (
                        'Envoyer le message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Informations de contact et carte */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-8 text-[#003366]">Nos coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="bg-[#003366]/5 p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-bold mb-4">Siège principal</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                        <span>Bentourayah Plateau, Maneah Km 42 Coyah – Guinée BP 2308</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-phone-alt"></i></div>
                        <span>+224 620 71 73 45</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-envelope"></i></div>
                        <span>contact@univadieng.org</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-[#E67E22] mr-3 mt-1"><i className="fas fa-clock"></i></div>
                        <span>Lundi – Samedi, 9h00 – 17h00</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#003366]/5 p-6 rounded-lg">
                      <h3 className="text-lg font-heading font-bold mb-3">Campus Sangoyah</h3>
                      <p className="mb-4 text-sm">Sangoyah P.A, Commune de Matoto Conakry</p>
                      <div className="text-sm text-[#003366] font-medium">
                        <span>+224 620 71 73 42</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#003366]/5 p-6 rounded-lg">
                      <h3 className="text-lg font-heading font-bold mb-3">Campus Labé</h3>
                      <p className="mb-4 text-sm">N'Djolou, Préfecture de Labé</p>
                      <div className="text-sm text-[#003366] font-medium">
                        <span>+224 620 71 73 39</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carte (placeholder) */}
                  <div className="bg-gray-100 h-64 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <i className="fas fa-map-marked-alt text-4xl mb-3"></i>
                        <p>Carte Google Maps indisponible</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Réseaux sociaux */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/univadieng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#00264d] transition-colors">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/univadieng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#00264d] transition-colors">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/univadieng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#00264d] transition-colors">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/univadieng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#00264d] transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
              Questions fréquentes
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Consultez notre page FAQ pour trouver des réponses aux questions les plus courantes sur notre université.
            </p>
            <a href="/faq" className="inline-flex items-center justify-center bg-[#E67E22] hover:bg-[#D35400] text-white py-3 px-8 rounded-full transition-all font-medium">
              <i className="fas fa-question-circle mr-2"></i>
              Voir la FAQ
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}