import { useState, useMemo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { allPosts } from '../data/posts';

export default function ArchivePage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))].sort();

  useEffect(() => {
    if (categoryName) {
      const matched = categories.find(c => c.toLowerCase() === categoryName.toLowerCase());
      setSelectedCategory(matched || 'All');
    } else {
      setSelectedCategory('All');
    }
  }, [categoryName, categories]);

  const filteredAndSortedPosts = useMemo(() => {
    let posts = [...allPosts];

    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

    return posts;
  }, [sortOrder, selectedCategory]);

  const visiblePosts = filteredAndSortedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
          {categoryName ? `${selectedCategory} Archive` : 'Post Archive'}
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Link
                key={category}
                to={category === 'All' ? '/archive' : `/category/${category.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'latest' | 'oldest')}
              className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {visiblePosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map(post => (
            <Link to={`/post/${post.slug}`} key={post.id} className="flex flex-col group cursor-pointer border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-brand-secondary font-bold text-sm hover:text-brand-primary transition-colors flex items-center gap-1">
                    Read More <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found for the selected category.</p>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-brand-primary text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
