import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Star,
  Calendar,
  Target,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Sponsor = () => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [selectedSponsorshipType, setSelectedSponsorshipType] =
    useState<string>("full");
  const [sponsorshipData, setSponsorshipData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    sponsorshipType: "full",
    paymentMethod: "monthly",
    message: "",
  });

  const [searchParams] = useSearchParams();

  // Check for child parameter in URL and auto-select child
  useEffect(() => {
    const childParam = searchParams.get("child");
    if (childParam && children.find((c) => c.id === childParam)) {
      setSelectedChild(childParam);
      // Scroll to the specific child or modal
      setTimeout(() => {
        const childElement = document.getElementById(`child-${childParam}`);
        if (childElement) {
          childElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [searchParams]);

  const children = [
    {
      id: "maria-001",
      name: "Maria Mwangi",
      age: 8,
      location: "Mwanza Region",
      school: "Mwanza Primary School",
      grade: "Standard 3",
      story:
        "Maria loves mathematics and dreams of becoming a teacher. She walks 5km to school daily and helps her mother with farming after classes.",
      needs: ["School fees", "Uniforms", "Books", "Lunch program"],
      image:
        "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      monthlyNeed: 45,
      sponsored: false,
      interests: ["Mathematics", "Reading", "Farming"],
      family: "Lives with mother and 2 siblings",
    },
    {
      id: "david-002",
      name: "David Kimaro",
      age: 12,
      location: "Arusha Region",
      school: "Arusha Community Secondary",
      grade: "Form 1",
      story:
        "David is passionate about science and wants to become a doctor. His father is a subsistence farmer and struggles to pay school fees.",
      needs: [
        "School fees",
        "Science books",
        "Laboratory equipment",
        "Transport",
      ],
      image:
        "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      monthlyNeed: 65,
      sponsored: false,
      interests: ["Biology", "Chemistry", "Football"],
      family: "Lives with father and 3 siblings",
    },
    {
      id: "grace-003",
      name: "Grace Mtema",
      age: 15,
      location: "Dodoma Region",
      school: "Dodoma Girls Education Center",
      grade: "Form 3",
      story:
        "Grace excels in her studies and wants to become an engineer. She comes from a single-parent household and needs support to continue her education.",
      needs: ["School fees", "Textbooks", "Computer training", "Mentorship"],
      image:
        "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      monthlyNeed: 75,
      sponsored: false,
      interests: ["Mathematics", "Physics", "Technology"],
      family: "Lives with grandmother and 1 sibling",
    },
    {
      id: "john-004",
      name: "John Massawe",
      age: 10,
      location: "Kilimanjaro Region",
      school: "Kilimanjaro Primary School",
      grade: "Standard 5",
      story:
        "John is a bright student who loves to read. His parents work as casual laborers and cannot afford his educational expenses consistently.",
      needs: [
        "School fees",
        "Reading materials",
        "Uniform",
        "Nutritional support",
      ],
      image:
        "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      monthlyNeed: 50,
      sponsored: false,
      interests: ["Reading", "Writing", "History"],
      family: "Lives with both parents and 4 siblings",
    },
  ];

  const sponsorshipTypes = [
    {
      id: "full",
      name: "Full Sponsorship",
      description: "Cover all educational expenses for one child",
      benefits: [
        "School fees and registration",
        "Uniforms and school supplies",
        "Books and learning materials",
        "Nutritional support",
        "Medical care when needed",
        "Regular progress updates",
        "Direct communication with child",
        "Annual progress report",
      ],
      monthlyAmount: "Varies by child ($45-$75)",
      commitment: "Minimum 1 year, renewable",
    },
    {
      id: "partial",
      name: "Partial Sponsorship",
      description: "Support specific aspects of a child's education",
      benefits: [
        "Choose specific needs to support",
        "School fees OR supplies OR books",
        "Quarterly progress updates",
        "Group communication opportunities",
        "Annual impact report",
      ],
      monthlyAmount: "$15-$30",
      commitment: "Flexible, 6 months minimum",
    },
    {
      id: "group",
      name: "Group Sponsorship",
      description: "Join with others to support multiple children",
      benefits: [
        "Support 3-5 children collectively",
        "Shared updates and communications",
        "Lower individual commitment",
        "Community of sponsors",
        "Group visits opportunity",
        "Collective impact reports",
      ],
      monthlyAmount: "$20-$25 per person",
      commitment: "12 months with group",
    },
  ];

  const impactStats = [
    { number: "342", label: "Children Currently Sponsored" },
    { number: "89%", label: "Graduate to Next Level" },
    { number: "156", label: "Children Graduated" },
    { number: "25", label: "Now in University" },
  ];

  const handleSponsorApplication = (e: React.FormEvent) => {
    e.preventDefault();

    // Store the sponsorship data (in a real app, this would submit to an API)
    const sponsorshipInfo = {
      ...sponsorshipData,
      childId: selectedChild,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage for tracking (temporary solution)
    localStorage.setItem(
      "sponsorshipApplication",
      JSON.stringify(sponsorshipInfo),
    );

    // Redirect to payment with sponsorship details
    const paymentUrl = "https://zenlipa.co.ke/c/uKowYx";
    window.open(paymentUrl, "_blank");

    // Reset form and close modal
    setSponsorshipData({
      name: "",
      email: "",
      phone: "",
      address: "",
      sponsorshipType: "full",
      paymentMethod: "monthly",
      message: "",
    });
    setSelectedChild(null);

    // Show success message
    alert(
      "Redirecting to secure payment portal. After payment, our team will contact you within 24 hours to complete the sponsorship setup.",
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-orange-500 to-charity-green-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sponsor a Child
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Transform a child's life through education. Create a lasting
                bond and watch them flourish with your support.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charity-neutral-800 mb-4">
                Our Sponsorship Impact
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                See the real difference your sponsorship makes in children's
                lives and their communities.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="text-center p-6 bg-charity-orange-50 rounded-xl">
                  <div className="text-4xl font-bold text-charity-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-charity-neutral-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Choose Your Sponsorship Type
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Select the sponsorship option that best fits your budget and
                commitment level. Every contribution makes a difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTypes.map((type, index) => (
              <AnimatedSection
                key={type.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div
                  className={`bg-white p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
                    selectedSponsorshipType === type.id
                      ? "border-charity-orange-500 ring-2 ring-charity-orange-200 transform scale-105"
                      : "border-charity-neutral-200 hover:border-charity-orange-300"
                  }`}
                >
                  {type.id === "full" && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-charity-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-charity-neutral-800 mb-4 text-center">
                    {type.name}
                  </h3>

                  <p className="text-charity-neutral-600 text-center mb-6">
                    {type.description}
                  </p>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-charity-orange-600 mb-1">
                      {type.monthlyAmount}
                    </div>
                    <div className="text-sm text-charity-neutral-500">
                      {type.commitment}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-charity-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-charity-neutral-700 text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedSponsorshipType(type.id);
                      setSponsorshipData((prev) => ({
                        ...prev,
                        sponsorshipType: type.id,
                      }));
                    }}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedSponsorshipType === type.id
                        ? "bg-charity-orange-600 hover:bg-charity-orange-700 text-white shadow-lg"
                        : "bg-charity-neutral-100 hover:bg-charity-orange-100 text-charity-neutral-800 hover:shadow-md"
                    }`}
                  >
                    {selectedSponsorshipType === type.id ? (
                      <span className="flex items-center justify-center">
                        <Check className="h-4 w-4 mr-2" />
                        Selected
                      </span>
                    ) : (
                      "Choose This Option"
                    )}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Children Available for Sponsorship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Meet the Children
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                These amazing children are waiting for a sponsor who believes in
                their potential. Learn about their dreams and choose who you'd
                like to support.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {children.map((child, index) => (
              <AnimatedSection
                key={child.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div
                  id={`child-${child.id}`}
                  className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex flex-col group transform hover:-translate-y-4 hover:scale-105 cursor-pointer"
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 via-charity-green-400 to-charity-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-charity-orange-400 rounded-full animate-bounce"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${10 + (i % 3) * 20}%`,
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
                        className="w-full h-56 object-cover group-hover:scale-125 transition-transform duration-1000"
                      />

                      {/* Multiple overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-charity-orange-500/20 to-charity-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Floating badges */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-charity-green-500 to-charity-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        ✨ Available
                      </div>

                      {/* Heart animation on hover */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                          <Heart className="h-4 w-4 text-white fill-current" />
                        </div>
                      </div>

                      {/* Hover info overlay */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl">
                          <p className="text-charity-neutral-800 text-sm font-medium">
                            "✨ {child.story.slice(0, 60)}..."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-6 flex-grow flex flex-col relative">
                      {/* Name with special styling */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-charity-neutral-800 mb-1 group-hover:text-charity-orange-600 transition-colors duration-300 transform group-hover:scale-105">
                          {child.name}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-charity-orange-500 to-charity-green-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                      </div>

                      {/* Enhanced info grid */}
                      <div className="grid grid-cols-1 gap-3 mb-4">
                        <div className="flex items-center p-2 rounded-lg bg-charity-orange-50 group-hover:bg-charity-orange-100 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-charity-orange-500 flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                            <Calendar className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-charity-neutral-700 font-medium">
                            {child.age} years old
                          </span>
                        </div>

                        <div className="flex items-center p-2 rounded-lg bg-charity-green-50 group-hover:bg-charity-green-100 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-charity-green-500 flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-charity-neutral-700 font-medium text-sm">
                            {child.location}
                          </span>
                        </div>

                        <div className="flex items-center p-2 rounded-lg bg-charity-orange-50 group-hover:bg-charity-orange-100 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-charity-orange-500 flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                            <GraduationCap className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-charity-neutral-700 font-medium text-sm truncate">
                            {child.grade}
                          </span>
                        </div>
                      </div>

                      {/* Interests with enhanced styling */}
                      <div className="mb-6">
                        <div className="text-sm font-bold text-charity-neutral-700 mb-3 flex items-center">
                          <Star className="h-4 w-4 text-charity-orange-500 mr-2" />
                          Interests:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {child.interests.map((interest, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-charity-green-100 to-charity-green-200 text-charity-green-800 text-xs rounded-full font-medium border border-charity-green-300 transform hover:scale-110 transition-all duration-300 shadow-sm"
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced pricing section */}
                      <div className="border-t-2 border-charity-neutral-100 pt-4 mt-auto">
                        <div className="bg-gradient-to-r from-charity-orange-50 to-charity-green-50 p-4 rounded-xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-charity-neutral-700 font-medium">
                              Monthly Support:
                            </span>
                            <div className="text-right">
                              <span className="text-3xl font-bold text-charity-orange-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                                ${child.monthlyNeed}
                              </span>
                              <div className="text-xs text-charity-neutral-500">
                                per month
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced button */}
                        <button
                          onClick={() => setSelectedChild(child.id)}
                          className="w-full relative px-6 py-4 bg-gradient-to-r from-charity-orange-600 to-charity-orange-700 hover:from-charity-orange-700 hover:to-charity-orange-800 text-white rounded-2xl transition-all duration-500 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 group-hover:animate-pulse overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-400 to-charity-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                          <div className="relative z-10 flex items-center justify-center">
                            <Heart className="h-5 w-5 mr-2 animate-bounce" />
                            Sponsor {child.name.split(" ")[0]}
                            <Star className="h-4 w-4 ml-2 text-yellow-300" />
                          </div>
                          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Application Modal */}
      {selectedChild && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
              Sponsor {children.find((c) => c.id === selectedChild)?.name}
            </h3>

            <form onSubmit={handleSponsorApplication} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={sponsorshipData.name}
                    onChange={(e) =>
                      setSponsorshipData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={sponsorshipData.email}
                    onChange={(e) =>
                      setSponsorshipData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={sponsorshipData.phone}
                    onChange={(e) =>
                      setSponsorshipData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Sponsorship Type *
                  </label>
                  <select
                    required
                    value={sponsorshipData.sponsorshipType}
                    onChange={(e) =>
                      setSponsorshipData((prev) => ({
                        ...prev,
                        sponsorshipType: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  >
                    <option value="full">Full Sponsorship</option>
                    <option value="partial">Partial Sponsorship</option>
                    <option value="group">Group Sponsorship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={sponsorshipData.address}
                  onChange={(e) =>
                    setSponsorshipData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Street, City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Payment Frequency *
                </label>
                <select
                  required
                  value={sponsorshipData.paymentMethod}
                  onChange={(e) =>
                    setSponsorshipData((prev) => ({
                      ...prev,
                      paymentMethod: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annual">Annual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Message to Child (Optional)
                </label>
                <textarea
                  value={sponsorshipData.message}
                  onChange={(e) =>
                    setSponsorshipData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Write a message of encouragement..."
                />
              </div>

              <div className="bg-charity-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-charity-neutral-800 mb-2">
                  What Happens Next?
                </h4>
                <ul className="text-sm text-charity-neutral-600 space-y-1">
                  <li>
                    • We'll send you detailed information about your sponsored
                    child
                  </li>
                  <li>• You'll receive regular updates on their progress</li>
                  <li>• You can write letters and send photos</li>
                  <li>• Annual progress reports and photos</li>
                  <li>• Optional visits can be arranged</li>
                </ul>
              </div>

              <div className="bg-charity-orange-50 p-4 rounded-xl border-l-4 border-charity-orange-500 mb-6">
                <p className="text-sm text-charity-orange-700">
                  <strong>Next:</strong> You'll be redirected to our secure
                  payment portal to complete your sponsorship setup.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-charity-orange-600 to-charity-orange-700 hover:from-charity-orange-700 hover:to-charity-orange-800 text-white rounded-lg transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  💝 Proceed to Payment
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChild(null)}
                  className="px-6 py-4 bg-charity-neutral-200 hover:bg-charity-neutral-300 text-charity-neutral-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* How Sponsorship Works */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                How Child Sponsorship Works
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Our transparent process ensures your support reaches the child
                and makes the maximum impact on their education and future.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose a Child",
                description:
                  "Browse profiles and select a child whose story resonates with you",
                icon: Heart,
              },
              {
                step: "2",
                title: "Complete Application",
                description:
                  "Fill out sponsorship details and set up secure monthly payments",
                icon: Users,
              },
              {
                step: "3",
                title: "Receive Updates",
                description:
                  "Get regular photos, letters, and progress reports from your child",
                icon: Mail,
              },
              {
                step: "4",
                title: "Watch Them Grow",
                description:
                  "Celebrate milestones and witness the transformation your support creates",
                icon: Award,
              },
            ].map((step, index) => (
              <AnimatedSection
                key={step.step}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-charity-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-charity-orange-600" />
                  </div>
                  <div className="w-8 h-8 bg-charity-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-charity-neutral-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charity-neutral-600">{step.description}</p>
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
                Ready to Change a Life?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Your sponsorship doesn't just change a child's life – it
                transforms their entire family and community. Start your
                sponsorship journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("children-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Sponsor a Child Now
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-lg font-bold transition-colors duration-200"
                >
                  Have Questions?
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

export default Sponsor;
