export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'meilleure-periode-visiter-tunisie',
    title: 'Meilleure Période pour Visiter la Tunisie',
    excerpt: 'Découvrez les meilleures saisons pour voyager en Tunisie selon vos préférences et activités.',
    date: '2025-11-01',
    category: 'Pratique',
    image: '/images/desert_landscape_3.webp'
  },
  {
    slug: 'guide-voyage-economique-tunisie',
    title: 'Guide Voyage Économique en Tunisie',
    excerpt: 'Tous nos conseils pour voyager en Tunisie avec un budget maîtrisé.',
    date: '2025-10-28',
    category: 'Budget',
    image: '/images/hammamet_medina_1.webp'
  },
  {
    slug: 'lieux-star-wars-tunisie',
    title: 'Lieux de Tournage Star Wars en Tunisie',
    excerpt: 'Partez sur les traces de la saga Star Wars à travers les déserts tunisiens.',
    date: '2025-10-25',
    category: 'Culture',
    image: '/images/desert_landscape_5.webp'
  },
  {
    slug: 'securite-voyage-solo-feminin-tunisie',
    title: 'Sécurité Voyage Solo Féminin en Tunisie',
    excerpt: 'Guide complet pour les femmes voyageant seules en Tunisie en toute sécurité.',
    date: '2025-10-22',
    category: 'Pratique',
    image: '/images/djerba_beach_5.webp'
  },
  {
    slug: 'guide-thalassotherapie-tunisie',
    title: 'Guide Thalassothérapie en Tunisie',
    excerpt: 'Découvrez les meilleurs centres de thalassothérapie et spas en Tunisie.',
    date: '2025-10-19',
    category: 'Bien-être',
    image: '/images/djerba_beach_6.webp'
  },
  {
    slug: 'guide-transports-tunisie',
    title: 'Guide des Transports en Tunisie',
    excerpt: 'Comment se déplacer facilement en Tunisie : bus, trains, taxis et location de voiture.',
    date: '2025-10-16',
    category: 'Pratique',
    image: '/images/hammamet_medina_2.webp'
  },
  {
    slug: 'villages-authentiques-tunisie',
    title: 'Villages Authentiques de Tunisie',
    excerpt: 'Explorez les villages berbères traditionnels et l\'authenticité tunisienne.',
    date: '2025-10-13',
    category: 'Culture',
    image: '/images/pottery_traditional_3.webp'
  },
  {
    slug: 'spots-instagrammables-tunisie',
    title: 'Spots Instagrammables en Tunisie',
    excerpt: 'Les meilleurs endroits pour des photos mémorables lors de votre voyage.',
    date: '2025-10-10',
    category: 'Photographie',
    image: '/images/kairouan_mosque_6.webp'
  },
  {
    slug: 'calendrier-festivals-tunisie',
    title: 'Calendrier des Festivals en Tunisie',
    excerpt: 'Ne manquez aucun événement culturel majeur lors de votre séjour en Tunisie.',
    date: '2025-10-07',
    category: 'Culture',
    image: '/images/el_djem_amphitheater_1.webp'
  },
  {
    slug: 'guide-desert-sahara-tunisie',
    title: 'Guide du Désert du Sahara en Tunisie',
    excerpt: 'Préparez votre aventure dans le désert tunisien : dunes, oasis et nuits étoilées.',
    date: '2025-10-04',
    category: 'Aventure',
    image: '/images/desert_landscape_9.webp'
  },
  {
    slug: 'visa-tunisie-guide-entree',
    title: 'Visa et Formalités d\'Entrée en Tunisie',
    excerpt: 'Tout savoir sur les formalités administratives pour entrer en Tunisie.',
    date: '2025-10-01',
    category: 'Pratique',
    image: '/images/carhtage_ruins_0.webp'
  },
  {
    slug: 'tunisie-2025-destination-lonely-planet',
    title: 'Tunisie 2025 : Destination Lonely Planet',
    excerpt: 'Pourquoi la Tunisie est la destination incontournable de 2025 selon Lonely Planet.',
    date: '2025-09-28',
    category: 'Actualités',
    image: '/images/dougga_roman_1.webp'
  }
];
