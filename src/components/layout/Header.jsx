import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/services', label: 'خدماتنا' },
    { path: '/contact', label: 'اتصل بنا' },
    { path: '/news', label: 'الأخبار' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12 md:h-14 lg:h-16">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <div className="flex items-center">
              <img
  src="/images/logo/logo_resala.jpg"
  alt="رسالة أبوحماد"
  className="h-12 md:h-16 lg:h-20 rounded-full mr-2"
/>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  رسالة أبوحماد
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-reverse space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative py-1 px-1 text-sm xl:text-base font-medium transition-colors duration-300 ${
                      location.pathname === item.path ? 'text-[var(--gradient-start)]' : 'text-gray-800'
                    } hover:text-[var(--gradient-start)]`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] transform transition-transform duration-300 origin-right ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`} />
                  </Link>
                </li>
              ))}
              <div className="flex space-x-reverse space-x-2 xl:space-x-4 mr-2">
                <div>
                  <Link to="/volunteer" className="btn-primary px-2 py-1 md:px-3 md:py-2 text-xs">
                    تطوع معنا
                  </Link>
                </div>
                <div>
                  <Link to="/donate" className="btn-secondary px-2 py-1 md:px-3 md:py-2 text-xs">
                    تبرع الآن
                  </Link>
                </div>
              </div>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg text-gray-800">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Separate from header */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]">
          <div className="h-full flex flex-col">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
              >
                <FaTimes className="text-white text-lg" />
              </button>
            </div>
            
            {/* Menu items */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <ul className="space-y-6 w-full px-8">
                {navItems.map((item) => (
                  <li key={item.path} className="text-center">
                    <Link
                      to={item.path}
                      className={`block text-white text-xl font-medium py-2 ${
                        location.pathname === item.path ? 'bg-white/20 rounded-lg' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Action buttons */}
            <div className="p-6 space-y-3">
              <Link 
                to="/volunteer" 
                className="block w-full py-3 rounded-full bg-white text-[var(--gradient-start)] font-bold text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تطوع معنا
              </Link>
              <Link 
                to="/donate" 
                className="block w-full py-3 rounded-full bg-transparent border-2 border-white text-white font-bold text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تبرع الآن
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
