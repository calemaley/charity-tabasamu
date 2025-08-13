import { Link } from "react-router-dom";
import {
  GraduationCap,
  Stethoscope,
  Users,
  Droplets,
  Utensils,
  Home,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Programs = () => {
  const mainPrograms = [
    {
      icon: GraduationCap,
      title: "Education Support",
      subtitle: "Building foundations for success",
      description:
        "Our education programs provide children with access to quality learning opportunities, school supplies, and educational resources that set them up for success.",
      image: "/placeholder.svg",
      features: [
        "School supply distribution",
        "Scholarship programs",
        "After-school tutoring",
        "Library development",
      ],
      color: "charity-orange-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      subtitle: "Ensuring healthy communities",
      description:
        "We provide essential healthcare services through mobile clinics, health education programs, and partnerships with local medical facilities.",
      image: "/placeholder.svg",
      features: [
        "Mobile health clinics",
        "Preventive care programs",
        "Health education",
        "Emergency medical support",
      ],
      color: "charity-green-500",
    },
    {
      icon: Users,
      title: "Community Development",
      subtitle: "Empowering sustainable growth",
      description:
        "Our community development initiatives focus on building local capacity and creating sustainable solutions for long-term prosperity.",
      image: "/placeholder.svg",
      features: [
        "Skills training workshops",
        "Microfinance programs",
        "Leadership development",
        "Infrastructure projects",
      ],
      color: "charity-orange-600",
    },
  ];

  const specialPrograms = [
    {
      icon: GraduationCap,
      title: "School Volunteering",
      description:
        "Volunteers work directly with children in schools, providing educational support and mentorship.",
      duration: "3-6 months",
      location: "Rural schools across Kenya",
      participants: "50+ volunteers annually",
      link: "/programs/school-volunteering",
    },
    {
      icon: Stethoscope,
      title: "Hospital Internships",
      description:
        "Medical students and professionals gain experience while providing essential healthcare services.",
      duration: "6-12 months",
      location: "Partner hospitals",
      participants: "20+ interns annually",
      link: "/programs/hospital-internships",
    },
    {
      icon: Droplets,
      title: "Clean Water Initiative",
      description:
        "Installing wells and water purification systems in communities lacking clean water access.",
      duration: "Ongoing",
      location: "Remote villages",
      participants: "Community-led projects",
    },
    {
      icon: Utensils,
      title: "Nutrition Program",
      description:
        "Providing nutritious meals and education about healthy eating habits for children and families.",
      duration: "Year-round",
      location: "Schools and community centers",
      participants: "500+ children served daily",
    },
    {
      icon: Home,
      title: "Housing Support",
      description:
        "Building and renovating homes for families in need of safe, secure shelter.",
      duration: "Seasonal projects",
      location: "Various communities",
      participants: "100+ families helped",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual School Supply Drive",
      date: "June 15, 2024",
      location: "Nairobi Community Center",
      description:
        "Join us for our biggest school supply collection event of the year.",
    },
    {
      title: "Mobile Clinic Outreach",
      date: "July 2-5, 2024",
      location: "Kisumu Region",
      description:
        "Free health screenings and medical care for rural communities.",
    },
    {
      title: "Volunteer Training Workshop",
      date: "August 10, 2024",
      location: "Tabasamu Training Center",
      description:
        "Comprehensive training for new volunteers joining our programs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 relative overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-orange-400 to-orange-600 animate-gradient"></div>

  {/* Pattern Overlay */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage:
        "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"white\"/></svg>')",
      backgroundSize: "40px 40px",
    }}
  ></div>

  <Navigation />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <AnimatedSection animation="slideUp">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Programs
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Comprehensive initiatives designed to create lasting positive change
          in education, healthcare, and community development
        </p>
      </div>
    </AnimatedSection>
  </div>

  {/* Gradient Animation Keyframes */}
  <style jsx={true}>{`
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 8s ease infinite;
    }
  `}</style>
</section>


      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Core Programs
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Our three main program areas work together to address the
                fundamental needs of communities and create sustainable impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {mainPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                  delay={index * 200}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                          <div
                            className={`w-12 h-12 bg-${program.color} rounded-full flex items-center justify-center mb-3`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="space-y-6">
                        <div>
                          <p
                            className={`text-${program.color} font-semibold mb-2`}
                          >
                            {program.subtitle}
                          </p>
                          <h3 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                            {program.title}
                          </h3>
                          <p className="text-lg text-charity-neutral-600 leading-relaxed">
                            {program.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {program.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <div
                                className={`w-2 h-2 bg-${program.color} rounded-full`}
                              ></div>
                              <span className="text-charity-neutral-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link
                          to="/get-involved"
                          className={`inline-flex items-center px-6 py-3 bg-${program.color} hover:bg-${program.color}/90 text-white rounded-lg transition-colors duration-200 font-medium group`}
                        >
                          Get Involved
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Specialized Initiatives
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Targeted programs addressing specific community needs and
                providing specialized support.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <Link
                    to={program.link || "/get-involved"}
                    className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-charity-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-charity-orange-200 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-charity-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-3 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-charity-neutral-600 mb-4 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center text-charity-neutral-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-charity-neutral-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center text-charity-neutral-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{program.participants}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-charity-orange-600 text-sm font-medium group-hover:text-charity-orange-700">
                      <span>Learn More</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Join us at our upcoming events and see our programs in action.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="bg-charity-orange-50 p-6 rounded-xl border-l-4 border-charity-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-charity-orange-600 mr-2" />
                    <span className="text-charity-orange-600 font-semibold">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-charity-neutral-800 mb-2">
                    {event.title}
                  </h3>

                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-charity-neutral-500 mr-2" />
                    <span className="text-charity-neutral-600 text-sm">
                      {event.location}
                    </span>
                  </div>

                  <p className="text-charity-neutral-600 text-sm mb-4">
                    {event.description}
                  </p>

                  <button className="text-charity-orange-600 hover:text-charity-orange-700 font-medium text-sm flex items-center group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charity-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Programs?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Whether you want to volunteer, donate, or partner with us,
                there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved/volunteer"
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-lg font-bold transition-colors duration-200"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Programs;
