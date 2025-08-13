import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  Search,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Filter,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const articlesPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Transforming Lives Through Education: Maria's Journey",
      excerpt:
        "Follow Maria's incredible transformation from a struggling student to a community leader, made possible through our education support program.",
      content:
        "In the heart of rural Tanzania, Maria's story represents hope and determination...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "education",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      likes: 42,
      comments: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Mobile Clinics Reach Remote Communities",
      excerpt:
        "Our healthcare initiative brings essential medical services to underserved populations across Tanzania.",
      content: "Breaking down barriers to healthcare access...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "healthcare",
      author: "Dr. Michael Brown",
      date: "March 10, 2024",
      readTime: "4 min read",
      likes: 38,
      comments: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Building Stronger Communities Together",
      excerpt:
        "Community-led initiatives are creating sustainable solutions for local challenges and fostering independence.",
      content: "When communities come together...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "community",
      author: "Emma Wilson",
      date: "March 5, 2024",
      readTime: "6 min read",
      likes: 51,
      comments: 15,
      featured: false,
    },
    {
      id: 4,
      title: "Volunteer Spotlight: John's Impact in Tanzania",
      excerpt:
        "Meet John, a volunteer teacher who has dedicated two years to improving literacy rates in rural schools.",
      content:
        "John's journey began with a simple desire to make a difference...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "volunteers",
      author: "Community Team",
      date: "February 28, 2024",
      readTime: "3 min read",
      likes: 29,
      comments: 6,
      featured: false,
    },
    {
      id: 5,
      title: "Clean Water Initiative: 500 Families Now Have Access",
      excerpt:
        "Our latest clean water project has successfully provided safe drinking water to 500 families in the Mwanza region.",
      content: "Access to clean water is a fundamental human right...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "community",
      author: "Project Team",
      date: "February 20, 2024",
      readTime: "4 min read",
      likes: 67,
      comments: 23,
      featured: false,
    },
    {
      id: 6,
      title: "Success Story: From Patient to Healer",
      excerpt:
        "How one young woman's medical treatment led her to become a community health worker in her village.",
      content: "Amina's story is one of resilience and giving back...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "success-stories",
      author: "Health Team",
      date: "February 15, 2024",
      readTime: "5 min read",
      likes: 84,
      comments: 31,
      featured: false,
    },
    {
      id: 7,
      title: "Mental Health Support in Rural Areas",
      excerpt:
        "Addressing mental health challenges through community-based support programs and trained counselors.",
      content: "Mental health awareness is growing...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "healthcare",
      author: "Dr. Jennifer Clark",
      date: "February 10, 2024",
      readTime: "6 min read",
      likes: 45,
      comments: 18,
      featured: false,
    },
    {
      id: 8,
      title: "Digital Learning Platforms for Remote Education",
      excerpt:
        "How technology is bridging the education gap in remote communities through innovative digital solutions.",
      content: "The digital divide is real...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "education",
      author: "Tech Team",
      date: "February 5, 2024",
      readTime: "4 min read",
      likes: 33,
      comments: 9,
      featured: false,
    },
    {
      id: 9,
      title: "Women's Empowerment Through Microfinance",
      excerpt:
        "Supporting women entrepreneurs with small loans and business training to create sustainable income sources.",
      content: "Economic empowerment is key...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "community",
      author: "Finance Team",
      date: "January 30, 2024",
      readTime: "5 min read",
      likes: 56,
      comments: 14,
      featured: false,
    },
    {
      id: 10,
      title: "Preventive Healthcare: Vaccination Drives",
      excerpt:
        "Our vaccination campaigns have reached thousands of children, preventing disease outbreaks in vulnerable communities.",
      content: "Prevention is better than cure...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "healthcare",
      author: "Dr. Paul Anderson",
      date: "January 25, 2024",
      readTime: "3 min read",
      likes: 72,
      comments: 25,
      featured: false,
    },
    {
      id: 11,
      title: "Youth Leadership Development Program",
      excerpt:
        "Training the next generation of leaders through workshops, mentorship, and hands-on community projects.",
      content: "Young people are the future...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "volunteers",
      author: "Youth Team",
      date: "January 20, 2024",
      readTime: "4 min read",
      likes: 41,
      comments: 11,
      featured: false,
    },
    {
      id: 12,
      title: "From Scholarship to University: Peter's Success",
      excerpt:
        "How our scholarship program helped Peter become the first in his family to attend university.",
      content: "Education opens doors...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "success-stories",
      author: "Education Team",
      date: "January 15, 2024",
      readTime: "5 min read",
      likes: 89,
      comments: 27,
      featured: false,
    },
    {
      id: 13,
      title: "Teacher Training Programs Making a Difference",
      excerpt:
        "How we're improving education quality by training local teachers with modern pedagogical methods.",
      content: "Good teachers create good students...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "education",
      author: "Training Team",
      date: "January 10, 2024",
      readTime: "6 min read",
      likes: 37,
      comments: 13,
      featured: false,
    },
    {
      id: 14,
      title: "Maternal Healthcare: Saving Lives",
      excerpt:
        "Our maternal health program has reduced infant and maternal mortality rates through skilled birth attendance.",
      content: "Every mother deserves safe delivery...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "healthcare",
      author: "Dr. Grace Mwangi",
      date: "January 5, 2024",
      readTime: "5 min read",
      likes: 63,
      comments: 19,
      featured: false,
    },
    {
      id: 15,
      title: "International Volunteers Share Their Experience",
      excerpt:
        "Hear from our international volunteers about their transformative experiences working with local communities.",
      content: "Volunteering changes everyone involved...",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "volunteers",
      author: "Volunteer Coordinator",
      date: "December 28, 2023",
      readTime: "7 min read",
      likes: 48,
      comments: 16,
      featured: false,
    },
  ];

  // Calculate dynamic category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return blogPosts.length;
    return blogPosts.filter(post => post.category === categoryId).length;
  };

  const categories = [
    { id: "all", label: "All Posts", count: getCategoryCount("all") },
    { id: "education", label: "Education", count: getCategoryCount("education") },
    { id: "healthcare", label: "Healthcare", count: getCategoryCount("healthcare") },
    { id: "community", label: "Community", count: getCategoryCount("community") },
    { id: "volunteers", label: "Volunteers", count: getCategoryCount("volunteers") },
    { id: "success-stories", label: "Success Stories", count: getCategoryCount("success-stories") },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Like functionality
  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  // Share functionality
  const handleShare = (post: any) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${post.title} - ${window.location.origin}/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`);
      alert('Link copied to clipboard!');
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = currentPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-orange-500 to-charity-green-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Stories from the field, insights from our work, and updates on
                the impact we're making together
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-charity-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charity-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-charity-orange-600 text-white"
                      : "bg-charity-neutral-100 text-charity-neutral-700 hover:bg-charity-orange-100"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="py-16 bg-charity-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="slideUp">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-charity-orange-600" />
                  <span className="text-charity-orange-600 font-semibold">
                    Featured Story
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-charity-neutral-800">
                  Editor's Pick
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-charity-neutral-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-charity-neutral-800 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-charity-neutral-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/blog/${featuredPost.title.toLowerCase().replace(/\\s+/g, '-')}`}
                        className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg font-medium transition-colors duration-200 group"
                      >
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>

                      <div className="flex items-center gap-4 text-charity-neutral-500">
                        <button
                          onClick={() => handleLike(featuredPost.id)}
                          className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                            likedPosts.includes(featuredPost.id) 
                              ? 'text-red-500 hover:text-red-600' 
                              : 'hover:text-charity-orange-600'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.includes(featuredPost.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm">{featuredPost.likes + (likedPosts.includes(featuredPost.id) ? 1 : 0)}</span>
                        </button>
                        <Link 
                          to={`/blog/${featuredPost.title.toLowerCase().replace(/\\s+/g, '-')}`}
                          className="flex items-center gap-1 hover:text-charity-orange-600 cursor-pointer transition-colors duration-200"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{featuredPost.comments}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-charity-neutral-800">
                {selectedCategory === "all"
                  ? "Latest Articles"
                  : `${categories.find((c) => c.id === selectedCategory)?.label} Articles`}
              </h2>
              <div className="flex items-center gap-2 text-charity-neutral-500">
                <Filter className="h-4 w-4" />
                <span className="text-sm">
                  {filteredPosts.length} articles found
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <article className="bg-white border border-charity-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <Link to={`/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-charity-neutral-500 mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link to={`/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                      <h3 className="text-xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-charity-neutral-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`}
                        className="text-charity-orange-600 hover:text-charity-orange-700 font-medium text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>

                      <div className="flex items-center gap-3 text-charity-neutral-400">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                            likedPosts.includes(post.id) 
                              ? 'text-red-500 hover:text-red-600' 
                              : 'hover:text-charity-orange-600'
                          }`}
                        >
                          <Heart className={`h-3 w-3 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                          <span className="text-xs">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                        </button>
                        <Link 
                          to={`/blog/${post.title.toLowerCase().replace(/\\s+/g, '-')}`}
                          className="flex items-center gap-1 hover:text-charity-orange-600 cursor-pointer transition-colors duration-200"
                        >
                          <MessageCircle className="h-3 w-3" />
                          <span className="text-xs">{post.comments}</span>
                        </Link>
                        <button 
                          onClick={() => handleShare(post)}
                          className="hover:text-charity-orange-600 cursor-pointer transition-colors duration-200"
                        >
                          <Share2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="text-center mt-12">
                <div className="flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      currentPage === 1 
                        ? 'bg-charity-neutral-200 text-charity-neutral-400 cursor-not-allowed'
                        : 'bg-charity-orange-600 hover:bg-charity-orange-700 text-white'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                          currentPage === page
                            ? 'bg-charity-orange-600 text-white'
                            : 'bg-charity-neutral-100 text-charity-neutral-700 hover:bg-charity-orange-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      currentPage === totalPages 
                        ? 'bg-charity-neutral-200 text-charity-neutral-400 cursor-not-allowed'
                        : 'bg-charity-orange-600 hover:bg-charity-orange-700 text-white'
                    }`}
                  >
                    Next
                  </button>
                </div>
                
                <p className="text-charity-neutral-500 text-sm mt-4">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-charity-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter and never miss a story from the
                field
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-charity-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="px-6 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-medium transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm opacity-75 mt-3">
                  Join 2,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
