import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Contactez-Nous - FM Tunisie Voyage | Questions et Assistance Voyage</title>
        <meta name="description" content="Contactez FM Tunisie Voyage pour toutes vos questions sur le voyage en Tunisie. Email, téléphone et formulaire de contact pour planifier votre séjour." />
        <meta name="keywords" content="contact FM Tunisie Voyage, email Tunisie, téléphone Tunisie, assistance voyage Tunisie, questions Tunisie, nous contacter" />
        <meta property="og:title" content="Contactez-Nous - FM Tunisie Voyage" />
        <meta property="og:description" content="Contactez FM Tunisie Voyage pour toutes vos questions sur le voyage en Tunisie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com/contact" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/sidi_bou_said_5.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez-Nous - FM Tunisie Voyage" />
        <meta name="twitter:description" content="Contactez FM Tunisie Voyage pour toutes vos questions sur le voyage en Tunisie." />
        <link rel="canonical" href="https://www.fmtunisie.com/contact" />
      </Helmet>
      {/* Stunning Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sidi_bou_said_5.webp"
            alt="Sidi Bou Said - Tunisia"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <MessageCircle className="h-4 w-4 text-mediterranean-coral-400" />
              <span className="text-sm font-medium">Nous Contacter</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up leading-tight">
              Contactez-<span className="text-mediterranean-sand-300">Nous</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
              Vous avez une question? Besoin de conseils pour votre voyage?
              N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-display font-bold text-gradient-blue mb-8">
                  Nos Coordonnées
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Notre équipe est là pour répondre à toutes vos questions sur la
                  Tunisie et vous aider à préparer votre voyage.
                </p>
              </div>

              <div className="space-y-6">
                <div className="premium-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-blue-500 to-mediterranean-blue-600 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-1">Email</h3>
                      <p className="text-gray-600">contact@fmtunisie.com</p>
                    </div>
                  </div>
                </div>

                <div className="premium-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-coral-500 to-mediterranean-coral-600 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-1">Téléphone</h3>
                      <p className="text-gray-600">+216 75200215</p>
                    </div>
                  </div>
                </div>

                <div className="premium-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-mediterranean-sand-500 to-mediterranean-sand-600 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-1">Adresse</h3>
                      <p className="text-gray-600">Tunis, Tunisie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="premium-card p-10">
                <h2 className="text-3xl font-display font-bold text-gradient-blue mb-8">
                  Envoyez-nous un Message
                </h2>

                {submitted && (
                  <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <p className="text-green-700 font-medium">
                      Merci! Votre message a été envoyé avec succès.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="info">Informations générales</option>
                      <option value="itinerary">Aide à l'itinéraire</option>
                      <option value="booking">Réservations</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mediterranean-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 rounded border-gray-300 text-mediterranean-blue-500 focus:ring-mediterranean-blue-500"
                      />
                      <span className="text-sm text-gray-600">
                        J'accepte que mes données soient utilisées pour répondre à
                        ma demande. *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-mediterranean-blue-600 to-mediterranean-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-premium-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:scale-105"
                  >
                    Envoyer le Message
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
