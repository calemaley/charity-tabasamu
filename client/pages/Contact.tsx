import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Heart,
  CheckCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

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
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  const handleGetDirections = () => {
    // Tabasamu Charity Office coordinates (Nairobi, Kenya)
    const lat = -1.2864;
    const lng = 36.8172;
    const address = "123 Charity Street, Nairobi, Kenya";

    // Try Google Maps first, fallback to Apple Maps on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      window.open(
        `maps://maps.google.com/maps?q=${lat},${lng}+(${encodeURIComponent(address)})`,
        "_blank",
      );
    } else {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
        "_blank",
      );
    }

    // Also show embedded map
    setShowMap(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Charity Street", "Nairobi, Kenya", "P.O. Box 12345"],
      action: "Get Directions",
      color: "orange",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 123 456 789", "+254 987 654 321", "Mon-Fri: 8AM-5PM"],
      action: "Call Now",
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@tabasamu.org",
        "volunteer@tabasamu.org",
        "Response within 24 hours",
      ],
      action: "Send Email",
      color: "blue",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM", available: true },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM", available: true },
    { day: "Sunday", hours: "Closed", available: false },
  ];

  const faqs = [
    {
      question: "How can I volunteer with Tabasamu Charity?",
      answer:
        "You can start by filling out our volunteer application form. We'll then schedule an interview and provide comprehensive training before your placement.",
      icon: Users,
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, Tabasamu Charity is a registered nonprofit organization. All donations are tax-deductible and you'll receive a receipt for your records.",
      icon: Award,
    },
    {
      question: "Can I sponsor a specific child?",
      answer:
        "Absolutely! Our child sponsorship program allows you to form a personal connection with a child while supporting their education and healthcare needs.",
      icon: Heart,
    },
    {
      question: "Do you accept in-kind donations?",
      answer:
        "Yes, we accept donations of school supplies, medical equipment, and other items. Please contact us first to confirm what items are currently needed.",
      icon: Star,
    },
  ];

  return (
    <>
      {/* Hero Section with Map Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Map Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)`,
            transition: "background 0.3s ease",
          }}
        />

        {/* Kenya Map SVG Background */}
        <div className="absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Simplified Kenya map outline */}
            <path
              d="M200,150 L300,120 L400,140 L500,160 L580,180 L600,220 L580,280 L560,350 L520,420 L480,450 L420,460 L360,450 L300,430 L250,400 L200,350 L180,300 L170,250 L180,200 Z"
              fill="currentColor"
              className="text-charity-green-300 animate-pulse"
              style={{ animationDuration: "4s" }}
            />
            {/* Major cities markers */}
            <circle
              cx="320"
              cy="280"
              r="8"
              fill="currentColor"
              className="text-charity-orange-500 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            />
            <circle
              cx="450"
              cy="320"
              r="6"
              fill="currentColor"
              className="text-charity-green-500 animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "2s" }}
            />
            <circle
              cx="380"
              cy="200"
              r="5"
              fill="currentColor"
              className="text-charity-orange-400 animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "2s" }}
            />

            {/* Connecting lines */}
            <line
              x1="320"
              y1="280"
              x2="450"
              y2="320"
              stroke="currentColor"
              strokeWidth="2"
              className="text-charity-neutral-300 opacity-50"
            />
            <line
              x1="320"
              y1="280"
              x2="380"
              y2="200"
              stroke="currentColor"
              strokeWidth="2"
              className="text-charity-neutral-300 opacity-50"
            />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-charity-orange-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <AnimatedSection animation="slideUp">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-charity-orange-500/20 rounded-full mb-6 backdrop-blur-sm border border-charity-orange-300/30">
                  <MessageCircle className="h-10 w-10 text-charity-orange-600" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-charity-orange-600 to-charity-green-600 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-charity-neutral-700 leading-relaxed">
                  Ready to make a difference? Connect with our team and discover
                  how you can join our mission to transform lives across Kenya.
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group inline-flex items-center px-8 py-4 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg font-semibold">
                      Start Conversation
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-charity-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-charity-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-to-br from-charity-neutral-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-charity-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-charity-green-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Choose the method that works best for you. We're here to help
                and answer any questions about our programs and opportunities.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <div className="group relative">
                    {/* Card */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 to-charity-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                      <div className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-charity-${info.color}-400 to-charity-${info.color}-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-charity-neutral-800 mb-4 group-hover:text-charity-orange-600 transition-colors duration-300">
                          {info.title}
                        </h3>

                        <div className="space-y-2 mb-6">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-charity-neutral-600 group-hover:text-charity-neutral-700 transition-colors duration-300"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>

                        <button className="inline-flex items-center text-charity-orange-600 hover:text-charity-orange-700 font-medium transition-all duration-300 group-hover:scale-105">
                          <span>{info.action}</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-charity-orange-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-4 border-charity-green-300 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-charity-orange-200 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <AnimatedSection animation="slideRight">
              <div className="bg-gradient-to-br from-white to-charity-neutral-50 p-8 rounded-3xl shadow-2xl border border-charity-neutral-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-charity-neutral-800 mb-4">
                    Professional Contact Form
                  </h3>
                  <p className="text-charity-neutral-600">
                    Please provide your details and inquiry. Our team will
                    respond to your message within 24 hours during business
                    days.
                  </p>
                </div>

                {isSubmitted ? (
                  <AnimatedSection animation="scaleIn">
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 bg-charity-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-10 w-10 text-charity-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-charity-green-700 mb-3">
                        Your Message Has Been Received
                      </h4>
                      <p className="text-charity-neutral-600 mb-6">
                        Thank you for contacting Tabasamu Charity. A member of
                        our professional team will review your inquiry and
                        respond within one business day. You will receive a
                        confirmation email shortly.
                      </p>
                      <div className="flex justify-center space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-charity-green-500 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-charity-neutral-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-2 focus:ring-charity-orange-500 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-charity-neutral-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-2 focus:ring-charity-orange-500 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-charity-neutral-700 mb-3">
                        Inquiry Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-2 focus:ring-charity-orange-500 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donation">Donations</option>
                        <option value="sponsorship">Child Sponsorship</option>
                        <option value="partnership">Partnerships</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-charity-neutral-700 mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-2 focus:ring-charity-orange-500 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-charity-neutral-700 mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-charity-neutral-200 rounded-xl focus:ring-2 focus:ring-charity-orange-500 focus:border-charity-orange-500 transition-all duration-300 group-hover:border-charity-orange-300 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-charity-orange-600 to-charity-orange-700 hover:from-charity-orange-700 hover:to-charity-orange-800 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                    >
                      <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                      Submit Professional Inquiry
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Office Info & Hours */}
            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-gradient-to-br from-charity-green-50 to-charity-orange-50 p-8 rounded-3xl shadow-xl border border-charity-green-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-charity-green-500 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-charity-neutral-800">
                      Office Hours
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-xl transition-all duration-300 ${
                          schedule.available
                            ? "bg-white/70 hover:bg-white/90 shadow-sm"
                            : "bg-charity-neutral-100/50"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            schedule.available
                              ? "text-charity-neutral-800"
                              : "text-charity-neutral-500"
                          }`}
                        >
                          {schedule.day}
                        </span>
                        <span
                          className={`${
                            schedule.available
                              ? "text-charity-green-600"
                              : "text-charity-neutral-500"
                          } font-medium`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-charity-orange-100 rounded-xl border-l-4 border-charity-orange-500">
                    <p className="text-sm text-charity-orange-800">
                      <strong>Emergency Contact:</strong> For urgent matters
                      outside office hours, call +254 123 456 789
                    </p>
                  </div>
                </div>

                {/* Location & Map */}
                <div className="bg-gradient-to-br from-charity-orange-50 to-charity-green-50 p-8 rounded-3xl shadow-xl border border-charity-orange-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-charity-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-charity-neutral-800">
                      Our Location
                    </h3>
                  </div>

                  <div className="relative group cursor-pointer mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-charity-green-200 to-charity-orange-200 rounded-2xl overflow-hidden relative">
                      {/* Interactive map placeholder with Kenya outline */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 300 200"
                          className="w-full h-full opacity-60"
                        >
                          <path
                            d="M80,60 L120,50 L160,55 L200,65 L230,75 L240,90 L230,115 L220,140 L200,160 L180,170 L160,165 L140,155 L120,145 L100,135 L80,120 L70,100 L65,80 L70,65 Z"
                            fill="currentColor"
                            className="text-charity-green-400 group-hover:text-charity-green-500 transition-colors duration-300"
                          />
                          <circle
                            cx="130"
                            cy="110"
                            r="4"
                            fill="currentColor"
                            className="text-charity-orange-600 animate-pulse"
                          />
                        </svg>
                      </div>

                      {/* Location marker */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-4 h-4 bg-charity-orange-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-3 border-l-transparent border-r-transparent border-t-charity-orange-500"></div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                          <p className="text-sm text-charity-neutral-800 font-medium">
                            📍 Nairobi, Kenya
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleGetDirections}
                    className="w-full px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <MapPin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Get Directions
                  </button>

                  {/* Interactive Map Modal */}
                  {showMap && (
                    <div
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                      onClick={() => setShowMap(false)}
                    >
                      <div
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="p-6 border-b border-charity-neutral-200 flex justify-between items-center">
                          <h3 className="text-2xl font-bold text-charity-neutral-800">
                            Tabasamu Charity Location
                          </h3>
                          <button
                            onClick={() => setShowMap(false)}
                            className="w-8 h-8 bg-charity-neutral-100 hover:bg-charity-neutral-200 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            ×
                          </button>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <p className="text-charity-neutral-700 mb-2">
                              <strong>Address:</strong> 123 Charity Street,
                              Nairobi, Kenya
                            </p>
                            <p className="text-charity-neutral-700 mb-2">
                              <strong>Postal Code:</strong> P.O. Box 12345
                            </p>
                            <p className="text-charity-neutral-700">
                              <strong>Coordinates:</strong> -1.2864°, 36.8172°
                            </p>
                          </div>
                          <div className="w-full h-96 bg-gradient-to-br from-charity-green-200 to-charity-orange-200 rounded-xl overflow-hidden relative">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.82090936383!2d36.71701949726562!3d-1.2864004999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Tabasamu Charity Location"
                            />
                            <div className="absolute top-4 right-4">
                              <a
                                href="https://www.google.com/maps/search/?api=1&query=-1.2864,36.8172"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                              >
                                Open in Maps
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-charity-neutral-100">
                  <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 text-center">
                    Connect With Us
                  </h3>

                  <div className="flex justify-center gap-4">
                    {[
                      {
                        icon: Facebook,
                        color: "blue",
                        hover: "hover:bg-blue-600",
                      },
                      {
                        icon: Twitter,
                        color: "cyan",
                        hover: "hover:bg-cyan-500",
                      },
                      {
                        icon: Instagram,
                        color: "pink",
                        hover: "hover:bg-pink-600",
                      },
                      {
                        icon: Globe,
                        color: "green",
                        hover: "hover:bg-charity-green-600",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`w-14 h-14 bg-charity-orange-600 ${social.hover} text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl`}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-charity-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-charity-neutral-600">
                Quick answers to common questions about our organization and
                programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-charity-neutral-100">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-charity-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-charity-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-charity-neutral-800 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-charity-neutral-600 leading-relaxed ml-14">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="slideUp" delay={400}>
            <div className="text-center mt-12">
              <p className="text-charity-neutral-600 mb-6">
                Don't see your question answered?
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-8 py-4 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Ask Us Anything
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Add floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
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
