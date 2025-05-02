import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useRoute, Link } from "wouter";

// Type pour un article de blog
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content?: string;
};

// Données d'articles fictifs avec contenu complet
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "La recherche scientifique en Guinée: défis et perspectives",
    excerpt: "Analyse des enjeux de la recherche scientifique dans le contexte guinéen et des opportunités de développement.",
    date: "28 septembre 2023",
    author: "Dr. Mamadou Bah",
    category: "Recherche",
    image: "research.jpg",
    readTime: "8 min de lecture",
    content: `
      <p>La recherche scientifique constitue un pilier fondamental du développement socio-économique de toute nation. En Guinée, comme dans plusieurs pays africains, ce secteur fait face à de nombreux défis mais présente également des opportunités considérables.</p>
      
      <h2>Un écosystème en construction</h2>
      <p>Avec ses ressources naturelles abondantes et sa biodiversité unique, la Guinée offre un terrain fertile pour la recherche scientifique. Cependant, le manque d'infrastructures adéquates, de financements substantiels et de politiques cohérentes a longtemps freiné l'essor de ce secteur. Les laboratoires sont souvent sous-équipés, et les chercheurs peinent à trouver les ressources nécessaires pour mener à bien leurs travaux.</p>
      
      <p>À l'Université Ahmadou Dieng, nous avons fait de la recherche une priorité stratégique. Notre centre de recherche interdisciplinaire, inauguré en 2021, regroupe des équipes travaillant sur des problématiques locales et globales, allant de la santé publique à l'agriculture durable, en passant par les énergies renouvelables.</p>
      
      <h2>Des défis persistants</h2>
      <p>Parmi les obstacles majeurs auxquels se heurtent les chercheurs guinéens figurent:</p>
      <ul>
        <li>Le sous-financement chronique de la recherche</li>
        <li>L'insuffisance d'équipements et d'infrastructures modernes</li>
        <li>Le manque de valorisation des carrières scientifiques</li>
        <li>Les difficultés d'accès aux publications et bases de données internationales</li>
        <li>L'absence de mécanismes efficaces de transfert technologique</li>
      </ul>
      
      <p>Ces défis sont accentués par la fuite des cerveaux, qui voit de nombreux chercheurs talentueux quitter le pays pour poursuivre leurs travaux à l'étranger, où les conditions sont souvent plus favorables.</p>
      
      <h2>Des perspectives prometteuses</h2>
      <p>Malgré ces obstacles, plusieurs facteurs laissent entrevoir un avenir plus radieux pour la recherche scientifique en Guinée:</p>
      
      <p>La coopération internationale s'intensifie, avec des partenariats stratégiques entre universités guinéennes et institutions étrangères. À l'UAD, nous avons noué des collaborations avec des universités en France, au Canada et au Maroc, facilitant les échanges de chercheurs et d'étudiants.</p>
      
      <p>L'émergence des technologies numériques ouvre de nouvelles possibilités, permettant aux chercheurs de collaborer à distance et d'accéder à des ressources en ligne. Notre université a récemment mis en place une bibliothèque numérique accessible à tous nos chercheurs et étudiants.</p>
      
      <p>Le secteur privé manifeste un intérêt croissant pour la R&D, notamment dans les domaines miniers, agricoles et pharmaceutiques. Ces partenariats public-privé peuvent constituer une source importante de financement et favoriser l'application concrète des résultats de recherche.</p>
      
      <h2>Vers une stratégie nationale de la recherche</h2>
      <p>Pour exploiter pleinement le potentiel de la recherche scientifique en Guinée, il est impératif de mettre en place une stratégie nationale cohérente. Celle-ci devrait inclure:</p>
      
      <p>Une augmentation substantielle du budget alloué à la recherche, pour atteindre au moins 1% du PIB, conformément aux recommandations internationales</p>
      
      <p>La création d'un environnement favorable à l'innovation, avec des incitations fiscales pour les entreprises investissant dans la R&D</p>
      
      <p>Le renforcement des capacités humaines, à travers des programmes de formation doctorale et post-doctorale de qualité</p>
      
      <p>L'amélioration des infrastructures de recherche, en particulier dans les universités et centres de recherche publics</p>
      
      <p>La promotion de la culture scientifique dans la société, afin de susciter des vocations chez les jeunes</p>
      
      <h2>Conclusion</h2>
      <p>La recherche scientifique en Guinée se trouve à un tournant décisif. Les défis sont certes nombreux, mais les opportunités le sont tout autant. À l'Université Ahmadou Dieng, nous sommes convaincus que l'investissement dans la science et l'innovation constitue la clé d'un développement durable et inclusif pour notre pays. C'est pourquoi nous continuerons à œuvrer pour faire de notre institution un pôle d'excellence en matière de recherche dans la sous-région ouest-africaine.</p>
    `
  },
  {
    id: 2,
    title: "Témoignage: Mon expérience d'échange universitaire au Canada",
    excerpt: "Fatou Camara, étudiante en relations internationales, partage son expérience enrichissante d'échange à l'Université de Montréal.",
    date: "20 septembre 2023",
    author: "Fatou Camara",
    category: "Vie étudiante",
    image: "exchange.jpg",
    readTime: "5 min de lecture",
    content: `
      <p>Quand j'ai appris que j'avais été sélectionnée pour participer au programme d'échange avec l'Université de Montréal, j'ai ressenti un mélange d'excitation et d'appréhension. C'était la première fois que je quittais la Guinée pour un séjour aussi long, et le Canada me semblait si lointain, si différent.</p>
      
      <h2>Les préparatifs</h2>
      <p>Obtenir un visa d'études pour le Canada n'a pas été une mince affaire. Heureusement, le Bureau des Relations Internationales de l'UAD m'a accompagnée tout au long du processus. J'ai également bénéficié d'une bourse de mobilité qui a couvert une partie importante de mes frais de séjour. Sans cette aide, cette expérience aurait été tout simplement inaccessible pour moi.</p>
      
      <p>Les semaines précédant mon départ ont été intenses : recherche de logement, préparation des bagages adaptés au climat canadien (on m'avait prévenue pour l'hiver !), et discussions avec d'anciens participants au programme qui m'ont donné des conseils précieux.</p>
      
      <h2>Premières impressions</h2>
      <p>Mon arrivée à Montréal en janvier a été... glaciale ! La température affichait -25°C, un choc thermique pour quelqu'un venant de Conakry. Mais l'accueil chaleureux des Québécois a vite fait oublier le froid. L'Université de Montréal dispose d'un programme de parrainage pour les étudiants internationaux, et mon parrain, Alexandre, m'a aidée à m'orienter dans cette immense université et dans la ville.</p>
      
      <p>Le campus est impressionnant, avec des infrastructures modernes et des ressources que je n'avais jamais vues auparavant : bibliothèques immenses, laboratoires ultramodernes, espaces de coworking, installations sportives variées...</p>
      
      <h2>La vie académique</h2>
      <p>Le système universitaire québécois diffère considérablement du nôtre. L'accent est mis sur la participation active des étudiants, les travaux de groupe et l'application pratique des connaissances. Au début, j'ai dû m'adapter à cette approche plus interactive, mais j'ai fini par l'apprécier énormément.</p>
      
      <p>J'ai suivi des cours sur la gouvernance mondiale, les organisations internationales et la diplomatie canadienne. Ce dernier sujet était particulièrement intéressant, car il m'a permis de découvrir une autre approche des relations internationales, différente de celle que j'avais étudiée en Guinée.</p>
      
      <p>Les professeurs étaient accessibles et toujours disponibles pour répondre aux questions après les cours ou pendant leurs heures de permanence. Cette proximité m'a beaucoup aidée dans mon apprentissage.</p>
      
      <h2>Découvertes culturelles</h2>
      <p>Au-delà des études, cette expérience a été une immersion culturelle extraordinaire. Montréal est une ville cosmopolite où cohabitent des personnes venues des quatre coins du monde. J'ai partagé une colocation avec une Québécoise, une Française et une Mexicaine, ce qui a donné lieu à des échanges culturels passionnants (et à la découverte de cuisines délicieuses !).</p>
      
      <p>J'ai profité de mon séjour pour explorer le Québec : Québec City avec son architecture européenne, les chutes du Niagara, majestueuses même en hiver, et les Laurentides où j'ai essayé le ski pour la première fois (avec plus ou moins de succès).</p>
      
      <p>Le plus enrichissant a été de participer aux activités du club Afrique de l'université, où j'ai pu partager la culture guinéenne lors d'événements culturels, tout en découvrant d'autres cultures africaines à travers les étudiants de différents pays.</p>
      
      <h2>Les défis</h2>
      <p>Cette expérience n'a pas été sans obstacles. Le mal du pays s'est parfois fait sentir, surtout lors des fêtes traditionnelles que j'avais l'habitude de célébrer en famille. Le décalage horaire rendait les appels compliqués, et Internet n'était pas toujours fiable pour les vidéoconférences.</p>
      
      <p>L'hiver canadien a été une épreuve en soi. Même avec des vêtements adaptés, les journées courtes et le froid intense peuvent affecter le moral. J'ai appris l'importance de la vitamine D et découvert pourquoi les Canadiens apprécient tant le printemps !</p>
      
      <p>Sur le plan académique, suivre des cours en français et en anglais a représenté un défi linguistique, mais m'a permis d'améliorer considérablement mon bilinguisme.</p>
      
      <h2>Ce que j'en retiens</h2>
      <p>Cette expérience d'échange a transformé ma vision du monde et de moi-même. Elle m'a appris l'autonomie, l'adaptabilité et la confiance en mes capacités. J'ai développé un réseau international de contacts qui pourra m'être utile dans ma future carrière diplomatique.</p>
      
      <p>Sur le plan académique, j'ai découvert de nouvelles méthodes d'apprentissage et d'analyse que j'ai pu partager avec mes camarades à mon retour à l'UAD.</p>
      
      <p>Cette expérience m'a également permis de porter un regard neuf sur mon propre pays. En parlant de la Guinée avec mes amis canadiens, j'ai pris conscience de la richesse de notre culture et des défis uniques que nous relevons.</p>
      
      <h2>Conseils aux futurs participants</h2>
      <p>Pour les étudiants qui envisagent un programme d'échange, voici quelques conseils :</p>
      <ul>
        <li>Commencez les démarches administratives (passeport, visa) bien à l'avance</li>
        <li>Renseignez-vous sur le coût de la vie dans votre pays d'accueil pour établir un budget réaliste</li>
        <li>Préparez-vous au choc culturel, mais restez ouvert d'esprit</li>
        <li>Participez aux activités d'intégration dès votre arrivée pour créer rapidement des liens</li>
        <li>N'hésitez pas à demander de l'aide quand vous en avez besoin</li>
        <li>Documentez votre expérience (journal, photos) - vous apprécierez ces souvenirs plus tard</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mon semestre à l'Université de Montréal restera l'un des moments les plus marquants de mon parcours universitaire. Cette expérience m'a non seulement enrichie sur le plan académique, mais m'a aussi permis de grandir en tant que personne.</p>
      
      <p>Je tiens à remercier l'Université Ahmadou Dieng et l'Université de Montréal pour cette opportunité exceptionnelle, ainsi que tous ceux qui ont rendu cette aventure possible. J'encourage vivement les autres étudiants à saisir les chances de mobilité internationale qui s'offrent à eux. Les défis en valent largement la peine !</p>
    `
  },
  {
    id: 3,
    title: "L'intelligence artificielle au service du développement agricole",
    excerpt: "Découvrez comment les technologies d'IA développées par notre université transforment les pratiques agricoles en Guinée.",
    date: "15 septembre 2023",
    author: "Pr. Ibrahim Touré",
    category: "Innovation",
    image: "ai-agriculture.jpg",
    readTime: "10 min de lecture",
    content: `
      <p>L'agriculture représente le pilier de l'économie guinéenne, employant plus de 80% de la population active et contribuant significativement au PIB du pays. Pourtant, ce secteur demeure largement traditionnel et fait face à de nombreux défis : faible productivité, vulnérabilité aux changements climatiques, et difficultés d'accès aux marchés. Comment l'intelligence artificielle (IA) peut-elle contribuer à transformer cette réalité ? C'est la question à laquelle tente de répondre notre équipe de recherche à l'Université Ahmadou Dieng.</p>
      
      <h2>Le projet AGRI-IA</h2>
      <p>Depuis 2021, notre laboratoire d'innovation numérique a initié le projet AGRI-IA, qui vise à développer des solutions technologiques adaptées au contexte agricole guinéen. Ce projet, résultat d'une collaboration entre des informaticiens, des agronomes et des économistes, s'articule autour de trois axes principaux :</p>
      
      <h3>1. L'analyse prédictive pour l'optimisation des cultures</h3>
      <p>Notre première application, baptisée « PréviFarm », utilise des algorithmes d'apprentissage automatique pour analyser les données climatiques, les caractéristiques des sols et les historiques de rendement afin de fournir des prévisions et des recommandations personnalisées aux agriculteurs.</p>
      
      <p>Pour calibrer ce système, nous avons collecté des données auprès de 40 exploitations dans différentes régions de Guinée pendant deux ans. Les résultats sont prometteurs : les fermes utilisant nos recommandations ont enregistré une augmentation moyenne des rendements de 23% pour le riz et 17% pour le maïs.</p>
      
      <p>L'un des aspects novateurs de PréviFarm est son interface vocale multilingue, qui permet aux agriculteurs non alphabétisés d'interagir avec le système dans leur langue locale. Cette fonctionnalité est cruciale dans un pays où le taux d'alphabétisation demeure relativement bas en zone rurale.</p>
      
      <h3>2. La détection précoce des maladies des plantes</h3>
      <p>Le deuxième volet du projet concerne le développement d'une application mobile utilisant la vision par ordinateur pour identifier les maladies des plantes à partir de simples photos. Nommée « PlantDoctor », cette application s'appuie sur un réseau neuronal convolutif que nous avons entraîné avec plus de 50 000 images de plantes saines et malades courantes en Guinée.</p>
      
      <p>Un agriculteur peut photographier une feuille ou une tige suspecte et, même sans connexion internet (la synchronisation se faisant lorsqu'une connexion est disponible), obtenir un diagnostic ainsi que des recommandations de traitement adaptées, privilégiant dans la mesure du possible les solutions biologiques localement disponibles.</p>
      
      <p>Lors de nos tests sur le terrain, PlantDoctor a atteint une précision de diagnostic de 87%, comparable à celle d'un agronome expérimenté. Cette technologie pourrait considérablement réduire les pertes dues aux maladies, estimées entre 20 et 40% selon les cultures.</p>
      
      <h3>3. L'optimisation des chaînes d'approvisionnement</h3>
      <p>Le troisième axe, encore en développement, concerne l'utilisation de l'IA pour optimiser la chaîne d'approvisionnement agricole, de la ferme au marché. Notre prototype « MarketLink » vise à connecter directement producteurs et acheteurs, tout en identifiant les itinéraires de transport les plus efficaces.</p>
      
      <p>En analysant les données de prix sur différents marchés, les conditions routières et les prévisions météorologiques, le système recommande le moment et le lieu optimaux pour vendre les produits, réduisant ainsi les pertes post-récolte et maximisant les revenus des agriculteurs.</p>
      
      <p>Les premiers tests menés auprès de coopératives agricoles dans la région de Kindia montrent que cette approche pourrait augmenter les revenus des producteurs de 15 à 30%, tout en réduisant le gaspillage alimentaire.</p>
      
      <h2>Défis et adaptations</h2>
      <p>Le développement de solutions d'IA pour l'agriculture guinéenne présente des défis spécifiques que notre équipe a dû surmonter :</p>
      
      <h3>Contraintes infrastructurelles</h3>
      <p>La connectivité internet limitée et l'accès restreint à l'électricité dans les zones rurales nous ont obligés à concevoir des applications fonctionnant principalement hors ligne, avec des mises à jour périodiques lorsqu'une connexion est disponible. Nous avons également optimisé nos algorithmes pour qu'ils soient peu gourmands en ressources et puissent fonctionner sur des smartphones d'entrée de gamme, de plus en plus répandus même dans les zones rurales.</p>
      
      <h3>Adaptation aux réalités locales</h3>
      <p>Les modèles d'IA développés dans des contextes occidentaux ou asiatiques ne sont pas directement transférables à l'agriculture guinéenne. Nous avons dû créer nos propres ensembles de données reflétant la diversité des écosystèmes agricoles du pays, des plaines côtières aux hauts plateaux du Fouta Djallon.</p>
      
      <p>Ce travail de collecte et d'annotation de données a mobilisé une équipe d'étudiants et de chercheurs pendant plus d'un an, mais il nous a permis de développer des modèles véritablement adaptés au contexte local.</p>
      
      <h3>Formation et adoption</h3>
      <p>La technologie la plus sophistiquée n'a d'impact que si elle est effectivement adoptée par ses utilisateurs potentiels. Nous avons donc mis en place un programme de formation et de vulgarisation, en collaboration avec les services de vulgarisation agricole et les ONG locales.</p>
      
      <p>Ces sessions, dispensées dans les langues locales et adaptées au niveau de littératie numérique des participants, ont considérablement facilité l'adoption de nos outils. Notre approche privilégie l'apprentissage par la pratique et l'effet démonstratif, en s'appuyant sur des agriculteurs « champions » qui témoignent des bénéfices obtenus auprès de leurs pairs.</p>
      
      <h2>Perspectives et défis futurs</h2>
      <p>Les premiers résultats de notre initiative sont encourageants, mais beaucoup reste à faire pour que l'IA transforme durablement l'agriculture guinéenne. Nos prochaines étapes incluent :</p>
      
      <h3>Élargissement de la couverture</h3>
      <p>Nous travaillons à étendre notre collecte de données à d'autres régions du pays et à d'autres cultures, notamment les cultures d'exportation comme l'ananas et la mangue, qui représentent un potentiel économique important pour les petits producteurs.</p>
      
      <h3>Intégration d'autres sources de données</h3>
      <p>Nous explorons actuellement les possibilités offertes par l'imagerie satellitaire et les drones pour enrichir nos modèles prédictifs. Ces technologies permettraient un suivi plus précis des cultures à grande échelle et une meilleure anticipation des risques climatiques ou phytosanitaires.</p>
      
      <h3>Développement de la recherche en IA en Guinée</h3>
      <p>Au-delà des applications immédiates, notre ambition est de contribuer au développement d'un écosystème de recherche en IA en Guinée. Nous avons lancé un programme de master spécialisé en IA appliquée au développement durable, et nous encourageons nos étudiants à poursuivre des recherches doctorales dans ce domaine.</p>
      
      <p>Cette initiative s'inscrit dans notre vision plus large : faire de la Guinée non pas un simple consommateur de technologies importées, mais un acteur à part entière de l'innovation numérique, développant des solutions adaptées aux défis africains.</p>
      
      <h2>Conclusion</h2>
      <p>L'intelligence artificielle n'est pas une panacée, mais elle constitue un outil puissant pour relever certains des défis auxquels font face les agriculteurs guinéens. À l'Université Ahmadou Dieng, nous sommes convaincus que la combinaison des savoirs traditionnels et des technologies de pointe peut ouvrir la voie à une agriculture plus productive, plus résiliente et plus durable.</p>
      
      <p>Notre approche privilégie les solutions appropriées plutôt que les plus sophistiquées, et les technologies qui autonomisent les agriculteurs plutôt que celles qui créent de nouvelles dépendances. C'est à cette condition que l'IA pourra véritablement contribuer au développement agricole de la Guinée.</p>
      
      <p>Alors que nous poursuivons nos recherches et nos déploiements sur le terrain, nous invitons les étudiants, les chercheurs et les entrepreneurs à nous rejoindre dans cette passionnante aventure au croisement de la technologie et du développement rural.</p>
    `
  },
  {
    id: 4,
    title: "Entretien avec Amadou Diallo, entrepreneur et ancien de l'UAD",
    excerpt: "Portrait d'un ancien étudiant devenu entrepreneur à succès dans le domaine des énergies renouvelables.",
    date: "8 septembre 2023",
    author: "Rédaction UAD",
    category: "Alumni",
    image: "entrepreneur.jpg",
    readTime: "7 min de lecture",
    content: `
      <p>Amadou Diallo fait partie de ces anciens étudiants qui font la fierté de l'Université Ahmadou Dieng. Diplômé en 2015 de notre faculté d'ingénierie, il est aujourd'hui à la tête de SolarGuinée, une entreprise en pleine expansion spécialisée dans les solutions d'énergie solaire adaptées au contexte guinéen. Nous l'avons rencontré dans ses bureaux à Conakry pour revenir sur son parcours inspirant.</p>
      
      <h2>De l'université à l'entrepreneuriat</h2>
      
      <p><strong>UAD Magazine : Amadou, pouvez-vous nous parler de votre parcours à l'Université Ahmadou Dieng ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> J'ai intégré l'UAD en 2011 pour y suivre une formation d'ingénieur en génie électrique. Ces années ont été déterminantes pour moi. J'ai particulièrement apprécié l'approche pratique des enseignements, avec beaucoup de projets concrets à réaliser. Je me souviens notamment d'un projet en troisième année où nous devions concevoir un système d'éclairage solaire pour un village isolé. C'est là que j'ai commencé à m'intéresser sérieusement aux énergies renouvelables.</p>
      
      <p>J'ai également eu la chance de participer au programme d'entrepreneuriat de l'université, qui m'a donné les bases en gestion et en création d'entreprise. Le professeur Konaté, qui dirigeait ce programme, a été un mentor important pour moi.</p>
      
      <p><strong>UAD Magazine : Qu'est-ce qui vous a poussé vers l'entrepreneuriat plutôt que vers un emploi salarié après vos études ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> C'est une combinaison de facteurs. D'abord, j'ai toujours eu cette envie de créer quelque chose, de construire un projet qui m'appartienne. Ensuite, j'étais frustré de voir que malgré nos ressources solaires abondantes, la Guinée souffrait toujours de problèmes d'accès à l'électricité. Je me suis dit qu'il y avait là une opportunité de développer des solutions adaptées à notre contexte.</p>
      
      <p>J'ai commencé modestement, en proposant des installations solaires pour des particuliers à Conakry. Mon premier « bureau » était la maison familiale ! Mais j'avais cette vision claire : démocratiser l'accès à l'énergie solaire en Guinée, avec des solutions abordables et adaptées aux réalités locales.</p>
      
      <h2>SolarGuinée : une success story guinéenne</h2>
      
      <p><strong>UAD Magazine : Parlez-nous de l'évolution de SolarGuinée depuis sa création.</strong></p>
      
      <p><strong>Amadou Diallo :</strong> L'entreprise a été officiellement créée en 2016, un an après mon diplôme. Les débuts ont été difficiles, comme pour toute startup. Le défi principal était de convaincre les clients potentiels que le solaire était une alternative fiable et économique à long terme, malgré l'investissement initial plus important que pour un groupe électrogène.</p>
      
      <p>Un tournant a été notre premier contrat d'envergure en 2018 : l'électrification d'un centre de santé rural dans la région de Kindia. Ce projet a démontré la pertinence de notre approche et nous a ouvert les portes d'autres opportunités. Aujourd'hui, SolarGuinée compte 28 employés permanents, dont 80% sont des techniciens et ingénieurs. Nous avons des bureaux à Conakry et des représentations à Kankan et N'Zérékoré.</p>
      
      <p>Notre catalogue s'est diversifié : nous proposons des solutions pour les particuliers, les entreprises, mais aussi des projets d'électrification communautaire et des applications agricoles comme le pompage solaire pour l'irrigation.</p>
      
      <p><strong>UAD Magazine : Quelles innovations avez-vous apportées pour vous démarquer sur ce marché ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> Notre principale innovation a été de développer des systèmes modulaires et évolutifs, qui permettent à nos clients de commencer avec une installation basique et de l'agrandir progressivement selon leurs besoins et leurs moyens. C'est crucial dans notre contexte économique.</p>
      
      <p>Nous avons également mis en place un système de paiement étalé « pay-as-you-go » pour les petites installations domestiques, ce qui rend le solaire accessible aux ménages à revenus modestes. Le client paie un acompte initial puis des mensualités, souvent inférieures à ce qu'il dépensait en factures d'électricité ou en carburant pour son groupe électrogène.</p>
      
      <p>Sur le plan technique, nous avons développé une solution de monitoring à distance de nos installations, qui nous permet de détecter et souvent de résoudre les problèmes avant même que le client ne s'en aperçoive. C'est un gage de fiabilité qui a beaucoup contribué à notre réputation.</p>
      
      <h2>L'impact sur le développement local</h2>
      
      <p><strong>UAD Magazine : Au-delà de l'aspect commercial, quel impact pensez-vous avoir sur le développement local ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> L'accès à l'énergie est un facteur de développement fondamental. Dans les zones rurales où nous avons installé des mini-centrales solaires, nous constatons des transformations significatives : les enfants peuvent étudier le soir, les centres de santé fonctionnent mieux, de petites activités économiques émergent...</p>
      
      <p>Un exemple qui me tient particulièrement à cœur est celui de Fatou, une femme de Dalaba qui a pu développer son activité de transformation de fruits grâce à l'électrification solaire. Elle emploie maintenant cinq personnes et exporte même ses produits vers Conakry.</p>
      
      <p>Nous contribuons aussi à la création d'emplois qualifiés. La plupart de nos techniciens sont des jeunes formés localement, dont certains viennent d'ailleurs de l'UAD. Nous investissons beaucoup dans leur formation continue car les technologies évoluent rapidement.</p>
      
      <p>Enfin, bien sûr, chaque kilowatt produit par le solaire remplace une énergie fossile, réduisant ainsi notre empreinte carbone. C'est modeste à l'échelle mondiale, mais c'est notre contribution à la lutte contre le changement climatique.</p>
      
      <h2>Défis et perspectives</h2>
      
      <p><strong>UAD Magazine : Quels sont les principaux défis auxquels vous faites face aujourd'hui ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> Nous avons encore plusieurs obstacles à surmonter. Le premier est l'accès au financement. Malgré nos résultats, les banques restent frileuses pour financer les projets d'énergie renouvelable, qu'elles perçoivent comme risqués. Cela limite notre capacité à réaliser des projets de grande envergure ou à préfinancer des installations pour des clients qui ne peuvent pas assumer l'investissement initial.</p>
      
      <p>Le second défi est logistique : la plupart de nos équipements (panneaux, batteries, convertisseurs) sont importés, ce qui nous expose aux fluctuations des taux de change et aux aléas de la chaîne d'approvisionnement. Nous travaillons à développer un réseau de fournisseurs plus diversifié et, à terme, à produire certains composants localement.</p>
      
      <p>Enfin, nous faisons face à une concurrence croissante, notamment de la part d'acteurs étrangers qui arrivent sur le marché guinéen. C'est à la fois un défi et un signe que le secteur se développe.</p>
      
      <p><strong>UAD Magazine : Et quelles sont vos ambitions pour les prochaines années ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> À court terme, nous visons à consolider notre présence nationale en ouvrant des bureaux dans toutes les régions de Guinée. Nous développons également de nouveaux services, notamment dans le domaine de l'efficacité énergétique, complémentaire de notre offre solaire.</p>
      
      <p>À moyen terme, nous avons l'ambition de nous étendre dans la sous-région, en commençant par la Sierra Leone et le Liberia, qui font face à des défis énergétiques similaires aux nôtres.</p>
      
      <p>Sur le plan technologique, nous travaillons sur un projet de micro-réseaux intelligents pour les zones rurales, qui permettraient d'optimiser la distribution d'énergie et la gestion de la demande. C'est un projet sur lequel nous collaborons d'ailleurs avec le laboratoire d'énergie de l'UAD.</p>
      
      <h2>Conseils aux futurs entrepreneurs</h2>
      
      <p><strong>UAD Magazine : Quels conseils donneriez-vous aux étudiants de l'UAD qui rêvent de suivre vos pas dans l'entrepreneuriat ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> D'abord, je leur dirais de profiter pleinement de leurs années à l'université pour acquérir des compétences solides, mais aussi pour construire un réseau. Beaucoup de mes premiers clients et partenaires étaient des contacts noués pendant mes études.</p>
      
      <p>Ensuite, je les encouragerais à identifier des problèmes concrets à résoudre plutôt que de copier des modèles d'affaires existants. La Guinée a de nombreux défis qui sont autant d'opportunités pour des entrepreneurs innovants.</p>
      
      <p>Je leur conseillerais aussi de commencer modestement mais de voir grand. SolarGuinée a démarré avec des installations domestiques basiques, mais j'avais dès le départ une vision plus large de ce que l'entreprise pourrait devenir.</p>
      
      <p>Enfin, la persévérance est essentielle. Les débuts sont toujours difficiles, et il faut s'accrocher à sa vision même quand les obstacles semblent insurmontables. Comme on dit chez nous : « Petit à petit, l'oiseau fait son nid. »</p>
      
      <p><strong>UAD Magazine : Un dernier mot pour conclure ?</strong></p>
      
      <p><strong>Amadou Diallo :</strong> Je tiens à remercier l'UAD pour la formation solide que j'y ai reçue. Je reste très attaché à cette institution, et j'essaie de contribuer à mon tour en accueillant des stagiaires et en participant aux événements sur l'entrepreneuriat. C'est important pour moi de transmettre et de maintenir ce lien avec les nouvelles générations d'étudiants.</p>
      
      <p>Et je voudrais dire à ces étudiants que la Guinée a besoin d'entrepreneurs engagés, qui apportent des solutions aux défis du pays tout en créant de la valeur économique. C'est exigeant, mais c'est aussi extrêmement gratifiant.</p>
    `
  },
  {
    id: 5,
    title: "Résumé de la conférence sur le changement climatique",
    excerpt: "Retour sur les moments forts de la conférence internationale sur le changement climatique en Afrique de l'Ouest.",
    date: "1 septembre 2023",
    author: "Dr. Aïssatou Diallo",
    category: "Événements",
    image: "climate-conference.jpg",
    readTime: "6 min de lecture",
    content: `
      <p>Les 28 et 29 août derniers, l'Université Ahmadou Dieng a accueilli une conférence internationale sur « Les défis du changement climatique en Afrique de l'Ouest : adaptations et résilience ». Cet événement, organisé en partenariat avec le Programme des Nations Unies pour l'Environnement (PNUE) et le Ministère guinéen de l'Environnement, a réuni plus de 200 participants, dont des chercheurs, des décideurs politiques, des représentants d'ONG et des étudiants venus de 12 pays d'Afrique et d'Europe.</p>
      
      <h2>Objectifs et thématiques</h2>
      <p>Cette conférence visait à faire le point sur les connaissances scientifiques actuelles concernant les impacts du changement climatique en Afrique de l'Ouest, et à échanger sur les stratégies d'adaptation et de résilience mises en œuvre ou envisagées dans la région.</p>
      
      <p>Cinq grandes thématiques ont été abordées :</p>
      <ul>
        <li>L'évolution du climat ouest-africain : tendances et projections</li>
        <li>Les impacts sur l'agriculture et la sécurité alimentaire</li>
        <li>La gestion des ressources en eau dans un contexte de changement climatique</li>
        <li>La vulnérabilité des zones côtières</li>
        <li>Les politiques publiques et les initiatives locales d'adaptation</li>
      </ul>
      
      <h2>Principales conclusions scientifiques</h2>
      
      <h3>Un réchauffement déjà perceptible</h3>
      <p>Le Dr. Mohammed Konaté, climatologue à l'Université de Ouagadougou, a présenté une synthèse des observations climatiques en Afrique de l'Ouest au cours des 50 dernières années. Ses données montrent un réchauffement moyen de 1,1°C depuis 1970, avec une accélération notable depuis les années 2000. Ce réchauffement est plus prononcé dans les zones sahéliennes (+1,4°C) que dans les régions côtières (+0,8°C).</p>
      
      <p>Les projections pour la fin du siècle, selon les différents scénarios du GIEC, prévoient une augmentation de température comprise entre 1,5°C et 4,8°C pour la région. « Même dans les scénarios les plus optimistes, nous devons nous préparer à un réchauffement significatif », a souligné le Dr. Konaté.</p>
      
      <h3>Des précipitations plus irrégulières</h3>
      <p>Concernant les précipitations, la tendance est moins uniforme mais tout aussi préoccupante. La Pr. Aminata Touré, de notre département de Géographie, a présenté des analyses montrant une plus grande variabilité interannuelle des pluies et une modification de leur répartition saisonnière : « Nous observons des saisons des pluies plus courtes mais plus intenses, avec une augmentation des épisodes de précipitations extrêmes, entrecoupés de périodes sèches plus longues. »</p>
      
      <p>Cette évolution complique considérablement la planification agricole et augmente les risques d'inondations, comme celles qui ont affecté plusieurs villes ouest-africaines ces dernières années.</p>
      
      <h2>Impacts sectoriels et vulnérabilités</h2>
      
      <h3>Agriculture et sécurité alimentaire</h3>
      <p>Plusieurs intervenants ont abordé la question cruciale des impacts sur l'agriculture, secteur dont dépend une grande partie de la population ouest-africaine. Le Dr. Jean-Marc Garreau, du CIRAD, a présenté des modélisations indiquant une possible diminution des rendements de certaines cultures pluviales (mil, sorgho) de 5 à 20% d'ici 2050 dans les zones sahéliennes, si des mesures d'adaptation ne sont pas mises en œuvre.</p>
      
      <p>Toutefois, tous ont souligné que ces impacts négatifs ne sont pas une fatalité. Des témoignages d'agriculteurs et de techniciens agricoles ont illustré des exemples réussis d'adaptation : introduction de variétés plus résistantes à la sécheresse, techniques de conservation de l'eau, agroforesterie, etc.</p>
      
      <h3>Zones côtières en première ligne</h3>
      <p>La session consacrée aux zones côtières a mis en évidence leur extrême vulnérabilité. Le Dr. Samuel Johnson, océanographe à l'Université de Lagos, a présenté des études sur l'érosion côtière qui affecte déjà gravement des pays comme le Togo, le Bénin et la Côte d'Ivoire. « Avec l'élévation du niveau de la mer, qui pourrait atteindre 50 à 80 cm d'ici la fin du siècle, et l'intensification des tempêtes, cette érosion va s'accélérer, menaçant des infrastructures et des établissements humains importants », a-t-il averti.</p>
      
      <p>La ville de Conakry, comme d'autres capitales côtières de la région, est particulièrement exposée à ces risques, d'autant plus que l'urbanisation rapide et souvent mal planifiée aggrave la vulnérabilité.</p>
      
      <h2>Stratégies d'adaptation et de résilience</h2>
      
      <h3>Initiatives locales prometteuses</h3>
      <p>Un aspect particulièrement intéressant de la conférence a été la présentation de nombreuses initiatives locales d'adaptation qui démontrent la capacité d'innovation des communautés face aux défis climatiques.</p>
      
      <p>Parmi les exemples marquants figurait le projet « Femmes et Forêts » en Casamance (Sénégal), présenté par Mme Coumba Dieng de l'ONG Action Climat. Ce projet combine restauration des mangroves, aquaculture durable et renforcement économique des femmes. « En trois ans, les participantes ont non seulement contribué à restaurer plus de 300 hectares de mangroves, qui protègent la côte et servent de nurserie aux poissons, mais elles ont aussi augmenté leurs revenus de 40% en moyenne », a expliqué Mme Dieng.</p>
      
      <p>Au Mali, le projet « Banques de céréales climatiques » permet aux communautés de constituer des réserves alimentaires pendant les bonnes années, tout en utilisant des prévisions climatiques saisonnières pour adapter leurs pratiques agricoles. « C'est un exemple de la façon dont les savoirs traditionnels peuvent se combiner avec les informations scientifiques modernes », a souligné le Dr. Ousmane Traoré, coordinateur du projet.</p>
      
      <h3>Vers des politiques climatiques intégrées</h3>
      <p>La table ronde finale, qui réunissait des représentants de plusieurs ministères de l'environnement de la région et des organisations régionales comme la CEDEAO, a souligné l'importance d'intégrer l'adaptation au changement climatique dans toutes les politiques sectorielles : agriculture, eau, énergie, infrastructures, etc.</p>
      
      <p>M. Souleymane Bah, directeur national de l'environnement de Guinée, a présenté la nouvelle stratégie nationale d'adaptation au changement climatique, qui sera finalisée en fin d'année. « Cette stratégie met l'accent sur la gouvernance participative et l'implication des collectivités locales, car l'adaptation doit se faire en tenant compte des réalités de chaque territoire », a-t-il précisé.</p>
      
      <p>Les intervenants ont également insisté sur la nécessité d'un meilleur accès aux financements climatiques internationaux. « L'Afrique, qui contribue très peu aux émissions de gaz à effet de serre, subit de plein fouet les impacts du changement climatique. Il est juste que les financements promis par les pays développés se concrétisent et soient accessibles aux acteurs locaux », a déclaré Mme Fatoumata Koné, de la Banque Africaine de Développement.</p>
      
      <h2>Le rôle clé des universités</h2>
      <p>Dans son discours de clôture, le Recteur de l'UAD, Pr. Mamadou Traoré, a souligné le rôle crucial que les universités peuvent et doivent jouer face au défi climatique :</p>
      <ul>
        <li>Production de connaissances scientifiques adaptées au contexte régional</li>
        <li>Formation des futures générations de décideurs et de professionnels</li>
        <li>Appui technique aux communautés et aux décideurs</li>
        <li>Sensibilisation du grand public aux enjeux climatiques</li>
      </ul>
      
      <p>« Notre université s'engage à renforcer ses programmes de recherche et d'enseignement sur le changement climatique, et à les ancrer dans les réalités de notre pays et de notre région », a-t-il promis.</p>
      
      <h2>Perspectives et suites</h2>
      <p>La conférence s'est conclue par l'adoption d'une déclaration commune, la « Déclaration de Conakry sur le changement climatique », qui appelle à renforcer la coopération scientifique régionale et à mettre en place un observatoire ouest-africain du climat.</p>
      
      <p>Un comité de suivi a été mis en place pour assurer la mise en œuvre des recommandations issues des différentes sessions, et une prochaine conférence est prévue en 2025 à Dakar.</p>
      
      <p>Les actes complets de la conférence, comprenant toutes les communications et les résumés des débats, seront publiés en décembre 2023 et seront disponibles en version numérique sur le site de l'université.</p>
      
      <h2>Conclusion</h2>
      <p>Cette conférence a démontré l'urgence d'agir face au changement climatique en Afrique de l'Ouest, mais aussi la richesse des initiatives et des connaissances déjà existantes dans la région. Elle a permis de créer des liens précieux entre chercheurs, décideurs et acteurs de terrain, qui sont essentiels pour développer des réponses adaptées à ce défi majeur.</p>
      
      <p>Comme l'a résumé la Pr. Aminata Touré dans ses propos de clôture : « Le changement climatique est un défi redoutable, mais il peut aussi être une opportunité pour repenser nos modèles de développement et construire des sociétés plus résilientes et plus durables. C'est ce à quoi nous devons collectivement travailler. »</p>
    `
  },
  {
    id: 6,
    title: "Nouveaux partenariats académiques: opportunités pour nos étudiants",
    excerpt: "Présentation des nouveaux partenariats signés avec des universités en Europe et en Amérique du Nord.",
    date: "25 août 2023",
    author: "Bureau des Relations Internationales",
    category: "Partenariats",
    image: "partnerships.jpg",
    readTime: "4 min de lecture",
    content: `
      <p>L'Université Ahmadou Dieng (UAD) est fière d'annoncer la signature de plusieurs accords de partenariat académique avec des institutions prestigieuses en Europe et en Amérique du Nord. Ces nouvelles collaborations, formalisées au cours de l'été 2023, ouvrent des perspectives enrichissantes pour nos étudiants et nos enseignants-chercheurs.</p>
      
      <h2>De nouveaux horizons académiques</h2>
      <p>Ces partenariats s'inscrivent dans la stratégie d'internationalisation de notre université, qui vise à offrir à notre communauté académique une ouverture sur le monde et des opportunités d'excellence.</p>
      
      <h3>Université de Montréal (Canada)</h3>
      <p>L'accord signé avec l'Université de Montréal, l'une des principales universités francophones d'Amérique du Nord, prévoit :</p>
      <ul>
        <li>Des échanges d'étudiants (5 places par an) pour des séjours d'un semestre ou d'une année académique</li>
        <li>Des échanges d'enseignants-chercheurs pour des périodes de 1 à 3 mois</li>
        <li>Des projets de recherche conjoints, notamment dans les domaines de la santé publique, des sciences de l'environnement et des études africaines</li>
        <li>Des co-tutelles de thèses de doctorat</li>
      </ul>
      
      <p>« Ce partenariat avec une université majeure du Québec ouvre des possibilités exceptionnelles pour nos étudiants qui souhaitent vivre une expérience académique nord-américaine tout en poursuivant leurs études en français », souligne le Dr. Souleymane Camara, directeur des Relations Internationales de l'UAD.</p>
      
      <h3>Université Libre de Bruxelles (Belgique)</h3>
      <p>La collaboration avec l'ULB, une université européenne de premier plan, se concentrera sur :</p>
      <ul>
        <li>Les échanges d'étudiants au niveau master (3 places par an)</li>
        <li>La formation continue des enseignants</li>
        <li>Des programmes de recherche communs dans les domaines du droit international, de l'économie du développement et des sciences politiques</li>
        <li>L'organisation conjointe de colloques internationaux</li>
      </ul>
      
      <p>« L'ULB est reconnue pour son expertise dans plusieurs domaines qui correspondent à nos priorités de développement académique. Ce partenariat nous permet d'offrir à nos étudiants et enseignants une exposition aux meilleures pratiques européennes », explique le Recteur de l'UAD, Pr. Mamadou Traoré.</p>
      
      <h3>Université Mohammed VI Polytechnique (Maroc)</h3>
      <p>Cette collaboration sud-sud avec l'UM6P, une université marocaine innovante, portera principalement sur :</p>
      <ul>
        <li>Les échanges académiques dans les domaines des sciences et technologies, de l'agriculture durable et des énergies renouvelables</li>
        <li>Des projets de recherche appliquée répondant aux défis communs du développement en Afrique</li>
        <li>Le partage d'expériences en matière de pédagogie innovante et d'entrepreneuriat étudiant</li>
        <li>Des stages croisés pour les étudiants</li>
      </ul>
      
      <p>« Ce partenariat avec une institution africaine d'excellence illustre notre engagement à développer les collaborations sud-sud, pour des solutions adaptées à nos contextes », indique le Pr. Aïssatou Bah, Vice-Recteur à la Recherche.</p>
      
      <h2>Opportunités concrètes pour nos étudiants</h2>
      
      <h3>Programmes de mobilité</h3>
      <p>Dès l'année académique 2023-2024, ces partenariats permettront à des étudiants de l'UAD de bénéficier de séjours d'études dans ces universités partenaires.</p>
      
      <p>Pour les étudiants de premier cycle (licence), les opportunités concernent principalement des séjours d'un semestre, généralement au cours de la troisième année. Pour les étudiants de master et doctorat, des séjours plus longs sont possibles, jusqu'à une année académique complète.</p>
      
      <p>Points importants à noter :</p>
      <ul>
        <li>Les crédits obtenus dans l'université d'accueil sont pleinement reconnus par l'UAD grâce à un système d'équivalence</li>
        <li>Les étudiants restent inscrits à l'UAD et sont exemptés des frais de scolarité dans l'université partenaire</li>
        <li>Une maîtrise suffisante de la langue d'enseignement est requise (français ou anglais selon les destinations)</li>
      </ul>
      
      <h3>Bourses et soutien financier</h3>
      <p>Pour faciliter ces mobilités, plusieurs sources de financement sont disponibles :</p>
      <ul>
        <li>Bourses d'excellence de l'UAD (5 bourses de 5000 € par an)</li>
        <li>Programme de bourses de l'Agence Universitaire de la Francophonie</li>
        <li>Bourses du gouvernement canadien pour les mobilités vers l'Université de Montréal</li>
        <li>Soutien de la Coopération belge pour les échanges avec l'ULB</li>
        <li>Bourses de la Fondation OCP pour les mobilités vers l'UM6P</li>
      </ul>
      
      <p>« Nous sommes conscients que le coût représente un frein majeur à la mobilité internationale. C'est pourquoi nous avons travaillé à sécuriser ces différentes sources de financement pour nos étudiants », précise le Dr. Camara.</p>
      
      <h3>Double diplomation</h3>
      <p>Au-delà des échanges semestriels, certains de ces partenariats ouvrent la voie à des programmes de double diplomation, particulièrement au niveau master. Concrètement, un étudiant peut obtenir à la fois le diplôme de l'UAD et celui de l'université partenaire, renforçant considérablement son profil international.</p>
      
      <p>Dans l'immédiat, deux programmes de double diplomation sont lancés :</p>
      <ul>
        <li>Master en Gestion des Ressources Naturelles (UAD / Université de Montréal)</li>
        <li>Master en Droit International et Développement (UAD / ULB)</li>
      </ul>
      
      <p>Ces programmes impliquent généralement une année d'études à l'UAD et une année dans l'université partenaire, avec un mémoire co-encadré par des enseignants des deux institutions.</p>
      
      <h2>Comment postuler ?</h2>
      
      <h3>Critères d'éligibilité</h3>
      <p>Pour pouvoir bénéficier de ces programmes de mobilité, les étudiants doivent remplir plusieurs conditions :</p>
      <ul>
        <li>Être régulièrement inscrit à l'UAD depuis au moins deux semestres</li>
        <li>Avoir obtenu une moyenne générale d'au moins 14/20 lors des deux derniers semestres</li>
        <li>Justifier d'un niveau de langue suffisant (B2 minimum, certification officielle exigée pour certaines destinations)</li>
        <li>Présenter un projet d'études ou de recherche cohérent</li>
      </ul>
      
      <h3>Procédure de candidature</h3>
      <p>Les étudiants intéressés doivent constituer un dossier comprenant :</p>
      <ul>
        <li>Le formulaire de candidature (disponible au Bureau des Relations Internationales ou sur l'intranet de l'UAD)</li>
        <li>Une lettre de motivation précisant le projet de mobilité</li>
        <li>Un CV actualisé</li>
        <li>Les relevés de notes des deux derniers semestres</li>
        <li>Une attestation de niveau de langue</li>
        <li>Deux lettres de recommandation d'enseignants de l'UAD</li>
      </ul>
      
      <p>Les dossiers complets doivent être déposés au Bureau des Relations Internationales selon le calendrier suivant :</p>
      <ul>
        <li>Pour une mobilité au premier semestre (septembre-janvier) : dépôt avant le 15 mars de l'année en cours</li>
        <li>Pour une mobilité au second semestre (février-juin) : dépôt avant le 15 octobre de l'année précédente</li>
      </ul>
      
      <h3>Sélection et préparation</h3>
      <p>Les candidatures sont examinées par une commission composée de représentants du Bureau des Relations Internationales, des différentes facultés concernées et de la Vice-Présidence aux Affaires Académiques.</p>
      
      <p>Les étudiants sélectionnés bénéficient d'un accompagnement personnalisé pour préparer leur mobilité : aide aux démarches administratives (visa, assurance, etc.), préparation interculturelle, et soutien pour l'élaboration du contrat d'études.</p>
      
      <h2>Témoignages et retours d'expérience</h2>
      <p>Bien que ces partenariats soient récents, l'UAD avait déjà mis en place des programmes pilotes avec ces institutions. Voici quelques témoignages d'étudiants qui ont participé à ces expériences préliminaires :</p>
      
      <blockquote>
        <p>« Mon semestre à l'Université de Montréal a été une révélation. J'ai découvert de nouvelles méthodes d'enseignement, j'ai pu accéder à des ressources documentaires exceptionnelles, et j'ai noué des contacts qui me seront précieux pour la suite de mon parcours. Je recommande vivement cette expérience à tous les étudiants de l'UAD qui en ont la possibilité. »</p>
        <footer>Mariame Diallo, étudiante en Master de Relations Internationales</footer>
      </blockquote>
      
      <blockquote>
        <p>« L'ULB m'a offert un environnement de recherche stimulant pour avancer sur ma thèse. Les échanges avec les doctorants belges et internationaux ont considérablement enrichi ma réflexion. Au-delà de l'aspect académique, cette immersion dans la vie bruxelloise a été une expérience humaine extraordinaire. »</p>
        <footer>Ibrahim Bah, doctorant en Économie du Développement</footer>
      </blockquote>
      
      <h2>Réunions d'information</h2>
      <p>Pour présenter en détail ces opportunités, le Bureau des Relations Internationales organise une série de réunions d'information :</p>
      <ul>
        <li>Mardi 5 septembre à 14h : Amphithéâtre Central - Présentation générale des programmes</li>
        <li>Mercredi 6 septembre à 10h : Faculté des Sciences - Focus sur les échanges scientifiques</li>
        <li>Mercredi 6 septembre à 15h : Faculté de Droit et Sciences Politiques - Focus sur les sciences sociales</li>
        <li>Jeudi 7 septembre à 11h : Faculté des Lettres et Sciences Humaines - Préparation linguistique et interculturelle</li>
      </ul>
      
      <p>Des représentants des universités partenaires participeront à certaines de ces sessions via visioconférence pour répondre aux questions spécifiques des étudiants.</p>
      
      <h2>Conclusion</h2>
      <p>Ces nouveaux partenariats internationaux marquent une étape importante dans le développement de l'UAD et sa reconnaissance à l'échelle mondiale. Ils offrent à nos étudiants des perspectives inédites pour enrichir leur formation, développer leur ouverture interculturelle et renforcer leur employabilité.</p>
      
      <p>« Dans un monde globalisé, l'expérience internationale n'est plus un luxe mais une nécessité pour former des citoyens et des professionnels capables de relever les défis contemporains. Ces partenariats s'inscrivent dans notre mission de former l'élite de demain, ancrée localement mais ouverte sur le monde », conclut le Recteur.</p>
      
      <p>Pour toute information complémentaire, les étudiants sont invités à contacter le Bureau des Relations Internationales (bureau 205, bâtiment administratif) ou à consulter la section dédiée sur le site web de l'université.</p>
    `
  }
];

