import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/image/D9351D23-6697-4DD2-AB7E-8477491E4BB2.png';

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
    textDecorationColor: '#3b82f6', // blue-500
    textDecorationThickness: '2px',
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={logo} alt="Aplaka2 Logo" className="h-10 w-auto" />
              <span className="font-bold text-2xl tracking-tight text-gray-800">Aplaka2</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-300"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
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