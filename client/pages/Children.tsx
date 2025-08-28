import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  Star,
  ArrowLeft,
  Search,
  Filter,
  SortAsc,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Children = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAge, setSelectedAge] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const allChildren = [
    {
      id: "maria-001",
      name: "Maria Mwangi",
      age: 8,
      location: "Mwanza Region",
      school: "Mwanza Primary School",
      grade: "Standard 3",
      story:
        "Maria loves mathematics and dreams of becoming a teacher. She walks 5km to school daily and helps her mother with farming after classes. Despite the long journey, she never misses a day and always has a bright smile.",
      needs: ["School fees", "Uniforms", "Books", "Lunch program"],
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 45,
      sponsored: false,
      interests: ["Mathematics", "Reading", "Farming"],
      family: "Lives with mother and 2 siblings",
      achievements: [
        "Top in class mathematics",
        "Perfect attendance",
        "School prefect",
      ],
      dreamJob: "Teacher",
    },
    {
      id: "david-002",
      name: "David Kimaro",
      age: 12,
      location: "Arusha Region",
      school: "Arusha Community Secondary",
      grade: "Form 1",
      story:
        "David is passionate about science and wants to become a doctor. His father is a subsistence farmer and struggles to pay school fees. David studies by candlelight and helps with farming before school.",
      needs: [
        "School fees",
        "Science books",
        "Laboratory equipment",
        "Transport",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 65,
      sponsored: false,
      interests: ["Biology", "Chemistry", "Football"],
      family: "Lives with father and 3 siblings",
      achievements: [
        "Science fair winner",
        "Football team captain",
        "Community volunteer",
      ],
      dreamJob: "Doctor",
    },
    {
      id: "grace-003",
      name: "Grace Mtema",
      age: 15,
      location: "Dodoma Region",
      school: "Dodoma Girls Education Center",
      grade: "Form 3",
      story:
        "Grace excels in her studies and wants to become an engineer. She comes from a single-parent household and needs support to continue her education. She tutors younger students in her free time.",
      needs: ["School fees", "Textbooks", "Computer training", "Mentorship"],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c6b57a3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 75,
      sponsored: false,
      interests: ["Mathematics", "Physics", "Technology"],
      family: "Lives with grandmother and 1 sibling",
      achievements: [
        "Regional math champion",
        "Peer tutor",
        "Technology club leader",
      ],
      dreamJob: "Engineer",
    },
    {
      id: "john-004",
      name: "John Massawe",
      age: 10,
      location: "Kilimanjaro Region",
      school: "Kilimanjaro Primary School",
      grade: "Standard 5",
      story:
        "John is a bright student who loves to read. His parents work as casual laborers and cannot afford his educational expenses consistently. He has read every book in his small school library twice.",
      needs: [
        "School fees",
        "Reading materials",
        "Uniform",
        "Nutritional support",
      ],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 50,
      sponsored: false,
      interests: ["Reading", "Writing", "History"],
      family: "Lives with both parents and 4 siblings",
      achievements: [
        "Reading champion",
        "Story writing contest winner",
        "Library assistant",
      ],
      dreamJob: "Writer",
    },
    {
      id: "amina-005",
      name: "Amina Hassan",
      age: 9,
      location: "Zanzibar",
      school: "Zanzibar Primary School",
      grade: "Standard 4",
      story:
        "Amina dreams of becoming a marine biologist to protect the ocean around her island home. She collects shells and studies sea creatures in her spare time. Her family depends on fishing for income.",
      needs: ["School fees", "Science materials", "Transport", "Lunch program"],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 40,
      sponsored: false,
      interests: ["Marine Biology", "Swimming", "Environmental Science"],
      family: "Lives with parents and 1 sibling",
      achievements: [
        "Environmental club member",
        "Swimming champion",
        "Shell collection expert",
      ],
      dreamJob: "Marine Biologist",
    },
    {
      id: "peter-006",
      name: "Peter Ngozi",
      age: 14,
      location: "Mbeya Region",
      school: "Mbeya Secondary School",
      grade: "Form 2",
      story:
        "Peter wants to become a pilot and explore the world. He builds model airplanes from recycled materials and dreams of flying. His mother is a single parent working as a seamstress.",
      needs: [
        "School fees",
        "Technical books",
        "Transport",
        "Materials for projects",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 60,
      sponsored: false,
      interests: ["Aviation", "Engineering", "Art"],
      family: "Lives with mother and 2 siblings",
      achievements: [
        "Model building champion",
        "Art competition winner",
        "Science project leader",
      ],
      dreamJob: "Pilot",
    },
    {
      id: "fatuma-007",
      name: "Fatuma Ali",
      age: 11,
      location: "Dar es Salaam",
      school: "Dar es Salaam Community School",
      grade: "Standard 6",
      story:
        "Fatuma loves music and wants to become a music teacher. She sings in the church choir and has taught herself to play several traditional instruments. Her family lives in a crowded neighborhood.",
      needs: ["School fees", "Music lessons", "Instruments", "Uniform"],
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 55,
      sponsored: false,
      interests: ["Music", "Singing", "Traditional Dance"],
      family: "Lives with parents and 3 siblings",
      achievements: [
        "Choir leader",
        "Traditional dance champion",
        "Music composition winner",
      ],
      dreamJob: "Music Teacher",
    },
    {
      id: "emmanuel-008",
      name: "Emmanuel Mushi",
      age: 13,
      location: "Moshi",
      school: "Moshi High School",
      grade: "Form 1",
      story:
        "Emmanuel dreams of becoming a veterinarian to help animals in his community. He has rescued and cared for many stray animals. His father works as a tour guide near Mount Kilimanjaro.",
      needs: [
        "School fees",
        "Veterinary books",
        "Science equipment",
        "Transport",
      ],
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      monthlyNeed: 70,
      sponsored: false,
      interests: ["Animal Care", "Biology", "Conservation"],
      family: "Lives with father and grandmother",
      achievements: [
        "Animal rescue volunteer",
        "Biology excellence",
        "Conservation project leader",
      ],
      dreamJob: "Veterinarian",
    },
  ];

  // Filter and sort children
  const filteredChildren = allChildren
    .filter((child) => {
      const matchesSearch =
        child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        child.dreamJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
        child.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesAge =
        selectedAge === "all" ||
        (selectedAge === "young" && child.age <= 10) ||
        (selectedAge === "teen" && child.age > 10);

      const matchesLocation =
        selectedLocation === "all" ||
        child.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesAge && matchesLocation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "age":
          return a.age - b.age;
        case "need":
          return a.monthlyNeed - b.monthlyNeed;
        case "location":
          return a.location.localeCompare(b.location);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const uniqueLocations = [
    ...new Set(allChildren.map((child) => child.location)),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-green-500 to-charity-orange-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Meet Our Children
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Every child has a unique story, dream, and potential waiting to
                be unlocked. Discover the amazing children who need your support
                to achieve their goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-white border-b border-charity-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-charity-orange-600 hover:text-charity-orange-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charity-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search by name, dream job, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Age Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charity-neutral-400" />
                  <select
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent appearance-none"
                  >
                    <option value="all">All Ages</option>
                    <option value="young">Young (≤10 years)</option>
                    <option value="teen">Teen (&gt;10 years)</option>
                  </select>
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charity-neutral-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent appearance-none"
                  >
                    <option value="all">All Locations</option>
                    {uniqueLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="relative">
                  <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charity-neutral-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent appearance-none"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="age">Sort by Age</option>
                    <option value="need">Sort by Need</option>
                    <option value="location">Sort by Location</option>
                  </select>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Children Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charity-neutral-800 mb-4">
                {filteredChildren.length} Children Available for Sponsorship
              </h2>
              <p className="text-lg text-charity-neutral-600">
                Each child has a unique story and dreams waiting to be fulfilled
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {filteredChildren.map((child, index) => (
              <AnimatedSection
                key={child.id}
                animation="scaleIn"
                delay={index * 50}
              >
                <div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 h-full flex flex-col group transform hover:-translate-y-4 hover:scale-105 cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/sponsor?child=${child.id}`)
                  }
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 via-charity-green-400 to-charity-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  <div className="absolute inset-[3px] bg-white rounded-3xl z-10"></div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-charity-orange-400 rounded-full animate-bounce"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-20 h-full flex flex-col">
                    {/* Enhanced Image Section */}
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-1000"
                      />

                      {/* Multiple overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-charity-orange-500/20 to-charity-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Floating badges */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-charity-green-500 to-charity-green-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        ✨ Available
                      </div>

                      {/* Heart animation on hover */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                          <Heart className="h-5 w-5 text-white fill-current" />
                        </div>
                      </div>

                      {/* Dream job overlay */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl">
                          <p className="text-charity-neutral-800 text-sm font-medium">
                            ✨ Dreams of being a {child.dreamJob}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Name with special styling */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-charity-neutral-800 mb-2 group-hover:text-charity-orange-600 transition-colors duration-300 transform group-hover:scale-105">
                          {child.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-charity-orange-500 to-charity-green-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                      </div>

                      {/* Age info */}
                      <div className="flex items-center mb-4 p-3 rounded-xl bg-charity-orange-50 group-hover:bg-charity-orange-100 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-charity-orange-500 flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-charity-neutral-700 font-bold text-lg">
                          {child.age} years old
                        </span>
                      </div>

                      {/* Interests with enhanced styling */}
                      <div className="mb-6 flex-grow">
                        <div className="text-sm font-bold text-charity-neutral-700 mb-3 flex items-center">
                          <Star className="h-4 w-4 text-charity-orange-500 mr-2" />
                          Interests:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {child.interests.map((interest, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-charity-green-100 to-charity-green-200 text-charity-green-800 text-sm rounded-full font-medium border border-charity-green-300 transform hover:scale-110 transition-all duration-300 shadow-sm"
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              ✨ {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced pricing section */}
                      <div className="bg-gradient-to-r from-charity-orange-50 to-charity-green-50 p-4 rounded-xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <div className="text-center">
                          <span className="text-charity-neutral-700 font-medium text-sm mb-1 block">
                            Monthly Support:
                          </span>
                          <div className="text-2xl font-bold text-charity-orange-600 group-hover:scale-110 transition-transform duration-300">
                            KES {(child.monthlyNeed * 135).toLocaleString()}
                          </div>
                          <div className="text-xs text-charity-neutral-500">
                            ≈ ${child.monthlyNeed} USD
                          </div>
                        </div>
                      </div>

                      {/* Enhanced sponsor button */}
                      <Link
                        to={`/sponsor?child=${child.id}`}
                        className="block w-full relative px-6 py-4 bg-gradient-to-r from-charity-orange-600 to-charity-orange-700 hover:from-charity-orange-700 hover:to-charity-orange-800 text-white rounded-2xl transition-all duration-500 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 group-hover:animate-pulse overflow-hidden text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 to-charity-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex items-center justify-center">
                          <Heart className="h-5 w-5 mr-2 animate-bounce" />
                          Sponsor {child.name.split(" ")[0]}
                          <Star className="h-4 w-4 ml-2 text-yellow-300" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* No Results */}
          {filteredChildren.length === 0 && (
            <AnimatedSection animation="fadeIn">
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-4">
                  No children found
                </h3>
                <p className="text-charity-neutral-600 mb-6">
                  Try adjusting your search criteria to find children who match
                  your preferences.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedAge("all");
                    setSelectedLocation("all");
                    setSortBy("name");
                  }}
                  className="px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charity-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to Change a Life?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Your sponsorship doesn't just change a child's life – it
                transforms their entire family and community. Start your
                sponsorship journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/sponsor"
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  💝 Start Sponsoring
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-lg font-bold transition-colors duration-200"
                >
                  Ask Questions
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

export default Children;
