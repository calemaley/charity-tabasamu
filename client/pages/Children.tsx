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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredChildren.map((child, index) => (
              <AnimatedSection
                key={child.id}
                animation="scaleIn"
                delay={index * 50}
              >
                <div className="bg-white border border-charity-neutral-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  <div className="relative overflow-hidden">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">
                          Dreams of being a {child.dreamJob}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-charity-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Available
                    </div>
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-2 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {child.name}
                    </h3>

                    <div className="space-y-2 mb-4 text-sm text-charity-neutral-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-charity-orange-500" />
                        {child.age} years old
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-charity-green-500" />
                        {child.location}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-charity-orange-500" />
                        <span className="truncate">{child.grade}</span>
                      </div>
                    </div>

                    <p className="text-charity-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {child.story}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Recent Achievements:
                      </div>
                      <div className="space-y-1">
                        {child.achievements
                          .slice(0, 2)
                          .map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center text-xs text-charity-green-700"
                            >
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              {achievement}
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Interests:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {child.interests.slice(0, 3).map((interest, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-charity-green-100 text-charity-green-700 text-xs rounded-full"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-charity-neutral-200 pt-4 mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-charity-neutral-600">
                          Monthly Need:
                        </span>
                        <span className="text-xl font-bold text-charity-orange-600">
                          ${child.monthlyNeed}
                        </span>
                      </div>

                      <Link
                        to="/sponsor"
                        className="block w-full px-4 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-all duration-200 font-medium group-hover:transform group-hover:scale-105 shadow-md hover:shadow-lg text-center"
                      >
                        💝 Sponsor {child.name.split(" ")[0]}
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
