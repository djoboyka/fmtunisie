import { Plane, CreditCard, Sun, Shield, Phone, MapPin, Book, Users } from 'lucide-react';

const TravelGuidePage = () => {
  const sections = [
    {
      icon: Plane,
      title: 'Entrée et Visa',
      content: (
        <>
          <p className="mb-4">
            Pour un court séjour touristique, la plupart des nationalités n'ont
            pas besoin de visa jusqu'à 90 jours. Les recommandations américaines
            précisent l'absence de visa pour un séjour inférieur à 90 jours, avec
            une validité de passeport de six mois.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Exemption de visa jusqu'à 90 jours pour de nombreuses nationalités</li>
            <li>Passeport valide (6 mois recommandé)</li>
            <li>Justificatifs à l'arrivée: hébergement, billet de sortie</li>
            <li>Amendes en cas de dépassement</li>
          </ul>
        </>
      ),
    },
    {
      icon: CreditCard,
      title: 'Monnaie et Paiements',
      content: (
        <>
          <p className="mb-4">
            Le dinar tunisien (TND) est une devise fermée: il n'est pas
            convertible hors du pays, et seul le TND a cours légal pour les
            transactions locales.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Change en banques ou bureaux autorisés</li>
            <li>Garder tous les récépissés d'échange</li>
            <li>Carte acceptée dans établissements touristiques</li>
            <li>Cash indispensable (taxis, petites échoppes, zones rurales)</li>
            <li>Reconversion limitée au départ (avec récépissé original)</li>
          </ul>
        </>
      ),
    },
    {
      icon: MapPin,
      title: 'Transports et Mobilités',
      content: (
        <>
          <p className="mb-4">
            La mobilité en Tunisie est multi-modale: avion pour les grandes
            distances, trains pour la côte, bus et louages pour liaisons rapides.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Aéroports Principaux:</h4>
              <ul className="list-disc list-inside">
                <li>Tunis-Carthage (TUN) — Hub international</li>
                <li>Djerba-Zarzis (DJE) — Accès île</li>
                <li>Monastir (MIR) — Côte centrale</li>
                <li>Enfidha-Hammamet (NBE) — Resort access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Trains:</h4>
              <ul className="list-disc list-inside">
                <li>TGM: Tunis-La Marsa-Sidi Bou Said</li>
                <li>Sahel Metro: Sousse-Monastir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Bus & Louages:</h4>
              <ul className="list-disc list-inside">
                <li>SNTRI: Bus interurbains programmés</li>
                <li>Louages: Minibus partagés, départ "quand plein"</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Sun,
      title: 'Météo et Meilleure Période',
      content: (
        <>
          <p className="mb-4">
            Le climat à Tunis est méditerranéen: été chaud et sec, hiver doux et
            venté. Les meilleures périodes varient selon vos activités.
          </p>
          <div className="space-y-3">
            <div className="bg-mediterranean-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tourisme Culturel:</h4>
              <p>Mi-avril à fin juin et fin septembre à mi-novembre</p>
            </div>
            <div className="bg-mediterranean-sand-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Plage et Baignade:</h4>
              <p>Mi-juin à mi-septembre (mer optimale juillet-octobre)</p>
            </div>
            <div className="bg-mediterranean-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Désert:</h4>
              <p>Automne et printemps (chaleur excessive en été)</p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Shield,
      title: 'Sécurité et Santé',
      content: (
        <>
          <p className="mb-4">
            La Tunisie est généralement sûre pour les touristes. Comme partout,
            une vigilance normale s'impose.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Suivre les recommandations officielles du voyage</li>
            <li>Éviter les rassemblements publics</li>
            <li>Garder copies de passeport et contacts d'urgence</li>
            <li>Eau du robinet généralement potable, mais eau embouteillée recommandée</li>
            <li>Vaccins à jour recommandés (hépatite A, typhoïde selon durée)</li>
            <li>Assurance voyage couvrant santé et rapatriement</li>
          </ul>
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Communication et Internet',
      content: (
        <>
          <p className="mb-4">
            La Tunisie dispose d'une bonne couverture réseau dans les zones urbaines
            et touristiques.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Opérateurs: Ooredoo, Orange, Tunisie Telecom</li>
            <li>SIM prépayées disponibles à l'aéroport</li>
            <li>WiFi dans hôtels, cafés et espaces publics</li>
            <li>Indicatif pays: +216</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Stunning Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/souk_market_2.jpg"
            alt="Traditional Tunisian Market"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Book className="h-4 w-4 text-mediterranean-coral-400" />
              <span className="text-sm font-medium">Guide Complet</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              Guide de{' '}
              <span className="text-mediterranean-sand-300">Voyage</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
              Tout ce qu'il faut savoir pour préparer votre voyage en Tunisie:
              visa, monnaie, transport, climat et conseils pratiques.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Premium Design */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="premium-card p-10 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-4 rounded-2xl shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gradient-blue">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cultural Tips with Premium Styling */}
          <div className="mt-16 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-mediterranean-sand-100 to-mediterranean-blue-50"></div>
            <div className="relative p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-4 rounded-2xl shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gradient-blue">
                  Culture et Étiquette
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed text-lg">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display font-bold text-xl text-mediterranean-blue-900 mb-3">
                    Tenue vestimentaire
                  </h3>
                  <p>
                    Couvrir épaules et genoux dans les médinas et lieux religieux. 
                    Tête couverte souvent requise dans les mosquées.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display font-bold text-xl text-mediterranean-blue-900 mb-3">
                    Ramadan
                  </h3>
                  <p>
                    Discrétion de jour (éviter de manger en public). Le soir, iftar 
                    anime rues et tables.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display font-bold text-xl text-mediterranean-blue-900 mb-3">
                    Salutations
                  </h3>
                  <p>
                    Formules locales (ex. "Aslema, labes?"), poignée de main adaptée, 
                    introduire d'abord les plus âgés.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display font-bold text-xl text-mediterranean-blue-900 mb-3">
                    Photographie
                  </h3>
                  <p>
                    Toujours demander l'autorisation avant de photographier les personnes. 
                    Respecter les interdictions (sites militaires).
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl md:col-span-2">
                  <h3 className="font-display font-bold text-xl text-mediterranean-blue-900 mb-3">
                    À table
                  </h3>
                  <p>
                    Main droite pour manger et saluer. Accepter les seconds plats 
                    (marque de considération).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuidePage;
