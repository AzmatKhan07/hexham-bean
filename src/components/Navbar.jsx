import { MessageSquareDot } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 py-3 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link className="text-2xl font-bold text-primary uppercase" to="/">
          <img className="w-20" src="/project_logo.png" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <li className="text-neutral-600">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/menu-pricing">Prices</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/opening-hours">Opening Hours</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="text-neutral-600">
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/441416112872"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-3 items-center bg-primary text-black rounded-full px-8 py-3 font-semibold">
              <MessageSquareDot /> 0141 611 2872
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li className="text-neutral-600">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="text-neutral-600">
              <NavLink
                to="/menu-pricing"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prices
              </NavLink>
            </li>
            <li className="text-neutral-600">
              <NavLink
                to="/opening-hours"
                onClick={() => setMobileMenuOpen(false)}
              >
                Opening Hours
              </NavLink>
            </li>

            <li className="text-neutral-600">
              <NavLink to="/menu" onClick={() => setMobileMenuOpen(false)}>
                Menu
              </NavLink>
            </li>
            <li className="text-neutral-600">
              <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>
                gallery
              </NavLink>
            </li>

            <li className="text-neutral-600">
              <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
                services
              </NavLink>
            </li>
            <li className="text-neutral-600">
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="https://wa.me/441416112872"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-3 items-center justify-center bg-primary text-black rounded-full px-8 py-3 font-semibold w-full">
                <MessageSquareDot /> 0141 611 2872
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
