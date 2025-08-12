// client/pages/Index.tsx
import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  Droplets,
  Utensils,
  TrendingUp,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

/**
 * SectionReveal: simple reveal-on-scroll wrapper using IntersectionObserver.
 * Adds "reveal-in" class when visible; default state is hidden with translate+opacity.
 *
 * Usage: wrap each major <section> content with <SectionReveal>...</SectionReveal>
 */
const SectionReveal = ({ children, rootMargin = "-10% 0px -10% 0px", threshold = 0.12 }: { children: ReactNode; rootMargin?: string; threshold?: number }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // keep visible once revealed
            obs.unobserve(el);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <section
      ref={ref as any}
      className={cn(
        // initial hidden state
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      aria-hidden={!visible}
    >
      {children}
    </section>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F0417d8d5fa4c4c179a585018273842e1?format=webp&width=800",
      quote: "Every child deserves a chance to shine",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2Fe188b6ea2bc94b82ae48a0f7509dc12a?format=webp&width=800",
      quote: "Together, we can build a brighter future",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F26d9b79fb301411bb6a581aed3db1493?format=webp&width=800",
      quote: "Hope is the light that guides us forward",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2Fde0dc405e48c4e8a96b2550349dbee45?format=webp&width=800",
      quote: "Small acts of kindness create lasting change",
    },
  ];

  const popularProjects = [
    {
      icon: Heart,
      title: "Make a Donation",
      description:
        "Your contribution helps us provide essential resources to children in need.",
      color: "charity-orange-500",
    },
    {
      icon: Users,
      title: "Sponsor a Child",
      description:
        "Create a lasting impact by sponsoring a child's education and development.",
      color: "charity-green-500",
    },
    {
      icon: GraduationCap,
      title: "Become a Volunteer",
      description:
        "Join our team and make a direct difference in children's lives.",
      color: "charity-orange-600",
    },
  ];

  const helpItems = [
    {
      icon: TrendingUp,
      title: "Start investing in our volunteer group",
      description:
        "Join our growing community of dedicated volunteers making real change.",
    },
    {
      icon: Droplets,
      title: "Because Everyone Deserves Clean Water",
      description:
        "Help us provide access to clean, safe drinking water for all.",
    },
    {
      icon: GraduationCap,
      title: "Childhood Education development support",
      description:
        "Support educational programs that give children the tools for success.",
    },
    {
      icon: Utensils,
      title: "Child Deserves Better Healthy Foods",
      description:
        "Ensure children have access to nutritious meals for healthy growth.",
    },
  ];

  const recentPrograms = [
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      title: "School Supply Drive 2024",
      description:
        "Providing essential school supplies to over 500 children across 12 schools.",
      date: "March 2024",
    },
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      title: "Healthcare Initiative",
      description:
        "Mobile clinics bringing healthcare services to remote communities.",
      date: "February 2024",
    },
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      title: "Clean Water Project",
      description:
        "Installing water wells in 5 villages to provide clean drinking water.",
      date: "January 2024",
    },
  ];

  const stats = [
    { number: "72+", label: "Total Campaigns" },
    { number: "96+", label: "Become Volunteer" },
    { number: "8K+", label: "Quick Fundraise" },
    { number: "87+", label: "Happy Volunteers" },
  ];

  const recentBlogs = [
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Education",
      date: "March 15, 2024",
      title: "Transforming Lives Through Education",
      snippet:
        "See how our education programs are creating lasting change in rural communities.",
      author: "Sarah Johnson",
    },
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Healthcare",
      date: "March 10, 2024",
      title: "Mobile Clinics Reach Remote Areas",
      snippet:
        "Our healthcare initiative brings medical services to underserved populations.",
      author: "Dr. Michael Brown",
    },
    {
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      category: "Community",
      date: "March 5, 2024",
      title: "Building Stronger Communities Together",
      snippet:
        "Community-led initiatives are creating sustainable solutions for local challenges.",
      author: "Emma Wilson",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  return (
    <>
      {/* Hero Carousel */}
      <SectionReveal>
        <section className="relative h-screen overflow-hidden">
          <Navigation />
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  index === currentSlide ? "opacity-100" : "opacity-0",
                )}
              >
                <img
                  src={image.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {heroImages[currentSlide].quote}
              </h1>
              <div className="flex justify-center gap-4 mt-8">
                <Link
                  to="/get-involved/volunteer"
                  className="px-8 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Join Us Today
                </Link>
                <Link
                  to="/get-involved/donate"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-neutral-800 rounded-lg transition-colors duration-200 font-medium"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-200",
                  index === currentSlide ? "bg-white" : "bg-white/50",
                )}
              />
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* About Us Snippet */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
                    alt="About Us"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charity-orange-500/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charity-neutral-800">
                  About Tabasamu Charity
                </h2>
                <p className="text-lg text-charity-neutral-600 leading-relaxed">
                  Tabasamu Charity is dedicated to transforming lives and building
                  stronger communities through education, healthcare, and
                  sustainable development. Since our founding, we've been
                  committed to creating lasting positive change for children and
                  families across Tanzania.
                </p>
                <p className="text-charity-neutral-600">
                  Our comprehensive programs focus on providing quality education,
                  essential healthcare services, and opportunities for community
                  development. Together with our volunteers and supporters, we're
                  building a brighter future for the next generation.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Call-to-Action Section */}
      <SectionReveal>
        <section className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Volunteer Section */}
            <div className="relative h-80 lg:h-96 bg-charity-orange-600 flex items-center justify-center overflow-hidden group cursor-pointer">
              <img
                src="https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
                alt="Volunteer"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-600/80 to-charity-orange-500/80 group-hover:from-charity-orange-700/90 group-hover:to-charity-orange-600/90 transition-all duration-500" />
              <div className="relative text-center text-white px-8 group-hover:scale-105 transition-transform duration-500">
                <Users className="h-16 w-16 mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                  Become A Volunteer
                </h3>
                <p className="text-xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Join our mission to make a difference
                </p>
                <Link
                  to="/get-involved/volunteer"
                  className="inline-block px-8 py-3 bg-white text-charity-orange-600 hover:bg-yellow-100 hover:scale-105 hover:shadow-lg rounded-lg font-bold transition-all duration-300 group-hover:animate-pulse"
                >
                  JOIN NOW
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Donate Section */}
            <div className="relative h-80 lg:h-96 bg-charity-green-700 flex items-center justify-center overflow-hidden group cursor-pointer">
              <img
                src="https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
                alt="Donate"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charity-green-700/80 to-charity-green-600/80 group-hover:from-charity-green-800/90 group-hover:to-charity-green-700/90 transition-all duration-500" />
              <div className="relative text-center text-white px-8 group-hover:scale-105 transition-transform duration-500">
                <Heart className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 group-hover:text-pink-200 transition-all duration-500 fill-current" />
                <h3 className="text-3xl font-bold mb-4 group-hover:text-green-100 transition-colors duration-300">
                  Support Our Cause
                </h3>
                <p className="text-xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Every donation creates lasting impact
                </p>
                <Link
                  to="/get-involved/donate"
                  className="inline-block px-8 py-3 bg-white text-charity-green-700 hover:bg-green-100 hover:scale-105 hover:shadow-lg rounded-lg font-bold transition-all duration-300 group-hover:animate-pulse"
                >
                  DONATE NOW
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Popular Projects */}
      <SectionReveal>
        <section className="py-20 bg-charity-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-wide text-charity-orange-600 font-semibold mb-2">
                OUR BEST FEATURES
              </h2>
              <h3 className="text-4xl font-bold text-charity-neutral-800">
                We're Popular To Provide Best Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-center cursor-pointer group border-2 border-transparent hover:border-charity-orange-200"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500",
                        `bg-${project.color}/10 group-hover:bg-${project.color}/20`,
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "h-8 w-8 group-hover:scale-125 transition-transform duration-300",
                          `text-${project.color}`,
                        )}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-charity-neutral-800 mb-4 group-hover:text-charity-orange-600 group-hover:scale-105 transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-charity-neutral-600 group-hover:text-charity-neutral-700 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <Link
                        to={project.title === "Make a Donation" ? "/get-involved/donate" : project.title === "Sponsor a Child" ? "/get-involved/sponsor" : "/get-involved/volunteer"}
                        className="inline-block px-6 py-2 bg-charity-orange-600 text-white rounded-lg hover:bg-charity-orange-700 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* How You Can Help Us */}
      <SectionReveal>
        <section className="py-20 bg-charity-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                How You Can Help Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center text-white group cursor-pointer"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                      <IconComponent className="h-10 w-10 group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-300" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-yellow-100 group-hover:scale-105 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/90 text-sm group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      {item.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-16 h-1 bg-white/50 mx-auto rounded-full group-hover:bg-yellow-200 transition-colors duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Recent Programs */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-charity-neutral-800">
                Recent Programs
              </h2>
              <Link
                to="/programs"
                className="flex items-center text-charity-orange-600 hover:text-charity-orange-700 font-medium group"
              >
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm">
                      {program.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {program.title}
                    </h4>
                    <p className="text-charity-neutral-600">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Impact Statistics */}
      <SectionReveal>
        <section className="py-20 bg-charity-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                LET'S SUPPORT US TO HELP THEM
              </h2>
              <p className="text-xl text-white/90">
                Join your hands with us for a better life and future
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center text-white group cursor-pointer"
                >
                  <div className="bg-white/10 rounded-xl p-6 group-hover:bg-white/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 border border-white/20 group-hover:border-white/40">
                    <div className="text-5xl font-bold mb-2 group-hover:text-yellow-100 group-hover:scale-110 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-lg opacity-90 group-hover:opacity-100 group-hover:text-green-100 transition-all duration-300">
                      {stat.label}
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-1 bg-yellow-200 mx-auto rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-white text-charity-green-700 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Recent Blogs */}
      <SectionReveal>
        <section className="py-20 bg-charity-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-charity-neutral-800">
                Recent Blogs
              </h2>
              <Link
                to="/blog"
                className="flex items-center text-charity-orange-600 hover:text-charity-orange-700 font-medium group"
              >
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-charity-neutral-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{blog.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{blog.author}</span>
                    </div>
                    <h4 className="text-xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {blog.title}
                    </h4>
                    <p className="text-charity-neutral-600">{blog.snippet}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </>
  );
};

export default Index;
