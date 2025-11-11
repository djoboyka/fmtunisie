import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mediterranean-blue-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <h3 className="text-xl font-bold">FM Tunisie Voyage</h3>
            </div>
            <p className="text-mediterranean-blue-100 text-sm">
              Découvrez la Tunisie authentique avec nos guides complets, conseils
              pratiques et itinéraires personnalisés.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/guide-voyage"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Guide de Voyage
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/a-propos"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/politique-confidentialite"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-mediterranean-blue-100 hover:text-white transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Restez Connecté</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-mediterranean-blue-100">
                <Mail className="h-4 w-4" />
                <span>contact@fmtunisie.com</span>
              </div>
              <div className="flex items-center space-x-2 text-mediterranean-blue-100">
                <Phone className="h-4 w-4" />
                <span>+216 75200215</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/groups/1271680927008157"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mediterranean-blue-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-mediterranean-blue-700 mt-8 pt-8 text-center text-sm text-mediterranean-blue-100">
          <p>
            &copy; {new Date().getFullYear()} FM Tunisie Voyage. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
