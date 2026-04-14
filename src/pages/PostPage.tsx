import { useParams, Link } from 'react-router-dom';
import { allPosts, BlogPost } from '../data/posts';
import { ArrowLeft } from 'lucide-react';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  let post = allPosts.find(p => p.slug === slug || p.id === slug);

  if (!post && slug) {
    // Generate a fallback post so we don't have broken links
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    post = {
      id: slug,
      slug: slug,
      title: title,
      excerpt: 'This is a full article about ' + title + '. Discover the latest insights and updates.',
      category: 'NEWS',
      image: 'https://picsum.photos/seed/' + slug + '/800/600',
      date: new Date().toISOString(),
      author: 'Spark Prime Editor',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>Overview</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    };
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link to="/archive" className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded font-medium hover:bg-opacity-90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </Link>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  return (
    <article className="pb-16">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative bg-gray-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 w-full pb-12">
            <span className="bg-brand-secondary text-white text-xs font-bold uppercase px-3 py-1 rounded-sm tracking-wider mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm md:text-base gap-4">
              <span className="font-medium text-white">{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link to="/archive" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Archive
          </Link>
        </div>

        {/* Post Content */}
        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:text-brand-primary prose-a:text-brand-secondary hover:prose-a:text-brand-primary prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 pt-16 border-t border-gray-200 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(relatedPost => (
              <Link to={`/post/${relatedPost.slug}`} key={relatedPost.id} className="group flex flex-col">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-secondary transition-colors line-clamp-2 mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
