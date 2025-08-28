import { useState } from "react";
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
  Phone,
  X,
  Heart,
  Gift,
  CheckCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Programs = () => {
  const [showEventModal, setShowEventModal] = useState(false);
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

  const featuredEvent = {
    title: "NAIROBI Edition",
    subtitle: "Creating smiles, one coin at a time😊",
    date: "19TH OCT 2025",
    venue: "BLESSINGS CHILDREN'S HOME - RUAI",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F1621da4a27844381af3e9ee9867abbdf%2F11507f84a3b5427fafee2b9a7a5b66c7?format=webp&width=800",
    theme: "Global harmony begins with kindness",
    message:
      "Hi there😊\n\nIn pursuit of my course of making the world a better place, I can't do it alone, I need more hands🥹... Shall we?\nCreating smiles, one coin at a time😊",
    itemsNeeded: [
      "Dry Foodstuffs",
      "Water",
      "Detergent",
      "Sanitary Towels",
      "Beddings",
      "Monetary support",
    ],
    contact: "+254112459483",
    paymentLink: "https://zenlipa.co.ke/c/uKowYx",
    fullDescription:
      "Join us for an unforgettable day of giving and community spirit at the NAIROBI Edition event. This special gathering brings together hearts and hands united in a common mission: to spread joy and create lasting smiles in the lives of children who need it most.\n\nLocated at the beautiful Blessings Children's Home in Ruai, this event represents more than just a donation drive - it's a celebration of humanity, kindness, and the power we have when we come together for a noble cause.\n\nWhat makes this event special:\n• Direct impact on children's lives\n• Community building and networking\n• Hands-on volunteer opportunities\n• Stories of transformation and hope\n• Cultural performances and activities\n\nEvery contribution, whether big or small, creates ripples of positive change that extend far beyond the event day. Together, we're not just giving items - we're giving hope, dignity, and the promise of a brighter tomorrow.",
    schedule: [
      { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "10:00 AM", activity: "Opening Ceremony & Speeches" },
      { time: "11:00 AM", activity: "Donation Distribution Begins" },
      { time: "12:30 PM", activity: "Cultural Performances by Children" },
      { time: "1:00 PM", activity: "Lunch & Networking" },
      { time: "2:30 PM", activity: "Volunteer Activities & Games" },
      { time: "4:00 PM", activity: "Closing Ceremony & Group Photos" },
    ],
    impactGoals: [
      "Provide essential supplies to 200+ children",
      "Fund educational materials for 50 students",
      "Support nutritional programs for 3 months",
      "Create sustainable partnerships with local community",
    ],
  };

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
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white"/></svg>\')',
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
                Comprehensive initiatives designed to create lasting positive
                change in education, healthcare, and community development
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Gradient Animation Keyframes */}
        <style>{`
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

      {/* Featured Event */}
      <section className="py-20 bg-gradient-to-br from-charity-orange-50 to-charity-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Featured Event
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Join us for our upcoming special event and be part of creating
                positive change in our community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold transform rotate-3">
                    {featuredEvent.date}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {featuredEvent.title}
                    </h1>
                    <p className="text-xl text-white/90 italic">
                      {featuredEvent.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center mb-4">
                          <MapPin className="h-5 w-5 text-charity-orange-600 mr-2" />
                          <span className="text-charity-neutral-700 font-semibold">
                            VENUE: {featuredEvent.venue}
                          </span>
                        </div>

                        <div className="bg-charity-green-50 p-4 rounded-xl border-l-4 border-charity-green-500">
                          <h3 className="font-bold text-charity-neutral-800 mb-2">
                            Our Theme for this year:
                          </h3>
                          <p className="text-charity-green-700 italic font-medium">
                            "{featuredEvent.theme}"
                          </p>
                        </div>
                      </div>

                      <div className="bg-charity-orange-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-charity-neutral-800 mb-4">
                          A Personal Message:
                        </h3>
                        <p className="text-charity-neutral-700 leading-relaxed whitespace-pre-line">
                          {featuredEvent.message}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                        <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 text-center">
                          ITEMS NEEDED
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {featuredEvent.itemsNeeded.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-charity-neutral-700 text-sm">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center space-y-4">
                        <div className="bg-charity-neutral-100 p-4 rounded-xl">
                          <p className="text-charity-neutral-600 mb-2">
                            For more info contact us:
                          </p>
                          <div className="flex items-center justify-center space-x-2">
                            <Phone className="h-4 w-4 text-charity-orange-600" />
                            <span className="font-bold text-charity-neutral-800">
                              {featuredEvent.contact}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <a
                            href={featuredEvent.paymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-charity-orange-600 hover:bg-charity-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 transform hover:scale-105"
                          >
                            💝 Make a Contribution
                          </a>

                          <button
                            onClick={() => setShowEventModal(true)}
                            className="w-full border-2 border-charity-green-600 text-charity-green-600 hover:bg-charity-green-600 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group"
                          >
                            Learn More Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
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

      {/* Event Details Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setShowEventModal(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="relative">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold inline-block mb-4">
                    {featuredEvent.date}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {featuredEvent.title}
                  </h1>
                  <p className="text-xl text-white/90 italic">
                    {featuredEvent.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Event Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                    <Heart className="h-6 w-6 text-charity-orange-600 mr-2" />
                    About This Event
                  </h2>
                  <p className="text-charity-neutral-700 leading-relaxed whitespace-pre-line">
                    {featuredEvent.fullDescription}
                  </p>
                </div>

                {/* Event Schedule */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                    <Calendar className="h-6 w-6 text-charity-green-600 mr-2" />
                    Event Schedule
                  </h2>
                  <div className="bg-charity-neutral-50 rounded-xl p-6">
                    {featuredEvent.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 mb-4 last:mb-0"
                      >
                        <div className="bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold min-w-20 text-center">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-charity-neutral-700 font-medium">
                            {item.activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Goals */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-charity-green-600 mr-2" />
                    Expected Impact
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredEvent.impactGoals.map((goal, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-charity-green-50 p-4 rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5 text-charity-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-charity-neutral-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Venue & Contact */}
                  <div className="bg-charity-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-charity-orange-600 mr-2" />
                      Event Location
                    </h3>
                    <p className="text-charity-neutral-700 mb-4">
                      {featuredEvent.venue}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-charity-orange-600" />
                      <span className="text-charity-neutral-700">
                        {featuredEvent.contact}
                      </span>
                    </div>
                  </div>

                  {/* Items Needed */}
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <Gift className="h-5 w-5 text-red-600 mr-2" />
                      Items Needed
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {featuredEvent.itemsNeeded.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-charity-neutral-700 text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Theme Section */}
                <div className="bg-charity-green-50 p-6 rounded-xl mb-8 border-l-4 border-charity-green-500">
                  <h3 className="text-lg font-bold text-charity-neutral-800 mb-2">
                    This Year's Theme:
                  </h3>
                  <p className="text-xl text-charity-green-700 italic font-medium">
                    "{featuredEvent.theme}"
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={featuredEvent.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-charity-orange-600 hover:bg-charity-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 transform hover:scale-105 text-center"
                  >
                    💝 Make a Contribution
                  </a>

                  <Link
                    to="/contact"
                    className="flex-1 border-2 border-charity-green-600 text-charity-green-600 hover:bg-charity-green-600 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-center"
                  >
                    Contact Us for More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Programs;
