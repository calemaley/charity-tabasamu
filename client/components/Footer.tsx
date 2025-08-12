import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  useEffect(() => {
    // Only initialize once
    const map = L.map("kenyaMiniMap", {
      center: [-1.2921, 36.8219], // Nairobi, Kenya
      zoom: 6,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    L.marker([-1.2921, 36.8219])
      .addTo(map)
      .bindPopup("<b>Nairobi</b><br>Capital of Kenya");
  }, []);

  return (
    <footer className="bg-charity-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F1c5373d728e64db5ab1f1f166fe14982?format=webp&width=800"
              alt="Tabasamu Logo"
              className="h-16 w-auto"
            />
            <p className="text-charity-neutral-300 text-sm leading-relaxed">
              Tabasamu Charity is dedicated to improving the lives of children
              and communities through education, healthcare, and sustainable
              development programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-charity-orange-600 rounded-full hover:bg-charity-orange-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-charity-orange-600 rounded-full hover:bg-charity-orange-700 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-charity-orange-600 rounded-full hover:bg-charity-orange-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved/volunteer"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved/donate"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/programs/schools"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  School Volunteering
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/hospitals"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Hospital Internships
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved/sponsor"
                  className="text-charity-neutral-300 hover:text-charity-orange-400 transition-colors duration-200"
                >
                  Child Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Real Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-charity-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-charity-neutral-300 text-sm">
                  123 Charity Street
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-charity-orange-400 flex-shrink-0" />
                <p className="text-charity-neutral-300 text-sm">
                  +254 700 123 456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-charity-orange-400 flex-shrink-0" />
                <p className="text-charity-neutral-300 text-sm">
                  info@tabasamu.org
                </p>
              </div>
            </div>

            {/* Interactive Mini Map */}
            <div className="relative group">
              <h4 className="text-sm font-semibold text-charity-neutral-200 mb-2">
                Find Us
              </h4>
              <div
                id="kenyaMiniMap"
                className="w-full h-32 rounded-lg overflow-hidden border border-charity-neutral-600"
              ></div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-charity-neutral-700">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-charity-neutral-300 mb-4">
              Subscribe to our newsletter to receive the latest updates about
              our programs and impact.
            </p>
            <div className="max-w-md mx-auto flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-charity-neutral-700 border border-charity-neutral-600 rounded-lg text-white placeholder-charity-neutral-400 focus:outline-none focus:ring-2 focus:ring-charity-orange-500"
              />
              <button className="px-6 py-2 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-charity-neutral-700 text-center">
          <p className="text-charity-neutral-400 text-sm">
            © {new Date().getFullYear()} Tabasamu Charity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
