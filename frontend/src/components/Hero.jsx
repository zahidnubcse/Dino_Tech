import Navbar from "./Navbar";
import { Search, ArrowUpRight } from "lucide-react";

import ellipse7 from "../assets/Ellipse 7.png";
import image1 from "../assets/Image (1).png";

import cone from "../assets/Cone.png";
import cone1 from "../assets/cone_1.png";
import spring1 from "../assets/spring_1.png";
import spring2 from "../assets/spring_2.png";

export default function HeroBg({ children }) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pb-16"
      style={{
        backgroundColor: "#0038E0",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "-1px -1px",
      }}
    >
      <Navbar />

      {/* Top decorations */}
      <img
        src={cone}
        alt=""
        className="pointer-events-none absolute left-[5%] top-[20%] w-[65px] rotate-[-20deg] sm:left-[8%] sm:w-[90px] lg:left-[11%] lg:top-[24%] lg:w-[125px]"
      />

      <img
        src={cone1}
        alt=""
        className="pointer-events-none absolute right-[5%] top-[21%] w-[60px] rotate-[18deg] sm:right-[8%] sm:w-[85px] lg:right-[11%] lg:top-[25%] lg:w-[120px]"
      />

      {/* Side decorations */}
      <img
        src={spring1}
        alt=""
        className="pointer-events-none absolute left-[1%] top-[43%] w-[55px] rotate-[-15deg] sm:left-[4%] sm:w-[75px] lg:left-[8%] lg:top-[48%] lg:w-[105px]"
      />

      <img
        src={spring2}
        alt=""
        className="pointer-events-none absolute right-[1%] top-[44%] w-[55px] rotate-[15deg] sm:right-[4%] sm:w-[75px] lg:right-[8%] lg:top-[49%] lg:w-[105px]"
      />

      {/* Extra decorations */}
      <img
        src={cone1}
        alt=""
        className="pointer-events-none absolute bottom-[15%] left-[12%] hidden w-[45px] rotate-[-28deg] lg:block"
      />

      <img
        src={cone}
        alt=""
        className="pointer-events-none absolute bottom-[13%] right-[12%] hidden w-[50px] rotate-[25deg] lg:block"
      />

      <img
        src={spring2}
        alt=""
        className="pointer-events-none absolute bottom-[3%] left-[25%] hidden w-[70px] rotate-[-18deg] lg:block"
      />

      <img
        src={spring1}
        alt=""
        className="pointer-events-none absolute bottom-[4%] right-[25%] hidden w-[65px] rotate-[20deg] lg:block"
      />

      {/* Hero */}
      <div className="relative z-10 mt-16 flex flex-col gap-4 px-4 sm:mt-20">
        <h1 className="mx-auto max-w-[700px] text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mx-auto mt-4 max-w-[750px] text-center text-sm leading-6 text-white sm:mt-6 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses
        </p>

        {/* Search */}
        <div className="mx-auto mt-5 flex w-full max-w-[650px] flex-col gap-3 sm:mt-6 sm:flex-row">
          <div className="flex flex-1 items-center rounded-full bg-white px-5 shadow-lg">
            <Search
              size={18}
              className="mr-3 shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent py-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>

          <button
            type="button"
            className="rounded-full bg-[#D4FB20] px-8 py-4 font-semibold text-gray-800 shadow-lg transition hover:bg-gray-100 sm:min-w-[120px]"
          >
            Search
          </button>
        </div>

        {/* Main visual */}
        <div className="relative mx-auto mt-8 flex w-full max-w-[850px] justify-center sm:mt-10">
          {/* CTA */}
          <div className="absolute left-0 top-[25%] z-20 hidden -rotate-[-6deg] rounded-[20px] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)] sm:block lg:left-[2%]">
            <button
              type="button"
              className="group flex items-center gap-3 rounded-[14px] bg-[#0038E0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#002fc0]"
            >
              <span>Start Learning</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4FB20] text-[#0038E0] transition group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* Percentage Card */}
          <div className="absolute right-0 top-[8%] z-20 hidden rotate-[6deg] rounded-[20px] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)] sm:block lg:right-[2%]">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[11px] font-medium text-gray-400">
                  Course Completion
                </p>

                <p className="mt-1 text-[34px] font-bold leading-none text-[#0038E0]">
                  85%
                </p>
              </div>

              <div className="relative h-12 w-12">
                <svg
                  className="h-12 w-12 -rotate-90"
                  viewBox="0 0 44 44"
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke="#eeeeee"
                    strokeWidth="4"
                  />

                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke="#D4FB20"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="113"
                    strokeDashoffset="17"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-gray-700">
                  85
                </span>
              </div>
            </div>
          </div>

          {/* Ellipse */}
          <img
            src={ellipse7}
            alt="Ellipse"
            className="h-auto w-[500px] max-w-full sm:w-[600px] lg:w-[700px]"
          />

          {/* Main image */}
          <img
            src={image1}
            alt="Course"
            className="absolute left-1/2 top-1/2 h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 sm:w-[360px] lg:w-[430px]"
          />

          {/* Mobile CTA */}
          <div className="absolute bottom-[-25px] left-1/2 z-20 -translate-x-1/2 sm:hidden">
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-[#D4FB20] px-5 py-3 text-sm font-semibold text-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <span>Start Learning</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0038E0] text-white">
                <ArrowUpRight size={15} />
              </span>
            </button>
          </div>

          {/* Mobile Percentage */}
          <div className="absolute bottom-[15px] right-[2%] z-20 rounded-[14px] bg-white px-3 py-2 shadow-lg sm:hidden">
            <p className="text-[9px] text-gray-400">
              Completion
            </p>

            <p className="text-[22px] font-bold leading-none text-[#0038E0]">
              85%
            </p>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}