import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-6">Contactez-nous</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Vous avez des questions sur nos programmes ou souhaitez obtenir plus d'informations ? N'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous aider.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="text-[#E67E22] mr-4 mt-1">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Adresse</h3>
                  <p>123 Avenue de l'Université, Diéng, Sénégal</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-[#E67E22] mr-4 mt-1">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Téléphone</h3>
                  <p>+221 33 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-[#E67E22] mr-4 mt-1">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                  <p>contact@univadieng.org</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-heading font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#004080] transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#004080] transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#004080] transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#004080] transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-xl mb-6 text-[#003366]">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#343A40] font-medium mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E9ECEF] rounded focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366]"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#343A40] font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E9ECEF] rounded focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366]"
                    placeholder="Votre email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-[#343A40] font-medium mb-2">Sujet</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E9ECEF] rounded focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option value="admission">Admission</option>
                    <option value="programme">Informations sur les programmes</option>
                    <option value="visite">Visite du campus</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#343A40] font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E9ECEF] rounded focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366]"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full py-3 px-6 rounded transition-all font-medium ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-[#E67E22] hover:bg-[#D35400] text-white'
                  }`}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span><i className="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...</span>
                  ) : isSubmitted ? (
                    <span><i className="fas fa-check mr-2"></i> Message envoyé!</span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
