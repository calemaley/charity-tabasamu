import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Star,
  Award,
  Users,
  Globe,
  Download,
  Calendar,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { redirectToPayment, CAMPAIGN_SOURCES } from "@/lib/payment";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Working button functions
  const handleSendEmail = () => {
    const subject = encodeURIComponent("Inquiry from Tabasamu Website");
    const body = encodeURIComponent(
      "Hello Tabasamu Team,\n\nI would like to get in touch regarding...",
    );
    window.location.href = `mailto:hello@tabasamu.org?subject=${subject}&body=${body}`;
  };

  const handleCallNow = () => {
    window.location.href = "tel:+254123456789";
  };

  const handleGetDirections = () => {
    const address = encodeURIComponent("123 Charity St, Nairobi, Kenya");
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank",
    );
  };

  const handleBookCall = () => {
    // Open Calendly or similar booking service
    window.open("https://calendly.com/tabasamu-charity/15min", "_blank");
  };

  const handleQuickDonation = () => {
    redirectToPayment("donationUrl", {
      source: CAMPAIGN_SOURCES.contact,
      campaign: "quick-action",
    });
  };

  const handleDownloadBrochure = () => {
    // Create a downloadable PDF link
    const link = document.createElement("a");
    link.href = "/assets/tabasamu-brochure.pdf"; // You would need to add this file
    link.download = "Tabasamu-Charity-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocialShare = (platform: string) => {
    const url = window.location.href;
    const text =
      "Check out Tabasamu Charity - Making a difference in children's lives";

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
      case "instagram":
        // Instagram doesn't have direct sharing, so copy link
        navigator.clipboard.writeText(url);
        alert(
          "Link copied! You can now paste it in your Instagram bio or story.",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Drop us a line anytime",
      info: "hello@tabasamu.org",
      action: "Send Email",
      handler: handleSendEmail,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0,
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our team",
      info: "+254 123 456 789",
      action: "Call Now",
      handler: handleCallNow,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 100,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Come see our impact firsthand",
      info: "123 Charity St, Nairobi, Kenya",
      action: "Get Directions",
      handler: handleGetDirections,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 200,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      handler: () => handleSocialShare("facebook"),
    },
    {
      icon: Twitter,
      label: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
      handler: () => handleSocialShare("twitter"),
    },
    {
      icon: Instagram,
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
      handler: () => handleSocialShare("instagram"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      color: "bg-blue-800 hover:bg-blue-900",
      handler: () => handleSocialShare("linkedin"),
    },
  ];

  const quickActions = [
    {
      title: "🎯 Book a Call",
      description: "Schedule a 15-minute chat with our team",
      action: "Schedule Now",
      handler: handleBookCall,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "💝 Quick Donation",
      description: "Make an immediate impact today",
      action: "Donate Now",
      handler: handleQuickDonation,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "📖 Download Brochure",
      description: "Learn more about our programs",
      action: "Download PDF",
      handler: handleDownloadBrochure,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const officeHours = [
    { day: "Mon - Fri", hours: "8:00 AM - 6:00 PM", open: true },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM", open: true },
    { day: "Sunday", hours: "Closed", open: false },
  ];

  const kenyaTime = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Nairobi",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-charity-orange-400 via-charity-green-400 to-charity-orange-600">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              {i % 4 === 0
                ? "💌"
                : i % 4 === 1
                  ? "📞"
                  : i % 4 === 2
                    ? "🌍"
                    : "💝"}
            </div>
          ))}
        </div>

        {/* Interactive mouse gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`,
            transition: "background 0.3s ease",
          }}
        />

        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <AnimatedSection animation="slideUp">
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
                  <MessageCircle className="h-12 w-12 text-white animate-pulse" />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-charity-neutral-100 bg-clip-text text-transparent">
                  Let's Connect
                </h1>
                <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed opacity-95 font-light">
                  Ready to make a difference? We'd love to hear from you and
                  explore how we can work together to transform lives.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact-methods")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group inline-flex items-center px-10 py-5 bg-white text-charity-orange-600 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
                  >
                    <span>Start Conversation</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
                  </button>
                  <button
                    onClick={() =>
                      redirectToPayment("donationUrl", {
                        source: CAMPAIGN_SOURCES.contact,
                        campaign: "hero-cta",
                      })
                    }
                    className="group inline-flex items-center px-10 py-5 border-3 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Heart className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-200" />
                    <span>Quick Donate</span>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-white rounded-full flex justify-center">
            <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Modern Contact Methods */}
      <section
        id="contact-methods"
        className="py-24 bg-gradient-to-b from-white to-charity-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-charity-neutral-800 mb-6">
                Choose Your Way to Connect
              </h2>
              <p className="text-xl text-charity-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We're here 24/7 to support your journey. Pick the method that
                feels right for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={method.delay}
              >
                <div className={`relative group h-full`}>
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-500`}
                  ></div>

                  {/* Main card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Icon with gradient */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-300">
                      {method.title}
                    </h3>

                    <p className="text-charity-neutral-600 mb-4 text-lg">
                      {method.subtitle}
                    </p>

                    <p className="text-charity-neutral-800 font-semibold mb-6 text-lg">
                      {method.info}
                    </p>

                    <button
                      onClick={method.handler}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      <span>{method.action}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Star className="h-6 w-6 text-yellow-400 fill-current animate-spin" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Contact Form */}
      <section className="py-24 bg-gradient-to-br from-charity-neutral-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-charity-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-charity-green-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <AnimatedSection animation="slideRight">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-charity-neutral-100">
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                    Send Us a Message
                  </h3>
                  <p className="text-charity-neutral-600 text-lg">
                    Your message matters to us. We'll get back to you within 24
                    hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <AnimatedSection animation="scaleIn">
                    <div className="text-center py-16">
                      <div className="w-24 h-24 mx-auto mb-8 bg-charity-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-charity-green-600" />
                      </div>
                      <h4 className="text-3xl font-bold text-charity-green-700 mb-4">
                        Message Sent Successfully! 🎉
                      </h4>
                      <p className="text-charity-neutral-600 mb-8 text-lg">
                        Thank you for reaching out. Our team will respond within
                        24 hours!
                      </p>
                      <div className="flex justify-center space-x-3">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 bg-charity-green-500 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-bold text-charity-neutral-700 mb-3 group-focus-within:text-charity-orange-600 transition-colors duration-300">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-3 focus:ring-charity-orange-500/20 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 text-lg"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-bold text-charity-neutral-700 mb-3 group-focus-within:text-charity-orange-600 transition-colors duration-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-3 focus:ring-charity-orange-500/20 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 text-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-charity-neutral-700 mb-3 group-focus-within:text-charity-orange-600 transition-colors duration-300">
                        What's this about?
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-3 focus:ring-charity-orange-500/20 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 text-lg appearance-none cursor-pointer"
                      >
                        <option value="general">💬 General Inquiry</option>
                        <option value="volunteer">
                          🙋‍♀️ I want to volunteer
                        </option>
                        <option value="donation">💝 Donation questions</option>
                        <option value="sponsorship">
                          🧒 Child sponsorship
                        </option>
                        <option value="partnership">
                          🤝 Partnership opportunity
                        </option>
                        <option value="media">📰 Media & Press</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-charity-neutral-700 mb-3 group-focus-within:text-charity-orange-600 transition-colors duration-300">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-3 focus:ring-charity-orange-500/20 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 text-lg"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-charity-neutral-700 mb-3 group-focus-within:text-charity-orange-600 transition-colors duration-300">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-3 focus:ring-charity-orange-500/20 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 resize-none text-lg"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full relative px-8 py-5 bg-gradient-to-r from-charity-orange-600 to-charity-orange-700 hover:from-charity-orange-700 hover:to-charity-orange-800 text-white rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 to-charity-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <Send className="h-6 w-6 mr-3 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-200 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Side Information */}
            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="space-y-8">
                {/* Office Hours with Live Time */}
                <div className="bg-gradient-to-br from-charity-green-50 to-charity-green-100 p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-charity-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charity-neutral-800">
                        Office Hours
                      </h3>
                      <p className="text-charity-green-700 font-medium">
                        Kenya Time: {kenyaTime}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-xl transition-all duration-300 ${
                          schedule.open
                            ? "bg-white shadow-md"
                            : "bg-charity-neutral-100/50"
                        }`}
                      >
                        <span
                          className={`font-bold ${schedule.open ? "text-charity-neutral-800" : "text-charity-neutral-500"}`}
                        >
                          {schedule.day}
                        </span>
                        <span
                          className={`font-medium ${schedule.open ? "text-charity-green-600" : "text-charity-neutral-500"}`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.handler}
                        className={`w-full p-4 rounded-2xl bg-gradient-to-r ${action.gradient} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                      >
                        <div className="text-left">
                          <h4 className="font-bold text-lg mb-1">
                            {action.title}
                          </h4>
                          <p className="text-white/90 text-sm mb-2">
                            {action.description}
                          </p>
                          <span className="text-sm font-medium">
                            {action.action} →
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-charity-orange-50 to-charity-orange-100 p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 text-center">
                    Follow Our Journey
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        onClick={social.handler}
                        className={`w-14 h-14 ${social.color} text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-xl`}
                      >
                        <social.icon className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <p className="text-center text-charity-neutral-600 mt-4">
                    Stay updated with our latest impact stories and community
                    events
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-charity-orange-600 to-charity-green-600 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: "24px",
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {i % 3 === 0 ? "🌟" : i % 3 === 1 ? "💫" : "✨"}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-8">
                Ready to Make History Together?
              </h2>
              <p className="text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
                Every great change starts with a conversation. Let's start ours
                today and create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-methods")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-10 py-5 bg-white text-charity-orange-600 hover:text-charity-orange-700 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Our Conversation
                </button>
                <button
                  onClick={() =>
                    redirectToPayment("donationUrl", {
                      source: CAMPAIGN_SOURCES.contact,
                      campaign: "final-cta",
                    })
                  }
                  className="inline-flex items-center px-10 py-5 border-3 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="mr-3 h-6 w-6" />
                  Make an Impact Now
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating animation CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(8px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Contact;
