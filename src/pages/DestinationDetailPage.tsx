import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Calendar } from 'lucide-react';

const DestinationDetailPage = () => {
  const { slug } = useParams();

  const destinations = {
    'el-djem': {
      name: 'El Djem',
      heroImage: '/images/el_djem_amphitheater_1.webp',
      description: 'L\'amphithéâtre d\'El Djem est l\'un des mieux conservés au monde et constitue un témoignage exceptionnel de l\'architecture romano-africaine.',
      overview: 'Classé au patrimoine mondial de l\'UNESCO, l\'amphithéâtre d\'El Djem témoigne de la grandeur de l\'Afrique romaine. Cette arène monumentale pouvait accueillir jusqu\'à 35 000 spectateurs et fut le théâtre de combats de gladiateurs pendant plus de trois siècles.',
      highlights: [
        'Amphithéâtre du IIIe siècle - 35 000 places',
        'Périmètre de 1 517 mètres et hauteur de 36 mètres',
        'Échelle giantrome bien conservée',
        'Musée d\'archéologie d\'El Djem',
        'Site classé UNESCO depuis 1979'
      ],
      practicalInfo: {
        duration: '1/2 journée',
        bestTime: 'October à mai',
        distance: '270 km de Tunis',
        access: 'Voiture (3h) ou Train (3h30)'
      },
      tips: [
        'Réservez un guide pour une visite approfondie',
        'Portez des chaussures confortables',
        'Évitez les heures les plus chaudes en été',
        'Comparez les prix des guides sur place'
      ]
    },
    'dougga': {
      name: 'Dougga',
      heroImage: '/images/dougga_roman_1.webp',
      description: 'Dougga est la plus belle cité romaine de Tunisie, perchée sur une colline dominant la vallée fertile du Kébir.',
      overview: 'Ancienne capitale de la confédération numide des Masaesyles, Dougga fut ensuite une próspréreuse cité romaine. Ses ruines exceptionnellement préservées surplombent la campagne tunisienne, offrant un panorama exceptionnel sur les paysages environnants.',
      highlights: [
        'Théâtre antique (3 500 places) parfaitement conservé',
        'Capitol dédiée à Jupiter, Junon et Minerve',
        'Thermes du Nord, chef-d\'œuvre de l\'art thermal',
        'Forum principal avec statues et colonnades',
        'Cardo Maximus et decumanus routier',
        'Site classé UNESCO depuis 1997'
      ],
      practicalInfo: {
        duration: '1 journée',
        bestTime: 'October à avril',
        distance: '140 km de Tunis',
        access: 'Voiture (2h) via Dougga'
      },
      tips: [
        'Commencer la visite tôt le matin',
        'Emporter de l\'eau et des collation',
        'Prévoir au minimum 3-4 heures pour la visite',
        'Profiter de la vue panoramique depuis le théâtre'
      ]
    },
    'carthage': {
      name: 'Carthage',
      heroImage: '/images/carhtage_ruins_0.webp',
      description: 'Carthage, légende de l\'Antiquité, offre un voyage à travers 3 000 ans d\'histoire entre légendes puniques et splendeur romaine.',
      overview: 'Fondée par les Phéniciens au IXe siècle av. J.-C., Carthage fut la rivale de Rome avant de devenir une próspréreuse colonie romaine. Ses ruines empiétées dans la ville moderne de Tunis racontent l\'histoire d\'une des plus grandes civilisations de l\'Antiquité.',
      highlights: [
        'Académie de Carthage, résidence du Président',
        'Thermes d\'Antonin, complexe thermal colossal',
        'Port circular punique, relic du grand port',
        'Punic Necropolis avec tombes monumentales',
        'Musée de Carthage avec trésors puniques',
        'Robe y compris avec la cathédrale Saint-Louis'
      ],
      practicalInfo: {
        duration: '1/2 journée',
        bestTime: 'Toute l\'année',
        distance: '15 km de Tunis',
        access: 'TCRP (tramway) ou voiture (20 min)'
      },
      tips: [
        'Combinez avec la visite de Sidi Bou Said',
        'Réservez une visite guidée pour comprendre l\'histoire',
        'Musée ouvert tous les jours sauf le lundi',
        'Thermes d\'Antonin fermée le lundi'
      ]
    },
    'tunis': {
      name: 'Tunis',
      heroImage: '/images/tunis_medina_0.webp',
      description: 'Tunis marie un centre moderne à une médina classée UNESCO et à un hinterland historique dense.',
      overview: 'Capitale de la Tunisie, Tunis est une fascinante juxtaposition entre patrimoine historique et modernité. La médina coloniale contraste avec le centre-ville français et les quartiers résidentiels contemporains.',
      highlights: [
        'Médina de Tunis - patrimoine UNESCO',
        'Musée du Bardo avec ses mosaïques exceptionnelles',
        'Avenue Habib Bourguiba - Champs-Elysées tunisiens',
        'Marchés et souks traditionnels',
        'Café les arcades et terrasses élégantes'
      ],
      practicalInfo: {
        duration: '2-3 jours',
        bestTime: 'Mars à mai, septembre à novembre',
        distance: 'Centre du pays',
        access: 'Aéroport international, transport public développé'
      },
      tips: [
        'Séjourner dans la médina pour l\'expérience authentique',
        'Visiter le Musée du Bardo le matin',
        'Flâner dans l\'avenue Habib Bourguiba le soir',
        'Négogier dans les souks, c\'est une tradition'
      ]
    },
    'sousse': {
      name: 'Sousse',
      heroImage: '/images/sousse_ribat_5.webp',
      description: 'La "Perle du Sahel" aligne Ribat, Grande Mosquée, musée archéologique et une corniche propice aux apéros couchants.',
      overview: 'Troisième ville de Tunisie, Sousse est une perle architecturale au cœur du Sahel. Sa médina sauvegardée, son ribat historiques et son musée archéologique en font un site impéract au patrimoine mondial de l\'UNESCO.',
      highlights: [
        'Ribat de Sousse - forteresse du IXe siècle',
        'Grande Mosquée - architecture islamique',
        'Musée archéologique - mosaïques majeures',
        'Médina sauvegardée UNESCO',
        'Port de pêche traditionnel'
      ],
      practicalInfo: {
        duration: '2 jours',
        bestTime: 'Avril à juin, septembre à novembre',
        distance: '140 km de Tunis',
        access: 'Autoroute (1h30) ou train (2h)'
      },
      tips: [
        'Observer l\'architecture depuis les remparts',
        'Visiter le musée archéologique le matin',
        'Flâner dans les ruelles de la médina',
        'Lever de soleil au port de pêche'
      ]
    },
    'djerba': {
      name: 'Djerba',
      heroImage: '/images/djerba_beach_9.webp',
      description: 'Djerba conjugue plages de sable blanc et mixité culturelle avec une synagogue historique, des mosquées et des villages d\'art.',
      overview: 'La plus grande île de la Méditerranée offre un bonheur unique : paradis des plages et richesse culturelle. Houmt Souk, sa médina et son port actif, symbolisent le commerce d\'autrefois. La synagogue El Ghriba, la plus ancienne d\'Afrique, et les différents villages d\'art créent une synergie culturelle unique.',
      highlights: [
        'Synagogue El Ghriba - plus ancienne d\'Afrique',
        'Houmt Souk - médina et port traditionnel',
        'Djerbahood - village d\'art à ciel ouvert',
        'Plages de Sidi Mahrez - sable blanc',
        'Guellela - village de potiers traditionnels',
        'Architecture unique avec ses concours'
      ],
      practicalInfo: {
        duration: '3-4 jours',
        bestTime: 'Avril à juin, septembre à novembre (plages: juin-septembre)',
        distance: '360 km de Tunis',
        access: 'Avion (35 min) ou ferry (1h) via Zarzis'
      },
      tips: [
        'Louer une voiture pour explorer l\'île librement',
        'Visiter la synagogue El Ghriba en dehors de shabbat',
        'Découvrir les villages d\'art tôt le matin',
        'Profiter des plages tôt le matin ou tard le soir'
      ]
    },
    'hammamet': {
      name: 'Hammamet',
      heroImage: '/images/hammamet_medina_5.webp',
      description: 'Hammamet superpose une médina charmante et un resort moderne autour d\'une marina, de parcs d\'attractions et de thalassothérapie.',
      overview: 'Station balnéaire la plus connue de Tunisie, Hammamet offre une expérience en deux temps : la charmante médina aux ruelles bleues et blanches, et la moderne station Yasmine avec sa marina, ses clubs et ses thalassothérapies. Une parfaite équilibrée entre patrimoine et modernité.',
      highlights: [
        'Médina historique avec kasbah',
        'Yasmine Hammamet - marina moderne',
        'Parcs d\'attractions familiaux (Carthageland)',
        'Thalassothérapie et centres de bien-être',
        'Plages dorées et criques secrètes',
        'Grande plage de Hammamet'
      ],
      practicalInfo: {
        duration: '2-3 jours',
        bestTime: 'Mai à septembre (plage), octobre à avril (culture)',
        distance: '65 km de Tunis',
        access: 'Autoroute (45 min) ou train (1h20)'
      },
      tips: [
        'Explorer la médina tôt le matin avant la foule',
        'Combiner Thalassothérapie et détente',
        'Dîner sur le front de mer au coucher du soleil',
        'Utiliser les navettes pour rejoindre la médina'
      ]
    },
    'tozeur': {
      name: 'Tozeur',
      heroImage: '/images/tozeur_oasis_0.webp',
      description: 'Tozeur ouvre les portes du grand Sud : médina de briques, palmeraie foisonnante et escapades en 4x4 vers les canyons.',
      overview: 'Capitale du Grand Sud tunisien, Tozeur est une oasis monumentale au cœur du désert. Sa médina aux briques de terre cuites et sa palmeraie foisonnante servent de point de départ pour excursions en 4x4 vers les canyons de Mides, escapades filmographiques et paysages spectaculaires du Sahara.',
      highlights: [
        'Palmeraie de Tozeur - plus grand oasis',
        'Médina de briques cuites',
        'Oasis de Chebika et Tamaghza',
        'Mides Canyon - paysages spectaculaires',
        'Chott el Jerid - mer salée',
        'Mos Espa - décors Star Wars'
      ],
      practicalInfo: {
        duration: '2-3 jours',
        bestTime: 'Octobre à avril',
        distance: '450 km de Tunis',
        access: 'Autoroute (4h) ou avion pour Chott el Jerid'
      },
      tips: [
        'Commencer tôt le matin pour éviter la chaleur',
        'Emporter beaucoup d\'eau et protection solaire',
        'Réserver les excursions 4x4 à l\'avance',
        'Profiter des lever et coucher de soleil dans le désert'
      ]
    },
    'kairouan': {
      name: 'Kairouan',
      heroImage: '/images/kairouan_mosque_7.webp',
      description: 'Kairouan, quatrième ville sainte de l\'Islam, concentre une densité spirituelle et architecturale rare avec sa Grande Mosquée du IXe siècle.',
      overview: 'Appelée "Santiago des Tunisiens" par Mahomet lui-même, la ville concentre une densité spirituelle et architecturale rare. Cette quatrième ville sainte offre un voyage unique dans le monde religieux et culturel de l\'Islam, avec des trésors architecturaux exceptionnels.',
      highlights: [
        'Grande Mosquée du IXe siècle - cœur spirituel',
        'Mosquée des Trois Portes - façade sculptée',
        'Zaouïa de Sidi Sahabi - complexe funéraire',
        'Zaouïa d\'Sidi Amar Abderrahmân - art géométrique',
        'Marché aux tapis traditionnel',
        'Souks et ateliers d\'artisans'
      ],
      practicalInfo: {
        duration: '1-2 jours',
        bestTime: 'Octobre à novembre, mars à avril',
        distance: '160 km de Tunis',
        access: 'Autoroute (1h30) ou voiture (2h)'
      },
      tips: [
        'Respecter les règles de tenue dans les lieux saints',
        'Prévoir un guide pour comprendre l\'architecture',
        'Visiter le marché aux tapis tôt le matin',
        'Découvrir l\'art géométrique dans les zaouïas'
      ]
    }
  };

  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Destination non trouvée</h1>
          <p className="text-gray-600 mb-8">La destination que vous recherchez n'existe pas.</p>
          <Link to="/destinations" className="bg-mediterranean-blue-600 text-white px-6 py-3 rounded-lg hover:bg-mediterranean-blue-700 transition-colors">
            Retour aux destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{destinations[slug as keyof typeof destinations].name} - Guide Complet | Destinations Tunisie FM Voyage</title>
        <meta name="description" content={destinations[slug as keyof typeof destinations].description} />
        <meta name="keywords" content={`${destinations[slug as keyof typeof destinations].name}, destination Tunisie, voyage ${destinations[slug as keyof typeof destinations].name}, guide ${destinations[slug as keyof typeof destinations].name}, ${destinations[slug as keyof typeof destinations].name} Tunisie`} />
        <meta property="og:title" content={`${destinations[slug as keyof typeof destinations].name} - Guide Complet | Destinations Tunisie`} />
        <meta property="og:description" content={destinations[slug as keyof typeof destinations].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.fmtunisie.com/destinations/${slug}`} />
        <meta property="og:image" content={`https://www.fmtunisie.com${destinations[slug as keyof typeof destinations].heroImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${destinations[slug as keyof typeof destinations].name} - Guide Complet | Destinations Tunisie`} />
        <meta name="twitter:description" content={destinations[slug as keyof typeof destinations].description} />
        <meta name="twitter:image" content={`https://www.fmtunisie.com${destinations[slug as keyof typeof destinations].heroImage}`} />
        <link rel="canonical" href={`https://www.fmtunisie.com/destinations/${slug}`} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <Link 
              to="/destinations" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux destinations
            </Link>
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-mediterranean-blue-600 mb-6">
                Aperçu général
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.overview}
              </p>
            </div>

            {/* Practical Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-mediterranean-blue-600 mb-4 flex items-center gap-2">
                  <Calendar size={24} />
                  Informations pratiques
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-mediterranean-blue-500" />
                    <span className="text-gray-700"><strong>Durée recommandée:</strong> {destination.practicalInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-mediterranean-coral-500" />
                    <span className="text-gray-700"><strong>Meilleure période:</strong> {destination.practicalInfo.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-mediterranean-blue-500" />
                    <span className="text-gray-700"><strong>Distance de Tunis:</strong> {destination.practicalInfo.distance}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-mediterranean-blue-500" />
                    <span className="text-gray-700"><strong>Accès:</strong> {destination.practicalInfo.access}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-mediterranean-blue-600 mb-4">
                  Conseils utiles
                </h3>
                <ul className="space-y-2">
                  {destination.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-mediterranean-coral-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-mediterranean-coral-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-display font-bold text-mediterranean-blue-600 mb-6">
                Points forts de la visite
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-mediterranean-sand-50 rounded-xl">
                    <div className="bg-mediterranean-blue-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-mediterranean-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-mediterranean-blue-600 text-white px-8 py-4 rounded-xl hover:bg-mediterranean-blue-700 transition-colors text-lg font-semibold"
              >
                Planifier votre voyage
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailPage;