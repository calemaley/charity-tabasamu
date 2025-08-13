import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  Tag,
  Clock,
  Send,
  Reply,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPost = () => {
  const { slug } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      date: "March 16, 2024",
      content: "This is such an inspiring story! Maria's journey really shows the power of education.",
      replies: [
        {
          id: 11,
          author: "Sarah Johnson",
          date: "March 16, 2024",
          content: "Thank you John! We're so proud of Maria and all our students who are making such incredible progress."
        }
      ]
    },
    {
      id: 2,
      author: "Emma Wilson",
      date: "March 15, 2024",
      content: "I've been following Tabasamu's work for years and stories like this make me so proud to be a supporter.",
      replies: []
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState("");

  // Sample blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      slug: "transforming-lives-through-education",
      title: "Transforming Lives Through Education",
      subtitle: "Maria's Journey from Struggling Student to Community Leader",
      excerpt:
        "Follow Maria's incredible transformation from a struggling student to a community leader, made possible through our education support program.",
      content: `
        <p>In the heart of rural Tanzania, Maria's story represents hope and determination. When we first met Maria three years ago, she was a 14-year-old girl struggling to attend school regularly due to her family's financial constraints.</p>
        
        <p>Like many children in her community, Maria faced numerous challenges: lack of school supplies, long distances to walk to school, and pressure to help with household chores instead of focusing on her studies. Her dreams of becoming a teacher seemed impossible.</p>
        
        <h3>The Turning Point</h3>
        <p>Everything changed when our education support program reached Maria's village. Through our comprehensive approach, we were able to provide:</p>
        <ul>
          <li>School supplies and uniforms</li>
          <li>Transportation assistance</li>
          <li>After-school tutoring support</li>
          <li>Nutritional meals during school hours</li>
        </ul>
        
        <p>But more importantly, we worked with Maria's family to understand the importance of education and how it could benefit the entire community.</p>
        
        <h3>The Transformation</h3>
        <p>With consistent support and encouragement, Maria's grades improved dramatically. She became one of the top students in her class and started helping other struggling students with their studies.</p>
        
        <p>Today, Maria is in her final year of secondary school and has already been accepted to teacher training college on a full scholarship. She plans to return to her community as a qualified teacher, continuing the cycle of positive change.</p>
        
        <h3>The Ripple Effect</h3>
        <p>Maria's success has inspired other families in her community to prioritize education. Her younger siblings are now regular attendees at school, and she has become a role model for other girls in her village.</p>
        
        <p>This is the power of education - it doesn't just transform individual lives, it transforms entire communities. Maria's story is one of hundreds we could share, each representing a family whose future has been forever changed through education.</p>
      `,
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Education",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      likes: 42,
      comments: 12,
      tags: ["education", "success-story", "community-impact", "tanzania"],
    },
    {
      id: 2,
      slug: "mobile-clinics-reach-remote-areas",
      title: "Mobile Clinics Reach Remote Areas",
      subtitle: "Bringing Healthcare to Underserved Communities",
      excerpt:
        "Our healthcare initiative brings essential medical services to underserved populations across Tanzania.",
      content: `
        <p>Access to healthcare is a fundamental human right, yet for many communities in rural Tanzania, quality medical care remains out of reach. Our mobile clinic program is changing that reality, one village at a time.</p>
        
        <h3>The Challenge</h3>
        <p>Rural communities often face significant barriers to healthcare:</p>
        <ul>
          <li>Long distances to the nearest health facility</li>
          <li>Lack of transportation</li>
          <li>High cost of medical care</li>
          <li>Shortage of healthcare professionals</li>
        </ul>
        
        <h3>Our Solution</h3>
        <p>Our mobile clinics bring comprehensive healthcare services directly to remote communities. Each clinic is staffed with qualified medical professionals and equipped with essential medical supplies and equipment.</p>
        
        <p>Services provided include:</p>
        <ul>
          <li>General health screenings</li>
          <li>Preventive care and vaccinations</li>
          <li>Maternal and child health services</li>
          <li>Treatment of common illnesses</li>
          <li>Health education programs</li>
        </ul>
        
        <h3>Impact by the Numbers</h3>
        <p>In the past year alone, our mobile clinics have:</p>
        <ul>
          <li>Visited 45 remote communities</li>
          <li>Provided care to over 3,000 patients</li>
          <li>Delivered 150 babies safely</li>
          <li>Vaccinated 500 children</li>
          <li>Trained 60 community health workers</li>
        </ul>
        
        <p>Each number represents a life touched, a family helped, and a community strengthened through improved health outcomes.</p>
      `,
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Healthcare",
      author: "Dr. Michael Brown",
      date: "March 10, 2024",
      readTime: "4 min read",
      likes: 38,
      comments: 8,
      tags: ["healthcare", "mobile-clinics", "rural-health", "community-care"],
    },
    {
      id: 3,
      slug: "building-stronger-communities-together",
      title: "Building Stronger Communities Together",
      subtitle: "The Power of Community-Led Development",
      excerpt:
        "Community-led initiatives are creating sustainable solutions for local challenges and fostering independence.",
      content: `
        <p>True sustainable development happens when communities take ownership of their growth and future. Our community development programs are designed to empower local leaders and create lasting change from within.</p>
        
        <h3>The Philosophy</h3>
        <p>We believe that the best solutions come from the communities themselves. Our role is to provide support, resources, and guidance while ensuring that local voices lead the way.</p>
        
        <h3>Community-Led Projects</h3>
        <p>Some of our most successful initiatives include:</p>
        <ul>
          <li>Village savings and loan groups</li>
          <li>Women's cooperatives for income generation</li>
          <li>Youth leadership development programs</li>
          <li>Environmental conservation projects</li>
          <li>Local government capacity building</li>
        </ul>
        
        <h3>Success Stories</h3>
        <p>In Mwanza, a women's cooperative we helped establish now operates a successful tailoring business that employs 25 women and supports their families' education and healthcare needs.</p>
        
        <p>A youth group in Arusha has planted over 1,000 trees and established a tree nursery that generates income while helping restore their local environment.</p>
        
        <h3>The Multiplier Effect</h3>
        <p>When communities are empowered to solve their own challenges, the impact extends far beyond the immediate project. Skills are shared, leadership capacity grows, and a culture of self-reliance takes root.</p>
        
        <p>This approach ensures that our work continues long after our direct involvement ends, creating truly sustainable change that benefits generations to come.</p>
      `,
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Community",
      author: "Emma Wilson",
      date: "March 5, 2024",
      readTime: "6 min read",
      likes: 51,
      comments: 15,
      tags: ["community-development", "empowerment", "sustainability", "local-leadership"],
    },
  ];

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  // Handler functions
  const handleLike = () => setIsLiked(!isLiked);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Anonymous User", // In real app, this would be the logged-in user
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        content: newComment,
        replies: []
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleReply = (commentId: number) => {
    if (newReply.trim()) {
      const reply = {
        id: Date.now(),
        author: "Anonymous User", // In real app, this would be the logged-in user
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        content: newReply
      };

      setComments(prev => prev.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      ));
      setNewReply("");
      setReplyingTo(null);
    }
  };

  // If post not found, show 404
  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-charity-neutral-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-charity-neutral-800 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-charity-neutral-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-charity-orange-50 to-charity-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-charity-neutral-600">
                <Link to="/" className="hover:text-charity-orange-600">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-charity-orange-600">Blog</Link>
                <span>/</span>
                <span className="text-charity-neutral-800">{post.title}</span>
              </div>
            </nav>

            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-charity-orange-600 text-white rounded-full text-sm font-medium">
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </span>
              <div className="flex items-center text-charity-neutral-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-charity-neutral-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-charity-neutral-800 mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-charity-neutral-600 mb-8 leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author and Social */}
            <div className="flex items-center justify-between border-b border-charity-neutral-200 pb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-charity-orange-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-charity-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-charity-neutral-800">{post.author}</p>
                  <p className="text-sm text-charity-neutral-500">Content Writer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                    isLiked ? 'text-red-500 hover:text-red-600' : 'text-charity-neutral-500 hover:text-charity-orange-600'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <div className="flex items-center gap-1 text-charity-neutral-500">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{comments.length}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="p-2 text-charity-neutral-500 hover:text-charity-orange-600 transition-colors duration-200"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scaleIn">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="prose prose-lg prose-charity max-w-none">
              <div 
                className="text-charity-neutral-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </AnimatedSection>

          {/* Tags */}
          <AnimatedSection animation="slideUp" delay={200}>
            <div className="mt-12 pt-8 border-t border-charity-neutral-200">
              <h4 className="text-lg font-semibold text-charity-neutral-800 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-charity-neutral-100 text-charity-neutral-600 rounded-full text-sm hover:bg-charity-orange-100 cursor-pointer transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Comments Section */}
          <AnimatedSection animation="slideUp" delay={300}>
            <div className="mt-16 pt-8 border-t border-charity-neutral-200">
              <h4 className="text-2xl font-bold text-charity-neutral-800 mb-8">
                Comments ({comments.length})
              </h4>

              {/* Add Comment Form */}
              <div className="mb-8 p-6 bg-charity-neutral-50 rounded-xl">
                <h5 className="text-lg font-semibold text-charity-neutral-800 mb-4">
                  Leave a Comment
                </h5>
                <div className="space-y-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                  <button
                    onClick={handleComment}
                    disabled={!newComment.trim()}
                    className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 disabled:bg-charity-neutral-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-xl border border-charity-neutral-200">
                    {/* Comment Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-charity-orange-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-charity-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-charity-neutral-800">{comment.author}</p>
                          <p className="text-sm text-charity-neutral-500">{comment.date}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        className="flex items-center gap-1 text-charity-neutral-500 hover:text-charity-orange-600 transition-colors duration-200"
                      >
                        <Reply className="h-4 w-4" />
                        <span className="text-sm">Reply</span>
                      </button>
                    </div>

                    {/* Comment Content */}
                    <p className="text-charity-neutral-700 mb-4">{comment.content}</p>

                    {/* Reply Form */}
                    {replyingTo === comment.id && (
                      <div className="mt-4 p-4 bg-charity-neutral-50 rounded-lg">
                        <textarea
                          value={newReply}
                          onChange={(e) => setNewReply(e.target.value)}
                          placeholder="Write a reply..."
                          className="w-full px-3 py-2 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent resize-none"
                          rows={3}
                        />
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => handleReply(comment.id)}
                            disabled={!newReply.trim()}
                            className="px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 disabled:bg-charity-neutral-300 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors duration-200"
                          >
                            Reply
                          </button>
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="px-4 py-2 bg-charity-neutral-200 hover:bg-charity-neutral-300 text-charity-neutral-700 rounded-lg text-sm transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-6 space-y-4 ml-8">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="p-4 bg-charity-neutral-50 rounded-lg border-l-4 border-charity-orange-200">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-8 h-8 bg-charity-orange-100 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-charity-orange-600" />
                              </div>
                              <div>
                                <p className="font-medium text-charity-neutral-800 text-sm">{reply.author}</p>
                                <p className="text-xs text-charity-neutral-500">{reply.date}</p>
                              </div>
                            </div>
                            <p className="text-charity-neutral-700 text-sm">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <h3 className="text-3xl font-bold text-charity-neutral-800 mb-12 text-center">
              Related Articles
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <AnimatedSection
                key={relatedPost.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <Link
                  to={`/blog/${relatedPost.slug}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-charity-neutral-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {relatedPost.date}
                    </div>
                    <h4 className="text-xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h4>
                    <p className="text-charity-neutral-600 text-sm">
                      {relatedPost.excerpt.substring(0, 120)}...
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="slideUp" delay={400}>
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
