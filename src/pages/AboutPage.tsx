import { Helmet } from 'react-helmet-async';
import { Target, Heart, Users, Award, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>À Propos - Notre Mission et Vision | FM Tunisie Voyage</title>
        <meta name="description" content="Découvrez FM Tunisie Voyage, votre guide expert pour explorer la Tunisie authentique. Notre mission, nos valeurs et notre expertise du territoire tunisien." />
        <meta name="keywords" content="FM Tunisie Voyage, à propos, mission, vision, expertise Tunisie, guide voyage Tunisie, histoire FM Tunisie" />
        <meta property="og:title" content="À Propos - Notre Mission et Vision | FM Tunisie Voyage" />
        <meta property="og:description" content="Découvrez FM Tunisie Voyage, votre guide expert pour explorer la Tunisie authentique." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com/a-propos" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/traditional_architecture_2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos - Notre Mission et Vision | FM Tunisie Voyage" />
        <meta name="twitter:description" content="Découvrez FM Tunisie Voyage, votre guide expert pour explorer la Tunisie authentique." />
        <link rel="canonical" href="https://www.fmtunisie.com/a-propos" />
      </Helmet>
      {/* Stunning Hero with Background Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/traditional_architecture_2.webp"
            alt="Traditional Tunisian Architecture"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-mediterranean-coral-400" />
              <span className="text-sm font-medium">Notre Mission</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              À{' '}
              <span className="text-mediterranean-sand-300">Propos</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
              Notre mission est d'orchestrer un contenu expert et chaleureusement
              guidé pour découvrir la Tunisie authentique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission with Premium Design */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient-blue mb-6">
              Pourquoi « FM Tunisie Voyage »
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Tunisie. Un pays-mosaïque au bord de la Méditerranée, où l'héritage
              amazigh, l'empreinte arabo-islamique, les strates romaines et
              puniques, et une modernité urbaine raffinée se répondent au
              quotidien. FM Tunisie Voyage naît d'une conviction simple et forte:
              permettre à chaque voyageur de découvrir ce pays en toute sécurité
              et dans le respect, en reliant des repères culturels fiables à des
              conseils pratiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="premium-card p-10 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-4 rounded-2xl mb-6 inline-block shadow-lg">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-mediterranean-blue-900 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Présenter une Tunisie authentique, nuancée et actuelle. Livrer des
                repères culturels solides et les traduire en gestes concrets sur
                le terrain. Anticiper les différences entre villes et campagnes,
                préparer les visites des sites UNESCO, et aborder les pratiques
                religieuses avec respect.
              </p>
            </div>

            <div className="premium-card p-10 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-4 rounded-2xl mb-6 inline-block shadow-lg">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-mediterranean-blue-900 mb-4">
                Tourisme Responsable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nous encourageons un tourisme responsable: demander la permission
                avant de photographier, s'habiller avec pudeur selon les
                contextes, utiliser la main droite pour manger et saluer, et faire
                preuve de discrétion sur les questions sensibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage with Premium Styling */}
      <section className="py-20 bg-gradient-to-br from-mediterranean-sand-50 to-mediterranean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center text-gradient-blue mb-16">
            Ce qui rend la Tunisie Unique
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="premium-card p-10">
              <h3 className="text-3xl font-display font-bold text-gradient-blue mb-6">
                Un Palimpseste Culturel
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Comprendre la Tunisie, c'est accepter de lire un palimpseste. Les
                civilisations y ont superposé leurs marques:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="bg-mediterranean-blue-100 p-3 rounded-xl group-hover:bg-mediterranean-blue-500 transition-colors">
                    <Award className="h-6 w-6 text-mediterranean-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-mediterranean-blue-900">Punique (Carthage):</strong>{' '}
                    Commerce méditerranéen, symboles de Tanit, urbanisme maritime — visible à Kerkuane et Carthage
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-mediterranean-blue-100 p-3 rounded-xl group-hover:bg-mediterranean-blue-500 transition-colors">
                    <Award className="h-6 w-6 text-mediterranean-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-mediterranean-blue-900">Romain:</strong>{' '}
                    Amphithéâtres et mosaïques exceptionnelles — El Djem et Dougga
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-mediterranean-blue-100 p-3 rounded-xl group-hover:bg-mediterranean-blue-500 transition-colors">
                    <Award className="h-6 w-6 text-mediterranean-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-mediterranean-blue-900">Arabo-islamique:</strong>{' '}
                    Grandes mosquées, ribats, médinas — Kairouan et la Zitouna à Tunis
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-mediterranean-blue-100 p-3 rounded-xl group-hover:bg-mediterranean-blue-500 transition-colors">
                    <Award className="h-6 w-6 text-mediterranean-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-mediterranean-blue-900">Ottoman:</strong>{' '}
                    Dômes, zaouïas, architecture andalouse — mosquées à coupoles
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-mediterranean-blue-100 p-3 rounded-xl group-hover:bg-mediterranean-blue-500 transition-colors">
                    <Award className="h-6 w-6 text-mediterranean-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-mediterranean-blue-900">Protectorat français:</strong>{' '}
                    Boulevards, institutions, bilinguisme — visible dans l'urbanisme moderne
                  </div>
                </li>
              </ul>
            </div>

            <div className="premium-card p-10">
              <h3 className="text-3xl font-display font-bold text-gradient-blue mb-6">
                Patrimoine UNESCO
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                La Tunisie compte 8 biens UNESCO, témoins de son histoire
                exceptionnelle:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-blue-500 to-mediterranean-blue-600 rounded-full"></span>
                    <span className="text-gray-700">Amphithéâtre d'El Djem (1979)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-blue-500 to-mediterranean-blue-600 rounded-full"></span>
                    <span className="text-gray-700">Site archéologique de Carthage (1979)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-blue-500 to-mediterranean-blue-600 rounded-full"></span>
                    <span className="text-gray-700">Médina de Tunis (1979)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-blue-500 to-mediterranean-blue-600 rounded-full"></span>
                    <span className="text-gray-700">Parc national de l'Ichkeul (1980)</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-coral-500 to-mediterranean-coral-600 rounded-full"></span>
                    <span className="text-gray-700">Site punique de Kerkuane (1985)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-coral-500 to-mediterranean-coral-600 rounded-full"></span>
                    <span className="text-gray-700">Kairouan (1988)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-coral-500 to-mediterranean-coral-600 rounded-full"></span>
                    <span className="text-gray-700">Médina de Sousse (1988)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gradient-to-r from-mediterranean-coral-500 to-mediterranean-coral-600 rounded-full"></span>
                    <span className="text-gray-700">Dougga / Thugga (1997)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="premium-card p-10">
              <h3 className="text-3xl font-display font-bold text-gradient-blue mb-6">
                Gastronomie et Hospitalité
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                La table tunisienne est un geste d'accueil. La harissa, désormais
                reconnue par l'UNESCO, incarne l'âme piquante du pays.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-mediterranean-blue-50 p-6 rounded-xl">
                  <h4 className="font-display font-bold text-lg mb-4 text-mediterranean-blue-900">Plats Signature:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-coral-500 font-bold">•</span>
                      <span className="text-gray-700">Couscous — semoule vapeur, vendredi familial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-coral-500 font-bold">•</span>
                      <span className="text-gray-700">Brik — feuilleté croustillant, œuf et thon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-coral-500 font-bold">•</span>
                      <span className="text-gray-700">Ojja — œufs en sauce tomate épicée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-coral-500 font-bold">•</span>
                      <span className="text-gray-700">Lablabi — soupe de pois chiches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-coral-500 font-bold">•</span>
                      <span className="text-gray-700">Harissa — pâte de piments UNESCO</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-mediterranean-sand-50 p-6 rounded-xl">
                  <h4 className="font-display font-bold text-lg mb-4 text-mediterranean-blue-900">À Savoir:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-blue-500 font-bold">•</span>
                      <span className="text-gray-700">Main droite pour manger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-blue-500 font-bold">•</span>
                      <span className="text-gray-700">Accepter les seconds plats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-blue-500 font-bold">•</span>
                      <span className="text-gray-700">Petits cadeaux appréciés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mediterranean-blue-500 font-bold">•</span>
                      <span className="text-gray-700">Éviter l'alcool si incertain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="premium-card p-10 text-center">
            <h2 className="text-3xl font-display font-bold text-mediterranean-blue-900 mb-8">
              Informations Entreprise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-4">Coordonnées</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Nom de l'entreprise :</strong> FM Tunisie Voyage</p>
                  <p><strong>Forme juridique :</strong> Société de services de voyage</p>
                  <p><strong>Adresse :</strong> Tunis, Tunisie</p>
                  <p><strong>Email :</strong> contact@fmtunisie.com</p>
                  <p><strong>Téléphone :</strong> +216 75200215</p>
                  <p><strong>Site web :</strong> www.fmtunisie.com</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-4">À Propos</h3>
                <div className="space-y-3 text-gray-700">
                  <p>FM Tunisie Voyage est une entreprise spécialisée dans la promotion du tourisme responsable en Tunisie.</p>
                  <p>Notre équipe combine une expertise locale approfondie avec une passion pour partager la richesse culturelle du pays.</p>
                  <p>Nous nous engageons à fournir des informations précises et respectueuses pour tous les voyageurs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Premium Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center text-gradient-blue mb-16">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center premium-card p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-6 rounded-3xl w-28 h-28 mx-auto mb-6 flex items-center justify-center shadow-premium group-hover:shadow-premium-lg transition-shadow">
                <Target className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-mediterranean-blue-900">Authenticité</h3>
              <p className="text-gray-600 leading-relaxed">
                Présenter la Tunisie telle qu'elle est, avec nuances et respect
              </p>
            </div>
            <div className="group text-center premium-card p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-6 rounded-3xl w-28 h-28 mx-auto mb-6 flex items-center justify-center shadow-premium group-hover:shadow-premium-lg transition-shadow">
                <Users className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-mediterranean-blue-900">Respect</h3>
              <p className="text-gray-600 leading-relaxed">
                Encourager un tourisme responsable et respectueux des cultures
              </p>
            </div>
            <div className="group text-center premium-card p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-mediterranean-sand-500 to-mediterranean-sand-600 p-6 rounded-3xl w-28 h-28 mx-auto mb-6 flex items-center justify-center shadow-premium group-hover:shadow-premium-lg transition-shadow">
                <Award className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-mediterranean-blue-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Fournir des informations fiables basées sur des sources reconnues
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
