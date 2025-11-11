import { Scale } from 'lucide-react';

const LegalNoticePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mediterranean-blue-700 to-mediterranean-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Scale className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Mentions Légales</h1>
          </div>
          <p className="text-center text-mediterranean-blue-100 text-lg max-w-3xl mx-auto">
            Informations légales et conditions d'utilisation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">1. Éditeur du Site</h2>
            <div className="bg-mediterranean-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Nom du site :</strong> FM Tunisie Voyage</p>
              <p className="text-gray-700 mb-2"><strong>URL :</strong> www.fmtunisie.com</p>
              <p className="text-gray-700 mb-2"><strong>Propriétaire :</strong> FM Tunisie Voyage</p>
              <p className="text-gray-700 mb-2"><strong>Forme juridique :</strong> Société de services de voyage</p>
              <p className="text-gray-700 mb-2"><strong>Adresse :</strong> Tunis, Tunisie</p>
              <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@fmtunisie.com</p>
              <p className="text-gray-700"><strong>Téléphone :</strong> +216 75200215</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">2. Hébergement</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Hébergeur :</strong> MiniMax Space</p>
              <p className="text-gray-700 mb-2"><strong>Type d'hébergement :</strong> Hébergement Cloud</p>
              <p className="text-gray-700">
                Le site est hébergé sur une infrastructure cloud moderne garantissant 
                une disponibilité et une sécurité optimales.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">3. Propriété Intellectuelle</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">3.1 Contenu du site</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logos, icônes, sons, logiciels) 
              est la propriété exclusive de FM Tunisie Voyage ou de ses partenaires, sauf mention contraire.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
              du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">3.2 Marques et logos</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de FM Tunisie Voyage 
              ou font l'objet d'une autorisation d'utilisation. Toute reproduction ou utilisation non autorisée est 
              strictement interdite.
            </p>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">3.3 Images</h3>
            <p className="text-gray-700 leading-relaxed">
              Les photographies utilisées sur ce site proviennent de sources libres de droits ou sont la propriété 
              de FM Tunisie Voyage. Certaines images peuvent être utilisées sous licence et sont créditées en 
              conséquence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">4. Conditions d'Utilisation</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">4.1 Accès au site</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez 
              à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, 
              politiques, publicitaires et pour toute forme de sollicitation commerciale.
            </p>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">4.2 Utilisation responsable</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En utilisant ce site, vous vous engagez à :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Respecter les lois et réglementations en vigueur</li>
              <li>Ne pas porter atteinte aux droits de tiers</li>
              <li>Ne pas diffuser de contenu illicite, offensant ou inapproprié</li>
              <li>Ne pas tenter de perturber ou d'endommager le site</li>
              <li>Ne pas collecter ou stocker des données personnelles d'autres utilisateurs</li>
            </ul>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">4.3 Responsabilité de l'utilisateur</h3>
            <p className="text-gray-700 leading-relaxed">
              Vous êtes responsable de votre utilisation du site et de toute conséquence qui en découle. 
              Vous acceptez d'indemniser FM Tunisie Voyage de toute réclamation résultant de votre utilisation 
              du site en violation de ces mentions légales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">5. Limitation de Responsabilité</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">5.1 Contenu informatif</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les informations fournies sur ce site sont à titre informatif uniquement. Bien que nous nous efforcions 
              de maintenir des informations exactes et à jour, nous ne garantissons pas :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>L'exactitude, la complétude ou la pertinence des informations</li>
              <li>L'absence d'erreurs ou d'omissions</li>
              <li>La disponibilité continue du site</li>
            </ul>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">5.2 Conseils de voyage</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les conseils de voyage, itinéraires et recommandations fournis sont basés sur notre expérience et 
              nos recherches. Cependant :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Nous ne sommes pas responsables des décisions prises sur la base de nos informations</li>
              <li>Vérifiez toujours les informations auprès de sources officielles</li>
              <li>Les conditions de voyage peuvent changer rapidement</li>
              <li>Consultez les avis de voyage officiels de votre gouvernement</li>
            </ul>

            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">5.3 Liens externes</h3>
            <p className="text-gray-700 leading-relaxed">
              Notre site peut contenir des liens vers des sites web tiers. Ces liens sont fournis à titre informatif. 
              Nous n'avons aucun contrôle sur le contenu de ces sites et n'assumons aucune responsabilité quant à 
              leur contenu, leur disponibilité ou leurs pratiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">6. Disponibilité du Site</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous nous efforçons de maintenir le site accessible 24h/24 et 7j/7. Cependant, nous nous réservons 
              le droit d'interrompre, de suspendre ou de limiter l'accès à tout ou partie du site :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Pour des raisons de maintenance technique</li>
              <li>En cas de force majeure</li>
              <li>En cas de problèmes techniques indépendants de notre volonté</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Nous ne pourrons être tenus responsables des conséquences de ces interruptions, 
              qu'elles soient programmées ou non.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">7. Protection des Données Personnelles</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
              d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour plus de détails sur la manière dont nous collectons et traitons vos données, veuillez consulter 
              notre <a href="/politique-confidentialite" className="text-mediterranean-blue-600 hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">8. Cookies et Publicité</h2>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">8.1 Utilisation des cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le site utilise des cookies pour améliorer votre expérience de navigation et pour afficher des annonces 
              personnalisées. En continuant à utiliser ce site, vous acceptez l'utilisation de cookies conformément 
              à notre politique de confidentialité.
            </p>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">8.2 Cookies publicitaires (Google AdSense)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre site utilise Google AdSense pour diffuser des annonces. Google peut utiliser des cookies pour 
              servir des annonces basées sur vos visites précédentes sur notre site et d'autres sites web.
            </p>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">8.3 Désactivation des annonces personnalisées</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous pouvez désactiver les annonces personnalisées de Google en visitant la page 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-mediterranean-blue-600 hover:underline mx-1">
                Paramètres d'annonces Google
              </a> 
              ou en utilisant le module complémentaire de désactivation de Google pour les navigateurs.
            </p>
            
            <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3">8.4 Gestion des cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Vous pouvez gérer les cookies dans les paramètres de votre navigateur. Veuillez noter que désactiver 
              certains cookies peut affecter les fonctionnalités du site, y compris la personnalisation des annonces.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">9. Droit Applicable et Juridiction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les présentes mentions légales sont régies par le droit tunisien. Tout litige relatif à l'utilisation 
              du site sera soumis à la compétence exclusive des tribunaux tunisiens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas de litige, une tentative de résolution amiable sera privilégiée avant toute action en justice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">10. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications 
              entreront en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter 
              régulièrement ces mentions légales pour prendre connaissance des éventuelles modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4">11. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <div className="bg-mediterranean-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@fmtunisie.com</p>
              <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> +216 75200215</p>
              <p className="text-gray-700"><strong>Site web :</strong> www.fmtunisie.com</p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : 12 novembre 2025
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalNoticePage;
