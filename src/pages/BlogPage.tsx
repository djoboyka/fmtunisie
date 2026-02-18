import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog Voyage Tunisie - Guides, Conseils et Astuces | FM Tunisie Voyage</title>
        <meta name="description" content="Découvrez nos guides de voyage, conseils pratiques et astuces pour préparer votre séjour en Tunisie. Culture, gastronomie, sites à voir et plus encore." />
        <meta name="keywords" content="blog voyage Tunisie, guide voyage Tunisie, conseils Tunisie, culture Tunisie, gastronomie Tunisie, que faire Tunisie, blog FM Tunisie Voyage" />
        <meta property="og:title" content="Blog Voyage Tunisie - Guides, Conseils et Astuces" />
        <meta property="og:description" content="Découvrez nos guides de voyage, conseils pratiques et astuces pour préparer votre séjour en Tunisie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fmtunisie.com/blog" />
        <meta property="og:image" content="https://www.fmtunisie.com/images/tunis_medina_0.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Voyage Tunisie - Guides, Conseils et Astuces" />
        <meta name="twitter:description" content="Découvrez nos guides de voyage, conseils pratiques et astuces pour préparer votre séjour en Tunisie." />
        <link rel="canonical" href="https://www.fmtunisie.com/blog" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mediterranean-blue-600 to-mediterranean-blue-400 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Blog FM Tunisie Voyage</h1>
          <p className="text-xl text-mediterranean-blue-50 text-center max-w-3xl mx-auto">
            Découvrez nos guides, conseils et astuces pour préparer votre voyage en Tunisie
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-mediterranean-blue-600 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                    className="text-mediterranean-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer bg-none border-none p-0"
                  >
                    Lire l'article <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
