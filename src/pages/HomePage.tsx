import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Palmtree,
  Waves,
  Mountain,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';

const HomePage = () => {
  const destinations = [
    {
      name: 'Tunis',
      image: '/images/tunis_new.png',
      description: 'Capitale à la médina vivante, porte de Carthage & Sidi Bou Said',
      highlights: ['Médina UNESCO', 'Musée du Bardo', 'Carthage'],
    },
    {
      name: 'Djerba',
      image: '/images/djerba_new.png',
      description: 'Île aux plages, patrimoine et culture méditerranéenne',
      highlights: ['Plages de sable blanc', 'El Ghriba', 'Djerbahood'],
    },
    {
      name: 'Tozeur',
      image: '/images/tozeur_new.png',
      description: 'Oasis sahariennes, palmeraie et canyons',
      highlights: ['Chott el Jerid', 'Canyons', 'Star Wars'],
    },
    {
      name: 'Hammamet',
      image: '/images/hammamet_new.png',
      description: 'Station balnéaire avec médina historique',
      highlights: ['Médina bleue', 'Plages', 'Yasmine moderne'],
    },
    {
      name: 'Sousse',
      image: '/images/sousse_new.png',
      description: 'Médina UNESCO & Côte du Sahel',
      highlights: ['Ribat', 'Grande Mosquée', 'Musée'],
    },
    {
      name: 'Kairouan',
      image: '/images/kairouan_new.png',
      description: 'Ville sainte et architecture islamique',
      highlights: ['Grande Mosquée', 'Médina', 'Tapis traditionnels'],
    },
  ];

  const experiences = [
    {
      icon: Palmtree,
      title: 'Désert du Sahara',
      description: 'Explorez les dunes dorées et les oasis perdues',
    },
    {
      icon: Waves,
      title: 'Côtes Méditerranéennes',
      description: 'Profitez des plages de sable blanc et eaux turquoise',
    },
    {
      icon: Mountain,
      title: 'Sites UNESCO',
      description: '8 sites classés au patrimoine mondial',
    },
    {
      icon: UtensilsCrossed,
      title: 'Gastronomie Tunisienne',
      description: 'Savourez couscous, brik et harissa',
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>FM Tunisie Voyage - Découvrez l'Authentique Tunisie | Guide Complet de Voyage</title>
        <meta name="description" content="Explorez la Tunisie authentique avec FM Tunisie Voyage. Découvrez les destinations, la culture, la gastronomie et les trésors cachés de la Tunisie. Guide complet pour 7-10 jours." />
        <meta name="keywords" content="Tunisie, voyage Tunisie, guide voyage Tunisie, destinations Tunisie, médina UNESCO, Sahara, Carthagène, Sidi Bou Said, Djerba, Tozeur" />
        <meta property="og:title" content="FM Tunisie Voyage - Découvrez l'Authentique Tunisie" />
        <meta property="og:description" content="Explorez la Tunisie authentique avec FM Tunisie Voyage. Découvrez les destinations, la culture, la gastronomie et les trésors cachés de la Tunisie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/sidi_bou_said_2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FM Tunisie Voyage - Découvrez l'Authentique Tunisie" />
        <meta name="twitter:description" content="Explorez la Tunisie authentique avec FM Tunisie Voyage. Découvrez les destinations, la culture, la gastronomie et les trésors cachés de la Tunisie." />
        <meta name="twitter:image" content="https://www.fmtunisie.com/images/sidi_bou_said_2.webp" />
        <link rel="canonical" href="https://www.fmtunisie.com" />
      </Helmet>
      {/* Stunning Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/sidi_bou_said_2.webp"
            alt="Sidi Bou Said - Tunisia"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-mediterranean-coral-400" />
              <span className="text-sm font-medium">Découvrez la perle de la Méditerranée</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              La Tunisie,{' '}
              <span className="block text-mediterranean-sand-300">
                à chaque voyage son temps
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl animate-slide-up font-light leading-relaxed">
              Découvrez medinas UNESCO, côtes méditerranéennes et Sahara en 7 à 10
              jours — au rythme de vos envies.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Link
                to="/destinations"
                className="group bg-white text-mediterranean-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-mediterranean-blue-50 transition-all duration-300 inline-flex items-center gap-2 shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Parcourir les Destinations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/guide-voyage"
                className="group border-2 border-white/80 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                Guide Gratuit
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm uppercase tracking-wider">Découvrir</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Quick Facts with Premium Design */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-sand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group premium-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-4 rounded-2xl mb-6 inline-block shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-mediterranean-blue-900">
                8 Sites UNESCO
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une densité culturelle hors norme: Tunis, Sousse, Kairouan,
                Carthage, El Djem, Dougga
              </p>
            </div>

            <div className="group premium-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-4 rounded-2xl mb-6 inline-block shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-mediterranean-blue-900">
                Climat Idéal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Des micro-climats pour presque toute l'année. Printemps et automne
                parfaits pour la découverte.
              </p>
            </div>

            <div className="group premium-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-mediterranean-sand-500 to-mediterranean-sand-600 p-4 rounded-2xl mb-6 inline-block shadow-lg">
                <UtensilsCrossed className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-mediterranean-blue-900">
                Cuisine Identitaire
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Couscous du vendredi, brik croustillant, harissa UNESCO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient-blue mb-6">
              Destinations Vedettes
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Les 6 sélections suivantes équilibrent littoral, histoire et désert.
              Chacune peut s'apprécier en 2-3 jours, ou se combiner en 7-10 jours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group premium-card hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-mediterranean-blue-600 mb-3">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dest.description}</p>
                  <ul className="space-y-3 mb-6">
                    {dest.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <MapPin className="h-5 w-5 text-mediterranean-coral-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/destinations"
                    className="group/link text-mediterranean-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    En savoir plus 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/destinations"
              className="group bg-gradient-to-r from-mediterranean-blue-600 to-mediterranean-blue-500 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-premium-lg transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
            >
              Voir Toutes les Destinations
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences with Premium Icons */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-blue-50 to-mediterranean-sand-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center text-gradient-blue mb-16">
            Expériences Phares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="relative bg-white p-8 rounded-3xl w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-premium group-hover:shadow-premium-lg transition-all duration-300 group-hover:-translate-y-2">
                    <Icon className="h-16 w-16 text-mediterranean-blue-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-br from-mediterranean-blue-500/5 to-mediterranean-coral-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-mediterranean-blue-900">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/desert_landscape_5.webp"
            alt="Sahara Desert Tunisia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mediterranean-sand-900/90 via-mediterranean-sand-800/85 to-mediterranean-coral-900/90"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Prêt à Découvrir la Tunisie?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Consultez notre guide complet pour planifier votre voyage en toute
            sérénité.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/guide-voyage"
              className="group bg-white text-mediterranean-blue-600 px-10 py-5 rounded-xl font-semibold hover:bg-mediterranean-sand-50 transition-all duration-300 shadow-premium hover:shadow-premium-lg hover:scale-105 inline-flex items-center gap-3"
            >
              Guide de Voyage
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/blog"
              className="group border-2 border-white text-white px-10 py-5 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-3"
            >
              Lire le Blog
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
