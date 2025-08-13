import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  CreditCard,
  Shield,
  Award,
  ArrowRight,
  Check,
  DollarSign,
  Users,
  GraduationCap,
  Stethoscope,
  Droplets,
  Home,
  Star,
  Target,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [donationType, setDonationType] = useState("one-time");
  const [donationCause, setDonationCause] = useState("education");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    anonymous: false,
    newsletter: true,
  });

  const donationCauses = [
    {
      id: "education",
      name: "Education Programs",
      description: "Support school fees, supplies, and teacher training",
      icon: GraduationCap,
      impact: "$50 provides school supplies for 5 children for one month",
      urgent: false,
      color: "orange"
    },
    {
      id: "healthcare",
      name: "Healthcare Services", 
      description: "Fund mobile clinics and medical treatments",
      icon: Stethoscope,
      impact: "$75 covers medical care for 10 patients in rural areas",
      urgent: true,
      color: "green"
    },
    {
      id: "water",
      name: "Clean Water Projects",
      description: "Build wells and water purification systems",
      icon: Droplets,
      impact: "$200 provides clean water access to 25 families",
      urgent: false,
      color: "blue"
    },
    {
      id: "housing",
      name: "Housing & Infrastructure",
      description: "Build schools, clinics, and safe housing",
      icon: Home,
      impact: "$500 helps build classroom infrastructure for 30 students",
      urgent: false,
      color: "purple"
    },
    {
      id: "emergency",
      name: "Emergency Relief",
      description: "Provide immediate aid during crises",
      icon: Heart,
      impact: "$100 provides emergency aid package for family of 5",
      urgent: true,
      color: "red"
    },
    {
      id: "general",
      name: "General Fund",
      description: "Support our most urgent needs across all programs",
      icon: Target,
      impact: "Your donation goes where it's needed most",
      urgent: false,
      color: "gray"
    }
  ];

  const predefinedAmounts = [
    { amount: "25", impact: "Provides meals for 5 children for a week" },
    { amount: "50", impact: "Supplies school materials for 5 children" },
    { amount: "100", impact: "Funds a child's education for a month" },
    { amount: "250", impact: "Supports a mobile clinic visit to rural area" },
    { amount: "500", impact: "Provides water access to 10 families" },
    { amount: "1000", impact: "Builds classroom furniture for 30 students" }
  ];

  const impactStats = [
    { number: "$2.5M", label: "Total Donations Received" },
    { number: "15,000+", label: "Lives Directly Impacted" },
    { number: "98%", label: "Funds Go to Programs" },
    { number: "50+", label: "Community Projects Funded" },
  ];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment through Stripe/PayPal
    alert(`Thank you for your ${donationType === 'monthly' ? 'monthly' : 'one-time'} donation of $${donationAmount}! Your contribution will make a real difference.`);
    
    // Reset form
    setDonorInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      anonymous: false,
      newsletter: true,
    });
  };

  const selectedCause = donationCauses.find(cause => cause.id === donationCause);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-br from-charity-green-500 to-charity-orange-600 relative">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Make a Donation
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Every donation, no matter the size, creates lasting change in the lives
                of children and communities across Tanzania.
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
                Your Donations in Action
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                See how your generosity directly translates into real impact
                in communities across Tanzania.
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
                <div className="text-center p-6 bg-charity-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-charity-green-600 mb-2">
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

      {/* Main Donation Form */}
      <section className="py-20 bg-charity-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-charity-neutral-800 mb-6">
                  Make Your Donation
                </h3>
                
                <form onSubmit={handleDonation} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-charity-neutral-700 mb-3">
                      Donation Type *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`p-3 rounded-lg border-2 transition-colors duration-200 ${
                          donationType === "one-time"
                            ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                            : "border-charity-neutral-300 hover:border-charity-green-300"
                        }`}
                      >
                        One-time Donation
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`p-3 rounded-lg border-2 transition-colors duration-200 ${
                          donationType === "monthly"
                            ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                            : "border-charity-neutral-300 hover:border-charity-green-300"
                        }`}
                      >
                        Monthly Giving
                      </button>
                    </div>
                  </div>

                  {/* Donation Amount */}
                  <div>
                    <label className="block text-sm font-medium text-charity-neutral-700 mb-3">
                      Donation Amount *
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {predefinedAmounts.map((preset) => (
                        <button
                          key={preset.amount}
                          type="button"
                          onClick={() => setDonationAmount(preset.amount)}
                          className={`p-3 rounded-lg border text-center transition-colors duration-200 ${
                            donationAmount === preset.amount
                              ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                              : "border-charity-neutral-300 hover:border-charity-green-300"
                          }`}
                        >
                          ${preset.amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charity-neutral-400" />
                      <input
                        type="number"
                        min="5"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                        placeholder="Enter custom amount"
                      />
                    </div>
                  </div>

                  {/* Donation Cause */}
                  <div>
                    <label className="block text-sm font-medium text-charity-neutral-700 mb-3">
                      Choose a Cause *
                    </label>
                    <select
                      value={donationCause}
                      onChange={(e) => setDonationCause(e.target.value)}
                      className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                    >
                      {donationCauses.map((cause) => (
                        <option key={cause.id} value={cause.id}>
                          {cause.name} {cause.urgent ? "(Urgent Need)" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-charity-neutral-800">
                      Donor Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={donorInfo.name}
                          onChange={(e) => setDonorInfo(prev => ({...prev, name: e.target.value}))}
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
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo(prev => ({...prev, email: e.target.value}))}
                          className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charity-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo(prev => ({...prev, phone: e.target.value}))}
                        className="w-full px-4 py-3 border border-charity-neutral-300 rounded-lg focus:ring-2 focus:ring-charity-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={donorInfo.anonymous}
                          onChange={(e) => setDonorInfo(prev => ({...prev, anonymous: e.target.checked}))}
                          className="rounded border-charity-neutral-300 text-charity-green-600 focus:ring-charity-green-500"
                        />
                        <span className="text-sm text-charity-neutral-700">Make this donation anonymous</span>
                      </label>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={donorInfo.newsletter}
                          onChange={(e) => setDonorInfo(prev => ({...prev, newsletter: e.target.checked}))}
                          className="rounded border-charity-neutral-300 text-charity-green-600 focus:ring-charity-green-500"
                        />
                        <span className="text-sm text-charity-neutral-700">Subscribe to our newsletter for updates</span>
                      </label>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-charity-neutral-700 mb-3">
                      Payment Method *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-3 rounded-lg border-2 transition-colors duration-200 flex items-center justify-center ${
                          paymentMethod === "card"
                            ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                            : "border-charity-neutral-300 hover:border-charity-green-300"
                        }`}
                      >
                        <CreditCard className="h-5 w-5 mr-2" />
                        Credit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("paypal")}
                        className={`p-3 rounded-lg border-2 transition-colors duration-200 flex items-center justify-center ${
                          paymentMethod === "paypal"
                            ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                            : "border-charity-neutral-300 hover:border-charity-green-300"
                        }`}
                      >
                        PayPal
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("bank")}
                        className={`p-3 rounded-lg border-2 transition-colors duration-200 flex items-center justify-center ${
                          paymentMethod === "bank"
                            ? "border-charity-green-500 bg-charity-green-50 text-charity-green-700"
                            : "border-charity-neutral-300 hover:border-charity-green-300"
                        }`}
                      >
                        Bank Transfer
                      </button>
                    </div>
                  </div>

                  <div className="bg-charity-green-50 p-4 rounded-lg flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-charity-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-charity-green-800">
                      <strong>Secure Payment:</strong> All transactions are encrypted and secure. 
                      We never store your payment information.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-charity-green-600 hover:bg-charity-green-700 text-white rounded-lg transition-colors duration-200 font-bold text-lg"
                  >
                    Donate ${donationAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Impact Preview */}
            <AnimatedSection animation="slideRight">
              <div className="space-y-8">
                {/* Selected Cause Impact */}
                {selectedCause && (
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <selectedCause.icon className={`h-8 w-8 mr-3 text-charity-${selectedCause.color}-600`} />
                      <div>
                        <h3 className="text-xl font-bold text-charity-neutral-800">
                          {selectedCause.name}
                        </h3>
                        {selectedCause.urgent && (
                          <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                            Urgent Need
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-charity-neutral-600 mb-4">
                      {selectedCause.description}
                    </p>
                    
                    <div className="bg-charity-neutral-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-charity-neutral-800 mb-2">
                        Your Impact: ${donationAmount}
                      </h4>
                      <p className="text-charity-neutral-600 text-sm">
                        {selectedCause.impact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-charity-neutral-800 mb-6">
                    Why Donate With Us?
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: Award,
                        title: "Transparency",
                        description: "98% of donations go directly to programs"
                      },
                      {
                        icon: Users,
                        title: "Proven Impact",
                        description: "15,000+ lives improved through our work"
                      },
                      {
                        icon: Shield,
                        title: "Secure & Safe",
                        description: "Bank-level security for all transactions"
                      },
                      {
                        icon: Star,
                        title: "Regular Updates",
                        description: "See exactly how your donation is used"
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <feature.icon className="h-5 w-5 text-charity-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-charity-neutral-800">
                            {feature.title}
                          </h4>
                          <p className="text-charity-neutral-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Ways to Help */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-charity-neutral-800 mb-6">
                    Other Ways to Help
                  </h3>
                  
                  <div className="space-y-4">
                    <Link
                      to="/sponsor"
                      className="block p-4 border border-charity-neutral-200 rounded-lg hover:border-charity-orange-300 hover:bg-charity-orange-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-charity-neutral-800">
                            Sponsor a Child
                          </h4>
                          <p className="text-charity-neutral-600 text-sm">
                            Create a personal connection with a child
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-charity-orange-600" />
                      </div>
                    </Link>
                    
                    <Link
                      to="/get-involved/volunteer"
                      className="block p-4 border border-charity-neutral-200 rounded-lg hover:border-charity-green-300 hover:bg-charity-green-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-charity-neutral-800">
                            Volunteer
                          </h4>
                          <p className="text-charity-neutral-600 text-sm">
                            Give your time and skills
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-charity-green-600" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Donation Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Recent Donation Impact
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                See how recent donations have made a real difference in our
                communities and the lives of children we serve.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: "$500",
                impact: "Built new classroom furniture for 30 students at Mwanza Primary School",
                date: "Last Month",
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              },
              {
                amount: "$1,200",
                impact: "Funded mobile clinic that served 150 patients in remote villages",
                date: "This Month", 
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              },
              {
                amount: "$800",
                impact: "Provided clean water access to 40 families through new well installation",
                date: "Last Week",
                image: "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png"
              }
            ].map((story, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white border border-charity-neutral-200 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={story.image}
                    alt="Donation Impact"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-charity-green-600">
                        {story.amount}
                      </span>
                      <span className="text-sm text-charity-neutral-500">
                        {story.date}
                      </span>
                    </div>
                    <p className="text-charity-neutral-700">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charity-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Every Dollar Makes a Difference
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Your donation, whether large or small, creates ripples of positive
                change that extend far beyond what you might imagine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-3 bg-white text-charity-green-600 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Now
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-charity-green-600 rounded-lg font-bold transition-colors duration-200"
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

export default Donate;
