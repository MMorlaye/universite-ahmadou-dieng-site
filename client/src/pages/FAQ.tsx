import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ - Université Ahmadou Dieng";
    // Remonter en haut de page
    window.scrollTo(0, 0);
  }, []);

  // Questions et réponses
  const faqItems = [
    {
      question: "Quels sont les diplômes délivrés par l'Université Ahmadou Dieng ?",
      answer: "L'Université Ahmadou Dieng délivre des diplômes de Licence (Bac+3), Master (Bac+5) et Doctorat (Bac+8) dans différentes disciplines. Nos diplômes sont reconnus par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Guinée."
    },
    {
      question: "Comment s'inscrire à l'Université Ahmadou Dieng ?",
      answer: "Pour s'inscrire, les candidats doivent remplir un dossier de candidature disponible sur notre site web ou auprès du service des admissions. Les pièces requises comprennent: diplômes et relevés de notes, pièce d'identité, photos d'identité et formulaire de candidature dûment rempli. Après examen du dossier, les candidats admissibles seront contactés pour un entretien."
    },
    {
      question: "Quel est le coût des études à l'Université Ahmadou Dieng ?",
      answer: "Les frais de scolarité varient selon le niveau d'études et la filière choisie. Veuillez consulter notre service financier pour obtenir les tarifs précis de l'année académique en cours. Des facilités de paiement et des bourses sont disponibles pour les étudiants méritants ou en difficulté financière."
    },
    {
      question: "Quelles sont les dates importantes du calendrier universitaire ?",
      answer: "L'année académique commence généralement en octobre et se termine en juillet. Les inscriptions sont ouvertes de juin à septembre. Les examens semestriels ont lieu en février et juillet. Veuillez consulter le calendrier officiel sur notre site pour les dates exactes de l'année en cours."
    },
    {
      question: "L'université propose-t-elle des formations à distance ?",
      answer: "Oui, l'Université Ahmadou Dieng propose des formations à distance dans certaines disciplines. Notre plateforme e-learning permet aux étudiants de suivre des cours en ligne, d'accéder aux ressources pédagogiques et d'interagir avec les enseignants. Contactez-nous pour connaître les filières disponibles en enseignement à distance."
    },
    {
      question: "Comment obtenir une attestation de diplôme ou un relevé de notes ?",
      answer: "Pour obtenir une attestation de diplôme ou un relevé de notes, veuillez adresser une demande écrite au service de scolarité ou remplir le formulaire en ligne disponible sur notre site. Les documents seront disponibles dans un délai de 72 heures ouvrables après réception de la demande."
    },
    {
      question: "Existe-t-il des possibilités de stage ou d'emploi pendant les études ?",
      answer: "Oui, notre service d'orientation professionnelle accompagne les étudiants dans leur recherche de stage. Nous avons également des partenariats avec de nombreuses entreprises qui offrent des opportunités de stage et d'emploi à nos étudiants. Des sessions d'information sont régulièrement organisées sur le campus."
    },
    {
      question: "Y a-t-il des associations étudiantes à l'université ?",
      answer: "Oui, l'Université Ahmadou Dieng compte plusieurs associations étudiantes qui organisent des activités culturelles, sportives et académiques tout au long de l'année. Chaque étudiant est encouragé à participer à la vie associative pour enrichir son expérience universitaire."
    },
    {
      question: "Comment contacter les services administratifs de l'université ?",
      answer: "Vous pouvez contacter les services administratifs par téléphone au +224 620 71 73 45, par email à contact@univadieng.org, ou en vous rendant directement sur l'un de nos campus aux heures d'ouverture (lundi au samedi, de 9h00 à 17h00)."
    },
    {
      question: "L'université offre-t-elle des bourses d'études ?",
      answer: "Oui, l'Université Ahmadou Dieng propose des bourses d'excellence académique, des bourses sociales et des programmes de parrainage. Les critères d'attribution et les modalités de candidature sont disponibles auprès du service des bourses et aides financières."
    }
  ];

  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* Bannière avec titre */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Foire Aux Questions</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Trouvez des réponses aux questions fréquemment posées sur notre université, les admissions, les formations et la vie étudiante.
            </p>
          </div>
        </div>

        {/* Section FAQ avec accordéon */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#003366]">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Si vous ne trouvez pas de réponse à votre question, n'hésitez pas à nous contacter directement.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 font-heading font-bold cursor-pointer">
                      <span>{item.question}</span>
                      <span className="transform transition-transform duration-200 group-open:rotate-180">
                        <i className="fas fa-chevron-down text-[#003366]"></i>
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Contact supplémentaire */}
            <div className="mt-16 bg-[#003366]/5 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4 text-[#003366]">Vous avez d'autres questions ?</h3>
              <p className="mb-6 text-gray-600">
                Notre équipe est disponible pour répondre à toutes vos interrogations. N'hésitez pas à nous contacter par téléphone, email ou en personne sur l'un de nos campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:contact@univadieng.org" className="inline-flex items-center justify-center bg-[#003366] text-white py-2 px-6 rounded-full hover:bg-[#00264d] transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  Nous contacter par email
                </a>
                <a href="tel:+224620717345" className="inline-flex items-center justify-center border border-[#003366] text-[#003366] py-2 px-6 rounded-full hover:bg-[#003366]/5 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  +224 620 71 73 45
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}