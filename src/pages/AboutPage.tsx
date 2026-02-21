import { Helmet } from 'react-helmet-async';
import { Sparkles, MapPin, Heart, Compass, Utensils, Camera } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>À Propos - Découvrez la VRAIE Tunisie | FM Tunisie Voyage</title>
        <meta name="description" content="Découvrez FM Tunisie Voyage et Ward, votre guide local pour explorer la Tunisie authentique. Des astuces de vrai local, des pépites cachées et une immersion culturelle." />
        <meta name="keywords" content="FM Tunisie Voyage, à propos, Ward, guide local Tunisie, tourisme authentique, voyager comme local" />
        <meta property="og:title" content="À Propos - Découvrez la VRAIE Tunisie | FM Tunisie Voyage" />
        <meta property="og:description" content="Découvrez la Tunisie vibrante, authentique et secrète à travers les yeux d'un vrai local." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com/a-propos" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/about_hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos - Découvrez la VRAIE Tunisie | FM Tunisie Voyage" />
        <meta name="twitter:description" content="Découvrez la Tunisie vibrante, authentique et secrète à travers les yeux d'un vrai local." />
        <link rel="canonical" href="https://www.fmtunisie.com/a-propos" />
      </Helmet>

      {/* Stunning Hero with Background Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about_hero.webp"
            alt="FM Tunisie Voyage - Découvrez la Tunisie authentique"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-mediterranean-coral-400" />
              <span className="text-sm font-medium">Découvrez la VRAIE Tunisie</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              À{' '}
              <span className="text-mediterranean-sand-300">Propos</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
              Bienvenue sur FM Tunisie Voyage — votre guide local pour découvrir l'authentique Tunisie.
            </p>
          </div>
        </div>
      </section>

      {/* Ward's Introduction - Personal Story */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-sand-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Ward's Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/ward_profile.webp"
                    alt="Ward - Votre guide local en Tunisie"
                    className="w-full h-auto aspect-[3/4] object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-display font-bold text-mediterranean-blue-900">Ward</h3>
                  <p className="text-gray-600 mt-2">Fondateur & Guide Local</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-mediterranean-coral-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Moknine, Monastir</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Story Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="premium-card p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-blue mb-6">
                  Qui se cache derrière ce blog ?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Je m'appelle <strong>Ward</strong>, et c'est moi qui écris tous les articles de FM Tunisie Voyage.
                  </p>
                  <p>
                    Contrairement à beaucoup de blogueurs voyage qui viennent passer une semaine ici, cochent les cases des lieux célèbres et repartent, la Tunisie, c'est mon quotidien. J'habite à <strong>Moknine</strong>, dans le gouvernorat de Monastir. Ce pays n'est pas juste un tampon de plus sur mon passeport : c'est chez moi, c'est ma culture et c'est la vie de tous les jours.
                  </p>
                </div>
              </div>

              <div className="premium-card p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-blue mb-6">
                  Pourquoi avoir créé FM Tunisie Voyage ?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    En lisant ce qui se disait sur la Tunisie sur internet, j'ai eu un déclic. Les gros sites de voyage sont souvent écrits par des gens de l'extérieur. Ils vous envoient vers les pires attrapes-touristes et passent complètement à côté de l'âme du pays.
                  </p>
                  <p>
                    Ils ne savent pas combien coûte réellement une place en louage (nos taxis collectifs). Ils ne connaissent pas ce petit vendeur dans la Médina qui fait les meilleurs briks, ni comment négocier dans les souks avec le sourire, sans se faire avoir.
                  </p>
                  <p className="font-semibold text-mediterranean-blue-900">
                    J'ai créé ce blog pour être votre guide local de poche. Mon but ? Vous aider à voyager plus intelligemment, à sortir des sentiers battus et à vivre une expérience 100% authentique.
                  </p>
                  <p className="italic text-gray-600">
                    Pas de blabla, que du vécu.
                  </p>
                </div>
              </div>

              <div className="premium-card p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-blue mb-6">
                  Ce que je vous propose
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-3 rounded-xl shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-mediterranean-blue-900 mb-2">Des astuces de vrai local</h3>
                      <p className="text-gray-600 text-sm">Les vrais prix, comment se déplacer en sécurité, les coutumes à respecter et les pièges à éviter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-3 rounded-xl shadow-lg">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-mediterranean-blue-900 mb-2">Mes pépites cachées</h3>
                      <p className="text-gray-600 text-sm">Les paysages magnifiques, les ruines chargées d'histoire et les petites gargotes que les guides traditionnels ignorent.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-sand-500 to-mediterranean-sand-600 p-3 rounded-xl shadow-lg">
                      <Utensils className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-mediterranean-blue-900 mb-2">Une immersion culturelle</h3>
                      <p className="text-gray-600 text-sm">Une plongée dans la vraie cuisine tunisienne et nos traditions, expliquées par quelqu'un qui les vit de l'intérieur.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-coral-500 p-3 rounded-xl shadow-lg">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-mediterranean-blue-900 mb-2">Des expériences uniques</h3>
                      <p className="text-gray-600 text-sm">Des recommandations basées sur mes propres aventures et découvertes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card p-8 md:p-10 bg-gradient-to-br from-mediterranean-blue-600 to-mediterranean-blue-800 text-white">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Explorons la Tunisie ensemble !
                </h2>
                <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                  <p>
                    Que vous prépariez un simple petit week-end à Tunis ou un grand road-trip jusqu'aux portes du Sahara, je suis là pour vous aider à préparer un voyage inoubliable.
                  </p>
                  <p>
                    Si vous avez la moindre question pour préparer votre séjour, n'hésitez pas à m'écrire directement à <a href="mailto:contact@fmtunisie.com" className="text-mediterranean-sand-300 font-semibold hover:underline">contact@fmtunisie.com</a>. Je me ferai un plaisir de vous répondre.
                  </p>
                  <p className="text-2xl font-display font-bold text-mediterranean-sand-300 mt-6">
                    Marhaba ! (Bienvenue !)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Local Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-gradient-blue mb-12">
            Pourquoi choisir un guide local ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-8">
              <h3 className="text-xl font-display font-bold text-mediterranean-blue-900 mb-4">
                ✘ Ce que les guides traditionnels ne vous diront pas
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Les vrais prix des transports et activités</li>
                <li>• Les restaurants où mangent les locaux</li>
                <li>• Les pièges touristiques à éviter</li>
                <li>• Les endroits surcotés qui ne valent pas le detour</li>
              </ul>
            </div>
            <div className="premium-card p-8">
              <h3 className="text-xl font-display font-bold text-mediterranean-blue-900 mb-4">
                ✓ Ce que vous trouverez ici
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Des conseils basés sur mon expérience quotidienne</li>
                <li>• Des itinéraires personnalisés selon vos envies</li>
                <li>• Une immersion vraie dans la culture tunisienne</li>
                <li>• Des réponses rapides à vos questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Une question ? N'hésitez pas !
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Je suis disponible pour vous aider à planifier votre voyage en Tunisie.
            Écrivez-moi et je vous répondrai avec plaisir.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-mediterranean-coral-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-mediterranean-sand-100 transition-colors shadow-lg"
          >
            <span>Me contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
