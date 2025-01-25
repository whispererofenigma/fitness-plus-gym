import React, { useEffect, useState } from "react";  // Corrected import statement
import { Link, useLocation } from "react-router-dom";
import Navlogo from '../images/logo.jpg';

const Navbar = () => {
  // Navigation items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/contact" },
    { label: "Contact Us", path: "/blog" },
  ];

  // Get the current route
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';  // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto';  // Re-enable scrolling
    };
  });

  return (
    <div>
      <nav className=" p-[2vw]  w-[100vw] absolute flex justify-between items-center">

        <img src={Navlogo} alt="Logo" className="object-cover object-center h-12 md:h-14 rounded-full" />

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-white text-lg px-3 py-2 transition ${location.pathname === item.path
                  ? "border-b-4 border-[#a2ff00]"
                  : "hover:border-b-4 border-white"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* For mobile view */}


        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#a2ff00]">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden text-white w-screen absolute z-1 justify-center gap-10 text-xl py-14 h-screen bg-transparent backdrop-brightness-50 backdrop-blur-xl top-0 left-0 flex flex-col items-center">
            <img src={Navlogo} alt="Logo" className="object-cover object-center absolute top-0 left-0 m-[2vw] h-12 rounded-full" />
            <button onClick={toggleMenu} className="absolute top-0 right-0 m-[2vw]">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {navItems.map((item, index) => (item.path !== location.pathname && (
              <Link key={index} to={item.path} className="border rounded-full w-4/5 p-2 text-center border-white/20 shadow-2xl shadow-[#a2ff00]">
                {item.label}
              </Link>
            )))}

          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;