// Fonction pour trouver un article par son ID
const findPostById = (id: string | number): BlogPost | undefined => {
  const postId = typeof id === 'string' ? parseInt(id) : id;
  return blogPostsData.find(post => post.id === postId);
};

export default function ArticleDetail() {
  // Récupérer l'ID de l'article depuis l'URL
  const [, params] = useRoute('/article/:id');
  const articleId = params?.id;
  
  // Trouver l'article correspondant
  const article = articleId ? findPostById(articleId) : undefined;
  
  // Si l'article n'existe pas, afficher un message d'erreur
  if (!article) {
    useEffect(() => {
      document.title = "Article non trouvé - Université Ahmadou Dieng";
    }, []);
    
    return (
      <Layout>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-heading font-bold mb-4 text-[#003366]">Article non trouvé</h1>
            <p className="text-lg mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Link href="/blog" className="bg-[#003366] hover:bg-[#00264d] text-white py-2 px-6 rounded-full transition-all font-medium inline-flex items-center">
              <i className="fas fa-arrow-left mr-2"></i>
              Retour au blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Si l'article existe, afficher son contenu
  useEffect(() => {
    document.title = `${article.title} - Université Ahmadou Dieng`;
    window.scrollTo(0, 0);
  }, [article.title]);
  
  return (
    <Layout>
      <div className="pt-20"> {/* Espace pour le header fixe */}
        {/* En-tête de l'article */}
        <div className="bg-[#003366] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <span className="bg-[#E67E22] text-white py-1 px-3 rounded-full text-sm font-medium mr-4">
                  {article.category}
                </span>
                <span className="text-white/80">{article.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{article.title}</h1>
              <p className="text-xl text-white/90 mb-6">{article.excerpt}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#003366] flex items-center justify-center mr-3">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <div className="font-medium">{article.author}</div>
                  <div className="text-sm text-white/70">{article.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image principale */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="h-96 bg-gray-200 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <i className="fas fa-image text-5xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu de l'article */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-[#003366] prose-p:text-gray-800 prose-a:text-[#E67E22] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#E67E22] prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:italic">
              <div dangerouslySetInnerHTML={{ __html: article.content || "" }}></div>
            </div>
          </div>
        </article>
        
        {/* Partage et navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                  <span className="text-gray-700 font-medium">Partager :</span>
                  <a href="#" className="text-[#003366] hover:text-[#E67E22]" aria-label="Partager sur Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-[#003366] hover:text-[#E67E22]" aria-label="Partager sur Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[#003366] hover:text-[#E67E22]" aria-label="Partager sur LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-[#003366] hover:text-[#E67E22]" aria-label="Partager par email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
                <Link href="/blog" className="text-[#003366] hover:text-[#E67E22] font-medium flex items-center transition-colors">
                  <i className="fas fa-arrow-left mr-2"></i>
                  Retour au blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Articles liés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-8 text-[#003366]">Articles similaires</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPostsData
                  .filter(post => post.id !== article.id && post.category === article.category)
                  .slice(0, 3)
                  .map(post => (
                    <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <div className="p-5">
                        <div className="flex items-center text-xs text-gray-600 mb-2">
                          <span className="bg-[#E67E22]/10 text-[#E67E22] py-1 px-2 rounded-full font-medium mr-2">
                            {post.category}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-lg font-heading font-bold mb-2 text-[#003366] hover:text-[#E67E22] transition-colors">
                          <Link href={`/article/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">{post.readTime}</span>
                          <Link href={`/article/${post.id}`} className="text-[#003366] hover:text-[#E67E22] text-sm font-medium transition-colors">
                            Lire
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
