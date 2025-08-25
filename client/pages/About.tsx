import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Target,
  Award,
  Globe,
  Lightbulb,
  ArrowRight,
  X,
  Mail,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/placeholder.svg",
      bio: "With over 15 years in nonprofit leadership, Sarah drives our mission forward.",
      fullBio:
        "Sarah brings over 15 years of nonprofit leadership experience to Tabasamu Charity. She has previously worked with international development organizations across Africa, focusing on sustainable community development and educational initiatives. Her passion for empowering communities through education and healthcare has driven our organization's growth and impact. Sarah holds a Master's in International Development and speaks fluent Swahili and English.",
      email: "sarah@tabasamu.org",
      phone: "+254-700-123-456",
      achievements: [
        "Led 50+ community development projects",
        "Secured over $2M in funding",
        "Established partnerships with 25+ local organizations",
      ],
    },
    {
      name: "Dr. Michael Brown",
      role: "Medical Director",
      image: "/placeholder.svg",
      bio: "Leading our healthcare initiatives with expertise in community medicine.",
      fullBio:
        "Dr. Michael Brown is a board-certified physician with extensive experience in community health and tropical medicine. He has spent over 12 years working in rural healthcare settings across East Africa, developing innovative approaches to healthcare delivery in resource-limited environments. His work has significantly improved health outcomes in the communities we serve.",
      email: "michael@tabasamu.org",
      phone: "+254-700-123-457",
      achievements: [
        "Established 5 mobile health clinics",
        "Trained 100+ community health workers",
        "Reduced infant mortality by 40% in target areas",
      ],
    },
    {
      name: "Emma Wilson",
      role: "Program Coordinator",
      image: "/placeholder.svg",
      bio: "Ensuring our programs reach those who need them most.",
      fullBio:
        "Emma Wilson coordinates all our program activities with exceptional attention to detail and community engagement. With a background in social work and project management, she ensures that our initiatives are implemented effectively and reach the most vulnerable populations. Emma's dedication to measurable impact has helped us achieve our program goals consistently.",
      email: "emma@tabasamu.org",
      phone: "+254-700-123-458",
      achievements: [
        "Coordinated programs reaching 5,000+ beneficiaries",
        "Achieved 95% program completion rate",
        "Developed community feedback systems",
      ],
    },
    {
      name: "James Mwalimu",
      role: "Community Liaison",
      image: "/placeholder.svg",
      bio: "Connecting communities with sustainable development opportunities.",
      fullBio:
        "James Mwalimu serves as our vital link to the communities we serve. Born and raised in rural Kenya, he brings deep cultural understanding and community trust to our work. His ability to build relationships and facilitate meaningful dialogue between our organization and local communities has been instrumental in our success and sustainability.",
      email: "james@tabasamu.org",
      phone: "+254-700-123-459",
      achievements: [
        "Built partnerships with 30+ community leaders",
        "Facilitated 200+ community meetings",
        "Increased community participation by 70%",
      ],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every situation with empathy and understanding, putting the needs of children and families first.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "We focus on creating measurable, sustainable change that transforms lives and strengthens communities.",
    },
    {
      icon: Globe,
      title: "Community",
      description:
        "We work hand-in-hand with local communities, respecting their wisdom and building on their strengths.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new and better ways to address challenges and maximize our positive impact.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "Tabasamu Charity was founded with a mission to transform lives",
      achievement: "First 50 children sponsored",
    },
    {
      year: "2017",
      event: "Launched our education support program",
      achievement: "Built first school library",
    },
    {
      year: "2019",
      event: "Expanded healthcare services",
      achievement: "Mobile clinic program started",
    },
    {
      year: "2021",
      event: "COVID-19 emergency response",
      achievement: "Provided aid to 500+ families",
    },
    {
      year: "2023",
      event: "Reached milestone of 1000 children helped",
      achievement: "Opened community center",
    },
    {
      year: "2024",
      event: "Digital learning initiative launched",
      achievement: "Technology labs in 5 schools",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 relative overflow-hidden bg-gradient-to-br from-charity-orange-50 to-charity-green-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-charity-neutral-800 mb-6">
                About Tabasamu
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-charity-neutral-600">
                Building brighter futures through education, healthcare, and
                community development since 2015
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideRight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Founder Photo - Stylized Card */}
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-charity-orange-100 to-charity-green-100 p-8 rounded-3xl shadow-2xl">
                    <div className="transform -rotate-2">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F1621da4a27844381af3e9ee9867abbdf%2F44c32d1cc5014f039d98cddadbcab10b?format=webp&width=800"
                        alt="A.O.Suleiman Kagwe - Founder"
                        className="w-full h-96 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-xl">
                      <Heart className="h-8 w-8 text-charity-orange-600" />
                    </div>
                    <div className="absolute -top-4 -left-4 bg-charity-green-500 text-white px-4 py-2 rounded-full text-sm font-bold transform -rotate-12">
                      Founder
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder's Message */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-charity-neutral-800 mb-6">
                    A Message from Our Founder
                  </h2>
                  <div className="text-lg text-charity-neutral-600 leading-relaxed space-y-4">
                    <p className="italic text-charity-orange-700 text-xl">
                      "Every child has a dream, and every smile holds a promise.
                      As I journey through life, my story unfolds with a simple
                      yet profound purpose: to ignite sparks of joy and fuel the
                      dreams of those around me."
                    </p>
                    <p>
                      In nurturing the needy and spreading love, I believe we
                      embody the truest essence of humanity. Every act of
                      kindness creates ripples that extend far beyond what we
                      can see, touching lives and transforming communities in
                      ways we may never fully comprehend.
                    </p>
                  </div>
                </div>

                {/* Signature Section */}
                <div className="border-t border-charity-neutral-200 pt-8">
                  <div className="flex items-center space-x-6">
                    <div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F1621da4a27844381af3e9ee9867abbdf%2F7770cebdcca846749404ed197d79d32c?format=webp&width=800"
                        alt="A.O.Suleiman Kagwe Signature"
                        className="h-16 w-auto"
                      />
                      <div className="mt-2">
                        <p className="font-bold text-charity-neutral-800">
                          A.O.Suleiman Kagwe
                        </p>
                        <p className="text-charity-orange-600 font-medium">
                          Founder & CEO
                        </p>
                        <p className="text-sm text-charity-neutral-500">
                          Tabasamu Charity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-charity-orange-50 p-6 rounded-xl border-l-4 border-charity-orange-500">
                  <h3 className="font-bold text-charity-neutral-800 mb-2">
                    Join Our Mission
                  </h3>
                  <p className="text-charity-neutral-600 mb-4">
                    Together, we can create lasting change in the lives of
                    children and communities.
                  </p>
                  <Link
                    to="/get-involved"
                    className="inline-flex items-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium group"
                  >
                    Get Involved Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="text-4xl font-bold text-charity-neutral-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-charity-neutral-600 mb-6 leading-relaxed">
                  To empower children and communities in Kenya through quality
                  education, accessible healthcare, and sustainable development
                  programs that create lasting positive change.
                </p>
                <p className="text-charity-neutral-600 leading-relaxed">
                  We believe that every child deserves the opportunity to reach
                  their full potential, and every community has the strength to
                  build a better future when given the right support and
                  resources.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="bg-charity-orange-50 p-8 rounded-2xl">
                <h2 className="text-4xl font-bold text-charity-neutral-800 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-charity-neutral-600 mb-6 leading-relaxed">
                  A world where every child has access to quality education and
                  healthcare, and every community has the tools to thrive
                  independently and sustainably.
                </p>
                <p className="text-charity-neutral-600 leading-relaxed">
                  We envision communities where children grow up healthy,
                  educated, and empowered to become leaders who will continue
                  the cycle of positive change.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we
                approach our work in communities.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-charity-orange-100 rounded-full flex items-center justify-center group-hover:bg-charity-orange-200 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-charity-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-charity-neutral-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                From humble beginnings to significant impact - see how we've
                grown and evolved over the years.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-charity-orange-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={index * 100}
                >
                  <div
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="flex-1 px-8">
                      <div
                        className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                      >
                        <div className="text-charity-orange-600 font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-charity-neutral-800 mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-charity-neutral-600">
                          {milestone.achievement}
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-8 h-8 bg-charity-orange-500 rounded-full border-4 border-white shadow-lg z-10 relative">
                        <div className="absolute inset-0 bg-charity-orange-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Our dedicated team works tirelessly to make our mission a
                reality. Get to know the people behind our impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-sm font-medium">
                          Click to learn more
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-charity-orange-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-charity-neutral-600 text-sm">
                      {member.bio}
                    </p>
                    <div className="mt-4 text-charity-orange-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charity-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join us in our mission to transform lives and build stronger
                communities across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved/volunteer"
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-green-700 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/get-involved/donate"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-green-700 rounded-lg font-bold transition-colors duration-200"
                >
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-64 md:h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-charity-neutral-800 mb-2">
                        {selectedMember.name}
                      </h2>
                      <p className="text-xl text-charity-orange-600 font-medium mb-4">
                        {selectedMember.role}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-charity-neutral-800 mb-3">
                        About
                      </h3>
                      <p className="text-charity-neutral-600 leading-relaxed">
                        {selectedMember.fullBio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-charity-neutral-800 mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map(
                          (achievement: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-charity-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-charity-neutral-600">
                                {achievement}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="bg-charity-neutral-50 p-4 rounded-xl">
                      <h3 className="text-lg font-bold text-charity-neutral-800 mb-3">
                        Contact Information
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-charity-orange-600" />
                          <span className="text-charity-neutral-600">
                            {selectedMember.email}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-charity-orange-600" />
                          <span className="text-charity-neutral-600">
                            {selectedMember.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default About;
