
import React from "react";
import footerlogo from '../assets/Vector.png'

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 text-black sm:px-6 md:px-8 md:py-16 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:gap-16 lg:grid-cols-6">
        <div className="space-y-6 lg:col-span-3">
          {/* Logo */}
          <a href="/" className="inline-block">
             <div className="flex gap-1">
                <img src={footerlogo} alt="" />
                 <h1 className="font-bold text-3xl flex justify-center items-center">ByteSpace</h1>
             </div>
          </a>

          {/* Newsletter Text */}
          <p className="text-sm text-black md:text-base">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>

          {/* Newsletter */}
          <form className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-full border border-black/10 bg-gray-50 px-3 py-3 text-sm text-black outline-none placeholder:text-sm placeholder:font-light placeholder:text-black/40 focus:border-black/20 focus:ring-1 focus:ring-gray-300 sm:max-w-xs sm:flex-1"
            />

            <button
              type="submit"
              className="rounded-full border border-[#85a805] bg-[#c8ff00] px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#79980a]"
            >
              Search
            </button>
          </form>
        </div>

        {/* ==================== FOOTER LINKS ==================== */}
        <div className="grid grid-cols-2 items-start gap-8 md:grid-cols-3 md:gap-12 lg:col-span-3 lg:gap-20">
          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black md:mb-6">
              Products
            </h3>

            <ul className="space-y-3 text-sm text-black/60 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Components
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Templates
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Icons
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black md:mb-6">
              Resources
            </h3>

            <ul className="space-y-3 text-sm text-black/60 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  PrebuiltUI
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Templates
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Components
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Blogs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-black md:mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-black/60 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Vision
                </a>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Careers
                </a>

                <span className="rounded-full border border-green-600 bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
                  HIRING
                </span>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Privacy policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-black"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM SECTION ==================== */}
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-black/10 pt-6 md:mt-16 md:flex-row">
        {/* Copyright */}
        <p className="order-2 text-xs text-black/50 sm:text-sm md:order-1">
          © 2025 Bytespace. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="order-1 flex items-center gap-5 md:order-2 md:gap-6">
          {/* X / Twitter */}
          <a
            href="#"
            aria-label="Twitter"
            className="text-black transition-colors duration-200 hover:text-black/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="#"
            aria-label="GitHub"
            className="text-black transition-colors duration-200 hover:text-black/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-black transition-colors duration-200 hover:text-black/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="text-black transition-colors duration-200 hover:text-black/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-black transition-colors duration-200 hover:text-black/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
              />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line
                x1="17.5"
                x2="17.51"
                y1="6.5"
                y2="6.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
