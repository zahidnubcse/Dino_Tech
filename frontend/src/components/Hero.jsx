import Navbar from "./Navbar";
import { Search } from "lucide-react";
import ellipse7 from "../assets/Ellipse 7.png";
import image1 from "../assets/Image (1).png";

export default function HeroBg({ children }) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#0038E0",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "-1px -1px",
      }}
    >
      <Navbar />

      {/* Hero Content */}
      <div className="mt-20 flex flex-col gap-4">
        <h1 className="mx-auto max-w-[700px] text-center text-6xl font-bold text-white">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mx-auto mt-6 max-w-[750px] text-center text-white">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-6 flex w-full max-w-[650px] items-center gap-3">
          <div className="flex flex-1 items-center rounded-full bg-white px-5 shadow-lg">
            <Search
              size={18}
              className="mr-3 shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent py-4 text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="button"
            className="rounded-full bg-[#D4FB20] px-8 py-4 font-semibold text-gray-800 shadow-lg transition hover:bg-gray-100"
          >
            Search
          </button>
        </div>

        {/* Images */}
        <div className="relative mx-auto mt-10 flex w-full max-w-[700px] justify-center">
  {/* Ellipse Background */}
  <img
    src={ellipse7}
    alt="Ellipse"
    className="h-auto w-[700px] max-w-full"
  />

  {/* Image 1 - Slightly Right */}
  <img
    src={image1}
    alt="Course"
    className="absolute left-1/2 top-1/2 h-auto w-[430px] -translate-x-[45%] -translate-y-1/2"
  />
</div>
      </div>

      {children}
    </section>
  );
}