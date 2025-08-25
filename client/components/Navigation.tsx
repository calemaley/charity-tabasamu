import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    {
      label: "About",
      href: "/about",
      icon: Users,
    },
    {
      label: "Programs",
      href: "/programs",
      icon: GraduationCap,
      subItems: [
        { label: "Volunteering in Schools", href: "/programs/schools" },
        { label: "Internship in Hospitals", href: "/programs/hospitals" },
      ],
    },
    {
      label: "Get Involved",
      href: "/get-involved",
      icon: Heart,
      subItems: [
        { label: "Sponsor a Child", href: "/get-involved/sponsor" },
        { label: "Donate Now", href: "/get-involved/donate" },
        { label: "Volunteer", href: "/get-involved/volunteer" },
      ],
    },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Contact Us", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F1c5373d728e64db5ab1f1f166fe14982?format=webp&width=800"
                alt="Tabasamu Logo"
                className="h-36 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className="flex items-center space-x-1.5 text-white hover:text-charity-orange-200 transition-all duration-300 font-medium px-2 py-1.5 rounded-lg hover:bg-white/10 group"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <IconComponent className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-sm">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-all duration-200",
                            activeDropdown === item.label
                              ? "rotate-180 text-charity-orange-200"
                              : "group-hover:rotate-12",
                          )}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-3 text-charity-neutral-600 hover:text-charity-orange-600 hover:bg-charity-orange-50 hover:translate-x-1 transition-all duration-200 mx-2 rounded-lg"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1.5 text-white hover:text-charity-orange-200 transition-all duration-300 font-medium px-2 py-1.5 rounded-lg hover:bg-white/10 group"
                    >
                      <IconComponent className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-sm">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-charity-orange-200 hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label}>
                    {item.subItems ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full text-left text-charity-neutral-700 hover:text-charity-orange-600 transition-all duration-200 font-medium px-3 py-2 rounded-lg hover:bg-charity-orange-50"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          <div className="flex items-center space-x-2">
                            <IconComponent className="h-4 w-4" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              activeDropdown === item.label && "rotate-180",
                            )}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="mt-2 pl-8 space-y-1 animate-in slide-in-from-top-1 duration-200">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block text-charity-neutral-600 hover:text-charity-orange-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-charity-orange-50"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-2 text-charity-neutral-700 hover:text-charity-orange-600 transition-all duration-200 font-medium px-3 py-2 rounded-lg hover:bg-charity-orange-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
