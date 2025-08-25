import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  ThumbsUp,
  Reply,
  Send,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Blog = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah M.",
      content:
        "This is so inspiring! Every child truly deserves a chance to achieve their dreams.",
      date: "2 hours ago",
      likes: 12,
      replies: [
        {
          id: 1,
          author: "James K.",
          content:
            "Couldn't agree more! Education is the key to breaking the cycle of poverty.",
          date: "1 hour ago",
          likes: 5,
        },
      ],
    },
    {
      id: 2,
      author: "Michael T.",
      content:
        "Beautiful article! I've seen firsthand how small acts of kindness can transform lives.",
      date: "5 hours ago",
      likes: 8,
      replies: [],
    },
    {
      id: 3,
      author: "Grace N.",
      content:
        "This reminds me why I started volunteering. Thank you for sharing this message.",
      date: "1 day ago",
      likes: 15,
      replies: [
        {
          id: 1,
          author: "Emma W.",
          content:
            "Grace, your volunteer work is amazing! Keep making a difference.",
          date: "18 hours ago",
          likes: 3,
        },
      ],
    },
  ]);

  const featuredPost = {
    id: 1,
    title: "Charity: Fueling the Dreams of Children",
    excerpt:
      "Every child is born with a dream. Some imagine themselves as doctors saving lives, others see classrooms where they will one day stand as teachers. Discover how charity unlocks possibilities and builds futures.",
    content: [
      "Every child is born with a dream. Some imagine themselves as doctors saving lives, others see classrooms where they will one day stand as teachers, and many envision flying planes, painting canvases, or leading communities. Children dream without fear, without limits. Yet, for millions, these bright hopes are dimmed by realities beyond their control: poverty, lack of access to education, hunger, and limited opportunities.",

      "This is where charity becomes powerful. Charity is more than giving money or material things. It is about believing in potential and unlocking possibilities. When you pay school fees for a child, you are not just covering costs: you are giving that child a chance to sit in a classroom and imagine a better tomorrow. When you donate a pair of shoes, you are not just covering tiny feet: you are enabling those feet to walk boldly into the future.",

      "Every act of kindness is a push forward. That book you donate may inspire the next author, that scholarship may raise the next leader, that meal may keep a child in school one more day, long enough to discover their hidden talents. The truth is, children need us. They cannot reach their dreams alone. They require our hands, our hearts, and our willingness to believe in them.",

      "And the beauty of charity is this: no effort is ever too small. A coin, a smile, a visit to encourage a child—all of these become seeds of hope. Seeds that, when nurtured, grow into towering trees of success and change.",

      "When we give, we don't just transform one life, we touch generations. A child whose dream comes true goes on to impact their family, their community, and even the world. That is the power of charity.",

      "At the end of the day, charity is not just about what we give away; it is about what we build together. When we invest in children's dreams, we invest in the future of humanity itself.",
    ],
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "inspiration",
    author: "Tabasamu Team",
    date: "January 15, 2025",
    readTime: "6 min read",
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = featuredPost.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
          "_blank",
        );
        break;
      default:
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "You",
        content: newComment,
        date: "Just now",
        likes: 0,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 relative overflow-hidden bg-gradient-to-br from-charity-orange-50 to-charity-green-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-charity-neutral-800 mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-charity-neutral-600">
                Stories of hope, impact, and transformation from our community
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h1>
                </div>
              </div>

              {/* Article Meta */}
              <div className="p-8 border-b border-charity-neutral-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-6 text-charity-neutral-600">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  {/* Engagement Actions */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isLiked
                          ? "bg-red-50 text-red-600 border border-red-200"
                          : "bg-charity-neutral-100 text-charity-neutral-600 hover:bg-charity-neutral-200"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                      />
                      <span>{likeCount}</span>
                    </button>

                    <div className="relative group">
                      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-charity-neutral-100 text-charity-neutral-600 hover:bg-charity-neutral-200 transition-colors duration-200">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-charity-neutral-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <button
                          onClick={() => handleShare("facebook")}
                          className="block w-full text-left px-4 py-2 hover:bg-charity-neutral-50 text-charity-neutral-700"
                        >
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="block w-full text-left px-4 py-2 hover:bg-charity-neutral-50 text-charity-neutral-700"
                        >
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare("whatsapp")}
                          className="block w-full text-left px-4 py-2 hover:bg-charity-neutral-50 text-charity-neutral-700"
                        >
                          WhatsApp
                        </button>
                        <button
                          onClick={() => handleShare("copy")}
                          className="block w-full text-left px-4 py-2 hover:bg-charity-neutral-50 text-charity-neutral-700"
                        >
                          Copy Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-charity-neutral-700 mb-8 font-medium italic">
                    {featuredPost.excerpt}
                  </p>

                  {featuredPost.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-charity-neutral-700 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-charity-orange-50 p-8 rounded-xl border-l-4 border-charity-orange-500">
                  <h3 className="text-2xl font-bold text-charity-neutral-800 mb-4">
                    Ready to Make a Difference?
                  </h3>
                  <p className="text-charity-neutral-600 mb-6">
                    Join us in fueling children's dreams. Every contribution, no
                    matter how small, creates ripples of positive change.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/donate"
                      className="inline-flex items-center justify-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      Donate Now
                    </Link>
                    <Link
                      to="/get-involved"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-charity-orange-600 text-charity-orange-600 hover:bg-charity-orange-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Comments Section */}
          <AnimatedSection animation="slideUp" delay={200}>
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-charity-orange-600" />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full p-4 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="self-end px-6 py-4 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b border-charity-neutral-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-charity-neutral-800">
                          {comment.author}
                        </h4>
                        <p className="text-sm text-charity-neutral-500">
                          {comment.date}
                        </p>
                      </div>
                      <button className="flex items-center space-x-1 text-charity-neutral-500 hover:text-charity-orange-600 transition-colors duration-200">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                    <p className="text-charity-neutral-700 mb-4">
                      {comment.content}
                    </p>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-8 space-y-4 border-l-2 border-charity-neutral-200 pl-4">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="bg-charity-neutral-50 p-4 rounded-lg"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h5 className="font-medium text-charity-neutral-800">
                                  {reply.author}
                                </h5>
                                <p className="text-xs text-charity-neutral-500">
                                  {reply.date}
                                </p>
                              </div>
                              <button className="flex items-center space-x-1 text-charity-neutral-500 hover:text-charity-orange-600 transition-colors duration-200">
                                <ThumbsUp className="h-3 w-3" />
                                <span className="text-sm">{reply.likes}</span>
                              </button>
                            </div>
                            <p className="text-charity-neutral-700">
                              {reply.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <button className="mt-3 text-charity-orange-600 hover:text-charity-orange-700 text-sm font-medium flex items-center">
                      <Reply className="h-4 w-4 mr-1" />
                      Reply
                    </button>
                  </div>
                ))}
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
