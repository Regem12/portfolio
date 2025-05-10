// src/components/Navbar.tsx
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icons
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the menu toggle
  const menuRef = useRef<HTMLUListElement | null>(null); 
  const sectionIds = ["hero", "about", "projects", "contact"];
const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        
        <a href = "#hero" className="text-xl font-bold text-blue-600">Regem</a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-md font-medium text-gray-700 dark:text-gray-200 relative">
  {navLinks.map((link) => {
    const targetId = link.href.replace("#", "");
    const isActive = activeSection === targetId;

    return (
      <li key={link.href} className="relative group">
        <a
  href={link.href}
  className={`transition-colors duration-200 hover:text-blue-500 ${
    isActive ? "text-blue-600 font-semibold" : ""
  }`}
>
          {link.label}
        </a>

        <AnimatePresence>
          {isActive && (
            <motion.span
              key={link.href}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-blue-500"
            />
          )}
        </AnimatePresence>
      </li>
    );
  })}
</ul>


        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Links with Animation */}
        <motion.ul
          ref={menuRef}
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-15 right-0 w-full bg-white/90 dark:bg-gray-800 py-6 px-6 flex flex-col gap-6 md:hidden ${
            scrolled
              ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur"
              : "bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)} // Close menu after clicking
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
