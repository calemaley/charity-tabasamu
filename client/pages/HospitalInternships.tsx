import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  MapPin,
  Clock,
  Users,
  Heart,
  Activity,
  Award,
  ArrowRight,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  FileText,
  Upload,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const HospitalInternships = () => {
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    yearOfStudy: "",
    medicalField: "",
    previousExperience: "",
    duration: "",
    hospital: "",
    references: "",
    motivation: "",
  });

  const hospitals = [
    {
      id: "mwanza-general",
      name: "Mwanza Regional Hospital",
      location: "Mwanza Region",
      type: "General Hospital",
      beds: 400,
      departments: ["Emergency", "Surgery", "Pediatrics", "Maternity", "Internal Medicine"],
      internPositions: 8,
      description: "Major referral hospital serving the Lake Zone with modern facilities.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      specialties: ["Cardiology", "Orthopedics", "Radiology"],
      requirements: "4th year medical students or above"
    },
    {
      id: "kilimanjaro-christian",
      name: "Kilimanjaro Christian Medical Centre",
      location: "Moshi, Kilimanjaro",
      type: "Teaching Hospital",
      beds: 630,
      departments: ["Oncology", "Neurosurgery", "ICU", "Pediatrics", "Obstetrics"],
      internPositions: 12,
      description: "Premier teaching hospital with specialized medical programs.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      specialties: ["Cancer Treatment", "Neurology", "Critical Care"],
      requirements: "Final year medical students"
    },
    {
      id: "muhimbili-national",
      name: "Muhimbili National Hospital",
      location: "Dar es Salaam",
      type: "National Referral Hospital",
      beds: 1500,
      departments: ["Cardiology", "Nephrology", "Psychiatry", "Burns Unit", "Trauma"],
      internPositions: 20,
      description: "Tanzania's largest hospital and main referral center.",
      image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
      specialties: ["Cardiac Surgery", "Transplantation", "Advanced Diagnostics"],
      requirements: "Medical degree students (all levels)"
    }
  ];

  const requirements = [
    "Enrolled in accredited medical program",
    "Minimum 3.0 GPA or equivalent",
    "Valid medical liability insurance",
    "Completed basic medical courses",
    "Hepatitis B vaccination series",
    "English proficiency certification",
    "Clean criminal background check",
    "Letter of recommendation from faculty"
  ];

  const benefits = [
    "Hands-on clinical experience in African healthcare setting",
    "Exposure to tropical diseases and conditions",
    "Mentorship from experienced medical professionals",
    "Cultural immersion and language learning opportunities",
    "Research opportunities and case study participation",
    "Certificate of completion for medical portfolio",
    "Networking with international medical community",
    "Personal and professional growth in challenging environment"
  ];

  const medicalFields = [
    "General Medicine",
    "Surgery",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Emergency Medicine",
    "Internal Medicine",
    "Radiology",
    "Anesthesiology",
    "Psychiatry",
    "Orthopedics",
    "Cardiology",
    "Oncology"
  ];

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Application submitted successfully! Our medical coordinator will review your application and contact you within 5-7 business days.");
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      university: "",
      yearOfStudy: "",
      medicalField: "",
      previousExperience: "",
      duration: "",
      hospital: "",
      references: "",
      motivation: "",
    });
    setSelectedHospital(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-orange-500 to-charity-green-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Stethoscope className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hospital Internship Program
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Gain invaluable medical experience while serving underserved communities
                in Tanzania's leading healthcare institutions
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
                  Medical Excellence in Service
                </h2>
                <p className="text-lg text-charity-neutral-600 mb-6 leading-relaxed">
                  Our Hospital Internship Program offers medical students and young professionals
                  the opportunity to gain hands-on clinical experience in Tanzania's premier
                  healthcare facilities. Work alongside experienced doctors, nurses, and
                  healthcare teams while serving patients who need medical care the most.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-charity-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-charity-orange-600">150+</div>
                    <div className="text-sm text-charity-neutral-600">Medical Interns</div>
                  </div>
                  <div className="text-center p-4 bg-charity-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-charity-green-600">25</div>
                    <div className="text-sm text-charity-neutral-600">Partner Hospitals</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
                  alt="Hospital Internship"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-8 w-8 text-charity-green-600" />
                    <div>
                      <div className="font-bold text-charity-neutral-800">WHO Certified</div>
                      <div className="text-sm text-charity-neutral-600">Training Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideUp">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-charity-orange-600 mr-3" />
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

            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6 flex items-center">
                  <Award className="h-6 w-6 text-charity-green-600 mr-3" />
                  Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
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

      {/* Available Hospitals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Partner Hospitals
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Choose from our network of accredited hospitals offering comprehensive
                medical training opportunities across different specialties.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <AnimatedSection
                key={hospital.id}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white border border-charity-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {hospital.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charity-neutral-800 mb-2">
                      {hospital.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-charity-neutral-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {hospital.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {hospital.beds} beds
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-charity-orange-600" />
                        {hospital.internPositions} intern positions
                      </div>
                    </div>
                    
                    <p className="text-charity-neutral-600 text-sm mb-4">
                      {hospital.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Key Departments:
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {hospital.departments.slice(0, 3).map((dept, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-charity-green-100 text-charity-green-700 text-xs rounded-full"
                          >
                            {dept}
                          </span>
                        ))}
                        {hospital.departments.length > 3 && (
                          <span className="px-2 py-1 bg-charity-neutral-100 text-charity-neutral-600 text-xs rounded-full">
                            +{hospital.departments.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Specialties:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-charity-orange-100 text-charity-orange-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-charity-neutral-500 mb-4 p-2 bg-charity-neutral-50 rounded">
                      <strong>Requirements:</strong> {hospital.requirements}
                    </div>
                    
                    <button
                      onClick={() => setSelectedHospital(hospital.id)}
                      className="w-full px-4 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
                      Apply for Internship
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
              Medical Internship Application
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
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({...prev, phone: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    University/Medical School *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.university}
                    onChange={(e) => setApplicationData(prev => ({...prev, university: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Year of Study *
                  </label>
                  <select
                    required
                    value={applicationData.yearOfStudy}
                    onChange={(e) => setApplicationData(prev => ({...prev, yearOfStudy: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="5th Year">5th Year</option>
                    <option value="6th Year">6th Year</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Resident">Resident</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                    Medical Field of Interest *
                  </label>
                  <select
                    required
                    value={applicationData.medicalField}
                    onChange={(e) => setApplicationData(prev => ({...prev, medicalField: e.target.value}))}
                    className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Field</option>
                    {medicalFields.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Preferred Hospital
                </label>
                <select
                  value={applicationData.hospital || selectedHospital}
                  onChange={(e) => setApplicationData(prev => ({...prev, hospital: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                >
                  {hospitals.map(hospital => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name} - {hospital.location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Preferred Duration *
                </label>
                <select
                  required
                  value={applicationData.duration}
                  onChange={(e) => setApplicationData(prev => ({...prev, duration: e.target.value}))}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                >
                  <option value="">Select Duration</option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Previous Medical Experience
                </label>
                <textarea
                  value={applicationData.previousExperience}
                  onChange={(e) => setApplicationData(prev => ({...prev, previousExperience: e.target.value}))}
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Describe any previous clinical experience, rotations, or medical volunteer work..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  Motivation Statement *
                </label>
                <textarea
                  required
                  value={applicationData.motivation}
                  onChange={(e) => setApplicationData(prev => ({...prev, motivation: e.target.value}))}
                  rows={4}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Why do you want to intern in Tanzania? What do you hope to achieve?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                  References (Names and Contact Information)
                </label>
                <textarea
                  value={applicationData.references}
                  onChange={(e) => setApplicationData(prev => ({...prev, references: e.target.value}))}
                  rows={3}
                  className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-orange-500 focus:border-transparent"
                  placeholder="Please provide at least 2 academic or professional references..."
                />
              </div>
              
              <div className="bg-charity-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-charity-neutral-800 mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Required Documents (to be submitted separately)
                </h4>
                <ul className="text-sm text-charity-neutral-600 space-y-1">
                  <li>• Academic transcripts</li>
                  <li>• CV/Resume</li>
                  <li>• Letter of recommendation from faculty</li>
                  <li>• Medical insurance documentation</li>
                  <li>• Hepatitis B vaccination certificate</li>
                  <li>• Background check clearance</li>
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
                  onClick={() => setSelectedHospital(null)}
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
      <section className="py-20 bg-charity-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Start Your Medical Journey in Tanzania
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our hospital internship program and gain invaluable medical experience
                while making a real difference in global health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-orange-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Medical Coordinator
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-lg font-bold transition-colors duration-200"
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

export default HospitalInternships;
