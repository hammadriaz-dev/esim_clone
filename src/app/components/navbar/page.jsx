import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  // This state will simulate the user's logged-in status.
  // In a real application, you'd get this from an authentication context or a global state management library.
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to 'true' for demonstration purposes

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">
      {children}
    </a>
  );

  const AccountDropdown = () => (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="py-2">
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          Manage eSIM
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          Profile
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          Refill
        </a>
        <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors duration-200" onClick={() => { setIsLoggedIn(false); setIsAccountDropdownOpen(false); }}>
          Log Out
        </a>
      </div>
    </div>
  );

  return (
    <nav className="relative bg-white  font-sans">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and branding */}
        <div className="flex items-center space-x-2">
          <img src="/assets/icons/rectangle.jpeg" alt="logo" width={24} height={24} />
          <span className="text-gray-800 text-2xl font-bold">eSIM White Label</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Main Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Buy eSIM</NavLink>
            <div className="flex items-center space-x-2">
              <NavLink href="#">About Us</NavLink>
              <div className="relative cursor-pointer p-2 border border-gray-300 rounded-full">
                {/* Cart icon with a badge */}
                <img
                  src="/assets/icons/cart.jpeg"
                  alt="Cart"
                />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  1
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons and Language Selector */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                  className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Account</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isAccountDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isAccountDropdownOpen && <AccountDropdown />}
              </div>
            ) : (
              <>
                <button className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200">
                  Register
                </button>
                <button className="px-5 py-2 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition-colors duration-200" onClick={() => setIsLoggedIn(true)}>
                  Log in
                </button>
              </>
            )}
            <div className="relative">
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-full text-gray-700 font-medium">
                <img src="/assets/icons/unitedstates.png" alt="US Flag" width={24} height={24} className="rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => { setIsMenuOpen(!isMenuOpen); setIsAccountDropdownOpen(false); }}
            className="text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out transform z-10
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Buy eSIM</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          <div className="relative cursor-pointer p-2 border border-gray-300 rounded-full">
            <img
              src="/assets/icons/cart.jpeg"
              alt="Cart"
            />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              1
            </span>
          </div>

          {isLoggedIn ? (
            <div className="relative w-full text-center">
              <button
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                className="px-5 py-2 w-4/5 border border-gray-300 rounded-full text-gray-700 font-medium flex justify-center items-center space-x-2 mx-auto"
              >
                <span>Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isAccountDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isAccountDropdownOpen && <AccountDropdown />}
            </div>
          ) : (
            <>
              <button className="px-5 py-2 w-4/5 border border-gray-300 rounded-full text-gray-700 font-medium">
                Register
              </button>
              <button className="px-5 py-2 w-4/5 bg-orange-500 rounded-full text-white font-medium" onClick={() => setIsLoggedIn(true)}>
                Log in
              </button>
            </>
          )}

          <div className="flex items-center space-x-2 py-2">
            <img src="/assets/icons/unitedstates.png" alt="US Flag" width={24} height={24} className="rounded-full" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;