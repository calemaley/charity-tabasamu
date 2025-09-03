import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  Reply,
  Send,
  Tag,
  Clock,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { redirectToPayment, CAMPAIGN_SOURCES } from "@/lib/payment";
import { featuredPost } from "@shared/blog-data";

const Blog = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [showNameForm, setShowNameForm] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [startTime] = useState(Date.now());
  const [maxReadTime, setMaxReadTime] = useState(5);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah M.",
      content:
        "This is so inspiring! Every child truly deserves a chance to achieve their dreams.",
      date: "2 hours ago",
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 1,
          author: "James K.",
          content:
            "Couldn't agree more! Education is the key to breaking the cycle of poverty.",
          date: "1 hour ago",
          likes: 5,
          isLiked: false,
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
      isLiked: false,
      replies: [],
    },
    {
      id: 3,
      author: "Grace N.",
      content:
        "This reminds me why I started volunteering. Thank you for sharing this message.",
      date: "1 day ago",
      likes: 15,
      isLiked: false,
      replies: [
        {
          id: 1,
          author: "Emma W.",
          content:
            "Grace, your volunteer work is amazing! Keep making a difference.",
          date: "18 hours ago",
          likes: 3,
          isLiked: false,
        },
      ],
    },
  ]);

  // Real-time read tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = (Date.now() - startTime) / 1000 / 60; // minutes
      const roundedTime = Math.ceil(currentTime);
      if (roundedTime > maxReadTime) {
        setMaxReadTime(roundedTime);
        setReadTime(`${roundedTime} min read`);
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [startTime, maxReadTime]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleCommentLike = (commentId: number, replyId?: number) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          if (replyId) {
            // Like a reply
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId
                  ? {
                      ...reply,
                      likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                      isLiked: !reply.isLiked,
                    }
                  : reply,
              ),
            };
          } else {
            // Like a comment
            return {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            };
          }
        }
        return comment;
      }),
    );
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = featuredPost.title;

    switch (platform) {
      case "facebook":
        // Use Facebook's share dialog
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        const facebookWindow = window.open(
          facebookUrl,
          "facebook-share",
          "width=626,height=436,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1",
        );
        if (!facebookWindow) {
          // Fallback if popup is blocked
          window.location.href = facebookUrl;
        }
        break;
      case "twitter":
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        const twitterWindow = window.open(
          twitterUrl,
          "twitter-share",
          "width=550,height=420,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1",
        );
        if (!twitterWindow) {
          window.location.href = twitterUrl;
        }
        break;
      case "whatsapp":
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
        window.open(whatsappUrl, "_blank");
        break;
      case "copy":
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard
            .writeText(url)
            .then(() => {
              alert("Link copied to clipboard!");
            })
            .catch(() => {
              // Fallback for older browsers
              const textArea = document.createElement("textarea");
              textArea.value = url;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
              alert("Link copied to clipboard!");
            });
        } else {
          // Fallback for non-secure contexts
          const textArea = document.createElement("textarea");
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("Link copied to clipboard!");
        }
        break;
      default:
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      setShowNameForm(true);
      return;
    }
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: userName,
        content: newComment,
        date: "Just now",
        likes: 0,
        isLiked: false,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleReplySubmit = (commentId: number) => {
    if (!userName.trim()) {
      setShowNameForm(true);
      return;
    }
    if (newReply.trim()) {
      const reply = {
        id: Date.now(),
        author: userName,
        content: newReply,
        date: "Just now",
        likes: 0,
        isLiked: false,
      };
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, reply] }
            : comment,
        ),
      );
      setNewReply("");
      setReplyingTo(null);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setShowNameForm(false);
    }
  };

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
                <Link to="/" className="hover:text-charity-orange-600">
                  Home
                </Link>
                <span>/</span>
                <span className="text-charity-neutral-800">Blog</span>
              </div>
            </nav>

            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-charity-orange-600 text-white rounded-full text-sm font-medium">
                <Tag className="h-3 w-3 mr-1" />
                {featuredPost.category}
              </span>
              <div className="flex items-center text-charity-neutral-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {featuredPost.date}
              </div>
              <div className="flex items-center text-charity-neutral-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-charity-neutral-800 mb-4 leading-tight">
              {featuredPost.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-charity-neutral-600 mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            {/* Author and Social */}
            <div className="flex items-center justify-between border-b border-charity-neutral-200 pb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-charity-orange-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-charity-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-charity-neutral-800">
                    {featuredPost.author}
                  </p>
                  <p className="text-sm text-charity-neutral-500">
                    Content Writer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                    isLiked
                      ? "text-red-500 hover:text-red-600"
                      : "text-charity-neutral-500 hover:text-charity-orange-600"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span className="text-sm">{likeCount}</span>
                </button>
                <div className="flex items-center gap-1 text-charity-neutral-500">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{comments.length}</span>
                </div>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scaleIn">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
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
              <div className="text-charity-neutral-700 leading-relaxed">
                {featuredPost.content.map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tags */}
          {featuredPost.tags && featuredPost.tags.length > 0 && (
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="mt-12 pt-8 border-t border-charity-neutral-200">
                <h4 className="text-lg font-semibold text-charity-neutral-800 mb-4">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
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
          )}

          {/* Call to Action */}
          <AnimatedSection animation="slideUp" delay={300}>
            <div className="mt-12 bg-charity-orange-50 p-8 rounded-xl border-l-4 border-charity-orange-500">
              <h3 className="text-2xl font-bold text-charity-neutral-800 mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-charity-neutral-600 mb-6">
                Join us in fueling children's dreams. Every contribution, no
                matter how small, creates ripples of positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    redirectToPayment("donationUrl", {
                      source: CAMPAIGN_SOURCES.blog,
                      campaign: "blog-cta",
                    })
                  }
                  className="inline-flex items-center justify-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Donate Now
                </button>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charity-orange-600 text-charity-orange-600 hover:bg-charity-orange-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Comments Section */}
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="mt-16 pt-8 border-t border-charity-neutral-200">
              <h4 className="text-2xl font-bold text-charity-neutral-800 mb-8">
                Comments ({comments.length})
              </h4>

              {/* Name Form Modal */}
              {showNameForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                    <h3 className="text-lg font-semibold text-charity-neutral-800 mb-4">
                      Please enter your name to comment
                    </h3>
                    <form onSubmit={handleNameSubmit}>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your name"
                        className="w-full p-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent mb-4"
                        autoFocus
                      />
                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="flex-1 px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200"
                        >
                          Save Name
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowNameForm(false)}
                          className="flex-1 px-4 py-2 bg-charity-neutral-200 hover:bg-charity-neutral-300 text-charity-neutral-700 rounded-lg transition-colors duration-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* User Name Display */}
              {userName && (
                <div className="mb-4 p-3 bg-charity-green-50 rounded-lg border border-charity-green-200">
                  <p className="text-charity-green-700">
                    <strong>Commenting as:</strong> {userName}
                    <button
                      onClick={() => setShowNameForm(true)}
                      className="ml-2 text-charity-green-600 hover:text-charity-green-800 text-sm underline"
                    >
                      Change name
                    </button>
                  </p>
                </div>
              )}

              {/* Add Comment Form */}
              <div className="mb-8 p-6 bg-charity-neutral-50 rounded-xl">
                <h5 className="text-lg font-semibold text-charity-neutral-800 mb-4">
                  Leave a Comment
                </h5>
                <div className="space-y-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={
                      userName
                        ? "Share your thoughts..."
                        : "Please enter your name first to comment"
                    }
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                  <button
                    onClick={handleCommentSubmit}
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
                  <div
                    key={comment.id}
                    className="bg-white p-6 rounded-xl border border-charity-neutral-200"
                  >
                    {/* Comment Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-charity-orange-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-charity-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-charity-neutral-800">
                            {comment.author}
                          </p>
                          <p className="text-sm text-charity-neutral-500">
                            {comment.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleCommentLike(comment.id)}
                          className={`flex items-center gap-1 transition-colors duration-200 ${
                            comment.isLiked
                              ? "text-charity-orange-600"
                              : "text-charity-neutral-500 hover:text-charity-orange-600"
                          }`}
                        >
                          <Heart
                            className={`h-4 w-4 ${comment.isLiked ? "fill-current" : ""}`}
                          />
                          <span className="text-sm">{comment.likes}</span>
                        </button>
                        <button
                          onClick={() =>
                            setReplyingTo(
                              replyingTo === comment.id ? null : comment.id,
                            )
                          }
                          className="flex items-center gap-1 text-charity-neutral-500 hover:text-charity-orange-600 transition-colors duration-200"
                        >
                          <Reply className="h-4 w-4" />
                          <span className="text-sm">Reply</span>
                        </button>
                      </div>
                    </div>

                    {/* Comment Content */}
                    <p className="text-charity-neutral-700 mb-4">
                      {comment.content}
                    </p>

                    {/* Reply Form */}
                    {replyingTo === comment.id && (
                      <div className="mt-4 p-4 bg-charity-neutral-50 rounded-lg">
                        <textarea
                          value={newReply}
                          onChange={(e) => setNewReply(e.target.value)}
                          placeholder={
                            userName
                              ? "Write a reply..."
                              : "Please enter your name first to reply"
                          }
                          className="w-full px-3 py-2 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent resize-none"
                          rows={3}
                        />
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => handleReplySubmit(comment.id)}
                            className="px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg text-sm transition-colors duration-200"
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
                          <div
                            key={reply.id}
                            className="p-4 bg-charity-neutral-50 rounded-lg border-l-4 border-charity-orange-200"
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-8 h-8 bg-charity-orange-100 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-charity-orange-600" />
                              </div>
                              <div>
                                <p className="font-medium text-charity-neutral-800 text-sm">
                                  {reply.author}
                                </p>
                                <p className="text-xs text-charity-neutral-500">
                                  {reply.date}
                                </p>
                              </div>
                            </div>
                            <p className="text-charity-neutral-700 text-sm">
                              {reply.content}
                            </p>
                            <div className="mt-2">
                              <button
                                onClick={() =>
                                  handleCommentLike(comment.id, reply.id)
                                }
                                className={`flex items-center gap-1 transition-colors duration-200 ${
                                  reply.isLiked
                                    ? "text-charity-orange-600"
                                    : "text-charity-neutral-500 hover:text-charity-orange-600"
                                }`}
                              >
                                <Heart
                                  className={`h-3 w-3 ${reply.isLiked ? "fill-current" : ""}`}
                                />
                                <span className="text-xs">{reply.likes}</span>
                              </button>
                            </div>
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

      <Footer />
    </>
  );
};

export default Blog;
