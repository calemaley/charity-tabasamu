import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  GraduationCap,
  Stethoscope,
  Heart,
  Globe,
  Clock,
  Award,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Target,
  BookOpen,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    nationality: "",
    experience: "",
    skills: [] as string[],
    availability: "",
    motivation: "",
    opportunity: "",
  });

  const volunteerOpportunities = [
    {
      id: "education-general",
      title: "General Education Volunteer",
      category: "Education",
      description: "Support teachers and students in primary and secondary schools",
      duration: "3-6 months",
      location: "Various schools across Kenya",
      requirements: ["High school diploma", "Teaching experience preferred", "Basic Swahili helpful"],
      responsibilities: [
        "Assist teachers with classroom activities",
        "Help with lesson planning and preparation",
        "Tutor struggling students",
        "Organize educational games and activities",
        "Support library and computer lab activities"
      ],
      skills: ["Teaching", "Patience", "Creativity", "Communication"],
      impact: "Directly support 20-30 students daily",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: false,
      icon: GraduationCap
    },
    {
      id: "healthcare-support",
      title: "Healthcare Support Volunteer", 
      category: "Healthcare",
      description: "Assist medical professionals in clinics and health outreach programs",
      duration: "6-12 months",
      location: "Partner hospitals and mobile clinics",
      requirements: ["Medical/nursing background", "First aid certification", "Physical fitness"],
      responsibilities: [
        "Support medical staff during patient care",
        "Assist with health education programs",
        "Help with mobile clinic setup and operations",
        "Maintain medical equipment and supplies",
        "Document patient information and statistics"
      ],
      skills: ["Medical knowledge", "Compassion", "Attention to detail", "Physical stamina"],
      impact: "Serve 100+ patients monthly",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: true,
      icon: Stethoscope
    },
    {
      id: "community-development",
      title: "Community Development Volunteer",
      category: "Community",
      description: "Work on infrastructure and social development projects",
      duration: "6-12 months",
      location: "Rural communities",
      requirements: ["Project management experience", "Cultural sensitivity", "Physical ability"],
      responsibilities: [
        "Support community infrastructure projects",
        "Facilitate community meetings and workshops",
        "Assist with microfinance and business training",
        "Help with environmental conservation projects",
        "Document project progress and impact"
      ],
      skills: ["Project management", "Leadership", "Problem-solving", "Adaptability"],
      impact: "Support 100+ community members",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: false,
      icon: Users
    },
    {
      id: "youth-mentorship",
      title: "Youth Mentorship Volunteer",
      category: "Education",
      description: "Mentor teenagers and young adults in leadership and life skills",
      duration: "4-8 months",
      location: "Schools and community centers",
      requirements: ["Youth work experience", "Strong communication skills", "Cultural awareness"],
      responsibilities: [
        "Conduct mentorship sessions with young people",
        "Organize leadership training workshops",
        "Support career guidance and planning",
        "Facilitate peer support groups",
        "Plan recreational and educational activities"
      ],
      skills: ["Mentoring", "Communication", "Empathy", "Organization"],
      impact: "Mentor 15-20 young people",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: false,
      icon: Heart
    },
    {
      id: "special-needs",
      title: "Special Needs Support Volunteer",
      category: "Healthcare",
      description: "Support children and adults with disabilities and special needs",
      duration: "6-12 months",
      location: "Special education centers and rehabilitation facilities",
      requirements: ["Special education background", "Patience and empathy", "Physical capability"],
      responsibilities: [
        "Assist with daily care and activities",
        "Support therapy and rehabilitation sessions",
        "Help with educational activities and games",
        "Provide emotional support and companionship",
        "Assist with feeding and mobility support"
      ],
      skills: ["Special needs care", "Patience", "Physical strength", "Emotional support"],
      impact: "Support 10-15 individuals with special needs",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: true,
      icon: Heart
    },
    {
      id: "technology-training",
      title: "Technology & Digital Literacy Volunteer",
      category: "Education",
      description: "Teach computer skills and digital literacy to students and adults",
      duration: "4-6 months",
      location: "Schools and community centers with computer labs",
      requirements: ["Computer proficiency", "Teaching ability", "Technical troubleshooting"],
      responsibilities: [
        "Teach basic computer skills and digital literacy",
        "Maintain and troubleshoot computer equipment",
        "Develop digital learning materials",
        "Train teachers in technology use",
        "Set up and manage computer labs"
      ],
      skills: ["Technology", "Teaching", "Problem-solving", "Patience"],
      impact: "Train 50+ people in digital skills monthly",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgent: false,
      icon: BookOpen
    }
  ];

  const volunteerBenefits = [
    "Comprehensive orientation and training program",
    "Local host family accommodation or volunteer house",
    "Meals and basic living expenses covered", 
    "24/7 in-country support and coordination",
    "Cultural immersion and language learning opportunities",
    "Certificate of completion and recommendation letters",
    "Professional development and skill building",
    "Lifelong friendships and global network",
    "Travel opportunities within Kenya",
    "Alumni network and continued engagement"
  ];

  const requirements = [
    "Minimum age 18 years old",
    "Clean criminal background check",
    "Medical clearance and vaccinations",
    "International health insurance",
    "Commitment to full program duration",
    "Cultural sensitivity and adaptability",
    "Basic English proficiency",
    "Respect for local customs and traditions"
  ];

  const availableSkills = [
    "Teaching", "Healthcare", "Project Management", "Technology", "Communication",
    "Leadership", "Problem-solving", "Creativity", "Language Skills", "Manual Labor",
    "Administration", "Research", "Photography", "Writing", "Social Media"
  ];

  const handleSkillChange = (skill: string) => {
    setVolunteerData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleVolunteerApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Volunteer application submitted successfully! Our volunteer coordinator will contact you within 3-5 business days.");
    setVolunteerData({
      name: "",
      email: "",
      phone: "",
      age: "",
      nationality: "",
      experience: "",
      skills: [],
      availability: "",
      motivation: "",
      opportunity: "",
    });
    setSelectedOpportunity(null);
  };

  const impactStats = [
    { number: "500+", label: "Volunteers Placed" },
    { number: "50,000+", label: "Lives Impacted" },
    { number: "95%", label: "Volunteer Satisfaction" },
    { number: "25", label: "Partner Organizations" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-orange-500 to-charity-green-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Volunteer With Us
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Join our global community of volunteers and make a lasting impact
                while gaining invaluable life experience in Kenya.
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
                Our Volunteer Impact
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Join a proven program that creates meaningful change for both
                volunteers and the communities they serve.
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

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Volunteer Opportunities
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Find the perfect volunteer opportunity that matches your skills,
                interests, and availability. Each role makes a unique impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <AnimatedSection
                key={opportunity.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white border border-charity-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {opportunity.category}
                    </div>
                    {opportunity.urgent && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Urgent Need
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-2">
                      {opportunity.title}
                    </h3>
                    
                    <p className="text-charity-neutral-600 mb-4 text-sm">
                      {opportunity.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-charity-neutral-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {opportunity.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        {opportunity.impact}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Key Skills:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-charity-green-100 text-charity-green-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {opportunity.skills.length > 3 && (
                          <span className="px-2 py-1 bg-charity-neutral-100 text-charity-neutral-600 text-xs rounded-full">
                            +{opportunity.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedOpportunity(opportunity.id)}
                      className="w-full px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      Apply for This Role
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div className="bg-charity-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <Check className="h-6 w-6 text-charity-orange-600 mr-3" />
                  Requirements
                </h3>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-charity-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charity-neutral-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-charity-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <Award className="h-6 w-6 text-charity-green-600 mr-3" />
                  What We Provide
                </h3>
                <ul className="space-y-4">
                  {volunteerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-charity-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charity-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Volunteer Application Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
              Volunteer Application: {volunteerOpportunities.find(o => o.id === selectedOpportunity)?.title}
            </h3>
            
            <form onSubmit={handleVolunteerApplication} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerData.name}
                    onChange={(e) => setVolunteerData(prev => ({...prev, name: e.target.value}))}
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
                    value={volunteerData.email}
                    onChange={(e) => setVolunteerData(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={volunteerData.phone}
                    onChange={(e) => setVolunteerData(prev => ({...prev, phone: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    min="18"
                    required
                    value={volunteerData.age}
                    onChange={(e) => setVolunteerData(prev => ({...prev, age: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerData.nationality}
                    onChange={(e) => setVolunteerData(prev => ({...prev, nationality: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Preferred Opportunity
                </label>
                <select
                  value={volunteerData.opportunity || selectedOpportunity}
                  onChange={(e) => setVolunteerData(prev => ({...prev, opportunity: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                >
                  {volunteerOpportunities.map(opp => (
                    <option key={opp.id} value={opp.id}>
                      {opp.title} ({opp.duration})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Availability *
                </label>
                <input
                  type="text"
                  required
                  value={volunteerData.availability}
                  onChange={(e) => setVolunteerData(prev => ({...prev, availability: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="e.g., June - September 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  value={volunteerData.experience}
                  onChange={(e) => setVolunteerData(prev => ({...prev, experience: e.target.value}))}
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Describe your relevant experience, education, and background..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Skills & Abilities
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {availableSkills.map(skill => (
                    <label key={skill} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={volunteerData.skills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="rounded border-charity-neutral-300 text-charity-orange-600 focus:ring-charity-orange-500"
                      />
                      <span className="text-sm text-charity-neutral-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Motivation Statement *
                </label>
                <textarea
                  required
                  value={volunteerData.motivation}
                  onChange={(e) => setVolunteerData(prev => ({...prev, motivation: e.target.value}))}
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Why do you want to volunteer with us? What do you hope to achieve?"
                />
              </div>
              
              <div className="bg-charity-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-charity-neutral-800 mb-2">Next Steps</h4>
                <ul className="text-sm text-charity-neutral-600 space-y-1">
                  <li>• Application review (3-5 business days)</li>
                  <li>• Video interview with our team</li>
                  <li>• Background check and reference verification</li>
                  <li>• Pre-departure orientation and training</li>
                  <li>• Travel arrangements and preparation</li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedOpportunity(null)}
                  className="px-6 py-3 bg-charity-neutral-200 hover:bg-charity-neutral-300 text-charity-neutral-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Volunteer Testimonials */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Volunteer Stories
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Hear from our volunteers about their transformative experiences
                and the impact they've made in Kenya.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Education Volunteer",
                duration: "6 months",
                quote: "Teaching in Kenya changed my perspective on education and life. The children's enthusiasm despite limited resources was truly inspiring.",
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              },
              {
                name: "Dr. Mark Rodriguez", 
                role: "Healthcare Volunteer",
                duration: "1 year",
                quote: "Working in rural clinics taught me more about medicine and compassion than any textbook ever could. An unforgettable experience.",
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              },
              {
                name: "Emma Chen",
                role: "Community Development",
                duration: "8 months", 
                quote: "Being part of building a school from the ground up and seeing the community come together was the most rewarding experience of my life.",
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              }
            ].map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-charity-neutral-800">{testimonial.name}</h4>
                      <p className="text-sm text-charity-neutral-600">{testimonial.role}</p>
                      <p className="text-xs text-charity-neutral-500">{testimonial.duration}</p>
                    </div>
                  </div>
                  <p className="text-charity-neutral-700 italic">
                    "{testimonial.quote}"
                  </p>
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
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our volunteer program and embark on a life-changing journey
                that will impact both you and the communities you serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Apply to Volunteer
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

export default Volunteer;
