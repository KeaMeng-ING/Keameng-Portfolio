"use client";

import { useEffect, useState } from "react";

const CircularNavigation = () => {
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const sections = [
      { id: "landing", element: document.getElementById("landing") },
      { id: "about", element: document.getElementById("about") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "experience", element: document.getElementById("experience") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(({ element }) => {
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
    <nav className="fixed top-8 right-8 z-50">
      <ul className="flex flex-col items-end gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3 transition-all duration-300"
              aria-label={`Navigate to ${item.label} section`}
            >
              <span
                className={`text-lg font-medium text-right transition-colors ${
                  activeSection === item.id
                    ? "text-purple-500"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
              <div
                className={`w-5 h-5 rounded-full border-3 transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-6 h-6 bg-purple-500 border-purple-500"
                    : "border-gray-400 group-hover:border-purple-300"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CircularNavigation;
