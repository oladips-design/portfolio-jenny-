import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const navLinks = [
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Service",
      link: "/service",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:visible invisible">
            <a href="/" className="text-white">
              Portfolio
            </a>
          </div>
          {/* Navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-700 link-text hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only"> Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
