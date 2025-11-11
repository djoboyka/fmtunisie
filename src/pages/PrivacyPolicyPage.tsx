import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mediterranean-blue-700 to-mediterranean-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Politique de Confidentialité</h1>
          </div>
          <p className="text-center text-mediterranean-blue-100 text-lg max-w-3xl mx-auto">
            Dernière mise à jour : 12 novembre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FM Tunisie Voyage s'engage à protéger la confidentialité des visiteurs de son site web. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons 
              et protégeons vos informations personnelles lorsque vous utilisez notre site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">2. Informations Collectées</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">2.1 Informations que vous nous fournissez</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous pouvons collecter les informations personnelles suivantes lorsque vous utilisez notre formulaire de contact :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Message et toute autre information que vous choisissez de partager</li>
            </ul>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">2.2 Informations collectées automatiquement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lors de votre visite sur notre site, nous collectons automatiquement certaines informations techniques :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Système d'exploitation</li>
              <li>Pages visitées et temps passé sur chaque page</li>
              <li>Date et heure de visite</li>
              <li>Site web de provenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">3. Utilisation des Informations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous utilisons les informations collectées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Répondre à vos demandes et messages</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Analyser l'utilisation du site et les tendances</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Vous envoyer des informations sur la Tunisie (avec votre consentement)</li>
              <li>Détecter et prévenir la fraude et les abus</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">4. Services Tiers</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">4.1 Google AdSense</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre site utilise Google AdSense, un service de publicité fourni par Google LLC. 
              Google AdSense utilise des cookies pour servir des annonces basées sur vos visites précédentes sur notre site web et d'autres sites web.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              En utilisant Google AdSense, Google peut collecter des données sur vos visites sur notre site et d'autres sites pour vous proposer des annonces personnalisées.
            </p>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">4.2 Désactivation des annonces personnalisées</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous pouvez désactiver les annonces personnalisées de Google en visitant la page 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-mediterranean-blue-600 hover:underline mx-1">
                Paramètres d'annonces Google
              </a>
              ou en utilisant le module complémentaire de désactivation de Google pour les navigateurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits 
              fichiers texte stockés sur votre appareil qui nous aident à :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic du site</li>
              <li>Comprendre comment vous utilisez notre site</li>
              <li><strong>Afficher des annonces pertinentes (Google AdSense)</strong></li>
              <li><strong>Mesurer l'efficacité des publicités</strong></li>
            </ul>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">Types de cookies utilisés</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
              <li><strong>Cookies d'analyse :</strong> Pour analyser l'utilisation du site (Google Analytics)</li>
              <li><strong>Cookies publicitaires :</strong> Pour personnaliser les annonces (Google AdSense)</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              Vous pouvez configurer votre navigateur pour refuser les cookies ou vous alerter lorsqu'un cookie est envoyé. 
              Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">6. Partage des Informations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager 
              vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Avec votre consentement explicite</li>
              <li>Avec des prestataires de services qui nous aident à exploiter notre site (hébergement, analyse)</li>
              <li>Avec Google pour la diffusion d'annonces contextuelles via Google AdSense</li>
              <li>Pour se conformer à une obligation légale</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Partage de données avec Google AdSense :</strong> Google peut collecter des informations sur vos visites 
              sur notre site et d'autres sites pour vous proposer des annonces personnalisées. Ces données sont gérées 
              conformément à la politique de confidentialité de Google.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">7. Sécurité des Données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
              vos informations personnelles contre :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>L'accès non autorisé</li>
              <li>La divulgation</li>
              <li>La modification</li>
              <li>La destruction</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. 
              Nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">8. Vos Droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@fmtunisie.com" className="text-mediterranean-blue-600 hover:underline">contact@fmtunisie.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">9. Conservation des Données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les objectifs 
              décrits dans cette politique, sauf si une période de conservation plus longue est requise ou autorisée par la loi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">10. Liens Externes</h2>
            <p className="text-gray-700 leading-relaxed">
              Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques 
              de confidentialité ou du contenu de ces sites externes. Nous vous encourageons à lire les politiques de 
              confidentialité de chaque site que vous visitez.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">11. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications 
              seront publiées sur cette page avec une date de mise à jour révisée. Nous vous encourageons à consulter 
              régulièrement cette page pour rester informé de nos pratiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">12. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-mediterranean-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@fmtunisie.com</p>
              <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> +216 75200215</p>
              <p className="text-gray-700"><strong>Site web :</strong> www.fmtunisie.com</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
