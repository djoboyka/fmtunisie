import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, Tag, ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogPosts } from '../data/blogData';
import { blogContentMapping } from '../data/blogContentMapping';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      if (!slug || !blogContentMapping[slug]) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(blogContentMapping[slug]);
        if (response.ok) {
          const text = await response.text();
          // Remove YAML frontmatter (everything between --- and ---)
          const contentWithoutFrontmatter = text.replace(/^---\n[\s\S]*?\n---\n/, '');
          setContent(contentWithoutFrontmatter);
        }
      } catch (error) {
        console.error('Error loading blog content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Article non trouvé
          </h1>
          <Link
            to="/blog"
            className="text-mediterranean-blue-600 hover:underline"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} - Blog Voyage Tunisie | FM Tunisie Voyage</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`${post.title}, blog voyage Tunisie, ${post.category}, FM Tunisie Voyage, ${post.title.split(' ').slice(0, 3).join(' ')}`} />
        <meta property="og:title" content={`${post.title} - Blog Voyage Tunisie`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.fmtunisie.com/blog/${post.slug}`} />
        <meta property="og:image" content={`https://www.fmtunisie.com${post.image}`} />
        <meta property="article:author" content="FM Tunisie Voyage" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - Blog Voyage Tunisie`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`https://www.fmtunisie.com${post.image}`} />
        <link rel="canonical" href={`https://www.fmtunisie.com/blog/${post.slug}`} />
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-r from-mediterranean-blue-600 to-mediterranean-blue-400 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-mediterranean-blue-50 hover:text-white mb-6"
          >
            <ArrowLeft size={20} />
            Retour au blog
          </Link>
          <div className="flex items-center gap-4 mb-4 text-mediterranean-blue-100">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={16} />
              <span>{post.category}</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {loading ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center py-12">
                <p className="text-gray-600">Chargement de l'article...</p>
              </div>
            </div>
          ) : content ? (
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h2 className="text-3xl md:text-4xl font-bold text-mediterranean-blue-800 mb-4 mt-8" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold text-mediterranean-blue-800 mb-4 mt-8" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-semibold text-mediterranean-blue-700 mb-3 mt-6" {...props} />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-5" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-gray-700 leading-relaxed" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-gray-900" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-mediterranean-blue-600 hover:text-mediterranean-blue-700 hover:underline font-medium"
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-mediterranean-blue-500 bg-mediterranean-blue-50 py-3 px-5 rounded-r-lg my-6 italic text-gray-700" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code className="text-mediterranean-blue-600 bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <p className="text-xl text-gray-700 mb-8">{post.excerpt}</p>
            </div>
          )}
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-mediterranean-blue-50 to-mediterranean-sand-50 rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="/images/ward_profile.jpg"
                alt="Ward - Guide local en Tunisie"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-mediterranean-blue-900 mb-2">
                  Ward
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-mediterranean-coral-600 mb-4">
                  <MapPin size={18} />
                  <span className="font-medium">Moknine, Tunisie</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Passionné par mon pays et basé à Moknine, je partage sur FM Tunisie Voyage la Tunisie que j'aime et que je vis au quotidien. Oubliez les guides classiques : je vous emmène découvrir les vraies pépites locales, des ruelles de la Médina de Tunis aux meilleurs cafés cachés, pour vous faire voyager comme un vrai Tunisien.
                </p>
                <Link
                  to="/a-propos"
                  className="inline-block mt-4 text-mediterranean-blue-600 font-semibold hover:text-mediterranean-blue-700 hover:underline"
                >
                  En savoir plus sur moi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-mediterranean-blue-600 mb-8">
              Articles Similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mediterranean-blue-600 mb-3">
                      {relatedPost.title}
                    </h3>
                    <button
                      onClick={() => window.location.href = `/blog/${relatedPost.slug}`}
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
      )}
    </div>
  );
};

export default BlogPostPage;
