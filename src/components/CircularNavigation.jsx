"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const CircularNavigation = () => {
  const [activeSection, setActiveSection] = useState("landing");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      { id: "landing", element: document.getElementById("landing") },
      { id: "about", element: document.getElementById("about") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "experience", element: document.getElementById("experience") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") },
    ];

    // Lower threshold to ensure sections are detected more easily
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Reduced from 0.6 to 0.3
    };

    const observerCallback = (entries) => {
      // Find the most visible section
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // If multiple sections are visible, use the one with the highest intersection ratio
        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Log which sections are being observed (helpful for debugging)
    sections.forEach(({ id, element }) => {
      if (element) {
        observer.observe(element);
        console.log(`Observing section: ${id}`);
      } else {
        console.warn(`Section element not found: ${id}`);
      }
    });

    return () => {
      sections.forEach(({ element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after clicking
      if (window.innerWidth < 768) {
        setMobileMenuOpen(false);
      }
    }
  };

  const navItems = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2  bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
        aria-label="Toggle navigation menu"
      >
        <Menu
          className={`h-6 w-6 text-purple-500 ${
            mobileMenuOpen ? "rotate-90" : ""
          } transition-transform duration-300`}
        />
      </button>

      {/* Navigation menu */}
      <nav
        className={`fixed z-40 transition-all duration-300 ease-in-out
        ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "md:opacity-100 md:visible opacity-0 invisible"
        }
        md:top-8 md:right-8
        top-0 right-0 left-0
        md:w-auto md:h-auto
        ${mobileMenuOpen ? "h-auto pt-16 pb-6" : "h-0"}
        md:bg-transparent
        bg-gray-900/95 backdrop-blur-sm md:backdrop-blur-none
        md:shadow-none shadow-lg
      `}
      >
        <ul
          className={`
          md:flex  md:items-end md:gap-6
          flex flex-row flex-wrap justify-end  gap-4 px-4
        `}
        >
          {navItems.map((item) => (
            <li key={item.id} className="md:w-auto w-1/3 min-w-[100px]">
              <button
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center md:gap-3 gap-2 transition-all duration-300 w-full md:justify-end justify-center"
                aria-label={`Navigate to ${item.label} section`}
              >
                <span
                  className={`md:text-lg text-sm font-medium md:text-right text-center transition-colors ${
                    activeSection === item.id
                      ? "text-purple-500"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
                <div
                  className={`md:w-5 md:h-5 w-3 h-3 rounded-full border-2 md:border-3 transition-all duration-300 ${
                    activeSection === item.id
                      ? "md:w-6 md:h-6 w-4 h-4 bg-purple-500 border-purple-500"
                      : "border-gray-400 group-hover:border-purple-300"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CircularNavigation;
