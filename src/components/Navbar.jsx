// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">Abdus Samad</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-gray-800 dark:text-gray-200 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
