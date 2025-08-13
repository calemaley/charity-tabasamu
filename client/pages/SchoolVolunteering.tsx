import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const SchoolVolunteering = () => {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    availability: "",
    subjects: [] as string[],
    school: "",
  });

  const schools = [
    {
      id: "mwanza-primary",
      name: "Mwanza Primary School",
      location: "Mwanza Region",
      students: 420,
      needVolunteers: 6,
      subjects: ["Mathematics", "English", "Science", "Swahili"],
      description: "A rural primary school serving children from 6 surrounding villages.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgency: "high"
    },
    {
      id: "arusha-secondary",
      name: "Arusha Community Secondary",
      location: "Arusha Region",
      students: 280,
      needVolunteers: 4,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      description: "Secondary school focusing on STEM education for underserved communities.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgency: "medium"
    },
    {
      id: "dodoma-girls",
      name: "Dodoma Girls Education Center",
      location: "Dodoma Region",
      students: 180,
      needVolunteers: 3,
      subjects: ["Life Skills", "English", "Mathematics", "Computer Studies"],
      description: "Specialized center empowering girls through education and skills training.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      urgency: "low"
    }
  ];

  const requirements = [
    "Bachelor's degree or equivalent experience",
    "Passion for education and working with children",
    "Basic Swahili language skills (training provided)",
    "Minimum 3-month commitment",
    "Cultural sensitivity and adaptability",
    "Clean background check"
  ];

  const responsibilities = [
    "Teaching and tutoring students in assigned subjects",
    "Developing creative lesson plans and educational activities",
    "Supporting teachers with classroom management",
    "Organizing extracurricular activities and events",
    "Mentoring students and providing guidance",
    "Participating in school community activities"
  ];

  const handleSubjectChange = (subject: string) => {
    setApplicationData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Application submitted successfully! We'll contact you within 3-5 business days.");
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      availability: "",
      subjects: [],
      school: "",
    });
    setSelectedSchool(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-green-500 to-charity-orange-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <GraduationCap className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                School Volunteering Program
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Join our education initiative and make a lasting impact on children's lives
                through quality teaching and mentorship in rural Tanzania
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-4xl font-bold text-charity-neutral-800 mb-6">
                  Transform Lives Through Education
                </h2>
                <p className="text-lg text-charity-neutral-600 mb-6 leading-relaxed">
                  Our School Volunteering Program connects passionate educators with rural schools
                  in Tanzania that need additional teaching support. As a volunteer teacher, you'll
                  work directly with local educators to provide quality education to children who
                  often have limited access to qualified teachers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-charity-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-charity-green-600">500+</div>
                    <div className="text-sm text-charity-neutral-600">Students Taught</div>
                  </div>
                  <div className="text-center p-4 bg-charity-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-charity-orange-600">15</div>
                    <div className="text-sm text-charity-neutral-600">Partner Schools</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
                  alt="School Volunteering"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-charity-orange-600" />
                    <div>
                      <div className="font-bold text-charity-neutral-800">Impact Certified</div>
                      <div className="text-sm text-charity-neutral-600">Ministry of Education</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements & Responsibilities */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideUp">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-charity-green-600 mr-3" />
                  Requirements
                </h3>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-charity-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charity-neutral-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 text-charity-orange-600 mr-3" />
                  Responsibilities
                </h3>
                <ul className="space-y-4">
                  {responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-charity-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charity-neutral-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Available Schools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Schools Needing Volunteers
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Choose a school that matches your skills and interests. Each school has unique
                needs and opportunities for making an impact.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <AnimatedSection
                key={school.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white border border-charity-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                      school.urgency === 'high' ? 'bg-red-500 text-white' :
                      school.urgency === 'medium' ? 'bg-yellow-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {school.urgency === 'high' ? 'Urgent Need' :
                       school.urgency === 'medium' ? 'Moderate Need' : 'Available'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-2">
                      {school.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-charity-neutral-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {school.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {school.students} students
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-charity-orange-600" />
                        Need {school.needVolunteers} volunteers
                      </div>
                    </div>
                    
                    <p className="text-charity-neutral-600 text-sm mb-4">
                      {school.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Subjects Needed:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {school.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-charity-orange-100 text-charity-orange-700 text-xs rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedSchool(school.id)}
                      className="w-full px-4 py-2 bg-charity-green-600 hover:bg-charity-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      Apply to Volunteer
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
              Apply to Volunteer
            </h3>
            
            <form onSubmit={handleSubmitApplication} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({...prev, name: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={applicationData.phone}
                  onChange={(e) => setApplicationData(prev => ({...prev, phone: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Preferred School
                </label>
                <select
                  value={applicationData.school || selectedSchool}
                  onChange={(e) => setApplicationData(prev => ({...prev, school: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                >
                  {schools.map(school => (
                    <option key={school.id} value={school.id}>
                      {school.name} - {school.location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Teaching Experience
                </label>
                <textarea
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData(prev => ({...prev, experience: e.target.value}))}
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                  placeholder="Describe your teaching or relevant experience..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Availability
                </label>
                <input
                  type="text"
                  value={applicationData.availability}
                  onChange={(e) => setApplicationData(prev => ({...prev, availability: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                  placeholder="e.g., 3 months starting June 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Subjects You Can Teach
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Mathematics", "English", "Science", "Swahili", "Physics", "Chemistry", "Biology", "Computer Studies", "Life Skills"].map(subject => (
                    <label key={subject} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={applicationData.subjects.includes(subject)}
                        onChange={() => handleSubjectChange(subject)}
                        className="rounded border-charity-neutral-300 text-charity-green-600 focus:ring-charity-green-500"
                      />
                      <span className="text-sm text-charity-neutral-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-charity-green-600 hover:bg-charity-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSchool(null)}
                  className="px-6 py-3 bg-charity-neutral-200 hover:bg-charity-neutral-300 text-charity-neutral-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-charity-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our school volunteering program and help provide quality education
                to children who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-green-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-green-600 rounded-lg font-bold transition-colors duration-200"
                >
                  View All Programs
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

export default SchoolVolunteering;
