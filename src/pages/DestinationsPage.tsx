import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationsPage = () => {
  const destinations = [
    {
      name: 'Tunis — Capitale, médina, Carthage & Sidi Bou Said',
      image: '/images/tunis_new.webp',
      description:
        'Tunis marie un centre moderne à une médina classée UNESCO et à un hinterland historique dense: Bardo et ses mosaïques, Carthage et Sidi Bou Said en seule journée.',
      bestTime: 'Printemps et automne',
      duration: '2-3 jours',
      url: '/destinations/tunis',
      highlights: [
        'Musée du Bardo — mosaïques romaines exceptionnelles',
        'Médina de Tunis — souks et architecture ottomane',
        'Carthage — ruines romaines et puniques',
        'Sidi Bou Said — village bleu et blanc',
      ],
    },
    {
      name: 'Sousse — Médina UNESCO & Côte du Sahel',
      image: '/images/sousse_new.webp',
      description:
        'La "Perle du Sahel" aligne Ribat, Grande Mosquée, musée archéologique et une corniche propice aux apéros couchants.',
      bestTime: 'Printemps/automne',
      duration: '2 jours',
      url: '/destinations/sousse',
      highlights: [
        'Ribat de Sousse — forteresse du IXe siècle',
        'Grande Mosquée — architecture islamique',
        'Musée archéologique — mosaïques majeures',
        'Souks de la médina — poterie et artisanat',
      ],
    },
    {
      name: 'Djerba — Îles, plages, culture & "Star Wars"',
      image: '/images/djerba_new.webp',
      description:
        'Djerba conjugue plages de sable blanc et mixité culturelle avec une synagogue historique, des mosquées et des villages d\'art.',
      bestTime: 'Plages: juin-sept.; visites: mars-mai & sept.-nov.',
      duration: '3-4 jours',
      url: '/destinations/djerba',
      highlights: [
        'Houmt Souk — médina et port',
        'Synagogue El Ghriba — patrimoine religieux',
        'Djerbahood — galerie à ciel ouvert',
        'Plages de Sidi Mahrez — sable blanc',
      ],
    },
    {
      name: 'Hammamet — Station phare, médina & Yasmine moderne',
      image: '/images/hammamet_new.webp',
      description:
        'Hammamet superpose une médina charmante et un resort moderne autour d\'une marina, de parcs d\'attractions et de thalassothérapie.',
      bestTime: 'Mai-septembre (plage)',
      duration: '2-3 jours',
      url: '/destinations/hammamet',
      highlights: [
        'Médina & Kasbah — ruelles bleues et blanches',
        'Yasmine Hammamet — marina et parcs',
        'Carthageland & Aqualand — loisirs familiaux',
        'Thalassothérapie — détente et bien-être',
      ],
    },
    {
      name: 'Tozeur — Oasis, désert & canyons',
      image: '/images/tozeur_new.webp',
      description:
        'Tozeur ouvre les portes du grand Sud: médina de briques, palmeraie foisonnante et escapades en 4x4 vers les canyons.',
      bestTime: 'Printemps et automne',
      duration: '2-3 jours',
      url: '/destinations/tozeur',
      highlights: [
        'Chebika & Tamaghza — oasis de montagne',
        'Mides Canyon — paysages spectaculaires',
        'Chott el Jerid — mirages salés',
        'Mos Espa — décors Star Wars',
      ],
    },
    {
      name: 'Kairouan — Ville sainte & architecture islamique',
      image: '/images/kairouan_new.webp',
      description:
        'Kairouan, quatrième ville sainte de l\'Islam, concentre une densité spirituelle et architecturale rare avec sa Grande Mosquée du IXe siècle.',
      bestTime: 'Mars-avril & octobre-novembre',
      duration: '1-2 jours',
      url: '/destinations/kairouan',
      highlights: [
        'Grande Mosquée — IXe siècle, cœur spirituel',
        'Mosquée des Trois Portes — façade sculptée',
        'Zaouïa de Sidi Sahabi — complexe funéraire',
        'Souks et ateliers de tapis — artisanat traditionnel',
      ],
    },
  ];

  const extraSites = [
    {
      name: 'El Djem',
      image: '/images/el_djem_amphitheater_1.webp',
      description: 'Amphithéâtre romano-africain parmi les mieux conservés',
      url: '/destinations/el-djem',
    },
    {
      name: 'Dougga',
      image: '/images/dougga_roman_1.webp',
      description: 'Ville romaine perchée avec Capitol et théâtre',
      url: '/destinations/dougga',
    },
    {
      name: 'Carthage',
      image: '/images/carhtage_ruins_0.webp',
      description: 'Ruines puniques et romaines sur les collines',
      url: '/destinations/carthage',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Destinations Tunisie - Toutes les Villes et Lieux à Découvrir | FM Tunisie Voyage</title>
        <meta name="description" content="Découvrez toutes les destinations de Tunisie : Tunis, Sidi Bou Said, Carthage, Djerba, Tozeur, Hammamet, Sousse, Kairouan et plus encore. Guide complet de chaque destination." />
        <meta name="keywords" content="destinations Tunisie, Tunis, Sidi Bou Said, Carthage, Djerba, Tozeur, Hammamet, Sousse, Kairouan, guide destinations Tunisie, que voir Tunisie" />
        <meta property="og:title" content="Destinations Tunisie - Toutes les Villes et Lieux à Découvrir" />
        <meta property="og:description" content="Découvrez toutes les destinations de Tunisie : Tunis, Sidi Bou Said, Carthage, Djerba, Tozeur, Hammamet, Sousse, Kairouan et plus encore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com/destinations" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/carhtage_ruins_0.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Destinations Tunisie - Toutes les Villes et Lieux à Découvrir" />
        <meta name="twitter:description" content="Découvrez toutes les destinations de Tunisie : Tunis, Sidi Bou Said, Carthage, Djerba, Tozeur, Hammamet, Sousse, Kairouan et plus encore." />
        <link rel="canonical" href="https://www.fmtunisie.com/destinations" />
      </Helmet>
      {/* Stunning Hero with Background Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/carhtage_ruins_0.webp"
            alt="Carthage Ruins Tunisia"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              Destinations en{' '}
              <span className="text-mediterranean-sand-300">Tunisie</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
              La Tunisie concentre, dans un espace restreint, une densité rare de
              paysages, de cultures et de mémoires. Chaque destination propose un
              visage distinct du pays.
            </p>
          </div>
        </div>
      </section>

      {/* Main Destinations with Premium Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <Link to={dest.url} className="lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-3xl shadow-premium-lg">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>

                <div className="lg:w-1/2">
                  <Link to={dest.url}>
                    <h2 className="text-4xl font-display font-bold text-gradient-blue mb-6 leading-tight hover:text-mediterranean-blue-700 transition-colors cursor-pointer">
                      {dest.name}
                    </h2>
                  </Link>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-3 bg-mediterranean-sand-50 px-5 py-3 rounded-xl">
                      <Clock className="h-5 w-5 text-mediterranean-blue-500" />
                      <span className="text-gray-700 font-medium">{dest.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-mediterranean-blue-50 px-5 py-3 rounded-xl">
                      <Star className="h-5 w-5 text-mediterranean-coral-500" />
                      <span className="text-gray-700 font-medium">{dest.bestTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-4 text-mediterranean-blue-900">
                    Points forts:
                  </h3>
                  <ul className="space-y-4">
                    {dest.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="bg-mediterranean-coral-100 p-2 rounded-lg group-hover/item:bg-mediterranean-coral-500 transition-colors">
                          <MapPin className="h-5 w-5 text-mediterranean-coral-600 group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-gray-700 leading-relaxed pt-1.5">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link to={dest.url} className="inline-flex items-center gap-2 bg-mediterranean-blue-600 text-white px-6 py-3 rounded-xl hover:bg-mediterranean-blue-700 transition-colors font-semibold">
                      <span>Découvrir</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Sites with Premium Cards */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-sand-50 to-mediterranean-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient-blue mb-6">
              Autres Sites Clés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ne manquez pas ces sites historiques exceptionnels lors de votre voyage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraSites.map((site, index) => (
              <Link 
                key={index}
                to={site.url}
                className="group premium-card hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-mediterranean-blue-600 mb-3">
                    {site.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{site.description}</p>
                  <div className="flex items-center gap-2 text-mediterranean-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
