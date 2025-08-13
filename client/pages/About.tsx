import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Target,
  Award,
  Globe,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  useEffect(() => {
    // Enable sound after any click (once)
    const enableSound = () => {
      const iframe = document.getElementById("bgVideo") as HTMLIFrameElement;
      if (iframe && iframe.src.includes("mute=1")) {
        iframe.src = iframe.src.replace("mute=1", "mute=0");
      }
    };
    document.addEventListener("click", enableSound, { once: true });
    return () => {
      document.removeEventListener("click", enableSound);
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/placeholder.svg",
      bio: "With over 15 years in nonprofit leadership, Sarah drives our mission forward.",
    },
    {
      name: "Dr. Michael Brown",
      role: "Medical Director",
      image: "/placeholder.svg",
      bio: "Leading our healthcare initiatives with expertise in community medicine.",
    },
    {
      name: "Emma Wilson",
      role: "Program Coordinator",
      image: "/placeholder.svg",
      bio: "Ensuring our programs reach those who need them most.",
    },
    {
      name: "James Mwalimu",
      role: "Community Liaison",
      image: "/placeholder.svg",
      bio: "Connecting communities with sustainable development opportunities.",
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
      <section className="pt-0 relative overflow-hidden">
        {/* YouTube Background - full width & height */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            id="bgVideo"
            className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <Navigation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h1
  style={{
    fontFamily: "'Verdana', 'Courier New', monospace",
    fontWeight: "bold",
    fontSize: "3rem", // ~48px (you can adjust for md screens)
    marginBottom: "1.5rem",
    color: "black",
  }}
>
  
</h1>




              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Building brighter futures through education, healthcare, and
                community development since 2015
              </p>
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
                  To empower children and communities in Kenya through
                  quality education, accessible healthcare, and sustainable
                  development programs that create lasting positive change.
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
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                communities across Tanzania.
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

      <Footer />
    </>
  );
};

export default About;
