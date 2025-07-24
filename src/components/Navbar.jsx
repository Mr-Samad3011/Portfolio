// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="bg-blue-950 shadow-md fixed w-full top-0 z-50 dark:bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Abdus Samad</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-blue-950 px-4 py-2 space-y-2 text-white">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-blue-400 transition"
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
