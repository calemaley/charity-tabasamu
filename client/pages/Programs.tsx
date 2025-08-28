import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Phone,
  X,
  Heart,
  Gift,
  CheckCircle,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { featuredEvent } from "@shared/programs-data";

const Programs = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Mock data for upcoming events (can be moved to shared data later)
  const upcomingEvents = [
    {
      id: "mombasa-2025",
      title: "MOMBASA Edition",
      subtitle: "Building bridges of hope",
      date: "15TH DEC 2025",
      venue: "COAST CHILDREN'S CENTER - MOMBASA",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      theme: "Unity in diversity",
      description:
        "Join us for our coastal edition as we bring hope and resources to children in Mombasa. This event focuses on educational support and community development.",
      contact: "+254112459484",
      fullDescription:
        "The Mombasa Edition represents our commitment to coastal communities, where education and opportunity often face unique challenges. This event will bring together volunteers, educators, and community leaders to create lasting change along Kenya's beautiful coast.\n\nOur coastal edition focuses on maritime education, environmental conservation, and providing essential educational resources to children who dream of futures beyond their current circumstances.",
      schedule: [
        { time: "8:00 AM", activity: "Registration & Welcome" },
        { time: "9:30 AM", activity: "Opening Ceremony" },
        { time: "11:00 AM", activity: "Educational Resource Distribution" },
        { time: "1:00 PM", activity: "Community Lunch" },
        { time: "2:30 PM", activity: "Environmental Conservation Workshop" },
        { time: "4:00 PM", activity: "Cultural Performances" },
        { time: "5:30 PM", activity: "Closing & Group Photos" },
      ],
      expectedImpact: [
        "Support 200+ children with educational materials",
        "Establish 3 new community learning centers",
        "Train 25 local teachers",
        "Launch environmental conservation program",
      ],
      itemsNeeded: [
        "Books",
        "Writing materials",
        "School uniforms",
        "Solar lamps",
        "Environmental education materials",
      ],
    },
    {
      id: "nakuru-2026",
      title: "NAKURU Edition",
      subtitle: "Nurturing young minds",
      date: "22ND JAN 2026",
      venue: "LAKESIDE CHILDREN'S HOME - NAKURU",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      theme: "Education is the key to the future",
      description:
        "Our Nakuru edition emphasizes educational excellence and providing learning materials to underserved communities around Lake Nakuru.",
      contact: "+254112459485",
      fullDescription:
        "Set against the stunning backdrop of Lake Nakuru, this edition focuses on creating sustainable educational opportunities for children in the Rift Valley region. We're partnering with local schools and community centers to establish long-term educational support systems.\n\nThis event emphasizes STEM education, literacy programs, and providing technological resources to bridge the digital divide in rural communities.",
      schedule: [
        { time: "8:30 AM", activity: "Registration & Breakfast" },
        { time: "10:00 AM", activity: "Opening Presentations" },
        { time: "11:30 AM", activity: "STEM Workshop Setup" },
        { time: "1:00 PM", activity: "Lunch & Networking" },
        { time: "2:00 PM", activity: "Literacy Program Launch" },
        { time: "3:30 PM", activity: "Technology Distribution" },
        { time: "4:30 PM", activity: "Community Celebration" },
      ],
      expectedImpact: [
        "Provide STEM education to 300+ students",
        "Establish 2 technology labs",
        "Train 30 teachers in digital literacy",
        "Create sustainable scholarship program",
      ],
      itemsNeeded: [
        "Computers",
        "Science equipment",
        "Mathematics textbooks",
        "Library books",
        "Educational software",
      ],
    },
  ];

  // Mock data for past events
  const pastEvents = [
    {
      id: "kisumu-2024",
      title: "KISUMU Edition",
      subtitle: "Seeds of change planted",
      date: "10TH AUG 2024",
      venue: "VICTORIA CHILDREN'S HOME - KISUMU",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      theme: "Planting seeds of transformation",
      description:
        "Our successful Kisumu edition brought together 300+ volunteers and provided essential supplies to 150 children. The impact continues to grow.",
      contact: "+254112459486",
      impact: "150 children supported, 50 families assisted",
      fullDescription:
        "The Kisumu Edition marked a turning point in our community outreach efforts. Located near Lake Victoria, this event brought together hearts and hands from across the region to support children whose potential knows no bounds.\n\nThis successful event created lasting partnerships with local organizations and established sustainable programs that continue to benefit the community today.",
      actualImpact: [
        "150 children received full educational support packages",
        "50 families received nutritional assistance for 6 months",
        "3 new classrooms were built and equipped",
        "25 teachers received professional development training",
        "Community garden project launched, now feeding 200+ people",
      ],
      testimonials: [
        {
          name: "Mary Achieng",
          role: "Local Teacher",
          quote:
            "This event transformed our school. The children now have hope and resources they never had before.",
        },
        {
          name: "James Ochieng",
          role: "Parent",
          quote:
            "My daughter received a scholarship that changed her life. She's now in university studying medicine.",
        },
      ],
      longTermImpact:
        "6 months later, 95% of supported children showed improved academic performance, and 3 children received secondary school scholarships.",
    },
    {
      id: "eldoret-2024",
      title: "ELDORET Edition",
      subtitle: "Champions of tomorrow",
      date: "25TH MAY 2024",
      venue: "HIGHLANDS ORPHANAGE - ELDORET",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      theme: "Raising champions",
      description:
        "The Eldoret edition focused on sports and recreational activities alongside our traditional support programs, creating lasting memories for the children.",
      contact: "+254112459487",
      impact: "200 children reached, sports equipment provided",
      fullDescription:
        "High in the Kenyan highlands, the Eldoret Edition combined our educational mission with sports and recreational programs. This unique approach recognized that children's development requires both academic support and physical activity.\n\nThe event was a celebration of potential, bringing together athletes, educators, and community members to create an unforgettable experience for children who rarely get such opportunities.",
      actualImpact: [
        "200 children participated in sports and educational activities",
        "Complete sports equipment provided to 5 schools",
        "20 young athletes identified for special training programs",
        "Health and nutrition workshops reached 100+ families",
        "Mobile library service established for 8 remote schools",
      ],
      testimonials: [
        {
          name: "Peter Kiprotich",
          role: "Former Olympic Runner",
          quote:
            "Seeing these children's joy and potential reminded me why sports can change lives.",
        },
        {
          name: "Grace Chepkemoi",
          role: "School Principal",
          quote:
            "The sports equipment has transformed our PE program. Children are more engaged in all subjects now.",
        },
      ],
      longTermImpact:
        "The sports program continues with 3 children now training for national competitions and attendance rates improved by 40%.",
    },
  ];

  const EventCard = ({
    event,
    type = "upcoming",
  }: {
    event: any;
    type?: "featured" | "upcoming" | "past";
  }) => (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
      onClick={() => {
        setSelectedEvent(event);
        setShowEventModal(true);
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm font-medium">
              {type === "past" ? "View Impact" : "Learn More"}
            </span>
          </div>
        </div>
        <div
          className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-bold transform rotate-3 ${
            type === "past"
              ? "bg-gray-500"
              : type === "upcoming"
                ? "bg-blue-500"
                : "bg-red-500"
          } text-white`}
        >
          {event.date}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-charity-neutral-800 mb-2 group-hover:text-charity-orange-600 transition-colors duration-200">
          {event.title}
        </h3>
        <p className="text-charity-orange-600 font-semibold mb-3 text-lg italic">
          {event.subtitle}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-charity-neutral-600">
            <MapPin className="h-4 w-4 mr-2 text-charity-orange-500" />
            <span className="text-sm">{event.venue}</span>
          </div>
          <div className="flex items-center text-charity-neutral-600">
            <Phone className="h-4 w-4 mr-2 text-charity-orange-500" />
            <span className="text-sm">{event.contact}</span>
          </div>
          {event.impact && (
            <div className="flex items-center text-charity-neutral-600">
              <Users className="h-4 w-4 mr-2 text-charity-green-500" />
              <span className="text-sm font-medium">{event.impact}</span>
            </div>
          )}
        </div>

        <p className="text-charity-neutral-600 mb-4 text-sm leading-relaxed">
          {event.description}
        </p>

        <div className="bg-charity-green-50 p-3 rounded-xl border-l-4 border-charity-green-500 mb-4">
          <p className="text-charity-green-700 italic font-medium text-sm">
            "{event.theme}"
          </p>
        </div>

        <div className="text-charity-orange-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
          {type === "past" ? "View Impact Story" : "Learn More"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-orange-400 to-orange-600 animate-gradient"></div>
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
                Creating lasting change through community events and initiatives
                across Kenya
              </p>
            </div>
          </AnimatedSection>
        </div>

        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}</style>
      </section>

      {/* Featured Events */}
      <section
        id="featured-events"
        className="py-20 bg-gradient-to-br from-charity-orange-50 to-charity-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Featured Events
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Our spotlight events making the biggest impact in communities
                across Kenya
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Main Featured Event - Full Layout */}
              <div className="md:col-span-2">
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
                              onClick={() => {
                                setSelectedEvent(featuredEvent);
                                setShowEventModal(true);
                              }}
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
            </div>
          </AnimatedSection>
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
                Mark your calendars for these exciting upcoming community events
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <EventCard event={event} type="upcoming" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Past Events
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Celebrating the success and impact of our previous initiatives
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <EventCard event={event} type="past" />
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
                Ready to Join Our Next Event?
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
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => {
                  setShowEventModal(false);
                  setSelectedEvent(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold inline-block mb-4">
                    {selectedEvent.date}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedEvent.title}
                  </h1>
                  <p className="text-xl text-white/90 italic">
                    {selectedEvent.subtitle}
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
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                {/* Event Schedule or Impact for past events */}
                {selectedEvent.schedule && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <Calendar className="h-6 w-6 text-charity-green-600 mr-2" />
                      Event Schedule
                    </h2>
                    <div className="bg-charity-neutral-50 rounded-xl p-6">
                      {selectedEvent.schedule.map((item, index) => (
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
                )}

                {/* Expected Impact or Actual Impact */}
                {(selectedEvent.expectedImpact ||
                  selectedEvent.actualImpact) && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-charity-green-600 mr-2" />
                      {selectedEvent.expectedImpact
                        ? "Expected Impact"
                        : "Actual Impact Achieved"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(
                        selectedEvent.expectedImpact ||
                        selectedEvent.actualImpact
                      ).map((goal, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 bg-charity-green-50 p-4 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-charity-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-charity-neutral-700">
                            {goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials for past events */}
                {selectedEvent.testimonials && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <Heart className="h-6 w-6 text-charity-orange-600 mr-2" />
                      Community Voices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedEvent.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-charity-orange-50 p-6 rounded-xl"
                        >
                          <p className="text-charity-neutral-700 italic mb-4">
                            "{testimonial.quote}"
                          </p>
                          <div className="border-t border-charity-orange-200 pt-4">
                            <p className="font-bold text-charity-neutral-800">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-charity-orange-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Long-term Impact for past events */}
                {selectedEvent.longTermImpact && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-charity-green-600 mr-2" />
                      Long-term Impact
                    </h2>
                    <div className="bg-charity-green-50 p-6 rounded-xl border-l-4 border-charity-green-500">
                      <p className="text-charity-neutral-700 leading-relaxed">
                        {selectedEvent.longTermImpact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-charity-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-charity-orange-600 mr-2" />
                      Event Location
                    </h3>
                    <p className="text-charity-neutral-700 mb-4">
                      {selectedEvent.venue}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-charity-orange-600" />
                      <span className="text-charity-neutral-700">
                        {selectedEvent.contact}
                      </span>
                    </div>
                  </div>

                  {selectedEvent.itemsNeeded && (
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 flex items-center">
                        <Gift className="h-5 w-5 text-red-600 mr-2" />
                        Items Needed
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedEvent.itemsNeeded.map((item, index) => (
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
                  )}
                </div>

                {/* Theme Section */}
                <div className="bg-charity-green-50 p-6 rounded-xl mb-8 border-l-4 border-charity-green-500">
                  <h3 className="text-lg font-bold text-charity-neutral-800 mb-2">
                    Event Theme:
                  </h3>
                  <p className="text-xl text-charity-green-700 italic font-medium">
                    "{selectedEvent.theme}"
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedEvent.paymentLink && (
                    <a
                      href={selectedEvent.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-charity-orange-600 hover:bg-charity-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 transform hover:scale-105 text-center"
                    >
                      💝 Make a Contribution
                    </a>
                  )}

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
