
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Header_Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-transparent">
      <div className="mx-auto flex h-[66px] max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="ByteSpace"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-[15px] text-white transition-opacity hover:opacity-70"
          >
            Home
          </a>

          <a
            href="#courses"
            className="text-[15px] text-white transition-opacity hover:opacity-70"
          >
            Courses
          </a>

          <a
            href="#creators"
            className="text-[15px] text-white transition-opacity hover:opacity-70"
          >
            Creators
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#signin"
            className="text-[15px] text-white transition-opacity hover:opacity-70"
          >
            Sign In
          </a>

          <a
            href="#join"
            className="text-[15px] text-white transition-opacity hover:opacity-70"
          >
            Join Us
          </a>

          <button
            type="button"
            className="text-white transition-opacity hover:opacity-70"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={15} strokeWidth={1.7} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0038E0]/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Home
            </a>

            <a
              href="#courses"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Courses
            </a>

            <a
              href="#creators"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Creators
            </a>

            <div className="h-px bg-white/10" />

            <a
              href="#signin"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Sign In
            </a>

            <a
              href="#join"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Join Us
            </a>

            <button
              type="button"
              className="flex items-center gap-2 text-sm text-white"
            >
              <ShoppingBag size={15} strokeWidth={1.7} />
              Shopping Bag
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
