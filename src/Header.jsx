import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', text: 'Inicio' },
  { to: '/servicios', text: 'Servicios' },
  { to: '/nosotros', text: 'Nosotros' },
  { to: '/proyectos', text: 'Proyectos' },
  { to: '/contacto', text: 'Contacto' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    textDecorationColor: 'white',
    textDecorationThickness: '2px',
  };

  return (
    <header className="bg-green-600/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center justify-center">
              <img src="/image/APLAKA2-NO-BG.png" alt="Aplaka2 Logo" className="h-16 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-green-50 hover:text-white font-medium transition-colors duration-300"
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-50 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 border-t border-green-500" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700"
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;